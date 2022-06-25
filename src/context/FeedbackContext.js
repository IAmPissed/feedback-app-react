import { createContext, useState } from 'react'

const FeedbackContext = createContext()


export const FeedbackProvider = ({ children }) => {
    const [feedbacks, setFeedbacks] = useState([
        {
            id: 1,
            text: 'This is a feedback from context',
            rating: 10
        }
    ])

    return (
        <FeedbackContext.Provider value={{
            feedbacks
        }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext