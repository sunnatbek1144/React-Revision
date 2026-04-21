import { Link, Outlet } from 'react-router'
function ProjectLayout() {
	return (
		<>
			<Link to={'/projects'}>
				<i className='fa-solid fa-arrow-left'></i>
			</Link>
			<Outlet />
		</>
	)
}
export default ProjectLayout
