import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Manage_courses() {

    useEffect(() => {
        fetch();
    }, []);

    const [data, setData] = useState([]);
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/course`);
        console.log(res.data);
        setData(res.data);
    }

    const deleteHandel = async (id) => {
        const res = await axios.delete(`http://localhost:3000/course/${id}`);
        fetch();
    }

    const fetchEdit = async (id) => {
        const res = await axios.get(`http://localhost:3000/course/${id}`);
        console.log(res.data);
        setFormvalue(res.data)
    }

    const [formvalue, setFormvalue] = useState({
        name: "",
        image: "",
        price: ""
    })

    const changeHandel = (e) => {
        setFormvalue({ ...formvalue,[e.target.name]: e.target.value })
        console.log(formvalue);
    }

    const submitHandel = async (e) => {
        e.preventDefault();
        const res = await axios.patch(`http://localhost:3000/course/${formvalue.id}`, formvalue);
        alert('Updated Success!')
        fetch();
        return false;
    }

    return (
        <div>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">Manage Categories</h6>
                        <h1 className="mb-5">Manage Courses</h1>
                    </div>
                    <div className="row g-4">

                        <div className="col-lg-12 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Category Id</th>
                                        <th>Name</th>
                                        <th>Image</th>
                                        <th>Price</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.map((value, index, arr) => {
                                            return (
                                                <tr>
                                                    <td>{value.id}</td>
                                                    <td>{value.cate_id}</td>
                                                    <td>{value.name}</td>
                                                    <td><img src={value.image} width="50px" alt="" /></td>
                                                    <td>{value.price}</td>
                                                    <td>
                                                        <button className='btn btn-danger' onClick={() => deleteHandel(value.id)}>Delete</button>
                                                        <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#myModal" onClick={() => fetchEdit(value.id)}>Edit</button>

                                                        <div className="modal" id="myModal">
                                                            <div className="modal-dialog">
                                                                <div className="modal-content">
                                                                    {/* Modal Header */}
                                                                    <div className="modal-header">
                                                                        <h4 className="modal-title">Edit Course</h4>
                                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" />
                                                                    </div>
                                                                    {/* Modal body */}
                                                                    <div className="modal-body">
                                                                        <form method='post' >
                                                                            <div className="row g-3">
                                                                              
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
                                                                                    <button className="btn btn-primary w-100 py-3" type="submit"  data-bs-dismiss="modal" onClick={submitHandel} >Save</button>
                                                                                </div>
                                                                            </div>
                                                                        </form>
                                                                    </div>
                                                                    {/* Modal footer */}
                                                                    <div className="modal-footer">
                                                                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }

                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Manage_courses