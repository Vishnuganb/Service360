import React from 'react';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function Quotation() {
    return (
        <div className="VacancyForm-container">
            <h2>Request for Quotation</h2>

            <form className="vacancy-form">
                <div className="vacancy-form-group">
                    <label for="title">Title <span style={{ color: "red" }}>&nbsp;*</span> </label>
                    <input type="text" name="title" className="form-control" id="title" />
                </div>
                <div className="vacancy-form-group">
                    <label for="description">Description <span style={{ color: "red" }}>&nbsp;*</span> </label>
                    <input type="text" name="description" className="form-control" id="description" />
                </div>
                <div className="vacancy-form-group">
                    <label for="duedate">Due Date of Quotation <span style={{ color: "red" }}>&nbsp;*</span> </label>
                    <input type="date" name="duedate" className="form-control" id="duedate" />
                </div>
                <div className="vacancy-form-group">
                    <label for="location">Location <span style={{ color: "red" }}>&nbsp;*</span> </label>
                    {/* <input type="text" name="location" className="form-control" id="location" /> */}

                    <div className="col">
                        <Form.Group className="mb-3">
                            <Form.Select id="disabledSelect" className="select-small-text">
                                <option value="Ampara">Ampara</option>
                                <option value="Anuradhapura">Anuradhapura</option>
                                <option value="Badulla">Badulla</option>
                                <option value="Batticaloa">Batticaloa</option>
                                <option value="Colombo">Colombo</option>
                                <option value="Galle">Galle</option>
                                <option value="Gampaha">Gampaha</option>
                                <option value="Hambantota">Hambantota</option>
                                <option value="Jaffna">Jaffna</option>
                                <option value="Kalutara">Kalutara</option>
                                <option value="Kandy">Kandy</option>
                                <option value="Kegalle">Kegalle</option>
                                <option value="Kilinochchi">Kilinochchi</option>
                                <option value="Kurunegala">Kurunegala</option>
                                <option value="Mannar">Mannar</option>
                                <option value="Matale">Matale</option>
                                <option value="Matara">Matara</option>
                                <option value="Monaragala">Monaragala</option>
                                <option value="Mullaitivu">Mullaitivu</option>
                                <option value="Nuwara Eliya">Nuwara Eliya</option>
                                <option value="Polonnaruwa">Polonnaruwa</option>
                                <option value="Puttalam">Puttalam</option>
                                <option value="Ratnapura">Ratnapura</option>
                                <option value="Trincomalee">Trincomalee</option>
                                <option value="Vavuniya">Vavuniya</option>
                            </Form.Select>
                        </Form.Group>
                    </div>
                </div>
                <div className="vacancy-form-group">
                    <label for="category">Service category<span style={{ color: "red" }}>&nbsp;*</span> </label>
                    <select className="form-control" id="category" name="category">
                        <option value="Electrician">Electrician</option>
                        <option value="Plumber">Plumber</option>
                        <option value="Mechanic">Mechanic</option>
                        <option value="Tiles fitting">Tiles fitting</option>
                        <option value="none">None</option>
                    </select>
                </div>

                <div className="vacancy-form-group">
                    <label for="file" >Upload image of need</label>
                    <input type="file" name="file" className="form-control" id="file" />
                </div>
                <Row className="vacancy-form-group-buttons mt-3">
                    <Col>
                        <input type="Submit" value="Apply" className="btn btn-vacancy-form-k" />
                    </Col>
                    <Col>
                        <a id="cancel-link" href="#"><button>Cancel</button></a>
                    </Col>
                </Row>
            </form>
        </div>
    );




};

export default Quotation;


