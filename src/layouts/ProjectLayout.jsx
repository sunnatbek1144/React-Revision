import { Link, Outlet } from 'react-router'

function ProjectLayout() {
	return (
		<>
			<Link to={'/projects'}>Back</Link>
			<Outlet />
		</>
	)
}
export default ProjectLayout
