import { motion, AnimatePresence } from "framer-motion"
import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"
import FeedackItem from "./FeedbackItem"
import Spinner from "./shared/Spinner"

function FeedbackList() {
	const { feedbacks, isLoading } = useContext(FeedbackContext)

	if (!isLoading && feedbacks.length === 0) {
		return <p>No Feedback Yet</p>
	}

	const feedbackList = (
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

	return isLoading ? <Spinner /> : feedbackList
}
export default FeedbackList
