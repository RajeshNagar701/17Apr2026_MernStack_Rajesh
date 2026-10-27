import axios from 'axios';
import React, { useEffect, useState } from 'react'


function Add_courses() {


    useEffect(() => {
        fetch();
    }, []);

    const [data, setData] = useState([]);
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/category`);
        console.log(res.data);
        setData(res.data);
    }

    const [formvalue, setFormvalue] = useState({
        cate_id: "",
        name: "",
        image: "",
        price: ""
    })

    const changeHandel = (e) => {
        setFormvalue({ ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value })
        console.log(formvalue);
    }

    const submitHandel = async (e) => {
        e.preventDefault(); // not refresh
        const res = await axios.post(`http://localhost:3000/course`, formvalue);
        setFormvalue({ ...formvalue, name: "", image: "",price:"" })
        alert('Submited Success!')
        return false;
    }

    return (
        <div>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">Add Categories</h6>
                        <h1 className="mb-5">Add Course</h1>
                    </div>
                    <div className="row g-4">

                        <div className="offset-md-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <form method='post' onSubmit={submitHandel}>
                                <div className="row g-3">
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <select type="text" value={formvalue.cate_id} onChange={changeHandel} name='cate_id' className="form-control">
                                                <option> Select Course Category </option>
                                                {
                                                    data.map((value, index, arr) => {
                                                        return (
                                                            <option value={value.id}>{value.name}</option>
                                                        )
                                                    })
                                                }
                                            </select>
                                            <label htmlFor="Email">Select Category</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" value={formvalue.name} onChange={changeHandel} name='name' className="form-control" placeholder="Course Name" />
                                            <label htmlFor="Email">Course Name</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="url" value={formvalue.image} onChange={changeHandel} name='image' className="form-control" placeholder="Enter Image URL" />
                                            <label htmlFor="Password">Enter Image URL</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="number" value={formvalue.price} onChange={changeHandel} name='price' className="form-control" placeholder="Course price" />
                                            <label htmlFor="Email">Course price</label>
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

export default Add_courses