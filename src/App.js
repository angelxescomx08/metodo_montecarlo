import Canvas from './components/canvas'
import './css/normalize.css'
import './css/app.css'
import Datos from './components/datos'
import Formulario from './components/formulario'
function App() {
  return (
    <div className="App">
      <Datos></Datos>
      <Formulario></Formulario>
      <Canvas></Canvas>
    </div>
  );
}

export default App;
