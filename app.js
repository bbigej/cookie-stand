
var hoursArray = ["10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM",]

var pioneerSq = {
    storeLoc: "Pioneer Square",
    minCustHr: 17, 
    maxCustHr: 88,
    avgCookiePerCust: 5.2,
    rndNumCustHr: function() {
        var totalCookies = 0;
        var cookieArray = new Array();
        addListItem(pioneerSq.storeLoc);
        for (var index = 0; index < 8; index++) {
            var custNum = Math.floor(Math.random() * (pioneerSq.maxCustHr - pioneerSq.minCustHr) + pioneerSq.minCustHr);
            var cookiesThatHr = custNum * pioneerSq.avgCookiePerCust;
            cookieArray.push(cookiesThatHr);
            totalCookies = totalCookies + Math.floor(cookiesThatHr);
            addListItem(hoursArray[index] + ": " + Math.floor(cookieArray[index]) + " cookies", "cookieStore");
        }
        addListItem("Total: " + totalCookies + " cookies", "cookieStore");
    },
};

function addListItem(contentToAdd) {
    var listToUse = document.getElementById("cookieStore");
    var cookieStandItem = document.createElement("li");
    cookieStandItem.setAttribute('class', 'data')
    cookieStandItem.innerText = contentToAdd;
    listToUse.appendChild(cookieStandItem);
  }
  

pioneerSq.rndNumCustHr();


/*var pdxAirport = {
    storeLoc: "Portland Airport",
    minCustHr: 6,
    maxCustHr: 24,
    avgCookiePerCust: 1.2,
    rndNumCustHr: function() {
        var totalCookies = 0;
        var cookieArray = new Array();
        var message = "";
        updatePage("cookieStoreLoc2", pdxAirport.storeLoc);
        for (var index = 0; index < 8; index++) {
            var custNum = Math.floor(Math.random() * (pdxAirport.maxCustHr - pdxAirport.minCustHr) + pdxAirport.minCustHr);
            var cookiesThatHr = custNum * pdxAirport.avgCookiePerCust;
            cookieArray.push(cookiesThatHr);
            totalCookies = totalCookies + Math.floor(cookiesThatHr);
            message += "<li class=\"data\">" + hoursArray[index] + ": " + Math.floor(cookieArray[index]) + " cookies </li>";
        }
        message += "<li class=\"data\">Total: " + totalCookies + " cookies </li>";
        updatePage("cookieStore2", message);
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
        var message = "";
        updatePage("cookieStoreLoc3", washSq.storeLoc);
        for (var index = 0; index < 8; index++) {
            var custNum = Math.floor(Math.random() * (washSq.maxCustHr - washSq.minCustHr) + washSq.minCustHr);
            var cookiesThatHr = custNum * washSq.avgCookiePerCust;
            cookieArray.push(cookiesThatHr);
            totalCookies = totalCookies + Math.floor(cookiesThatHr);
            message += "<li class=\"data\">" + hoursArray[index] + ": " + Math.floor(cookieArray[index]) + " cookies </li>";
        }
        message += "<li class=\"data\">Total: " + totalCookies + " cookies </li>";
        updatePage("cookieStore3", message);     
        
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
        var message = "";
        updatePage("cookieStoreLoc4", sellwood.storeLoc);
        for (var index = 0; index < 8; index++) {
            var custNum = Math.floor(Math.random() * (sellwood.maxCustHr - sellwood.minCustHr) + sellwood.minCustHr);
            var cookiesThatHr = custNum * sellwood.avgCookiePerCust;
            cookieArray.push(cookiesThatHr);
            totalCookies = totalCookies + Math.floor(cookiesThatHr);
            message += "<li class=\"data\">" + hoursArray[index] + ": " + Math.floor(cookieArray[index]) + " cookies </li>";
        }
        message += "<li class=\"data\">Total: " + totalCookies + " cookies </li>";
        updatePage("cookieStore4", message);     
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
        var message = "";
        updatePage("cookieStoreLoc5", pearlDis.storeLoc);
        for (var index = 0; index < 8; index++) {
            var custNum = Math.floor(Math.random() * (pearlDis.maxCustHr - pearlDis.minCustHr) + pearlDis.minCustHr);
            var cookiesThatHr = custNum * pearlDis.avgCookiePerCust;
            cookieArray.push(cookiesThatHr);
            totalCookies = totalCookies + Math.floor(cookiesThatHr);
            message += "<li class=\"data\">" + hoursArray[index] + ": " + Math.floor(cookieArray[index]) + " cookies </li>";
        }
        message += "<li class=\"data\">Total: " + totalCookies + " cookies </li>";
        updatePage("cookieStore5", message);    
    },
};

pearlDis.rndNumCustHr();    */