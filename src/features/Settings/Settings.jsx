import "./Settings.scss";
import React, { useState, useRef, useEffect } from "react";
import { Typography, Tab, Tabs } from "@mui/material/";
import General from "./components/General/General";
import { Close as CloseIcon } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Settings() {
  const [currentTab, setCurrentTab] = useState(0);

  const onSelectTab = (_, tabIndex) => {
    setCurrentTab(tabIndex);
  };

  const navigate = useNavigate();

  return (
    <div className="settings" onClick={() => navigate("/", { replace: true })}>
      <div
        className="settings__window"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="settings__header">
          <Typography className="settings__title" variant="h4">
            Settings
          </Typography>
          <Button className="settings__close" variant="text" onClick={() => navigate("/", { replace: true })}>
            <CloseIcon />
          </Button>
        </div>

        <div className="settings__wrap">
          <div className="settings__tabs">
            <Tabs orientation="vertical" value={currentTab} onChange={onSelectTab}>
              <Tab label="General" />
              <Tab label="Categories" />
              <Tab label="Privacy" />
            </Tabs>
          </div>
          <div className="settings__tabs-content">
            {currentTab === 0 && <General />}
            {/* {currentTab === 1 && <Categories />}
            {currentTab === 2 && <Privacy />} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
