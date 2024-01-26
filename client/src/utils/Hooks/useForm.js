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

const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate(values));
    setSubmitValue(true)
}

if(submitValue){
console.log("come",errors);
    if(Object.keys(errors).length === 0){
        setFormValidation(true)
    }
}

return {handleChange, values, handleSubmit, errors}
}

export default useForm