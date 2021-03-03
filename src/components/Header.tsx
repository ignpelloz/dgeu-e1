import * as React from 'react';
import SearchText from './SearchText';
import {library} from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFilter} from '@fortawesome/free-solid-svg-icons';

library.add(faFilter);

interface IHeaderState {
    collapsed: boolean; 
    searchText: string;
    listStyleTypeParam: string;
    lineHeightParam: string;
    colorParam: string;
    fontFamilyParam: string;
    fontSizeParam: string;
}

class Header extends React.Component<{}, IHeaderState> {
    constructor (props: {}){
        super(props);
        this.state = {
            collapsed: true, 
            searchText: "",
            listStyleTypeParam: "disc", //square, circle
            lineHeightParam: "70%",
            colorParam: "blue",
            fontFamilyParam: "Arial", // Fantasy, Cursive, monospace
            fontSizeParam: "20px"
        };
    }

    public onFilterClick = () => {
        this.setState({collapsed: !!!this.state.collapsed});
    }
    
    public onSearchTextChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        this.setState({searchText: event.target.value});
    }

    public setBulletType = (event:React.ChangeEvent<HTMLInputElement>) => {
        this.setState({listStyleTypeParam: event.target.value});
    }

    public render(){
        return (<div className="header">
                    <h2>Customizable List! {this.state.searchText}</h2>
                    
                    
                    {!!!this.state.collapsed ?
                        <div >
                            <SearchText onSearchTextChange={this.onSearchTextChange}/>
                        </div>
                    : null}

                    <div >
                    <label>Example {this.state.searchText}</label>
                        <SearchText onSearchTextChange={this.onSearchTextChange}/>
                    </div>

                    <br></br>

                    <div >
                    <label>Items Separation {this.state.searchText}</label>
                    <select name="cars" id="cars">
                        <option value="30%">30%</option>
                        <option value="70%">70%</option>
                        <option value="110%">110%</option>
                        <option value="180%">180%</option>
                    </select>
                    </div>

                    <div >
                    <label>Size {this.state.searchText}</label>
                    <select name="cars" id="cars">
                        <option value="10px">10px</option>
                        <option value="20px">20px</option>
                        <option value="40px">40px</option>
                        <option value="80px">80px</option>
                    </select>
                    </div>

                    <div >
                    <label>Color</label>
                    <select name="cars" id="cars">
                        <option value="Black">Black</option>
                        <option value="Green">Green</option>
                        <option value="Pink">Pink</option>
                        <option value="Blue">Blue</option>
                        <option value="Red">Red</option>
                    </select>
                    </div>


                    <div >
                    <label>Font </label>
                    <select name="cars" id="cars">
                        <option value="Arial">Arial</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="Cursive">Cursive</option>
                        <option value="monospace">Monospace</option>
                    </select>
                    </div>


                    <div >
                    <label>Bullet {this.state.searchText}</label>
                    <select name="cars" id="cars">
                        <option value="disc">disc</option>
                        <option value="square">square</option>
                        <option value="circle">circle</option>
                    </select>
                    </div>

                </div>);
    }
}

export default Header;