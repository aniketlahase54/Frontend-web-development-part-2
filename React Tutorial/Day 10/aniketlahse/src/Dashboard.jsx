import { Route, Routes, Link ,Outlet} from "react-router-dom";
function Dashboard() {
  return (
    <div>
      <h1>Dashboard page</h1>

      <Link to="profile">Profile</Link>
      <Link to="setting">Setting</Link>
      <Outlet/>
    </div>
  );
}

export default Dashboard;
