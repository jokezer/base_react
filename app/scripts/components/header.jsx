import React from 'react';
import { Link } from 'react-router';

// const Header = (props) => {
//   return (
//     <header className="clearfix">
//       Application Name
//       <nav className="clearfix">
//         <div className="nav-item">
//           <Link to="orders">Home</Link>
//         </div>
//         <div className="nav-item">
//           <Link to="orders">Orders</Link>
//         </div>
//       </nav>
//     </header>
//   )
// };

const Header = (props) => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">Brand</a>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li><Link to="orders">Orders</Link></li>
            <li><Link to="info">Info</Link></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#">Log in</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
};

export default Header;
