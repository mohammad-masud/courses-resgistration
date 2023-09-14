import { useEffect, useState } from "react";



const Home = () => {
const[courses, setCourses]=useState([]);

useEffect(()=>{
    fetch('./data.json')
    .then(res=>res.json())
    .then(data=>setCourses(data))
})


    return (
        <div className="flex flex-wrap w-2/3">
            {
                courses.map((course)=>(
                    <div key={course.id} className="w-1/3  gap-5 py-2">
                    <img src={course.img} alt="" />
                    <h2 className="font-bold py-4">{course.course_name}</h2>
                    <p>{course.course_details}</p>
                        <div className="flex gap-24">
                           <p>$Price: {course.price}</p>
                           <p>Credit:{course.credit}hr</p>
                        </div>
                     <button className="w-3/4 bg-slate-400 mx-auto">Select</button>   
                    </div>
                ))
            }
        </div>
    );
};

export default Home;