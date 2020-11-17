function copy_cals(containerid){
	//alert("copyclicked");
	if (document.selection) {
		var range = document.body.createTextRange();
		range.moveToElementText(document.getElementById(containerid));
		range.select().createTextRange();
		document.execCommand("copy");
  } else if (window.getSelection) {
    var range = document.createRange();
    range.selectNode(document.getElementById(containerid));
    window.getSelection().addRange(range);
    document.execCommand("copy");
  //  alert("Text has been copied, now paste in the text-area")
  }
	
}



function cals_from_content_script(){
	
	chrome.storage.local.get(['allcals'], function(result) {
		
		
          	$("#list_of_cals").append(JSON.stringify(result['allcals']));
        });


	
}




document.addEventListener('DOMContentLoaded', function() {
		
	$("#idcopy").on('click',function(){
		 copy_cals('list_of_cals');
		
		
	});
	cals_from_content_script();

	
}, false);
	
	
