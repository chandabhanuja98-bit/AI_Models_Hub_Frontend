import React, { useState } from "react";

export default function IrisFlowerPrediction() {
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
  const [sepalLength, setSepalLength] = useState("");
  const [sepalWidth, setSepalWidth] = useState("");
  const [petalLength, setPetalLength] = useState("");
  const [petalWidth, setPetalWidth] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const irisData = {
      sepalLength: Number(sepalLength),
      sepalWidth: Number(sepalWidth),
      petalLength: Number(petalLength),
      petalWidth: Number(petalWidth),
    };

    try {
      const response = await fetch(
        `${BACKEND_URL}/irisflowerprediction`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(irisData),
        },
      );

      const result = await response.json();

      console.log(result);

      alert("Predicted Iris Flower Type: " + result.iris_species);
    } catch (error) {
      console.log(error);

      alert("Error while predicting iris flower type.");
    }
  };
  
  
return (
  <div className="container">
    <h1>Welcome to Iris Flower Prediction page!!</h1>

    <input
      type="number"
      placeholder="Enter Sepal Length"
      value={sepalLength}
      onChange={(e) => setSepalLength(e.target.value)}
    />

    <input
      type="number"
      placeholder="Enter Sepal Width"
      value={sepalWidth}
      onChange={(e) => setSepalWidth(e.target.value)}
    />

    <input
      type="number"
      placeholder="Enter Petal Length"
      value={petalLength}
      onChange={(e) => setPetalLength(e.target.value)}
    />

    <input
      type="number"
      placeholder="Enter Petal Width"
      value={petalWidth}
      onChange={(e) => setPetalWidth(e.target.value)}
    />

    <button onClick={handleLogin}>Check Iris Flower Type</button>
  </div>
);
}
