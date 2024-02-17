import React from "react";
import "./AddCompany.css";
const AddCompany = (props) =>{
    return(
        <div className="page-container">
            <div className="form-container">
                <div className="cardHeader">
                <h2>Company List</h2>
                <a href="#" className="btn" onClick={()=>{props.setHandleForm(prevState => !prevState)}}>Add Company</a>
                </div>
            </div>
        </div>
    )
}
export default AddCompany;