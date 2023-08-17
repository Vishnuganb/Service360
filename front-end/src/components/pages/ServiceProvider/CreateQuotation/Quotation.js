import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useEffect } from 'react';

function ActivityReport() {
    const [activityReports, setActivityReports] = useState([]);
    const [quotationData, setQuotationData] = useState({
        customerName: '',
        projectName: '',
        description: '',
        item: '',
        quantity: '',
        unitPrice: '',
    });

    const [quoteId, setQuoteId] = useState(null); // Initialize quoteId as null

    useEffect(() => {
        // Generate the quote ID only once when the component mounts
        const generatedQuoteId = Math.floor(Math.random() * 100000);
        setQuoteId(generatedQuoteId);
    }, []); // Empty dependency array ensures it runs only once on mount

    const handleSubmit = (event) => {
        event.preventDefault();
        const newReport = { ...quotationData };
        newReport.amount = (parseInt(newReport.quantity) * parseFloat(newReport.unitPrice)).toFixed(2);
        setActivityReports([...activityReports, newReport]);
        setQuotationData({
        ...quotationData,
        item: '',
        quantity: '',
        unitPrice: '',
        });
    };

    // const handleCompleteAndSend = (event) => {
    //     event.preventDefault();
    //     const newReport = { ...quotationData };
    //     newReport.amount = (parseInt(newReport.quantity) * parseFloat(newReport.unitPrice)).toFixed(2);
    //     setActivityReports([...activityReports, newReport]);
    //     setQuotationData({
    //     ...quotationData,
    //     item: '',
    //     quantity: '',
    //     unitPrice: '',
    //     });
    // };

    // Calculate the subtotal and total
    const subtotal = activityReports.reduce((acc, report) => acc + parseFloat(report.amount), 0);
    const tax = 0.1; // 10% tax
    const total = (subtotal + (subtotal * tax)).toFixed(2);

    // Get today's date
    const today = new Date().toLocaleDateString();

    return (
        <div className="container">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <span className="ms-lg-2" style={{ fontSize: "28px", fontWeight: "bold" }}>Create Quotation</span>
                {/* Complete and Send Button */}
            </div>

            {/* Bill to section */}
            <div className="row mt-2mb-3">
                <div className="col-md-6 d-flex flex-row">
                    <div className='d-flex flex-column ms-1'>
                        <p>Pranavan</p>
                        <p>No 11, Nelson Place Colombo</p>
                    </div>
                </div>
                <div className="col-md-6 text-md-end">
                    <p>Quote Date: {today}</p>
                    <p>Quote ID: {quoteId}</p>
                </div>
            </div>

            <table className="table table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Unit Price</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {activityReports.map((report, index) => (
                        <tr key={index}>
                            <td>{report.item}</td>
                            <td>{report.quantity}</td>
                            <td>LKR {report.unitPrice}</td>
                            <td>LKR {report.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <form onSubmit={handleSubmit} className="mb-5">
                <div className="form-group">
                    <label>Item:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="item"
                        value={quotationData.item}
                        onChange={(e) => setQuotationData({ ...quotationData, item: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label>Quantity:</label>
                    <input
                        type="number"
                        className="form-control"
                        name="quantity"
                        value={quotationData.quantity}
                        onChange={(e) => setQuotationData({ ...quotationData, quantity: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label>Unit Price:</label>
                    <input
                        type="number"
                        step="0.01"
                        className="form-control"
                        name="unitPrice"
                        value={quotationData.unitPrice}
                        onChange={(e) => setQuotationData({ ...quotationData, unitPrice: e.target.value })}
                    />
                </div>
                <div className='d-flex flex-row mt-2'>
                    <Button type="submit" className="btn-ServiceProvider-1">Add Item</Button>
                    <Button className="btn-ServiceProvider-2 d-flex ms-auto">Complete and Send</Button>
                </div>
            </form>
        </div>
    );
}

export default ActivityReport;
