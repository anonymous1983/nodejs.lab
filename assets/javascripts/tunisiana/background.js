$( function() { 
    var slideshowRunning = false,
		backgroundList = [];

    // Build the background list with href of links
    $( '#menu-vegaz a' ).each( function() { 
        backgroundList.push( { 
            src: $( this ).attr( 'href' ),
            valign: $( this ).data( 'valign' ),
			fade: 3000
         } );
     } );
		
    // Define a slideshow with overlay and pause it
	$.vegas( backgroundList[3] )
	( 'overlay', {
		opacity: 0.5
	})
	( 'pause' );

    // A short demo
    $( '#menu-vegaz a' ).click( function() { 
	
        // If the SlideShow link is clicked
        if ( $( this ).is( '#slideshow' ) ) { 
		
            // Start the SlideShow
            if ( slideshowRunning == false ) { 
                slideshowRunning = true;
				
                $( '#pause' )
					.show()
					.css( 'opacity', 0.5 )
					.html( 'PAUSE' );
					
				$.vegas( 'slideshow', { 
					delay: 5000,
					backgrounds: backgroundList,
				})
				
            // Pause the SlideShow
             } else { 
                slideshowRunning = false;
				
                $( '#pause' )
					.show()
					.css( 'opacity', 0.5 )
					.html( 'PLAY' );
					
                $.vegas( 'pause' );  
             }
            
       	// If a standard Thumbnail is clicked
         } else { 
			slideshowRunning = false;
			
            $( '#pause' ).hide();
			$( '#thumbnail' ).attr( 'src', $(this).attr('src') );

			var idx = $( this ).parent( 'li' ).index();
			$.vegas( 'stop' )( backgroundList[idx] );
         }
		 
         return false;
     } );
	 
	// Apply a border to the right thumbnail when a background is loaded
	$( 'body' ).bind( 'vegasload', function( e, bg ) {	    
	    var src = $( bg ).attr( 'src' ).replace( 'background', 'thumbnail' );
		
		$( '#menu-vegaz img' )
			.css( 'border', '1px solid #FFF' ); 
		$( 'img[src="' + src + '"]' )
			.css( 'border', '1px solid #E3001B' );
	});
 } );