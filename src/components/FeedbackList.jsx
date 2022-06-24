import FeedackItem from "./FeedbackItem"

function FeedbackList({ feedbacks, handleDelete }) {
	if (feedbacks.length === 0) {
		return <p>No Feedback Yet</p>
	}

	return (
		<div className='feedback-list'>
			{feedbacks.map((feedback) => (
				<FeedackItem
					key={feedback.id}
					feedback={feedback}
					handleDelete={handleDelete}
				/>
			))}
		</div>
	)
}
export default FeedbackList
