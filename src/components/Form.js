import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";

const Form = (props) => {
  const initialData = {
    "current-savings": 10000,
    "yearly-contribution": 1200,
    "expected-return": 7,
    duration: 10,
  };
  const [form, setForm] = useState(initialData);

  const submitHandler = (event) => {
    event.preventDefault();


 props.onCalculate(form);
  };

  const resetHandler = () => {
    console.log("reset");
  };

  const changeHandler = (input, value) => {
    setForm((prevInput) => {
      return {
        ...prevInput,
        [input]: +value,
      };
    });
  };
  return (
    <div>
      <form onSubmit={submitHandler} className="form">
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              onChange={(event) =>
                changeHandler("current-savings", event.target.value)
              }
              value={form['current-savings']}
              type="number"
              id="current-savings"
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              onChange={(event) =>
                changeHandler("yearly-contribution", event.target.value)
              }
              value={form['yearly-contribution']}
              type="number"
              id="yearly-contribution"
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              onChange={(event) =>
                changeHandler("expected-return", event.target.value)
              }
              value={form['expected-return']}
              type="number"
              id="expected-return"
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              onChange={(event) =>
                changeHandler("duration", event.target.value)
              }
              value={form['duration']}
              type="number"
              id="duration"
            />
          </p>
        </div>
        <p className="actions">
          <button onClick={resetHandler} type="reset" className="buttonAlt">
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    </div>
  );
};

export default Form;
