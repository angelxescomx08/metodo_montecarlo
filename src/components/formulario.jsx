import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';
import { useState } from 'react'
import '../css/formulario.css'
export default function Formulario(){
    const [num,setNum] = useState(1)
    return(
        <section className="formulario">
            <article>
                <p>Número de puntos: <span id="num-puntos">{num}</span></p>
                <input onChange={event=>setNum(event.target.value)} id="slider" 
                className="slider" type="range" min="1" max="10000" />
                π=<InlineMath>{String.raw`\frac{\text{area cuadrado * puntos dentro del circulo}}
                {\text{total puntos * }\text{r}^2}`}</InlineMath>
            </article>
        </section>
    )
}