import React from "react";

export default ({rates, resetRates})=> {
    return (
        <div>
            Base Currency : CAD
            <table>
                <thead>
                    <tr>
                        <th>Currency</th>
                        <th>Rate</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ["CAD", "USD", "HKD", "EUR"].map((currency, index) => (
                            <tr key={index}>
                                <td>{currency}</td>
                                <td>{(1/rates[currency]).toFixed(2)}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <button onClick={resetRates}>Reset Rates</button>
        </div>
    )
}