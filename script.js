//your JS code here. If required.
let timer = document.getElementById('timer');

const updateDateTime=()=>{
	let date = new Date();

	let day = date.getDate();
	let month = date.getMonth();
	let year = date.getFullYear();
	
	let hrs = date.getHours();
	let min = date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes();
	let sec = date.getSeconds() < 10 ? '0'+date.getSeconds() : date.getSeconds();
	let merdian = hrs >= 12 ? 'PM':'AM';
	if(hrs>12) hrs = hrs-12;
	if(hrs===0) hrs = 12;

	let ans = `${day}/${month}/${year}, ${hrs}:${min}:${sec} ${merdian}`;

	timer.innerText = ans;
	
}

setInterval(updateDateTime, 1000)
