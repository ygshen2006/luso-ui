import { ChangeEvent, FC, FormEvent, FormEventHandler, useState } from "react";
import { GeolocationInterface } from "types/SystemTypes";

const Unhandled: FC<GeolocationInterface> = ({latitude, longtitude}:GeolocationInterface)=>{
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
        <h3>Lantitude: {latitude}. Longtitude: {longtitude}</h3>
        <label>First Name: <input name="firstName" type="text" onChange={handleChange} /></label>
        <label>Last Name: <input name="lastName" type="text" onChange={handleChange} /></label>

        <button type="submit">Submit</button>
    </form>);
};

export default Unhandled;