import React, { useState } from "react";
// import logo from './assets/investment-calculator-logo.png';

import Form from "./components/Form";
import Header from "./components/Header";
import ResultsTable from "./components/ResultsTable";
function App() {
  const [form, setForm] = useState(null);

  const calculateHandler = (form) => {
    setForm(form);
  };

  const yearlyData = [];
  if (form) {
    let currentSavings = +form["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +form["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +form["expected-return"] / 100;
    const duration = +form["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header />
      <Form onCalculate={calculateHandler} />
      {!form && <p> No investments calculated yet</p>}
      {form && (
        <ResultsTable
          data={yearlyData}
          initialInvestment={form["current-savings"]}
        />
      )}
    </div>
  );
}

export default App;
