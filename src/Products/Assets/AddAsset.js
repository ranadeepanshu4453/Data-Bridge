import React, { useState } from "react";
import Layout from "../../Layout/Layout";

const AddAsset = () => {
    const [Asset,setAsset]=useState("");
    const [quantity,setQuantity]=useState("");
    const [price,setPrice]=useState("");

    async function addAsset() {
        const items={Asset,quantity,price};
     let response=fetch("http://personal.test/api/addAssets",{
        method:"POST",
        body:JSON.stringify(items),
        headers:{
            "Content-Type": "application/json",
        Accept: "application/json",
        },
     });
     if(response.ok){
        alert("success");
     }
     else{
        alert("error");
     }
     response = await response.json();
     console.warn(response);    

    }
  return (
    <div>
      <Layout>
        <div className="flex flex-row justify-center">
          <span className="flex flex-col gap-4 items-center bg-slate-100 p-5">
            <input
            id="assetName"
              className="border-b-2 w-fit p-2 text-center"
              placeholder="Enter Asset Name"
              value={Asset}
              onChange={(e)=>setAsset(e.target.value)}
            ></input>
            <input
            id="quantity"
              className="border-b-2 w-fit p-2 text-center"
              placeholder="Enter Asset Quantity"
              value={quantity}
              onChange={(e)=>setQuantity(e.target.value)}
            ></input>
            <input
            id="price"
              className="border-b-2 w-fit p-2 text-center"
              placeholder="Enter Asset Per Unit Price"
              value={price}
              onChange={(e)=>setPrice(e.target.value)}
            ></input>
            <button onClick={addAsset} className="bg-sky-400 p-2 rounded-md text-white">Add Asset</button>
          </span>
        </div>
      </Layout>
    </div>
  );
};

export default AddAsset;
