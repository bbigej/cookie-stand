
var locMessage = "";
var message = "";
var locMessage2 = "";
var message2 = "";

var hoursArray = ["10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM",]

function updatePage() {
    document.getElementById('cookieStoreLoc').innerHTML = locMessage;
    document.getElementById('cookieStore').innerHTML = message;
    document.getElementById('cookieStoreLoc2').innerHTML = locMessage2;
    document.getElementById('cookieStore2').innerHTML = message2;   
}


var pioneerSq = {
    storeLoc: "Pioneer Square",
    minCustHr: 17, 
    maxCustHr: 88,
    avgCookiePerCust: 5.2,
    rndNumCustHr: function() {
        var totalCookies = 0;
        var cookieArray = new Array();
        locMessage = pioneerSq.storeLoc
        for (var index = 0; index < 8; index++) {
            var custNum = Math.floor(Math.random() * (pioneerSq.maxCustHr - pioneerSq.minCustHr) + pioneerSq.minCustHr);
            var cookiesThatHr = custNum * pioneerSq.avgCookiePerCust;
            cookieArray.push(cookiesThatHr);
            totalCookies = totalCookies + Math.floor(cookiesThatHr);
            message += "<li>" + hoursArray[index] + ": " + Math.floor(cookieArray[index]) + " cookies </li>";
        }
        message += "<li>Total: " + totalCookies + " cookies </li>";
        updatePage();
    },
};

pioneerSq.rndNumCustHr();


var pdxAirport = {
    storeLoc: "Portland Airport",
    minCustHr: 6,
    maxCustHr: 24,
    avgCookiePerCust: 1.2,
    rndNumCustHr: function() {
        var totalCookies = 0;
        var cookieArray = new Array();
        locMessage2 = pdxAirport.storeLoc
        for (var index = 0; index < 8; index++) {
            var custNum = Math.floor(Math.random() * (pdxAirport.maxCustHr - pdxAirport.minCustHr) + pdxAirport.minCustHr);
            var cookiesThatHr = custNum * pdxAirport.avgCookiePerCust;
            cookieArray.push(cookiesThatHr);
            totalCookies = totalCookies + Math.floor(cookiesThatHr);
            message2 += "<li>" + hoursArray[index] + ": " + Math.floor(cookieArray[index]) + " cookies </li>";
        }
        message2 += "<li>Total: " + totalCookies + " cookies </li>";
        updatePage();     
    },
};

pdxAirport.rndNumCustHr();
    





var WashSq = {
    minCustHr: 11,
    maxCustHr: 38,
    avgCookiePerCust: 1.9,
   
};

var sellwood = {
    minCustHr: 20, 
    maxCustHr: 48,
    avgCookiePerCust: 3.3,
  
};  

var pearlDis = {
    minCustHr: 3,
    maxCustHr: 24, 
    avgCookiePerCust: 2.6,
   
};