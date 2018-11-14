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
 * Unless required by applicable law or agreed to in writ ing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){Polymer({is:"px-sample-app",properties:{/**
       * Used by the px-app-nav to automatically select the first item.
       * @property selected
       */selected:{type:Array,value:function value(){return["dashboard"]}},/**
       * Used by the px-context-browser and px-breadcrumbs as the available items array.
       * @property items
       */items:{type:Array,value:function value(){return[{label:"Wireline Services",id:"Wireline",children:[{label:"United Kingdom",id:"UK",children:[{label:"Farnborough",id:"FB"}]}]}]}},/**
       * Used by the px-context-browser to select an asset in the hierarchy.
       * @property selectedRoute
       */selectedRoute:{type:Array,value:function value(){return["Wireline","UK","FB"]},observer:"getSelection"},/**
       * Used by the px-context-browser to select an asset in the hierarchy.
       * Used by the px-context-browser to select an asset in the hierarchy.
       * @property selectedValues
       *selectedKeys:{type:Array,value:function value(){return["1","3"]},observer:"getWeek"},/**
       * Used as the title of the dashboard page.
       * @property selectedAsset
       */selectedAsset:{type:String,value:""},/**  
       * @property selectedWeek
	   */selectedWeek:{type:String,value:""}},/**
     * Used by the dom-if to test equality.
     * @param {Array} route
     * @param {String} string
     */isEqual:function isEqual(route,string){return route[0]===string},/**
     * Gets the selected asset from the context browser
     * to use as the title of the dashboard page.
     */getSelection:function getSelection(newValue){this.selectedAsset=this.$.cb.selected.label},
		selectChanged: function(e)
			{
	console.log("FW" + this.$.Drop.selected + " has been selected");
	this.selectedWeek = Number(this.$.Drop.selected);
	
			}
		
		})})();
//# sourceMappingURL=px-sample-app.js.map
	   //* //@property selecta
	   //*///selecta:{type:Array,value:function value(){
	//	   //return["1"]},observer:"getWeek"},