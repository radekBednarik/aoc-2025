import { readInput } from "../common/utils.js";

async function main() {
	const rawData = await readInput("src/day-01/input.txt");

	console.log(rawData);
}

await main();
