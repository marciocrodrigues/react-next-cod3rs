import Titulo from '../../components/titulo'

export default function usandoTitulo() {
	return (
		<div>
			<Titulo
				principal="Página de Cadastro"
				descricao="Incluir, alterar e excluir coisas!"
			/>

			<Titulo
                pequeno={true}
				principal="Página de Login"
				descricao="Informe o seu e-mail e senha!"
			/>
		</div>
	)
}
