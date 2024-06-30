const ProductImage = (props) => {
  return (
    <div className="home-1_hero-section md-pt-200 md-pb-150" id="hero">
      <div className="home-1_hero-shape-1">
        <img src="/image/home-1/hero-shape-1.svg" alt="hero shape One" />
      </div>
      <div className="home-1_hero-shape-2">
        <img
          src="https://res.cloudinary.com/db1i46uiv/image/upload/v1718011455/savedSVGExport0-svg_svtypj.svg"
          alt="hero shape two"
        />
      </div>
      <div className="container">
        <div className="row row--hero-content">
          <div className="col-xxl-auto col-lg-5 col-md-7 col-sm-8 col-10  transform-none ">
            <div className="home-1_hero-image-block">
              <div className="home-1_hero-image">
                <img src={props.image_link} alt="hero image" />
              </div>
            </div>
          </div>
          <div
            className="col-xxl-auto col-lg-7 col-md-10"
            data-aos-duration={1000}
            data-aos="fade-right"
            data-aos-delay={300}
          >
            <div className="home-1_hero-content">
              <div className="home-1_hero-content-text">
                <h1 className="hero-content__title mb-12 primary heading-xxl"></h1>
                <h1 className="hero-content__title heading-xxl">
                  {props.name}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductImage;