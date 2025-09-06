import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar'
import "../src/style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  
import 'swiper/css';
import 'swiper/css/navigation';


import Slider from './component/Slider';
import Courses from './component/Courses';
import Mentor from './component/Mentor';
import Locations from './component/Locations';
import TrendingCourse from './component/TrendingCourse';
const App = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Courses />
      <Mentor />
      <Locations />
      <TrendingCourse />
    </div>
  )
}

export default App