import React from 'react'

export default function Carousal() {
  return (
    <div>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{objectFit:'contain !important'}}>
        <div className="carousel-inner" id='carousel' style={{ filter:"brightness(100%"}}>

          <form className="d-flex" style={{zIndex:"10"}}>
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success text-black bg-sucess" type="submit">Search</button>
          </form>

          <div className="carousel-item active">
            <img src="https://source.unsplash.com/random/900×700/?Pizza" className="d-block w-100"  alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://source.unsplash.com/random/900×700/?CornPizza" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://source.unsplash.com/random/900×700/?CapisomPizza" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}
