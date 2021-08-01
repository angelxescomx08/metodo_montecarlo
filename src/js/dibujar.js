//retorna un numero aleatorio entre min y max(excluido)
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function obtenerPunto(min,max){
    return [aleatorio(min,max),aleatorio(min,max)]
}

function generarPuntos(num,min,max){
    const puntos = []
    for(let i=0;i<num;i++){
        puntos.push(obtenerPunto(min,max))
    }
    return puntos
}

function circulo(ctx){
    ctx.lineWidth = 5
    ctx.beginPath()
    ctx.arc(250, 250, 250, 0, 2 * Math.PI)
    ctx.stroke()
}

function punto(x,y){
    const pointSize = 3; // Cambia el tamaño del punto
    const ctx = document.getElementById("canvas").getContext("2d");


    ctx.fillStyle = "#ff2626"; // Color rojo

    ctx.beginPath(); // Iniciar trazo
    ctx.arc(x, y, pointSize, 0, Math.PI * 2, true); // Dibujar un punto usando la funcion arc
    ctx.fill(); // Terminar trazo
}

function limpiar(c){
    const ctx = c.getContext("2d");
    // Borramos el área que nos interese
    ctx.clearRect(0, 0, c.width, c.height);
}

function distancia(x,y,a,b){
    const aux = (x-a)*(x-a)
    const aux1 = (y-b)*(y-b)
    return parseFloat(Math.sqrt(aux+aux1)).toPrecision(12)
}

function mostrar(pi){
    const span = document.getElementById('resultado')
    span.innerHTML = pi
}

function numPuntos(){
    const slider = document.getElementById('slider')
    return slider.value
}

export default function dibujar(){
    const c = document.getElementById("canvas")
    const ctx = c.getContext("2d")
    let dentro = 0
    limpiar(c)
    circulo(ctx)
    const puntos = generarPuntos(numPuntos(),-250,250)
    for(let i=0;i<puntos.length;i++){
        let x = puntos[i][0]+250
        let y = puntos[i][1]+250
        if(distancia(x,y,250,250)<=250){
            dentro += 1
        }
        punto(x,y)
    }
    let pi = parseFloat((250000*dentro)/(puntos.length*62500)).toPrecision(12)
    mostrar(pi)
}