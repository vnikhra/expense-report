import React from "react";

export default React.memo(({expense})=> (
    <div className={"expense-table-row"}>
        <div className={"expense-table-row-cell"}>
            {expense.description}
        </div>
        <div className={"expense-table-row-cell"}>
            {expense.value}
        </div>
        <div className={"expense-table-row-cell"}>
            {expense.currency}
        </div>
        <div className={"expense-table-row-cell"}>
            {expense.cadValue}
        </div>
    </div>
    )
)