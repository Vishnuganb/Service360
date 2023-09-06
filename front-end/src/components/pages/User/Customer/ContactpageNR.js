import React, { useState } from 'react';
import '../../../../style/User/ContactUsNR.css';

function ContactpageNR() {
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        contactNumber: '',
        message: ''
    });

    const [inputErrors, setInputErrors] = useState({
        email: '',
        contactNumber: '',
        message: ''
    });

    const handleChange = event => {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));

        if (value.trim() !== '') {
            event.target.classList.add('filled');
        } else {
            event.target.classList.remove('filled');
        }
    };

    const handleSubmit = event => {
        event.preventDefault();
        const updatedInputErrors = { ...inputErrors };

        // Validate email format
        if (!validateEmail(formData.email)) {
            updatedInputErrors.email = 'Please enter a valid email address.';
        } else {
            updatedInputErrors.email = '';
        }

        // Validate contact number format
        if (!validateContactNumber(formData.contactNumber)) {
            updatedInputErrors.contactNumber = 'Please enter a valid contact number.';
        } else {
            updatedInputErrors.contactNumber = '';
        }

        // Validate textbox minimum length
        if (formData.message.length < 3) {
            updatedInputErrors.message = 'Please enter at least 3 characters.';
        } else {
            updatedInputErrors.message = '';
        }

        setInputErrors(updatedInputErrors);
    };

    const validateEmail = email => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    const validateContactNumber = contactNumber => {
        const contactNumberPattern = /^[0-9]{10}$/;
        return contactNumberPattern.test(contactNumber);
    };

    return (
        <div className='contactusNR'>
            <div className='contactuscontainer'>
                <div className='imgNR'></div>
                <div className="contact-us">
                    <div className='contactdetailsNR'>
                        <h3>Get in Touch with Us!</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <div className='NRName'>
                                    <input
                                        className={`CNRinput ${inputErrors.fname ? 'error' : ''}`}
                                        type="text"
                                        name="fname"
                                        value={formData.fname}
                                        onChange={handleChange}
                                        required
                                        placeholder='First name'
                                    />
                                    <input
                                        className={`CNRinput ${inputErrors.lname ? 'error' : ''}`}
                                        type="text"
                                        name="lname"
                                        value={formData.lname}
                                        onChange={handleChange}
                                        required
                                        placeholder='Last Name'
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <input
                                    className={`CNRinput ${inputErrors.email ? 'error' : ''}`}
                                    type="text"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder='Enter your Email'
                                />
                                <span className={`error-message ${inputErrors.email ? 'visible' : ''}`}>
                                    {inputErrors.email && <i className="error-icon fas fa-exclamation-circle"></i>} &nbsp;
                                    {inputErrors.email}
                                </span>
                            </div>
                            <div className="form-group">
                                <input
                                    className={`CNRinput ${inputErrors.contactNumber ? 'error' : ''}`}
                                    type="text"
                                    name="contactNumber"
                                    value={formData.contactNumber}
                                    onChange={handleChange}
                                    required
                                    placeholder='Contact Number'
                                />
                                <span className={`error-message ${inputErrors.contactNumber ? 'visible' : ''}`}>
                                    {inputErrors.contactNumber && <i className="error-icon fas fa-exclamation-circle"></i>} &nbsp;
                                    {inputErrors.contactNumber}
                                </span>
                            </div>
                            <div className="form-group">
                                <textarea
                                    className={`CNRinput ${inputErrors.message ? 'error' : ''}`}
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder='Your Message'
                                />
                                <span className={`error-message ${inputErrors.message ? 'visible' : ''}`}>
                                    {inputErrors.message && <i className="error-icon fas fa-exclamation-circle"></i>} &nbsp;
                                    {inputErrors.message}
                                </span>
                            </div>
                            <div className='buttonNR'>
                                <button className="btnNR" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactpageNR;