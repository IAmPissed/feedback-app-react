import { createContext, useEffect, useState } from 'react'

const FeedbackContext = createContext()


export const FeedbackProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [feedbacks, setFeedbacks] = useState([])
    const [feedbackToEdit, setFeedbackToEdit] = useState({
        item: {},
        editMode: false
    })

    useEffect(() => {
        fetchFeedbacks().then((data) => {
            setFeedbacks(data)
            setIsLoading(false)
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

    const deleteFeedback = async (id) => {
        const deleteQuestion = "Are you sure you want to delete this feedback?"
        if (!window.confirm(deleteQuestion)) return
        await fetch(`${process.env.REACT_APP_API_URL}/${id}`, { method: 'DELETE' })
        setFeedbacks(feedbacks.filter((feedback) => feedback.id !== id))
    }
    const addFeedback = async (feedback) => {
        const response = await fetch(process.env.REACT_APP_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(feedback)
        })
        const data = await response.json()
        setFeedbacks(() => {
            return [data, ...feedbacks]
        })
    }
    const editFeedback = (item) => {
        setFeedbackToEdit(() => ({ item, editMode: true }))
    }
    const updateFeedback = async (id, updatedFeedback) => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedFeedback)
        })
        const data = await response.json()
        setFeedbacks((previousFeedbacks) => (
            previousFeedbacks.map(feedback => {
                return feedback.id === id ? { ...feedback, ...data } : feedback
            })
        ))
        setFeedbackToEdit(() => ({ item: {}, editMode: false }))
    }

    return (
        <FeedbackContext.Provider value={{
            feedbacks,
            feedbackToEdit,
            isLoading,
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