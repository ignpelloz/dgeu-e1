import * as React from 'react';

interface ISearchTextProps {
    onSearchTextChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

class SearchText extends React.Component<ISearchTextProps, {}> {
    public constructor (props: ISearchTextProps){
        super(props);
    }

    public render(){
        return (
            <input type="text" name="searchText" placeholder="Buscar" 
                onChange={this.props.onSearchTextChange} />
        );
    }
}

export default SearchText;