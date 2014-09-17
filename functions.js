routeCount = 0;
table = document.getElementById("results-table");
totals = document.getElementById("results-totals");

function setVariables(strTransportType) {
  if (strTransportType === 'Speed Boat') {
    document.getElementById('speed').value = 30.00;
    document.getElementById('mileage').value = 135.00;
    document.getElementById('price').value = 16.97;
  }
  else if (strTransportType === 'Sea Plane') {
    document.getElementById('txtTransportSpeed').value = 130.00;
    document.getElementById('txtConsumptionRate').value = 273.00;
    document.getElementById('txtFuelPrice').value = 16.97;
  }
  else {
    document.getElementById('speed').value = 9;
    document.getElementById('mileage').value = 35;
    document.getElementById('price').value = 16.97;
  }
}


function showIslands(atoll, island) {
  selectsToHide = document.getElementsByClassName(island);
  
  for(i = 0; i < selectsToHide.length; i++) {
    selectsToHide[i].style.display = "none";
  }
  
  document.getElementById(atoll).style.display = "block";
}


function addRoute() {
  validateValues();
}

function validateValues() {
  errorText = "";
  
  // check departing island is selected
  departInfo = document.getElementById("atoll-from").value;
  
  if(departInfo == "null") {
    errorText = " - Select a departing Atoll and Island!\n\n";
  }
  else {
    departInfo = document.getElementById(departInfo).value;
  
    if(departInfo == "null") {
      errorText = " - Select a departing Island!\n\n";
    }
  }
  //************************
  
  
  // check destination island is selected
  arriveInfo = document.getElementById("atoll-to").value;
  
  if(arriveInfo == "null") {
    errorText = " - Select a destination Atoll and Island\n\n";
  }
  else {
    arriveInfo = document.getElementById(arriveInfo).value;
  
    if(arriveInfo == "null") {
      errorText = " - Select a destination Island\n\n";
    }
  }
  //*************************
  
  
  speed = parseFloat(document.getElementById("speed").value);
  mileage = parseFloat(document.getElementById("mileage").value);
  price = parseFloat(document.getElementById("price").value);
  
  
  if(isNaN(speed) || speed < 0.01) {
    errorText = errorText + " - Enter a number (greater than zero) for Speed\n\n";
  }
  
  if(isNaN(mileage) || mileage < 0.01) {
    errorText = errorText + " - Enter a number (greater than zero) for Mileage\n\n";
  }
  
  if(isNaN(price) || price < 0.01) {
    errorText = errorText + " - Enter a number (greater than zero) for Price\n\n";
  }
  
  if(errorText != "") {
    errorText = "Please do the following: \n\n" + errorText;
    alert(errorText);
  }
  else {
    caculateAndDisplay(arriveInfo, speed, mileage, price);
  }
}


function caculateAndDisplay(arriveInfo, speed, mileage, price) {
// get and separate departing island name, latitude and longitude
  departInfo = document.getElementById("atoll-from").value;
  departInfo = document.getElementById(departInfo).value;
  departInfo = departInfo.split(',');
  departName = departInfo[0];
  departLat = departInfo[1];
  departLon = departInfo[2];
  
  // separate departing island's latitude and longitude into degrees, minutes, seconds and direction
  departLat = departLat.split('-');
  departLon = departLon.split('-');
  // [0] - degrees
  // [1] - minutes
  // [2] - seconds
  // [3] - direction
  
//*****************************************************************************
  
  
// get and separate arriving island name, latitude and longitude
//arriveInfo = document.getElementById("atoll-to").value;
//arriveInfo = document.getElementById(arriveInfo).value;
  arriveInfo = arriveInfo.split(',');
  arriveName = arriveInfo[0];
  arriveLat = arriveInfo[1];
  arriveLon = arriveInfo[2];
  
  // separate arriving island's latitude and longitude into degrees, minutes, seconds and direction
  arriveLat = arriveLat.split('-');
  arriveLon = arriveLon.split('-');
  // [0] - degrees
  // [1] - minutes
  // [2] - seconds
  // [3] - direction
  
//*****************************************************************************

  
// convert degrees and seconds to minutes and add all together
  departLatMins = parseFloat(departLat[0] * 60) + parseFloat(departLat[1]) + parseFloat(departLat[2] / 60);
  departLonMins = parseFloat(departLon[0] * 60) + parseFloat(departLon[1]) + parseFloat(departLon[2] / 60);
  
  arriveLatMins = parseFloat(arriveLat[0] * 60) + parseFloat(arriveLat[1]) + parseFloat(arriveLat[2] / 60);
  arriveLonMins = parseFloat(arriveLon[0] * 60) + parseFloat(arriveLon[1]) + parseFloat(arriveLon[2] / 60);
  
//*****************************************************************************

  
// calculate distance using pythagoras theorem
  // check direction for latitude and calculate distance
  if ((departLat[3] == "N" && arriveLat[3] == "N") || (departLat[3] == "S" && arriveLat[3] == "S")) {
    distanceLat = departLatMins - arriveLatMins;
  }
  else {
    distanceLat = departLatMins + arriveLatMins;
  }
  
  // calculate distance for longitude
  distanceLon = departLonMins - arriveLonMins;
  
  
  // square both distances
  distanceLat = distanceLat * distanceLat;
  distanceLon = distanceLon * distanceLon;
  
  distance = distanceLat + distanceLon;
  distance = Math.sqrt(distance);
  
  
//*****************************************************************************

// calculate duration, fuel consumed and fuel cost
  // get variables
  // speed = parseFloat(document.getElementById("speed").value);
  // mileage = parseFloat(document.getElementById("mileage").value);
  // price = parseFloat(document.getElementById("price").value);
  
  // calculate duration
  duration = distance / speed;
  
  
  // calculate fuel consumed
  fuelConsumed = duration * mileage;
  
  
  // calculate fuel cost
  cost = fuelConsumed * price;
  
  
  distance = distance.toFixed(2);
  fuelConsumed = fuelConsumed.toFixed(2);
  cost = cost.toFixed(2);
  
  // convert duration to hours and minutes
  hours = parseInt(duration);
  minutes = parseInt((duration - hours) * 60);
  
  // format minutes to 2 digits
  if(minutes < 10) {
    minutes = "0" + minutes;
  }
  
  
  if(routeCount == 0) {
    table.rows[routeCount].cells[0].innerHTML = '<span class="small-caps">from</span>&nbsp;' + departName + '<br><span class="small-caps">to</span>&nbsp;' + arriveName;
    
    table.rows[routeCount].cells[1].innerHTML = distance;
    
    table.rows[routeCount].cells[2].innerHTML = hours + '<span class="small-caps">h</span>&nbsp;' + minutes + '<span class="small-caps">m</span>';
    
    table.rows[routeCount].cells[3].innerHTML = fuelConsumed;
    
    table.rows[routeCount].cells[4].innerHTML = cost;
    
    // update totals
    totals.rows[0].cells[1].innerHTML = distance;
    
    totals.rows[0].cells[2].innerHTML = hours + '<span class="small-caps">h</span>&nbsp;' + minutes + '<span class="small-caps">m</span>';
    
    totals.rows[0].cells[3].innerHTML = fuelConsumed;
    
    totals.rows[0].cells[4].innerHTML = cost;
    
    routeCount++;
  }
  else {
    row = table.insertRow(routeCount);
//  
//  if(routeCount == 0) {
//    table.deleteRow(routeCount + 1);
//  }
//  
//  row = table.insertRow(lastRow - 1);
    col1 = row.insertCell(0);
    //var textNode = document.createTextNode(strRoute[intRouteCounter-1]);
    //detail.appendChild(textNode);
    col1.innerHTML = '<span class="small-caps">from</span>&nbsp;' + departName + '<br><span class="small-caps">to</span>&nbsp;' + arriveName;
    

    col2 = row.insertCell(1);
    //var textNode = document.createTextNode(distance);
    col2.innerHTML = distance;
    

    col3 = row.insertCell(2);
    //var textNode = document.createTextNode(hours + '<span class="small-caps">h</span>&nbsp;' + minutes + '<span class="small-caps">m</span>');
    col3.innerHTML = hours + '<span class="small-caps">h</span>&nbsp;' + minutes + '<span class="small-caps">m</span>';

    
    col4 = row.insertCell(3);
    //var textNode = document.createTextNode(fuelConsumed);
    col4.innerHTML = fuelConsumed;

    
    col5 = row.insertCell(4);
    //var textNode = document.createTextNode(cost);
    col5.innerHTML = cost;
    
    // update totals
    // get previous values
    totalDistance = totals.rows[0].cells[1].innerHTML;
    totalDuration = totals.rows[0].cells[2].innerHTML;
    totalFuel = totals.rows[0].cells[3].innerHTML;
    totalCost = totals.rows[0].cells[4].innerHTML;
    
    // convert to numbers
    totalDistance = parseFloat(totalDistance);
    
    totalDuration = totalDuration.replace('<span class="small-caps">h</span>&nbsp', '');
    totalDuration = totalDuration.replace('<span class="small-caps">m</span>', '');
    totalDuration = totalDuration.split(';');
    totalHours = parseInt(totalDuration[0]);
    totalMinutes = parseInt(totalDuration[1]);
    totalMinutes = (totalHours * 60) + totalMinutes;
    //alert(totalMinutes);
    
    totalFuel = parseFloat(totalFuel);
    
    totalCost = parseFloat(totalCost);
    
    // add current values
    totalDistance = totalDistance + parseFloat(distance);
    
    totalMinutes = totalMinutes + parseFloat(duration * 60);
    
    //convert back to hours and minutes
    totalHours = parseInt(totalMinutes / 60);
    totalMinutes = totalMinutes - (totalHours * 60);
    totalMinutes = parseInt(totalMinutes);
    
    // format minutes to 2 digits
    if(totalMinutes < 10) {
      totalMinutes = "0" + totalMinutes;
    }
    
    
    totalFuel = totalFuel + parseFloat(fuelConsumed);
    
    totalCost = totalCost + parseFloat(cost);
    
    
    // write totals to DOM
    totals.rows[0].cells[1].innerHTML = totalDistance.toFixed(2);
    
    totals.rows[0].cells[2].innerHTML = totalHours + '<span class="small-caps">h</span>&nbsp;' + totalMinutes + '<span class="small-caps">m</span>';
    
    totals.rows[0].cells[3].innerHTML = totalFuel.toFixed(2);
    
    totals.rows[0].cells[4].innerHTML = totalCost.toFixed(2);
    
    
    routeCount++;
  }
}


function delRoute() {
  
  if(routeCount == 1) {
    table.rows[0].cells[0].innerHTML = '-';
    
    table.rows[0].cells[1].innerHTML = '0.00';
    
    table.rows[0].cells[2].innerHTML = '0<span class="small-caps">h</span>&nbsp;00<span class="small-caps">m</span>';
    
    table.rows[0].cells[3].innerHTML = '0.00';
    
    table.rows[0].cells[4].innerHTML = '0.00';
    
    // update totals
    totals.rows[0].cells[1].innerHTML = '0.00';
    
    totals.rows[0].cells[2].innerHTML = '0<span class="small-caps">h</span>&nbsp;00<span class="small-caps">m</span>';
    
    totals.rows[0].cells[3].innerHTML = '0.00';
    
    totals.rows[0].cells[4].innerHTML = '0.00';
    
    routeCount--;
  }
  else if(routeCount > 1) {
    routeCount--;
    
    // get data to be deleted
    distance = table.rows[routeCount].cells[1].innerHTML;
    duration = table.rows[routeCount].cells[2].innerHTML;
    fuelConsumed = table.rows[routeCount].cells[3].innerHTML;
    cost = table.rows[routeCount].cells[4].innerHTML;
    
    // get totals
    totalDistance = totals.rows[0].cells[1].innerHTML;
    totalDuration = totals.rows[0].cells[2].innerHTML;
    totalFuel = totals.rows[0].cells[3].innerHTML;
    totalCost = totals.rows[0].cells[4].innerHTML;
    
    
    // convert to both to numbers
    distance = parseFloat(distance);
    
    duration = duration.replace('<span class="small-caps">h</span>&nbsp', '');
    duration = duration.replace('<span class="small-caps">m</span>', '');
    duration = duration.split(';');
    hours = parseInt(duration[0]);
    minutes = parseInt(duration[1]);
    minutes = (hours * 60) + minutes;
    //alert(totalMinutes);
    
    fuelConsumed = parseFloat(fuelConsumed);
    
    cost = parseFloat(cost);
    
    //---------------------------
    
    totalDistance = parseFloat(totalDistance);
    
    totalDuration = totalDuration.replace('<span class="small-caps">h</span>&nbsp', '');
    totalDuration = totalDuration.replace('<span class="small-caps">m</span>', '');
    totalDuration = totalDuration.split(';');
    totalHours = parseInt(totalDuration[0]);
    totalMinutes = parseInt(totalDuration[1]);
    totalMinutes = (totalHours * 60) + totalMinutes;
    //alert(totalMinutes);
    
    totalFuel = parseFloat(totalFuel);
    
    totalCost = parseFloat(totalCost);
    
    //-----------------------------
    
    // subtract values
    totalDistance = totalDistance - distance;
    
    totalMinutes = totalMinutes - minutes;
    
    //convert back to hours and minutes
    totalHours = parseInt(totalMinutes / 60);
    totalMinutes = totalMinutes - (totalHours * 60);
    totalMinutes = parseInt(totalMinutes);
    
    totalFuel = totalFuel - fuelConsumed;
    
    totalCost = totalCost - cost;
    
    // write totals to DOM
    totals.rows[0].cells[1].innerHTML = totalDistance.toFixed(2);
    
    totals.rows[0].cells[2].innerHTML = totalHours + '<span class="small-caps">h</span>&nbsp;' + totalMinutes + '<span class="small-caps">m</span>';
    
    totals.rows[0].cells[3].innerHTML = totalFuel.toFixed(2);
    
    totals.rows[0].cells[4].innerHTML = totalCost.toFixed(2);
    
    // delete the row
    table.deleteRow(routeCount);
  }
  else {
    alert("There aren't any routes to delete!");
  }
}

