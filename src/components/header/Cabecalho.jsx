import './Cabecalho.css'
import design from '../../assets/icons/ideia.svg'
import LinksHeader from './LinksHeader.jsx'
import Formas from "./Formas.jsx";

function Cabecalho() {
    return (
        <div className='header'>
            <Formas/>
            <img className='logoSVG' src={design} alt='the design center'></img>
            <LinksHeader/>
        </div>
    )
}

export default Cabecalho;
