var canvas = document.getElementById("canvas");/*Aquí estou capturando el objeto Canvas*/
var ctx = canvas.getContext('2d'); /*Nos permite el conexto del objeto, el cual es de 2 dimensiones y dibujar sobre el*/
var rect=canvas.getBoundingClientRect();
var x=0, y=0, dibujando=false, color='black', grosor=1;
function defcolor(c)
{
    color=c;
}
function defgrosor(g)
{
    grosor=g;
}
canvas.addEventListener('mousedown', function (e)
{
    x=e.clientX - rect.left;
    y=e.clientY - rect.top;
    dibujando=true;
});

canvas.addEventListener('mousemove',function (e){
    if(dibujando===true)
    {
        dibujar(x, y, e.clientX - rect.left, e.clientY - rect.top);
        x=e.clientX - rect.left;
        y=e.clientY - rect.top;
    }
});

canvas.addEventListener('mouseup', function (e){
    if(dibujando===true)
    {
        dibujar(x, y, e.clientX - rect.left, e.clientY - rect.top);
        x=0;
        y=0;
        dibujando=false;
    }
});
function dibujar(x1, y1, x2, y2)
{
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=grosor;
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
    ctx.closePath();
}

//Botón de Limpiar:
var botonBorrar = document.getElementById("limpiame");
botonBorrar.addEventListener("click", limpiarCanvas);
function limpiarCanvas()
{
  ctx.clearRect(0,0, canvas.width, canvas.height);
}

