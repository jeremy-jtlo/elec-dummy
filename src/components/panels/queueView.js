import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';

export default class QueueView extends Component {
    render() {
        /* TODO: Connect array to backend song list */
        var dummyArray = Array(15).fill(<ListItem>Dummy Song Data</ListItem>);
        
        return(
            <div className="queueView">
                <Drawer anchor="right" type="permanent" style={{maxHeight: '100%', overflow: 'auto'}}>
                    <List>
                        {dummyArray}
                    </List>
                </Drawer>
            </div>
        );
    }
}