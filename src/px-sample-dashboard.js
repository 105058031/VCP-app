"use strict";
/**
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
 */(function(){Polymer({
	 is:"px-sample-dashboard",
properties:{
	title:{
			type:String,
			value:""},
	dropItems:{
		 type:Array,
		 value: function value(){
			let now = new Date();

			let onejan = new Date(now.getFullYear(), 0, 1);

			var week = 0;

			week = Math.ceil( (((now - onejan) / 86400000) + onejan.getDay() + 1) / 7 );

			var stringent = "FW" + week;

			var damphair = []			
			damphair[0] = { "key" : String(week), "val" : stringent, "selected": "true" }
			for (var i = 1;
 i < 6;
 i++) {
			stringent = "FW" + String(week-i);

			damphair[i] = { "key" : String(week-i), "val" : stringent }
			}
			console.log(damphair);

			return damphair;

								}
	 },
	 oneURL:{
		type: String,
		value: function value() {
		let now = new Date();

		let onejan = new Date(now.getFullYear(), 0, 1);

		var week = 0;

		week = Math.ceil( (((now - onejan) / 86400000) + onejan.getDay() + 1) / 7 );

		return "https://fbororestapi.run.aws-usw02-pr.ice.predix.io/VTStock/"+String(week)+"/";

		}
	 }},
handleResponse: function(e)
{ 	if (e.detail.response!=null)	
		{
	this.AC = String(Math.round(Number(e.detail.response["0"].ATo_Stock)/1000));
	this.SC = String(Math.round(Number(e.detail.response["0"].PTo_Stock)/1000));
	this.P = String(Math.round(Number(e.detail.response["0"].varPercent)*1000))/10;
	this.AV = String(Math.round(Number(e.detail.response["0"].absVar)/1000));
	this.NV = String(Math.round(Number(e.detail.response["0"].netVar)/1000));
	this.AP = String(Math.round(Number(e.detail.response["0"].absVar)/Number(e.detail.response["0"].PTo_Stock)*1000))/10;
		}
},
handleSelect: function(e, chart, component)
{
	console.log(e);
},
handleSelect2: function(e, chart, component)
{
	console.log(e);
},
handleChart: function(e)
{ 	if (e.detail.response!=null)	
		{
			var shodo = []
			this.ajaxResponse = []
			this.min = 0;
			this.max = 0;
		for (var row in e.detail.response)
			{
	//#this.ajaxResponse.push(String(Math.round(Number(e.detail.response["0"].ATo_Stock)/1000));
	shodo.push("FW" + String(Math.round(Number(e.detail.response[row].FW),0)));

			}
		this.categoryList = { "categories" : shodo };
		this.ajaxResponse=[{
"type":"column",
"name":"Neg",
"color":"#FFA500",
"data":
[["FW" + String(Math.round(Number(e.detail.response[0].FW),0)),-1*Number(e.detail.response["0"].negVariance)],
["FW" + String(Math.round(Number(e.detail.response[1].FW),0)),-1*Number(e.detail.response[1].negVariance)],
["FW" + String(Math.round(Number(e.detail.response[2].FW),0)),-1*Number(e.detail.response[2].negVariance)],
["FW" + String(Math.round(Number(e.detail.response[3].FW),0)),-1*Number(e.detail.response[3].negVariance)],
["FW" + String(Math.round(Number(e.detail.response[4].FW),0)),-1*Number(e.detail.response[4].negVariance)],
["FW" + String(Math.round(Number(e.detail.response[5].FW),0)),-1*Number(e.detail.response[5].negVariance)],
["FW" + String(Math.round(Number(e.detail.response[6].FW),0)),-1*Number(e.detail.response[6].negVariance)],
["FW" + String(Math.round(Number(e.detail.response[7].FW),0)),-1*Number(e.detail.response[7].negVariance)],
],
"point": {
    "events": {
        "select": function(event) {
            console.log('point selected @ ' + this.x + ', ' + this.y);
                    }
			}
		}
				}, 
{
"type":"column",
"name":"Pos",
"color":"#66CCCC",
"data":
[["FW" + String(Math.round(Number(e.detail.response[0].FW),0)),-1*Number(e.detail.response["0"].posVariance)],
["FW" + String(Math.round(Number(e.detail.response[1].FW),0)),-1*Number(e.detail.response[1].posVariance)],
["FW" + String(Math.round(Number(e.detail.response[2].FW),0)),-1*Number(e.detail.response[2].posVariance)],
["FW" + String(Math.round(Number(e.detail.response[3].FW),0)),-1*Number(e.detail.response[3].posVariance)],
["FW" + String(Math.round(Number(e.detail.response[4].FW),0)),-1*Number(e.detail.response[4].posVariance)],
["FW" + String(Math.round(Number(e.detail.response[5].FW),0)),-1*Number(e.detail.response[5].posVariance)],
["FW" + String(Math.round(Number(e.detail.response[6].FW),0)),-1*Number(e.detail.response[6].posVariance)],
["FW" + String(Math.round(Number(e.detail.response[7].FW),0)),-1*Number(e.detail.response[7].posVariance)],
] }, 
{
"type":"spline",
"color":"#FF0000",
"yAxis":1,
"name":"Variance",
"data":
[["FW" + String(Math.round(Number(e.detail.response[0].FW),0)),Math.round((-1*Number(e.detail.response["0"].varpercent)*100),1)],
["FW" + String(Math.round(Number(e.detail.response[1].FW),0)),Math.round((-1*Number(e.detail.response[1].varpercent)*100),1)],
["FW" + String(Math.round(Number(e.detail.response[2].FW),0)),Math.round((-1*Number(e.detail.response[2].varpercent)*100),1)],
["FW" + String(Math.round(Number(e.detail.response[3].FW),0)),Math.round((-1*Number(e.detail.response[3].varpercent)*100),1)],
["FW" + String(Math.round(Number(e.detail.response[4].FW),0)),Math.round((-1*Number(e.detail.response[4].varpercent)*100),1)],
["FW" + String(Math.round(Number(e.detail.response[5].FW),0)),Math.round((-1*Number(e.detail.response[5].varpercent)*100),1)],
["FW" + String(Math.round(Number(e.detail.response[6].FW),0)),Math.round((-1*Number(e.detail.response[6].varpercent)*100),1)],
["FW" + String(Math.round(Number(e.detail.response[7].FW),0)),Math.round((-1*Number(e.detail.response[7].varpercent)*100),1)],
] } ];
		}
},
dropdownChanged: function(e)
{
	console.log(this.$.zeDrop.selected);
},
selectChanged: function(e)
{
	console.log("FW" + this.$.zeDrop.selected + " has been selected");
	this.$.VAR.url = "https://fbororestapi.run.aws-usw02-pr.ice.predix.io/VarStats/"+String(this.$.zeDrop.selected)+"/";
	this.$.VAR.generateRequest();
},

attached:function attached(){this.listen(document.querySelector("#cb"),"selected-changed","updateValues")},
detached:function detached(){this.unlisten(document.querySelector("#cb"),"selected-changed")},
updateValues:function updateValues(){
	var gauges=document.querySelectorAll("px-gauge");

	//gauges.forEach(function(gauge){gauge.set("value",Math.floor(Math.random()*100))});

	var keyvalues=document.querySelectorAll("px-key-value-pair");
keyvalues.forEach(function(keyvalue){keyvalue.set("value",Math.floor(Math.random()*100))})},
ready: function() {
        //this.$.VAR.generateRequest();
		//this.$.sec.generateRequest();
		

    }
	})})();

//# sourceMappingURL=px-sample-dashboard.js.map
