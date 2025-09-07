// ReviewCard.jsx
const ReviewCard = ({ img, name, review }) => {
  return (
    <div className="card shadow p-4 rounded-3" style={{ height: "300px" }}>
      {/* Top: Image + Name */}
      <div className="d-flex items-center justify-content-center  mb-3">
        <img
          src={img}
          alt={name}
          className="rounded-circle me-3"
          style={{ width: "60px", height: "60px", objectFit: "cover"  }}
        />
        <h5 className="mb-0 fw-bold">{name}</h5>
      </div>

      {/* Review Text */}
      <p className="text-muted mb-0">{review}</p>
    </div>
  );
};

export default ReviewCard;
