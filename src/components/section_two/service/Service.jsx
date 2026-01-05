import './Service.css'
import CardSection from "../cards/CardSection.jsx";

function Service() {
    return (
        <section>
            <div className='main_container'>
                <h2>Services</h2>
                <CardSection/>
                <div className='botao_container'>
                    <a className='link_botao'>BOOK AN APPOINTMENT</a>
                    <p>OR DROP BY WHEN WE ARE OPEN</p>
                </div>
            </div>
        </section>
    )
}

export default Service;