function scrollToServices(){
document.getElementById('services')
.scrollIntoView({
behavior:'smooth'
});
}

function checkAnswer(answer){

const result =
document.getElementById('quizResult');

if(answer === 'S3'){
result.innerHTML =
'✅ Correct! S3 is AWS Object Storage.';
result.style.color='lightgreen';
}
else{
result.innerHTML =
'❌ Wrong Answer';
result.style.color='red';
}
}

function calculateCost(){

const ec2 =
Number(document.getElementById('ec2').value);

const s3 =
Number(document.getElementById('s3').value);

const total =
(ec2 * 15) + (s3 * 0.023);

document.getElementById('costResult')
.innerHTML =
'Estimated Monthly Cost: $' +
total.toFixed(2);

}

function animate(id,target){

let current=0;

const interval=setInterval(()=>{

current++;

document.getElementById(id)
.innerText=current;

if(current>=target)
clearInterval(interval);

},20);
}

animate('servicesCount',150);
animate('regionsCount',34);
animate('certCount',12);