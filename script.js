const makeChange = (c) => {
  // your name here
	let changeobj = {
		q : 25,
		d : 10,
		n : 5,
		p : 1
	};
	let output = {};
	for(let i in changeobj){
		let cuurno = changeobj[i];
		 output[i] = parseInt(c/cuurno);
		c = c % cuurno;
	}
	return output;
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
