import React from 'react';
import Container from 'react-bootstrap/Container';
import '../../../style/Customer/PostVacancyForm.css'


const PostVacancyForm = () => {
    return (
        <Container name="viewport" content="width=device-width, initial-scale=1.0">

            <div className="row row1">
                <div className='col-4'></div>

                <div className="col-6">
                    <div className="row">
                        <h4>Welcome back, Tharsana!</h4>
                        <h3>Ongoing Projects</h3>
                        <div className="col-sm">
                            <div className="card d-flex card1">
                                <div className="card-body card-body1">
                                    <p className="card-text">Mobile repair/Service ID</p>
                                </div>
                                <div>
                                    <a href="#" className="btn btn1"><i className="bi bi-arrow-right-circle-fill"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="card d-flex card1">
                                <div className="card-body card-body1">
                                    <p className="card-text"> Plumbing /Service ID</p>
                                </div>
                                <div>
                                    <a href="#" className="btn btn"><i className="bi bi-arrow-right-circle-fill"></i></a>
                                </div>

                            </div>
                        </div>
                        <h3>Posted/Responded Vacancies</h3>
                        <div className="col-sm">
                            <div className="card d-flex card1" >
                                <div className="card-body card-body1">
                                    <p className="card-text">End Vacancies</p>
                                </div>
                                <div>
                                    <a href="#" className="btn btn"><i className="bi bi-arrow-right-circle-fill"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="card d-flex card1">
                                <div className="card-body card-body1">
                                    <p className="card-text">Responded Vacancies</p>
                                </div>
                                <div>
                                    <a href="#" className="btn btn"><i className="bi bi-arrow-right-circle-fill"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <br></br>
                <br></br>
        </Container>
    );
};

export default PostVacancyForm;
