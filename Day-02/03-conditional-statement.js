function launchBrowser(browser){
    if (browser === "chrome"){
        console.log("Launched Chrome Browser");
        
    } else {
        console.log("Check for the Browser");
        
    }

}

function runTests (testType){

    switch(testType){
        case "sanity": 
        console.log("Sanity Testing Started");
        break;

        case "smoke":
        console.log("Smoke Testing Started");
        break;

        case "regression":
        console.log("Regression Testing Started");
        break;

        default:
        console.log("Default Smoke testing started");
           

    }

}

runTests()
launchBrowser("chrome")

