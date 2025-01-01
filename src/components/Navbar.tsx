import { useState } from 'react';
import logo from '../assets/portpoliologo.png';
import { 
    NavbarContainer,
    NavbarContent,
    Logo,
    MenuLinks,
    HamburgerMenu,
    MobileMenu,
 } from '../styles/NavbarStyles';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false); 

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <NavbarContainer>
            <NavbarContent>
                <Logo className='mt-5'>
                    <img src={logo} alt='Logo' />
                </Logo>
                <HamburgerMenu onClick={toggleMenu} className='mt-3'>
                    <span></span>
                    <span></span>
                    <span></span>
                </HamburgerMenu>
                <MenuLinks className={isOpen ? 'active' : ''}>
                    <a href='/home'>Home</a>
                    <a href='/projects'>Projects</a>
                </MenuLinks>
                {isOpen && (
                    <MobileMenu>
                        <a href='/home'>Home</a>
                        <a href='/projects'>Projects</a>
                    </MobileMenu>
                )}
            </NavbarContent>
        </NavbarContainer>
    );
};

export default Navbar;
