import * as React from 'react';
import SearchText from './SearchText';


interface IHeaderState {
    collapsed: boolean; 
    searchText: string;
    listStyleTypeParam: string; 
    lineHeightParam: string;
    colorParam: string;
    fontFamilyParam: string;
    fontSizeParam: string;
}

class MainList extends React.Component<{}, IHeaderState> {

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
        this.setState({
            listStyleTypeParam: event.target.value,
            lineHeightParam: this.state.lineHeightParam,
            colorParam: this.state.colorParam,
            fontFamilyParam: this.state.fontFamilyParam,
            fontSizeParam: this.state.fontSizeParam
        });
    }

    public render(){
        const listStyleTypeParam = "disc"; //square, circle
        const lineHeightParam = "30%";
        const colorParam = "blue";
        const fontFamilyParam = "Arial"; // Fantasy, Cursive, monospace
        const fontSizeParam = "80px";
        return (<div>
            
                <h2>Customizable List!</h2>

                {!!!this.state.collapsed ?
                        <div >
                            <SearchText onSearchTextChange={this.onSearchTextChange}/>
                        </div>
                    : null}

                    <div >
                    <label>Example</label>
                        <SearchText onSearchTextChange={this.onSearchTextChange}/>
                    </div>

                    <br></br>

                    <div >
                    <label>Items Separation</label>
                    <select name="cars" id="cars">
                        <option value="30%">30%</option>
                        <option value="70%">70%</option>
                        <option value="110%">110%</option>
                        <option value="180%">180%</option>
                    </select>
                    </div>

                    <div >
                    <label>Size</label>
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
                    <label>Bullet OG</label>
                    <select name="cars" id="cars">
                        <option value="disc">disc</option>
                        <option value="square">square</option>
                        <option value="circle">circle</option>
                    </select>
                    </div>

                    <div >
                    <label>Bullet </label>
                    <select name="cars" id="cars">
                        <option value="disc">disc</option>
                        <option value="square">square</option>
                        <option value="circle">circle</option>
                    </select>

                    <input type="text" name="searchText" placeholder="Buscar" onChange={this.setBulletType} /> //WORKS!

                    </div>

                    
            
                <br></br>

                <ul style={
                    {
                        listStyleType:this.state.listStyleTypeParam, 
                        lineHeight:this.state.lineHeightParam,
                        color: this.state.colorParam,
                        fontFamily: this.state.fontFamilyParam,
                        fontSize: this.state.fontSizeParam
                        }
                    }>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
              </ul>
              </div>
        );
    }
}

export default MainList;


