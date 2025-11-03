import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

export async function readInput(filepath: string) {
	try {
		return (await readFile(resolve(process.cwd(), filepath), {
			encoding: "utf-8",
		})) as string;
	} catch (error) {
		const err = error as Error;

		console.error("Failed to read data:\n", err.message);

		process.exit(1);
	}
}
