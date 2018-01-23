import React from 'react';
import {Jumbotron, Nav, NavItem} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => (
    <div>
  <div className="imageTest2" style={{ backgroundImage: 'url(http://i.telegraph.co.uk/multimedia/archive/01946/new-york-times_1946907c.jpg)' }}></div>
    
    <div className="imageTest" style={{ backgroundImage: 'url(http://i.telegraph.co.uk/multimedia/archive/01946/new-york-times_1946907c.jpg)' }}>
        <Jumbotron className="text-center" style={{ backgroundImage: 'url(https://shroudofturin.files.wordpress.com/2015/03/image25.png)' }}>
            <h1></h1>
            <br></br>
            <br></br>
            <p></p>
        </Jumbotron>
    </div>
        <Nav bsStyle="tabs">
            <LinkContainer exact to="/">
                <NavItem>Search for Articles</NavItem>
            </LinkContainer>
            <LinkContainer to="/saved">
                <NavItem>Saved Articles</NavItem>
            </LinkContainer>
        </Nav>
    </div>
);

export default Header;
