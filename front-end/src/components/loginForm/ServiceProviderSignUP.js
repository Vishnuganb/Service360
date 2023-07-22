import React, { useState } from 'react'
import { Link } from "react-router-dom";
import loginPhoto from '../../assets/images/home/customerSignUP.png'
import styled from 'styled-components';
import validator from "validator";
import '../../style/Login.css'
import { Alert } from 'react-bootstrap';
import image from '../../assets/images/header/Background.png'


const ServiceProviderSignUP = () => {

    // first form state variables
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [nicNumber, setNicNumber] = useState('')
    const [emailErrorMessage, setEmailErrorMessage] = useState('')
    const [showSecondForm, setShowSecondForm] = useState(false);
    const [address, setAddress] = useState('')

    // validate email function
    const validateEmail = (emailInputValue) => {

        setEmail(emailInputValue)

        if (validator.isEmail(emailInputValue)) {

            setEmailStatus(true)
            setEmailErrorMessage('valid email')
        }
        else {

            setEmailStatus(false)
            setEmailErrorMessage('Invalid email')
        }

    }

    // Next button click handler for the first form
    const handleNextClick = () => {
        // Implement any necessary validations before proceeding to the second form
        if (validator.isEmail(email)) {
            setShowSecondForm(true);
        } else {
            // Show an error message if the email is not valid
            setEmailErrorMessage('Invalid email');
        }
    };

    // second form state variables
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errorMessageStatus, setErrorMessageStatus] = useState(false)
    const [confirmPasswordStatus, setConfirmPasswordStatus] = useState(false)
    const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] = useState('')

    // Validate password function
    const validatePassword = (passwordInputValue) => {

        if (validator.isStrongPassword(passwordInputValue, {

            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1

        })) setErrorMessageStatus(false)
        else setErrorMessageStatus(true)

        setPassword(passwordInputValue)

    };

    // Validate confirm password function
    const validateConfirmPassword = (confirmPasswordInputValue) => {

        if (password === confirmPasswordInputValue) {

            setConfirmPasswordErrorMessage('Password matches')
            setConfirmPasswordStatus(false)

        } else {

            setConfirmPasswordErrorMessage('Passwords does not match')
            setConfirmPasswordStatus(true)

        }

        setConfirmPassword(confirmPasswordInputValue)

    };

    // Submit form function
    const handleSubmit = () => {
        console.log('Form submitted!');
    };

    const { LoginLink } = ''

    const { signUp } = ''

    const [isPasswordHidden, setIsPasswordHidden] = useState(true)

    const [passwordType, setPasswordType] = useState('')

    const [contactNumber, setContactNumber] = useState('')

    const errorMessage = 'Password requires to have one lower case, one uppercase, one number, one symbol and be minimum of 8 characters in lengths';

    const [emailStatus, setEmailStatus] = useState(false)

    const showHidePassword = () => {

        if (isPasswordHidden) {
            setPasswordType('text')
            setIsPasswordHidden(false)

        }
        else {

            setPasswordType('password')
            setIsPasswordHidden(true)

        }

    }

    const createUser = () => {

        signUp({ email, password, firstName, lastName, nicNumber, contactNumber, address })

    }

    const customFontStyle = {
        fontFamily: "Roboto",
        color: '#9F390D' // Replace 'Your_Custom_Font' with the font name you want to use
    };

    const StyledButton = styled.button`
        background-color: #292D32;
        width: 30%;
        @media (max-width: 768px) {
            width: 50%; 
            margin-top: 1rem; 
        }
        &:hover {
            background: #fff;
            border-color: #2596be;
            color: #9f390d;
        }
    `;

    const StyledButton2 = styled.button`
        background-color: #292D32;
        width: 30%;
        @media (max-width: 768px) {
            width: 100%; 
            margin-top: 1rem; 
        }
        &:hover {
            background: #fff;
            border-color: #2596be;
            color: #9f390d;
        }
    `;

    return (

        <div className="h-100" style={{ backgroundImage: `url(${image})` }}>

            <section className="h-100">

                <div className="container h-100">

                    <div className="row d-flex justify-content-center align-items-center h-100">

                        <div className="col-lg-10 offset-sm-2 offset-xl-0 my-lg-1 py-lg-1 my-xl-0 py-xl-0">

                            <div className="rounded-3 text-black my-lg my-xl-0 py-xl-0">

                                <div className="row g-0">

                                    <div className="col-xl-6">

                                        <div className="card-body  p-md-1 mx-md-2 mt-5 bg-white rounded-lg justify-content-center align-items-center shadow-lg"
                                            style={{ backgroundColor: '#ffffff', maxWidth: '600px', borderRadius: '1rem' }}>

                                            <div className="mb-0 p-0">

                                                <div className="d-flex justify-content-between">

                                                    <p className='pt-4 px-4 flex-wrap fs-5'>
                                                        welcome to <span className="fs-2 fw-bold pb-2" style={customFontStyle}>Service360</span>
                                                    </p>

                                                </div>

                                                <div className="d-flex pb-1">
                                                    <h1 className="fw-bold px-4">SignUp</h1>
                                                </div>

                                            </div>

                                            <form className="my-2 mx-4" onSubmit={handleSubmit}>

                                                <div className="mb-2">
                                                    <p className="mb-0">Enter your email address</p>
                                                    <div className="align-items-center">
                                                        <input type="email" className="form-control"
                                                            placeholder="Service360@gmail.com"
                                                            value={email}
                                                            onChange={(e) => validateEmail(e.target.value)}
                                                            autoFocus
                                                            required
                                                        />
                                                    </div>
                                                </div>

                                                {!emailStatus && emailErrorMessage && (
                                                    <Alert variant="warning" className="my-0 mb-1 rounded" dismissible>
                                                        {emailErrorMessage}
                                                    </Alert>
                                                )}

                                                <div className="justify-content-between mb-3 d-flex">
                                                    <div className='me-0 col-sm-6'>
                                                        <p className="mb-0">FirstName</p>
                                                        <input type="text" className="form-control"
                                                            placeholder="First Name"
                                                            value={firstName}
                                                            onChange={(e) => setFirstName(e.target.value)}
                                                            required
                                                        />
                                                    </div>

                                                    <div className='col-sm-5'>
                                                        <p className="mb-0">LastName</p>
                                                        <input type="text" className="form-control"
                                                            placeholder="Last Name"
                                                            value={lastName}
                                                            onChange={(e) => setLastName(e.target.value)}
                                                            required
                                                        />
                                                    </div>

                                                </div>

                                                <div className="justify-content-between mb-3 d-flex ">
                                                    <div className='me-0 col-sm-5 col-sm-6'>
                                                        <label className="mb-0">NIC Number</label>
                                                        <div className="input-group ">
                                                            <input type="text" className="form-control"
                                                                placeholder="Enter NIC number"
                                                                value={nicNumber}
                                                                onChange={(e) => setNicNumber(e.target.value)}
                                                                required
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className='col-sm-5 col-lg-5'>
                                                        <label className="mb-0">Contact Number</label>
                                                        <div className="input-group">
                                                            <input type="text" className="form-control"
                                                                placeholder="0771234567"
                                                                value={contactNumber}
                                                                onChange={(e) => setContactNumber(e.target.value)}
                                                                required
                                                                maxLength={10}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="mb-3">
                                                    <p className="mb-0">Enter your Current Address</p>
                                                    <div className="align-items-center">
                                                        <input type="text" className="form-control"
                                                            placeholder="No-06, Nelson Place, Colombo, Sri Lanka"
                                                            value={address}
                                                            onChange={(e) => setAddress(e.target.value)}
                                                            required
                                                        />
                                                    </div>
                                                </div>

                                                <div className="text-center">

                                                    <div className="d-flex align-items-center justify-content-between pb-4">

                                                        <p> Have an account? <Link className="text-primary" to={LoginLink}> Login </Link>  </p>

                                                        <StyledButton className="btn btn-dark btn-block" type="button" onClick={handleNextClick}>

                                                            Next

                                                        </StyledButton>

                                                    </div>

                                                </div>

                                            </form>


                                            <div>

                                            </div>

                                        </div>

                                    </div>

                                    <div className="col-xl-6 d-xl-flex d-none py-5" style={{ backgroundImage: `url(${image})` }}>

                                        <div className="d-lg-flex d-none" style={{ backgroundImage: `url(${image})` }}>

                                            <div className="text-center">

                                                <img className="img-fluid rounded-3 h-100" src={loginPhoto} alt="LoginImage" />

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </div>

    )

}

export default ServiceProviderSignUP