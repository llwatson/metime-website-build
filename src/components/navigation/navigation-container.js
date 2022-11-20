import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavigationComponent extends Component {
  constructor () {
    super();
    
  }

  render() {
    return (

        <div className="header-wrapper">
          <div className="title-wrapper">
            <h1>It's ME-TIME!</h1>
          </div>
          <div className="nav-wrapper">
              <div className="nav-link-wrapper">
                <NavLink exact to="/" activeClassName="nav-link-active">
                  Home
              </NavLink>
            </div>

              <div className="nav-link-wrapper">
                <NavLink to="/about-us" activeClassName="nav-link-active">
                  About Us
              </NavLink>
            </div>

              <div className="nav-link-wrapper">
                <NavLink to="/quotes" activeClassName="nav-link-active">
                  ME-TIME Quotes
              </NavLink>
            </div>

              <div className="nav-link-wrapper">
                <NavLink to="/contact" activeClassName="nav-link-active">
                  Contact Us
              </NavLink>
            </div>

            <div className="nav-link-wrapper">
              <NavLink to="/donate" activeClassName="nav-link-active">
                Donate
            </NavLink>
          </div>
        </div>

        </div>
    )
  }

 }