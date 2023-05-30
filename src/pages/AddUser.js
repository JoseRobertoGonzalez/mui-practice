import React, { useContext, useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import { UserContext } from '../UserContext';

const AddUser = () => {
    const { addUser } = useContext(UserContext);
    const [user, setUser] = useState({ name: '', email: '', favoriteColor: '', favoritePokemon: '' });

    const handleChange = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addUser(user);
        setUser({ name: '', email: '', favoriteColor: '', favoritePokemon: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2} direction="column">
                <Grid item>
                    <TextField
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                        label="Name"
                    />
                </Grid>
                <Grid item>
                    <TextField
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        label="Email"
                    />
                </Grid>
                <Grid item>
                    <TextField
                        name="favoriteColor"
                        value={user.favoriteColor}
                        onChange={handleChange}
                        label="Favorite Color"
                    />
                </Grid>
                <Grid item>
                    <TextField
                        name="favoritePokemon"
                        value={user.favoritePokemon}
                        onChange={handleChange}
                        label="Favorite Pokemon"
                    />
                </Grid>
                <Grid item>
                    <Button type="submit" variant="contained" color="primary">
                        Add User
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default AddUser;