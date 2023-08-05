import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const subscribedJobCategories = [
    'Masonry',
    'Plumbing',
    'Carpentry',
];

function CreateBlogForm() {
    return (
        <div className="ms-lg-4 me-lg-4">
            <span style={{fontSize:"28px",fontWeight:"bold"}}>Create a Blog</span>
            
            <Form className="mt-4">    
                <Form.Group className="mb-3" controlId="formBasicJobCategory">
                    <Form.Control as="select">
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
                    <Form.Control type="text" placeholder="Enter the Title" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={5} placeholder="Provide a detailed description of the work experience" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicFiles">
                    <Form.Label>Upload Relevant Media</Form.Label>
                    <Form.Control type="file" accept="image/*" />
                    <Form.Text className="text-muted">Please upload images that showcase your work experience and accomplishments.</Form.Text>
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