import { useEffect, useState } from "react";
function App() {
  const [count, setCount] = useState(0);

  const [rcount, setrcount] = useState(10);

  const [name, setName] = useState("rahul");

  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  });

  // useEffect(() => {
  //   // console.log("application started");
  //   demo();
  // });

  // useEffect(() => {
  //   demo();
  // },[]);

  // useEffect(() => {
  //   demo();
  // }, [count]);

  //   useEffect(() => {
  //   demo();
  // }, [rcount]);

  //   useEffect(() => {
  //   demo();
  // }, [count,rcount]);

  useEffect(() => {
    console.log("application started");
    document.title = name;
  }, [name]);

  // function demo() {
  //   console.log("demo function call");
  // }

  return (
    <div>
      <h1>app components</h1>
      <h3>useEffect concept</h3>

      {/* <button onClick={demo}>click Here</button> */}

      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>count</button>

      <h2>{rcount}</h2>
      <button onClick={() => setrcount(rcount - 1)}>reverse count</button>

      <button onClick={() => setName("we are from MH ")}>change title</button>

      <h2>{time}</h2>
    </div>
  );
}

export default App;
