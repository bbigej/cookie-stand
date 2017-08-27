
var hoursArray = ["10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM",]

var Store = function(name, minCustHr, maxCustHr, avgCookiePerCust) {
    this.storeName = name;
    this.minCustHr = minCustHr;
    this.maxCustHr = maxCustHr;
    this.avgCookiePerCust = avgCookiePerCust;
    this.getStoreInfo = function(tableReference) {
        var nameRow = document.createElement("tr");
        var nameCell = document.createElement("td");
        nameCell.innerText = this.storeName;
        nameRow.appendChild(nameCell);
        tableReference.appendChild(nameRow);

        var totalCookies = 0;
        var cookieArray = new Array();

        for (var index = 0; index < 8; index++) {
            var custNum = Math.floor(Math.random() * (this.maxCustHr - this.minCustHr) + this.minCustHr);
            var cookiesThatHr = custNum * this.avgCookiePerCust;
            cookieArray.push(cookiesThatHr);
            totalCookies = totalCookies + Math.floor(cookiesThatHr);
            
            var cookieHrRow = document.createElement("tr");
            var cookieHrCell = document.createElement("td");
            cookieHrCell.innerText = hoursArray[index] + ": " + Math.floor(cookieArray[index]) + " cookies";
            cookieHrRow.appendChild(cookieHrCell);
            tableReference.appendChild(cookieHrRow);
            }

        var totalRow = document.createElement("tr");
        var totalCell = document.createElement("td");
        totalCell.innerText = "Total: " + totalCookies + " cookies";
        totalRow.appendChild(totalCell);
        tableReference.appendChild(totalRow);
    }
}


var storeRoster = [];
storeRoster.push(new Store("Pioneer Square", 17, 88, 5.2));
storeRoster.push(new Store("Portland Airport", 6, 24, 1.2));
storeRoster.push(new Store("Washington Square",	11, 38,	1.9));
storeRoster.push(new Store("Sellwood", 20, 48, 3.3));
storeRoster.push(new Store("Pearl District", 3, 24, 2.6));

function buildStoreTable() {
    var htmlBody = document.getElementById("html-body");
    for (var index = 0; index < storeRoster.length; index++) {
        var createdTable = document.createElement("table");
        htmlBody.appendChild(createdTable);
        var createdTableBody = document.createElement("tbody");
        createdTable.appendChild(createdTableBody);
        storeRoster[index].getStoreInfo(createdTableBody);
    }
}

function userAddStore() {
    var form = document.forms['newStoreForm'];
    var newStoreName = form.elements['storeName'];
    var minCustomers = form.elements['minCust'];
    var maxCustomers = form.elements['maxCust'];
    var avgCookieperCustomer = form.elements['avgCookieperCustomer'];

    storeRoster.push(new Store(newStoreName.value, minCustomers.value, maxCustomers.value, avgCookieperCustomer.value));

    var htmlBody = document.getElementById("html-body");
    for (var index = 0; index < storeRoster.length; index++) {
        var createdTable = document.createElement("table");
        htmlBody.appendChild(createdTable);
        var createdTableBody = document.createElement("tbody");
        createdTable.appendChild(createdTableBody);
        storeRoster[index].getStoreInfo(createdTableBody);

        buildStoreTable();
    }
}

buildStoreTable();