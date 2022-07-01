1. 1st install the these cross env file "cross-env": "^7.0.3",

2. then write the code for in the script tag for start and build to pickup the env files as show in the photos
3. "start": "cross-env NODE_ENV=development react-scripts start",
4. "build": "cross-env NODE_ENV=production react-scripts build",

5. here in 4 point the env.development files is pickuped and that commands are used which we decalred in the env.development,
   similary example for the build

6. REACT_APP_TEST="im from the develpment file env"
   here REACT_APP ==> prefix is so much important so by these react is going to use it

7. example :: console.log("ssssss", process.env.REACT_APP_TEST);
