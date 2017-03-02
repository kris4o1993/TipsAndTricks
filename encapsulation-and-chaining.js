/** 
 * param is private for the instance
 * Functions sub, add and print are accessible by the instance
 * Functions addDigit, subDigit and printDigit cannot be accessed directly
 * Functions add, sub and print are chained
 */
 
function Calculator(p) {
	var param = p;
	var printDigit = function () {
		console.log("Result is", param); 
		return this;
	};
	this.print = printDigit;
	var addDigit = function (digit) {
		param = param + digit;
		return this;
	};
	this.add = addDigit;
	var subDigit = function (digit) {
		param = param - digit;
		return this;
	}
	this.sub = subDigit;
}
