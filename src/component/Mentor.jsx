import MentorCard from '../layout/MentorCard'
import data from '../layout/mentorData'

const Mentor = () => {
  return (
    <div>
        <h1 className='text-center p-5'>Our Syllabus Mentor</h1>

        <div  className="flex items-center">
    
      <div className="container p-5">
        <div className="row ">
          {data.map((ele, index) => (
            <div className="col-lg-3 " key={index}>
              <MentorCard image={ele.image} title={ele.title} work={ele.work} mentor={ele.mentor} />
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}

export default Mentor