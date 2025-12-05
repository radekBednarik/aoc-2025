import console from "node:console";
import { readInput } from "../common/utils.js";

async function main() {
	const input = await readInput("./src/day-05/input.txt");
	const rows = input.trim().split("\n");
	const dividerIndex = rows.indexOf("");
	const freshRanges = rows.slice(0, dividerIndex);
	const candidatesRanges = rows.slice(dividerIndex + 1);

	partOne(freshRanges, candidatesRanges);
}

await main();

function partOne(freshRanges: string[], candidates: string[]) {
	console.time("day-one");

	const numPairs = createNumPairs(freshRanges);
	const numCandid = candidates.map((candidate) => {
		return Number(candidate);
	});

	const count = numCandid.filter((candidate) => {
		return isFresh(candidate, numPairs);
	}).length;

	console.timeEnd("day-one");

	console.log("day one: ", count);
}

function createNumPairs(freshRanges: string[]) {
	return freshRanges.map((range) => {
		const [start, end] = range.split("-");

		return [Number(start), Number(end)] as [number, number];
	});
}

function isFresh(candidate: number, ranges: [number, number][]) {
	return ranges.some(([start, end]) => {
		return candidate >= start && candidate <= end;
	});
}
