import React, { useState } from "react";
import "./header.css";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import TextField from "@mui/material/TextField";
import OutsideClickHandler from "react-outside-click-handler";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
const Header = ({ dogs, cats, birds, onModalShow }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const handleSearch = (query) => {
    setQuery(query);
    if (query.length >= 3) {
      const allAnimals = [...dogs, ...cats, ...birds];
      const result = allAnimals.filter((item) => {
        return item.name.toLowerCase().includes(query.toLowerCase());
      });
      setSearchResults(result);
    } else {
      setSearchResults([]);
    }
  };

  const toggleSearch = () => {
    setIsSearchVisible(true);
  };
  const toggleClose = () => {
    setIsSearchVisible(false);
  };

  const hideSearch = () => {
    setQuery("");
    setSearchResults([]);
  };

  return (
    <div className="header">
      <div className="leftSide">
        <NavLink to="/">
          <img className="shake-top" src={logo} alt="Logo" />
        </NavLink>
      </div>
      <div className="rightSide">
        {isSearchVisible ? (
          <div className="search">
            <TextField
              id="standard-basic"
              label="Search"
              variant="standard"
              value={query}
              onChange={(e) => handleSearch(e.target.value)}
            /> 
            
            <OutsideClickHandler onOutsideClick={hideSearch}>
              {query &&
                (searchResults.length > 0 ? (
                  <div className="search-results rounded">
                    <ul>
                      {searchResults.map((item) => (
                        <li key={item.id} onClick={() => onModalShow(item)}>
                          {item.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div>
                    <p>No Results!</p>
                  </div>
                ))}
            </OutsideClickHandler>
          </div>
        ) : (
          <div className="actions">
            <NavLink to="/" activeClassName="activeNavlink" className="navlinkDisabled">
              Home
            </NavLink>
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Menu
              </button>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to={"/animals/dogs"}>
                    Dogs
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to={"/animals/cats"}>
                    Cats
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to={"/animals/birds"}>
                    Birds
                  </NavLink>
                </li>
              </ul>
            </div>
            <NavLink to="/about" activeClassName="activeNavlink" className="navlinkDisabled">
              About
            </NavLink>
            <NavLink to="/contact" activeClassName="activeNavlink" className="navlinkDisabled">
              Contact
            </NavLink>
          </div>
        )}
        <div className="search-icon" > 
        {isSearchVisible? <CloseIcon onClick={toggleClose}/> : <SearchIcon onClick={toggleSearch} />}
        </div>
      </div>
    </div>
  );
};

export default Header;
