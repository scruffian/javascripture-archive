( function ( $ ) {

	/*Word panel*/
	function initializeWordPanel(spanObject) {
		if ( ! spanObject.data('lemma') ) {
			return false;
		}
		var strongsNumberArray = spanObject.data('lemma').split(' ');
		var strongsNumberPrefix = '';
		var strongsNumberDisplay = '';
		var lemma = '';
		var strongsDef = '';
		var kjvDef = '';
		var englishWord = '';
		$('.control-panel .duplicated').remove();
		var infoObject;
		$.each(strongsNumberArray, function(i,strongsNumber) {
			if(strongsNumber !== 'added' && strongsNumber !== 'trans-change' ) {
				strongsNumberDisplay = strongsNumber;
				/*convert*/
				osidStrongsNumber = strongsNumber;
	/*			strongsNumberPrefix = strongsNumber.substring(0,1);
				if(strongsNumberPrefix==="H") {
					osidStrongsNumber = strongsNumberPrefix + strongsNumber.substring(2,strongsNumber.length);
				} else {
					osidStrongsNumber = strongsNumberPrefix + strongsNumber.substring(1,strongsNumber.length);
				}*/
				lemma = stripPointing(strongsDictionary[osidStrongsNumber]["lemma"]);
				strongsDef = strongsDictionary[osidStrongsNumber]["strongs_def"];
				kjvDef = strongsDictionary[osidStrongsNumber]["kjv_def"];
				englishWord = spanObject.text();
				infoObject = $('.control-panel .template').clone().removeClass('template').addClass('duplicated');
				infoObject.appendTo('#wordControlPanel .control-panel')
				infoObject.find('.wordControlPanelStrongsNumber').addClass(strongsNumberDisplay).text(strongsNumberDisplay);
				infoObject.find('.wordControlPanelLemma').text(lemma);
				infoObject.find('.wordControlPanelEnglish').text(englishWord);
				infoObject.find('.wordControlPanelStrongsDef').text(strongsDef);
				infoObject.find('.wordControlPanelKJVDef').text(kjvDef);
			}
	
			var roots = '';
			if(typeof(strongsObject[strongsNumber]) != "undefined"){
		        $.each(strongsObject[strongsNumber], function(index,rootNumber){
		        	if ( rootNumber.substring( 0, 1 ) === "H" ) {
			        	language = 'hebrew';
		        	}
		        	if ( rootNumber.substring( 0, 1 ) === "G" ) {
			        	language = 'greek';
		        	}
	    	        roots += '<a href="#search='+rootNumber+'" class="' + rootNumber + ' word-tree" data-lemma="' + rootNumber + '" data-language="' + language + '">'+rootNumber+'</a> ';
	        	});
			}
			var branches = '';

			$.each(strongsObject, function(strongsObjectKey, strongsObjectRoot){
				$.each(strongsObjectRoot, function(strongsObjectRootKey,strongsObjectRootValue){
					if(strongsObjectRootValue==strongsNumber){
			        	if ( strongsObjectKey.substring( 0, 1 ) === "H" ) {
				        	language = 'hebrew';
			        	}
			        	if ( strongsObjectKey.substring( 0, 1 ) === "G" ) {
				        	language = 'greek';
			        	}
						branches += '<a href="#search='+strongsObjectKey+'" class="'+strongsObjectKey+' word-tree" data-lemma="' + strongsObjectKey + '"  data-language="' + language + '">' + strongsObjectKey + '</a> ';
					}
				});
			});
			var wordTreeRoots = '';
			if(roots === ''){
				wordTreeRoots += '<p>no roots</p>';
			} else {
				wordTreeRoots += 'roots: ' + roots ;
			}
			var wordTreeBranches = '';
			if(branches === ''){
				wordTreeBranches += '<p>no branches</p>';
			} else {
				wordTreeBranches += 'branches: ' + branches;
			}
			infoObject.find('#wordTreeRoots').html( wordTreeRoots );
			infoObject.find('#wordTreeBranches').html( wordTreeBranches );

			
			var strongsInt = parseInt(strongsNumber.substring(1,strongsNumber.length), 10);

			var newColor = getStrongsColor( strongsInt );
			var strongsStyle = getStrongsStyle( strongsNumber, newColor );
	
			$('#wordControlPanel').find('style').html( strongsStyle );

		});
	}

	$(document).on( 'click', '#verse ol > li span', function () {
		initializeWordPanel($(this));
	});

} )(jQuery);
