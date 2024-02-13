import React from "react";
import "./Company.css";

const Company = () =>{
    return(
       <div className="page-container">
            <div className="page-title">
                <h2>Company Listing</h2>
            </div>   
            <div className="listing-page-inner-container">
            <div className="listing-table">
            <table >
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Mobile No</th>
                    <th>No of Buses</th>
                    <th>Options</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Centro comercial Moctezuma</td>
                    <td>Francisco Chang</td>
                    <td>Mexico</td>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                </tr>
            </table>
            </div>
            </div>
       </div>
    )
}

export default Company;