import "../../../../style/ServiceProvider/Dashboard.css";

import { AreaChart, Area, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,  Cell } from 'recharts';

function AnalysisInvoices() {

  const data = [
    {
      "month": "January",
      "income": 18900
    },
    {
      "month": "February",
      "income": 10000
    },
    {
      "month": "March",
      "income": 20000
    },
    {
      "month": "April",
      "income": 26000
    },
    {
      "month": "May",
      "income": 45000
    },
    {
      "month": "June",
      "income": 12000
    },
    {
      "month": "July",
      "income": 24500
    },
    {
      "month": "August",
      "income": 21000
    },
    {
      "month": "September",
      "income": 0
    },
    {
      "month": "October",
      "income": 0
    },
    {
      "month": "November",
      "income": 0
    },
    {
      "month": "December",
      "income": 0
    }
  ];

  return (
    // <div className="graphContainer px-3 py-4">
    <div className="graphContainer px-3 py-4" style={{ height: 400}}> 
      <ResponsiveContainer width="100%" height="90%">
        
        <LineChart data={data} margin={{ top: 0, right: 30, left: 0, bottom: 42 }}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" interval="preserveStartEnd" angle={-45} textAnchor="end" />
          <YAxis dataKey="income" domain={['auto', 'auto']} />
          {/* 'auto' means the Y-axis will automatically adjust based on the data */}
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Line type="monotone" dataKey="income" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />

          {/* Adding Legends with Custom Label */}
          <Legend
            verticalAlign="top"
            align="right"
            iconType="rect"
            wrapperStyle={{ paddingTop: 15 }}
            payload={[{ value: 'income (LKR)', type: 'rect', color: '#8884d8' }]} // Custom label and icon
          />
        </LineChart>

      </ResponsiveContainer>
    </div>
  );
}

export default AnalysisInvoices;
