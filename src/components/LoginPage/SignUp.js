import React, { useContext, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { googleSignIn, useStyles } from './SignUpStyles';
import { UserContext } from '../../App';
import firebase from "firebase/app";
import "firebase/auth";
import { useHistory, useLocation } from 'react-router';
import { firebaseConfig } from './firebaseConfig';

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}
 const SignUp=(props)=> {
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
   const [newUser,setNewUser] = useState({
     name:'',
     email:'',
     Password:'',
     error:'',
     isValid:true
   })
   const [user,setUser] = useContext(UserContext)
   const getResponse=(res)=>{
     setUser(res);
     setNewUser(res);
  if (!user.error){
    history.replace(from)
  }
   }
  const classes = useStyles();

  const handleGoogleSignIn=()=>{
    googleSignIn()
    .then(res=>{
      const userInfo = {
        name:res.displayName,
        email :res.email,
        error:res.errorMessage
      }
     getResponse(userInfo)
  
    }
      )
  }

  const handleInput=(e)=>{
    const userInfo = {...newUser}
  if(e.target.name ==='email'){
      userInfo.isValid = /(.+)@(.+){2,}\.(.+){2,}/.test(e.target.value) ? true : false;
  }
  userInfo[e.target.name ] = e.target.value
  setNewUser(userInfo)
  }
  const handleSignUp=(e)=>{
    firebase.auth().createUserWithEmailAndPassword(newUser.email,newUser.password)
    .then((userCredential) => {
      const res = userCredential.user;
      const userInfo = {
        name:user.name,
        email :res.email,
      }
     getResponse(userInfo)
    
    })
    .catch(res=>{
      const userInfo = {  ...newUser  }
      userInfo.error = res.message
        setNewUser(userInfo)
    })

    e.preventDefault()
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form}  onSubmit={handleSignUp}>
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
                autoComplete="fname"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label=" Name"
                autoFocus
                onBlur={handleInput}
              />
            </Grid>
           
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onBlur={handleInput}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onBlur={handleInput}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Button
              color='primary' 
          onClick={handleGoogleSignIn}
          >Sign In with Google</Button>
        
        </form>
      </div>
    
    </Container>
  );
}
export default SignUp