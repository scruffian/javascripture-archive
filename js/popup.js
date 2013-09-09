;( function ( $ ) {
	$.fn.popup = function ( method ) {
		var $this = this;
		var methods = {
			open: function () {
				$( '.popup').popup( 'close' );
				$this.show();
			},
			close: function () {
				$this.hide();
			}
		};

		if ( methods[method] ) {
			methods[method]();
		}
	};
	$( document ).on( 'click', '.open-popup', function ( event ) {
		event.preventDefault();
		var hash = $( this ).attr( 'href' );
		$( hash ).popup( 'open' );
	} );
	$( document ).on( 'click', '.close-popup', function ( event ) {
		event.preventDefault();
		$( this ).closest('.popup').popup( 'close' );
	} );
} )( jQuery );