import React from "react";
import ExpenseRow from "./expenseRow"

export default ({expenses}) => {
    return(
        <div className={"expense-table"}>
            <div className={"expense-table-header"}>
                <div className={"expense-table-header-cell"}>
                    Description
                </div>
                <div className={"expense-table-header-cell"}>
                    Value
                </div>
                <div className={"expense-table-header-cell"}>
                    Currency
                </div>
                <div className={"expense-table-header-cell"}>
                    Value in CAD
                </div>
            </div>
            {
                expenses && expenses.map && expenses.length > 0? expenses.map((expense, index) => (
                    <ExpenseRow expense={expense} key={index}/>
                )) : <div className={"no-data"}>No Data Available</div>
            }
        </div>
    )
}