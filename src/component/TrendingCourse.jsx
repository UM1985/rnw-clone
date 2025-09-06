import data from "../layout/trendingData";
import TrendingCard from "../layout/TrendingCard";

const TrendingCourse = () => {
  return (
    <section className="py-5 bg-light">
      <h1 className="text-center fw-bold mb-5">Trending Courses</h1>
      <TrendingCard data={data} />
    </section>
  );
};

export default TrendingCourse;
