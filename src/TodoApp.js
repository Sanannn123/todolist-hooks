import React, { useState } from 'react';
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import TodoList from './TodoList';
import TodoForm from './TodoForm';

export default function TodoApp() {
    const initialTools = [
        {id:1, task: "Test 1", completed: false,},
        {id:1, task: "Test 2", completed: false,},
        {id:1, task: "Test 3", completed: true,}
    ]

    const [todos, setTodos] = useState(initialTools) 

    const addTodo = newTodo => {
        setTodos(
            [... todos, {id:4, task:newTodo, completed: false}]
        )
    }

    const removeTodo = TodoID => {
        const updateList = todos.filter( todo => todo.id === TodoID)
        setTodos(updateList)
    }

    return (
        <Paper 
        style={{
            padding: 0,
            margin: 0,
            height: "100vh",
            backgroundColor: "#fafafa"
        }}
        elevation={0}
        >
        <AppBar color='primary'  position="static" style={{height: "70"}}>
            <Toolbar>
                <Typography color="inherit">
                    Todo with Hooks,Man!
                </Typography>
            </Toolbar>
        </AppBar>
        <Grid container justify="center" style={{marginTop: "1rem"}}>
            <Grid item xs={11} md={8} lg={4}>
                <TodoForm addTodo={addTodo} />
                <TodoList removeTodo={removeTodo} todos={todos} />
            </Grid>
        </Grid>
        </Paper>
    )
}