import { makeStyles } from "@material-ui/core";
import firebase from "firebase/app";
import "firebase/auth";
export  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom:'100px'
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  const gProvider = new firebase.auth.GoogleAuthProvider();
 export const googleSignIn = () => {
   return firebase.auth()
    .signInWithPopup(gProvider)
    .then((result) => {
      var user = result.user;
    return user
    }).catch((error) => {
      var errorMessage = error.message;
     return errorMessage
    });
  };
