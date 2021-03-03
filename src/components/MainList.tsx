import * as React from 'react';

interface IHeaderState {
    listStyleTypeParam: string; 
    lineHeightParam: string;
    colorParam: string;
    fontFamilyParam: string;
    fontSizeParam: string;
    paddingLeftParam: string
}

export enum CustomizableListFields{
    enum_listStyleTypeParam = "enum_listStyleTypeParam",
    enum_lineHeightParam = "enum_lineHeightParam",
    enum_colorParam = "enum_colorParam",
    enum_fontFamilyParam = "enum_fontFamilyParam",
    enum_fontSizeParam = "enum_fontSizeParam",
    enum_paddingLeftParam = "enum_paddingLeftParam"
}

class MainList extends React.Component<{}, IHeaderState> {

    constructor (props: {}){
        super(props);
        this.state = {
            listStyleTypeParam: "disc", //square, circle
            lineHeightParam: "70%",
            colorParam: "blue",
            fontFamilyParam: "Arial", // Fantasy, Cursive, monospace
            fontSizeParam: "20px",
            paddingLeftParam: "30px"
        };
    }

    public setLineHeightParam = (event:React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            listStyleTypeParam: this.state.listStyleTypeParam,
            lineHeightParam: event.target.value + "%",
            colorParam: this.state.colorParam,
            fontFamilyParam: this.state.fontFamilyParam,
            fontSizeParam: this.state.fontSizeParam,
            paddingLeftParam: this.state.paddingLeftParam
        });
    }
        
    public setFontSizeParam = (event:React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            listStyleTypeParam: this.state.listStyleTypeParam,
            lineHeightParam: this.state.lineHeightParam,
            colorParam: this.state.colorParam, 
            fontFamilyParam: this.state.fontFamilyParam, 
            fontSizeParam: event.target.value + "px",
            paddingLeftParam: this.state.paddingLeftParam
        });
    }

    public setBulletType = (event:React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({
            listStyleTypeParam: event.target.value,
            lineHeightParam: this.state.lineHeightParam,
            colorParam: this.state.colorParam,
            fontFamilyParam: this.state.fontFamilyParam,
            fontSizeParam: this.state.fontSizeParam,
            paddingLeftParam: this.state.paddingLeftParam
        });
    }
    public setFontFamilyParam = (event:React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({
            listStyleTypeParam: this.state.listStyleTypeParam,
            lineHeightParam: this.state.lineHeightParam,
            colorParam: this.state.colorParam,
            fontFamilyParam: event.target.value,
            fontSizeParam: this.state.fontSizeParam,
            paddingLeftParam: this.state.paddingLeftParam
        });
    }
    public setColorParam = (event:React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({
            listStyleTypeParam: this.state.listStyleTypeParam,
            lineHeightParam: this.state.lineHeightParam,
            colorParam: event.target.value,
            fontFamilyParam: this.state.fontFamilyParam, 
            fontSizeParam: this.state.fontSizeParam,
            paddingLeftParam: this.state.paddingLeftParam
        });
    }
    public setPaddingLeftParam = (event:React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            listStyleTypeParam: this.state.listStyleTypeParam,
            lineHeightParam: this.state.lineHeightParam,
            colorParam: this.state.colorParam,
            fontFamilyParam: this.state.fontFamilyParam, 
            fontSizeParam: this.state.fontSizeParam,
            paddingLeftParam: String(30 + Number(event.target.value)) + "px"
        });
    }
        

    public render(){
        return (<div >
            
                <h2>Customizable List</h2>

                <div >
                    <label>Items Separation</label>
                    <input type="number" placeholder="Enter a number..." step="20" onChange={this.setLineHeightParam} /> 
                    </div>

                    <div >
                    <label>Padding Left</label>
                    <input type="number" placeholder="Enter a number..." step="10" onChange={this.setPaddingLeftParam} /> 
                    </div>

                    <div >
                    <label>Size</label>
                    <input type="number" placeholder="Enter a number..." onChange={this.setFontSizeParam} />
                    </div>

                    <div >
                    <label>Color</label>
                    <select value={this.state.colorParam} onChange={this.setColorParam} >
                        <option value="Black">Black</option>
                        <option value="Green">Green</option>
                        <option value="Pink">Pink</option>
                        <option value="Blue">Blue</option>
                    </select>
                    </div>


                    <div >
                    <label>Font </label>
                    <select value={this.state.fontFamilyParam} onChange={this.setFontFamilyParam} >
                        <option value="Arial">Arial</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="Cursive">Cursive</option>
                        <option value="monospace">Monospace</option>
                    </select>
                    </div>


                    <div >
                    <label>Bullet </label>
                    <select value={this.state.listStyleTypeParam} onChange={this.setBulletType} >
                        <option value="disc">disc</option>
                        <option value="square">square</option>
                        <option value="circle">circle</option>
                    </select>
                    
                    </div>
                              
                <br></br>

                <ul style={
                    {
                        listStyleType:this.state.listStyleTypeParam, 
                        lineHeight:this.state.lineHeightParam,
                        color: this.state.colorParam,
                        fontFamily: this.state.fontFamilyParam,
                        fontSize: this.state.fontSizeParam,
                        paddingLeft: this.state.paddingLeftParam
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