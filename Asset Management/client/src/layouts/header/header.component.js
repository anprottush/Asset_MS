 import './header.component.css';

function Header() {
  return (
    
      <div className="top-navbar">
        <div className="xp-topbar">
          <div className="row">

           {/* <div class="">
                <h2>Dashboard</h2>
                <span  class="
                   "  >
                  Welcome, Mehedi!
                </span>
            
              </div>  */}


              <div class="d-flex flex-column">
                <div class="p-1 ">Dashboard</div>
                <div class="p-1 ">Welcome, Mehedi!</div>
                
              </div>



            {/* <div className="col-10 col-md-6 col-lg-8 order-1 order-md-3  d-flex flex-column ml-auto  " style={{backgroundColor: "red"}}>
              <div className="xp-profilebar text-right">
              <button type="button" class="btn btn-primary ">Add Assets</button>
                <nav className="navbar p-0 text-right" >
                  <ul className="nav navbar-nav flex-row ml-auto ">


                    <li className="nav-item">
                    
                    </li>



                   




                  </ul>
                </nav>
              </div>
            </div> */}


<div className="col-10 col-md-6 col-lg-8 order-1 order-md-3   flex-row ml-auto ">
                <div className="xp-profilebar text-right p-4" >
                  <button type="button" className="btn btn-primary position-relative" >Add Assets</button>
                  
                </div>
              </div>



          </div>
        </div>
        <div className="xp-breadcrumbbar text-center">
          <h4 className="page-title">Dashboard</h4>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a className="#">Booster</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Dashboard
            </li>
          </ol>
        </div>
      </div>
  
  );
}

export default Header;
