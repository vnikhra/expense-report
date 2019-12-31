import React from 'react';

export default ({expenses}) => (
    <div className={"expenses-total"}>
        Items: {expenses.length} Total Value in CAD: {expenses.reduce((a,b)=>({cadValue : a.cadValue+b.cadValue}),{cadValue: 0}).cadValue.toFixed(2)}
    </div>
)
