import {useState} from "react"
import NumeroMegaSena from "../../components/NumeroMegaSena"

export default function megasena() {
    const [quantidade, setQuantidade] = useState(6)
    const [numerosSorteio, setNumerosSorteio] = useState([])

    const gerarNumerosSorteio = () => {
        const valor = quantidade
        if (Number(valor) > 0 && (valor >= 6 && valor <= 15)) {
            setNumerosSorteio([]);
            const arrayNumeros = [];
            for (let index = 0; (index < Number(valor) && arrayNumeros.length <= Number(valor)); index++) {
                let novoValor = parseInt((Math.random() * 60) + 1)

                if (!arrayNumeros.includes(novoValor)) {
                    arrayNumeros.push(novoValor)
                }
            }
            setNumerosSorteio(arrayNumeros.sort((a, b) => a - b));
        } else {
            alert('A quantidade de números deve ser entre 6 e 15')
        }
    }

    const mostrarNumeros = () => {
        return numerosSorteio.map((numero, index) => <NumeroMegaSena key={index} numero={numero} />)
    }

    return (
        <div style={{
            height: '100vh',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                maxWidth: '400px',
                maxHeight: '400px',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <div>
                    <input type="number" min={6} max={15} value={quantidade} onChange={(e) => setQuantidade(e.target.value)}/>
                    <button onClick={gerarNumerosSorteio}>Gerar</button>
                </div>
                <div style={{
                    display: 'flex',
                    FlexDirection: 'row',
                    marginTop: '10px',
                    justifyContent: 'space-around'
                }}>
                    {
                        numerosSorteio.length > 0 && (
                            mostrarNumeros()
                        )
                    }
                </div>
            </div>
        </div>
    )
}