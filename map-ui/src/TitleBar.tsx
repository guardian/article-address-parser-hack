import gRoundelLogo from './Roundel_ white_on_blue_1.svg';

export function TitleBar() {
    return <header className="titleBar">
        <img src={gRoundelLogo} height="50px"/>
        <h1>Restaurant Review Map</h1>
    </header>
}