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

        if (!authenticated) { navigate("/Login") }
        else {

            if (userType === 'customer') { if (userDetailsAfterAuthentication.customer === null) { logout(); navigate("/Login") } }
            else if (userType === 'admin') { if (userDetailsAfterAuthentication.employee.type !== 'admin') { logout(); navigate("/Login") } }
            else if (userType === 'manager') { if (userDetailsAfterAuthentication.employee.type !== 'manager') { navigate("/Login") } }
            else if (userType === 'employee') { if (userDetailsAfterAuthentication.employee.type !== 'photographer' || userDetailsAfterAuthentication.employee.type !== 'videographer' || userDetailsAfterAuthentication.employee.type !== 'editor') { navigate("/Login") } }

        }

    }

    const signUp = (data) => {

        axios.post(serverLink + '/createUser', data).then(

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

        axios.post(

            serverLink + '/authenticate', {
            username,
            password
        }).then(

            (response) => {

                storeSessionJWT(username, response.data.token)
                authenticated = true
                getUserDetailsAfterAuthenticated(username)

            }).catch(

                () => {

                    alert("ERROR!!! 1")

                })

    }

    const getUserDetailsAfterAuthenticated = (email) => {

        axios.get(serverLink + '/getUserDetails/' + email).then(

            (response) => {
                authenticated = true; userDetailsAfterAuthentication = response.data;

                if (userDetailsAfterAuthentication.customer !== null) { navigate("/Customer", { state: { authenticated, userDetailsAfterAuthentication } }) }
                else if (userDetailsAfterAuthentication.employee.type === 'admin') { navigate("/Admin", { state: { authenticated, userDetailsAfterAuthentication } }) }
                else if (userDetailsAfterAuthentication.employee.type === 'manager') { navigate("/Manager", { state: { authenticated, userDetailsAfterAuthentication } }) }
                else if (userDetailsAfterAuthentication.employee.type !== 'photographer' || userDetailsAfterAuthentication.employee.type !== 'videographer' || userDetailsAfterAuthentication.employee.type !== 'editor') { navigate("/Employee", { state: { authenticated, userDetailsAfterAuthentication } }) }

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
        navigate("/Login");

    }

    /*change later*/

    const [contentVisible, setContentVisible] = useState(0)

    const changeContentVisible = (value) => {

        setContentVisible(value)

    }

    const changePackageDetails = (value) => {

        setPackageDetail(value)

    }

    return (

        <AuthenticationContext.Provider value={{ authenticated, authenticateUser, login, signUp, contentVisible, changeContentVisible, logout, packagesDetail, changePackageDetails, userDetailsAfterAuthentication, eventDetails, assignEventDetails, assignEventId, eventId }}>

            {props.children}

        </AuthenticationContext.Provider>

    )

}

export default AuthenticationContextProvider