import { useState } from "react";
function App() {
  const [name, setName] = useState("Aniket");

  const [courses, setCourses] = useState(["java", "python", "react"]);

  const [student, setStudent] = useState({
    id: 1,
    name: "aniket",
    age: 22,
    course: "python",
  });

  function addName() {
    setName("Om");
  }

  function deleteName() {
    setName("");
  }

  const addAngularCourse = () => {
    setCourses([...courses, "angular"]);
  };

  const addSpringCourse = () => {
    setCourses([...courses, "Spring"]);
  };

  const updateCourse = () => {
    setCourses(
      courses.map((course) =>
        course === "python" ? "python with sql" : course,
      ),
    );
  };

  const deleteCourse = () => {
    setCourses(courses.map((course) => (course === "java" ? "" : course)));
  };

  const deletereactCourse = () => {
    setCourses(courses.filter((course) => course != "react"));
  };

  function addStudent(){
    setStudent({
      id : 2,
      name : "rahul",
      age : 23,
      course : "java"
    })

  }

  
  function updateStudent(){
    setStudent({
      ...student,
      name:"aniket lahase",
      age:25
    })

  }

  
  function deteleStudent(){
    setStudent({});
    alert("delete student")

  }

  return (
    <div>
      <h1>App components</h1>
      <h2>{name}</h2>
      <button onClick={() => setName("Rahul")}>change name</button>
      <button onClick={addName}>update name</button>
      <button onClick={deleteName}>delete name</button>
      <hr />
      <hr />

      <h1>
        {courses.map((course) => {
          return <h3>{course}</h3>;
        })}
      </h1>

      <button onClick={addAngularCourse}>add Angular course</button>

      <button onClick={addSpringCourse}>add Spring course</button>

      <button onClick={updateCourse}>update course</button>
      <button onClick={deleteCourse}>delete course</button>

      <button onClick={deletereactCourse}>delete react course</button>
      <hr />
      <hr />

      {
        <div>
          <h2>{student.id}</h2>
          <h2>{student.name}</h2>
          <h2>{student.age}</h2>
          <h2>{student.course}</h2>
        </div>
      }

      <button onClick={addStudent}>add student</button>
      <button onClick={updateStudent}>update student</button>

      <button onClick={deteleStudent}>delete student</button>
    </div>
  );
}

export default App;
