import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className="container my-2">
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-bs-ride="false"
        >
          <div class="carousel-inner card">
            <div class="carousel-item active">
              {" "}
              <img src={require('./Image/bgimg.jpg')} class="img-fluid w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block mb-5">
                <div className="col my-3">
                  <h1 class="card-title text-center text-warning fw-bold">
                    Get Developer Job Join The Course
                  </h1>
                </div>
                <div className="col mb-5 mx-auto">
                  <NavLink to="/contact" className="btn btn-lg btn-info text-danger fw-bold">
                    Apply Now
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home