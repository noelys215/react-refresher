import { BaseButton, GoogleSignInButton, InvertedButton, LoadingSpinner } from './button.styles';
import * as React from 'react';

export enum BUTTON_TYPE_CLASSES {
	base = 'base',
	google = 'google-sign-in',
	inverted = 'inverted',
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base): typeof BaseButton =>
	({
		[BUTTON_TYPE_CLASSES.base]: BaseButton,
		[BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
		[BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
	}[buttonType]);

export type ButtonProps = {
	children?: React.ReactNode;
	buttonType?: BUTTON_TYPE_CLASSES;
	isLoading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
	children,
	buttonType,
	isLoading = false,
	...otherProps
}) => {
	const CustomButton = getButton(buttonType);
	return (
		<CustomButton disabled={isLoading} {...otherProps}>
			{isLoading ? <LoadingSpinner /> : children}
		</CustomButton>
	);
};

export default Button;
