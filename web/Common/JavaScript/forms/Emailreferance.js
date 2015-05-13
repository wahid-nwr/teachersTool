/*
 * Ext JS Library 2.2.1
 * Copyright(c) 2006-2009, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://extjs.com/license
 */
function getEmailreferancePanel(){
	var store = getEmailreferanceStore();
	var emailreferanceGrid = getEmailreferanceGrid(store);
	var search = getEmailreferanceStore(store);
	containerPanel = new Ext.Panel({
		id:'emailreferanceDetail',
		//frame: true,
		title: 'emailreferance List',
		
		autoHeight : true,
		layout: 'fit',
		items: [
			emailreferanceGrid
		],
		tbar: [
	            'Search: ', ' ',
	            getSearchField(store)
	        ],
		 dockedItems: [{
			xtype: 'pagingtoolbar',
			dock: 'bottom',
			store: store,
           displayInfo: true
        }],
        buttons:[{
			text:"ADD",
				handler:function() {
					var tabpanel = Ext.get('docs-emailreferancePanel');
					var emailreferanceAddForm = getEmailreferanceAddForm(tabpanel,store);
					//tabpanel.remove(0);
					//tabpanel.add(emailreferanceAddForm);
					//tabpanel.doLayout();                    
				}
	  	},{
			text:"Cancel",
			handler:function(){
				var tabpanel = Ext.get('docs-emailreferancePanel');				
				tabpanel.ownerCt.remove(tabpanel);
				tabpanel.destroy();
			}
		}]
	});
	
	var tabpanel = Ext.get('docs-emailreferancePanel');
	tabpanel.on('resize',function(){
		emailreferanceGrid.setSize(tabpanel.getSize());
		emailreferanceGrid.doLayout();
	});
        
	return containerPanel;
}
function getEmailreferanceAddForm(tabpanel,store)
{
	
	var extjsWindow = new Ext.Window({
		layout:'card',
		activeItem: 0,
		width:400,
		height:300,
		modal:true,
		closable:true,
		minimizable:true,
		maximizable:true,
		autoScroll:true
	});
	
	var emailreferanceAddForm = Ext.create('Ext.FormPanel',{
        url:    'emailreferanceAction.csmp?method=addEmailreferance',
        id:     'emailreferanceAddForm',
        layout: 'form',
        //renderTo:Ext.getBody(),
        frame: true,
        title: 'Add Emailreferance',
        closable: true,
        autoScroll:true,
        items: [
            Ext.create('Ext.form.FieldSet',{
                title: 'Emailreferance Information',
                defaultType: 'textfield',
                items: getEmailreferanceFieldSet()
            })
        ],
		
        buttons: [{
            text: 'Save',
            scope: emailreferanceAddForm,
            handler: function() {
            	emailreferanceAddForm.getForm().submit({
                    success: function(f,a) {
                        Ext.Msg.alert('Success', 'Information saved');
                        //tabpanel.remove(0);
                        extjsWindow.close();
                        store.load();
                        //tabpanel.add(getEmailreferancePanel());
                        //tabpanel.doLayout();                                       
                    },
                    failure: function(f,a){
                        Ext.Msg.alert('Warnning', 'Error occured in previous action');
                    }
                });
            }
        },{
            text: 'Reset',
            scope: emailreferanceAddForm,
            handler: function() {
                Ext.getCmp('emailreferanceAddForm').getForm().reset();                                
            }
        },{
        	text: 'Back',
        	scope: emailreferanceAddForm,
        	handler: function(){
        		//tabpanel.remove(0);
        		extjsWindow.close();
        		store.load();                
                //tabpanel.add(getEmailreferancePanel());
                //tabpanel.doLayout(); 
        	}
        }]
        
    });
	extjsWindow.add(emailreferanceAddForm);
	extjsWindow.show();
	return emailreferanceAddForm;
}
function getEmailreferanceFieldSet()
{
	var fieldSet = [
		{ xtype: 'hidden',name:'componentId', fieldLabel: 'componentId' }, 
			{ xtype: 'textfield',name:'companyEmailAddress', fieldLabel: 'companyEmailAddress' }, 
			{ xtype: 'textfield',name:'refDtl', fieldLabel: 'refDtl' }, 
			{ xtype: 'numberfield',name:'emailGroupId',fieldLabel: 'emailGroupId',emptyText:'0'}];
	/* example set
	[{ xtype: 'datefield',name:'date',fieldLabel: 'Date',emptyText:'Enter Date',readOnly:true},
     { xtype: 'textfield',name:'code', fieldLabel: 'Code' },
     { xtype: 'textarea',name:'desc', fieldLabel: 'Description',width:100 },
     { xtype: 'textfield',name:'session', fieldLabel: 'Session' },
     { xtype: 'textfield',name:'location', fieldLabel: 'Location' },
     { xtype: 'textfield',name:'doctor', fieldLabel: 'Doctor Name' }]
	*/
	return fieldSet;
}
function getEmailreferanceGrid(store)
{
	// create the grid
    var emailreferanceGrid = Ext.create('Ext.grid.GridPanel',{
    	id:'emailreferanceGrid',
        store: store,
        columns: getEmailreferanceColumns(),
        viewConfig: {
			forceFit: true
		},
		
		stripeRows : true,
		autoHeight : true,
		split: true,
		region: 'north'
    });
    
    var rowData = null;
    emailreferanceGrid.getSelectionModel().on('select', function(rowModel, record, rowIdx, objs) {
		//get row data
    	rowData  = record;
		var tabpanel = Ext.get('docs-emailreferancePanel');
		// Basic mask:
    	var myMask = new Ext.LoadMask(tabpanel, {msg:"Please wait! Loading window..."});
    	myMask.show();
		var emailreferanceAddForm = getEmailreferanceAddForm(tabpanel,store);
		var form = Ext.getCmp('emailreferanceAddForm').getForm();
		//url:    'dcrinfoAction.csmp?method=addDcrinfo',
		//form.buttons[0].setText("Modify");
		
		form.url= 'emailreferanceAction.csmp?method=modifyEmailreferance';
		loadEmailreferanceFormData(form,rowData);
		myMask.hide();
		//alert('i::'+index);
		//set_combobox_value_from_store(getRoleFunctionStore(),form.findField('role'), 'id', index);
	});
	
	emailreferanceGrid.on('dblClick',function() {
		var tabpanel = Ext.get('docs-emailreferancePanel');
		var emailreferanceAddForm = getEmailreferanceAddForm(tabpanel,store);
		var form = Ext.getCmp('emailreferanceAddForm').getForm();
		//url:    'dcrinfoAction.csmp?method=addDcrinfo',
		form.buttons[0].setText="Modify";
		form.url= 'emailreferanceAction.csmp?method=modifyEmailreferance';
		loadEmailreferanceFormData(form,rowData);
	});
    
    store.load();
    return emailreferanceGrid;
}
function getEmailreferanceColumns()
{
	var columns = [{header: 'companyEmailAddress', width: 120, dataIndex: 'companyemailaddress', sortable: true}, 
			{header: 'refDtl', width: 120, dataIndex: 'refdtl', sortable: true}, 
			{header: 'emailGroupId', width: 120, dataIndex: 'emailgroupid', sortable: true}];
	/* sample columns
	[{header: "code", width: 120, dataIndex: 'code', sortable: true},
     {header: "description", width: 180, dataIndex: 'description', sortable: true},
     {header: "updatedby", width: 115, dataIndex: 'updatedby', sortable: true},
     //use this if item delete function is needed
     itemDeleter]
     */
	return columns;
}
function loadEmailreferanceFormData(form,row)
{
form.findField('componentId').setValue(row.data.componentId);
	form.findField('companyEmailAddress').setValue(row.data.companyemailaddress);
	form.findField('refDtl').setValue(row.data.refdtl);
	form.findField('emailGroupId').setValue(row.data.emailgroupid);
	/* sample field load
	form.findField('code').setValue(row.data.code);
	form.findField('desc').setValue(row.data.description);
	form.findField('date').setValue('aa');
	form.findField('session').setValue('aa');
	form.findField('location').setValue('aa');
	form.findField('doctor').setValue('aa');
	*/
}
// Search Field for DCR Info
/*
function getEmailreferanceSearchField(store)
{
	Ext.app.SearchField = Ext.extend(Ext.form.TwinTriggerField, {
	    initComponent : function(){
	        Ext.app.SearchField.superclass.initComponent.call(this);
	        this.on('specialkey', function(f, e){
	            if(e.getKey() == e.ENTER){
	                this.onTrigger2Click();
	            }
	        }, this);
	    },
	    validationEvent:false,
	    validateOnBlur:false,
	    trigger1Class:'x-form-clear-trigger',
	    trigger2Class:'x-form-search-trigger',
	    hideTrigger1:true,
	    width:180,
	    hasSearch : false,
	    paramName : 'searchInput',
	    onTrigger1Click : function(){
	        if(this.hasSearch){
	            this.el.dom.value = '';
	            var o = {start: 0};
	            this.store.baseParams = this.store.baseParams || {};
	            this.store.baseParams[this.paramName] = '';
	            this.store.reload({params:o});
	            this.triggers[0].hide();
	            this.hasSearch = false;
	        }
	    },
	    onTrigger2Click : function(){
	        var v = this.getRawValue();
	        if(v.length < 1){
	            this.onTrigger1Click();
	            return;
	        }
	        var o = {start: 0};
	        this.store.baseParams = this.store.baseParams || {};
	        this.store.baseParams[this.paramName] = v;
	        this.store.reload({params:o});
	        this.hasSearch = true;
	        this.triggers[0].show();
	    }
	});
		
	// A reusable error reader class for XML forms
	Ext.form.XmlErrorReader = function(){
	    Ext.form.XmlErrorReader.superclass.constructor.call(this, {
	            record : 'field',
	            success: '@success'
	        }, [
	            'id', 'msg'
	        ]
	    );
	};
	Ext.extend(Ext.form.XmlErrorReader, Ext.data.XmlReader);
	var SearchField = new Ext.app.SearchField({
        store: store,
        width:320
    })
	return SearchField;
}
*/	
function getEmailreferanceStore()
{
	var url = 'emailreferanceAction.csmp?method=promptExtEmailreferanceSearchSystemLevel';
	Ext.define('EmailreferanceModel', {
	    extend: 'Ext.data.Model',
	    fields: ['componentId'
,'companyemailaddress'
,'refdtl'
,'emailgroupid'
]
	});
	var emailreferancestore = Ext.create('Ext.data.Store', {
	    model: 'EmailreferanceModel',
	    pageSize: 20,
	    proxy: {
	        type: 'ajax',
	        url: url,
	        reader: {
	            type: 'xml',
	            record: 'Item',
	            root: 'Items'
	        }
	    }
	});
	emailreferancestore.load();
	return emailreferancestore;
}
