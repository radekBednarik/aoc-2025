import console from "node:console";
import { readInput } from "../common/utils.js";

async function main() {
	const input = await readInput("./src/day-04/input.txt");
	const rows = input.trim().split("\n");

	partOne(rows);
}

await main();

function partOne(rows: string[]) {
	console.time("day-one");

	console.log(rows);

	console.timeEnd("day-one");
}
