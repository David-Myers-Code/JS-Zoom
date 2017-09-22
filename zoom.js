jQuery(document).ready(function($){
	var zoom = 1;
	
	$('#zoom-minus').click(function(){
		
		if(zoom <= 1)
		{
			zoom = 1;
		}
		else{
			zoom = zoom - .05;
		}
		
		$('.fl-page-header-primary').css("zoom", zoom);
		$('.fl-page-content').css("zoom", zoom);
		$('footer').css("zoom", zoom);		
			});
	
	$('#zoom-plus').click(function(){
		
		if(zoom >= 1.2)
		{
			zoom = 1.2;
		}
		else{
			zoom = zoom + .05;
		}
		
		$('.fl-page-header-primary').css("zoom", zoom);
		$('.fl-page-content').css("zoom", zoom);
		$('footer').css("zoom", zoom);
	
	});


});
