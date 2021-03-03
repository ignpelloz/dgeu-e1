import * as React from 'react';

class List extends React.Component<{}, {}> {
    public render(){
        const listStyleTypeParam = "disc"; //square, circle
        const lineHeightParam = "30%";
        const colorParam = "blue";
        const fontFamilyParam = "Arial"; // Fantasy, Cursive, monospace
        const fontSizeParam = "80px";
        return (
                <ul style={
                    {
                        listStyleType:listStyleTypeParam, 
                        lineHeight:lineHeightParam,
                        color: colorParam,
                        fontFamily: fontFamilyParam,
                        fontSize: fontSizeParam
                        }
                    }>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
              </ul>
        );
    }
}

export default List;


