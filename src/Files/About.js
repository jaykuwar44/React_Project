import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <div className="container">
        <div className="card col-8 col-md-8 col-lg-10 mx-auto mt-3 p-3">
          <h4 className="text-center ">Program Duration: 6 Months</h4>
          <p className="text-center">Daily 1 hours Class</p>
          <h3 className="text-center">Online & Offline Platfom</h3>
        </div>
        <div className="mt-4">
          <h2 className="text-center text-info border-bottom border-dark">Why Join This Course</h2>
        </div>
        <div className="row ">
          <div className="col-12 col-sm-6 col-md-3 my-4">
            <div className="card p-3">
              <h5 className="my-3">Guaranteed* Job</h5>
              <p>
                Secure exciting full stack developer jobs in top companies. Get
                a 100% refund if you’re not able to land a job within 180 days
                of graduation.
              </p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 my-4">
            <div className="card p-3">
              <h5 className="my-3">Interview readiness</h5>
              <p>
                Customized career mentoring sessions, resume building, 1:1 mock
                interviews, and regular feedback.
              </p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 my-4">
            <div className="card p-3">
              <h5 className="my-3">Exclusive Job Portal</h5>
              <p>
                Get an access to exclusive job portal to help you find your
                dream job.
              </p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 my-4">
            <div className="card p-3">
              <h5>Industry aligned curriculum</h5>
              <p>
                Engage in top notch curriculum, assessments and projects to
                enhance your skills and profile.
              </p>
            </div>
          </div>
          <div className="row col-5 col-md-4 mx-auto my-4">
            <NavLink to="/contact" className="btn btn-warning fw-bold fs-4">Apply Now</NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About