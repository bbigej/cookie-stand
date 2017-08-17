
var locMessage = "";
var message = "";

function updatePage() {
    document.getElementById('cookieStoreLoc').innerHTML = locMessage;
    document.getElementById('cookieStore').innerHTML = message;
}

var hoursArray = ["10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM",]

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
    minCustHr: 6,
    MaxCustHr: 24,
    avgCookiePerCust: 1.2,
    randCustPerHr: function() {
        math.random() * (maxCustHr - minCustHr) + minCustHr;  
        return custNum;
    },
};
    
var WashSq = {
    minCustHr: 11,
    MaxCustHr: 38,
    avgCookiePerCust: 1.9,
    randCustPerHr: function() {
        math.random() * (maxCustHr - minCustHr) + minCustHr; 
        return custNum;
    },
};

var sellwood = {
    minCustHr: 20, 
    MaxCustHr: 48,
    avgCookiePerCust: 3.3,
    randCustPerHr: function() {
        math.random() * (maxCustHr - minCustHr) + minCustHr;
        return custNum;
    },
};  

var pearlDis = {
    minCustHr: 3,
    MaxCustHr: 24, 
    avgCookiePerCust: 2.6,
    randCustPerHr: function() {
        math.random() * (maxCustHr - minCustHr) + minCustHr;
        return custNum;
    },
};