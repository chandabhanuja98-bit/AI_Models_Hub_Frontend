import React,{ useState } from "react";

export default function HousePricePrediction() {
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
  const [bedrooms, setBedrooms] = useState("");
  const [yearBuilt, setYearBuilt] = useState("");
  const [yearRemodAdd, setYearRemodAdd] = useState("");
  const [fullBath, setFullBath] = useState("");
  const [garageArea, setGarageArea] = useState("");
  const [grLivArea, setGrLivArea] = useState("");
  const [lotArea, setLotArea] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const houseData = {
      bedrooms: Number(bedrooms),
      yearBuilt: Number(yearBuilt),
      yearRemodAdd: Number(yearRemodAdd),
      fullBath: Number(fullBath),
      garageArea: Number(garageArea),
      grLivArea: Number(grLivArea)
    };

    try {

        const response = await fetch(
            `${BACKEND_URL}/housepriceprediction`,
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify(houseData),
            }
        );

        const result = await response.json();

        console.log(result);

        alert("Predicted House Price: $" + result.house_price);

    } catch (error) {

        console.log(error);

        alert("Error while predicting house price.");

    }
  };
  
  return (
    <div className="container">
      <h1>Welcome to House Price Prediction page!!</h1>
    
      <input
      type = "number"
      placeholder="Enter Bedrooms"
      value={bedrooms}
      onChange={(e)=>setBedrooms(e.target.value)}
      />

      <input
      type = "number"
      placeholder="Enter Year Built"
      value={yearBuilt}
      onChange={(e)=>setYearBuilt(e.target.value)}
      />

      <input
      type = "number"
      placeholder="Enter Year Remodeled"
      value={yearRemodAdd}
      onChange={(e)=>setYearRemodAdd(e.target.value)}
      />

      <input
      type = "number"
      placeholder="Enter Full Baths"
      value={fullBath}
      onChange={(e)=>setFullBath(e.target.value)}
      />

      <input
      type = "number"
      placeholder="Enter Garage Area"
      value={garageArea}
      onChange={(e)=>setGarageArea(e.target.value)}
      />

      <input
      type = "number"
      placeholder="Enter Living Area"
      value={grLivArea}
      onChange={(e)=>setGrLivArea(e.target.value)}
      />

      <input
      type = "number"
      placeholder="Enter Lot Area"
      value={lotArea}
      onChange={(e)=>setLotArea(e.target.value)}
      />

    

      <button onClick={handleLogin}>Check House Price</button>

    </div>
    
  );
}
