import './FAQ.css'

function FAQ({titulo, descricao}){

    return (
        <div className='FAQ_container'>
            <div className='sumario'>
                <h3 className='titulo_FAQ'>{titulo}</h3>
            </div>
            <p className='descricao'> {descricao}</p>
        </div>
    )
}

export default FAQ;