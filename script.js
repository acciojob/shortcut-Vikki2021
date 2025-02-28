function shortcut(s1, s2) {
  // your code here
	let first = s1[0];
	let second = s2[0];
	let ans = first + second;

	if(s1.length!=0 || s2.length!=0) {
		return '';
	}
	else {
		return ans;
	}
}

// Do not change the code below.
// const s1 = prompt("Enter s1:");
// const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
