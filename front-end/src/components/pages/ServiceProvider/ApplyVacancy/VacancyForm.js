import '../../../../style/ServiceProvider/ApplyVacancy.css'
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

function ApplyVacancy(){
    return(
        <div className="VacancyForm-container">
            <h1>Electronics Technician</h1>
            <h2>Aptinex</h2>
            <form className="vacancy-form">
  <div className="vacancy-form-group">
    <label htmlFor="fname">Full Name <span style={{color: "red"}}>&nbsp;*</span></label>
    <input type="text" name="firstName" className="form-control" id="fname" placeholder="Enter your full name" />
  </div>
  <div className="vacancy-form-group">
    <label htmlFor="lname">Last Name <span style={{color: "red"}}>&nbsp;*</span></label>
    <input type="text" name="lastName" className="form-control" id="lname" placeholder="Enter your last name" />
  </div>
  <div className="vacancy-form-group">
    <label htmlFor="contactno">Contact Number <span style={{color: "red"}}>&nbsp;*</span></label>
    <input type="text" name="contactNumber" className="form-control" id="contactno" placeholder="Enter your contact number" />
  </div>
  <div className="vacancy-form-group">
    <label htmlFor="email">Email address <span style={{color: "red"}}>&nbsp;*</span></label>
    <input type="email" name="email" className="form-control" id="email" placeholder="Enter your email address" />
  </div>
  <div className="vacancy-form-group">
    <label htmlFor="education">Education Qualification <span style={{color: "red"}}>&nbsp;*</span></label>
    <select className="form-control" id="education" name="educationQualification" placeholder="">
      <option value="ol">Ordinary Levels</option>
      <option value="al">Advanced Levels</option>
      <option value="ug">Undergraduate</option>
      <option value="pg">Postgraduate</option>
      <option value="none">None</option>
    </select>
  </div>
  <div className="vacancy-form-group">
    <label htmlFor="experience">Do you have work experience <span style={{color: "red"}}>&nbsp;*</span></label>
    <select className="form-control" id="experience" name="workExperience" placeholder="">
      <option value="yes">Yes</option>
      <option value="no">No</option>
    </select>
  </div>
  <div className="vacancy-form-group">
    <label htmlFor="experience-years">How Many Years of Work Experience Do You Possess</label>
    <select className="form-control" id="experience-years" name="workExperienceYears" placeholder="Select the years of work experience">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3-5</option>
      <option value="5">5-10</option>
      <option value="10">{'>'}10</option>
    </select>
  </div>
  <div className="vacancy-form-group">
    <label htmlFor="salaryexpectation">Your Salary Expectations</label>
    <input type="text" name="salaryExpectation" className="form-control" id="salaryexpectation" placeholder="" />
  </div>
  <div className="vacancy-form-group">
    <label htmlFor="cvFile">Upload your CV</label>
    <input type="file" name="cv" className="form-control" id="cvFile" />
  </div>
  <Row className="vacancy-form-group-buttons mt-3">
    <Col>
      <input type="Submit" value="Apply" className="btn btn-primary btn-vacancy-form-k" />
    </Col>
    <Col>
      <a id="cancel-link" href="#"><button className="btn btn-primary">Cancel</button></a>
    </Col>
  </Row>
</form>

        </div>
    );
}

export default ApplyVacancy;