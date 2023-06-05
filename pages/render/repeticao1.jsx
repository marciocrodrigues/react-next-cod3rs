export default function repeticao1() {
	const listaAprovados = [
		'João',
		'Maria',
		'Ana',
		'Bia',
		'Carlos',
		'Daniel',
		'Laura'
	]

	function renderizarLista() {
		return listaAprovados.map((nome, index) => <li key={index}>{nome}</li>)
	}

	return <ul>{renderizarLista()}</ul>

	// function renderizarLista() {
	//     const itens = []

	//     for (let index = 0; index < listaAprovados.length; index++) {
	//         itens.push(<li key={index}>{listaAprovados[index]}</li>)
	//     }

	//     return itens
	// }
}
