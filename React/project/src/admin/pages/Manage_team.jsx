import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Manage_team() {
    useEffect(() => {
        fetch();
    }, []);

    const [data, setData] = useState([]);
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/team`);
        console.log(res.data);
        setData(res.data);
    }
    const deleteHandel=async(id)=>{
        const res=await axios.delete(`http://localhost:3000/team/${id}`);
        fetch();
    }


    return (
        <div>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">Manage Categories</h6>
                        <h1 className="mb-5">Manage Team</h1>
                    </div>
                    <div className="row g-4">

                        <div className="col-lg-12 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Image</th>
                                        <th>Role</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.map((value, index, arr) => {
                                            return (
                                                <tr>
                                                    <td>{value.id}</td>
                                                    <td>{value.name}</td>
                                                    <td><img src={value.image} alt="" /></td>
                                                    <td>{value.role}</td>
                                                    <td>
                                                        <button className='btn btn-danger' onClick={()=>deleteHandel(value.id)}>Delete</button>
                                                        <button className='btn btn-primary'>Edit</button>
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

export default Manage_team