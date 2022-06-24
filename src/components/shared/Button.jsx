import PropTypes from "prop-types"

function Button({ children, type, isDisabled, styleClass }) {
	return (
		<button
			type={type}
			disabled={isDisabled}
			className={`btn btn-${styleClass}`}
		>
			{children}
		</button>
	)
}

Button.defaultProps = {
	type: "button",
	styleClass: "primary",
	isDisabled: false,
}

Button.propTypes = {
	type: PropTypes.string,
	children: PropTypes.node.isRequired,
	styleClass: PropTypes.string,
	isDisabled: PropTypes.bool,
}

export default Button
