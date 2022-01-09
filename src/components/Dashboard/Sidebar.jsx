import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWind, faIndustry } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="d-flex align-items-center justify-content-center p-2 m-3 m-md-0 rounded bg-white">
      <div
        className="nav flex-column nav-pills"
        id="v-pills-tab"
        role="tablist"
        aria-orientation="vertical"
      >
        <button
          className="nav-link active d-flex align-items-center"
          id="v-pills-CO2Emm-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-CO2Emm"
          type="button"
          role="tab"
          aria-controls="v-pills-CO2Emm"
          aria-selected="true"
        >
          <FontAwesomeIcon icon={faIndustry} className="me-2"></FontAwesomeIcon>
          Emmissions
        </button>
        <button
          className="nav-link d-flex align-items-center"
          id="v-pills-AirQuality-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-AirQuality"
          type="button"
          role="tab"
          aria-controls="v-pills-AirQuality"
          aria-selected="false"
        >
          <FontAwesomeIcon icon={faWind} className="me-2"></FontAwesomeIcon>
          Air Quality
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
