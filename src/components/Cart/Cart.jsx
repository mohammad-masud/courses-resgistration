import Home from "../Home/Home";

const Cart = ({cartCourse}) => {
    return (
        <div className="border border-solid w-96 h-96">
           
            {
                cartCourse.map(item=>(
                    <p>{item.course_name}</p>
                ))
            }
        </div>
    );
};

export default Cart;