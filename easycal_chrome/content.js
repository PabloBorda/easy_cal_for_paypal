// Listen for messages

//alert("load content");

function find_cal_in_current_page(){
	  var docu = document.documentElement.innerHTML;
      var calcpos = docu.indexOf("calc=");
	  var url = window.location.href; 
	  var cal = docu.substr(calcpos,18).substr(5,16);
	  if (cal[cal.length-1]=="&"){
		cal = cal.substr(0,(cal.length-1-1));
	  }
	  if (cal.length < 4){
		  return [(new Date()).toG
tring(),"nocal",url];
		  } else {
			  if (cal.length>0)
			  
				return [(new Date()).toG
tring(),cal,url];
    			}

}


var update_cal_list = function() {
	  var cal = find_cal_in_current_page();

	    
	   chrome.storage.local.get(['allcals'], function(result) {
          result['allcals'].push(cal);
		 // alert("result added cal" + JSON.stringify(result['allcals']));
		  chrome.storage.local.set({allcals:result['allcals'] }, function() {
            console.log('Value is set to ' + JSON.stringify(result['allcals']));
          });  
		
		  
        });

	  
	  
  }

$(document).ready(function(){
	//alert("new cal appen to list");
	update_cal_list();
	

	

});



