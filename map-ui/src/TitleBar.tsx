import gRoundelLogo from './Roundel_ white_on_blue_1.svg';
import jayRoundel from './reviewerImages/jay_roundel1.png';
import radarLogo from './radar1.svg';
import sonarAudioFile from './sonar-ping-95840.mp3';
import {useEffect} from 'react';

export interface TitleBarProps {
    jayRadarActivated: boolean;
    setJayRadarActivated: (activated: boolean) => any 
}

let radarSoundInterval: number;

export function TitleBar(props: TitleBarProps) {
    let radarAudio = new Audio(sonarAudioFile);

    useEffect(() => {
        if (!props.jayRadarActivated) {
            clearInterval(radarSoundInterval);
        } else {
            radarSoundInterval = setInterval(() => {
                radarAudio.play();
            }, 5000) as unknown as number;
        }
    }, [props.jayRadarActivated]);
    

    return <header className="titleBar">
        <img className="guRoundel" src={props.jayRadarActivated ? jayRoundel : gRoundelLogo}/>
        <h1>{props.jayRadarActivated ? "Jay-Radar" : "Restaurant Review Map"}</h1>
        <img
            src={radarLogo}
            className={"radarIcon" + (props.jayRadarActivated ? " activated": "")}
            onClick={() => {
                props.setJayRadarActivated(!props.jayRadarActivated);
                radarAudio.play();
            }}
        />
    </header>
}