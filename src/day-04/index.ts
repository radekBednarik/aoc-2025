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

	let accessibleRollsCounter = 0;

	const getCell = (r: number, c: number): string => {
		if (r < 0 || r >= rows.length) return ".";
		if (c < 0 || c >= rows[r].length) return ".";
		return rows[r][c];
	};

	const directions = [
		[-1, -1],
		[-1, 0],
		[-1, 1],
		[0, -1],
		[0, 1],
		[1, -1],
		[1, 0],
		[1, 1],
	];

	for (let i = 0; i < rows.length; i++) {
		for (let j = 0; j < rows[i].length; j++) {
			if (getCell(i, j) !== "@") continue;

			const neighborCount = directions.filter(
				([dr, dc]) => getCell(i + dr, j + dc) === "@",
			).length;

			if (neighborCount < 4) {
				accessibleRollsCounter++;
			}
		}
	}

	console.timeEnd("day-one");

	console.log("part one - accessible rolls count: ", accessibleRollsCounter);
}
