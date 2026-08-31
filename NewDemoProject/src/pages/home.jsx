

import { useState } from "react";

import "./home.css";
import MenuButton from "../components/menubutton";
import {opportunities,examUpdates} from '../jsfiles/list'

function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = opportunities.filter((item) =>{
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
 } );
  const short = examUpdates.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar">
        
        <h1 className="logo">CareerLinks</h1>
        <h2 style={{ color: "blue" }}></h2>
        {
       
        }
        <input
          type="text"
          placeholder="Search opportunities..."
          className="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        
        />
       
        <MenuButton/>
      
      </nav>
    

      {/* Main Content */}
      <main className="main-content">

        <h2 style={{color:"blue"}}>Current Opportunities</h2>

        <table className="opportunity-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Description</th>
              <th>Eligibility</th>
              <th>Last Date</th>
              <th>Apply</th>
            </tr>
          </thead>
          <tbody>   
            {filtered.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.eligibility}</td>
                <td>{item.lastDate}</td>
                <td>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    Apply
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      
        
        <h2  style={{color:"blue"}}>current ongoing exams</h2>

        <table className="opportunity-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Description</th>
              <th>Eligibility</th>
              <th>Last Date</th>
              <th>Apply</th>
            </tr>
          </thead>
          <tbody>
            {short.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.eligibility}</td>
                <td>{item.lastDate}</td>
                <td>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    Apply
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 CareerLinks. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
