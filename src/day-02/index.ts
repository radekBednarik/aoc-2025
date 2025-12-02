import { readInput } from "../common/utils.js";

async function main() {
	const rawData = await readInput("src/day-02/input.txt");
	const idRanges = rawData.trim().split(",");

	console.log(idRanges);
}

await main();
