import { cacheLife } from "next/cache";

export default async function FactsPage() {
	"use cache";
	cacheLife("minutes");
	const res = await fetch("https://catfact.ninja/fact");
	const data = await res.json();

	return <p>{data.fact}</p>;
}