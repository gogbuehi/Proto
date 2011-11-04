//Requires KeyManager.js
var NewEntry = {
        jModule:null,
        jForm:null,
        jDate:null,
        jTime:null,
        jContent:null,
        jSubmit:null,
        jCancel:null,
	init:function() {
		//Get the article element
		this.jModule = $("article.new_entry");
		this.jForm = this.jModule.find("form#new_entry");
		this.jDate = this.jForm.find("input.reference_date");
		this.jTime = this.jForm.find("input.reference_time");
		this.jContent = this.jForm.find("textarea.content_block");
		this.jSubmit = this.jForm.find("input.submit");
		this.jCancel = this.jForm.find("input.cancel");
		if (this.jModule.length == 0) {
			//Create one
			//Add it to the jModule
		}
		this.jCancel.click(function() {
			//Clear the form and hide the entry form
			NewEntry.jForm[0].reset();
			NewEntry.jModule.hide('fast');
		});
		
                
                
                var jContent = $("article.content");
                jContent.each(function() {
                    $(this).click(function() {
                        NewEntry.editEntry($(this));
                    });
                });
	},
        editEntry:function(jContent) {
            this.jContent.html($(jContent).html());
            this.jModule.show('fast');
        }
}
