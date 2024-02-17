import React from "react"
import "./CompanyList.css"
const CompanyList = (props) =>{
    return(
        <div className="page-container">       
        <div className="table-container">
        <div className="cardHeader">
            <h2>Company List</h2>
            <a href="#" className="btn" onClick={()=>{props.setHandleForm(prevState => !prevState)}}>Add Company</a>
        </div>

        <table>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Payment</td>
                    <td>Status</td>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>Star Refrigerator</td>
                    <td>$1200</td>
                    <td>Paid</td>
                    <td><span className="status delivered">Delivered</span></td>
                </tr>

                <tr>
                    <td>Dell Laptop</td>
                    <td>$110</td>
                    <td>Due</td>
                    <td><span className="status pending">Pending</span></td>
                </tr>

                <tr>
                    <td>Apple Watch</td>
                    <td>$1200</td>
                    <td>Paid</td>
                    <td><span className="status return">Return</span></td>
                </tr>

                <tr>
                    <td>Addidas Shoes</td>
                    <td>$620</td>
                    <td>Due</td>
                    <td><span className="status inProgress">In Progress</span></td>
                </tr>

                <tr>
                    <td>Star Refrigerator</td>
                    <td>$1200</td>
                    <td>Paid</td>
                    <td><span className="status delivered">Delivered</span></td>
                </tr>

                <tr>
                    <td>Dell Laptop</td>
                    <td>$110</td>
                    <td>Due</td>
                    <td><span className="status pending">Pending</span></td>
                </tr>

                <tr>
                    <td>Apple Watch</td>
                    <td>$1200</td>
                    <td>Paid</td>
                    <td><span className="status return">Return</span></td>
                </tr>

                <tr>
                    <td>Addidas Shoes</td>
                    <td>$620</td>
                    <td>Due</td>
                    <td><span className="status inProgress">In Progress</span></td>
                </tr>
            </tbody>
        </table>
        </div>
    </div>
    )
}
export default CompanyList