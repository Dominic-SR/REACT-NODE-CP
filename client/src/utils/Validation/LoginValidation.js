export default function LoginValidation(values){

    let errors = {}

    if(!values.email.trim()){
        errors.email = "Email required";
    }
    else if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(values.email)){
        errors.email ="Email address is invalid";
    }
    if(!values.password.trim()){
        errors.password ="Password required";
    }
    else if(values.password.length < 6){
        errors.password ="Password needs to be 6 characters or more";
    }

    return errors

}