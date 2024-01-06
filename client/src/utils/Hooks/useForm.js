import { useState } from 'react'

const useForm = (validate) => {
const [values, setValues] = useState({
    username:"",
    email:"",
    mobileno:"",
})

const [errors, setErrors] = useState({});

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

const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate(values));
    if(Object.keys(errors).length === 0){
        console.log("PayLoad",values);
    }
}

return {handleChange, values, handleSubmit, errors}
}

export default useForm