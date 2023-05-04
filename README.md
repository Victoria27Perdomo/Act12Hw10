## Activity 12

Observe the following arrangement.

```
chuck: [ 
    { 
        "value": "Chuck Norris can skydive into outer space." 
    }, 
    { 
        "value": "The chief export of Chuck Norris is pain." 
    }, 
    { 
        "value": "Chuck Norris doesn't read books. He stares them down until he gets the information he wants." 
    }, 
    { 
        "value": "Time waits for no man. Unless that man is Chuck Norris." 
    }, 
    { 
        "value": "If you spell Chuck Norris in Scrabble, you win. Forever." 
    }, 
],
```

Create a Vue application where you can shape the data provided in the previous fix. The application should have the following features:

1. Create a new instance of Vue, where the suggested data is returned.
2. Display it as a list by iterating with the v-for directive.
3. Give it a nice look by adding a stylesheet.
4. Create the git project and upload the results to GitHub, to the project named "ChuckJokesVue".

Remember to edit your README.md file with the description of the activity, take screenshots and attach everything in a document in report format along with the GitHub URL.

## Homework 10

After activity 12, we will modify the data as follows:

```
chuck: [ 
    { 
        "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png", 
        "value": "Chuck Norris can skydive into outer space." 
    }, 
    { 
        "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png", 
        "value": "The chief export of Chuck Norris is pain." 
    }, 
    { 
        "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png", 
        "value": "Chuck Norris doesn't read books. He stares them down until he gets the information he wants." 
    }, 
    { 
        "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png", 
        "value": "Time waits for no man. Unless that man is Chuck Norris." 
    }, 
    { 
        "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png", 
        "value": "If you spell Chuck Norris in Scrabble, you win. Forever." 
    }, 
], 
```

Then, do the following:

1. Create a component in Vue called <'chuck-card'> and take as template the code of a Bootstrap card with image and text.
2. Use props to pass icon_url and values between components.
3. Three cards should appear per line (two cards for the second line).
4. Use Bootstrap classes to make the page responsive (on small screens, one card per line should be displayed).
5. Update your project on GitHub by naming the commit "Task10".