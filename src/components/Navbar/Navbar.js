import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../assets/3d-modified.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import {
    AiFillStar,
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineContacts
} from "react-icons/ai";
import { GiSkills } from "react-icons/gi"
import { CgFileDocument } from "react-icons/cg";
import './Navbar.css'


function NavBar() {
    const [expand, updateExpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);

    function scrollHandler() {
        if (window.scrollY >= 20) {
            updateNavbar(true);
        } else {
            updateNavbar(false);
        }
    }

    window.addEventListener("scroll", scrollHandler);

    return (
        <Navbar
            expanded={expand}
            fixed="top"
            expand="md"
            className={navColour ? "sticky" : "navbar"}
            style={{
                width: "100%",
            }}
        >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 0" }}>
                <Navbar.Brand href="/" className="d-flex">
                    <img src={logo} className="img-fluid logo" alt="brand" width="60px" height="60px" />
                    
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav"
                    onClick={() => {
                        updateExpanded(expand ? false : "expanded");
                    }}

                >
                    <span></span>
                    <span></span>
                    <span></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <div>
                    <Nav className="ms-auto" defaultActiveKey="#home" style={{ display: "flex", fontSize: "1.5rem", justifyContent: "flex-end", alignItems: "center", marginRight: "30px" }}>
                        <div className="nav-items">
                            {/* <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}> */}
                            <AiOutlineHome /> Home
                            {/* </Nav.Link> */}
                        </div>

                        <div className="nav-items">
                            {/* <Nav.Link
                as={Link}
                to="/skillset"
                onClick={() => updateExpanded(false)}
              > */}
                            <GiSkills /> Skillset
                            {/* </Nav.Link> */}
                        </div>

                        <div className="nav-items">
                            {/* <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "} */}
                            Projects
                            {/* </Nav.Link> */}
                        </div>

                        <div className="nav-items">
                            {/* <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              > */}
                            <CgFileDocument /> Resume
                            {/* </Nav.Link> */}
                        </div>

                        <div className="nav-items">
                            {/* <Nav.Link
                as={Link}
                to="/contact"
                onClick={() => updateExpanded(false)}
              > */}
                            <AiOutlineContacts /> Contact Me
                            {/* </Nav.Link> */}
                        </div>

                        {/* {<div className="fork-btn"> */}
                            {/* <Button
                href="https://github.com/Avanishsri31/React-Portfolio"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button> */}
                        {/* </div>} */}
                    </Nav>
                    </div>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}

export default NavBar;
