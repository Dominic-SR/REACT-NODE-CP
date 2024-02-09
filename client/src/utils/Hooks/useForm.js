const useForm = ({validate,values,setValues,errors,setErrors,setFormValidation}) => {

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
    setErrors(validate(values));
    setFormValidation(true)
}

return {handleChange, handleSubmit, values, errors}
}

export default useForm