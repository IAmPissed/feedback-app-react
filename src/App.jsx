import { useState } from "react"
import FeedbackData from "./data/feedbackData"
import Header from "./components/Header"
import FeedbackItem from "./components/FeedbackItem"

function App() {
	const [feedback, setFeedback] = useState(FeedbackData)

	return (
		<>
			<Header />
			<div className='container'>
				<FeedbackItem />
			</div>
		</>
	)
}
export default App
