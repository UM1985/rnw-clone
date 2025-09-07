import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar'
import "../src/style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  
import 'swiper/css';
import 'swiper/css/navigation';
import "@fortawesome/fontawesome-free/css/all.min.css";



import Slider from './component/Slider';
import Courses from './component/Courses';
import Mentor from './component/Mentor';
import Locations from './component/Locations';
import TrendingCourse from './component/TrendingCourse';
import Review from './component/Review';
import Footer from './component/Footer';
const App = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Courses />
      <Mentor />
      <Locations />
      <TrendingCourse />
      <Review />
      <Footer />
    </div>
  )
}

export default App