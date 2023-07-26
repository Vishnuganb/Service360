import React from 'react'
import ResetPasswordContextProvider from "../../ContextFiles/ResetPasswordContext";
import ResetPassword from "../../ContextFiles/ResetPasswordContext";

const ResetPasswordContextProviderInterface = () => {

    return (

        <div>

            <ResetPasswordContextProvider>

                <ResetPassword />

            </ResetPasswordContextProvider>

        </div>

    )

}

export default ResetPasswordContextProviderInterface