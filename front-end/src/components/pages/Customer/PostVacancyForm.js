import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FileUpload from '../../layout/FileUploadCustomer';



const PostVacancyForm = () => {
    return (

        <Container name="viewport" content="width=device-width, initial-scale=1.0">
            <div className="row">
                <div className="col">

                    <div className="card_2" >
                        <p> <a href="#" className='fw-bold navLink d-lg-inline d-sm-none d-md-none d-none'><i className="bi bi-arrow-left-circle-fill"></i></a>
                            &nbsp;&nbsp;Back</p>
                        <div className="card d-flex card_3">
                            <div className="card-body">
                                <br></br>
                                <center> <h3 className="card-title">Vacancy Creation Form</h3></center>
                                <br></br>
                                <Form>
                                    <fieldset >
                                        <div className="row">
                                            <div className="col-md-3">
                                                <Form.Label className="small">Client Name</Form.Label>
                                            </div>
                                            <div className="col-md-9">
                                                <Form.Control id="disabledTextInput" className="select-small-text" placeholder="Enter client name" />
                                            </div>
                                        </div>
                                        <br></br>
                                        <div className="row">
                                            <div className='col-md-3'>
                                                <Form.Group className="mb-9">
                                                    <Form.Label className="small">Service Category</Form.Label>
                                                </Form.Group>
                                            </div>
                                            <div className="col-md-3">
                                                <Form.Group className="mb-3">
                                                    <Form.Select className="select-small-text">
                                                        <option className="small">Select Category</option>
                                                        <option className="small">Electrician</option>
                                                        <option className="small">Plumber</option>
                                                        <option className="small">Mechanic</option>
                                                        <option className="small">Tiles fitting</option>

                                                    </Form.Select>
                                                </Form.Group>
                                            </div>


                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div className='col-md-2'>
                                                <Form.Group className="mb-9">
                                                    <Form.Label htmlFor="Location" className="small">Location</Form.Label>
                                                </Form.Group>
                                            </div>
                                            <div className="col-md-3">
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
                                        <div className="row">
                                            <div className="col-md-3">
                                                <Form.Label htmlFor="disabledTextInput" className="small">Due Date</Form.Label>
                                            </div>
                                            <div className="col-md-3">
                                                <Form.Control id="disabledTextInput" type="date" className="select-small-text" />
                                            </div>
                                            <div className='col-md-3'>
                                                <Form.Group className="mb-9">
                                                    <Form.Label className="small">Employment Type</Form.Label>
                                                </Form.Group>
                                            </div>
                                            <div className="col-md-3">
                                                <Form.Group className="mb-3">
                                                    <Form.Select className="select-small-text">
                                                        <option>Full Time</option>
                                                        <option>Hours based</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-3">
                                                <Form.Label htmlFor="disabledTextInput" className="small">Salary</Form.Label>
                                            </div>
                                            <div className="col-md-5">
                                                <Form.Control id="disabledTextInput" placeholder="Salary" className="select-small-text" />
                                            </div>
                                        </div>
                                        <br></br>
                                        <div className="row">
                                            <div className="col-md-3">
                                                <Form.Label htmlFor="disabledTextInput" className="small">Skill & Qualification Expect</Form.Label>
                                            </div>
                                            <div className="col-md-9">
                                                <Form.Control id="disabledTextInput" placeholder="Type here" className="select-small-text" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-3 text_1">
                                                <Form.Label htmlFor="disabledTextInput" className="small">Responsibilities Expect</Form.Label>
                                            </div>
                                            <div className="col-md-9">
                                                <Form.Control id="disabledTextInput" placeholder="Type here" className="select-small-text" />
                                            </div>
                                        </div>
                                        <br></br>
                                        <div className="row">
                                            <div className="col-md-3">
                                                <Form.Label htmlFor="disabledTextInput" className="small">Any information</Form.Label>
                                            </div>
                                            <div className="col-md-9">
                                                <Form.Control id="disabledTextInput" placeholder="Type here" className="select-small-text" />
                                            </div>
                                        </div>
                                        <br></br>
                                        <div className="row">
                                            <div className="col-md-3">
                                                <Form.Label htmlFor="disabledTextInput" className="small">Upload Files</Form.Label>
                                                <Form.Label htmlFor="disabledTextInput" className="select-small-text1">(Company icon or any needed image)</Form.Label>
                                            </div>
                                            <div className="col-md-9">
                                                <FileUpload />
                                            </div>
                                        </div>
                                        <br></br>


                                        <div className='d-flex justify-content-center'>
                                            <Button className='d-grid' type="submit">POST</Button>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button className='d-grid' type="submit">CANCEL</Button>
                                        </div>

                                    </fieldset>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <br></br><br></br>
        </Container>
    );
};

export default PostVacancyForm;
