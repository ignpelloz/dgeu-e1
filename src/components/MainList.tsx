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

    public updateVar(currentProperty: CustomizableListFields, 
                     updatedField: CustomizableListFields, 
                     stateValue: string, 
                     event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>){
        if (currentProperty === updatedField){
            return event.target.value
        }
        return stateValue
    }

    public setField = (event:React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>, updatedField: CustomizableListFields) => {
        let newState = {
                    listStyleTypeParam: this.updateVar(CustomizableListFields.enum_listStyleTypeParam, updatedField, this.state.listStyleTypeParam, event),
                    lineHeightParam: this.updateVar(CustomizableListFields.enum_lineHeightParam,updatedField, this.state.lineHeightParam, event),
                    colorParam: this.updateVar(CustomizableListFields.enum_colorParam, updatedField, this.state.colorParam, event),
                    fontFamilyParam: this.updateVar(CustomizableListFields.enum_fontFamilyParam, updatedField, this.state.fontFamilyParam, event),
                    fontSizeParam: this.updateVar(CustomizableListFields.enum_fontSizeParam, updatedField, this.state.fontSizeParam, event),
                    paddingLeftParam: this.updateVar(CustomizableListFields.enum_paddingLeftParam, updatedField, this.state.paddingLeftParam, event)
        }
        this.setState(newState);
    }
    
    public render(){
        return (<div > <h2>Customizable List</h2>

                <div >
                    <label>Items Separation</label>
                    <input type="number" placeholder="Enter a number..." onChange={e => this.setField(
                        e, 
                        CustomizableListFields.enum_lineHeightParam)} /></div>

                    <div >
                    <label>Padding Left</label>
                    <input type="number" placeholder="Enter a number..." onChange={e => this.setField(
                        e, 
                        CustomizableListFields.enum_paddingLeftParam)} /></div>

                    <div >
                    <label>Size</label>
                    <input type="number" placeholder="Enter a number..." onChange={e => this.setField(
                        e, 
                        CustomizableListFields.enum_fontSizeParam)} /></div>

                    <div >
                    <label>Color</label>
                    <select value={this.state.colorParam} onChange={e => this.setField(
                        e, 
                        CustomizableListFields.enum_colorParam)} >
                        <option value="Black">Black</option>
                        <option value="Green">Green</option>
                        <option value="Pink">Pink</option>
                        <option value="Blue">Blue</option>
                    </select></div>

                    <div >
                    <label>Font </label>
                    <select value={this.state.fontFamilyParam} onChange={e => this.setField(
                        e, 
                        CustomizableListFields.enum_fontFamilyParam)} >
                        <option value="Arial">Arial</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="Cursive">Cursive</option>
                        <option value="monospace">Monospace</option>
                    </select></div>

                    <div >
                    <label>Bullet </label>
                    <select value={this.state.listStyleTypeParam} onChange={e => this.setField(
                        e, 
                        CustomizableListFields.enum_listStyleTypeParam)} >
                        <option value="disc">disc</option>
                        <option value="square">square</option>
                        <option value="circle">circle</option>
                    </select></div>
                              
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