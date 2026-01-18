import './FAQ.css'
import {useState} from "react";

function FAQ({titulo, descricao}){

    const [classeDisplay, setClasseDisplay] = useState('esconde');

    function mudaDisplay(){
        setClasseDisplay( prev=> (prev === 'esconde' ? 'mostra' : 'esconde'));
    }

    const isSelecionado = classeDisplay === 'mostra';

    return (
        <div className={`FAQ_container ${isSelecionado ? 'selecionado' : ''}`}>
            <div className='sumario' onClick={mudaDisplay}>
                <h3 className='titulo_FAQ'>{titulo}</h3>
            </div>
            <p className={classeDisplay}> {descricao}</p>
        </div>
    )
}

export default FAQ;