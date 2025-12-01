import { readInput } from "../common/utils.js";

async function main() {
	const rawData = await readInput("src/day-01/input.txt");
	const instructions = rawData.trim().split("\n");

	partOne(instructions);
}

await main();

function partOne(instructions: string[]) {
	let currentPosition = 50;
	let zeroPositionCounter = 0;

	for (const instruction of instructions) {
		const direction = instruction.slice(0, 1);
		const amount = Number.parseInt(instruction.slice(1));

		if (direction === "L") {
			currentPosition = currentPosition - amount;
		} else {
			currentPosition = currentPosition + amount;
		}

		if (currentPosition % 100 === 0) {
			zeroPositionCounter = zeroPositionCounter + 1;
		}
	}

	console.log("zero position counter: ", zeroPositionCounter);
}
