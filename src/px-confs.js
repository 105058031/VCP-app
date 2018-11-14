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
is:"px-confs",
properties:{
	currentWO: {
		type:String,
		value : ""
	},currentOP: {
		type:String,
		value : ""
	},title: {
		type:String,
		value : ""
	},footer: {
		type:String,
		value : ""
	}},
ready: function () {
			this.colOrder = [{"name":"PNO","path":"pno","editable":false,"id":"first[string]", "flexGrow":0.15},
					{"name":"OP","path":"op","editable":false,"id":"second[string]", "flexGrow":0.2},
					{"name":"Text","path":"ctext","editable":false,"id":"third[string]", "flexGrow":1.7},
					{"name":"Labor","path":"lb","editable":false, "flexGrow":0.1, "id":"Labor[number]", "type": "number"},
					{"name":"Rework","path":"rw","editable":false,"id":"fifth[string]", "flexGrow":0.1, "rendererConfig" :{ "displayIsCurrency":false}},
					{"name":"Setup","path":"sp","editable":false,"id":"sixth[string]", "flexGrow":0.1, "rendererConfig" :{ "displayIsCurrency":false}}];
}
})
})();
//# sourceMappingURL=px-sample-layout.js.map
