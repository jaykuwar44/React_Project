import React from 'react'

const Course = () => {
  return (
    <div>
        <div className="container">
        <h3 className="text-center text-danger fs-2 mt-3 course pb-2 border-bottom border-dark">COURSE</h3>

        <div class="row row-cols-1 row-cols-md-3 g-5 text-center my-4">
        {/* <div class="row g-5 text-center my-4"> */}
          <div class="col">
            <div class="card h-100 ">
              {/* <img src=".src/Images/Full_Stack.jpg" class="card-img-top" alt="..." /> */}
              <img src={require('./Image/Full_Stack.jpg')} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">
                Full Stack <br />
                Developer Course                  
                </h5>
                <a href="#" class="btn btn-dark my-4">Learn More</a>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card h-100">
              <img src={require('./Image/DigitalMarket.png')} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">
                Advance Digital <br />
                Marketing Course
                </h5>
                <a href="#" class="btn btn-dark my-4">Learn More</a>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card h-100">
              <img src={require('./Image/web-dev.png')} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">
                Advance Web <br />
                Designing And UIUX <br />
                Program
                </h5>
                <a href="#" class="btn btn-dark my-4">Learn More</a>
              </div>
            </div>
          </div>
        </div>

        <div class="row row-cols-1 row-cols-md-3 g-5 text-center my-4">
          <div class="col">
            <div class="card h-100 ">
              <img src={require('./Image/graphic-design.png')} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">
                Advance Graphics <br />
                Designing                  
                </h5>
                <a href="#" class="btn btn-dark my-4">Learn More</a>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card h-100">
              <img src={require('./Image/Python-Dev.png')} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">
                Python Full Stack <br />
                Developer Course
                </h5>
                <a href="#" class="btn btn-dark my-4">Learn More</a>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card h-100">
              <img src={require('./Image/data.jpg')} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">
                Data Science <br />
                Machine Learning & AI
                </h5>
                <a href="#" class="btn btn-dark my-4">Learn More</a>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Course