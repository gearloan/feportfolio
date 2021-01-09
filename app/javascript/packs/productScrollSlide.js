$(document).ready(function(){


  var animationActive = new Boolean(false);

  var waypoint_0 = new Waypoint({
    element: document.getElementById('productSlide'),
    handler: function(direction) {
      console.log('Start waypoint triggered');
      if (direction == 'up') {
        $(".slider").removeClass("active");
        animationActive = false;
      } else {
        $(".slider").addClass("active");
        animationActive = true;
      }
    },
    offset: '70%'
  });



  /**
	 * Variables
	 */
	var items = document.querySelectorAll('.item'),
		windowHeight = window.document.documentElement.clientHeight;
  /**
	 * A simple forEach() implementation for Arrays, Objects and NodeLists.
	 */
	var forEach = function ( collection, callback, scope ) {
		if ( Object.prototype.toString.call( collection ) === '[object Object]' ) {
			for ( var prop in collection ) {
				if ( Object.prototype.hasOwnProperty.call( collection, prop ) ) {
					callback.call( scope, collection[prop], prop, collection );
				}
			}
		} else {
			for ( var i = 0, len = collection.length; i < len; i++ ) {
				callback.call( scope, collection[i], i, collection );
			}
		}
	};

	/**
	 * Get the height of the `document` element
	 */
	var _getDocumentHeight = function () {
		return Math.max(
			document.body.scrollHeight,
			document.documentElement.scrollHeight,
			document.body.offsetHeight,
			document.documentElement.offsetHeight,
			document.body.clientHeight,
			document.documentElement.clientHeight
		);
	};

	/**
	 * Get the document's vertical scroll position
	 */
	var _scrollTop = function () {
		return Math.max(
			document.body.scrollTop,
			document.documentElement.scrollTop
		);
	};

	/**
	 * A Loop for items
	 */
	var _items = function () {
    if (!animationActive) { return; } // stop if not active
    var containerTop = $('#productSlide').offset().top;
    var scrollTop = _scrollTop();
		$(".item").each( function (item) {
			elementTop = this.offsetTop,
      documentHeight = _getDocumentHeight(),
		  position = scrollTop - containerTop;
      if (position < 0) {
        transform = 'translateX(' + position + 'px';
        $('#lit-pembroke').removeClass('active');
      } else {
        transform = 'translateX(' + 0 + 'px';
        $('#lit-pembroke').addClass('active');
      }
			// Elements off the top edge.
			if(scrollTop > elementTop) {
				this.classList.add('scrolling');
				this.style.webkitTransform = transform;
			} else {
				this.classList.remove('scrolling');
				this.style.webkitTransform = null; // Reset the transform
			}
		});
    $(".item-vertical").each( function (itemV) {
      elementTop = this.offsetTop,
      documentHeight = _getDocumentHeight(),
      position = scrollTop - containerTop;
      if (position < 0) {
        transform = 'translateY(' + position + 'px';
        //document.getElementById("product-slide-pembroke").src = "/dogs";
      } else {
        transform = 'translateY(' + 0 + 'px';
        //document.getElementById("product-slide-pembroke").src = "/cats";
      }
      if(scrollTop > elementTop) {
				this.classList.add('scrolling');
				this.style.webkitTransform = transform;
        this.style.webkitTransform += 'translateX(-50%)';
			} else {
				this.classList.remove('scrolling');
				this.style.webkitTransform = null; // Reset the transform
			}
    });
	};

	/**
	 * Event handlers
	 */
	document.addEventListener('scroll', _items, false);
  document.dispatchEvent(new CustomEvent('scroll'));//trigger scroll event on initial load
});
