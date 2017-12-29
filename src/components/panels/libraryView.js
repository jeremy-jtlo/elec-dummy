import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';

export default class LibraryView extends Component {
    render() {
        /* Skeleton for a main display */
        /* TODO: Test other material-ui components later*/

        /* Will hold onto grid items */
        var tileData = [
            {
                img: 'https://placeimg.com/300/300/animals/grayscale',
                title: '80kidz'
            },
            {
                img: 'https://placeimg.com/300/300/animals/grayscale',
                title: 'Anri'
            },
            {
                img: 'https://placeimg.com/300/300/animals/grayscale',
                title: 'Bop Alloy'
            },
            {
                img: 'https://placeimg.com/300/300/animals/grayscale',
                title: 'Czarface'
            },
            {
                img: 'https://placeimg.com/300/300/animals/grayscale',
                title: 'DANGER'
            },
            {
                img: 'https://placeimg.com/300/300/animals/grayscale',
                title: 'Deastro'
            },
            {
                img: 'https://placeimg.com/300/300/animals/grayscale',
                title: 'Desired'
            },
            {
                img: 'https://placeimg.com/300/300/animals/grayscale',
                title: 'Eminem'
            },
            {
                img: 'https://placeimg.com/300/300/animals/grayscale',
                title: 'Flamingosis'
            },
            {
                img: 'https://placeimg.com/300/300/animals/grayscale',
                title: 'Fusq'
            },
            {
                img: 'https://placeimg.com/300/300/animals/grayscale',
                title: 'Ghostface Killah'
            },
            {
                img: 'https://placeimg.com/300/300/animals/grayscale',
                title: 'GZA'
            }
        ];

        return(
            <div className="libraryView">
                <GridList>
                {tileData.map((tile) =>
                    <GridTile key={tile.img} title={tile.title}>
                        <img alt="Album Cover" src={tile.img}/>
                    </GridTile>
                )}
                </GridList>
            </div>
        );
    }
}