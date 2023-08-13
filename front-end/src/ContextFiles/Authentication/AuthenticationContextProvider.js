import react, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const AuthenticationContext = createContext(undefined)

const AuthenticationContextProvider = (props) => {

    const navigate = useNavigate()

    const serverLink = 'http://localhost:8080'

    let authenticated = false

    let userDetailsAfterAuthentication = null

    const [packagesDetail, setPackageDetail] = useState(null)

    const [eventDetails, setEventDetails] = useState(null)

    const assignEventDetails = (event) => {

        setEventDetails(event);

    }

    const [eventId, setEventId] = useState(null);

    const assignEventId = (eventId) => {

        setEventId(eventId)

    }

    const authenticateUser = (userType, setAuthenticated, setUserDetailsAfterAuthentication) => {

        authenticated = setAuthenticated;
        userDetailsAfterAuthentication = setUserDetailsAfterAuthentication;

        if (!authenticated) { navigate("/login") }
        else {

            if (userType === 'customer') { if (userDetailsAfterAuthentication.type !== 'customer') { logout(); navigate("/login") } }
            else if (userType === 'admin') { if (userDetailsAfterAuthentication.type !== 'admin') { logout(); navigate("/login") } }
            else if (userType === 'serviceProvider') { if (userDetailsAfterAuthentication.type !== 'serviceProvider') { navigate("/login") } }
            else if (userType === 'advertiser') { if (userDetailsAfterAuthentication.employee.type !== 'advertiser') { navigate("/login") } }

        }

    }

    const customerSignUp = (data) => {

        axios.post(serverLink + '/auth/signup/customer', data).then(

            (response) => {

                console.log(response.data)

                login(data.email, data.password)

            }

        ).catch(

            () => { alert("Error!!! 3") }

        )

    }

    /*Here the username refers the email*/
    const login = (username, password) => {
        axios.post(serverLink + '/auth/login', {email: username, password: password})
            .then((response) => {
                const token = response.data.token;
                storeSessionJWT(username, token);
                authenticated = true;
                getUserDetailsAfterAuthenticated(username);
                console.log(response.data)
                console.log(response.data.token)
                console.log(username)
            })
            .catch((error) => {
                alert("ERROR!!! 1");
                console.log('An error occurred during login.',error);
            });
    }


    const getUserDetailsAfterAuthenticated = (email) => {

        axios.get(serverLink + '/auth/login/' + email).then(

            (response) => {
                authenticated = true;
                userDetailsAfterAuthentication = response.data;
                console.log(response.data)

                if (userDetailsAfterAuthentication.role === 'CUSTOMER') { navigate("/admin", { state: { authenticated, userDetailsAfterAuthentication } }) }
                else if (userDetailsAfterAuthentication.role === 'ADMIN') { navigate("/admin", { state: { authenticated, userDetailsAfterAuthentication } }) }
                else if (userDetailsAfterAuthentication.role === 'SERVICEPROVIDER') { navigate("/serviceProvider", { state: { authenticated, userDetailsAfterAuthentication } }) }
                else if (userDetailsAfterAuthentication.role === 'ADVERTISER') { navigate("/advertiser", { state: { authenticated, userDetailsAfterAuthentication } }) }

            }

        ).catch(

            () => {

                alert("Error!!! 4")

            }

        )

    }

    const setupAxiosInterceptors = (token) => {

        axios.interceptors.request.use(

            (config) => {

                if (authenticated) {

                    config.headers.authorization = token;

                }
                return config;

            }

        )

    }

    const storeSessionJWT = (username, token) => {
        sessionStorage.setItem('authenticatedUser', username);
        setupAxiosInterceptors(createJWTToken(token));
    }

    const createJWTToken = (token) => {
        return 'Bearer ' + token;
    }

    const logout = () => {

        sessionStorage.removeItem('authenticatedUser');
        authenticated = false;
        userDetailsAfterAuthentication = null;
        navigate("/login");
        console.log("Logged out successfully!!!")

    }


    const [contentVisible, setContentVisible] = useState(0)

    const changeContentVisible = (value) => {

        setContentVisible(value)

    }

    const changePackageDetails = (value) => {

        setPackageDetail(value)

    }

    return (

        <AuthenticationContext.Provider value={{ authenticated, authenticateUser, login, customerSignUp, contentVisible, changeContentVisible, logout, packagesDetail, changePackageDetails, userDetailsAfterAuthentication, eventDetails, assignEventDetails, assignEventId, eventId }}>

            {props.children}

        </AuthenticationContext.Provider>

    )

}

export default AuthenticationContextProvider