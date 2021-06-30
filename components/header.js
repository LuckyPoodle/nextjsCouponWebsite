import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faHamburger } from '@fortawesome/free-solid-svg-icons'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';



const BsNavLink = props => {
    const { href, title } = props;
    return (
        <Link href={href}>
            <a className="nav-link port-navbar-link">{title}</a>
        </Link>
    )
}

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar
                className="port-navbar port-default absolute "

                dark
                expand="md">
                <div className="navbar-brand">
                <img src='/images/burger.svg' width="64px" height="64px"></img>
              
                </div>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto " navbar>
                        <NavItem className="port-navbar-item">
                        <FontAwesomeIcon size="xs" className="port-navbar-item-icon d-none d-lg-block" icon={faHome} />


                            <BsNavLink href="/" title="Home" />

                        </NavItem>
                        <NavItem className="port-navbar-item">
                            <FontAwesomeIcon className="port-navbar-item-icon d-none d-lg-block" icon={faHamburger} />

                            <BsNavLink href="/about" title="About" />
                        </NavItem>

                    </Nav>

                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;