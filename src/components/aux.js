CustomizableListFields{
    enum_listStyleTypeParam = "enum_listStyleTypeParam",
    enum_lineHeightParam = "enum_lineHeightParam",
    enum_colorParam = "enum_colorParam",
    enum_fontFamilyParam = "enum_fontFamilyParam",
    enum_fontSizeParam = "enum_fontSizeParam",
    enum_paddingLeftParam

updateVar(currentProperty, updatedField, stateValue, event){
    if (currentProperty == updatedField){
        return event.target.value
    }
    return stateValue
}



newState = {
            listStyleTypeParam: updateVar(this.state.listStyleTypeParam),
            lineHeightParam: updateVar(this.state.lineHeightParam,
            colorParam: updateVar(this.state.colorParam,
            fontFamilyParam: updateVar(this.state.fontFamilyParam,
            fontSizeParam: updateVar(this.state.fontSizeParam,
            paddingLeftParam: updateVar(this.state.paddingLeftParam
}
this.setState(newState);