export default function StartButton({onClick, message}) {
    return(
        <button onClick={onClick} className="btn btn-lg btn-primary">
            {message ? message : 'Default message'}
        </button>
    )
}
