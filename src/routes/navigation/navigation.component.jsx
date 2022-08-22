import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './navigation.styles.scss';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';

const Navigation = () => {
	return (
		<>
			<div className="navigation">
				<Link to="/" className="logo-container">
					<CrownLogo className="logo" />
				</Link>
				<div className="nav-links-container">
					<Link className="nav-link" to="">
						SHOP
					</Link>
					<Link className="nav-link" to="/auth">
						SIGN IN
					</Link>
				</div>
			</div>
			<Outlet />
		</>
	);
};

export default Navigation;
