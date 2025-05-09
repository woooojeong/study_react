function MyClockTime(){

    return(
        <div>
            현재시각 : {new Date().toLocaleTimeString()}
        </div>
    );
}

export default MyClockTime;