import React from 'react';
import Container from 'react-bootstrap/Container';
import '../../../../style/Customer/OngoingProject.css'
import ServiceProvider1 from '../../../../assets/images/Customer/ServiceProvider1.jpg';


const OngoingProject = () => {
    return (
        <Container fluid>

            <div className="row">
                <div className='col-md-4'></div>

                <div className="col-md-6">
                    <div className="row">
                        <div className="card_2" >
                            <p> <a href="#" className='fw-bold navLink d-lg-inline d-sm-none d-md-none d-none'><i className="bi bi-arrow-left-circle-fill"></i></a>
                                &nbsp;&nbsp;Back</p>
                            <h3>Ongoing Projects</h3>
                            {/* <div className="col-sm">
                            <div className="card d-flex card1">
                                <div className="card-body card-body1">
                                    <p className="card-text">Mobile repair/Service ID</p>
                                </div>
                                <div>
                                    <a href="#" className="btn btn1"><i className="bi bi-arrow-right-circle-fill"></i></a>
                                </div>
                            </div>
                        </div> */}

                            <div className="card d-flex card-3">
                                <div className="card-body">
                                    <h4 className="card-title">Tile fitting/Service ID</h4>

                                    <p className="card-text">                            
                                    &nbsp;&nbsp;<img src={ServiceProvider1} alt="Profile" className="ServiceProvider1" />
                                       &nbsp;&nbsp;&nbsp;&nbsp;Service Provider : Vinoth Kishan</p>
                                    <a href="#" className="box-1">&nbsp;&nbsp;&nbsp;&nbsp;<i class="bi bi-list-task"></i>&nbsp;&nbsp;&nbsp;To Do list</a><br></br>
                                    <a href="#" className="box-1">&nbsp;&nbsp;&nbsp;&nbsp;<i class="bi bi-wechat"></i>&nbsp;&nbsp;Chat</a><br></br>
                                    <a href="#" className="box-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;View Profile</a><br></br>
                                    <a href="#" className="box-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Due Date : </a><br></br><br></br>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Container>
    );
};

export default OngoingProject;
