
var state;
var User;
var config = {
    apiKey: "AIzaSyD8NR305yGZ5cfWtuJWtR1-zhJm8ojuExI",
    authDomain: "lahorewatches.firebaseapp.com",
    databaseURL: "https://lahorewatches.firebaseio.com",
    storageBucket: "lahorewatches.appspot.com",
    messagingSenderId: "963341214342"
};
firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(function (user) {
    if(user)
    {
        state=true;
        User = user;
        console.log("signed in");
    }
    else
    {
        state=false;
        User = null;
        console.log("signed out");
    }
});
