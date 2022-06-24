import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"
import FeedbackData from "./data/feedbackData"
import Header from "./components/Header"
import FeedbackForm from "./components/FeedbackForm"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackList from "./components/FeedbackList"
import AboutIconLink from "./components/AboutIconLink"
import About from "./pages/About"

function App() {
	const [feedbacks, setFeedbacks] = useState(FeedbackData)

	const handleDelete = (id) => {
		const deleteQuestion = "Are you sure you want to delete this feedback?"
		if (!window.confirm(deleteQuestion)) return
		setFeedbacks(feedbacks.filter((feedback) => feedback.id !== id))
	}
	const addFeedback = (feedback) => {
		feedback.id = uuidv4()
		setFeedbacks(() => {
			return [feedback, ...feedbacks]
		})
	}

	return (
		<Router>
			<Header />
			<div className='container'>
				<Routes>
					<Route
						path='/'
						element={
							<>
								<FeedbackForm handleAddFeedback={addFeedback} />
								<FeedbackStats feedbacks={feedbacks} />
								<FeedbackList
									feedbacks={feedbacks}
									handleDelete={handleDelete}
								/>
							</>
						}
					></Route>
					<Route path='/about' element={<About />}></Route>
				</Routes>
				<AboutIconLink />
			</div>
		</Router>
	)
}
export default App
