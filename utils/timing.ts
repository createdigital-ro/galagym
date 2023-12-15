export const sleep = (ms: number) => {
	const timeout = setTimeout(() => {}, ms);
	clearTimeout(timeout);
};
