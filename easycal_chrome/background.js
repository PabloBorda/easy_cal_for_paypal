alert("EASY CAL-TroubleShooting extension active. Visit paypal.com and check the cal log on the extension button. ");
// Regex-pattern to check URLs against. 
// It matches URLs like: http[s]://[...]stackoverflow.com[...]
var urlRegex = /^https?:\/\/(?:[^./?#]+\.)?paypal\.com/;

// A function to use as callback
function doStuffWithDom(domContent) {
	alert(domContent);
}
chrome.storage.local.set({allcals: new Array()}, function() {
          console.log('Value is set to ' + []);
        });
		
		
