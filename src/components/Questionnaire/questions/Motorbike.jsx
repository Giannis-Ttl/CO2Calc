import React from "react";
import { useState } from "react";
import Alert from "./Alert";

const Motorbike = ({ toNextTab, toPrevTab, handleMotorbikeRes }) => {
  const [alert, setAlert] = useState(true);
  const [mileage, setMileage] = useState(0);
  const [age, setAge] = useState("2");
  const [efficiency, setEfficiency] = useState(3.5);

  const motorbikeForm = (e) => {
    e.preventDefault();
    handleMotorbikeRes(mileage, age, efficiency);
    setAlert(false);
  };

  const handleMileage = (e) => {
    if (e < 0) {
      setMileage(0);
    } else if (e > 300000) {
      setMileage(300000);
    } else {
      setMileage(e);
    }
  };

  const handleEfficiency = (e) => {
    if (e < 3.5) {
      setEfficiency(3.5);
    } else if (e > 10) {
      setEfficiency(10);
    } else {
      setEfficiency(e);
    }
  };

  const hideAlert = (e) => {
    e.preventDefault();
    setAlert(true);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title text-center">
          Motorbike carbon footprint calculator
        </h5>
        <form
          className="row justify-content-md-center"
          onSubmit={(e) => {
            motorbikeForm(e);
          }}
        >
          <Alert alert={alert} hideAlert={hideAlert}></Alert>
          <div className="col-12 py-2">
            <span>You can enter details for motorbikes</span>
          </div>
          <div className="col-md-4 py-2">
            <label className="form-label">Mileage:</label>
            <div className="input-group">
              <input
                type="number"
                className="form-control"
                value={mileage}
                onChange={(e) => {
                  handleMileage(e.target.value);
                }}
                required
              />
              <select className="form-select" defaultValue="1" required>
                <option value="1">KM</option>
                <option value="2">Miles</option>
              </select>
            </div>
          </div>
          <div className="col-md-4 py-2">
            <label className="form-label">Motorbike Age:</label>
            <select
              className="form-select"
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
              }}
              required
            >
              <option value="1">1998 or older...</option>
              <option value="2">1999 - 2009</option>
              <option value="3">2009 - 2019</option>
              <option value="4">2020 or newer...</option>
            </select>
          </div>
          <div className="col-md-6 py-2">
            <label className="form-label">Enter efficiency:</label>
            <div className="input-group">
              <input
                type="number"
                className="form-control"
                value={efficiency}
                onChange={(e) => {
                  handleEfficiency(e.target.value);
                }}
                required
              />
              <select className="form-select" defaultValue="1" required>
                <option value="1">L/100km</option>
                <option value="2">g/km</option>
                <option value="3">mpg(UK)</option>
                <option value="4">mpg(US)</option>
              </select>
              <select className="form-select" defaultValue="1" required>
                <option value="1">Petrol</option>
                <option value="2">Diesel</option>
                <option value="3">LPG</option>
                <option value="4">CNG</option>
              </select>
            </div>
          </div>
          <div className="col-12 py-2">
            <div className="d-flex justify-content-between">
              <button onClick={(e) => toPrevTab(e)} className="btn btn-primary">
                Car
              </button>
              <button type="submit" className="btn btn-success mx-1">
                Calculate & Add To Footprint
              </button>
              <button onClick={(e) => toNextTab(e)} className="btn btn-primary">
                Bus & Rail
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Motorbike;
