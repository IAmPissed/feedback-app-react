import { createContext, useState } from 'react'
import { v4 as uuidv4 } from "uuid"

const FeedbackContext = createContext()


export const FeedbackProvider = ({ children }) => {
    const [feedbacks, setFeedbacks] = useState([
        {
            id: 1,
            text: 'This is a feedback item 1',
            rating: 10
        },
        {
            id: 2,
            text: 'This is a feedback item 2',
            rating: 9
        },
        {
            id: 3,
            text: 'This is a feedback item 3',
            rating: 7
        }
    ])

    const deleteFeedback = (id) => {
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
        <FeedbackContext.Provider value={{
            feedbacks,
            deleteFeedback,
            addFeedback
        }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext