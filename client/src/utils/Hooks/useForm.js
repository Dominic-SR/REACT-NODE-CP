import { useEffect } from "react";
const useForm = ({validate,values,setValues,errors,setErrors,setFormValidation,submitValue, setSubmitValue}) => {

const handleChange = (e) =>{
    const {name, value} = e.target;
    const updateErrors = {...errors}
    delete updateErrors[name]
    setErrors(updateErrors)

    setValues((prevValues)=>{
        return{
            ...prevValues,
            [name]: value,
        }
    })
}

const handleSubmit = async(event) => {
    event.preventDefault();
    await setErrors(validate(values));
    await submitFunction()
}

const submitFunction = () =>{
    console.log("===>",errors);
    // if(Object.keys(errors).length === 0){
    //     setFormValidation(true)
    // }
}


return {handleChange, values, handleSubmit, errors}
}

export default useForm