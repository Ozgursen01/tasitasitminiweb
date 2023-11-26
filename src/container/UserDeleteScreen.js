import React, { useState } from "react";
import { Typography, Box, Card, Grid, TextField, Button } from '@mui/material';
import axios from 'axios';
import config from "../config";


function UserDeleteScreen() {
    const  [email, setEmail] = useState();
    const [password, setPassword] = useState(); 

    const HandleUserDelete = (email,password) => {
        const userData = {
            email: email,
            password: password
          };
        axios.delete(`${config.BACKEND_URL}auth/userDel`,{ data: userData }).then(res => {
            alert(`${res.data.message}`);
            console.log(res);
        }).catch(err => {
            alert(`${err}`);
        });
    }

  return (
    <Box>
      <Card sx={{ padding: 3, maxWidth: 400, margin: "auto", mt: 5 }}>
        <Typography variant="h4" color="text.primary" align="center"  gutterBottom>
          Hesap Sil
        </Typography>
        <form>
          <Grid container spacing={3} alignItems="center" justifyContent="center">
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Adresi"
                variant="outlined"
                onChange={(e) => setEmail(e.target.value)}
                />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="password"
                label="Şifre"
                type="password"
                variant="outlined"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                color="error"
                onClick={()=> HandleUserDelete(email,password)}
              >
                Hesabımı Sil
              </Button>
            </Grid>
          </Grid>
        </form>
      </Card>
    </Box>
  );
}

export default UserDeleteScreen;
