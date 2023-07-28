import React, { useEffect, useState } from 'react';
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
        isPasswordHidden,
        errorMessageStatus,
        confirmPasswordErrorMessage,
        confirmPassword,
        errorMessage,
        passwordErrorMessage,
        serviceErrorMessage,
        categoryErrorMessage,
        selectedFiles,
        selectedFileCount,
        fileErrorMessage,
        selectedServices,
        selectedCategories,
    },
    handleShowHidePassword,
    handlePreviousClick,
    handleSubmit,
    handlePasswordValidation,
    validateConfirmPassword,
    handleFileInputChange,
    handleRemoveFile,
    handleGramaniladahriFileChange,
    handleServiceCategoryChange,
    handleCategory2Change,
    handleRemoveService,
    handleRemoveCategory,
}) => {

    return (
        <form className="my-2 mx-4">

            <div className="mb-3 d-flex justify-content-between">
                <div className='me-xs-2 col-6 me-sm-0'>
                    <p className="mb-0">Select Service</p>
                    <select
                        className="form-select"
                        value="default"
                        onChange={handleServiceCategoryChange}
                        required
                    >
                        <option value="default">Select a service</option>
                        {Object.keys(serviceCategories).map((service) => (
                            <option key={service} value={service}>
                                {service}
                            </option>
                        ))}
                    </select>
                    {serviceErrorMessage && <p className="text-danger p-0 m-0">{serviceErrorMessage}</p>}
                </div>

                <div className="mb-3 col-5">
                    <p className="mb-0">Selected Services:</p>
                    {selectedServices.length === 0 ? (
                        <p className='list-group d-flex justify-content-between align-items-center p-1'
                            style={{
                                border: '1px solid #ccc',
                            }}>No services selected.</p>
                    ) : (
                        <ul className="list-group">
                            {selectedServices.map((service) => (
                                <li key={service} className='list-group-item d-flex justify-content-between align-items-center mt-0'>
                                    <span>{service}</span>
                                    <button type="button"
                                        className="btn-close"
                                        aria-label="Close"
                                        onClick={() => handleRemoveService(service)}>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

            </div>

            <div className="mb-3 d-flex justify-content-between">

                <div className="me-xs-2 col-6 me-sm-0">
                    <p className="mb-0">Select Category</p>
                    {categoryErrorMessage && <p className="text-danger p-0 m-0">{categoryErrorMessage}</p>}
                    {selectedServices.length === 0 ? (
                        <div className='list-group d-flex justify-content-between align-items-center p-1 px-1 text-danger'
                            style={{
                                border: '1px solid #ccc',
                            }}>
                            <div className="d-flex align-items-center">

                                <span>Please select a service first</span>
                                <i className="bi bi-exclamation-triangle me-2"></i>
                            </div>
                        </div>
                    ) : (
                        <>
                            {selectedServices.map((service) => (
                                <div key={service}>
                                    {serviceCategories[service] && (
                                        <div>
                                            <p className='list-group d-flex justify-content-between align-items-start p-1'
                                                style={{
                                                    border: '1px solid #ccc',
                                                }}>Categories for {service}:</p>
                                            {serviceCategories[service].map((category) => (
                                                <div key={category} className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value={category}
                                                        checked={selectedCategories.includes(category)}
                                                        onChange={() => handleCategory2Change(category)}
                                                        id={`categoryCheckbox_${service}_${category}`}
                                                        style={{ border: '2px solid #ccc' }}
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor={`categoryCheckbox_${service}_${category}`}
                                                    >
                                                        {category}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </>
                    )}
                </div>

                <div className="mb-3 col-5">
                    <p className="mb-0">Selected Categories:</p>
                    {selectedCategories.length === 0 ? (
                        <p className='list-group d-flex justify-content-between align-items-center p-1'
                            style={{
                                border: '1px solid #ccc',
                            }}>No categories selected.</p>
                    ) : (
                        <ul className="list-group">
                            {selectedCategories.map((category) => (
                                <li key={category} className='list-group-item d-flex justify-content-between align-items-center mt-0'>
                                    <span>{category}</span>
                                    <button
                                        type="button"
                                        onClick={() => handleRemoveCategory(category)}
                                        className="btn-close"
                                        aria-label="Close"
                                    >
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>

            <div className="mb-3">
                <p className="mb-0">Upload Gramaniladahri Certified document (One file only)</p>
                <input
                    type="file"
                    className="form-control"
                    onChange={handleGramaniladahriFileChange}
                    required
                />
                {fileErrorMessage && <p className="text-danger p-0 m-0">{fileErrorMessage}</p>}
            </div>

            <div className="mb-3">
                <p className="mb-0">Upload Qualification Certificates ( Not required )</p>
                <input
                    type="file"
                    className="form-control"
                    onChange={handleFileInputChange}
                    multiple
                    required
                />
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
                    <StyledButton2 className="btn btn-dark btn-block me-3" type="button" onClick={handlePreviousClick}>
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
