import { Link,Outlet } from "react-router-dom";
import "./sidebar.component.css";
const Sidebar = () => {
  return (



    // <nav className="sidebar" >
    //   <div className="sidebar-header" >
      
        
    //     <h3>
    //       <img src="/logo.png" className="img-fluid" />

          
    //     </h3>
    //   </div>




      
    //   <ul className="list-unstyled components">
    //     <li className="active" >
    //       <a href='/dashboard' className="dashboard" >
    //       <i className="bi bi-grid-fill" style={{ fontSize: '22px', color: 'black' }}></i>
    //         <span style={{ fontSize: '18px', color: 'black' }}>Dashboard</span>
    //       </a>
    //     </li>

    //     <li className="">
    //       <a href="/login" >
    //         <i className="material-icons">aspect_ratio</i>
    //         <span>Assets</span>
    //       </a>
    //     </li>



    //     <li className="">
    //       <a href="#">
    //         <i className="material-icons">apps</i>
    //         <span>Location</span>
    //       </a>
    //     </li>

    //     <li className="">
    //       <a href="#" >
    //       <i class="bi bi-opencollective" style={{ fontSize: '22px', color: 'black' }}></i>

    //         <span>Catagories</span>
    //       </a>
    //     </li>

    //     <li className="">
    //       <a href="#" >
    //       <i className="bi bi-bookmark-fill" style={{ fontSize: '22px', color: 'black' }}></i>
    //         <span>Reports</span>
    //       </a>
    //     </li>

    //     <li className="">
    //       <a href="#" >
    //       <i className="bi bi-bookmark-fill" style={{ fontSize: '22px', color: 'black' }}></i>
    //         <span>Role</span>
    //       </a>
    //     </li>

    //     <li className="">
    //       <a href="#" >
    //       <i className="bi bi-bookmark-fill" style={{ fontSize: '22px', color: 'black' }}></i>
    //         <span>Gallary</span>
    //       </a>
    //     </li>

    //     <li className="">
    //       <a href="#" >
    //       <i className="bi bi-person-fill" style={{ fontSize: '22px', color: 'black' }}></i>
    //         <span>My Profile</span>
    //       </a>
    //     </li>

    //     <li className="">
    //       <a href="#">
    //       <i className="bi bi-gear-fill" style={{ fontSize: '22px', color: 'black' }}></i>
    //         <span>Settings</span>
    //       </a>
    //     </li>

    //     <li className="">
    //       <a href="#">
    //       <i class="bi bi-question-circle-fill" style={{ fontSize: '22px', color: 'black' }}></i>
    //         <span>Sign Out</span>
    //       </a>
    //     </li>

      
    //   </ul>
    
    // </nav>


    <nav className="sidebar">
  <div className="sidebar-header">
    <h3>
      <img src="/logo.png" className="img-fluid" alt="Logo" />
    </h3>
  </div>

  <ul className="list-unstyled">
    <li className="active">
      <a href="/dashboard" className="dashboard d-flex align-items-center">
        <i className="bi bi-grid-fill" style={{ fontSize: '22px', color: 'black' }}></i>
        <span className="ms-2" style={{ fontSize: '18px', color: 'black' }}>Dashboard</span>
      </a>
    </li>

    <li>
      <a href="/login" className="d-flex align-items-center">
        <i className="material-icons">aspect_ratio</i>
        <span className="ms-2">Assets</span>
      </a>
    </li>

    <li>
      <a href="#" className="d-flex align-items-center">
        <i className="material-icons">apps</i>
        <span className="ms-2">Location</span>
      </a>
    </li>

    <li>
      <a href="#" className="d-flex align-items-center">
        <i className="bi bi-opencollective" style={{ fontSize: '22px', color: 'black' }}></i>
        <span className="ms-2">Categories</span>
      </a>
    </li>

    <li>
      <a href="#" className="d-flex align-items-center">
        <i className="bi bi-bookmark-fill" style={{ fontSize: '22px', color: 'black' }}></i>
        <span className="ms-2">Reports</span>
      </a>
    </li>

    <li>
      <a href="#" className="d-flex align-items-center">
        <i className="bi bi-bookmark-fill" style={{ fontSize: '22px', color: 'black' }}></i>
        <span className="ms-2">Role</span>
      </a>
    </li>

    <li>
      <a href="#" className="d-flex align-items-center">
        <i className="bi bi-bookmark-fill" style={{ fontSize: '22px', color: 'black' }}></i>
        <span className="ms-2">Gallery</span>
      </a>
    </li>

    <li>
      <a href="#" className="d-flex align-items-center">
        <i className="bi bi-person-fill" style={{ fontSize: '22px', color: 'black' }}></i>
        <span className="ms-2">My Profile</span>
      </a>
    </li>

    <li>
      <a href="#" className="d-flex align-items-center">
        <i className="bi bi-gear-fill" style={{ fontSize: '22px', color: 'black' }}></i>
        <span className="ms-2">Settings</span>
      </a>
    </li>

    <li>
      <a href="#" className="d-flex align-items-center">
        <i className="bi bi-question-circle-fill" style={{ fontSize: '22px', color: 'black' }}></i>
        <span className="ms-2">Sign Out</span>
      </a>
    </li>
  </ul>
</nav>


    
  );
};

export default Sidebar;
