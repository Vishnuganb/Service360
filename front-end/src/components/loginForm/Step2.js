import React, {useEffect,useState} from 'react';
import styled from 'styled-components';
import { Alert } from 'react-bootstrap';

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

const serviceCategories = {
    home: [
        "Electrical wiring and installation",
        "Plumbing repairs and installation",
        "Tiles fitting",
    ],
    construction: [
        "Carpentry",
        "Painting",
        "Masonry",
        "Glass & Aluminium",
        "Iron Works"
    ],
    security: [
        "CCTV systems Repair",
        "Fire Alarm Systems Repair",
        "Video Surveillance Systems Repair",
    ],
};

const Step2 = ({
    data: {
        password,
        passwordType,
        showHidePassword,
        isPasswordHidden,
        errorMessageStatus,
        confirmPasswordErrorMessage,
        confirmPassword,
        errorMessage,
        passwordErrorMessage,
        category1Value,
        category2Value,
        serviceErrorMessage,
        categoryErrorMessage,
        selectedFiles,
        selectedFileCount,
        fileErrorMessage
    },
    handleChange,
    handleShowHidePassword,
    handlePreviousClick,
    handleSubmit,
    handlePasswordValidation,
    validateConfirmPassword,
    handleFileInputChange,
    handleRemoveFile,
    // fileInputRef
}) => {

    const handleServiceCategoryChange = (e) => {
        const selectedService = e.target.value;
        handleChange('category1', selectedService);

        // Reset category2Value when the service category changes
        if (selectedService === 'default') {
            handleChange('category2', '');
        } else {
            handleChange('category2', serviceCategories[selectedService][0]);
        }
    };

    return (
        <form className="my-2 mx-4">

            <div className="mb-3 d-flex justify-content-between">
                <div className='me-xs-3 col-4 me-sm-0'>
                    <p className="mb-0">Select Service</p>
                    <select
                        className="form-select"
                        value={category1Value}
                        onChange={(e) => handleChange('category1', e.target.value)} // Use handleCategory1Change here
                        required
                    >
                        <option value="default">Select a service</option>
                        <option value="home">Home</option>
                        <option value="construction">Construction</option>
                        <option value="security">Security</option>
                    </select>
                    {serviceErrorMessage && <p className="text-danger p-0 m-0">{serviceErrorMessage}</p>}
                </div>

                <div className="col-7">
                    <p className="mb-0">Select Category</p>
                    <select
                        className="form-select"
                        value={category2Value}
                        onChange={(e) => handleChange('category2', e.target.value)}
                        required
                    >
                        {category1Value === 'default' ? (
                            <option value="">Please select a service first</option>
                        ) : (
                            serviceCategories[category1Value] ? (
                                <>
                                    <option value="">Select a category</option>
                                    {serviceCategories[category1Value].map((category) => (
                                        <option key={category} value={category}>
                                            {category}
                                        </option>
                                    ))}
                                </>
                            ) : (
                                <option value="">Select the service first</option>
                            )
                        )}
                    </select>
                    {categoryErrorMessage && <p className="text-danger p-0 m-0">{categoryErrorMessage}</p>}
                </div>     
            </div>

            <div className="mb-3">
                <p className="mb-0">Upload Qualification Certificates or Files</p>
                <input
                    // ref={fileInputRef}
                    type="file"
                    className="form-control"
                    onChange={handleFileInputChange}
                    multiple
                    required
                />
                {fileErrorMessage && <p className="text-danger p-0 m-0">{fileErrorMessage}</p>}
                {Array.isArray(selectedFiles) && selectedFiles.length > 0 && (
                    <>
                        <p>{selectedFileCount} file{selectedFileCount !== 1 ? 's' : ''} selected</p>
                        <ul className="list-group mt-2">
                            {selectedFiles.map((file, index) => (
                                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                    <span>{file.name}</span>
                                    <button
                                        type="button"
                                        onClick={() => handleRemoveFile(index)}
                                        className="btn-close"
                                        aria-label="Close"
                                    ></button>
                                </li>
                            ))}
                        </ul>
                    </>
                )}
            </div>

            <div className="mb-3 d-flex justify-content-between">
                <div className='me-3'>
                    <p className="mb-0">Enter your Password</p>
                    <div className="input-group">
                        <input
                            type={passwordType}
                            className="form-control"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => handlePasswordValidation(e.target.value)}
                            required
                        />
                        <span className="input-group-text">
                            <button
                                className="btn btn-outline-dark border-0"
                                type="button"
                                id="button-addon1"
                                onClick={handleShowHidePassword}
                            >
                                {isPasswordHidden ? <i className="bi bi-eye-slash-fill"></i> : <i className="bi bi-eye-fill"></i>}
                            </button>
                        </span>
                    </div>
                    {passwordErrorMessage && <p className="text-danger p-0 m-0">{passwordErrorMessage}</p>}
                </div>

                <div>
                    <p className="mb-0">Retype Password</p>
                    <div className="input-group">
                        <input
                            type={passwordType}
                            className="form-control"
                            placeholder="Confirm password"
                            value={confirmPassword}
                            onChange={(e) => validateConfirmPassword(e.target.value)}
                            required
                        />
                        <span className="input-group-text">
                            <button
                                className="btn btn-outline-dark border-0"
                                type="button"
                                id="button-addon2"
                                onClick={handleShowHidePassword}
                            >
                                {isPasswordHidden ? <i className="bi bi-eye-slash-fill"></i> : <i className="bi bi-eye-fill"></i>}
                            </button>
                        </span>
                    </div>
                    {confirmPasswordErrorMessage && <p className="text-danger p-0 m-0">{confirmPasswordErrorMessage}</p>}
                </div>
            </div>

            {errorMessageStatus && (
                <Alert variant="info" className="my-0 p-2 mb-2 rounded" dismissible>
                    <strong>info</strong>
                    <p className="d-flex justify-content-center"></p>{errorMessage}
                </Alert>
            )}

            <div className="text-center">
                <div className="d-flex align-items-center justify-content-between pb-4">
                    <StyledButton2 className="btn btn-dark btn-block" type="button" onClick={handlePreviousClick}>
                        Previous
                    </StyledButton2>
                    <StyledButton className="btn btn-dark btn-block" type="button" onClick={handleSubmit}>
                        Submit
                    </StyledButton>
                </div>
            </div>
        </form>
    );
};

export default Step2;
