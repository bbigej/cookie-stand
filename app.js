
var locMessage = "";
var message = "";
var locMessage2 = "";
var message2 = "";
var locMessage3 = "";
var message3 = "";
var locMessage4 = "";
var message4 = "";
var locMessage5 = "";
var message5 = "";

var hoursArray = ["10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM",]

function updatePage() {
    document.getElementById('cookieStoreLoc').innerHTML = locMessage;
    document.getElementById('cookieStore').innerHTML = message;
    document.getElementById('cookieStoreLoc2').innerHTML = locMessage2;
    document.getElementById('cookieStore2').innerHTML = message2;   
    document.getElementById('cookieStoreLoc3').innerHTML = locMessage3;
    document.getElementById('cookieStore3').innerHTML = message3; 
    document.getElementById('cookieStoreLoc4').innerHTML = locMessage4;
    document.getElementById('cookieStore4').innerHTML = message4; 
    document.getElementById('cookieStoreLoc5').innerHTML = locMessage5;
    document.getElementById('cookieStore5').innerHTML = message5; 
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


var washSq = {
    storeLoc: "Washington Square",
    minCustHr: 11,
    maxCustHr: 38,
    avgCookiePerCust: 1.9,
    rndNumCustHr: function() {
        var totalCookies = 0;
        var cookieArray = new Array();
        locMessage3 = washSq.storeLoc
        for (var index = 0; index < 8; index++) {
            var custNum = Math.floor(Math.random() * (washSq.maxCustHr - washSq.minCustHr) + washSq.minCustHr);
            var cookiesThatHr = custNum * washSq.avgCookiePerCust;
            cookieArray.push(cookiesThatHr);
            totalCookies = totalCookies + Math.floor(cookiesThatHr);
            message3 += "<li>" + hoursArray[index] + ": " + Math.floor(cookieArray[index]) + " cookies </li>";
        }
        message3 += "<li>Total: " + totalCookies + " cookies </li>";
        updatePage();     
    },
};

washSq.rndNumCustHr();



var sellwood = {
    storeLoc: "Sellwood",
    minCustHr: 20, 
    maxCustHr: 48,
    avgCookiePerCust: 3.3,
    rndNumCustHr: function() {
        var totalCookies = 0;
        var cookieArray = new Array();
        locMessage4 = sellwood.storeLoc
        for (var index = 0; index < 8; index++) {
            var custNum = Math.floor(Math.random() * (sellwood.maxCustHr - sellwood.minCustHr) + sellwood.minCustHr);
            var cookiesThatHr = custNum * sellwood.avgCookiePerCust;
            cookieArray.push(cookiesThatHr);
            totalCookies = totalCookies + Math.floor(cookiesThatHr);
            message4 += "<li>" + hoursArray[index] + ": " + Math.floor(cookieArray[index]) + " cookies </li>";
        }
        message4 += "<li>Total: " + totalCookies + " cookies </li>";
        updatePage();     
    },
};  

sellwood.rndNumCustHr();


var pearlDis = {
    storeLoc: "Pearl District",
    minCustHr: 3,
    maxCustHr: 24, 
    avgCookiePerCust: 2.6,
    rndNumCustHr: function() {
        var totalCookies = 0;
        var cookieArray = new Array();
        locMessage5 = pearlDis.storeLoc
        for (var index = 0; index < 8; index++) {
            var custNum = Math.floor(Math.random() * (pearlDis.maxCustHr - pearlDis.minCustHr) + pearlDis.minCustHr);
            var cookiesThatHr = custNum * pearlDis.avgCookiePerCust;
            cookieArray.push(cookiesThatHr);
            totalCookies = totalCookies + Math.floor(cookiesThatHr);
            message5 += "<li>" + hoursArray[index] + ": " + Math.floor(cookieArray[index]) + " cookies </li>";
        }
        message5 += "<li>Total: " + totalCookies + " cookies </li>";
        updatePage();     
    },
};

pearlDis.rndNumCustHr();