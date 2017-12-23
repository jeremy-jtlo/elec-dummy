import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';

export default class QueueView extends Component {
    render() {
        /* TODO: Connect array to backend song list */
        var dummyArray = Array(15).fill(<ListItem>Dummy Song Data</ListItem>);
        
        return(
            <div className="queueView">
                <List style={{maxHeight: '100%', overflow: 'auto'}}>
                    {dummyArray}
                </List>
            </div>
        );
    }
}