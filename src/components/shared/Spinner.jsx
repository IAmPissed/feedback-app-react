import spinner from "../assets/spinner.gif"

function Spinner() {
	const styles = {
		display: "block",
		width: "100px",
		margin: "0 auto",
	}
	return <img src={spinner} alt='loading...' style={styles} />
}
export default Spinner
