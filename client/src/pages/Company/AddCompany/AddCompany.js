import React from "react";
import "./AddCompany.css";
const AddCompany = (props) =>{
    let imgPreiew = document.getElementById("#imagePreview")
    let imgUpload = document.getElementById("#imageUpload")
   
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {      
                imgPreiew.css('background-image', 'url('+e.target.result +')');
                imgPreiew.hide();
                imgPreiew.fadeIn(650);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
   
    imgUpload?.change(function() {
        readURL(this);
    });

    return(
        <div className="page-container">
            <div className="form-group-container">
            <form >
                <div className="cardHeader">
                <h2>Company List</h2>
                <a href="#" className="btn" onClick={()=>{props.setHandleForm(prevState => !prevState)}}>View Company List</a>
                </div>

                <div className="form-group-row-container">
                    <div className="avatar-upload">
                        <div className="avatar-edit">
                            <input type='file' id="imageUpload" accept=".png, .jpg, .jpeg" />
                            <label htmlFor="imageUpload"></label>
                        </div>
                        <div className="avatar-preview">
                            <div id="imagePreview" style={{backgroundImage : "url('http://i.pravatar.cc/500?img=7')"}}>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form-group-row-container">
                    <div className="form-group-inputs">
                    <label htmlFor='username' className="form-label">Comapny Name</label>
                    <input 
                    id="username"
                    type="text"
                    name="username"
                    />
                    </div>

                    <div className="form-group-inputs">
                    <label htmlFor='username' className="form-label">Company Email</label>
                    <input 
                    id="username"
                    type="text"
                    name="username"
                   
                    />
                    </div>
                </div>

                <div className="form-group-row-container">
                    <div className="form-group-inputs">
                    <label htmlFor='username' className="form-label">Comapny MobileNo</label>
                    <input 
                    id="username"
                    type="text"
                    name="username"
                 
                    />
                    </div>

                    <div className="form-group-inputs">
                    <label htmlFor='username' className="form-label">Company Password</label>
                    <input 
                    id="username"
                    type="text"
                    name="username"
                    
                    />
                    </div>
                </div>

                <div className="form-group-row-container">
                    <div className="form-group-inputs">
                    <label htmlFor='username' className="form-label">Comapny Address</label>
                    <input 
                    id="username"
                    type="text"
                    name="username"
                
                    />
                    </div>

                    <div className="form-group-inputs">
                    <label htmlFor='username' className="form-label">No of Buses</label>
                    <input 
                    id="username"
                    type="Number"
                    name="username"
                   
                    />
                    </div>
                </div>
                
                <button className='form-group-btn' type='submit'>Add Company</button>
            </form>
            </div>
        </div>
    )
}
export default AddCompany;