import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { FeedbackProvider } from "./context/FeedbackContext"
import Header from "./components/Header"
import FeedbackForm from "./components/FeedbackForm"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackList from "./components/FeedbackList"
import AboutIconLink from "./components/AboutIconLink"
import About from "./pages/About"

function App() {
	return (
		<FeedbackProvider>
			<Router>
				<Header />
				<div className='container'>
					<Routes>
						<Route
							path='/'
							element={
								<>
									<FeedbackForm />
									<FeedbackStats />
									<FeedbackList />
								</>
							}
						></Route>
						<Route path='/about' element={<About />}></Route>
					</Routes>
					<AboutIconLink />
				</div>
			</Router>
		</FeedbackProvider>
	)
}
export default App
