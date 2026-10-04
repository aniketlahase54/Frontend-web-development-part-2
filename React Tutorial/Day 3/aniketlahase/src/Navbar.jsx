const Navbar = () => {
    const anchorTag = {
        color:"white",
        marginRight: "10px",
        textDecoration:"none"

    }
  return (
    <div
      style={{
        backgroundColor: "black",
        width: "100%",
        height: "70px",
        display: "flex",
      }}
    >
      <div style={{ width: "40%" }}>
        <h2
          style={{
            margin: "0px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color:"white"
          }}
        >
          my profile
        </h2>
      </div>
      <div
        style={{
          width: "60%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <a href="" style={ anchorTag }>Home</a>
        <a href="" style={ anchorTag }>About</a>
        <a href="" style={ anchorTag }>Contact</a>
        <a href="" style={ anchorTag }>Singup</a>
      </div>
    </div>
  );
};

export default Navbar;
