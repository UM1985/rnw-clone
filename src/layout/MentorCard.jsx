
const MentorCard = ({ image, title, work, mentor }) => {
  return (
    <div className="  mb-4 h-100">
      <div className="card shadow-sm border-0 w-full h-100 mentor-card">
        <img
          src={image}
          alt={title}
          className="card-img-top"
          style={{ height: "300px", objectFit: "cover" }}
        />
        <div className="card-body text-center d-flex flex-column">
          <h5 className="card-title fw-bold text-primary">{title}</h5>
          <p className="text-muted small flex-grow-1">{work}</p>
          <span className="badge bg-secondary align-self-center">{mentor}</span>
        </div>
      </div>
    </div>
  );
};

export default MentorCard;
