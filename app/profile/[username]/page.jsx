export default async function Profile({ params }) {
	return (
		<h1>Profil for: {(await params).username}</h1>
	);
}