import CityCard from "../layout/CityCard";
import data from "../layout/cityData";

const Locations = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h1 className="text-center fw-bold mb-5">We Are In</h1>

        <div className="row g-4 justify-content-center">
          {data.map((ele, index) => (
            <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
              <CityCard 
                image={ele.image} 
                title={ele.title} 
                location={ele.location} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
