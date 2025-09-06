
const Slider = () => {
  return (
    <>
        <div id="carouselExample" className="carousel slide pt-5">
  <div className="carousel-inner">
    <div className="carousel-item active">
<img src="/slider/rnw_web_slider.png" className="d-block w-100" alt="..." />    </div>
    <div className="carousel-item">
<img src="/slider/rnw_web_slider1.png" className="d-block w-100" alt="..." />    </div>
    <div className="carousel-item"> 
<img src="/slider/rnw_web_slider2.png" className="d-block w-100" alt="..." />    </div>
    <div className="carousel-item"> 
<img src="/slider/rnw_web_slider3.jpg" className="d-block w-100" alt="..." />    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control" aria-hidden="true"><i className="fa-solid fa-circle-arrow-left"></i></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control" aria-hidden="true"><i className="fa-solid fa-circle-arrow-right"></i></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}

export default Slider