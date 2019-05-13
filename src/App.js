import React from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faFile,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab, faHome, faUser, faFile, faEnvelope);

function App() {
  return (
    <div >
      <Layout fixedHeader>
        <Header
          className="nav-header"
          title={
            <Link to="/" className="nav-title">
              Portfolio
            </Link>
          }
        >
          <Navigation>
            {/* <Link to="/resume">Resume</Link> */}
            <Link to="/aboutme">About me</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Header>
        <Drawer
          title={
            <Link to="/" className="nav-title-sub">
              Portfolio
            </Link>
          }
        >
          <Navigation className="nav">
            {/* <Link to="/resume">Resume</Link> */}
            <Link to="/aboutme">About me</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
            <ul>
              <li>
                <a href="https://codepen.io/jordy770/">
                  <FontAwesomeIcon icon={["fab", "codepen"]} size="lg" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/jordy-van-santen-b0a20851/">
                  <FontAwesomeIcon icon={["fab", "linkedin"]} size="lg" />
                </a>
              </li>
              <li>
                <a href="https://github.com/jordy770/">
                  <FontAwesomeIcon icon={["fab", "github"]} size="lg" />
                </a>
                <i class="fab fa-facebook-square" />
              </li>
            </ul>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>

    // <div>
    //   <div className="nav-bar">
    //         <nav>
    //           <Link exact to="./" ClassName="active">
    //             <FontAwesomeIcon icon="home" />
    //           </Link>
    //           <Link to="./aboutme" ClassName="active" >
    //             <FontAwesomeIcon icon="user"/>
    //           </Link>
    //           <Link to="./projects" ClassName="active" >
    //             <FontAwesomeIcon icon="file" />
    //           </Link>
    //           <Link to="./contact" ClassName="active" >
    //             <FontAwesomeIcon icon="envelope" />
    //           </Link>
    //         </nav>
    //       <ul>
    //         <li>
    //           <a href="https://codepen.io/jordy770/">
    //           <FontAwesomeIcon icon={['fab', 'codepen']} />
    //           </a>
    //         </li>
    //         <li>
    //           <a href="https://www.linkedin.com/in/jordy-van-santen-b0a20851/">
    //           <FontAwesomeIcon icon={['fab', 'linkedin']} />
    //           </a>
    //         </li>
    //         <li>
    //           <a href="https://github.com/jordy770/">
    //           <FontAwesomeIcon icon={['fab', 'github']} />
    //           </a>
    //           <i class="fab fa-facebook-square"></i>
    //         </li>
    //       </ul>
    //     </div>
    //   <div className="page-content" />
    //   <Main/>
    // </div>
  );
}

export default App;
