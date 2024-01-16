const { useState } = require("react")

const Itemlist=()=>{
     const [name,setName]=useState("");
     const [price,setPrice]=useState(0);
     const [supplierInfo,setSupplierInfo]=useState("");
     const [mfgDate,setMfgDate]=useState("");
     const [item,setItem]=useState([]);

     const handleSubmit=async(event)=>{
        event.preventDefault();
        const itemData={name,price,supplierInfo,mfgDate};         
        const itemURL=await fetch("http://localhost:8000/add",{
            method:"POST",
            body:JSON.stringify(itemData),
            headers:{
                'Content-Type':'application/json'
            }
        });
        
        if(itemURL.status===200){
            const {data}=await itemURL.json();
            setItem(items =>[...items,data]);
        } else {
         console.error('Failed to add item:', itemURL.statusText);
       }
     }

     const resetButton=()=>{
        setName("");
        setMfgDate("");
        setPrice("");
        setSupplierInfo("");
     }

     return(
        <>
        <h1>Inventory Management System:-</h1>
        <form onSubmit={handleSubmit}>
              <label htmlFor="name" >Name:- </label>
              <input type="text" value={name} id="name" onChange={(e)=>setName(e.target.value)}/>
              <label htmlFor="price" >Price:- </label>
              <input type="number" value={price} id="price" onChange={(e)=>setPrice(e.target.value)}/>
              <label htmlFor="supplier" >SupplierInfo:- </label>
              <input type="text" value={supplierInfo} id="supplier" onChange={(e)=>setSupplierInfo(e.target.value)}/>        
              <label htmlFor="mfg" >MFG Date:- </label>
              <input type="date" value={mfgDate} id="mfg" onChange={(e)=>setMfgDate(e.target.value)}/>
            
              <button type="submit">Submit</button>
              <button type="reset" onClick={resetButton}>Reset</button>
        </form>

          <h1>Item List:-</h1>
          {item.map((it) => 
          <>
                <h1>{it.name}</h1>
                <li>{it.price}</li> 
                <li>{it.supplierInfo}</li> 
                <li>{it.mfgDate}</li>
                <br/>
           </>             
           )}
        </>   
     )
}

export default Itemlist;