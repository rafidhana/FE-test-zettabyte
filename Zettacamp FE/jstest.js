function result(arr) {
	arr = arr.sort((a, b) => a - b);
	if (arr.length % 2 !== 0) {
		return arr[Math.floor(arr.length / 2)];
	} else {
		let mid1 = arr[arr.length / 2];
		let mid2 = arr[arr.length / 2 - 1];
		return (mid1 + mid2) / 2;
	}
}

const arr = [8, 7, 7, 9, 5, 4, 2, 9];
console.log(result(arr));
