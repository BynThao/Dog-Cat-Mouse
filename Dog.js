function Dog() {
	this.stomach = [];	
}
Dog.prototype.eat = function(cat) {
	this.stomach.push(cat);
};

Dog.prototype.sayhi = function() {
	console.log('hi I am Dog. My name is ' + chalk.blue(this.name));
};

module.exports = Dog;