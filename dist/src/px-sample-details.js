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
	currentWO: {
		type:String,
		value : "20645440"
	},
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
}},
conditionalClass: function(decide) {
        return decide ? 'bad' : '';

},
conditionaldClass: function(val,counter) {
	if(val != undefined){
        var dec = Number(counter)<Number(val);
		return dec ? 'bad' : '';
	}
},
calculateDisplay: function(val, counter) {
        var dec = Number(counter)>Number(val);
		return dec ? 'none' : 'inline-flex';

},
showA: function(nr) {
	console.log(nr);
        var dec = (Number(nr)===0);
		return dec ? 'inline-flex' : 'none' ;

},
calculateDisplay2: function(val) {

		return val ? 'none' : 'inline-flex';

},
calculatenDisplay2: function(val) {

		return val ?  'inline-flex' : 'none';

},leverthis: function(arra, strongo){
	var arr = [];
	var k = 0;
	var i;
	if (strongo!=undefined)
	{
	for (i = 0; i < arra.length; i++) {
		if (arra[i].op==strongo)
		{
			arr[k] = arra[i];
			k += 1;
		};
	}
	}
	else
	{
		arr[0] = arra[0];
		
	}
	return arr;
	console.log (strongo);
},handleTable: function(e)
{
	
	this.tableData = e.detail.response
		var i;
			for (i = 0; i < e.detail.response.length; i++) { 
				this.tableData[i].Labor = Number(this.tableData[i].Labor);
				this.tableData[i].Rework = Number(this.tableData[i].Rework);
				} 
	
	
},
handleTableSelect: function(e){
	if (e.detail.path != undefined)
	{
		if (typeof e.detail.value === 'object')
		{
	if (e.detail.value.indexSplices[0].addedCount>0)
	{
		this.currentWO = e.detail.value.indexSplices["0"].object[0].WO;
	}
	}
	}
},_onActiveItemChanged: function(e) {
	if(e.target.id =='grid2')
	{
        this.$.grid2.detailsOpenedItems = [e.detail.value];
	}else{
		this.$.grid1.detailsOpenedItems = [e.detail.value];
	}
	
        },
ready: function () {
			this.colOrder = [{"name":"WO","path":"WO","editable":false,"id":"first[string]", "flexGrow":0.15},
					{"name":"Material","path":"Material","editable":false,"id":"second[string]", "flexGrow":0.2},
					{"name":"Description","path":"Material Description","editable":false,"id":"third[string]", "flexGrow":1.7},
					{"name":"Labor","path":"Labor","editable":false, "flexGrow":0.1, "id":"Labor[number]", "type": "number",
					"renderer": "px-data-grid-number-renderer",
					"rendererConfig" :
					{	
						"displayFormat": '0,0[.]00 $',
						"displayCulture":'en-US',
						"displayIsCurrency":true,
						
					}},
					{"name":"Direct M.","path":"Direct Material","editable":false,"id":"fifth[string]", "flexGrow":0.1, "rendererConfig" :{ "displayIsCurrency":true}},
					{"name":"Rework","path":"Rework","editable":false,"id":"sixth[string]", "flexGrow":0.1, "rendererConfig" :{ "displayIsCurrency":true}},
					{"name":"Ext Op","path":"External Services","editable":false,"id":"seventh[string]", "flexGrow":0.1, "rendererConfig" :{ "displayIsCurrency":true}},
					{"name":"Sum Variance","path":"Sum_Var","editable":false,"id":"eighth[string]", "flexGrow":0.1, "rendererConfig" :{ "displayIsCurrency":true}}];

			this.colto = [{"name":"Name","path":"Name","editable":false,"id":"first[string]", "flexGrow":0.15},
					{"name":"Text","path":"ctext","editable":false,"id":"third[string]", "flexGrow":1.7},
					{"name":"Labor","path":"lb","editable":false, "flexGrow":0.05, "id":"Labor[number]", "type": "number"},
					{"name":"Rework","path":"rw","editable":false,"id":"fifth[string]", "flexGrow":0.05, "rendererConfig" :{ "displayIsCurrency":false}},
					{"name":"Setup","path":"sp","editable":false,"id":"sixth[string]", "flexGrow":0.05, "rendererConfig" :{ "displayIsCurrency":false}},
					{"name":"Yield","path":"Yield","editable":false,"id":"seventh[string]", "flexGrow":0.05},
					{"name":"Scrap","path":"Scrap","editable":false,"id":"eighth[string]", "flexGrow":0.05},
					{"name":"Final","path":"Final","editable":false,"id":"ninth[string]", "flexGrow":0.05}];		
					}
})
})();
//# sourceMappingURL=px-sample-layout.js.map
