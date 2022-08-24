import { CartIconContainer, ItemCount, ShoppingIcon } from './cart-icon.styles.jsx';
import { CartContext } from '../../context/cart.context';

import React, { useContext } from 'react';

const CartIcon = () => {
	const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
	const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

	return (
		<CartIconContainer onClick={toggleIsCartOpen}>
			<ShoppingIcon className="shopping-icon" />
			<ItemCount>{cartCount}</ItemCount>
		</CartIconContainer>
	);
};

export default CartIcon;
