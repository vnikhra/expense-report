import React, {useState, useEffect} from 'react';
import './App.css';
import Header from "./components/header"
import ExpenseTable from "./components/expenseTable"
import ExpenseInput from "./components/expenseInput"
import ExpenseTotal from "./components/expenseTotal"
import Axios from "axios";

function App() {
    const [expenses, setExpenses] = useState([]);
    const [rates, setRates] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    useEffect( ()=>{
        const fetchData = async()=> {
            if(isLoading){
                const ratesCall = await Axios.get("https://api.exchangeratesapi.io/latest?base=CAD")
                setIsLoading(false);
                if(!ratesCall.error){
                    setRates(ratesCall.data.rates);
                }else{
                    setIsError(true)
                }
            }
        };
        fetchData();
        },[isLoading]);
    const addExpense = expense => {
        if(rates[expense.currency])
            expense.cadValue = expense.value*(1/rates[expense.currency]).toFixed(4);
        setExpenses([...expenses, expense]);
    };
    return (
    <div className="app-container">
      <Header/>
        {isError ? <div>Error While Fetching Rates</div>:
            isLoading ? <h1>Loading...</h1>
                : <div className={"app-body"}>
                    <ExpenseTable expenses={expenses}/>
                    <ExpenseInput addExpense={addExpense}/>
                    <ExpenseTotal expenses={expenses}/>
                </div>
        }
    </div>
    );
}

export default App;
