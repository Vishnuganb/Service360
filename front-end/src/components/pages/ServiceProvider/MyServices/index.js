import React from 'react';
import BodyTable from './serviceTable.js';
import BodyHead from './serviceHead.js';

function index() {
    return (
        <div className="index-container ms-lg-4 me-lg-5 p-sm-5 p-3 border rounded">
            <BodyHead />
            <BodyTable />
        </div>
    );
}

export default index;