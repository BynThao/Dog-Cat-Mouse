var Mouse = require('./Mouse');

function Cat() {
	this.stomach = []
}
cat.prototype.eat = function(animal) {
	if (animal instanceof Mouse) {
	this.stomach.push(animal);
	} else {
		throw new error('Cat can only eat Mouse!!');
	}
};

module.exports = Cat