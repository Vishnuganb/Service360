import React, { useState } from 'react';
import { Modal } from "react-bootstrap";
import Container from "react-bootstrap/Container";

import { Link } from "react-router-dom";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,} from 'recharts';
import styled from "styled-components";

import "../../../../style/advertiser/AdIndex.css";


import backgroundImage from "../../../../assets/images/header/Background.png";

const getLastDayOfMonth = (date) => {
  const nextMonth = new Date(date);
  nextMonth.setMonth(nextMonth.getMonth() + 1);
  nextMonth.setDate(0);
  return nextMonth.getDate();
};

const generateDailyData = () => {
  const data = [];
  const currentDate = new Date();
  const lastMonth = new Date(currentDate);
  lastMonth.setMonth(lastMonth.getMonth() - 1);

  for (let i = 0; i < getLastDayOfMonth(lastMonth); i++) {
    data.push({ day: i.toString(), AdViews: Math.floor(Math.random() * 100) });
  }
  return data;
};

const generateMonthlyData = () => {
  const data = [];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  for (let i = 0; i < 12; i++) {
    data.push({ month: months[i], AdViews: Math.floor(Math.random() * 1000) });
  }
  return data;
};

const StyledModalFooter = styled(Modal.Footer)`
        justify-content: flex-end;
    `;



const AdDashbord = () => {
 


  const [datas, setDatas] = useState({
    showModal: false,
    showDetailsModal: false,
    selectedProvider: null,
    enable: true,

  });

  const [view, setView] = useState('daily');

  const [selectedOption, setSelectedOption] = useState('weekly');



  const advertisementDataWeekly = [
    { category: 'Spare parts', value: 120 },
    { category: 'Tools', value: 200 },
    { category: 'Equipment', value: 150 },
    { category: 'Others', value: 80 },
  ];

  const advertisementDataMonthly = [
    { category: 'Spare parts', value: 220 },
    { category: 'Tools', value: 180 },
    { category: 'Equipment', value: 250 },
    { category: 'Others', value: 120 },
  ];


  const chartDataToShow = view === 'daily' ? generateDailyData() : generateMonthlyData();



  const handleViewChange = (e) => {
    setView(e.target.value);
  };




  const chartData = view === 'daily' ? generateDailyData() : generateMonthlyData();

  const gradientOffset = () => {
    const dataMax = Math.max(...chartData.map((item) => item.AdViews));
    const dataMin = Math.min(...chartData.map((item) => item.AdViews));

    if (dataMax <= 0) {
      return 0;
    }
    if (dataMin >= 0) {
      return 1;
    }

    return dataMax / (dataMax - dataMin);
  };

  const colorGradient = () => (
    <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="0">
      <stop offset={gradientOffset()} stopColor="#687699" />
      <stop offset={gradientOffset()} stopColor="#687699" />
    </linearGradient>
  );

  return (
    <Container
      className="p-3 px-5"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div>
        <h1>Dashboard</h1>
      </div>
      <h2 className="AdPageHeading">Your Ads</h2>

      <div className="adDashCountDiv d-flex justify-content-center gap-3">
        <div
          className="AdCountCol shadow  bg-white rounded"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <p className="AdTotal">Total</p>
          <p className="adNo">10</p>
        </div>

        <div
          className="AdCountCol shadow bg-white rounded"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <p className="AdTotal">Verified</p>
          <p className="adNo">9</p>
        </div>

        <div
          className="AdCountCol shadow  bg-white rounded"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <p className="AdTotal">Rejected</p>
          <p className="adRejNo">1</p>
        </div>
      </div>
      <div className="adCenterCont mt-3">
        <Link to="/advertiser/CreateAd" className="PostAd">
          <button className="PostAd">Post New Ad</button>
        </Link>
      </div>
      <hr className="AdHr" />

      <div>
        <div className="dashboard-container align-items-center justify-content-center w-100">
          <div className="d-flex justify-content-between w-100">
            <h2 className="chart-title mb-4 ms-5 fs-3">
              Advertisements Analytics
            </h2>
            <div className="col-xs-2 col-sm-3 col-md-2 col-lg-3 col-xl-2 m-3 me-xs-5  align-items-end">
              <div className="input-group">
                <select
                  value={view}
                  onChange={handleViewChange}
                  className="form-select"
                >
                  <option value="daily">Daily</option>
                  <option value="monthly">Monthly</option>
                </select>
              </div>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartDataToShow}>
              <defs>{colorGradient()}</defs>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey={view === "daily" ? "day" : "month"}
                tick={{ fontSize: 12 }}
                tickLine={false}
                axisLine={false}
              />
              <YAxis tickLine={false} axisLine={false} strokeWidth={0.1} />
              <Tooltip />
              <Legend />
              <Bar dataKey="AdViews" fill="url(#colorGradient)" barSize={15} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="p-3 mt-3 ">
        <div>
          <h2>Subscribtion Details</h2>
        </div>

        <div className="d-flex gap-3 justify-content-center">
          {" "}
          <div
            style={{ width: "fit-content" }}
            className="shadow p-5 bg-white rounded border d-flex flex-column align-items-center gap-3"
          >
            <div>
              <h4 className="text-center">Your Plan</h4>
            </div>
            <div className="d-flex align-items-center ">
              <i className="fa-solid fa-chess-king fa-2xl"> Gold</i>
            </div>
          </div>
          <div
            style={{ width: "fit-content" }}
            className="shadow p-5 bg-white rounded border d-flex flex-column align-items-center gap-3"
          >
            <div>
              <h4 className="text-center">Start Date</h4>
            </div>
            <div className="d-flex  gap-3">
              <div style={{ height: "fit-content" }}>
                <h3 className='GreenDate'>Thu Aug 10 2023</h3>
              </div>
            </div>
          </div>
          <div
            style={{ width: "fit-content" }}
            className="shadow p-5 bg-white rounded border d-flex flex-column align-items-center gap-3"
          >
            <div>
              <h4 className="text-center">End Date</h4>
            </div>
            <div className="d-flex align-items-center gap-3">
              <h3 className='redDate'> Sun Sep 10 2023</h3>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AdDashbord;