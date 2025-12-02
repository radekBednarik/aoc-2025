import { readInput } from "../common/utils.js";

async function main() {
	const rawData = await readInput("src/day-02/input.txt");
	const idRanges = rawData
		.trim()
		.split(",")
		.map((range) => {
			return range.split("-").map((edge) => {
				return Number.parseInt(edge);
			});
		});

	const fullRanges = createFullRanges(idRanges);

	partOne(fullRanges);
}

await main();

function partOne(fullRanges: number[][]) {
	let counter = 0;

	for (const fullRange of fullRanges) {
		for (const id of fullRange) {
			const idStr = id.toString();

			if (!isValid(idStr)) {
				counter += id;
			}
		}
	}

	console.log("Part one counter: ", counter);
}

function createFullRanges(idRanges: number[][]) {
	const fullRanges: number[][] = [];

	for (let i = 0; i < idRanges.length; i++) {
		const start = idRanges[i][0];
		const end = idRanges[i][1];

		fullRanges.push([]);

		for (let j = start; j <= end; j++) {
			fullRanges[i].push(j);
		}
	}

	return fullRanges;
}

function isValid(id: string) {
	if (id.length % 2 !== 0) {
		return true;
	}

	if (id.length === 2 && id[0] === id[1]) {
		return false;
	}

	const pivot = id.length / 2;
	const firstHalf = id.slice(0, pivot);
	const secondHalf = id.slice(pivot);

	if (firstHalf !== secondHalf) {
		return true;
	}

	return false;
}
