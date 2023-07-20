import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import loginPhoto from '../../assets/images/home/login.jpeg'
import 'bootstrap-icons/font/bootstrap-icons.css';


const ServiceProviderSignUP = () => {

    const login = (email, password) => {
    }

    const navigate = useNavigate();

    const [isPasswordHidden, setIsPasswordHidden] = useState(true)

    const [passwordType, setPasswordType] = useState('password')

    const [email, setEmail] = useState('')

    const [password, setPassword] = useState('')

    const [errorMessage, setErrorMessage] = useState(null)

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

    return (

        <div className="h-100">

            {/*<ReactLinkContextProvider>*/}

            <section className="h-100">

                <div className="container py-5 h-100">

                    <div className="row d-flex justify-content-center align-items-center h-100">

                        <div className="col-xl-10 my-lg-1 py-lg-1 my-xl-0 py-xl-0">

                            <div className="rounded-3 text-black my-lg my-xl-0 py-xl-0" >

                                <div className="row g-0">

                                    <div className="col-lg-6">

                                        <div className="card-body  p-md-1 mx-md-4 mt-4 bg-white rounded-lg justify-content-center align-items-center shadow-lg"
                                            style={{ backgroundColor: '#ffffff', maxWidth: '600px', borderRadius: '1rem' }}>

                                            <div className="mb-0 p-0">

                                                <div className="d-flex justify-content-between">

                                                    <p className='pt-4 px-4 flex-wrap fs-5'>
                                                        welcome to <br></br> <span className="fs-4 fw-bold pb-2" style={{ color: '#9F390D' }}>Service360</span>
                                                    </p>

                                                    <p className='pt-4 px-4 flex-wrap' style={{ color: '#8D8D8D' }}> No account? <br></br>
                                                        <span className="fs-6 pb-2" style={{ color: '#9F390D' }}>Signup</span>
                                                    </p>

                                                </div>

                                                <div className="d-flex pb-3">
                                                    <h1 className="fw-bold px-4">Sign in</h1>
                                                </div>

                                            </div>



                                            <form action="" className="my-2 mx-4">

                                                <p className='mb-0'> Enter your email address </p>
                                                <div className="input-group mb-3 align-items-center">
                                                    <span className="input-group-text">

                                                        <i className="bi bi-envelope-fill"></i>

                                                    </span>

                                                    <input type="email" className="form-control"
                                                        placeholder="service360@gmail.com"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        autoFocus
                                                        required
                                                    />
                                                </div>

                                                <p className='mb-0'> Enter your password </p>
                                                <div className="input-group mb-3 align-items-center">

                                                    <span className="input-group-text">
                                                        <i className="bi bi-lock-fill"></i>
                                                    </span>

                                                    <input type={passwordType} className="form-control"
                                                        placeholder="Enter password"
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                        required
                                                    />

                                                    <span className="input-group-prepend"
                                                        style={{ background: "var(--bs-tertiary-bg)", border: "var(--bs-border-width) solid var(--bs-border-color)" }}>
                                                        <button className="btn btn-outline-dark border-0"
                                                            type="button"
                                                            id="button-addon1" onClick={showHidePassword}>
                                                            {isPasswordHidden && <i className="bi bi-eye-slash-fill"></i>}
                                                            {!isPasswordHidden && <i className="bi bi-eye-fill"></i>}
                                                        </button>
                                                    </span>


                                                </div>

                                                <Link className="text-primary" style={{ textDecoration: 'none' }}>Forgot password</Link>

                                                <div className="text-center">
                                                    <div className="d-flex align-items-center justify-content-end pb-4">

                                                        <button className="btn btn-dark btn-block" style={{ backgroundColor: '#643A3A', width: '10rem' }}
                                                            type="button" onClick={() => login(email, password)}>

                                                            Sign in

                                                        </button>

                                                    </div>


                                                </div>

                                            </form>


                                            <div>

                                            </div>

                                        </div>

                                    </div>

                                    <div className="col-lg-6 d-lg-flex d-none">

                                        <div className="d-lg-flex d-none">

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

            {/*</ReactLinkContextProvider>*/}

        </div>


    )

}

export default ServiceProviderSignUP