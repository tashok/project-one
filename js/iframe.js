$(document).ready(function()
	{
	
	// Set specific variable to represent all iframe tags.
		var iFrames = $(".resize");
	
		// Resize heights.
		function iResize()
		{
			var iFrames = $(".resize");
			// Iterate through all iframes in the page.
			for (var i = 0, j = iFrames.length; i < j; i++)
			{
				// Set inline style to equal the body height of the iframed content.
				iFrames[i].style.height = iFrames[i].contentWindow.document.body.offsetHeight + 'px';
			}
		}

		// Check if browser is Safari or Opera.
		if ($.browser.safari || $.browser.opera)
		{
			// Start timer when loaded.
			$('iframe').load(function()
				{
					setTimeout(iResize, 0);
				}
			);

			/*// Safari and Opera need a kick-start.
			for (var i = 0, j = iFrames.length; i < j; i++)
			{
				var iSource = iFrames[i].src;
				iFrames[i].src = '';
				iFrames[i].src = iSource;
			}*/
		}
		else
		{
			// For other good browsers.
			$('iframe').load(function()
				{
					// Set inline style to equal the body height of the iframed content.
					this.style.height = this.contentWindow.document.body.offsetHeight + 'px';
				}
			);
		}
		
		$( window ).resize( iResize ); /* When window is reszied this will call the iResize() to fix the height*/
		$(window).bind("scroll",iResize);/* When window is being scrolled this will call the iResize() to fix the height*/
		/* IE reacts differnet while the page get load first time, so below is javascript fix for IE to invoke the iResize function */ 
		if (window.addEventListener)
		window.addEventListener("load", iResize, false)
		else if (window.attachEvent)
		window.attachEvent("onload", iResize)
		else
		window.onload=iResize
	}
);


function iResize()
		{var iFrames = $(".resize");
			// Iterate through all iframes in the page.
			for (var i = 0, j = iFrames.length; i < j; i++)
			{
				// Set inline style to equal the body height of the iframed content.
				iFrames[i].style.height = iFrames[i].contentWindow.document.body.offsetHeight + 'px';
			}
		}
	