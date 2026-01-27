import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import phoneSpecs from "./PhoneData";

const Header = ({ isLoggedIn, setIsLoggedIn, cartCount, setFiltered }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const searchInput = query.toLowerCase().trim();

    // Find a matching phone based on brand or model
    let searchModel = null;
    for (const brand in phoneSpecs) {
      if (phoneSpecs.hasOwnProperty(brand)) {
        if (brand.toLowerCase() === searchInput) {
          // If the query is a brand name, navigate to the brand's page
          navigate(`/${brand}`);
          return;
        }
        searchModel = phoneSpecs[brand].find(
          (phone) => phone.model.toLowerCase() === searchInput
        );
        if (searchModel) {
          navigate(`/${brand}/${searchModel.model}`,{ state: {phone : searchModel} });
          return;
        }
      }
    }

    // If no match is found, do nothing
    console.log("No matching brand or model found.");
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    toast.success("Logged out successfully");
    navigate("/");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src="/images/logo.jpg" alt="logo" width="60px" height="50px" style={{ borderRadius: '10px', marginLeft: '5px' }} />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav d-flex flex-row align-items-center w-100 justify-content-between">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page" style={{ marginLeft: '1rem' }}>
                  <span style={{ color: 'rgb(255, 186, 12)', fontWeight: 'bold', fontSize: '18px' }}>Mobi</span>
                  <span style={{ color: 'navy', fontWeight: 'bold', fontSize: '18px' }}>Deals</span>
                </Link>
              </li>
              <li className="nav-item">
                <h1 style={{ fontSize: '19px', marginLeft: '2rem', marginTop: '0.6rem' }}>
                  <Link to="/brands" style={{ color: 'navy', textDecoration: 'none' }}>Brands</Link>
                </h1>
              </li>
              <li className="nav-item">
                <form className="d-flex" role="search" onSubmit={handleSearch}>
                  <input
                    className="form-control my-1"
                    type="search"
                    placeholder="Search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    aria-label="Search"
                    style={{ borderRadius: '22px', marginLeft: '10rem', width:'500px' }}
                  />
                </form>
              </li>
              <li className="py-1" style={{ marginLeft: '12rem', marginRight: '1rem' }}>
                <Link to="/cart-items">
                  <svg xmlns="http://www.w3.org/2000/svg" width="86" height="26" fill="navy" className="bi bi-cart-fill" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                  </svg>
                  <sup className="badge rounded-pill bg-warning" style={{ marginLeft: '-1.8rem', fontSize: '10px' }}>
                    {cartCount}
                  </sup>
                </Link>
              </li>
              <li className="nav-item">
                {!isLoggedIn && (
                <button className="btn mx-3 my-1" style={{ backgroundColor: 'goldenrod', borderRadius: '12px' }}>
                  <Link to="/register" style={{ textDecoration: 'none', color: 'navy' }}>Register</Link>
                </button>)}
              </li>
              <li className="nav-item">
                {isLoggedIn ? (
                  <button className="btn px-3" style={{ backgroundColor: 'goldenrod', borderRadius: '12px', marginLeft: '0.8rem'}} onClick={handleLogout}>
                  Logout
                </button> ):
                (<button className="btn px-3" style={{ backgroundColor: 'goldenrod', borderRadius: '12px', marginLeft: '0.8rem' }}>
                  <Link to="/login" style={{ textDecoration: 'none', color: 'navy' }}>Login</Link>
                </button>)
                }
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
