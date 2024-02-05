export default function Registervalidation(values){
    
    let errors = {}

    if(!values.username.trim()){
        errors.username ="Username required";
    }

    if(!values.email.trim()){
        errors.email ="Email required";
    }
    else if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(values.email)){
        errors.email ="Email address is invalid";
    }

    if(!values.mobileno.trim()){
        errors.mobileno ="Mobile Number required";
    }
    else if(!/^(\+\d{1,3}[- ]?)?\d{10}$/.test(values.mobileno)){
        errors.mobileno ="Mobile number must be valid and contain 10 digits";
    }

    if(!values.password.trim()){
        errors.password ="Password required";
    }
    else if(values.password.length < 6){
        errors.password ="Password needs to be 6 characters or more";
    }

    if(!values.cpassword.trim()){
        errors.cpassword ="Password required";
    }
    else if(values.cpassword !== values.password){
        errors.cpassword = "Passwords do not match"
    }

    if(!values.about.trim()){
        errors.about ="About us required";
    }

    return errors;
}