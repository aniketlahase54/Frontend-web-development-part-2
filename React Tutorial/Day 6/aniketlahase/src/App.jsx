function App() {
  // const courses = ["HTML", "CSS", "JS", "React"];

  // const fruits = ["mango", "apple", "banana"];

  // const numbers = [15, 85, 47, 96, 32, 58, 47];

  const students = [
    {
      id : 1,
      name : "aniket",
      age : 22
    },
      {
      id : 2,
      name : "om",
      age : 23
    },
      {
      id : 3,
      name : "rahul",
      age : 21
    },

  ]
  // console.log(courses);
  // console.log(student);

  return(
    <>
      <h1>app components</h1>
      <table border="1" width="50%" hight="400px">
        <thead align = "center">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>

        <tbody align = "center">
          {students.map((student) => {
            return (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default App;

    // {/* {
    //     students.map((student)=>{
    //       return(
    //         <div>
    //           <h3>ID : {student.id}</h3>
    //           <h3>Name : {student.name}</h3>
    //           <h3>Age : {student.age}</h3>
    //           <hr />
    //         </div>
    //       )
    //     })
    //   } */}

  
     
    //  {/* <h2>{courses[0]}</h2>
    //   <h2>{courses[1]}</h2>
    //   <h2>{courses[2]}</h2>
    //   <h2>{courses[3]}</h2> */}
    //   {/* <h4>course list</h4>
    //   {courses.map((course, index) => {
    //     return (
    //       <h2 key={index}>
    //         {index} - {course}
    //       </h2>
    //     );
    //   })}
    //   <hr />
    //   <h4>fruits list</h4>
    //   {fruits.map((fruit) => {
    //     return <h2>{fruit.toUpperCase()}</h2>;
    //   })}

    //   <hr />
    //   <h4>number list</h4>
    //   {numbers.map((number) => {
    //     return <h2>{number}</h2>;
    //   })} */}

    //   {/* <h2>{student[0].id}</h2>
    //   <h2>{student[0].name}</h2>
    //   <h2>{student[0].age}</h2>
    //   <hr />
    //   <h2>{student[1].id}</h2>
    //   <h2>{student[1].name}</h2>
    //   <h2>{student[1].age}</h2>
    //   <hr />
    //   <h2>{student[2].id}</h2>
    //   <h2>{student[2].name}</h2>*/}

     

   

