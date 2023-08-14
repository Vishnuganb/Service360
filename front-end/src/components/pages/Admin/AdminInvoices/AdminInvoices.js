import React, { useState } from "react";
import Form from "react-bootstrap/Form";

import AnalysisInvoices from "./AnalysisInvoices";
import GenerateInvoice from "./GenarateInvoices";

const AdminInvoices = () => {

  return (
    <div className="App">
      <div className="p-4">
        <AnalysisInvoices />
      </div>
      <h1>Invoice Generator</h1>
      <div className="p-4" >
        <GenerateInvoice />
        
      </div>
    </div>
  );
};

export default AdminInvoices;
