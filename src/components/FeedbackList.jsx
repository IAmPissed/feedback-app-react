import { motion, AnimatePresence } from "framer-motion"
import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"
import FeedackItem from "./FeedbackItem"

function FeedbackList() {
	const { feedbacks } = useContext(FeedbackContext)

	if (feedbacks.length === 0) {
		return <p>No Feedback Yet</p>
	}

	return (
		<div className='feedback-list'>
			<AnimatePresence>
				{feedbacks.map((feedback) => (
					<motion.div
						key={feedback.id}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<FeedackItem key={feedback.id} feedback={feedback} />
					</motion.div>
				))}
			</AnimatePresence>
		</div>
	)
}
export default FeedbackList
