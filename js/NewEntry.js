//Requires KeyManager.js
var NewEntry = {
	init:function() {
		//Get the article element
		var jModule = $("article.new_entry");
		var jForm = jModule.find("form#new_entry");
		var jDate = jForm.find("input.reference_date");
		var jTime = jForm.find("input.reference_time");
		var jContent = jForm.find("textarea.content_block");
		var jSubmit = jForm.find("input.submit");
		var jCancel = jForm.find("input.cancel");
		if (jModule.length == 0) {
			//Create one
			//Add it to the jModule
		}
		jCancel.click(function() {
			//Clear the form and hide the entry form
			jForm[0].reset();
			jModule.hide('fast');
		});
		
	}
}
