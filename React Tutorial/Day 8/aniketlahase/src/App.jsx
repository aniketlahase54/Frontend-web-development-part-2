function App() {
  const heading = {
    color: "red",
    backgroundColor: "black",
    textAlign: "center",
    borderRadius: "20px",
    width: "300px",
    padding: "10px",
  }; //internal css in react
  return (
    <div>
      <h2
        style={{
          color: "red",
          backgroundColor: "black",
          textAlign: "center",
          borderRadius: "20px",
          width: "300px",
          padding: "10px",
        }} //inline css in react
      >
        app components
      </h2>

      <h2 style={heading}>aniket lahase</h2>

      <div style={{width:"400px",height:"400px",border:"1px solid black"}}>
        <h2>div 1</h2>
      </div>

      
      <div style={{width:"400px",height:"400px",border:"1px solid black", margin:"20px"}}>
        <h2>div 2</h2>
      </div>
    </div>
  );
}

export default App;
