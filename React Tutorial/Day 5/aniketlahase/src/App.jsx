import Demo from "./Demo";
import Test from "./Test";
import User from "./User";

function App() {
  let username = "aniket lahase";
  let pass = "123456";
  let address = "pune";

  const backend = ["js", "python", "django"];

  const student = {
    id: 1,
    name: "aniket",
    age: 25,
    marks: 85,
  };

  function show() {
    alert("welcome");
  }
  return (
    <div>
      {/* <h1>app components</h1>
      <User username="aniket" age = {23} email="aniketlahase122@gmail.com"/>

      <Test username = {username} pass = {pass} address = {address} /> */}
      {/* <Demo isPlaced={true} />
      <hr />
      <Demo name="aniket" />
      <hr />
      <Demo />
      <hr />
      <Demo skills = {backend}/>
      <hr /> */}
      {/* <Demo obj ={student}/> */}

      {/* <Demo fn={show}/> */}

      {/* <Demo user = {<User/>}/> */}

      <Demo>
        <h1>welcome aniket</h1>
        <h4>i am from pune</h4>
      </Demo>
    </div>
  );
}

export default App;
