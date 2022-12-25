import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.toolkit";
import {
  selectSidebarState,
  toggleSidebar,
} from "../../redux/sidebar/sidebar.toolkit";
import { MdOutlineClose } from "react-icons/md";

import {
  CartItem,
  ItemDetails,
  ItemImage,
  ItemName,
  ItemQuantity,
  SidebarContent,
  SidebarTitle,
  SidebarWrapper,
  EmptyCart,
  TotalAmount,
  SidebarFooter,
  SidebarHeader,
  Subtotal,
  ButtonWrapper,
  StyledLink,
  Button,
} from "./sidebar.styles";
export const CartSidebar = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const cartState = useSelector(selectSidebarState);
  const showCartSidebar = () => dispatch(toggleSidebar(!cartState));
  const removeItem = () => {};
  const cartTotal = useSelector(selectCartTotal);
  return (
    <SidebarWrapper className={cartState ? "open" : "closed"}>
      <SidebarHeader>
        <SidebarTitle>Shopping Cart</SidebarTitle>
        <MdOutlineClose
          className="scale-[1.8] origin-center"
          onClick={showCartSidebar}
        />
      </SidebarHeader>
      <SidebarContent>
        {cartItems.length ? (
          cartItems.map((item) => {
            const { id, name, source, price, quantity } = item;
            return (
              <CartItem key={id}>
                <ItemImage src={source} alt={name} />
                <ItemDetails>
                  <ItemName>{name}</ItemName>
                  <ItemQuantity>
                    {item.quantity} x {price}
                  </ItemQuantity>
                </ItemDetails>
                <MdOutlineClose onClick={removeItem} />
              </CartItem>
            );
          })
        ) : (
          <EmptyCart>No products in cart</EmptyCart>
        )}
      </SidebarContent>
      {cartItems.length ? (
        <SidebarFooter>
          <Subtotal>
            Subtotal: <TotalAmount>NPR {cartTotal}</TotalAmount>
          </Subtotal>
          <ButtonWrapper>
            <StyledLink to="/cart">
              <Button>VIEW CART</Button>
            </StyledLink>
            <StyledLink to="/checkout">
              <Button>CHECKOUT</Button>
            </StyledLink>
          </ButtonWrapper>
        </SidebarFooter>
      ) : null}
    </SidebarWrapper>
  );
};
