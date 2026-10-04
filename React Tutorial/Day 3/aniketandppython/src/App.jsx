function App() {
  let name = "aniket lahase";
  let city = ["pune", "mumbai", "delhi"];
  function hello() {
    alert("hello function call");
  }

  function get() {
    console.log("get function call");
  }

  function add() {
    return 10 + 10;
  }
  let student = {
    id: 101,
    name: "aniket",
    city: "pune",
  };
  return (
    <div>
      <h1>{student.id}</h1>
      <h1>{student.name}</h1>
      <h1>{student.city}</h1>
      <h1>App components</h1>
      <h2>name : {name}</h2>
      <h2>city: {city[0]}</h2>
      <button onClick={hello}>click me</button>
      <h3>{get()}</h3>
      <h3>{add()}</h3>
    </div>
  );
}

export default App;
