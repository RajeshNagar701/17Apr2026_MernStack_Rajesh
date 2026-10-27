import axios from 'axios';
import React, { useState } from 'react'

function Signup() {

    const [formvalue,setFormvalue]=useState({
        name:"",
        email:"",
        password:"",
        image:"",
        mobile:""
    })

    const changeHandel=(e)=>{
        setFormvalue({...formvalue,id:new Date().getTime().toString(),[e.target.name]:e.target.value})
        console.log(formvalue);
    }

    const submitHandel = async (e) => {
        e.preventDefault(); // not refresh
        const res = await axios.post(`http://localhost:3000/student`,formvalue);
        setFormvalue({...formvalue,name:"",email:"",password:"",image:"",mobile:""})
        alert('Signup Success!')
        return false;
    }


    return (
        <div>
            {/* Contact Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">Contact Us</h6>
                        <h1 className="mb-5">Signup Here</h1>
                    </div>
                    <div className="row g-4">
                        
                       
                        <div className="offset-md-3 col-lg-6 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
                            <form method='post' onSubmit={submitHandel}>
                                <div className="row g-3">
                                    <div className="col-md-12">
                                        <div className="form-floating">
                                            <input type="text" value={formvalue.name} onChange={changeHandel} name='name' className="form-control" id="name" placeholder="Your Name" />
                                            <label htmlFor="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-floating">
                                            <input type="email" value={formvalue.email} onChange={changeHandel} name='email' className="form-control" placeholder="Your Email" />
                                            <label htmlFor="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-floating">
                                            <input type="password" value={formvalue.password} onChange={changeHandel} name='password' className="form-control"  placeholder="Your password" />
                                            <label htmlFor="email">Your password</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="url" value={formvalue.image} onChange={changeHandel} name='image' className="form-control" placeholder="Enter Image URL" />
                                            <label htmlFor="Password">Enter Image URL</label>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-floating">
                                            <input type="number" value={formvalue.mobile} onChange={changeHandel} name='mobile' className="form-control"  placeholder="Your mobile" />
                                            <label htmlFor="email">Your mobile</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">Signup</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact End */}
        </div>

    )
}

export default Signup