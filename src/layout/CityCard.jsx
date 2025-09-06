const CityCard = ({ image, title, location }) => {
  return (
    <div className="card shadow-sm border-0 h-100 city-card text-center">
      <img
        src={image}
        alt={title}
        className="card-img-top"
        style={{ height: "180px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title fw-bold text-primary">{title}</h5>
        <p className="text-muted mb-0">{location}</p>
      </div>
    </div>
  );
};

export default CityCard;
