import { Link } from 'react-router'
import Projects from '../pages/Projects'

function Header() {
	return (
		<>
			<nav>
				<div className='logo'>Sunnatbek</div>
				<ul>
					<li>
						<Link to={'/'}>Home</Link>
					</li>
					<li>
						<Link to={'/about'}>About</Link>
					</li>
					<li>
						<Link to={'/projects'}>Projects</Link>
					</li>
				</ul>
			</nav>
		</>
	)
}
export default Header
