(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-328571da"],{"351f9":function(e,t,a){},"5eb2":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ex-splitter",{attrs:{minSize:300,handlerColor:"#f1f1f1",size:300}},[a("div",{staticClass:"entityTable",attrs:{slot:"panel1"},slot:"panel1"},[a("el-table",{ref:"memberTable",attrs:{data:e.tableData,height:"100%",stripe:!0,"highlight-current-row":"",border:""},on:{"current-change":e.currentRowChange}},[a("el-table-column",{attrs:{prop:"Name",label:"Name",width:"180",align:"center"}}),a("el-table-column",{attrs:{prop:"Value",label:"Value",width:"180",align:"center"}}),a("el-table-column",{attrs:{width:"180",prop:"LocalizedName",label:"LocalizeName",align:"center"}})],1)],1),a("div",{staticClass:"ide-property-panel",attrs:{slot:"panel2"},slot:"panel2"},[a("el-collapse",{staticClass:"ide-property-collapse",attrs:{value:e.collapseValue}},[a("el-collapse-item",{attrs:{title:"Enum Properties",name:"1"}},[a("el-form",{attrs:{"label-position":"right","label-width":"120px"}},[a("el-form-item",{attrs:{label:"ID"}},[a("el-input",{attrs:{size:"small",disabled:!0},model:{value:e.target.ID,callback:function(t){e.$set(e.target,"ID",t)},expression:"target.ID"}})],1),a("el-form-item",{attrs:{label:"AppID"}},[a("el-input",{attrs:{size:"small",disabled:!0},model:{value:e.target.AppID,callback:function(t){e.$set(e.target,"AppID",t)},expression:"target.AppID"}})],1),a("el-form-item",{attrs:{label:"Model Name"}},[a("el-input",{attrs:{size:"small",disabled:!0},model:{value:e.target.Text,callback:function(t){e.$set(e.target,"Text",t)},expression:"target.Text"}})],1),a("el-form-item",{attrs:{label:"SortNo"}},[a("el-input",{attrs:{size:"small",disabled:!0},model:{value:e.target.SortNo,callback:function(t){e.$set(e.target,"SortNo",t)},expression:"target.SortNo"}})],1)],1)],1),e.currentMember?a("el-collapse-item",{attrs:{title:"Enum Items 属性",name:"2"}},[a("el-form",{attrs:{"label-position":"right","label-width":"120px"}},[a("el-form-item",{attrs:{label:"Name"}},[a("el-input",{attrs:{size:"small",disabled:!0},model:{value:e.currentMember.Name,callback:function(t){e.$set(e.currentMember,"Name",t)},expression:"currentMember.Name"}})],1),a("el-form-item",{attrs:{label:"Value"}},[a("el-input-number",{attrs:{size:"small",min:0},on:{change:e.onItemValueChange},model:{value:e.currentMember.Value,callback:function(t){e.$set(e.currentMember,"Value",t)},expression:"currentMember.Value"}})],1),a("el-form-item",{attrs:{label:"LocalizedName"}},[a("el-input",{attrs:{size:"small"},on:{change:e.onItemLocalizedNameChange},model:{value:e.currentMember.LocalizedName,callback:function(t){e.$set(e.currentMember,"LocalizedName",t)},expression:"currentMember.LocalizedName"}})],1)],1)],1):e._e()],1)],1)])},l=[],n={data:function(){return{designerType:"EnumDesigner",isMouseDown:!1,tableData:[],currentMember:null,collapseValue:["1"]}},props:{target:{type:Object,required:!0}},methods:{currentRowChange:function(e,t){if(this.currentMember=e,this.collapseValue=["1","2"],!e)return this.collapseValue=["1"],!0},addMember:function(e){this.tableData.push(e),this.selectMember(this.tableData[this.tableData.length-1]),this.currentMember=e},selectMember:function(e){this.currentMember=e,this.$refs.memberTable.setCurrentRow(e)},removeCurrentMember:function(){if(!this.currentMember)return!1;var e=this.tableData.indexOf(this.currentMember);this.tableData.splice(e,1)},onItemValueChange:function(e){this.propertyChanged("Value",e)},onItemLocalizedNameChange:function(e){this.propertyChanged("LocalizedName",e)},propertyChanged:function(e,t){var a=this,r=this;$runtime.channel.invoke("sys.DesignService.ChangeEnumMember",[this.target.ID,this.currentMember.Name,e,t]).then((function(r){a.$emit("PropertyChanged",e,t)})).catch((function(e){r.$message.error(e)}))},save:function(){var e=this.target,t=this;$runtime.channel.invoke("sys.DesignService.SaveModel",[e.Type,e.ID]).then((function(e){t.$message.success("保存成功")})).catch((function(e){t.$message.error("保存失败: "+e)}))}},mounted:function(){var e=this;$runtime.channel.invoke("sys.DesignService.GetEnumItems",[this.target.ID]).then((function(t){e.tableData=t})).catch((function(e){alert(e)}))}},s=n,i=(a("d09cb"),a("2877")),o=Object(i["a"])(s,r,l,!1,null,"7d64bd69",null);t["default"]=o.exports},d09cb:function(e,t,a){"use strict";var r=a("351f9"),l=a.n(r);l.a}}]);