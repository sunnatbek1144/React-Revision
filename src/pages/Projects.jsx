import { Link } from 'react-router'
function Projects() {
	return (
		<>
			<div className='projects'>
				<ul>
					<li>
						<Link to={'/projects/stopWatch'}>1. StopWatch</Link>
					</li>
					<li>
						<Link to={'/projects/todoApp'}>2. To do App</Link>
					</li>
				</ul>
			</div>
		</>
	)
}
export default Projects
