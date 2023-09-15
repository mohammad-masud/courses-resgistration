import Home from "../Home/Home";

const Cart = ({cartCourse,totalCredit, creditRemaining }) => {
    return (
        <div className="border border-solid w-96 h-96">
           <p className="border-b-2 font-bold text-blue-400">Credit Hour Remaining {creditRemaining} hr</p>
           <h3 className="font-bold">Course Name</h3>
            {
                cartCourse.map(item=>(
                    <li>{item.course_name}</li>
                ))
                
            }
            <p className="border-t-2 border-b-2">Total credit {totalCredit}</p>
        </div>
    );
};

export default Cart;