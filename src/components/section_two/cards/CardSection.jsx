import './CardSection.css'

function CardSection() {

    const tutoring = 'src/assets/icons/svg_tutoring.svg'
    const design   = 'src/assets/icons/svg_design.svg'
    const collab   = 'src/assets/icons/svg_collaboration.svg'

    return (
        <ul className='Card_container'>
            <li className="Card">
                <img src={tutoring} alt='svg de tutoramento'/>
                <h3>Tutoring</h3>
                <p>Need help with Photoshop, Illustrator, or other Adobe creative software? Our student tutors are here to support you.</p>
            </li>
            <li className="Card">
                <img src={design} alt='design'/>
                <h3>Design</h3>
                <p>Need a poster or graphics for your next exhibition or performance? We will work with you to create an original design to support your artistic practice.</p>
            </li>
            <li className="Card">
                <img src={collab} alt='collaboration'/>
                <h3>Collaboration</h3>
                <p>Bring us your design work and a Design Center team member will give it a second look with our design-savvy eyes. We will show you how to make it sparkle.</p>
            </li>
        </ul>
    )
}

export default CardSection;