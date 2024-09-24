import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create =()=>{
    const [name,setName]=useState("")
    const [age,setAge]=useState("")
    const [position,setPosition] =useState("")

    const navigate=useNavigate();
    const addData=(e)=>{
        e.preventDefault()
        console.log(name,age,position)
        axios.post('http://localhost:4000/insert',{name:name,age:age,position:position}).then(()=>{navigate('/')})
        setName("")
        setAge("")
        setPosition("")
       

    }
    return(
        <>
        <div className="border border-secondary rounded mx-auto p-4 w-25">
        <br/><h2 className="text-center fw-bold">Add New Candidate</h2>
            <form onSubmit={addData} className="container mt-4 mx-auto w-100">
                <div className="form-group">
                    <label htmlFor="name" className="fw-bold">Name</label>
                    <input type="text" className="form-control" value={name} placeholder="Enter your name..." onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="age" className="fw-bold">Age</label>
                    <input type="number" className="form-control" value={age}  placeholder="Enter your age..." onChange={(e) => setAge(e.target.value)}  required  />
                </div>
                <div className="form-group">
                    <label htmlFor="position" className="fw-bold">Position</label>
                    <input  type="text"  className="form-control"  value={position}   placeholder="Enter your position..."   onChange={(e) => setPosition(e.target.value)}   required  />
                </div><br/>
                <button type="submit" className="rounded-4 border-2 fw-bold fs-5 text-center w-50 btn btn-primary" style={{marginLeft:"90px"}}>Submit</button>
            </form>
       
            </div>
        </>
    )
}
export default Create;