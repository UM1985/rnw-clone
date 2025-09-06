const CardUi = ({ image, title,work,mentor }) => {
  return (
    <div className=" mb-4" style={{height: "200px"}} >
      <div className="card shadow border-0 h-100 text-center card-hover">
        <div className="card-body d-flex flex-column align-items-center justify-content-center">
          <div
            className="rounded-circle bg-light d-flex align-items-center justify-content-center mb-3"
            style={{ width: "100px", height: "100px" }}
          >
            <img
              src={image}
              alt={title}
              style={{ width: "60px", height: "60px", objectFit: "contain" }}
            />
          </div>
          <h6 className="card-title fw-bold w-75 text-primary">{title}</h6>
          <p className="text-primary">{work}</p>
          <p className="text-primary">{mentor}</p>
        </div>
      </div>
    </div>
  );
};

export default CardUi;
