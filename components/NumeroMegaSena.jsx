export default function NumeroMegaSena(props) {
    return (
        <div style={{
            width: '40px',
            height: '40px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#333',
            color: '#fff',
            borderRadius: '50%'
        }}>
            {props.numero}
        </div>
    )
}