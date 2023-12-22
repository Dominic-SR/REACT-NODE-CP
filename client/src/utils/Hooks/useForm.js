import { useState } from 'react'

const useForm = (validate) => {
const [values, setValues] = useState({
    username:"",
    email:"",
    password:"",
    password2:""
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
}

return {handleChange, values, handleSubmit, errors}
}

export default useForm