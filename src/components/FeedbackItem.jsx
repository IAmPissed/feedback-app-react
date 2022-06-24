import Card from "./shared/Card"

function FeedackItem({ feedback }) {
	return (
		<Card>
			<div className='num-display'>{feedback.rating}</div>
			<div className='text-display'>{feedback.text}</div>
		</Card>
	)
}
export default FeedackItem
