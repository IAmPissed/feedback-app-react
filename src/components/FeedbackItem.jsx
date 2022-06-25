import Card from "./shared/Card"
import { FaTimes } from "react-icons/fa"
import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"

function FeedackItem({ feedback }) {
	const { deleteFeedback } = useContext(FeedbackContext)

	return (
		<Card>
			<div className='num-display'>{feedback.rating}</div>
			<button className='close' onClick={() => deleteFeedback(feedback.id)}>
				<FaTimes color='purple' />
			</button>
			<div className='text-display'>{feedback.text}</div>
		</Card>
	)
}
export default FeedackItem
