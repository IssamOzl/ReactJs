import Countdown, { CountdownRenderProps } from 'react-countdown';

interface PromoEndCountDownPropos {
    endDate: Date
}
// interface renderProps {
//     hours: number,
//     minutes: number,
//     seconds: number,
//     completed: boolean
// }

const timerComponentsStyle = {
    width: "50px",
    //textAlign: "center",
    fontSize: "13px",
}
export default function PromoEndCountDown({ endDate }: PromoEndCountDownPropos) {
    const eDate = endDate
    //console.log("eDate",eDate);
    const secondDate: Date = new Date();
    //console.log("secondDate",secondDate);
    const milliDiff: number = eDate.getTime() - secondDate.getTime();
   

    // Renderer callback with condition
    const renderer = ({days, hours, minutes, seconds }: CountdownRenderProps) => {
        //console.log("renderer called");
        const retval=(
            <div id="timer">
                <ul id="tim">
                    <li>
                        <span><div id="days">{days}</div><div style={timerComponentsStyle}>Jours</div></span>
                    </li>
                    <li>
                        <span><div id="hours">{hours}</div><div style={timerComponentsStyle}>Heurs</div></span>
                    </li>
                    <li>
                        <span><div id="minutes">{minutes}</div><div style={timerComponentsStyle}>Minutes</div></span>
                    </li>
                    <li>
                        <span><div id="seconds">{seconds}</div><div style={timerComponentsStyle}>Seconds</div></span>
                    </li>
                </ul>
            </div>
        )
       
        return retval
    };
    return (
        <>

            <Countdown zeroPadTime={2} daysInHours={false} date={Date.now() + milliDiff} renderer={renderer} />
            <h4 id="promo_ends_title">La promotion terminera quand le chronomètre atteint zéro<hr/></h4>

        </>
    )
}
