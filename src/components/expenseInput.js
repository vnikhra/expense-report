import React, {useState} from "react";

export default ({addExpense}) => {
    const [description, setDescription] = useState("");
    const [value, setValue] = useState("0");
    const [currency, setCurrency] = useState("CAD");
    const reset = () => {
        addExpense({description, value, currency});
        setDescription("");
        setValue("0");
        setCurrency("CAD");
    };
    return(<div className={"expense-input"}>
        <input value={description} placeholder={"Enter Description"} onChange={e=>setDescription(e.target.value)}/>
        <input value={value} onChange={e=>setValue(e.target.value)}/>
        <select onChange={e=>setCurrency(e.target.value)} value={currency}>
            <option value={"CAD"}>CAD</option>
            <option value={"USD"}>USD</option>
            <option value={"HKD"}>HKD</option>
            <option value={"EUR"}>EUR</option>
        </select>
        <button onClick={reset}>Add</button>
    </div>)
}