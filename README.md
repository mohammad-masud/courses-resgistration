Project Feature:
1. Course selection
2. alert box
3. Dynamic rendering

managing state :

we know state hook have 2 main element, one is variable another is function.

I have used 4 state in this project as below:
1.courses
2.cartCourse
3.totalCredit
4.creditRemaining

i have fetch data from json file and set these data in courses variable by setCourses function . By handleCourse function i have set clicked course to the cartCourse variable by setCartCourse.For totalCredit , by default credit amount will be clicked course credit as i declare count variable . then for next course i have set a foreach function with sum with count then by setTotalCredit i have set totalCredit variable value . By default credit remaining declared with 20 then reduced from count variable by each click.

thank you