var button = document.getElementsByClassName('action')[0];

var one = document.getElementsByClassName('one')[0];

var two = document.getElementsByClassName('two')[0];

var three = document.getElementsByClassName('three')[0];

var video = document.getElementsByClassName('video-container')[0];

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}


button.onclick = function() {
	video.style.display = "none";
	
	setTimeout(function(){
		one.innerText = randomInteger(1,3);
		one.classList.toggle("c-rotated");
	},100);

	setTimeout(function(){
		two.innerText = randomInteger(1,3);
		two.classList.toggle("c-rotated");
	},200);

	setTimeout(function(){
		three.innerText = randomInteger(1,3);
		three.classList.toggle("c-rotated");
	},300);
	

	setTimeout(function(){
		if((one.innerText == two.innerText)&&(two.innerText == three.innerText)){
			// alert("YOU WIN!!!");
			one.innerText = "you";
			one.classList.toggle("c-rotated");
			two.innerText = "are";
			two.classList.toggle("c-rotated");
			three.innerText = "winner!";
			three.classList.toggle("c-rotated");
			video.style.display = "block";
		}
		else{
			one.innerText = "you";
			one.classList.toggle("c-rotated");
			two.innerText = "are";
			two.classList.toggle("c-rotated");
			three.innerText = "loser!!!!";
			three.classList.toggle("c-rotated");
		}
	},1000);

	
	console.log(one.innerText, two.innerText, three.innerText);
  };