import axios from 'axios';
import React, { useState } from 'react'

function Add_categories() {

    const [formvalue,setFormvalue]=useState({
        name:"",
        image:""
    })

    const changeHandel=(e)=>{
        setFormvalue({...formvalue,id:new Date().getTime().toString(),[e.target.name]:e.target.value})
        console.log(formvalue);
    }

    const submitHandel = async (e) => {
        e.preventDefault(); // not refresh
        const res = await axios.post(`http://localhost:3000/category`,formvalue);
        setFormvalue({...formvalue,name:"",image:""})
        alert('Submited Success!')
        return false;
    }

    return (
        <div>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">Add Categories</h6>
                        <h1 className="mb-5">Add Categories</h1>
                    </div>
                    <div className="row g-4">

                        <div className="offset-md-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <form method='post'  onSubmit={submitHandel}>
                                <div className="row g-3">
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" value={formvalue.name} onChange={changeHandel} name='name' className="form-control"  placeholder="Category Name" />
                                            <label htmlFor="Email">Categories Name</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="url" value={formvalue.image} onChange={changeHandel} name='image' className="form-control" placeholder="Enter Image URL" />
                                            <label htmlFor="Password">Enter Image URL</label>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">Add</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add_categories