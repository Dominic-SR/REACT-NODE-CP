import {useState} from "react";
import "./Company.css";
import AddCompany from "./AddCompany/AddCompany";
import CompanyList from "./CompanyList/CompanyList";

const Company = () =>{
    const [handleForm, setHandleForm] = useState(false)

    return(
        handleForm? 
        <AddCompany
        setHandleForm={setHandleForm}
         />:
        <CompanyList
        setHandleForm={setHandleForm}
        />
    )
}

export default Company;