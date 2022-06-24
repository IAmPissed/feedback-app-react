import PropTypes from "prop-types"

function Card({ children, reverse }) {
	const reverseStyles = {
		backgroundColor: "hsla(0, 0%, 0%, .4)",
		color: "white",
	}
	return (
		<div className='card' style={reverse ? reverseStyles : null}>
			{children}
		</div>
	)
}

Card.defaultProps = {
	reverse: false,
}

Card.propTypes = {
	children: PropTypes.node.isRequired,
	reverse: PropTypes.bool,
}

export default Card
