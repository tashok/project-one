 $(document).ready(function()  {
			
		$('.mani').detach().prependTo('.bodywraper');/**/
		$(".framewraper").css({'width':'0px'}).hide();
		$(".menu_scroll").makeFloat({x:0,y:0});
		$(".mani").makeFloat({x:-18,y:200});
		var test= $(".widget").width();
		//Popup window
		$.fn.ceebox();// Enabling ceebox on document load
		$("#ctmz").click(function(){
				$.fn.ceebox.popup("<a href='custom.html' title='Customize' rel='iframe'></a>","");
		});
		
		// Widget layout with drag and drop
		$(".column").sortable({
		connectWith: '.column',
		handle: 'h3',
		cursor: 'move',
		placeholder: 'placeholder',
		forcePlaceholderSize: true,
		opacity: 0.4,
		start: function(){ $('.win_bg').append("<div class='temp_div' style='position:absolute;bottom:0;right:0;height:100%;width:100%;'></div>");},
		stop: function(event, ui){
			$('.temp_div').remove();
			$(ui.item).find("h3").click();
			var sortorder='';
			$(".column").each(function(){
				var itemorder=$(this).sortable('toArray');
				var columnId=$(this).attr('id');
				sortorder+=columnId+'='+itemorder.toString()+'&';
							
				});
			}
		
		}).disableSelection();
	
		// handling widget - maximizing and minimizing
		$(".min").hide();
		$(".max").show();
	
		$(".min").click(function() {
			
				$(this).parents(".widget").find(".max").show();
				$(this).parents(".widget").find(".min").hide();
				$(this).parents(".widget").find("iframe").animate( {height:"170px",width:"100%" },{queue:false, duration:450});
				$(this).parents(".column").animate({width:"48%"},{queue:false, duration:450});
				$(this).parents(".widget").animate({width:test,height:"220px" },{queue:false, duration:450});
				$(this).parents(".column").find(".widget").siblings(".widget").show(450);
				$(this).parents(".column").siblings(".column").show(450);	  
				$(this).parents(".cont_wrap").animate({height:"100%"});	
				$(".column").sortable('enable');
				$(this).parents(".widget").find("h3").css({'cursor':'move'});	
			});
		$(".max").click(function() {
				$(this).parents(".widget").find(".min").show();
				$(this).parents(".widget").find(".max").hide()		
				$(this).parents(".widget").find("iframe").animate({height:$(this).parents(".widget:first").find("iframe").contents().find("body").height(),width:"100%"});
				$(this).parents(".column").animate({width:"98%"},{queue:false, duration:450});
				$(this).parents(".widget").animate({width:"100%",height:"100%" },{queue:false, duration:450});
				$(this).parents(".column").find(".widget").siblings(".widget").hide(80);
				$(this).parents(".column").siblings(".column").hide(80);
				$(this).parents(".cont_wrap").animate({height:"100%"});
				$(".column").sortable('disable');
				$(this).parents(".widget").find("h3").css({'cursor':'default'});			
			});
		$(".refresh").click(function(){$(this).parents(".widget").find("iframe").attr({src: $(this).parents(".widget").find("iframe").attr("src")}) });
			
		//menu bar toggling 
		$('.mani').toggle(function(){
			$(".menu_wrap").animate({width: '0%'});
			$(".menu_scroll").animate({width: 'toggle'});
			if($(".framewraper").width()>20){
			$(".framewraper").animate({width: '97.5%'});
			}else{
			$(".bodywraper").animate({width: '97.5%'});
			}
			iResize();
			
		},
		function(){
			$(".menu_wrap").animate({width: '18%'},550);
			$(".menu_scroll").animate({width: 'toggle'},"fast");
			if($(".framewraper").width()>20){
			$(".framewraper").animate({width:'78.5%'});
			}else{
			$(".bodywraper").animate({width:'78.5%'});
			}
			iResize();
		});
		
		//bodywraper toggling
		$("#home").click( function(){
			homeclick();
		});
		
		$(".tab_menu ul li").click(function(){
			$(this).addClass('active');
			$(this).siblings("li").removeClass('active') }
		);
		
});//End of document ready
 function menuclik(){
	 		$(".bodywraper").animate({opacity:0,width:'0%'}, 500, function() {
      		$(".framewraper").animate({opacity:1,width:'78.5%'}, 500);
			iResize();
			$(this).css({'width':'0px'}).hide();
			$('.mani').detach().prependTo('.framewraper');
			});
						
}    		
function homeclick(){
			$(".framewraper").animate({opacity:0,width:'0%'}, 500, function() {
      		$(".bodywraper").animate({opacity:1,width:'78.5%'}, 500);
			$(this).css({'width':'0px'}).hide();
			$('.mani').detach().prependTo('.bodywraper'); 
			});
}

