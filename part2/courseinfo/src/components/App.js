import React from "react";
import Course from "./Course";

const App = ({ courses }) => {
    return(
        <>
            {courses.map(course=>{
                return <Course key={course.id} course={course}/>
            })}
        </>
    )
}

export default App;