import CasaTabuleiro from "../../components/CasaTabuleiro"
import styles from './tabuleiro.module.css'

export default function tabuleiro() {
    return (
        <div className={styles.container}>
            <div className={styles.tabuleiro}>
                {gerarTabuleiro(8, 8, 640).map(x => x.map((i, index) => i))}
            </div>
        </div>
    )
}

function gerarTabuleiro(numeroCasasLinha, numeroCasaColunas, tamanhoLadosTabuleiro) {
    let listaLinha = []
    let listaColuna = []

    const widthHeight = tamanhoLadosTabuleiro / numeroCasaColunas;

    for (let i = 1; i <= numeroCasasLinha; i++) {
        for (let j = 1; j <= numeroCasaColunas; j++) {
            let valorCalculo = (i+j) % 2

            let corCasaTabuleiro = valorCalculo != 0 ? 'black' : 'white'

            listaLinha.push(<CasaTabuleiro key={Math.random()} corCasaTabuleiro={corCasaTabuleiro} widthHeight={widthHeight}/>)
        }

        listaColuna.push(listaLinha)
        listaLinha = []
    }

    return listaColuna
}

function gerarColunas(numeroColunas) {

}