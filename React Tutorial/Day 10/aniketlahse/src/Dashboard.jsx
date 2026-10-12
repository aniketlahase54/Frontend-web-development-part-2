import { Route, Routes, Link, Outlet, useNavigate } from "react-router-dom";
function Dashboard() {
  const navigate = useNavigate();

  function goHomePage() {
    setTimeout(() => {
      navigate("/home");
    }, 3000);
  }
  return (
    <div>
      <h1>Dashboard page</h1>

      <Link to="profile">Profile</Link>
      <Link to="setting">Setting</Link>
      <Outlet />
      <br />
      <br />

      <button onClick={() => navigate(-1)}>Back</button>

      <button onClick={() => navigate(1)}>forward</button>

      <button onClick={goHomePage}>Home Page</button>
    </div>
  );
}

export default Dashboard;
