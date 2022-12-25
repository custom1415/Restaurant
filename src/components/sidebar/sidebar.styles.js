import { Link } from "react-router-dom";
import styled from "styled-components";
export const SidebarWrapper = styled.aside`
  position: fixed;
  z-index: 50;
  top: 0;
  right: 0;
  height: 100%;
  width: 350px;
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transform: translateX(
    ${(props) => (props.className === "open" ? "0" : "100%")}
  );
  transition: transform 0.3s ease-out;
`;

export const SidebarHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #eee;
`;

export const SidebarTitle = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;
`;

export const SidebarContent = styled.div`
  max-height: calc(100% - 200px);
  overflow-y: auto;
`;

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #eee;
`;

export const ItemImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 1rem;
`;

export const ItemDetails = styled.div`
  flex: 1;
`;

export const ItemName = styled.h2`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const ItemQuantity = styled.p`
  font-size: 0.8rem;
  color: #666;
`;

export const EmptyCart = styled.div`
  padding: 1rem;
  font-size: 1.2rem;
  text-align: center;
`;

export const SidebarFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem;
  border-top: 1px solid #eee;
`;

export const Subtotal = styled.div`
  font-size: 1.4rem;
  color: #666;
`;

export const TotalAmount = styled.span`
  font-size: 1.4rem;
  font-weight: bold;
  color: #333;
  margin-left: 1em;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  & > *:nth-child(2) {
    margin-left: 2rem;
  }
  margin-top: 1em;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  width: 50%;
`;

export const Button = styled.button`
  display: block;
  width: 100%;
  background: #333;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.75rem 1.25rem;
  border-radius: 4px;
  cursor: pointer;
`;
