<div id="program">
    <div id="variables">
        <table>
            <tr>
                <td>Transportation type</td>
                <td>
                    <select onchange="javascript:setRates(this.value)">
                        <option value="Speed Boat">Speed Boat</option>
                        <!-- <option value="Sea Plane">Sea Plane</option> -->
                        <option value="Dhoni">Dhoni</option>
                    </select>
                </td>
            </tr>
            
            <tr>
                <td>Speed (in Nautical Miles per Hour)</td>
                <td><input type="text" id="txtTransportSpeed" value="30.00"/></td>
            </tr>
            
            <tr>
                <td>Fuel Consumption (in Litres per Hour) </td>
                <td><input type="text" id="txtConsumptionRate" value="135.00"/></td>
            </tr>
            
            <tr>
                <td>Fuel Price (per Litre)</td>
                <td><input type="text" id="txtFuelPrice" value="16.97"/></td>
            </tr>
        </table>
    </div>

    <div id="boxLeft">
		<div id="buttons">
            <input id="addRoute" type="button" onclick="calculateValues()" value=""/>
            <input id="delRoute" type="button" onclick="removeRoute()" value=""/>
        </div>

        <div id="from" class="selects">
            <p>Select Island From</p>
            <select id="selectAtollFrom" class="selectAtolls" onchange="javascript:populateIslandFrom(this.value)">
                <option selected="selected" disabled="disabled">Select an Atoll</option>
            </select>
        
            <select id="selectIslandFrom" class="selectIslands" onchange="javascript:setValuesFrom(this.value)" disabled="disabled">
                <option>Please select an Atoll first</option>
            </select>
        </div>
        
        <div id="to" class="selects">
            <p>Select Island To</p>
            <select id="selectAtollTo" class="selectAtolls" onchange="javascript:populateIslandTo(this.value)">
                <option selected="selected" disabled="disabled">Select an Atoll</option>
            </select>
        
            <select id="selectIslandTo" class="selectIslands" onchange="javascript:setValuesTo(this.value)" disabled="disabled">
                <option>Please select an Atoll first</option>
            </select>
        </div>
    </div>
    
    <div id="results">
        <table id="tableResults">
            <thead>
            	<tr>
                    <th class="narrow">#</th>
                    <th class="widest">Route</th>
                    <th class="wide">Distance</th>
                    <th class="wider">Duration</th>
                    <th class="wide">Fuel Consumed</th>
                    <th class="wide">Fuel Cost</th>
                </tr>
            </thead>
            
            <tfoot>
            	<tr>
                    <td colspan="2">Total</td>
                    <td id="totDistance">0.00</td>
                    <td id="totDuration">0 hrs 0 mins</td>
                    <td id="totConsumption">0.00</td>
                    <td id="totCost">0.00</td>
                </tr>
            </tfoot>
            
            <tbody id="tableResultsBody">
                <tr>
                    <td>-</td>
                    <td><p>-</p></td>
                    <td>0.00</td>
                    <td>0 hrs 0 mins</td>
                    <td>0.00</td>
                    <td>0.00</td>
                </tr>
            </tbody>
        </table>
    </div>
    
    <div id="programImportantNotes">
		<b>IMPORTANT:</b>
		<ol>
			<li>Distance is in Nautical Miles.</li>
			<li>Fuel Consumed is in Litres.</li>
			<li>Default Fuel Price is set at the current petrol price in Maldivian Rufiyaa.</li>
			<li>Default Transportation Speed and Fuel Consumption Rate are approximate values.</li>
		</ol>
	</div>
</div>
