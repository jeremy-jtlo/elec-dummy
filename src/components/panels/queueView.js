import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';

export default class QueueView extends Component {
    render() {
        /* TODO: Connect array to backend song list */
        var dummyArray = Array(15).fill(<ListItem>Dummy Song Data</ListItem>);
        
        return(
            <Drawer openSecondary="true" className="drawerDiv col-3of12" xxxStyle={{width: "25%"}} >
                <List>
                    {dummyArray}
                </List>
            </Drawer>
        );
    }
}