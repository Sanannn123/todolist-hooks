import React from 'react';
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper"
import useInputState from './Hooks/useInputState';

export default function TodoForm({ addTodo }) {
    const [value, handleChange, reset] = useInputState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(value);
        reset();
    }

    return (
        <Paper
        style={{
            margin: "0.5rem 0",
            padding: "0 0.5rem"
        }}>
            <form onSubmit={handleSubmit}>
                <TextField
                 margin="normal" 
                 fullWidth 
                 value={value} 
                 onChange={handleChange} />
            </form>
        </Paper>
    )
}