function Demo({ isPlaced, name = "user", skills, obj, fn, user, children }) {
  return (
    <div>
      {/* <h1>Demo componets</h1>
            <h1>{isPlaced?"placed":"searching job"}</h1>
            <h1>Hello..{name}</h1>
            <h1>{skills}</h1>
            <h1>{obj.id}</h1>
            <h1>{obj.name}</h1>
            <h1>{obj.age}</h1>
            <h1>{obj.marks}</h1> */}

      {/* <button onClick={fn}>Click me</button> */}

      {/* {user} */}
      {children}
    </div>
  );
}

export default Demo;
