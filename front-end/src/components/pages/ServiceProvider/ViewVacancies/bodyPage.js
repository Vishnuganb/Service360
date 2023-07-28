import '../../../../style/ServiceProvider/ViewVacancies.css'
import Pagination from 'react-bootstrap/Pagination';
import VacancyCard from './vacancyCard';
import Row from 'react-bootstrap/esm/Row';

function bodyPage() {

    return (
          <div className="bodyPageContainer-vacancy">
                    <Row id='bodyPageRow1'>
                        <div className="vacancyCardContainer">
                            <VacancyCard/>
                            <VacancyCard/>
                            <VacancyCard/>
                        </div>
                    </Row>
                    <Row id='bodyPageRow2'>
                        <div className="paginationContainer-vacancies">
                            <Pagination className='pagination-element'>
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