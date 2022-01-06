module.exports = function reverse (n) {
	let result = 0;
	if (n < 0) {
		n = -n;
	}
	while (n > 0) {
		result = result + n % 10;
		n = Math.floor(n / 10);
		if (n > 0) 
			result *= 10;
	}	
	return result;  
}
