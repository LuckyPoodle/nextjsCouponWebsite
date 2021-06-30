import React from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';
import {  useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapPin, faHamburger,faEnvelope } from '@fortawesome/free-solid-svg-icons'

const BsNavLink = props => {
    const { href, title } = props;
    return (
        <Link href={href}>
            <a className="nav-link port-navbar-link">{title}</a>
        </Link>
    )
}
const HeaderThree = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>

            <Navbar
                className="port-navbar port-default absolute "

                dark
                expand="md">
                <div className="navbar-brand">

                        <Image src='/images/icon_logo-main.png' alt="me" width="100" height="100"></Image>
                </div>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto " navbar>
                        <NavItem className="port-navbar-item">

                        <FontAwesomeIcon className="port-navbar-item-icon d-none d-lg-block" icon={faHamburger} />
                            <span className="menuword">FOOD</span>

                        </NavItem>
                        <NavItem className="port-navbar-item">
                            <FontAwesomeIcon className="port-navbar-item-icon d-none d-lg-block" icon={faMapPin} />
                            <span className="menuword">LOCATIONS</span>
                      
                        </NavItem>
                    </Nav>
                    <Nav className="ms-auto " navbar>

                    
                        <NavItem className="port-navbar-item ">
                            <FontAwesomeIcon className="port-navbar-item-icon d-none d-lg-block  " icon={faEnvelope} />
                            <span className="menuword">CONTACT</span>
                      
                        </NavItem>
                       
                    </Nav>

                </Collapse>
            </Navbar>
        </div>
    );
}

export default HeaderThree
