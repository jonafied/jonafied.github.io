$(document).ready(function(){
	$('#inputService').on('keydown', function(e){
		if(e.keyCode == 13){
			$('#newpageform').submit()
		}
	})
})