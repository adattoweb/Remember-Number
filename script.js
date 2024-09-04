let rempar = document.getElementById('rempar')
let lengthmes = document.getElementById("length")
let letters = document.getElementById("letters")
let lettersCAPS = document.getElementById("lettersCAPS")
let numbers = document.getElementById("numbers")
let special = document.getElementById("special")

let timer = document.getElementById('timer')
let timerview = document.getElementById("timerview")
let timeFunc;

let message = document.getElementById("randomMessage")
let answ = document.getElementById("answ")
let answer = document.getElementById("answer")
let infotext = document.getElementById("infotext")

function checkAnswer(){
	infotext.innerHTML = "Your Answer"
	message.style.display = "none";
	answ.style.display = "flex";

	let percent = 0;
	let count = 0;
	if(answer.value){
		for(let i = 0; i < answer.value.length; i++){
			if(message.innerHTML[i] === answer.value[i]){
				count += 1;
			}
			percent = 100 / (+lengthmes.value / count)
	}

	if(answer.value){
		infotext.innerHTML = "You are " + Math.round(percent) + "% right!";
	}
}


}
function startRemember(){
	if(!timer.value || !lengthmes.value || !letters.checked && !numbers.checked && !special.checked && !lettersCAPS.checked){
		console.log("You need to the fill the field timer and length or one of the three checkboxes must be completed.");
		return false;
	}
	if(timer.value > 10000 || lengthmes.value > 40){
		console.log("Max timer value is 10000, max length value is 40")
		return false
	}

  let setStr = '';
  if(letters.checked) setStr += "abcdefghijklmnopqrstuvwxyz"
  if(lettersCAPS.checked) setStr += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  if(numbers.checked) setStr += "0123456789";
	if(special.checked) setStr += "~!@#№$%^&*(){}";
   for (let i = 0; i < lengthmes.value; i++) {
    	let randomIndex = Math.floor(Math.random() * setStr.length);
    	message.innerHTML += setStr[randomIndex];
    }

	rempar.style.display = "flex";

	let time = timer.value;
	timerview.innerHTML = time
	timeFunc = setInterval(function(){
		time--;
		timerview.innerHTML = time;
		if(time === 0){
			clearInterval(timeFunc);
			checkAnswer();
		}
	 },1000)
}
function stopRemember(){
	rempar.style.display = "none"
	infotext.innerHTML = "Remember this text"
	message.style.display = "flex";
	answ.style.display = "none";
	message.innerHTML = "";
	answer.value = "";
	clearInterval(timeFunc)
}