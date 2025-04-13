export default function Subtitle({subtitle}) {
    return(
        <p className="lead">
            {subtitle ? subtitle : 'Default subtitle'}
        </p>
    ) 
}