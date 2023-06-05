import {useState} from "react"

export default function mouse(props) {
    const [clientX, setClientX] = useState()
    const [clientY, setClientY] = useState()


    const estilo = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#222',
        color: '#fff',
        height: '100vh'
    }

    function quandoMover(ev) {
        setClientX(ev.clientX)
        setClientY(ev.clientY)
    }

    return (
        <div style={estilo} onMouseMove={quandoMover}>
            <span>Eixo X: {clientX}</span>
            <span>Eixo Y: {clientY}</span>
        </div>
    )
}