import dibujar from '../js/dibujar'

import '../css/canvas.css'
export default function Canvas(){
    return (
        <section className="container-canvas">
            <canvas id="canvas" width={500} height={500} className="canvas"></canvas>
            <button onClick={dibujar} className="container-button">Calcular!!!</button>
        </section>
    )
}