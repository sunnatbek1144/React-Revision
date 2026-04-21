import { Route, Routes } from 'react-router'
// import './App.css'
import Header from './components/Header'
import Layout from './layouts/Layout'
import ProjectLayout from './layouts/ProjectLayout'
import About from './pages/About'
import Home from './pages/Home'
import Projects from './pages/Projects'
import StopWatch from './pages/StopWatch'
import TodoApp from './pages/TodoApp'
function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />}></Route>
					<Route path='/about' element={<About />}></Route>
					<Route path='/projects' element={<Projects />}></Route>
					<Route path='/projects' element={<ProjectLayout />}>
						<Route path='/projects/stopWatch' element={<StopWatch />}></Route>
						<Route path='/projects/todoapp' element={<TodoApp />}></Route>
					</Route>
				</Route>
			</Routes>
		</>
	)
}

export default App
