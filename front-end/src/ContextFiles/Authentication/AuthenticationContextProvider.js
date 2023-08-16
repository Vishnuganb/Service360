import react, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import  Cookies from 'js-cookie'
import { first } from "lodash";
import { First } from "react-bootstrap/esm/PageItem";

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

            if (userType === 'customer') { if (userDetailsAfterAuthentication.role !== 'customer') { logout(); navigate("/login") } }
            else if (userType === 'admin') { if (userDetailsAfterAuthentication.role !== 'admin') { logout(); navigate("/login") } }
            else if (userType === 'serviceProvider') { if (userDetailsAfterAuthentication.role !== 'serviceProvider') { logout(); navigate("/login") } }
            else if (userType === 'advertiser') { if (userDetailsAfterAuthentication.employee.role !== 'advertiser') { logout(); navigate("/login") } }

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

    const serviceProviderSignUp = (data) => {

        axios.post(serverLink + '/auth/signup/serviceprovider', data).then(

            (response) => {

                console.log(response.data)

                login(data.email, data.password)

            }

        ).catch(

            () => { alert("Error!!! 3") }

        )

    }

    const advertiserSignUp = (data) => {

        axios.post(serverLink + '/auth/signup/advertiser', data).then(

            (response) => {

                login(data.email, data.password)

            }

        ).catch(

            () => { alert("Error!!! 3") }

        )

    }

    const login = (username, password) => {
        console.log(username, password)
        axios.post(serverLink + '/auth/login', {email: username, password: password})
            .then((response) => {
                const token = response.data.token;
                storeSessionJWT(username, token);
                authenticated = true;
                getUserDetailsAfterAuthenticated(username);
                console.log(token)
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
                console.log(userDetailsAfterAuthentication)

                Cookies.set('FirstName', userDetailsAfterAuthentication.firstname, { expires: 1 });

                const userName= Cookies.get('FirstName')

                console.log(userName)


                if (userDetailsAfterAuthentication.role === 'CUSTOMER') { navigate("/Customer", { state: { userDetailsAfterAuthentication } }) }
                else if (userDetailsAfterAuthentication.role === 'ADMIN') { navigate("/admin", { state: {userDetailsAfterAuthentication } }) }
                else if (userDetailsAfterAuthentication.role === 'SERVICEPROVIDER') { navigate("/ServiceProvider", { state: { userDetailsAfterAuthentication } }) }
                else if (userDetailsAfterAuthentication.role === 'ADVERTISER') { navigate("/Advertiser", { state: { userDetailsAfterAuthentication } }) }

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
        Cookies.remove('FirstName');
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

        <AuthenticationContext.Provider value={{ authenticated, authenticateUser, login, customerSignUp, advertiserSignUp, serviceProviderSignUp, contentVisible, changeContentVisible, logout, packagesDetail, changePackageDetails, eventDetails, assignEventDetails, assignEventId, eventId }}>

            {props.children}

        </AuthenticationContext.Provider>

    )

}

export default AuthenticationContextProvider