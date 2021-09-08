canvas=document.getElementById("bh")
var color="red";
ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(250,210,40,0,2*Math.PI)
ctx.stroke();
