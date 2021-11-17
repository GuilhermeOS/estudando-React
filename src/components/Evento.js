import Button from "./Button"

function Evento () {

    function meuEvento() {
        alert("Evvento butao")
    }

    function segundoEvento() {

        alert("Segundo evento butao")
    }

    return (
        <div>
            <p>Clique para disparar um evento:</p>
            <Button event={meuEvento} text="Primeiro evento"/>
            <Button event={segundoEvento} text="segundo evento"/>
        </div>
    )
}

export default Evento