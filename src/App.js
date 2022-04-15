import React, { useState, useEffect} from 'react';
import { Outlet, Link, NavLink } from 'react-router-dom';
import Dropdown  from 'react-bootstrap/Dropdown';
import logo from './images/azure-icon.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const REACT_VERSION = React.version;

export default function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('api/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    })
  }, []);

  return (
    <div className="App">

    <nav className="navbar navbar-expand-lg navbar-light bg-light"
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="" width="30" height="24" className="d-inline-block align-text-top"/>
            Azure Restaurant Review<br/>
          </a>
          <Link to="/restaurants">Restaurants</Link> | {" "}
          <Link to="/reviews">Reviews</Link> | {" "}
          <Link to="/addreview">Add a Review</Link>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Azure Docs
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="https://docs.microsoft.com/azure">Azure Doc</Dropdown.Item>
              <Dropdown.Item href="https://azure.microsoft.com/develop/python/">Python on Azure</Dropdown.Item>
              <Dropdown.Item href="https://docs.microsoft.com/azure/developer/python">Python on Azure Developer Docs</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
