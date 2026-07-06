import React,{ useState } from "react";

export default function MobilePricePrediction() {
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

  const [battery_power, setBattery_power] = useState("");
  const [dual_sim, setDual_sim] = useState("");
  const [int_memory, setInt_memory] = useState("");
  const [px_height, setPx_height] = useState("");
  const [px_width, setPx_width] = useState("");
  const [touch_screen, setTouch_screen] = useState("");
  const [wifi, setWifi] = useState("");

  console.log(battery_power, dual_sim, int_memory, px_height, px_width, touch_screen, wifi);
  const handleLogin = async (e) => {
    e.preventDefault();

    const mobileData = {
        battery_power: Number(battery_power),
        dual_sim: Number(dual_sim),
        int_memory: Number(int_memory),
        px_height: Number(px_height),
        px_width: Number(px_width),
        touch_screen: Number(touch_screen),
        wifi: Number(wifi)
    };

    try {

        const response = await fetch(
            `${BACKEND_URL}/mobilepriceprediction`,
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify(mobileData),
            }
        );

        const result = await response.json();

        console.log(result);

        alert("Predicted Mobile Price: $" + result.mobile_price_category);

      } 
      
      catch (error) {

        console.log(error);

        alert("Error while predicting mobile price.");

  }



  
  

}

return (
    <div className="container">
      <h1>Welcome to Mobile Price Prediction page!!</h1>

      <input
      type = "number"
      placeholder="Enter Battery Power"
      value={battery_power}
      onChange={(e)=>setBattery_power(e.target.value)}
      />

      <input
      type = "number"
      placeholder="Enter Dual Sim"
      value={dual_sim}
      onChange={(e)=>setDual_sim(e.target.value)}
      />

      <input
      type = "number"
      placeholder="Enter Internal Memory"
      value={int_memory}
      onChange={(e)=>setInt_memory(e.target.value)}
      />

      <input
      type = "number"
      placeholder="Enter Pixel Height"
      value={px_height}
      onChange={(e)=>setPx_height(e.target.value)}
      />

      <input
      type = "number"
      placeholder="Enter Pixel Width"
      value={px_width}
      onChange={(e)=>setPx_width(e.target.value)}
      />

      <input
      type = "number"
      placeholder="Enter Touch Screen"
      value={touch_screen}
      onChange={(e)=>setTouch_screen(e.target.value)}
      />

      <input
      type = "number"
      placeholder="Enter WiFi"
      value={wifi}
      onChange={(e)=>setWifi(e.target.value)}
      />

      <button onClick={handleLogin}>Check Mobile Price</button>

    </div>
  );
}


