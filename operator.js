	var a = 10;
	var b = 20;
	var calc = "Calculation"
	var add = a + b;
	var sub = a - b;
	var mul = a * b;
	var div = a / b;
	var mod = a % b;
	
	document.write(calc);
	document.write("<br>");
	document.write("a=10 and b=5");
	document.write("<br><hr>");
	document.write("Addition:");
	document.write(add);
	document.write("<br>");
	document.write("Subtraction:");
	document.write(sub);
	document.write("<br>");
	document.write("Multiplication:");
	document.write(mul);
	document.write("<br>");
	document.write("Division:");
	document.write(div);
	document.write("<br>");
	document.write("Reminder:");
	document.write(mod);
	document.write("<br>");

	var sum = a + 50;
	document.write(sum);

	var fname = "Rabi";
	var lname = "yadav";

	document.write("<br>");
	document.write(fname + "Kumar" + lname);

	var num = 5;
	num = num +10;
	document.write("<br>");
	document.write(num);	
	var sum = 5;
	sum += 10;
	document.write("<br>");
	document.write(sum);

	var num = 5;
	num = num -10;
	document.write("<br>");
	document.write(num);	
	var sum = 5;
	sum -= 10;
	document.write("<br>");
	document.write(sum);

	var num = 5;
	num = num *10;
	document.write("<br>");
	document.write(num);	
	var sum = 5;
	sum *= 10;
	document.write("<br>");
	document.write(sum);

	var num = 5;
	num = num /10;
	document.write("<br>");
	document.write(num);	
	var sum = 5;
	sum /= 10;
	document.write("<br>");
	document.write(sum);

	var num = 5;
	num = num %10;
	document.write("<br>");
	document.write(num);	
	var sum = 5;
	sum %= 10;
	document.write("<br>");
	document.write(sum);

	document.write("<br>");

	var a = 15;
	var b = "15";

	document.write(a + "a =");
	document.write("<br>");
	document.write(b + "b =");
	document.write("<br>");

	if (a == b) {
		document.write("Both are equal");
	}else {
		document.write("Both are not equal");
	}

	if (a === b) {
		document.write("Both are equal");
	}else {
		document.write("Both are not equal");
	}

	if (a != b) {
		document.write("Both are equal");
	}else {
		document.write("Both are not equal");
	}

	if (a !== b) {
		document.write("Both are equal");
	}else {
		document.write("Both are not equal");
	}

	if (a > b) {
		document.write("A is greater than B");
	}else {
		document.write("B is greater than A");
	}

	if (a >= b) {
		document.write("A is greater than or equal to B");
	}else {
		document.write("B is Greater than or equal to A");
	}

	if (a < b) {
		document.write("A is less than B");
	}else {
		document.write("B is less than A");
	}

	if (a <= b) {
		document.write("A is less than or equal to B");
	}else {
		document.write("B is less than or equal to A");
	}