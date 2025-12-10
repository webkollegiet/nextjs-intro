export default function InfoLayout({ children }) {
	return (
		<div>
			<header>Info Menu</header>
			<main>{children}</main>
			<footer>© Information</footer>
		</div>
	);
}