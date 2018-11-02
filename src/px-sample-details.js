"use strict";/**
 * @license
 * Copyright (c) 2018, General Electric
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){
Polymer({
is:"px-sample-details",
properties:{
	dropItems:{
		 type:Array,
		 value: function value(){
			let now = new Date();

			let onejan = new Date(now.getFullYear(), 0, 1);

			var week = 0;

			week = Math.ceil( (((now - onejan) / 86400000) + onejan.getDay()) / 7 );

			var stringent = "FW" + week;

			var damphair = []			
			damphair[0] = { "key" : String(week), "val" : stringent }
			for (var i = 1;i < 7;i++) {
			stringent = "FW" + String(week-i);

			damphair[i] = { "key" : String(week-i), "val" : stringent }
			if (i===1)
			{
			damphair[i] = { "key" : String(week-i), "val" : stringent 	, "selected": "true"}
			}
			
			}
			console.log(damphair);

			return damphair;

								}
	 },selected:{
type:String,
value : "0"
}},handleTable: function(e)
{
	
	this.tableData = e.detail.response
		var i;
			for (i = 0; i < e.detail.response.length; i++) { 
				this.tableData[i].Labor = Number(this.tableData[i].Labor);
				this.tableData[i].Rework = Number(this.tableData[i].Rework);
				} 
	this.colOrder = [{"name":"WO","path":"WO","editable":false,"id":"first[string]", "flexGrow":0.3},
					{"name":"Material","path":"Material","editable":false,"id":"second[string]", "flexGrow":0.2},
					{"name":"Description","path":"Material Description","editable":false,"id":"third[string]", "flexGrow":1.5},
					{"name":"Labor","path":"Labor","editable":false, "flexGrow":0.15, "id":"Labor[number]", "type": "number",
					"renderer": "px-data-grid-number-renderer",
					"rendererConfig" :
					{	
						"displayFormat": '0,0[.]00 $',
						"displayCulture":'en-US',
						"displayIsCurrency":true,
						
					}},
					{"name":"Direct M.","path":"Direct Material","editable":false,"id":"fifth[string]", "flexGrow":0.15, "rendererConfig" :{ "displayIsCurrency":true}},
					{"name":"Rework","path":"Rework","editable":false,"id":"sixth[string]", "flexGrow":0.15, "rendererConfig" :{ "displayIsCurrency":true}},
					{"name":"Ext Op","path":"External Services","editable":false,"id":"seventh[string]", "flexGrow":0.15, "rendererConfig" :{ "displayIsCurrency":true}},
					{"name":"Sum Variance","path":"Sum_Var","editable":false,"id":"eighth[string]", "flexGrow":0.15, "rendererConfig" :{ "displayIsCurrency":true}}]
	
},
selectChanged: function(e)
{	
	this.$.tabl.url = "https://fbororestapi.run.aws-usw02-pr.ice.predix.io/VarTab/"+String(this.$.Drop.selected)+"/";
	this.$.tabl.generateRequest();
},
_onActiveItemChanged: function(e) {
          this.$.grid.detailsOpenedItems = [e.detail.value];
        }
})
})();
//# sourceMappingURL=px-sample-layout.js.map
