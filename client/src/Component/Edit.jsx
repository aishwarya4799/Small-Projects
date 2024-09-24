import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Edit = () => {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [position, setPosition] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    console.log(id)

    useEffect(() => {

        const getData = async () => {
            const res = await axios.get(`http://localhost:4000/${id}`)
            res.data.map((items) => {
                setName(items.name)
                setAge(items.age)
                setPosition(items.position)
            })
        }

        getData()

    }, [id])

    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios.put(`http://localhost:4000/update/${id}`, { name, age, position });
        navigate('/');
    }
    return (
        <>
        <div className="border border-secondary rounded mx-auto p-4 w-25">
            <br/><h2 className="text-center fw-bold">Update Candidate</h2>
            <form onSubmit={handleSubmit} className="container mt-4 mx-auto w-100">
                <div className="form-group">
                    <label htmlFor="name" className="fw-bold">Name</label>
                    <input type="text" className="form-control" id="name" value={name} placeholder="Enter your name" onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="age" className="fw-bold">Age</label>
                    <input type="number" className="form-control" id="age"  value={age}  placeholder="Enter your age" onChange={(e) => setAge(e.target.value)}  required  />
                </div>
                <div className="form-group">
                    <label htmlFor="position" className="fw-bold">Position</label>
                    <input  type="text"  className="form-control"  id="position"  value={position}   placeholder="Enter your position"   onChange={(e) => setPosition(e.target.value)}   required  />
                </div><br/>
                <button type="submit" className="rounded-4 border-2 fw-bold fs-5 text-center w-50 btn btn-primary" style={{marginLeft:"90px"}}>Update</button>
            </form>
            </div>

        </>
    )
}
export default Edit;