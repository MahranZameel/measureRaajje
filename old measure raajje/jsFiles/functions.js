function setRates (strTransportType)
{
	if (strTransportType == 'Speed Boat')
	{
		document.getElementById('txtTransportSpeed').value = 30.00;
		document.getElementById('txtConsumptionRate').value = 135.00;
		document.getElementById('txtFuelPrice').value = 16.97;
	}
	else if (strTransportType == 'Sea Plane')
	{
		document.getElementById('txtTransportSpeed').value = 130.00;
		document.getElementById('txtConsumptionRate').value = 273.00;
		document.getElementById('txtFuelPrice').value = 16.97;
	}
	else
	{
		document.getElementById('txtTransportSpeed').value = 9;
		document.getElementById('txtConsumptionRate').value = 35;
		document.getElementById('txtFuelPrice').value = 16.97;
	}
}

function populateSelectAtolls ()
{
	//filter atolls
	for (var arrayIndex in strAtoll)
	{
		if (!(strAtoll[arrayIndex-1] == strAtoll[arrayIndex]))
		{
			strFilteredAtoll[intAtollCounter] = strAtoll[arrayIndex];
			intAtollCounter ++;
		}
	}
	
	//populate selectAtollFrom
	document.getElementById('selectAtollFrom').options.length = 0;
	
	document.getElementById('selectAtollFrom').options[0] = new Option("Select an Atoll");
	document.getElementById('selectAtollFrom').options[0].disabled = true;
	
	var i = 1; //just a counter to reset the select list

	for (var arrayIndex in strFilteredAtoll)
	{
		document.getElementById('selectAtollFrom').options[i] = new Option(strFilteredAtoll[arrayIndex], strFilteredAtoll[arrayIndex]);
		i++;
	}
	
	//populate selectAtollTo
	document.getElementById('selectAtollTo').options.length=0;
	
	document.getElementById('selectAtollTo').options[0]=new Option("Select an Atoll");
	document.getElementById('selectAtollTo').options[0].disabled = true;
	
	var i = 1; //just a counter to reset the select list

	for (var arrayIndex in strFilteredAtoll)
	{
		document.getElementById('selectAtollTo').options[i]=new Option(strFilteredAtoll[arrayIndex], strFilteredAtoll[arrayIndex]);
		i++;
	}
}

function populateIslandFrom (selectedAtoll)
{
	document.getElementById('selectIslandFrom').options.length=0;
	
	document.getElementById('selectIslandFrom').options[0]=new Option("Select an Island");
	document.getElementById('selectIslandFrom').options[0].disabled = true;
	
	var i = 1; //just a counter to reset the select list
	
	for (var elementIndex in strAtoll)
	{
		if (strAtoll[elementIndex] == selectedAtoll)
		{
			document.getElementById('selectIslandFrom').options[i]=new Option(strIsland[elementIndex], elementIndex);
			i++;
		}
	}
	document.getElementById('selectIslandFrom').disabled = false;
}

function populateIslandTo (selectedAtoll)
{
	document.getElementById('selectIslandTo').options.length=0;
	
	document.getElementById('selectIslandTo').options[0]=new Option("Select an Island");
	document.getElementById('selectIslandTo').options[0].disabled = true;
	
	var i = 1; //just a counter to reset the select list
	
	for (var elementIndex in strAtoll)
	{
		if (strAtoll[elementIndex] == selectedAtoll)
		{
			document.getElementById('selectIslandTo').options[i]=new Option(strIsland[elementIndex], elementIndex);
			i++;
		}
	}
	document.getElementById('selectIslandTo').disabled = false;
}

function setValuesFrom (arrayIndex)
{
	strAtollFrom = strAtoll[arrayIndex];
	switch (strAtollFrom)
	{
		case "Alifu Alifu":
			strAtollFrom = "AA.";
			break;
		case "Alifu Dhaalu":
			strAtollFrom = "ADh.";
			break;
		case "Baa":
			strAtollFrom = "B.";
			break;
		case "Dhaalu":
			strAtollFrom = "Dh.";
			break;
		case "Faafu":
			strAtollFrom = "F.";
			break;
		case "Gaafu Alifu":
			strAtollFrom = "GA.";
			break;
		case "Gaafu Dhaalu":
			strAtollFrom = "GDh.";
			break;
		case "Gnaviyani":
			strAtollFrom = "Gn.";
			break;
		case "Haa Alifu":
			strAtollFrom = "HA.";
			break;
		case "Haa Dhaalu":
			strAtollFrom = "HDh.";
			break;
		case "Kaafu":
			strAtollFrom = "K.";
			break;
		case "Laamu":
			strAtollFrom = "L.";
			break;
		case "Lhaviyani":
			strAtollFrom = "Lh.";
			break;
		case "Meemu":
			strAtollFrom = "M.";
			break;
		case "Noonu":
			strAtollFrom = "N.";
			break;
		case "Raa":
			strAtollFrom = "R.";
			break;
		case "Seenu":
			strAtollFrom = "S.";
			break;
		case "Shaviyani":
			strAtollFrom = "Sh.";
			break;
		case "Thaa":
			strAtollFrom = "Th.";
			break;
		case "Vaavu":
			strAtollFrom = "V.";
			break;
	}
	strIslandFrom = strIsland[arrayIndex];
	intLatDegFrom = intLatDeg[arrayIndex];
	intLatMinFrom = intLatMin[arrayIndex];
	intLonDegFrom = intLonDeg[arrayIndex];
	intLonMinFrom = intLonMin[arrayIndex];
	strLonDirFrom = strLonDir[arrayIndex];
	//alert(strAtollFrom + strIslandFrom + intLatDegFrom + intLatMinFrom + intLonDegFrom + intLonMinFrom + strLonDirFrom);
}

function setValuesTo (arrayIndex)
{
	strAtollTo = strAtoll[arrayIndex];
	switch (strAtollTo)
	{
		case "Alifu Alifu":
			strAtollTo = "AA.";
			break;
		case "Alifu Dhaalu":
			strAtollTo = "ADh.";
			break;
		case "Baa":
			strAtollTo = "B.";
			break;
		case "Dhaalu":
			strAtollTo = "Dh.";
			break;
		case "Faafu":
			strAtollTo = "F.";
			break;
		case "Gaafu Alifu":
			strAtollTo = "GA.";
			break;
		case "Gaafu Dhaalu":
			strAtollTo = "GDh.";
			break;
		case "Gnaviyani":
			strAtollTo = "Gn.";
			break;
		case "Haa Alifu":
			strAtollTo = "HA.";
			break;
		case "Haa Dhaalu":
			strAtollTo = "HDh.";
			break;
		case "Kaafu":
			strAtollTo = "K.";
			break;
		case "Laamu":
			strAtollTo = "L.";
			break;
		case "Lhaviyani":
			strAtollTo = "Lh.";
			break;
		case "Meemu":
			strAtollTo = "M.";
			break;
		case "Noonu":
			strAtollTo = "N.";
			break;
		case "Raa":
			strAtollTo = "R.";
			break;
		case "Seenu":
			strAtollTo = "S.";
			break;
		case "Shaviyani":
			strAtollTo = "Sh.";
			break;
		case "Thaa":
			strAtollTo = "Th.";
			break;
		case "Vaavu":
			strAtollTo = "V.";
			break;
	}
	strIslandTo = strIsland[arrayIndex];
	intLatDegTo = intLatDeg[arrayIndex];
	intLatMinTo = intLatMin[arrayIndex];
	intLonDegTo = intLonDeg[arrayIndex];
	intLonMinTo = intLonMin[arrayIndex];
	strLonDirTo = strLonDir[arrayIndex];
	//alert(strAtollTo + strIslandTo + intLatDegTo + intLatMinTo + intLonDegTo + intLonMinTo + strLonDirTo);
}

function calculateValues () 
{
	fltTransportSpeed = document.getElementById('txtTransportSpeed').value;
	fltFuelConsumptionRate = document.getElementById('txtConsumptionRate').value;
	fltFuelPrice = document.getElementById('txtFuelPrice').value;
		
	fltTransportSpeed = parseFloat (fltTransportSpeed);
	fltFuelConsumptionRate = parseFloat (fltFuelConsumptionRate);
	fltFuelPrice = parseFloat (fltFuelPrice);
	
	var tbl = document.getElementById('tableResultsBody');

	
	if (!(isNaN(fltTransportSpeed)) && !(isNaN(fltFuelConsumptionRate)) && !(isNaN(fltFuelPrice)))
	{		
		if (strIslandFrom != null && strIslandTo != null)
		{
			if (intRouteCounter == 0)
			{
				var delLastRow = tbl.rows.length;
				tbl.deleteRow(delLastRow - 2);
			}

			//set Route
			strRoute[intRouteCounter] = "<p><b>From:</b> " + strAtollFrom + " " + strIslandFrom + "</p><p><b>To:</b> " + strAtollTo + " " + strIslandTo + "</p>";

			//convert degrees to minutes
			intLatMinutesFrom = (intLatDegFrom * 60) + intLatMinFrom;
			intLatMinutesTo = (intLatDegTo * 60) + intLatMinTo;
			intLonMinutesFrom = (intLonDegFrom * 60) + intLonMinFrom;
			intLonMinutesTo = (intLonDegTo * 60) + intLonMinTo;
			
			//use pythagoras theorem to calculate distance in nautical miles
			intLatMinutes = intLatMinutesFrom - intLatMinutesTo;
			
			if ((strLonDirFrom == "N" && strLonDirTo == "N") || (strLonDirFrom == "S" && strLonDirTo == "S")) {
				intLonMinutes = intLonMinutesFrom - intLonMinutesTo;
			}
			else {
				intLonMinutes = intLonMinutesFrom + intLonMinutesTo;
			}
			
			intLatMinutes = intLatMinutes * intLatMinutes;
			intLonMinutes = intLonMinutes * intLonMinutes;
			
			fltDistance[intRouteCounter] = intLatMinutes + intLonMinutes;
			fltDistance[intRouteCounter] = Math.sqrt(fltDistance[intRouteCounter]);
			fltDistance[intRouteCounter] = fltDistance[intRouteCounter].toFixed(2); // final value for distance
			
			//find duration
			fltDuration[intRouteCounter] = fltDistance[intRouteCounter] / fltTransportSpeed; // final value for duration
			
			//find fuel consumed and fuel cost
			fltFuelConsumed[intRouteCounter] = fltDuration[intRouteCounter] * fltFuelConsumptionRate; 
			fltFuelConsumed[intRouteCounter] = fltFuelConsumed[intRouteCounter].toFixed(2); // final value for fuel consumed
			
			fltFuelCost[intRouteCounter] = fltFuelConsumed[intRouteCounter] * fltFuelPrice; 
			fltFuelCost[intRouteCounter] = fltFuelCost[intRouteCounter].toFixed(2); // final value for fuel cost
			
			intRouteCounter ++;
			
			//display route and values in the table
			var lastRow = tbl.rows.length;
			
			var iteration = lastRow;
			var row = tbl.insertRow(lastRow);
			
			var no = row.insertCell(0);
			var textNode = document.createTextNode(iteration+1);
			no.appendChild(textNode);
			
			var detail = row.insertCell(1);
			//var textNode = document.createTextNode(strRoute[intRouteCounter-1]);
			//detail.appendChild(textNode);
			detail.innerHTML = strRoute[intRouteCounter-1];
			
			var distance = row.insertCell(2);
			var textNode = document.createTextNode(fltDistance[intRouteCounter-1]);
			distance.appendChild(textNode);
			
			//to convert fltDuration to HOURS and MINUTES and display them in table
			intHours = parseInt (fltDuration[intRouteCounter-1]);
			intMinutes = parseInt ((fltDuration[intRouteCounter-1] - intHours) * 60);
			
			var duration = row.insertCell(3);
			var textNode = document.createTextNode(intHours + ' hrs ' + intMinutes + ' mins');
			duration.appendChild(textNode);
			
			var consumed = row.insertCell(4);
			var textNode = document.createTextNode(fltFuelConsumed[intRouteCounter-1]);
			consumed.appendChild(textNode);
			
			var cost = row.insertCell(5);
			var textNode = document.createTextNode(fltFuelCost[intRouteCounter-1]);
			cost.appendChild(textNode);
			
			displayTotals ();
		}
		else
		{
			alert("Please select the appropriate Atoll names and Island names");	
		}
	}
	else
	{
		alert ("Please enter a number!");
	}
}



function removeRoute ()
{
	if (intRouteCounter > 0)
	{
		var tbl = document.getElementById('tableResultsBody');
		var delLastRow = tbl.rows.length;
		tbl.deleteRow(delLastRow - 1);
		intRouteCounter --;
		
		displayTotals ();
		
		if (intRouteCounter == 0)
		{
			var lastRow = tbl.rows.length;
			
			var iteration = lastRow;
			var row = tbl.insertRow(lastRow);
			
			var no = row.insertCell(0);
			var textNode = document.createTextNode('-');
			no.appendChild(textNode);
			
			var detail = row.insertCell(1);
			var textNode = document.createTextNode('-');
			detail.appendChild(textNode);
			
			var distance = row.insertCell(2);
			var textNode = document.createTextNode('0.00');
			distance.appendChild(textNode);
			
			var duration = row.insertCell(3);
			var textNode = document.createTextNode('0 hrs 0 mins');
			duration.appendChild(textNode);
			
			var consumed = row.insertCell(4);
			var textNode = document.createTextNode('0.00');
			consumed.appendChild(textNode);
			
			var cost = row.insertCell(5);
			var textNode = document.createTextNode('0.00');
			cost.appendChild(textNode);
			
			intRouteCounter = 0;
		}
	}
}

function displayTotals ()
{
	fltTotalDistance = 0;
	fltTotalDuration = 0;
	fltTotalFuelConsumed = 0;
	fltTotalFuelCost = 0;
	for (var i = 0; i < intRouteCounter; i++)
	{
		fltTotalDistance += parseFloat (fltDistance[i]);
		fltTotalDuration += parseFloat (fltDuration[i]);
		fltTotalFuelConsumed += parseFloat (fltFuelConsumed[i]);
		fltTotalFuelCost += parseFloat (fltFuelCost[i]);
	}
	
	//to convert fltTotalDuration to HOURS and MINUTES
	intHours = parseInt (fltTotalDuration);
	intMinutes = parseInt ((fltTotalDuration - intHours) * 60);
		
	//display totals
	document.getElementById('totDistance').innerHTML = fltTotalDistance.toFixed(2);
	document.getElementById('totDuration').innerHTML = intHours + ' hrs ' + intMinutes + ' mins';
	document.getElementById('totConsumption').innerHTML = fltTotalFuelConsumed.toFixed(2);
	document.getElementById('totCost').innerHTML = fltTotalFuelCost.toFixed(2);

}