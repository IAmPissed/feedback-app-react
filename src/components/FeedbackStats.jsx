function FeedbackStats({ feedbacks }) {
	const sumOfRatings = feedbacks.reduce((accu, { rating }) => accu + rating, 0)
	const averageOfRatings = (sumOfRatings / feedbacks.length)
		.toFixed(1)
		.replace(/[.,]0$/, "")

	return (
		<div className='feedback-stats'>
			<h4>{feedbacks.length} Reviews</h4>
			<h4>Average Rating: {isNaN(averageOfRatings) ? 0 : averageOfRatings}</h4>
		</div>
	)
}
export default FeedbackStats
