import Button from './Button.js'


const Header = ({title}) => {

    const clicked = () => {
        console.log("click noise");
    }

    return (
        <header className="header">
            <h1>{title}</h1>
            <Button  color='green' text='Add' onClick={clicked} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

export default Header
