const canvas=document.getElementById("jsCanvas");
const ctx=canvas.getContext("2d");

ctx.strokeStyle="#2c2c2c";
ctx.lineWidth=2.5;

let painting=false;

function stopPainting(){
	painting=false;
}

function startPainting(){
	painting=true;
}

function onMousemove(event){
	const x=event.offsetX;
	const y=event.offsetY;
	if(!painting){
		ctx.beginPath();
		ctx.moveTo(x,y);
	}
	else{
		ctx.lineTo(x,y);//모르겠는데
	}
}

function startPainting(event){
	painting=true;
}

if(canvas){//캔버스가 if를 통과하지 못하고 있다.
	canvas.addEventListener("mousemove",onMousemove);
	canvas.addEventListener("mousedown",startPainting);
	canvas.addEventListener("mouseup",stopPainting);
	canvas.addEventListener("mouseleave",stopPainting);
}
else{
	console.log('yyes?')
}