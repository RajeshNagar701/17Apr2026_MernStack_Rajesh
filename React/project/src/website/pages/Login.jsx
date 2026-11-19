import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

function Login() {

    const [formvalue, setFormvalue] = useState({
        email: "",
        password: ""
    })

    const changeHandel = (e) => {
        setFormvalue({ ...formvalue, [e.target.name]: e.target.value })
        console.log(formvalue);
    }

    const redirect = useNavigate();
    const submitHandel = async (e) => {
        e.preventDefault(); // not refresh
        const res = await axios.get(`http://localhost:3000/student?email=${formvalue.email}`);
        if (res.data.length > 0) {
            if (res.data[0].password == formvalue.password) {

                // authantication
                sessionStorage.setItem('u_id', res.data[0].id)
                sessionStorage.setItem('u_name', res.data[0].name)
                swal({
                    title: "Success!",
                    text: "User Login Success!!",
                    icon: "success",
                    button: "Aww yiss!",
                });
                redirect('/');
                return false;
            }
            else {
                swal({
                    title: "Failed!",
                    text: "Password Not Match!",
                    icon: "error",
                    button: "Ohh No!",
                });
                return false;
            }
        }
        else {
            swal({
                    title: "Failed!",
                    text: "Email dose not Exist!",
                    icon: "error",
                    button: "Ohh No!",
                });
            return false;
        }
    }


    return (
        <div>
            {/* Contact Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">Login</h6>
                        <h1 className="mb-5">Login Here</h1>
                    </div>
                    <div className="row g-4">


                        <div className="offset-md-3 col-lg-6 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
                            <form method='post' onSubmit={submitHandel}>
                                <div className="row g-3">

                                    <div className="col-md-12">
                                        <div className="form-floating">
                                            <input type="email" value={formvalue.email} onChange={changeHandel} name='email' className="form-control" placeholder="Your Email" />
                                            <label htmlFor="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-floating">
                                            <input type="password" value={formvalue.password} onChange={changeHandel} name='password' className="form-control" placeholder="Your password" />
                                            <label htmlFor="email">Your password</label>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">Login</button>
                                        <Link to="/signup">If yoyu not Registered then Signup Here</Link>
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

export default Login