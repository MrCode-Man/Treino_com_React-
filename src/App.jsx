import './App.css'
import Cabecalho    from "./components/header/Cabecalho.jsx";
import SectionOne   from "./components/section_one/SectionOne.jsx";
import SectionTwo   from "./components/section_two/SectionTwo.jsx";
import SectionThree from "./components/section_three/SectionThree.jsx";
import Motivo       from "./components/o_motivo_inicial/Motivo.jsx";

function App() {

  return (
    <div className='App_container'>
        <Cabecalho/>
        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
        <Motivo/>
    </div>
  )
}

export default App
