import * as React from 'react';

interface IHeaderState {
    listStyleTypeParam: string; 
    lineHeightParam: string;
    colorParam: string;
    fontFamilyParam: string;
    fontSizeParam: string;
    paddingLeftParam: string;
    numberOfItemsParam: string
}

export enum CustomizableListFields{
    enum_listStyleTypeParam = "enum_listStyleTypeParam",
    enum_lineHeightParam = "enum_lineHeightParam",
    enum_colorParam = "enum_colorParam",
    enum_fontFamilyParam = "enum_fontFamilyParam",
    enum_fontSizeParam = "enum_fontSizeParam",
    enum_paddingLeftParam = "enum_paddingLeftParam",
    enum_numberOfItemsParam = "enum_numberOfItemsParam"
}

class MainList extends React.Component<{}, IHeaderState> {

    constructor (props: {}){
        super(props);
        this.state = {
            listStyleTypeParam: "disc", //square, circle
            lineHeightParam: "50px",
            colorParam: "blue",
            fontFamilyParam: "Arial", // Fantasy, Cursive, monospace
            fontSizeParam: "20px",
            paddingLeftParam: "30px",
            numberOfItemsParam: "4"
        };
    }

    public updateVar(currentProperty: CustomizableListFields, 
                     updatedField: CustomizableListFields, 
                     stateValue: string, 
                     event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>){
                    /*
                    Si la propiedad actual es la modificada, la actualiza con el evento. En otro caso, mantiene el valor que tiene en el estado.
                    */
        if (currentProperty === updatedField){
            if (currentProperty === CustomizableListFields.enum_lineHeightParam || 
                currentProperty === CustomizableListFields.enum_paddingLeftParam ||
                currentProperty === CustomizableListFields.enum_fontSizeParam){
                return event.target.value + "px"    
            }
            return event.target.value
        }
        return stateValue
    }

    public setField = (event:React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>, 
                       updatedField: CustomizableListFields) => {
        /*
        Modifica en el estado una de las 6 propiedades haciendo uso de updateVar.            
        */
        let newState = {
                    listStyleTypeParam: this.updateVar(CustomizableListFields.enum_listStyleTypeParam, updatedField, this.state.listStyleTypeParam, event),
                    lineHeightParam: this.updateVar(CustomizableListFields.enum_lineHeightParam,updatedField, this.state.lineHeightParam, event),
                    colorParam: this.updateVar(CustomizableListFields.enum_colorParam, updatedField, this.state.colorParam, event),
                    fontFamilyParam: this.updateVar(CustomizableListFields.enum_fontFamilyParam, updatedField, this.state.fontFamilyParam, event),
                    fontSizeParam: this.updateVar(CustomizableListFields.enum_fontSizeParam, updatedField, this.state.fontSizeParam, event),
                    paddingLeftParam: this.updateVar(CustomizableListFields.enum_paddingLeftParam, updatedField, this.state.paddingLeftParam, event),
                    numberOfItemsParam: this.updateVar(CustomizableListFields.enum_numberOfItemsParam, updatedField, this.state.numberOfItemsParam, event),
        }
        this.setState(newState);
    }

    public itemizedList(){
        let res: string = ""
        for (let i = 0; i < Number(this.state.numberOfItemsParam); i++) {
            res += `<li>Item ${i+1}</li>`;
        }
        return res
    }
    
    public render(){
        return (<div > <h2>Customizable List</h2>

                    <div><label>Number of Items </label>
                    <input type="number" placeholder="Enter a number..." onChange={e => this.setField(
                        e, 
                        CustomizableListFields.enum_numberOfItemsParam)} /></div>

                    <div><label>Items Separation </label>
                    <input type="number" placeholder="Enter a number..." onChange={e => this.setField(
                        e, 
                        CustomizableListFields.enum_lineHeightParam)} /></div>

                    <div><label>Padding Left </label>
                    <input type="number" placeholder="Enter a number..." onChange={e => this.setField(
                        e, 
                        CustomizableListFields.enum_paddingLeftParam)} /></div>

                    <div><label>Size </label>
                    <input type="number" placeholder="Enter a number..." onChange={e => this.setField(
                        e, 
                        CustomizableListFields.enum_fontSizeParam)} /></div>

                    <div><label>Color </label>
                    <select value={this.state.colorParam} onChange={e => this.setField(
                        e, 
                        CustomizableListFields.enum_colorParam)} >
                        <option value="Black">Black</option>
                        <option value="Green">Green</option>
                        <option value="Pink">Pink</option>
                        <option value="Blue">Blue</option>
                    </select></div>

                    <div><label>Font </label>
                    <select value={this.state.fontFamilyParam} onChange={e => this.setField(
                        e, 
                        CustomizableListFields.enum_fontFamilyParam)} >
                        <option value="Arial">Arial</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="Cursive">Cursive</option>
                        <option value="monospace">Monospace</option>
                    </select></div>

                    <div><label>Bullet Type </label>
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
                    <div dangerouslySetInnerHTML={{ 
                        __html: this.itemizedList() 
                    }}></div>
              </ul>
              </div>
        );
    }
}

export default MainList;