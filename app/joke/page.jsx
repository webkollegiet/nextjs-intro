import { cacheLife } from "next/cache";

export default async function JokePage() {
	const res = await fetch("https://icanhazdadjoke.com/", {
		headers: {
			Accept: "application/json",
		},
	});
	const data = await res.json();

	return <p>{data.joke}</p>;
}