import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import AlbumView from '../views/albums';

export default class LibraryView extends Component {

    constructor(props) {
        super(props);
        this.state = {
          value: 'albums',
        };
      }

    // For tab index switching
    handleChange = (value) => {
        this.setState({
            value: value,
        });
    };

    render() {
        /* Skeleton for a main display */
        /* TODO: Test other material-ui components later*/

        /* Will hold onto grid items */
        var albums = [
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
            /* TODO: Place tabs in here  */
            <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            >
                <Tab label="Albums" value="albums">
                <AlbumView tileData={albums}></AlbumView>
                </Tab>
                <Tab label="Artists" value="artists">
                <h1>Testing Testing Testing</h1>
                </Tab>
            </Tabs>
        );
    }
}