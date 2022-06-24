import { useState } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button"

function FeedbackForm() {
	const [text, setText] = useState("")
	const [buttonDisabled, setButtonDisabled] = useState(true)
	const [message, setMessage] = useState("")

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

	return (
		<Card>
			<form>
				<h1>How would you rate your service with us?</h1>
				{/* <RatingSelect /> */}
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
