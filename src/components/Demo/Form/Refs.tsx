import { useRef } from "react";

const Refs = ()=>{
    const inputRef = useRef<HTMLInputElement>(null);

    const setFocus = ()=>{
        inputRef.current!.focus();
    };

    return (<>
    <input type="text" ref={inputRef}/>
    <button onClick={setFocus}>Focus</button>
    </>);
};

export default Refs;