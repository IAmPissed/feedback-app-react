import { createContext, useEffect, useState } from 'react'

const FeedbackContext = createContext()


export const FeedbackProvider = ({ children }) => {
    const [feedbacks, setFeedbacks] = useState([])
    const [feedbackToEdit, setFeedbackToEdit] = useState({
        item: {},
        editMode: false
    })

    useEffect(() => {
        fetchFeedbacks().then((data) => {
            setFeedbacks(data)
        })
    }, [])

    const fetchFeedbacks = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}?_sort=id&_order=desc`)
            const data = await response.json()
            return data
        } catch (error) {
            console.error(error)
        }
    }

    const deleteFeedback = (id) => {
        const deleteQuestion = "Are you sure you want to delete this feedback?"
        if (!window.confirm(deleteQuestion)) return
        setFeedbacks(feedbacks.filter((feedback) => feedback.id !== id))
    }
    const addFeedback = (feedback) => {
        setFeedbacks(() => {
            return [feedback, ...feedbacks]
        })
    }
    const editFeedback = (item) => {
        setFeedbackToEdit(() => ({ item, editMode: true }))
    }
    const updateFeedback = (id, updatedFeedback) => {
        setFeedbacks((previousFeedbacks) => (
            previousFeedbacks.map(feedback => {
                return feedback.id === id ? { ...feedback, ...updatedFeedback } : feedback
            })
        ))
        setFeedbackToEdit(() => ({ item: {}, editMode: false }))
    }

    return (
        <FeedbackContext.Provider value={{
            feedbacks,
            feedbackToEdit,
            deleteFeedback,
            addFeedback,
            editFeedback,
            updateFeedback
        }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext