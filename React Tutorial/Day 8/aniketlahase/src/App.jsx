import aniket from "./assets/aniket.jpg";
import "./App.css";
import User from "./User";


function App() {
  const heading = {
    color: "red",
    backgroundColor: "black",
    textAlign: "center",
    borderRadius: "20px",
    width: "300px",
    padding: "10px",
  }; //internal css in react
  const imageStyle = {
    borderRadius: "50%",
    width: "200px",
    marginTop: "10px",
  };

  const color = "green";
  const bgcolor = "black";
  const color2 = "red"
  const isLogin = true;

  return (
    <div>
      {/* <h2
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

      <div
        style={{
          width: "400px",
          height: "400px",
          border: "1px solid black",
          boxShadow: "0px 0px 10px black",
          textAlign: "center",
        }}
      >
        <img style={imageStyle} src={aniket} alt="" />
        <h2>aniket lahase</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          accusantium quod distinctio. Nisi sed mollitia obcaecati dignissimos.
          Aspernatur dolore similique odio fuga asperiores voluptates tempore
          debitis illo dolor laudantium. Ipsa.
        </p>
      </div>

      <div
        style={{
          width: "400px",
          height: "400px",
          border: "1px solid black",
          margin: "20px",
        }}
      >
        <h2>div 2</h2>
      </div> */}
      

      {/* <h1 style={{ color: isLogin?color:color2, backgroundColor: bgcolor }}>
        Hiii I am Aniket
      </h1> 
       */}

   
     <User/>


      <h1 className="heading"> Hiii I am Aniket </h1> 
      <h2 id="title">hello aniket</h2>
      <h3 className="heading">aniketandpython</h3>

      <div className="mainContainer">

      <div className="container"></div>
      <div className="container"></div>
      <div className="container"></div>

      </div>
      
    </div>
  );
}

export default App;
