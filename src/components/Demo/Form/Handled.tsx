import { FormEvent, useState } from "react";

const Handled = ()=>{
    const [values, setValues] = useState({firstName:'',lastName:''});

    const handleChange = (e: {target: {name:string, value:string}})=>{
        setValues({
            ...values,
            [e.target.name]:e.target.value
        });
    };
    const handleSubmit = (event: FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        console.log(values);
    };

    return (<form onSubmit={handleSubmit}>
        <label>First Name: <input defaultValue={"First name"} value={values.firstName} name="firstName" type="text" onChange={handleChange} /></label>
        <label>Last Name: <input defaultValue={"Last name"} value={values.lastName} name="lastName" type="text" onChange={handleChange} /></label>

        <button type="submit">Submit</button>
    </form>); 
};
export default Handled;