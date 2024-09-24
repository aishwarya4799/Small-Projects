import axios from "axios";
import {useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
const Display =()=>{
    const [state,setState]=useState([])
    const navigate= useNavigate()
    async function getData(){
        try{
          const a= await axios.get('http://localhost:4000/')
         
          setState(a.data)
  
        }catch(error){
          console.log(error)
        }
      }

    useEffect(()=>{
       
        getData()
      },[])

console.log(state)
const Edit= (id)=>{
    navigate(`/edit/${id}`);
}

function Deleted(id){
    axios.delete(`http://localhost:4000/delete/${id}`).then(()=>{getData()})
    }


    if(state.length === 0){
        return(
            <>
            <h5 style={{textAlign:"center"}}> Loading...</h5>
            </>
        )
    }
return(
    <>
      <div className="mx-auto w-50 border border-secondary rounded p-4"><br/>
        <h1 className="text-center fw-bold ">Candidate List</h1><br/>
        <table  >
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Position</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            {
                state.map((item)=>{
                    console.log(item)
                    const {id,name,age,position}= item
                    return(
                        <>
                        <tr key={item.id}>
                            <td >{id}</td>
                            <td >{name}</td>
                            <td >{age}</td>
                            <td>{position}</td>
                            <td><CiEdit size="40px" color="blue" onClick={()=>{Edit(id)}}/></td>
                            <td><MdDelete size="40px" color="red" onClick={()=>{Deleted(id)}}/></td>
                        </tr>
                        </>
                    )
                })
            }
        </table><br/>
        <button className="rounded-4 border-2 fw-bold fs-5 text-center  w-50 btn btn-primary " style={{marginLeft:"170px"}}><Link to="create" style={{textDecoration:"none",color:"white"}}>Add Data</Link></button> 
        </div>
    </>
)
    
       
        
    
}
export default Display;