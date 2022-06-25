import { useState } from "react"
import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"
import Card from "./shared/Card"
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"

function FeedbackForm() {
	const [text, setText] = useState("")
	const [buttonDisabled, setButtonDisabled] = useState(true)
	const [message, setMessage] = useState("")
	const [rating, setRating] = useState(null)

	const { addFeedback } = useContext(FeedbackContext)

	const handleChange = (e) => {
		if (text === "") {
			setButtonDisabled(true)
			setMessage(null)
		} else if (text !== "" && text.trim().length < 10) {
			setButtonDisabled(true)
			setMessage("Review must be at least 10 characters")
		} else {
			setButtonDisabled(false)
			setMessage(null)
		}
		setText(e.target.value)
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		if (text.trim().length < 10 || rating == null) return
		const feedback = { rating, text }
		addFeedback(feedback)
		setText("")
	}

	return (
		<Card>
			<form onSubmit={handleSubmit}>
				<h1>How would you rate your service with us?</h1>
				<RatingSelect select={(rating) => setRating(rating)} />
				<div className='input-group'>
					<input
						type='text'
						onChange={handleChange}
						value={text}
						placeholder='Write a review'
					/>
					<Button type='submit' isDisabled={buttonDisabled}>
						Send
					</Button>
				</div>
				{message && <div className='message'>{message}</div>}
			</form>
		</Card>
	)
}
export default FeedbackForm
