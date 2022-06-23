import { useState } from "react"
import FeedbackData from "./data/feedbackData"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"

function App() {
	const [feedbacks, setFeedback] = useState(FeedbackData)

	return (
		<>
			<Header />
			<div className='container'>
				<FeedbackList feedbacks={feedbacks} />
			</div>
		</>
	)
}
export default App
