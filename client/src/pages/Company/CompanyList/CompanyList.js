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
                    <td>S.No</td>
                    <td>Comapny Name</td>
                    <td>Email</td>
                    <td>MobileNo</td>
                    <td>Address</td>
                    <td>No of Buses</td>
                    <td>Options</td>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>1</td>
                    <td>Company One</td>
                    <td>One@gmail.com</td>
                    <td>+91 9876543210</td>
                    <td>5/27 New Street, New York, USA</td>
                    <td>12</td>    
                    <td>
                        <ion-icon name="create-outline"></ion-icon>
                        <ion-icon name="trash-outline"></ion-icon>
                    </td>            
                </tr>

                <tr>
                    <td>1</td>
                    <td>Company One</td>
                    <td>One@gmail.com</td>
                    <td>+91 9876543210</td>
                    <td>5/27 New Street, New York, USA</td>
                    <td>12</td>      
                    <td>
                        <ion-icon name="create-outline"></ion-icon>
                        <ion-icon name="trash-outline"></ion-icon>
                    </td>                      
                </tr>

                <tr>
                    <td>1</td>
                    <td>Company One</td>
                    <td>One@gmail.com</td>
                    <td>+91 9876543210</td>
                    <td>5/27 New Street, New York, USA</td>
                    <td>12</td>      
                    <td>
                        <ion-icon name="create-outline"></ion-icon>
                        <ion-icon name="trash-outline"></ion-icon>
                    </td>                      
                </tr>

                <tr>
                    <td>1</td>
                    <td>Company One</td>
                    <td>One@gmail.com</td>
                    <td>+91 9876543210</td>
                    <td>5/27 New Street, New York, USA</td>
                    <td>12</td>      
                    <td>
                        <ion-icon name="create-outline"></ion-icon>
                        <ion-icon name="trash-outline"></ion-icon>
                    </td>                      
                </tr>

                <tr>
                    <td>1</td>
                    <td>Company One</td>
                    <td>One@gmail.com</td>
                    <td>+91 9876543210</td>
                    <td>5/27 New Street, New York, USA</td>
                    <td>12</td>      
                    <td>
                        <ion-icon name="create-outline"></ion-icon>
                        <ion-icon name="trash-outline"></ion-icon>
                    </td>                      
                </tr>

                <tr>
                    <td>1</td>
                    <td>Company One</td>
                    <td>One@gmail.com</td>
                    <td>+91 9876543210</td>
                    <td>5/27 New Street, New York, USA</td>
                    <td>12</td>                
                    <td>
                        <ion-icon name="create-outline"></ion-icon>
                        <ion-icon name="trash-outline"></ion-icon>
                    </td>            
                </tr>

                <tr>
                    <td>1</td>
                    <td>Company One</td>
                    <td>One@gmail.com</td>
                    <td>+91 9876543210</td>
                    <td>5/27 New Street, New York, USA</td>
                    <td>12</td>      
                    <td>
                        <ion-icon name="create-outline"></ion-icon>
                        <ion-icon name="trash-outline"></ion-icon>
                    </td>                      
                </tr>
            </tbody>
        </table>
        </div>
    </div>
    )
}
export default CompanyList