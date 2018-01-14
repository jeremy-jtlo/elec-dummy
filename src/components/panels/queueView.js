import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';

export default class QueueView extends Component {
    render() {
        /* TODO: Connect array to backend song list */
        var dummyArray = Array(15).fill(<ListItem>Dummy Song Data</ListItem>);
        
        return(
            <List className="col-3of12">
                {dummyArray}
            </List>
        );
    }
}