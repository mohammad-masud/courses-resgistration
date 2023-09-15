import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { FaDollarSign } from 'react-icons/fa';
import { GoBook } from 'react-icons/go';



const Home = () => {
const[courses, setCourses]=useState([]);
const [cartCourse, setCartCourse]=useState([]);
const [totalCredit, setTotalCredit]=useState(0);
const [creditRemaining, setCreditRemaining]=useState(20);

useEffect(()=>{
    fetch('./data.json')
    .then(res=>res.json())
    .then(data=>setCourses(data))
})

const handleCourse=(course)=>{
    const isExist=cartCourse.find((item)=>item.id==course.id);
    let count=course.credit;
    if(isExist){
        Swal.fire({
            icon: 'error',
            text: 'This course already added in cart',
          });
    }else{
        cartCourse.forEach(item=>{
            count=count+item.credit;
        })
            const newCartCourse=[...cartCourse,course];
            const totalRemaining=20-count;
            setCartCourse(newCartCourse);
            if(count<20){
                setTotalCredit(count);
            }else{
                return Swal.fire({
                    icon: 'error',
                    text: 'your remaining credit isnt enough to add this course',
                  });
            }
           
            setCreditRemaining(totalRemaining);
            

    }


}


    return (
        <div className="flex">
        <div className="flex flex-wrap w-2/3 ">
            {
                courses.map((course)=>(
                    <div key={course.id} className="w-1/3  gap-5 py-2">
                    <img src={course.img} alt="" />
                    <h2 className="font-bold py-4">{course.course_name}</h2>
                    <p>{course.course_details}</p>
                        <div className="flex gap-2 items-center">
                           <p><FaDollarSign/></p>
                           <p>Price: {course.price}</p>
                           <p className="ml-6"><GoBook/></p>
                           <p>Credit:{course.credit}hr</p>
                        </div>
                     <button className="w-3/4 bg-blue-600 text-white mx-auto" onClick={()=>handleCourse(course)}>Select</button>   
                    </div>
                ))
            }
        </div>
        <div>
            <Cart cartCourse={cartCourse} totalCredit={totalCredit} creditRemaining={creditRemaining}></Cart>
        </div>
        </div>
    );
};

export default Home;