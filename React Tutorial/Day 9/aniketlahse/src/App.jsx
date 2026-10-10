import styled from "styled-components";


function App(){
const Heading = styled.h1 `
color:red;
background-color:black;
text-align:center;
border:1px solid black;
width:  300px

`;
const Button = styled.button`
color: white;
background-color : black;
border-radius : 20px;
font-size : 40px;
padding : 8px 12px;
margin : 10px
`;

const Div = styled.div`
    width : 400px;
    height : 400px;
    border : 1px solid black;

    #h1{
    color : blue;

    }

    p{
    color : green;

    }


`

  return(
    <div>
      <Heading>app conponents</Heading>
      <Heading>hello user</Heading>

      <Button>Login</Button>
      <Button>Register</Button>
      <Button>Save</Button>

      <Div>
        <Heading>hello user</Heading>
         <Button>Register</Button>
         <h1 id="h1"> i am from pune</h1>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima reprehenderit totam nihil in doloribus! Velit architecto, tenetur dolorum, non at facere cum, eaque consequatur asperiores deleniti aliquam accusantium optio ex?</p>
      </Div>

  


    </div>
  )
}

export default App;
