import React, { useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';
import FileBase64 from 'react-file-base64';
import './form.css'
import Nbar from './Navbar'
import { ToastContainer, toast } from 'react-toastify';

function PlantDetailsForm() {

    // const initialValues = { plantName: "" , testImage:""};
    const [item, setItem] = useState({ plantName: '', image: '', desc: '' });
    const successNotify = () => toast.success("Successfully Submitted!");

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(item)
        axios({
            method: 'post',
            // url: 'http://localhost:5002/upload',
            url:'https://flora-garden-client.onrender.com/upload',
            // url: "https://flora-host.herokuapp.com/upload",
            data: item //formData
        })

    }


    return (
        <>
        <Nbar/>
        <div className="create">
            <h2>Add a New Plant</h2>
            <div className="card p-5" style={{ margin: "50px 1%", border: "2px solid red", borderRadius: "1.5rem" }}>
                <div className="card-body">
                    <form onSubmit={handleFormSubmit}>
                        <label className="form-label">Product Name:</label>
                        <input type="text" className="form-control" required
                            onChange={e => setItem({ ...item, plantName: e.target.value })}
                        />
                        <label className="form-label">Attach Image</label>
                        <FileBase64 
                            type="file"
                            multiple={false} required
                            onDone={({ base64 }) => setItem({ ...item, image: base64 })}
                        />
                        <label className="form-label">Description:</label>
                        <input type="text" className="form-label" required
                            onChange={e => setItem({ ...item, desc: e.target.value })}
                        />
                       <button className="card__btn" onClick={successNotify}>SUBMIT</button>
                       {/* <ToastContainer />                        */}
                    </form>
                </div>
            </div>
        </div>
        </>
)}

export default PlantDetailsForm