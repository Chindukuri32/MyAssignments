let browser = "Chrome";
function checkBrowserVersion(callback){
    setTimeout(() => {
        console.log("Versioning delayed by 2 Seconds");
        callback(browser);       
    }, 2000);

}
function browserVersion(version) {
    console.log("Browser Version Using Callback:" +browser);
    
    
}
checkBrowserVersion(browserVersion);