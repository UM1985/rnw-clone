import CardUi from "../layout/CardUi";
import data from "../layout/data";

const Courses = () => {
  return (
    <div  className="d-flex items-center flex-column">
      <h1 className="text-dark text-center p-5">
        Pick The Right Course TO Build Your Career
      </h1>
      <div className="container "> 
        <div className="row ">
          {data.map((ele, index) => (
            <div className="col-lg-2 " key={index}>
              <CardUi image={ele.image} title={ele.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
