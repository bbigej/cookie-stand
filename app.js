
var hoursArray = ["10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM",]

function addStoreName(addedStoreName, storeNameId) {
    var pGraphToUse = document.getElementById(storeNameId);
    pGraphToUse.innerText = addedStoreName;
  }

function addListItem(contentToAdd, listId) {
    var listToUse = document.getElementById(listId);
    var cookieStandItem = document.createElement("li");
    cookieStandItem.setAttribute('class', 'data')
    cookieStandItem.innerText = contentToAdd;
    listToUse.appendChild(cookieStandItem);
  }

var pioneerSq = {
    storeLoc: "Pioneer Square",
    minCustHr: 17, 
    maxCustHr: 88,
    avgCookiePerCust: 5.2,
    rndNumCustHr: function() {
        var totalCookies = 0;
        var cookieArray = new Array();
        addStoreName(pioneerSq.storeLoc, "cookieStoreLoc");
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

pioneerSq.rndNumCustHr();

var pdxAirport = {
    storeLoc: "Portland Airport",
    minCustHr: 6,
    maxCustHr: 24,
    avgCookiePerCust: 1.2,
    rndNumCustHr: function() {
        var totalCookies = 0;
        var cookieArray = new Array();
        addStoreName(pdxAirport.storeLoc, "cookieStoreLoc2");
        for (var index = 0; index < 8; index++) {
            var custNum = Math.floor(Math.random() * (pdxAirport.maxCustHr - pdxAirport.minCustHr) + pdxAirport.minCustHr);
            var cookiesThatHr = custNum * pdxAirport.avgCookiePerCust;
            cookieArray.push(cookiesThatHr);
            totalCookies = totalCookies + Math.floor(cookiesThatHr);
            addListItem(hoursArray[index] + ": " + Math.floor(cookieArray[index]) + " cookies", "cookieStore2");
        }
            addListItem("Total: " + totalCookies + " cookies", "cookieStore2");
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
        addStoreName(washSq.storeLoc, "cookieStoreLoc3");
        for (var index = 0; index < 8; index++) {
            var custNum = Math.floor(Math.random() * (washSq.maxCustHr - washSq.minCustHr) + washSq.minCustHr);
            var cookiesThatHr = custNum * washSq.avgCookiePerCust;
            cookieArray.push(cookiesThatHr);
            totalCookies = totalCookies + Math.floor(cookiesThatHr);
            addListItem(hoursArray[index] + ": " + Math.floor(cookieArray[index]) + " cookies", "cookieStore3");
        }
            addListItem("Total: " + totalCookies + " cookies", "cookieStore3");
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
        addStoreName(sellwood.storeLoc, "cookieStoreLoc4");
        for (var index = 0; index < 8; index++) {
            var custNum = Math.floor(Math.random() * (sellwood.maxCustHr - sellwood.minCustHr) + sellwood.minCustHr);
            var cookiesThatHr = custNum * sellwood.avgCookiePerCust;
            cookieArray.push(cookiesThatHr);
            totalCookies = totalCookies + Math.floor(cookiesThatHr);
            addListItem(hoursArray[index] + ": " + Math.floor(cookieArray[index]) + " cookies", "cookieStore4");
        }
        addListItem("Total: " + totalCookies + " cookies", "cookieStore4");
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
        addStoreName(pearlDis.storeLoc, "cookieStoreLoc5");
        for (var index = 0; index < 8; index++) {
            var custNum = Math.floor(Math.random() * (pearlDis.maxCustHr - pearlDis.minCustHr) + pearlDis.minCustHr);
            var cookiesThatHr = custNum * pearlDis.avgCookiePerCust;
            cookieArray.push(cookiesThatHr);
            totalCookies = totalCookies + Math.floor(cookiesThatHr);
            addListItem(hoursArray[index] + ": " + Math.floor(cookieArray[index]) + " cookies", "cookieStore5");
        }
        addListItem("Total: " + totalCookies + " cookies", "cookieStore5");
    },
};

pearlDis.rndNumCustHr();