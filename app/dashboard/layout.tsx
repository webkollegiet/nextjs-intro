export default function DashboardLayout({ children }) {
	return (
		<div>
			<nav>Dashboard Menu</nav>
			<section>{children}</section>
		</div>
	);
}