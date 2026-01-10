import './App.css'
import Cabecalho from "./components/header/Cabecalho.jsx";
import SectionOne from "./components/section_one/SectionOne.jsx";
import SectionTwo from "./components/section_two/SectionTwo.jsx";

function App() {

  return (
    <div className='App_container'>
        <Cabecalho></Cabecalho>
        <SectionOne></SectionOne>
        <SectionTwo></SectionTwo>
    </div>
  )
}

export default App
