import User,{Apple, clgname, Fruit} from "./User";

function App(){
  return(
    <div>
       <h1>Aniket Lahse App</h1>
       <h1>{name}</h1>
       <h1>{abc()}</h1>
       <h1>{clgname}</h1>
       <User/>
       <GetData/>
       <Setdata/>
       <Apple/>
       <Fruit/>
    </div>
   
  );
}

function GetData(){
  return(
    <div>
      <h1>get data componets....</h1>
    </div>
  );
}

function Setdata(){
  return(
    <div>
      <h1>set data componets</h1>
    </div>
  )
}

const name = "Aniket";
function abc(){
  console.log("abc function call")
}

export default App;
