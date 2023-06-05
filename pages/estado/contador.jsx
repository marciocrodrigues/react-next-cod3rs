import {useState} from "react"

export default function contador() {
    const [contador, setContador] = useState(0)

    function alterarContador(tipo) {
        let valor = contador

        if (tipo === 'diminuir') {
            valor = valor - 1
        } else {
            valor = valor + 1
        }

        valor = valor < 0 ? 0 : valor

        setContador(valor)
    }

    return (
        <div>
            <h1>Contador</h1>
            <div style={{
                display: 'flex',
                flexDirection: 'row'
            }}>
                <button onClick={() => alterarContador('diminuir')}>-</button>
                <input style={{ width: '50px', textAlign: 'center' }} type="text" readOnly value={contador} />
                <button onClick={() => alterarContador('aumentar')}>+</button>
            </div>
        </div>
    )
}