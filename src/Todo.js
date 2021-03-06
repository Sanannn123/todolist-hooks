import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from "@material-ui/core/ListItem"
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction"

export default function Todo({task, key, completed, removedTodo}){
    return(
                    <ListItem>
                        <Checkbox checked={completed}/>
                        <ListItemText>
                            {task}
                        </ListItemText>
                        <ListItemSecondaryAction>
                            <IconButton>
                                <EditIcon />
                            </IconButton>
                            <IconButton 
                            onClick={() => removedTodo(key)}>
                                <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
    )
}