import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';

export default class AlbumView extends Component {
    render() {
        return(
            <GridList className="libraryView col-9of12">
                {this.props.tileData.map((tile) =>
                    <GridTile key={tile.img} title={tile.title}>
                        <img alt="Album Cover" src={tile.img}/>
                    </GridTile>
                )}
            </GridList>
        );
    };
}