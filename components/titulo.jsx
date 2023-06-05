export default function Titulo(props) {
    return props.pequeno ? (
        <>
            <p>{ props.principal }</p>
            <p>{ props.descricao }</p>
        </>
    ) : (
        <>
            <h1>{ props.principal }</h1>
            <h2>{ props.descricao }</h2>
        </>
    )
}
