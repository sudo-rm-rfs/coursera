

module.exports = function (date) {
	
	
	var slov = ['hours', 'months','days','minutes','years']
	var Time = new Date(date);
	Time.years = Time.getFullYear();
	Time.months = Time.getMonth();
	Time.days = Time.getDate();
	Time.hours = Time.getHours();
	Time.minutes = Time.getMinutes();
	Object.defineProperty(Time, 'value' , {
		
		get: function() {
			return `${op(this.years)}-${op(this.months+1)}-${op(this.days)} ${op(this.hours)}:${op(this.minutes)}`;
		
	
		}
	});
	
	Time.add = function(quant, indef){
		if(quant < 0 || slov.indexOf(indef) == -1){
			throw new TypeError();
		}
		this[indef] += quant;
		tempTime = new Date(this.years, this.months, this.days, this.hours, this.minutes);
		this.years = tempTime.getFullYear();
		this.months = tempTime.getMonth();
		this.days = tempTime.getDate();
		this.hours = tempTime.getHours();
		this.minutes = tempTime.getMinutes();
		return this;
		
		
	}
	
	Time.subtract = function(quant, indef){
		if(quant < 0 || slov.indexOf(indef) == -1){
			throw new TypeError();
		}
		this[indef] -= quant;
		tempTime = new Date(this.years, this.months, this.days, this.hours, this.minutes);
		this.years = tempTime.getFullYear();
		this.months = tempTime.getMonth();
		this.days = tempTime.getDate();
		this.hours = tempTime.getHours();
		this.minutes = tempTime.getMinutes();
		return this;
	}
	
	return Time;
}


	


function op(value){
	return value < 10 ? '0' + value : value;
}

	




//var locTime = fun('2017-05-16 13:45');
//locTime.add(24, 'hours').subtract(1, 'months').add(3, 'days').add(15, 'minutes');
//console.info(locTime.value);
 
