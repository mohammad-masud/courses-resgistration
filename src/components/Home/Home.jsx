import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";



const Home = () => {
const[courses, setCourses]=useState([]);
const [cartCourse, setCartCourse]=useState([]);

useEffect(()=>{
    fetch('./data.json')
    .then(res=>res.json())
    .then(data=>setCourses(data))
})

const handleCourse=(course)=>{
    
const newCartCourse=[...cartCourse,course];
setCartCourse(newCartCourse);

}


    return (
        <div className="flex">
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
                     <button className="w-3/4 bg-slate-400 mx-auto" onClick={()=>handleCourse(course)}>Select</button>   
                    </div>
                ))
            }
        </div>
        <div>
            <Cart cartCourse={cartCourse}></Cart>
        </div>
        </div>
    );
};

export default Home;