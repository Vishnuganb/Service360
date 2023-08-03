import React from "react";
import Pagination from 'react-bootstrap/Pagination';
import TrainingCard from './trainingCard';
import Row from 'react-bootstrap/esm/Row';

function bodyPage(){
    return(
            <div className="bodyPageContainer-jobs ms-lg-1 me-lg-5">
            <Row id='bodyPageRow1'>
                <div className="jobCardContainer">
                    <TrainingCard/>
                    <TrainingCard/>
                    <TrainingCard/>
                </div>
            </Row>
            <Row id='bodyPageRow2'>
                <div className="paginationContainer-jobs">
                    <Pagination className='pagination-element custom-pagination-job'>
                        <Pagination.First />
                        <Pagination.Prev />
                        <Pagination.Item active>{1}</Pagination.Item>
                        <Pagination.Item>{2}</Pagination.Item>
                        <Pagination.Item>{3}</Pagination.Item>
                        <Pagination.Item>{4}</Pagination.Item>
                        <Pagination.Item>{5}</Pagination.Item>
                        <Pagination.Ellipsis />
                        <Pagination.Next />
                        <Pagination.Last />
                    </Pagination>
                </div>
            </Row>
            </div>
    );
}

export default bodyPage;