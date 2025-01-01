// src/styles/NavbarStyles.ts
import styled from 'styled-components';

// Navbar 기본 스타일 유지
export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  color: #333;
  padding: 1rem;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(200, 200, 200, 0.7); 
`;

export const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  position: relative;
`;

export const Logo = styled.div`
  img {
    height: 50px; 
    width: auto;
  }
`;

// 메뉴 링크
export const MenuLinks = styled.div`
  display: flex;
  gap: 2rem;

  a {
    text-decoration: none;
    color: #333;
    font-size: 1.1rem;
    &:hover {
      color: #007bff;
    }
  }

  @media (max-width: 768px) {
    display: none; // 작은 화면에서는 숨김
  }
`;

// 햄버거 버튼
export const HamburgerMenu = styled.div`
  display: none;
  cursor: pointer;

  span {
    display: block;
    width: 25px;
    height: 3px;
    background: #007bff; 
    margin: 5px 0;
    border-radius: 100px;
    transition: all 0.3s ease-in-out;
  }

  @media (max-width: 768px) {
    display: block; // 작은 화면에서는 표시
  }
`;

// 모바일 메뉴
export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 87px; 
  right: 0;
  background-color: rgba(245, 245, 245);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  border-radius: 5px;
  gap: 1rem;

  a {
    text-decoration: none;
    color: #333;
    font-size: 1.1rem;
    &:hover {
      color: #007bff;
    }
  }

  @media (min-width: 768px) {
    display: none; // 큰 화면에서는 숨김
  }
`;


export const ProfileActions = styled.div`
  display: flex;
  gap: 1rem;

  button {
    background: none;
    border: none;
    color: #333;
    font-size: 1rem;
    cursor: pointer;
    &:hover {
      color: #007bff;
    }
  }
`;
