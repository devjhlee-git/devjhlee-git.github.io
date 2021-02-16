var dialog = (function(obj) {
	obj.init();
	$(obj.onLoad);
	return obj;
})((function(){
var $dialog = $('<div class="dialog"></div>');
return {
	init: function(){

	},
	onLoad: function(){
		$("body").prepend($dialog);
		$dialog.dialog({
			autoOpen: false,
		});
	},
	set: function(option){
		$dialog.dialog(option);
	},
	open: function(body){
		$dialog.html(body);
		$dialog.dialog( "open" );
	},
	close: function(){
		$dialog.dialog( "close" );
	},
	get: function(){
		return $dialog;
	}
	}
})());