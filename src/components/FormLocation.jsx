import getRandomNumber from "../utils/getRandomNumber"
import './styles/FormLocation.css'

const FormLocation = ({ setIdLocation }) => {

    const handleSubmit = e => {
        e.preventDefault()
        const inputValue = e.target.inputId.value.trim()
        if (inputValue !== '' && inputValue !== '0') {
            setIdLocation(e.target.inputId.value.trim())
        } else {
            console.log("Hello world")
            setIdLocation(getRandomNumber(126))
        }
        e.target.inputId.value = ''
    }

    return (
        <form onSubmit={handleSubmit} className="input-container">
            <input id="inputId" type="text" />
            <button >search</button>
        </form>
    )
}

export default FormLocation