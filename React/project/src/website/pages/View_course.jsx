import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function View_course() {

    const { id } = useParams();

    useEffect(() => {
        fetch();
    }, []);

    const [data, setData] = useState([]);
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/course?cate_id=${id}`);
        console.log(res.data);
        setData(res.data);
    }

    return (
        <div>

            {/* Courses Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">Courses</h6>
                        <h1 className="mb-5">View Courses</h1>
                    </div>
                    <div className="row g-4 justify-content-center">

                        {
                            data.map((value, index, arr) => {
                                return (
                                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                        <div className="course-item bg-light">
                                            <div className="position-relative overflow-hidden">
                                                <img width="100%" height="350px" src={value.image} alt />
                                                <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                                                    <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: '30px 0 0 30px' }}>Read More</a>
                                                    <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3" style={{ borderRadius: '0 30px 30px 0' }}>Join Now</a>
                                                </div>
                                            </div>
                                            <div className="text-center p-4 pb-0">
                                                <h3 className="mb-0">${value.price}.00</h3>
                                                <div className="mb-3">
                                                    <small className="fa fa-star text-primary" />
                                                    <small className="fa fa-star text-primary" />
                                                    <small className="fa fa-star text-primary" />
                                                    <small className="fa fa-star text-primary" />
                                                    <small className="fa fa-star text-primary" />
                                                    <small>(123)</small>
                                                </div>
                                                <h5 className="mb-4">{value.name}</h5>
                                            </div>
                                            <div className="d-flex border-top">
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-user-tie text-primary me-2" />John Doe</small>
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-clock text-primary me-2" />1.49 Hrs</small>
                                                <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2" />30 Students</small>
                                            </div>
                                        </div>
                                    </div>

                                )
                            })
                        }


                    </div>
                    <Link to="/courses">Back</Link>
                </div>
            </div>
            {/* Courses End */}

        </div>
    )
}

export default View_course