const url= 'https://time.now/developer/api/timezone/Europe/Copenhagen';

export async function getTime() {
	"use cache";

	console.log("Fetcher klokkeslet fra api");

	const res = await fetch(url);
	return res.json();
}

export default async function TimePage() {
	const current = await getTime();
	return <h1>Tiden er: {current.datetime}</h1>;
}