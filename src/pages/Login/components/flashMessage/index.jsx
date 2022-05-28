import './style.scss'

const FlashMessage = ({ message }) => {
    return (
        <p className="error">
            { message }
        </p>
    )
}

export default FlashMessage
