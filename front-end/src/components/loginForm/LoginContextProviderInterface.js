import React from 'react'
import Login from "./Login";
import ReactLinkContextProvider from '../../ContextFiles/ReactLinkContext'

const LoginContextProviderInterface = () => {

    return (

        <>

                <ReactLinkContextProvider>

                    <Login />

                </ReactLinkContextProvider>

        </>

    )

}

export default LoginContextProviderInterface