import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../style/Customer/Viewvacancy.css';
import * as Icon from 'react-bootstrap-icons';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { MDBDataTableV5, MDBTable } from 'mdbreact';

const tabledata = {
    columns: [
        {
            label: 'Date',
            field: 'date',
            sort: 'asc',
            width: 150
        },
        {
            label: 'Category',
            field: 'category',
            sort: 'asc',
            width: 150
        },
        {
            label: 'Service provider',
            field: 'service_provider',
            sort: 'asc',
            width: 100
        },
        {
            label: 'Status',
            field: 'status',
            sort: 'asc',
            width: 100
        },

        {
            label: '  ',
            field: 'action',
            sort: 'NONE',
            width: 100
        }
    ],
    rows: [
        {
            date: '27/07/2023',
            category: 'Ac Repair',
            service_provider: 'Vinoth Kumar',
            status: 'Pending',
            // status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>,
            action: <div className='d-flex gap-2 align-items-center'><Icon.EyeFill /><i class="bi bi-check-circle-fill"></i><i class="bi bi-file-excel-fill"></i></div>
        },
        {
            date: '27/07/2023',
            category: 'Ac Repair',
            service_provider: 'Vinoth Kumar',
            status: 'Checked',
            // status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>,
            action: <div className='d-flex gap-2 align-items-center'><Icon.EyeFill /><i class="bi bi-check-circle-fill"></i><i class="bi bi-file-excel-fill"></i></div>
        },
        {
            date: '27/07/2023',
            category: 'Ac Repair',
            service_provider: 'Vinoth Kumar',
            status: 'Checked',
            // status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>,
            action: <div className='d-flex gap-2 align-items-center'><Icon.EyeFill /><i class="bi bi-check-circle-fill"></i><i class="bi bi-file-excel-fill"></i></div>
        },
        {
            date: '27/07/2023',
            category: 'Ac Repair',
            service_provider: 'Vinoth Kumar',
            status: 'Checked',
            // status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>,
            action: <div className='d-flex gap-2 align-items-center'><Icon.EyeFill /><i class="bi bi-check-circle-fill"></i><i class="bi bi-file-excel-fill"></i></div>
        },
        {
            date: '27/07/2023',
            category: 'Ac Repair',
            service_provider: 'Vinoth Kumar',
            status: 'Checked',
            // status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>,
            action: <div className='d-flex gap-2 align-items-center'><Icon.EyeFill /><i class="bi bi-check-circle-fill"></i><i class="bi bi-file-excel-fill"></i></div>
        },
        {
            date: '27/07/2023',
            category: 'Ac Repair',
            service_provider: 'Vinoth Kumar',
            status: 'Checked',
            // status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>,
            action: <div className='d-flex gap-2 align-items-center'><Icon.EyeFill /><i class="bi bi-check-circle-fill"></i><i class="bi bi-file-excel-fill"></i></div>
        },
        {
            date: '27/07/2023',
            category: 'Ac Repair',
            service_provider: 'Vinoth Kumar',
            status: 'Checked',
            // status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>,
            action: <div className='d-flex gap-2 align-items-center'><Icon.EyeFill /><i class="bi bi-check-circle-fill"></i><i class="bi bi-file-excel-fill"></i></div>
        },
        {
            date: '27/07/2023',
            category: 'Ac Repair',
            service_provider: 'Vinoth Kumar',
            status: 'Checked',
            // status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>,
            action: <div className='d-flex gap-2 align-items-center'><Icon.EyeFill /><i class="bi bi-check-circle-fill"></i><i class="bi bi-file-excel-fill"></i></div>
        },
        {
            date: '27/07/2023',
            category: 'Ac Repair',
            service_provider: 'Vinoth Kumar',
            status: 'Checked',
            // status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>,
            action: <div className='d-flex gap-2 align-items-center'><Icon.EyeFill /><i class="bi bi-check-circle-fill"></i><i class="bi bi-file-excel-fill"></i></div>
        },
        {
            date: '27/07/2023',
            category: 'Ac Repair',
            service_provider: 'Vinoth Kumar',
            status: 'Checked',
            // status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>,
            action: <div className='d-flex gap-2 align-items-center'><Icon.EyeFill /><i class="bi bi-check-circle-fill"></i><i class="bi bi-file-excel-fill"></i></div>
        },
        {
            date: '27/07/2023',
            category: 'Ac Repair',
            service_provider: 'Vinoth Kumar',
            status: 'Checked',
            // status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>,
            action: <div className='d-flex gap-2 align-items-center'><Icon.EyeFill /><i class="bi bi-check-circle-fill"></i><i class="bi bi-file-excel-fill"></i></div>
        },
        {
            date: '27/07/2023',
            category: 'Ac Repair',
            service_provider: 'Vinoth Kumar',
            status: 'Checked',
            // status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>,
            action: <div className='d-flex gap-2 align-items-center'><Icon.EyeFill /><i class="bi bi-check-circle-fill"></i><i class="bi bi-file-excel-fill"></i></div>
        },
        {
            date: '27/07/2023',
            category: 'Ac Repair',
            service_provider: 'Vinoth Kumar',
            status: 'Checked',
            // status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>,
            action: <div className='d-flex gap-2 align-items-center'><Icon.EyeFill /><i class="bi bi-check-circle-fill"></i><i class="bi bi-file-excel-fill"></i></div>
        },
        {
            date: '27/07/2023',
            category: 'Ac Repair',
            service_provider: 'Vinoth Kumar',
            status: 'Checked',
            // status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>,
            action: <div className='d-flex gap-2 align-items-center'><Icon.EyeFill /><i class="bi bi-check-circle-fill"></i><i class="bi bi-file-excel-fill"></i></div>
        },
        {
            date: '27/07/2023',
            category: 'Ac Repair',
            service_provider: 'Vinoth Kumar',
            status: 'Checked',
            // status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>,
            action: <div className='d-flex gap-2 align-items-center'><Icon.EyeFill /><i class="bi bi-check-circle-fill"></i><i class="bi bi-file-excel-fill"></i></div>
        },
        {
            date: '27/07/2023',
            category: 'Ac Repair',
            service_provider: 'Vinoth Kumar',
            status: 'Checked',
            // status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>,
            action: <div className='d-flex gap-2 align-items-center'><Icon.EyeFill /><i class="bi bi-check-circle-fill"></i><i class="bi bi-file-excel-fill"></i></div>
        },
    ]
};

const ViewVacancy = () => (
    <>
        <div className="row">
            <div className='col-md-4'></div>

            <div className="col-md-7">
                <div className="row"></div>
                <div className="vacancy-container background-total accordion bg-white rounded-3 mb-4 me-3">
                    <div className="col-12 d-flex flex-row justify-content-between">
                        <div className='d-flex flex-row gap-4 p-3 '>
                            <p className="text-dark fs-6 fw-bold vacancytext">Vacancies Responses </p>
                            {/* <p className="fs-3 fw-bold Cabin-text" style={{ color: "#A2A3B1" }}>Responses</p> */}
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className='p-4'>

                        <MDBDataTableV5 responsive
                            striped
                            bordered
                            small
                            searching={true}
                            sortable={true}
                            data={tabledata}
                            exportToCSV={true}
                            paging={true}
    
                            // Add the 'options' prop for customizing search position
                            options={{
                                searchTop: true, // Show search bar at the top of the table

                                
                            }}

                        />
                    </div>

                </div>
            </div></div>

    </>
)

export default ViewVacancy;