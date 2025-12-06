import console from "node:console";
import { readInput } from "../common/utils.js";

async function main() {
	const input = await readInput("./src/day-06/input.txt");
	const rows = input.trim().split("\n");
	partOne(rows);
}

await main();

function partOne(rows: string[]) {
	console.time("part-one-exec-time");

	const operationsRow = rows
		.slice(rows.length - 1)
		.map((row) => row.trim())[0]
		.split(/\s+/);
	const numbers = rows
		.slice(0, rows.length - 1)
		.map((row) => row.trim())
		.map((row) => row.split(/\s+/));

	let sum = 0;

	for (let i = 0; i < operationsRow.length; i++) {
		const opSign = operationsRow[i];

		let op = "";
		for (const numbersRow of numbers) {
			op += `${numbersRow[i]}${opSign}`;
		}

		op = op.slice(0, op.length - 1);

		sum += eval(op);
	}

	console.timeEnd("part-one-exec-time");

	console.log("part one: ", sum);
}
