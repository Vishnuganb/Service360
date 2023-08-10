import React from "react";
import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";



import RejectedAds from "./RejectedAds";
import VerifiedAds from "./VerifiedAds";
import PendingAds from "./YetToVerifyAds";
import DisabledAds from "./DisabledAds"

const Ads = () => {
     const [key, setKey] = useState("home");
  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="home" title="Verified">
        <VerifiedAds />
      </Tab>
      <Tab eventKey="profile" title="Pending">
        <PendingAds />
      </Tab>
      <Tab eventKey="contact" title="Rejected">
        <RejectedAds />
      </Tab>
      <Tab eventKey="Disabled" title="Disabled">
        <DisabledAds />
      </Tab>
    </Tabs>
  );
};

export default Ads;
