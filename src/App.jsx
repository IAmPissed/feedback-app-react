import { useState } from "react"
import FeedbackData from "./data/feedbackData"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"

function App() {
	const [feedbacks, setFeedbacks] = useState(FeedbackData)

	const handleDelete = (id) => {
		const deleteQuestion = "Are you sure you want to delete this feedback?"
		if (!window.confirm(deleteQuestion)) return
		setFeedbacks(feedbacks.filter((feedback) => feedback.id !== id))
	}
	return (
		<>
			<Header />
			<div className='container'>
				<FeedbackList feedbacks={feedbacks} handleDelete={handleDelete} />
			</div>
		</>
	)
}
export default App
