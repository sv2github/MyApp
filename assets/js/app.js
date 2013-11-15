//On ready function - takes in data on click from text area and assigns it to variable 's' and the value is passed on from the TTS API gets rendered to HTML
//download_url and download_box

$(document).ready(function() {
	$('#say_submit').on('click', function() {
		var s = $('#say_text').val();

		$("#download_url").val(getTextToSpeechURL(s));
		$("#download_box").slideDown();

		$("#test").load("http://www.tts-api.com/tts.mp3?q=" + encodeURIComponent(s) + "&return_url=1, <pre>");
	});
});

//function to take the parameter 's' and process it using the free API
var getTextToSpeechURL = function(s) {
	// var mp3link= "http://tts-api.com/tts.mp3?q=" + encodeURIComponent(s);
	var link= "http://tts-api.com/tts.mp3?q=" + encodeURIComponent(s) + "&return_url=1";
		return link;
};


