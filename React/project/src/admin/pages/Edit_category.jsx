import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function Edit_category() {

    const redirect=useNavigate();
    const { id } = useParams();
    useEffect(() => {
        fetch();
    }, []);

    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/category/${id}`);
        console.log(res.data);
        setFormvalue(res.data);
    }

    const [formvalue, setFormvalue] = useState({
        name: "",
        image: ""
    })

    const changeHandel = (e) => {
        setFormvalue({ ...formvalue,[e.target.name]: e.target.value })
        console.log(formvalue);
    }

    const submitHandel = async (e) => {
        e.preventDefault(); // not refresh
        const res = await axios.patch(`http://localhost:3000/category/${formvalue.id}`, formvalue);
        redirect('/manage_categories');
        alert('Updated Success!');
        return false;
    }

    return (
        <div>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">Add Category</h6>
                        <h1 className="mb-5">Edit Category</h1>
                    </div>
                    <div className="row g-4">

                        <div className="offset-md-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <form method='post' onSubmit={submitHandel}>
                                <div className="row g-3">
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" value={formvalue.name} onChange={changeHandel} name='name' className="form-control" placeholder="Category Name" />
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
                                        <button className="btn btn-primary w-100 py-3" type="submit">Save</button>
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

export default Edit_category