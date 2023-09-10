import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from "react";

const subscribedJobCategories = [
    'Masonry',
    'Plumbing',
    'Carpentry',
];

function CreateBlogForm() {

    const [blogFormData, setBlogFormData] = useState({
        servicename: "",
        blogtitle: "",
        blogdescription: "",
        blogimages: "", 
    });

    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleImageInputChange = (e) => {
        const selectedFilesArray = Array.from(e.target.files);
        const selectedFileNames = selectedFilesArray.map((file) => file.name);

        setSelectedFiles((prevSelectedFiles) => [...prevSelectedFiles, ...selectedFileNames]);

        // Join the selected image file names into a comma-separated string
        const blogImages = selectedFileNames.join(', ');

        // Update the trainingimage field in trainingSessionFormData
        setBlogFormData({
            ...blogFormData,
            blogimages: blogImages,
        });
    };

    const handleRemoveFile = (indexToRemove) => {
        setSelectedFiles((prevSelectedFiles) =>
            prevSelectedFiles.filter((_, index) => index !== indexToRemove)
        );
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBlogFormData({
            ...blogFormData,
            [name]: value,
        });
    };

    const handleCreateBlog = () => {
        axios
            .post('http://localhost:8080/auth/createBlog', blogFormData)
            .then((response) => {
                console.log('Blog created successfully:', response.data);
            })
            .catch((error) => {
                console.error('Error creating blog:', error);
            });
    };


    return (
        <div className="ms-lg-4 me-lg-4">
            <span style={{ fontSize: "28px", fontWeight: "bold" }}>Create a Blog</span>

            <Form className="mt-4" onSubmit={handleCreateBlog}>
                <Form.Group className="mb-3" controlId="formBasicJobCategory">
                    <Form.Control 
                        as="select" 
                        name="servicename"
                        value={blogFormData.servicename}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="">Select the service category</option>
                        {subscribedJobCategories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter the Title" 
                        name="blogtitle"
                        value={blogFormData.blogtitle}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        rows={5} 
                        placeholder="Provide a detailed description of the work experience" 
                        name="blogdescription"
                        value={blogFormData.blogdescription}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicFiles">
                    <Form.Label>Upload Relevant Media</Form.Label><Form.Text className="text-muted">&nbsp;&nbsp;( Please upload images that showcase your work experience and accomplishments )</Form.Text><br />
                    <Button className="btn-ServiceProvider-1" onClick={() => document.getElementById('fileInput').click()}>Select Images</Button>
                    <input
                        type="file"
                        accept="image/*"
                        multiple
                        id="fileInput"
                        style={{ display: 'none' }}
                        onChange={handleImageInputChange}
                    />
                    <div className="selected-images">
                        {selectedFiles.map((file, index) => (
                            <div key={index} className="selected-image">
                                <span>{file}</span>
                                <Button variant="link" onClick={() => handleRemoveFile(index)}><i class="bi bi-x bi-lg" style={{ color: 'black' }}></i></Button>
                            </div>
                        ))}
                    </div>
                </Form.Group>

                <div className="CreateBlog-button-container d-flex flex-row">
                    <Button className="btn-ServiceProvider-1" type="submit">Publish</Button>
                    <Button className="btn-ServiceProvider-2 CreateBlog-cancel ms-auto">Cancel</Button>
                </div>
            </Form>
        </div>
    );
}

export default CreateBlogForm;