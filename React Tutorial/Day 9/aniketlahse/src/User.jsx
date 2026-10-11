function User() {
  const students = [
    {
      id: 101,
      name: "aniket",
      age: 23,
    },
    {
      id: 102,
      name: "om",
      age: 22,
    },
    {
      id: 103,
      name: "rahul",
      age: 21,
    },
    {
      id: 104,
      name: "vaibhav",
      age: 25,
    },
  ];
  return (
    <div>
      <h1 className="text-danger bg-dark text-center ">user components</h1>

      <table className="table table-striped">
        <thead className="table-dark text-center">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>

        <tbody className="text-center table-primary">
          {students.map((student) => {
            return (
              <tr>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default User;
