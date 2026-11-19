import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Profile() {

        useEffect(() => {
        fetch();
    }, []);

    const [data, setData] = useState({});
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/student/${sessionStorage.getItem('u_id')}`);
        console.log(res.data);
        setData(res.data);
    }

    return (
        <div>

            {/* About Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">Profile</h6>
                        <h1 className="mb-5">Manage Profile</h1>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{ minHeight: 400 }}>
                            <div className="position-relative h-100">
                                <img className="img-fluid position-absolute w-100 h-100" src={data.image} alt style={{ objectFit: 'cover' }} />
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                            <h6 className="section-title bg-white text-start text-primary pe-3">About Us</h6>
                            <h1 className="mb-4">Id : {data.id}</h1>
                            <h1 className="mb-4">Welcome : {data.name}</h1>
                            <p className="mb-4">Email :  {data.email}</p>
                            <p className="mb-4">Mobile :  {data.mobile}</p>
             
                            <a className="btn btn-primary py-3 px-5 mt-2" href>Edit Profile</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* About End */}
            
        </div>

    )
}

export default Profile