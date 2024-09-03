 import './sidebar.component.css';
function Sidebar() {
  return (

      
      <nav className="sidebar">
        <div className="sidebar-header">
          <h3>
            <img src="/logo.png" className="img-fluid" />
            <span>Vishweb design</span>
          </h3>
        </div>
        <ul className="list-unstyled components">

          <li className="active">
            <a href="#" className="dashboard">
              <i className="material-icons">dashboard</i>
              <span>Dashboard</span>
            </a>
          </li>

          <li className="">
            <a
              href="#"
              className="dropdown-toggle"
            >
              <i className="material-icons">aspect_ratio</i>
              <span>Assets</span>
            </a>
          </li>

          <li className="">
            <a
              href="#"
              className="dropdown-toggle"
            >
              <i className="material-icons">apps</i>
              <span>Location</span>
            </a>
          </li>

          <li className="">
            <a
              href="#"
              className="dropdown-toggle"
            >
              <i className="material-icons">equalizer</i>

              <span>Catagories</span>
            </a>
          </li>

          <li className="">
            <a
              href="#"
              className="dropdown-toggle"
            >
              <i className="material-icons">extension</i>
              <span>Reports</span>
            </a>
          </li>

          <li className="">
            <a
              href="#"
              
              className="dropdown-toggle"
            >
              <i className="material-icons">border_color</i>
              <span>Role</span>
            </a>
          </li>

          <li className="">
            <a
              href="#"
              className="dropdown-toggle"
            >
              <i className="material-icons">grid_on</i>
              <span>Gallary</span>
            </a>
          </li>

          <li className="">
            <a
              href="#"
              className="dropdown-toggle"
            >
              <i className="material-icons">content_copy</i>
              <span>My Profile</span>
            </a>
          </li>

          <li className="">
            <a href="#">
              <i className="material-icons">date_range</i>
              <span>Settings</span>
            </a>
          </li>

          <li className="">
            <a href="#">
              <i className="material-icons">library_books</i>
              <span>Sign Out</span>
            </a>
          </li>
        </ul>
      </nav>

  );
}

export default Sidebar;
