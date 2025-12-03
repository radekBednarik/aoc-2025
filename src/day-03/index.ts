import console from "node:console";
import { readInput } from "../common/utils.js";

async function main() {
	const input = await readInput("./src/day-03/input.txt");
	const banks = input.trim().split("\n");

	partOne(banks);
}

await main();

function partOne(banks: string[]) {
	console.time("day-one");

	const banksArrs = banks.map((bank) => bank.split(""));

	let totalJoltage = 0;

	banksArrs.forEach((bankArr) => {
		let first = 0;
		let second = 0;
		let firstIndex = 0;

		for (let i = 0; i < bankArr.length - 1; i++) {
			const batteryJoltage = Number(bankArr[i]);

			if (batteryJoltage > first) {
				first = batteryJoltage;
				firstIndex = i;
			}
		}

		for (let i = firstIndex + 1; i < bankArr.length; i++) {
			const batteryJoltage = Number(bankArr[i]);

			if (batteryJoltage > second) {
				second = batteryJoltage;
			}
		}

		const bankHighestJoltage = Number(
			"".concat(first.toString(), second.toString()),
		);

		totalJoltage += bankHighestJoltage;
	});

	console.timeEnd("day-one");
	console.log("part one total joltage: ", totalJoltage);
}
