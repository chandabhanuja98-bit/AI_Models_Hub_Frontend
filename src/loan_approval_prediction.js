import React,{ useState } from "react";

export default function LoanApprovalPrediction() {

  const [income, setIncome] = useState("");
  const [creditScore, setCreditScore] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [employmentStatus, setEmploymentStatus] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const loanData = {
      income: Number(income),
      creditScore: Number(creditScore),
      loanAmount: Number(loanAmount),
      employmentStatus: Number(employmentStatus)
    };

    try {

      const response = await fetch(
        "http://127.0.0.1:5000/loanApprovalPrediction",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(loanData),
        }
      );

      const result = await response.json();

      console.log(result);

      alert("Predicted Loan Approval: " + result.loan_approval_status);

    } catch (error) {

      console.log(error);

      alert("Error while predicting loan approval.");

    }
  };


  

  return (
    <div className="container">
      <h1>Welcome to Loan Approval Prediction page!!</h1>

      <input
      type = "number"
      placeholder="Enter Income"
      value={income}
      onChange={(e)=>setIncome(e.target.value)}
      />

      <input
      type = "number"
      placeholder="Enter Credit Score"
      value={creditScore}
      onChange={(e)=>setCreditScore(e.target.value)}
      />

      <input
      type = "number"
      placeholder="Enter Loan Amount"
      value={loanAmount}
      onChange={(e)=>setLoanAmount(e.target.value)}
      />

      <select
        value={employmentStatus}
        onChange={(e) => setEmploymentStatus(e.target.value)}
      >
        <option value="">Select Employment Status</option>
        <option value="1">Employed</option>
        <option value="0">Unemployed</option>
      </select>

      <button onClick={handleLogin}>Check Loan Approval</button>

    </div>
  );

};
