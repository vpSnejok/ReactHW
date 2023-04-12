import "./Button.scss"

const Button = ({type, className, children, handleClick}) => {


	return (
		<button type={type} className={className} onClick={handleClick}>
			{children}
		</button>
	)
}
export default Button

