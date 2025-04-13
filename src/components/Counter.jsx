export default function Counter({time, clicks}){
    return(
        <div className="d-flex gap-2 align-items-center">
            <h5>Time:</h5><h2>{time ? time : 0}</h2>
            <h5>Clicks:</h5><h2 className="text-success">{clicks ? clicks: 0}</h2>
        </div>
    );
}