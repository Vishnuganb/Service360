import react, { createContext, useState, useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import axios from "axios";


export const AuthenticationContext = createContext(undefined)

const AuthenticationContextProvider = (props) => {

    const navigate = useNavigate()

    const serverLink = 'http://localhost:8080'

    let authenticated = false

    const customerSignUp = (data) => {

        axios.post(serverLink + '/auth/signup/customer', data).then(

            (response) => {

                console.log(response.data);
                alert("Please verify your email!!!")
                window.location.href = "http://localhost:3000/login"

            }

        ).catch(

            () => { alert("Chcek the credentials for the customers!!!") }

        )

    }

    const serviceProviderSignUp = (data) => {

        const formData = new FormData();
        formData.append('email', data.email);
        formData.append('password', data.password);
        formData.append('firstname', data.firstname);
        formData.append('lastname', data.lastname);
        formData.append('nic', data.nic);
        formData.append('address', data.address);
        formData.append('phonenumber', data.phonenumber);
        formData.append('categories', data.categories);
        formData.append('services', data.services);

        console.log(data.files);

        for (let i = 0; i < data.files.length; i++) {
            formData.append('files', data.files[i]);
        }

        for (const [key, value] of formData.entries()) {
            console.log(`${key}:`, value);
        }

        axios.post(serverLink + '/auth/signup/serviceprovider', formData).then(

            (response) => {

                console.log(response.data);
                alert("Please verify your email!!!")
                window.location.href = "http://localhost:3000/login"

            }

        ).catch(

            () => { alert("Check the Credentials For ServiceProvider!!!") }

        )

    }

    const advertiserSignUp = (data) => {

        const formData = new FormData();
        formData.append('email', data.email);
        formData.append('password', data.password);
        formData.append('firstname', data.firstname);
        formData.append('lastname', data.lastname);
        formData.append('nic', data.nic);
        formData.append('address', data.address);
        formData.append('phonenumber', data.phonenumber);
        formData.append('shopaddress', data.shopaddress);
        formData.append('shopname', data.shopname);

        console.log(data.files);

        for (let i = 0; i < data.files.length; i++) {
            formData.append('files', data.files[i]);
        }

        for (const [key, value] of formData.entries()) {
            console.log(`${key}:`, value);
        }

        axios.post(serverLink + '/auth/signup/advertiser', formData).then(

            (response) => {

                console.log(response.data);
                alert("Please verify your email!!!")
                window.location.href = "http://localhost:3000/login"

            }

        ).catch(

            () => { alert("Check the Credentials For Advertiser!!!") }

        )

    }

    const login = (email, password) => {
        axios.post(serverLink + '/auth/login', { email: email, password: password })
            .then((response) => {
                const token = response.data.token;
                getUserDetailsAfterAuthenticated(email, token);

            })
            .catch((error) => {
                if (error.response) {
                    console.error(error.response.data.message);
                    alert("Invalid Credentials!!! OR Please Verify Your Email!!!");
                } else if (error.request) {
                    console.error(error.request);
                    console.log("hello Hi")
                    alert(error.request);
                } else {
                    console.error('Error', error.message);
                    console.log("hello Hi Hello")
                    alert(error.message);
                }
            });
    }


    const getUserDetailsAfterAuthenticated = async (email, token) => {

        axios.get(serverLink + '/auth/login/' + email).then(

            (response) => {
                authenticated = true;
                storeSessionJWT(response.data, token);

                if (response.data.role === 'CUSTOMER') navigate("/Customer");
                else if (response.data.role === 'ADMIN') navigate("/admin");
                else if (response.data.role === 'SERVICEPROVIDER') navigate("/ServiceProvider");
                else if (response.data.role === 'ADVERTISER') navigate("/Advertiser");

            }

        ).catch(

            () => {

                alert("User Not Found!!!")

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

    const storeSessionJWT = (userdetails, token) => {
        sessionStorage.setItem('authenticatedUser', JSON.stringify(userdetails));
        setupAxiosInterceptors(createJWTToken(token));
    }

    const createJWTToken = (token) => {
        return 'Bearer ' + token;
    }

    const logout = () => {
        navigate("/login");
        sessionStorage.removeItem('authenticatedUser');
        authenticated = false;
        console.log("Logged out successfully!!!")

    }

    return (

        <AuthenticationContext.Provider value={{ authenticated, login, logout, customerSignUp, advertiserSignUp, serviceProviderSignUp }}>

            {props.children}

        </AuthenticationContext.Provider>

    )

}

export default AuthenticationContextProvider