import { readInput } from "../common/utils.js";

async function main() {
	const input = await readInput("./src/day-03/input.txt");
	const banks = input.trim().split("\n");

	console.log(banks);
}

await main();
