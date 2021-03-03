import * as React from 'react';
import {library} from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlay, faPause} from '@fortawesome/free-solid-svg-icons';

library.add(faPlay, faPause);

interface IPlayerProps {
    title: string;    
}
interface IHeaderState {
    playing: boolean; 
}

class Player extends React.Component<IPlayerProps, IHeaderState> {
    constructor (props: IPlayerProps){
        super (props);
        this.state = {playing: false}
    }

    public togglePlay = () => {
        this.setState( {playing: !!!this.state.playing});
    }

    public render(){
        return (
            <div className="player row">
                <a className="play-button btn btn-success" onClick={this.togglePlay}>
                    {this.state.playing ?
                        <FontAwesomeIcon icon="play" /> :
                        <FontAwesomeIcon icon="pause" />
                    }
                </a>
            </div>
        );
    }
}

export default Player;