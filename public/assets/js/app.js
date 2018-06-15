/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoswipe__ = __webpack_require__(/*! photoswipe */ "./node_modules/photoswipe/dist/photoswipe.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_photoswipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_photoswipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_photoswipe_dist_photoswipe_ui_default__ = __webpack_require__(/*! photoswipe/dist/photoswipe-ui-default */ "./node_modules/photoswipe/dist/photoswipe-ui-default.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_photoswipe_dist_photoswipe_ui_default___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_photoswipe_dist_photoswipe_ui_default__);



document.addEventListener('DOMContentLoaded', function () {
  // Lazyload.
  lazyload();

  var openPhotoSwipe = function openPhotoSwipe() {

    // Photoswipe.
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [{
      src: '/assets/images/gorilla.jpg',
      w: 1000,
      h: 667
    }, {
      src: 'https://placekitten.com/1200/900',
      w: 1200,
      h: 900
    }];

    // define options (if needed)
    var options = {
      // optionName: 'option value'
      // for example:
      index: 0
    };

    // Initializes and opens PhotoSwipe
    var gallery = new __WEBPACK_IMPORTED_MODULE_0_photoswipe___default.a(pswpElement, __WEBPACK_IMPORTED_MODULE_1_photoswipe_dist_photoswipe_ui_default___default.a, items, options);
    gallery.init();
  };

  document.getElementById('gorilla').onclick = openPhotoSwipe;
});

/***/ }),

/***/ "./node_modules/photoswipe/dist/photoswipe-ui-default.js":
/*!***************************************************************!*\
  !*** ./node_modules/photoswipe/dist/photoswipe-ui-default.js ***!
  \***************************************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! PhotoSwipe Default UI - 4.1.2 - 2017-04-05
* http://photoswipe.com
* Copyright (c) 2017 Dmitry Semenov; */
/**
*
* UI on top of main sliding area (caption, arrows, close button, etc.).
* Built just using public methods/properties of PhotoSwipe.
* 
*/
(function (root, factory) { 
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		root.PhotoSwipeUI_Default = factory();
	}
})(this, function () {

	'use strict';



var PhotoSwipeUI_Default =
 function(pswp, framework) {

	var ui = this;
	var _overlayUIUpdated = false,
		_controlsVisible = true,
		_fullscrenAPI,
		_controls,
		_captionContainer,
		_fakeCaptionContainer,
		_indexIndicator,
		_shareButton,
		_shareModal,
		_shareModalHidden = true,
		_initalCloseOnScrollValue,
		_isIdle,
		_listen,

		_loadingIndicator,
		_loadingIndicatorHidden,
		_loadingIndicatorTimeout,

		_galleryHasOneSlide,

		_options,
		_defaultUIOptions = {
			barsSize: {top:44, bottom:'auto'},
			closeElClasses: ['item', 'caption', 'zoom-wrap', 'ui', 'top-bar'], 
			timeToIdle: 4000, 
			timeToIdleOutside: 1000,
			loadingIndicatorDelay: 1000, // 2s
			
			addCaptionHTMLFn: function(item, captionEl /*, isFake */) {
				if(!item.title) {
					captionEl.children[0].innerHTML = '';
					return false;
				}
				captionEl.children[0].innerHTML = item.title;
				return true;
			},

			closeEl:true,
			captionEl: true,
			fullscreenEl: true,
			zoomEl: true,
			shareEl: true,
			counterEl: true,
			arrowEl: true,
			preloaderEl: true,

			tapToClose: false,
			tapToToggleControls: true,

			clickToCloseNonZoomable: true,

			shareButtons: [
				{id:'facebook', label:'Share on Facebook', url:'https://www.facebook.com/sharer/sharer.php?u={{url}}'},
				{id:'twitter', label:'Tweet', url:'https://twitter.com/intent/tweet?text={{text}}&url={{url}}'},
				{id:'pinterest', label:'Pin it', url:'http://www.pinterest.com/pin/create/button/'+
													'?url={{url}}&media={{image_url}}&description={{text}}'},
				{id:'download', label:'Download image', url:'{{raw_image_url}}', download:true}
			],
			getImageURLForShare: function( /* shareButtonData */ ) {
				return pswp.currItem.src || '';
			},
			getPageURLForShare: function( /* shareButtonData */ ) {
				return window.location.href;
			},
			getTextForShare: function( /* shareButtonData */ ) {
				return pswp.currItem.title || '';
			},
				
			indexIndicatorSep: ' / ',
			fitControlsWidth: 1200

		},
		_blockControlsTap,
		_blockControlsTapTimeout;



	var _onControlsTap = function(e) {
			if(_blockControlsTap) {
				return true;
			}


			e = e || window.event;

			if(_options.timeToIdle && _options.mouseUsed && !_isIdle) {
				// reset idle timer
				_onIdleMouseMove();
			}


			var target = e.target || e.srcElement,
				uiElement,
				clickedClass = target.getAttribute('class') || '',
				found;

			for(var i = 0; i < _uiElements.length; i++) {
				uiElement = _uiElements[i];
				if(uiElement.onTap && clickedClass.indexOf('pswp__' + uiElement.name ) > -1 ) {
					uiElement.onTap();
					found = true;

				}
			}

			if(found) {
				if(e.stopPropagation) {
					e.stopPropagation();
				}
				_blockControlsTap = true;

				// Some versions of Android don't prevent ghost click event 
				// when preventDefault() was called on touchstart and/or touchend.
				// 
				// This happens on v4.3, 4.2, 4.1, 
				// older versions strangely work correctly, 
				// but just in case we add delay on all of them)	
				var tapDelay = framework.features.isOldAndroid ? 600 : 30;
				_blockControlsTapTimeout = setTimeout(function() {
					_blockControlsTap = false;
				}, tapDelay);
			}

		},
		_fitControlsInViewport = function() {
			return !pswp.likelyTouchDevice || _options.mouseUsed || screen.width > _options.fitControlsWidth;
		},
		_togglePswpClass = function(el, cName, add) {
			framework[ (add ? 'add' : 'remove') + 'Class' ](el, 'pswp__' + cName);
		},

		// add class when there is just one item in the gallery
		// (by default it hides left/right arrows and 1ofX counter)
		_countNumItems = function() {
			var hasOneSlide = (_options.getNumItemsFn() === 1);

			if(hasOneSlide !== _galleryHasOneSlide) {
				_togglePswpClass(_controls, 'ui--one-slide', hasOneSlide);
				_galleryHasOneSlide = hasOneSlide;
			}
		},
		_toggleShareModalClass = function() {
			_togglePswpClass(_shareModal, 'share-modal--hidden', _shareModalHidden);
		},
		_toggleShareModal = function() {

			_shareModalHidden = !_shareModalHidden;
			
			
			if(!_shareModalHidden) {
				_toggleShareModalClass();
				setTimeout(function() {
					if(!_shareModalHidden) {
						framework.addClass(_shareModal, 'pswp__share-modal--fade-in');
					}
				}, 30);
			} else {
				framework.removeClass(_shareModal, 'pswp__share-modal--fade-in');
				setTimeout(function() {
					if(_shareModalHidden) {
						_toggleShareModalClass();
					}
				}, 300);
			}
			
			if(!_shareModalHidden) {
				_updateShareURLs();
			}
			return false;
		},

		_openWindowPopup = function(e) {
			e = e || window.event;
			var target = e.target || e.srcElement;

			pswp.shout('shareLinkClick', e, target);

			if(!target.href) {
				return false;
			}

			if( target.hasAttribute('download') ) {
				return true;
			}

			window.open(target.href, 'pswp_share', 'scrollbars=yes,resizable=yes,toolbar=no,'+
										'location=yes,width=550,height=420,top=100,left=' + 
										(window.screen ? Math.round(screen.width / 2 - 275) : 100)  );

			if(!_shareModalHidden) {
				_toggleShareModal();
			}
			
			return false;
		},
		_updateShareURLs = function() {
			var shareButtonOut = '',
				shareButtonData,
				shareURL,
				image_url,
				page_url,
				share_text;

			for(var i = 0; i < _options.shareButtons.length; i++) {
				shareButtonData = _options.shareButtons[i];

				image_url = _options.getImageURLForShare(shareButtonData);
				page_url = _options.getPageURLForShare(shareButtonData);
				share_text = _options.getTextForShare(shareButtonData);

				shareURL = shareButtonData.url.replace('{{url}}', encodeURIComponent(page_url) )
									.replace('{{image_url}}', encodeURIComponent(image_url) )
									.replace('{{raw_image_url}}', image_url )
									.replace('{{text}}', encodeURIComponent(share_text) );

				shareButtonOut += '<a href="' + shareURL + '" target="_blank" '+
									'class="pswp__share--' + shareButtonData.id + '"' +
									(shareButtonData.download ? 'download' : '') + '>' + 
									shareButtonData.label + '</a>';

				if(_options.parseShareButtonOut) {
					shareButtonOut = _options.parseShareButtonOut(shareButtonData, shareButtonOut);
				}
			}
			_shareModal.children[0].innerHTML = shareButtonOut;
			_shareModal.children[0].onclick = _openWindowPopup;

		},
		_hasCloseClass = function(target) {
			for(var  i = 0; i < _options.closeElClasses.length; i++) {
				if( framework.hasClass(target, 'pswp__' + _options.closeElClasses[i]) ) {
					return true;
				}
			}
		},
		_idleInterval,
		_idleTimer,
		_idleIncrement = 0,
		_onIdleMouseMove = function() {
			clearTimeout(_idleTimer);
			_idleIncrement = 0;
			if(_isIdle) {
				ui.setIdle(false);
			}
		},
		_onMouseLeaveWindow = function(e) {
			e = e ? e : window.event;
			var from = e.relatedTarget || e.toElement;
			if (!from || from.nodeName === 'HTML') {
				clearTimeout(_idleTimer);
				_idleTimer = setTimeout(function() {
					ui.setIdle(true);
				}, _options.timeToIdleOutside);
			}
		},
		_setupFullscreenAPI = function() {
			if(_options.fullscreenEl && !framework.features.isOldAndroid) {
				if(!_fullscrenAPI) {
					_fullscrenAPI = ui.getFullscreenAPI();
				}
				if(_fullscrenAPI) {
					framework.bind(document, _fullscrenAPI.eventK, ui.updateFullscreen);
					ui.updateFullscreen();
					framework.addClass(pswp.template, 'pswp--supports-fs');
				} else {
					framework.removeClass(pswp.template, 'pswp--supports-fs');
				}
			}
		},
		_setupLoadingIndicator = function() {
			// Setup loading indicator
			if(_options.preloaderEl) {
			
				_toggleLoadingIndicator(true);

				_listen('beforeChange', function() {

					clearTimeout(_loadingIndicatorTimeout);

					// display loading indicator with delay
					_loadingIndicatorTimeout = setTimeout(function() {

						if(pswp.currItem && pswp.currItem.loading) {

							if( !pswp.allowProgressiveImg() || (pswp.currItem.img && !pswp.currItem.img.naturalWidth)  ) {
								// show preloader if progressive loading is not enabled, 
								// or image width is not defined yet (because of slow connection)
								_toggleLoadingIndicator(false); 
								// items-controller.js function allowProgressiveImg
							}
							
						} else {
							_toggleLoadingIndicator(true); // hide preloader
						}

					}, _options.loadingIndicatorDelay);
					
				});
				_listen('imageLoadComplete', function(index, item) {
					if(pswp.currItem === item) {
						_toggleLoadingIndicator(true);
					}
				});

			}
		},
		_toggleLoadingIndicator = function(hide) {
			if( _loadingIndicatorHidden !== hide ) {
				_togglePswpClass(_loadingIndicator, 'preloader--active', !hide);
				_loadingIndicatorHidden = hide;
			}
		},
		_applyNavBarGaps = function(item) {
			var gap = item.vGap;

			if( _fitControlsInViewport() ) {
				
				var bars = _options.barsSize; 
				if(_options.captionEl && bars.bottom === 'auto') {
					if(!_fakeCaptionContainer) {
						_fakeCaptionContainer = framework.createEl('pswp__caption pswp__caption--fake');
						_fakeCaptionContainer.appendChild( framework.createEl('pswp__caption__center') );
						_controls.insertBefore(_fakeCaptionContainer, _captionContainer);
						framework.addClass(_controls, 'pswp__ui--fit');
					}
					if( _options.addCaptionHTMLFn(item, _fakeCaptionContainer, true) ) {

						var captionSize = _fakeCaptionContainer.clientHeight;
						gap.bottom = parseInt(captionSize,10) || 44;
					} else {
						gap.bottom = bars.top; // if no caption, set size of bottom gap to size of top
					}
				} else {
					gap.bottom = bars.bottom === 'auto' ? 0 : bars.bottom;
				}
				
				// height of top bar is static, no need to calculate it
				gap.top = bars.top;
			} else {
				gap.top = gap.bottom = 0;
			}
		},
		_setupIdle = function() {
			// Hide controls when mouse is used
			if(_options.timeToIdle) {
				_listen('mouseUsed', function() {
					
					framework.bind(document, 'mousemove', _onIdleMouseMove);
					framework.bind(document, 'mouseout', _onMouseLeaveWindow);

					_idleInterval = setInterval(function() {
						_idleIncrement++;
						if(_idleIncrement === 2) {
							ui.setIdle(true);
						}
					}, _options.timeToIdle / 2);
				});
			}
		},
		_setupHidingControlsDuringGestures = function() {

			// Hide controls on vertical drag
			_listen('onVerticalDrag', function(now) {
				if(_controlsVisible && now < 0.95) {
					ui.hideControls();
				} else if(!_controlsVisible && now >= 0.95) {
					ui.showControls();
				}
			});

			// Hide controls when pinching to close
			var pinchControlsHidden;
			_listen('onPinchClose' , function(now) {
				if(_controlsVisible && now < 0.9) {
					ui.hideControls();
					pinchControlsHidden = true;
				} else if(pinchControlsHidden && !_controlsVisible && now > 0.9) {
					ui.showControls();
				}
			});

			_listen('zoomGestureEnded', function() {
				pinchControlsHidden = false;
				if(pinchControlsHidden && !_controlsVisible) {
					ui.showControls();
				}
			});

		};



	var _uiElements = [
		{ 
			name: 'caption', 
			option: 'captionEl',
			onInit: function(el) {  
				_captionContainer = el; 
			} 
		},
		{ 
			name: 'share-modal', 
			option: 'shareEl',
			onInit: function(el) {  
				_shareModal = el;
			},
			onTap: function() {
				_toggleShareModal();
			} 
		},
		{ 
			name: 'button--share', 
			option: 'shareEl',
			onInit: function(el) { 
				_shareButton = el;
			},
			onTap: function() {
				_toggleShareModal();
			} 
		},
		{ 
			name: 'button--zoom', 
			option: 'zoomEl',
			onTap: pswp.toggleDesktopZoom
		},
		{ 
			name: 'counter', 
			option: 'counterEl',
			onInit: function(el) {  
				_indexIndicator = el;
			} 
		},
		{ 
			name: 'button--close', 
			option: 'closeEl',
			onTap: pswp.close
		},
		{ 
			name: 'button--arrow--left', 
			option: 'arrowEl',
			onTap: pswp.prev
		},
		{ 
			name: 'button--arrow--right', 
			option: 'arrowEl',
			onTap: pswp.next
		},
		{ 
			name: 'button--fs', 
			option: 'fullscreenEl',
			onTap: function() {  
				if(_fullscrenAPI.isFullscreen()) {
					_fullscrenAPI.exit();
				} else {
					_fullscrenAPI.enter();
				}
			} 
		},
		{ 
			name: 'preloader', 
			option: 'preloaderEl',
			onInit: function(el) {  
				_loadingIndicator = el;
			} 
		}

	];

	var _setupUIElements = function() {
		var item,
			classAttr,
			uiElement;

		var loopThroughChildElements = function(sChildren) {
			if(!sChildren) {
				return;
			}

			var l = sChildren.length;
			for(var i = 0; i < l; i++) {
				item = sChildren[i];
				classAttr = item.className;

				for(var a = 0; a < _uiElements.length; a++) {
					uiElement = _uiElements[a];

					if(classAttr.indexOf('pswp__' + uiElement.name) > -1  ) {

						if( _options[uiElement.option] ) { // if element is not disabled from options
							
							framework.removeClass(item, 'pswp__element--disabled');
							if(uiElement.onInit) {
								uiElement.onInit(item);
							}
							
							//item.style.display = 'block';
						} else {
							framework.addClass(item, 'pswp__element--disabled');
							//item.style.display = 'none';
						}
					}
				}
			}
		};
		loopThroughChildElements(_controls.children);

		var topBar =  framework.getChildByClass(_controls, 'pswp__top-bar');
		if(topBar) {
			loopThroughChildElements( topBar.children );
		}
	};


	

	ui.init = function() {

		// extend options
		framework.extend(pswp.options, _defaultUIOptions, true);

		// create local link for fast access
		_options = pswp.options;

		// find pswp__ui element
		_controls = framework.getChildByClass(pswp.scrollWrap, 'pswp__ui');

		// create local link
		_listen = pswp.listen;


		_setupHidingControlsDuringGestures();

		// update controls when slides change
		_listen('beforeChange', ui.update);

		// toggle zoom on double-tap
		_listen('doubleTap', function(point) {
			var initialZoomLevel = pswp.currItem.initialZoomLevel;
			if(pswp.getZoomLevel() !== initialZoomLevel) {
				pswp.zoomTo(initialZoomLevel, point, 333);
			} else {
				pswp.zoomTo(_options.getDoubleTapZoom(false, pswp.currItem), point, 333);
			}
		});

		// Allow text selection in caption
		_listen('preventDragEvent', function(e, isDown, preventObj) {
			var t = e.target || e.srcElement;
			if(
				t && 
				t.getAttribute('class') && e.type.indexOf('mouse') > -1 && 
				( t.getAttribute('class').indexOf('__caption') > 0 || (/(SMALL|STRONG|EM)/i).test(t.tagName) ) 
			) {
				preventObj.prevent = false;
			}
		});

		// bind events for UI
		_listen('bindEvents', function() {
			framework.bind(_controls, 'pswpTap click', _onControlsTap);
			framework.bind(pswp.scrollWrap, 'pswpTap', ui.onGlobalTap);

			if(!pswp.likelyTouchDevice) {
				framework.bind(pswp.scrollWrap, 'mouseover', ui.onMouseOver);
			}
		});

		// unbind events for UI
		_listen('unbindEvents', function() {
			if(!_shareModalHidden) {
				_toggleShareModal();
			}

			if(_idleInterval) {
				clearInterval(_idleInterval);
			}
			framework.unbind(document, 'mouseout', _onMouseLeaveWindow);
			framework.unbind(document, 'mousemove', _onIdleMouseMove);
			framework.unbind(_controls, 'pswpTap click', _onControlsTap);
			framework.unbind(pswp.scrollWrap, 'pswpTap', ui.onGlobalTap);
			framework.unbind(pswp.scrollWrap, 'mouseover', ui.onMouseOver);

			if(_fullscrenAPI) {
				framework.unbind(document, _fullscrenAPI.eventK, ui.updateFullscreen);
				if(_fullscrenAPI.isFullscreen()) {
					_options.hideAnimationDuration = 0;
					_fullscrenAPI.exit();
				}
				_fullscrenAPI = null;
			}
		});


		// clean up things when gallery is destroyed
		_listen('destroy', function() {
			if(_options.captionEl) {
				if(_fakeCaptionContainer) {
					_controls.removeChild(_fakeCaptionContainer);
				}
				framework.removeClass(_captionContainer, 'pswp__caption--empty');
			}

			if(_shareModal) {
				_shareModal.children[0].onclick = null;
			}
			framework.removeClass(_controls, 'pswp__ui--over-close');
			framework.addClass( _controls, 'pswp__ui--hidden');
			ui.setIdle(false);
		});
		

		if(!_options.showAnimationDuration) {
			framework.removeClass( _controls, 'pswp__ui--hidden');
		}
		_listen('initialZoomIn', function() {
			if(_options.showAnimationDuration) {
				framework.removeClass( _controls, 'pswp__ui--hidden');
			}
		});
		_listen('initialZoomOut', function() {
			framework.addClass( _controls, 'pswp__ui--hidden');
		});

		_listen('parseVerticalMargin', _applyNavBarGaps);
		
		_setupUIElements();

		if(_options.shareEl && _shareButton && _shareModal) {
			_shareModalHidden = true;
		}

		_countNumItems();

		_setupIdle();

		_setupFullscreenAPI();

		_setupLoadingIndicator();
	};

	ui.setIdle = function(isIdle) {
		_isIdle = isIdle;
		_togglePswpClass(_controls, 'ui--idle', isIdle);
	};

	ui.update = function() {
		// Don't update UI if it's hidden
		if(_controlsVisible && pswp.currItem) {
			
			ui.updateIndexIndicator();

			if(_options.captionEl) {
				_options.addCaptionHTMLFn(pswp.currItem, _captionContainer);

				_togglePswpClass(_captionContainer, 'caption--empty', !pswp.currItem.title);
			}

			_overlayUIUpdated = true;

		} else {
			_overlayUIUpdated = false;
		}

		if(!_shareModalHidden) {
			_toggleShareModal();
		}

		_countNumItems();
	};

	ui.updateFullscreen = function(e) {

		if(e) {
			// some browsers change window scroll position during the fullscreen
			// so PhotoSwipe updates it just in case
			setTimeout(function() {
				pswp.setScrollOffset( 0, framework.getScrollY() );
			}, 50);
		}
		
		// toogle pswp--fs class on root element
		framework[ (_fullscrenAPI.isFullscreen() ? 'add' : 'remove') + 'Class' ](pswp.template, 'pswp--fs');
	};

	ui.updateIndexIndicator = function() {
		if(_options.counterEl) {
			_indexIndicator.innerHTML = (pswp.getCurrentIndex()+1) + 
										_options.indexIndicatorSep + 
										_options.getNumItemsFn();
		}
	};
	
	ui.onGlobalTap = function(e) {
		e = e || window.event;
		var target = e.target || e.srcElement;

		if(_blockControlsTap) {
			return;
		}

		if(e.detail && e.detail.pointerType === 'mouse') {

			// close gallery if clicked outside of the image
			if(_hasCloseClass(target)) {
				pswp.close();
				return;
			}

			if(framework.hasClass(target, 'pswp__img')) {
				if(pswp.getZoomLevel() === 1 && pswp.getZoomLevel() <= pswp.currItem.fitRatio) {
					if(_options.clickToCloseNonZoomable) {
						pswp.close();
					}
				} else {
					pswp.toggleDesktopZoom(e.detail.releasePoint);
				}
			}
			
		} else {

			// tap anywhere (except buttons) to toggle visibility of controls
			if(_options.tapToToggleControls) {
				if(_controlsVisible) {
					ui.hideControls();
				} else {
					ui.showControls();
				}
			}

			// tap to close gallery
			if(_options.tapToClose && (framework.hasClass(target, 'pswp__img') || _hasCloseClass(target)) ) {
				pswp.close();
				return;
			}
			
		}
	};
	ui.onMouseOver = function(e) {
		e = e || window.event;
		var target = e.target || e.srcElement;

		// add class when mouse is over an element that should close the gallery
		_togglePswpClass(_controls, 'ui--over-close', _hasCloseClass(target));
	};

	ui.hideControls = function() {
		framework.addClass(_controls,'pswp__ui--hidden');
		_controlsVisible = false;
	};

	ui.showControls = function() {
		_controlsVisible = true;
		if(!_overlayUIUpdated) {
			ui.update();
		}
		framework.removeClass(_controls,'pswp__ui--hidden');
	};

	ui.supportsFullscreen = function() {
		var d = document;
		return !!(d.exitFullscreen || d.mozCancelFullScreen || d.webkitExitFullscreen || d.msExitFullscreen);
	};

	ui.getFullscreenAPI = function() {
		var dE = document.documentElement,
			api,
			tF = 'fullscreenchange';

		if (dE.requestFullscreen) {
			api = {
				enterK: 'requestFullscreen',
				exitK: 'exitFullscreen',
				elementK: 'fullscreenElement',
				eventK: tF
			};

		} else if(dE.mozRequestFullScreen ) {
			api = {
				enterK: 'mozRequestFullScreen',
				exitK: 'mozCancelFullScreen',
				elementK: 'mozFullScreenElement',
				eventK: 'moz' + tF
			};

			

		} else if(dE.webkitRequestFullscreen) {
			api = {
				enterK: 'webkitRequestFullscreen',
				exitK: 'webkitExitFullscreen',
				elementK: 'webkitFullscreenElement',
				eventK: 'webkit' + tF
			};

		} else if(dE.msRequestFullscreen) {
			api = {
				enterK: 'msRequestFullscreen',
				exitK: 'msExitFullscreen',
				elementK: 'msFullscreenElement',
				eventK: 'MSFullscreenChange'
			};
		}

		if(api) {
			api.enter = function() { 
				// disable close-on-scroll in fullscreen
				_initalCloseOnScrollValue = _options.closeOnScroll; 
				_options.closeOnScroll = false; 

				if(this.enterK === 'webkitRequestFullscreen') {
					pswp.template[this.enterK]( Element.ALLOW_KEYBOARD_INPUT );
				} else {
					return pswp.template[this.enterK](); 
				}
			};
			api.exit = function() { 
				_options.closeOnScroll = _initalCloseOnScrollValue;

				return document[this.exitK](); 

			};
			api.isFullscreen = function() { return document[this.elementK]; };
		}

		return api;
	};



};
return PhotoSwipeUI_Default;


});


/***/ }),

/***/ "./node_modules/photoswipe/dist/photoswipe.js":
/*!****************************************************!*\
  !*** ./node_modules/photoswipe/dist/photoswipe.js ***!
  \****************************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! PhotoSwipe - v4.1.2 - 2017-04-05
* http://photoswipe.com
* Copyright (c) 2017 Dmitry Semenov; */
(function (root, factory) { 
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		root.PhotoSwipe = factory();
	}
})(this, function () {

	'use strict';
	var PhotoSwipe = function(template, UiClass, items, options){

/*>>framework-bridge*/
/**
 *
 * Set of generic functions used by gallery.
 * 
 * You're free to modify anything here as long as functionality is kept.
 * 
 */
var framework = {
	features: null,
	bind: function(target, type, listener, unbind) {
		var methodName = (unbind ? 'remove' : 'add') + 'EventListener';
		type = type.split(' ');
		for(var i = 0; i < type.length; i++) {
			if(type[i]) {
				target[methodName]( type[i], listener, false);
			}
		}
	},
	isArray: function(obj) {
		return (obj instanceof Array);
	},
	createEl: function(classes, tag) {
		var el = document.createElement(tag || 'div');
		if(classes) {
			el.className = classes;
		}
		return el;
	},
	getScrollY: function() {
		var yOffset = window.pageYOffset;
		return yOffset !== undefined ? yOffset : document.documentElement.scrollTop;
	},
	unbind: function(target, type, listener) {
		framework.bind(target,type,listener,true);
	},
	removeClass: function(el, className) {
		var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
		el.className = el.className.replace(reg, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, ''); 
	},
	addClass: function(el, className) {
		if( !framework.hasClass(el,className) ) {
			el.className += (el.className ? ' ' : '') + className;
		}
	},
	hasClass: function(el, className) {
		return el.className && new RegExp('(^|\\s)' + className + '(\\s|$)').test(el.className);
	},
	getChildByClass: function(parentEl, childClassName) {
		var node = parentEl.firstChild;
		while(node) {
			if( framework.hasClass(node, childClassName) ) {
				return node;
			}
			node = node.nextSibling;
		}
	},
	arraySearch: function(array, value, key) {
		var i = array.length;
		while(i--) {
			if(array[i][key] === value) {
				return i;
			} 
		}
		return -1;
	},
	extend: function(o1, o2, preventOverwrite) {
		for (var prop in o2) {
			if (o2.hasOwnProperty(prop)) {
				if(preventOverwrite && o1.hasOwnProperty(prop)) {
					continue;
				}
				o1[prop] = o2[prop];
			}
		}
	},
	easing: {
		sine: {
			out: function(k) {
				return Math.sin(k * (Math.PI / 2));
			},
			inOut: function(k) {
				return - (Math.cos(Math.PI * k) - 1) / 2;
			}
		},
		cubic: {
			out: function(k) {
				return --k * k * k + 1;
			}
		}
		/*
			elastic: {
				out: function ( k ) {

					var s, a = 0.1, p = 0.4;
					if ( k === 0 ) return 0;
					if ( k === 1 ) return 1;
					if ( !a || a < 1 ) { a = 1; s = p / 4; }
					else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
					return ( a * Math.pow( 2, - 10 * k) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) + 1 );

				},
			},
			back: {
				out: function ( k ) {
					var s = 1.70158;
					return --k * k * ( ( s + 1 ) * k + s ) + 1;
				}
			}
		*/
	},

	/**
	 * 
	 * @return {object}
	 * 
	 * {
	 *  raf : request animation frame function
	 *  caf : cancel animation frame function
	 *  transfrom : transform property key (with vendor), or null if not supported
	 *  oldIE : IE8 or below
	 * }
	 * 
	 */
	detectFeatures: function() {
		if(framework.features) {
			return framework.features;
		}
		var helperEl = framework.createEl(),
			helperStyle = helperEl.style,
			vendor = '',
			features = {};

		// IE8 and below
		features.oldIE = document.all && !document.addEventListener;

		features.touch = 'ontouchstart' in window;

		if(window.requestAnimationFrame) {
			features.raf = window.requestAnimationFrame;
			features.caf = window.cancelAnimationFrame;
		}

		features.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled;

		// fix false-positive detection of old Android in new IE
		// (IE11 ua string contains "Android 4.0")
		
		if(!features.pointerEvent) { 

			var ua = navigator.userAgent;

			// Detect if device is iPhone or iPod and if it's older than iOS 8
			// http://stackoverflow.com/a/14223920
			// 
			// This detection is made because of buggy top/bottom toolbars
			// that don't trigger window.resize event.
			// For more info refer to _isFixedPosition variable in core.js

			if (/iP(hone|od)/.test(navigator.platform)) {
				var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
				if(v && v.length > 0) {
					v = parseInt(v[1], 10);
					if(v >= 1 && v < 8 ) {
						features.isOldIOSPhone = true;
					}
				}
			}

			// Detect old Android (before KitKat)
			// due to bugs related to position:fixed
			// http://stackoverflow.com/questions/7184573/pick-up-the-android-version-in-the-browser-by-javascript
			
			var match = ua.match(/Android\s([0-9\.]*)/);
			var androidversion =  match ? match[1] : 0;
			androidversion = parseFloat(androidversion);
			if(androidversion >= 1 ) {
				if(androidversion < 4.4) {
					features.isOldAndroid = true; // for fixed position bug & performance
				}
				features.androidVersion = androidversion; // for touchend bug
			}	
			features.isMobileOpera = /opera mini|opera mobi/i.test(ua);

			// p.s. yes, yes, UA sniffing is bad, propose your solution for above bugs.
		}
		
		var styleChecks = ['transform', 'perspective', 'animationName'],
			vendors = ['', 'webkit','Moz','ms','O'],
			styleCheckItem,
			styleName;

		for(var i = 0; i < 4; i++) {
			vendor = vendors[i];

			for(var a = 0; a < 3; a++) {
				styleCheckItem = styleChecks[a];

				// uppercase first letter of property name, if vendor is present
				styleName = vendor + (vendor ? 
										styleCheckItem.charAt(0).toUpperCase() + styleCheckItem.slice(1) : 
										styleCheckItem);
			
				if(!features[styleCheckItem] && styleName in helperStyle ) {
					features[styleCheckItem] = styleName;
				}
			}

			if(vendor && !features.raf) {
				vendor = vendor.toLowerCase();
				features.raf = window[vendor+'RequestAnimationFrame'];
				if(features.raf) {
					features.caf = window[vendor+'CancelAnimationFrame'] || 
									window[vendor+'CancelRequestAnimationFrame'];
				}
			}
		}
			
		if(!features.raf) {
			var lastTime = 0;
			features.raf = function(fn) {
				var currTime = new Date().getTime();
				var timeToCall = Math.max(0, 16 - (currTime - lastTime));
				var id = window.setTimeout(function() { fn(currTime + timeToCall); }, timeToCall);
				lastTime = currTime + timeToCall;
				return id;
			};
			features.caf = function(id) { clearTimeout(id); };
		}

		// Detect SVG support
		features.svg = !!document.createElementNS && 
						!!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect;

		framework.features = features;

		return features;
	}
};

framework.detectFeatures();

// Override addEventListener for old versions of IE
if(framework.features.oldIE) {

	framework.bind = function(target, type, listener, unbind) {
		
		type = type.split(' ');

		var methodName = (unbind ? 'detach' : 'attach') + 'Event',
			evName,
			_handleEv = function() {
				listener.handleEvent.call(listener);
			};

		for(var i = 0; i < type.length; i++) {
			evName = type[i];
			if(evName) {

				if(typeof listener === 'object' && listener.handleEvent) {
					if(!unbind) {
						listener['oldIE' + evName] = _handleEv;
					} else {
						if(!listener['oldIE' + evName]) {
							return false;
						}
					}

					target[methodName]( 'on' + evName, listener['oldIE' + evName]);
				} else {
					target[methodName]( 'on' + evName, listener);
				}

			}
		}
	};
	
}

/*>>framework-bridge*/

/*>>core*/
//function(template, UiClass, items, options)

var self = this;

/**
 * Static vars, don't change unless you know what you're doing.
 */
var DOUBLE_TAP_RADIUS = 25, 
	NUM_HOLDERS = 3;

/**
 * Options
 */
var _options = {
	allowPanToNext:true,
	spacing: 0.12,
	bgOpacity: 1,
	mouseUsed: false,
	loop: true,
	pinchToClose: true,
	closeOnScroll: true,
	closeOnVerticalDrag: true,
	verticalDragRange: 0.75,
	hideAnimationDuration: 333,
	showAnimationDuration: 333,
	showHideOpacity: false,
	focus: true,
	escKey: true,
	arrowKeys: true,
	mainScrollEndFriction: 0.35,
	panEndFriction: 0.35,
	isClickableElement: function(el) {
        return el.tagName === 'A';
    },
    getDoubleTapZoom: function(isMouseClick, item) {
    	if(isMouseClick) {
    		return 1;
    	} else {
    		return item.initialZoomLevel < 0.7 ? 1 : 1.33;
    	}
    },
    maxSpreadZoom: 1.33,
	modal: true,

	// not fully implemented yet
	scaleMode: 'fit' // TODO
};
framework.extend(_options, options);


/**
 * Private helper variables & functions
 */

var _getEmptyPoint = function() { 
		return {x:0,y:0}; 
	};

var _isOpen,
	_isDestroying,
	_closedByScroll,
	_currentItemIndex,
	_containerStyle,
	_containerShiftIndex,
	_currPanDist = _getEmptyPoint(),
	_startPanOffset = _getEmptyPoint(),
	_panOffset = _getEmptyPoint(),
	_upMoveEvents, // drag move, drag end & drag cancel events array
	_downEvents, // drag start events array
	_globalEventHandlers,
	_viewportSize = {},
	_currZoomLevel,
	_startZoomLevel,
	_translatePrefix,
	_translateSufix,
	_updateSizeInterval,
	_itemsNeedUpdate,
	_currPositionIndex = 0,
	_offset = {},
	_slideSize = _getEmptyPoint(), // size of slide area, including spacing
	_itemHolders,
	_prevItemIndex,
	_indexDiff = 0, // difference of indexes since last content update
	_dragStartEvent,
	_dragMoveEvent,
	_dragEndEvent,
	_dragCancelEvent,
	_transformKey,
	_pointerEventEnabled,
	_isFixedPosition = true,
	_likelyTouchDevice,
	_modules = [],
	_requestAF,
	_cancelAF,
	_initalClassName,
	_initalWindowScrollY,
	_oldIE,
	_currentWindowScrollY,
	_features,
	_windowVisibleSize = {},
	_renderMaxResolution = false,
	_orientationChangeTimeout,


	// Registers PhotoSWipe module (History, Controller ...)
	_registerModule = function(name, module) {
		framework.extend(self, module.publicMethods);
		_modules.push(name);
	},

	_getLoopedId = function(index) {
		var numSlides = _getNumItems();
		if(index > numSlides - 1) {
			return index - numSlides;
		} else  if(index < 0) {
			return numSlides + index;
		}
		return index;
	},
	
	// Micro bind/trigger
	_listeners = {},
	_listen = function(name, fn) {
		if(!_listeners[name]) {
			_listeners[name] = [];
		}
		return _listeners[name].push(fn);
	},
	_shout = function(name) {
		var listeners = _listeners[name];

		if(listeners) {
			var args = Array.prototype.slice.call(arguments);
			args.shift();

			for(var i = 0; i < listeners.length; i++) {
				listeners[i].apply(self, args);
			}
		}
	},

	_getCurrentTime = function() {
		return new Date().getTime();
	},
	_applyBgOpacity = function(opacity) {
		_bgOpacity = opacity;
		self.bg.style.opacity = opacity * _options.bgOpacity;
	},

	_applyZoomTransform = function(styleObj,x,y,zoom,item) {
		if(!_renderMaxResolution || (item && item !== self.currItem) ) {
			zoom = zoom / (item ? item.fitRatio : self.currItem.fitRatio);	
		}
			
		styleObj[_transformKey] = _translatePrefix + x + 'px, ' + y + 'px' + _translateSufix + ' scale(' + zoom + ')';
	},
	_applyCurrentZoomPan = function( allowRenderResolution ) {
		if(_currZoomElementStyle) {

			if(allowRenderResolution) {
				if(_currZoomLevel > self.currItem.fitRatio) {
					if(!_renderMaxResolution) {
						_setImageSize(self.currItem, false, true);
						_renderMaxResolution = true;
					}
				} else {
					if(_renderMaxResolution) {
						_setImageSize(self.currItem);
						_renderMaxResolution = false;
					}
				}
			}
			

			_applyZoomTransform(_currZoomElementStyle, _panOffset.x, _panOffset.y, _currZoomLevel);
		}
	},
	_applyZoomPanToItem = function(item) {
		if(item.container) {

			_applyZoomTransform(item.container.style, 
								item.initialPosition.x, 
								item.initialPosition.y, 
								item.initialZoomLevel,
								item);
		}
	},
	_setTranslateX = function(x, elStyle) {
		elStyle[_transformKey] = _translatePrefix + x + 'px, 0px' + _translateSufix;
	},
	_moveMainScroll = function(x, dragging) {

		if(!_options.loop && dragging) {
			var newSlideIndexOffset = _currentItemIndex + (_slideSize.x * _currPositionIndex - x) / _slideSize.x,
				delta = Math.round(x - _mainScrollPos.x);

			if( (newSlideIndexOffset < 0 && delta > 0) || 
				(newSlideIndexOffset >= _getNumItems() - 1 && delta < 0) ) {
				x = _mainScrollPos.x + delta * _options.mainScrollEndFriction;
			} 
		}
		
		_mainScrollPos.x = x;
		_setTranslateX(x, _containerStyle);
	},
	_calculatePanOffset = function(axis, zoomLevel) {
		var m = _midZoomPoint[axis] - _offset[axis];
		return _startPanOffset[axis] + _currPanDist[axis] + m - m * ( zoomLevel / _startZoomLevel );
	},
	
	_equalizePoints = function(p1, p2) {
		p1.x = p2.x;
		p1.y = p2.y;
		if(p2.id) {
			p1.id = p2.id;
		}
	},
	_roundPoint = function(p) {
		p.x = Math.round(p.x);
		p.y = Math.round(p.y);
	},

	_mouseMoveTimeout = null,
	_onFirstMouseMove = function() {
		// Wait until mouse move event is fired at least twice during 100ms
		// We do this, because some mobile browsers trigger it on touchstart
		if(_mouseMoveTimeout ) { 
			framework.unbind(document, 'mousemove', _onFirstMouseMove);
			framework.addClass(template, 'pswp--has_mouse');
			_options.mouseUsed = true;
			_shout('mouseUsed');
		}
		_mouseMoveTimeout = setTimeout(function() {
			_mouseMoveTimeout = null;
		}, 100);
	},

	_bindEvents = function() {
		framework.bind(document, 'keydown', self);

		if(_features.transform) {
			// don't bind click event in browsers that don't support transform (mostly IE8)
			framework.bind(self.scrollWrap, 'click', self);
		}
		

		if(!_options.mouseUsed) {
			framework.bind(document, 'mousemove', _onFirstMouseMove);
		}

		framework.bind(window, 'resize scroll orientationchange', self);

		_shout('bindEvents');
	},

	_unbindEvents = function() {
		framework.unbind(window, 'resize scroll orientationchange', self);
		framework.unbind(window, 'scroll', _globalEventHandlers.scroll);
		framework.unbind(document, 'keydown', self);
		framework.unbind(document, 'mousemove', _onFirstMouseMove);

		if(_features.transform) {
			framework.unbind(self.scrollWrap, 'click', self);
		}

		if(_isDragging) {
			framework.unbind(window, _upMoveEvents, self);
		}

		clearTimeout(_orientationChangeTimeout);

		_shout('unbindEvents');
	},
	
	_calculatePanBounds = function(zoomLevel, update) {
		var bounds = _calculateItemSize( self.currItem, _viewportSize, zoomLevel );
		if(update) {
			_currPanBounds = bounds;
		}
		return bounds;
	},
	
	_getMinZoomLevel = function(item) {
		if(!item) {
			item = self.currItem;
		}
		return item.initialZoomLevel;
	},
	_getMaxZoomLevel = function(item) {
		if(!item) {
			item = self.currItem;
		}
		return item.w > 0 ? _options.maxSpreadZoom : 1;
	},

	// Return true if offset is out of the bounds
	_modifyDestPanOffset = function(axis, destPanBounds, destPanOffset, destZoomLevel) {
		if(destZoomLevel === self.currItem.initialZoomLevel) {
			destPanOffset[axis] = self.currItem.initialPosition[axis];
			return true;
		} else {
			destPanOffset[axis] = _calculatePanOffset(axis, destZoomLevel); 

			if(destPanOffset[axis] > destPanBounds.min[axis]) {
				destPanOffset[axis] = destPanBounds.min[axis];
				return true;
			} else if(destPanOffset[axis] < destPanBounds.max[axis] ) {
				destPanOffset[axis] = destPanBounds.max[axis];
				return true;
			}
		}
		return false;
	},

	_setupTransforms = function() {

		if(_transformKey) {
			// setup 3d transforms
			var allow3dTransform = _features.perspective && !_likelyTouchDevice;
			_translatePrefix = 'translate' + (allow3dTransform ? '3d(' : '(');
			_translateSufix = _features.perspective ? ', 0px)' : ')';	
			return;
		}

		// Override zoom/pan/move functions in case old browser is used (most likely IE)
		// (so they use left/top/width/height, instead of CSS transform)
	
		_transformKey = 'left';
		framework.addClass(template, 'pswp--ie');

		_setTranslateX = function(x, elStyle) {
			elStyle.left = x + 'px';
		};
		_applyZoomPanToItem = function(item) {

			var zoomRatio = item.fitRatio > 1 ? 1 : item.fitRatio,
				s = item.container.style,
				w = zoomRatio * item.w,
				h = zoomRatio * item.h;

			s.width = w + 'px';
			s.height = h + 'px';
			s.left = item.initialPosition.x + 'px';
			s.top = item.initialPosition.y + 'px';

		};
		_applyCurrentZoomPan = function() {
			if(_currZoomElementStyle) {

				var s = _currZoomElementStyle,
					item = self.currItem,
					zoomRatio = item.fitRatio > 1 ? 1 : item.fitRatio,
					w = zoomRatio * item.w,
					h = zoomRatio * item.h;

				s.width = w + 'px';
				s.height = h + 'px';


				s.left = _panOffset.x + 'px';
				s.top = _panOffset.y + 'px';
			}
			
		};
	},

	_onKeyDown = function(e) {
		var keydownAction = '';
		if(_options.escKey && e.keyCode === 27) { 
			keydownAction = 'close';
		} else if(_options.arrowKeys) {
			if(e.keyCode === 37) {
				keydownAction = 'prev';
			} else if(e.keyCode === 39) { 
				keydownAction = 'next';
			}
		}

		if(keydownAction) {
			// don't do anything if special key pressed to prevent from overriding default browser actions
			// e.g. in Chrome on Mac cmd+arrow-left returns to previous page
			if( !e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey ) {
				if(e.preventDefault) {
					e.preventDefault();
				} else {
					e.returnValue = false;
				} 
				self[keydownAction]();
			}
		}
	},

	_onGlobalClick = function(e) {
		if(!e) {
			return;
		}

		// don't allow click event to pass through when triggering after drag or some other gesture
		if(_moved || _zoomStarted || _mainScrollAnimating || _verticalDragInitiated) {
			e.preventDefault();
			e.stopPropagation();
		}
	},

	_updatePageScrollOffset = function() {
		self.setScrollOffset(0, framework.getScrollY());		
	};
	


	



// Micro animation engine
var _animations = {},
	_numAnimations = 0,
	_stopAnimation = function(name) {
		if(_animations[name]) {
			if(_animations[name].raf) {
				_cancelAF( _animations[name].raf );
			}
			_numAnimations--;
			delete _animations[name];
		}
	},
	_registerStartAnimation = function(name) {
		if(_animations[name]) {
			_stopAnimation(name);
		}
		if(!_animations[name]) {
			_numAnimations++;
			_animations[name] = {};
		}
	},
	_stopAllAnimations = function() {
		for (var prop in _animations) {

			if( _animations.hasOwnProperty( prop ) ) {
				_stopAnimation(prop);
			} 
			
		}
	},
	_animateProp = function(name, b, endProp, d, easingFn, onUpdate, onComplete) {
		var startAnimTime = _getCurrentTime(), t;
		_registerStartAnimation(name);

		var animloop = function(){
			if ( _animations[name] ) {
				
				t = _getCurrentTime() - startAnimTime; // time diff
				//b - beginning (start prop)
				//d - anim duration

				if ( t >= d ) {
					_stopAnimation(name);
					onUpdate(endProp);
					if(onComplete) {
						onComplete();
					}
					return;
				}
				onUpdate( (endProp - b) * easingFn(t/d) + b );

				_animations[name].raf = _requestAF(animloop);
			}
		};
		animloop();
	};
	


var publicMethods = {

	// make a few local variables and functions public
	shout: _shout,
	listen: _listen,
	viewportSize: _viewportSize,
	options: _options,

	isMainScrollAnimating: function() {
		return _mainScrollAnimating;
	},
	getZoomLevel: function() {
		return _currZoomLevel;
	},
	getCurrentIndex: function() {
		return _currentItemIndex;
	},
	isDragging: function() {
		return _isDragging;
	},	
	isZooming: function() {
		return _isZooming;
	},
	setScrollOffset: function(x,y) {
		_offset.x = x;
		_currentWindowScrollY = _offset.y = y;
		_shout('updateScrollOffset', _offset);
	},
	applyZoomPan: function(zoomLevel,panX,panY,allowRenderResolution) {
		_panOffset.x = panX;
		_panOffset.y = panY;
		_currZoomLevel = zoomLevel;
		_applyCurrentZoomPan( allowRenderResolution );
	},

	init: function() {

		if(_isOpen || _isDestroying) {
			return;
		}

		var i;

		self.framework = framework; // basic functionality
		self.template = template; // root DOM element of PhotoSwipe
		self.bg = framework.getChildByClass(template, 'pswp__bg');

		_initalClassName = template.className;
		_isOpen = true;
				
		_features = framework.detectFeatures();
		_requestAF = _features.raf;
		_cancelAF = _features.caf;
		_transformKey = _features.transform;
		_oldIE = _features.oldIE;
		
		self.scrollWrap = framework.getChildByClass(template, 'pswp__scroll-wrap');
		self.container = framework.getChildByClass(self.scrollWrap, 'pswp__container');

		_containerStyle = self.container.style; // for fast access

		// Objects that hold slides (there are only 3 in DOM)
		self.itemHolders = _itemHolders = [
			{el:self.container.children[0] , wrap:0, index: -1},
			{el:self.container.children[1] , wrap:0, index: -1},
			{el:self.container.children[2] , wrap:0, index: -1}
		];

		// hide nearby item holders until initial zoom animation finishes (to avoid extra Paints)
		_itemHolders[0].el.style.display = _itemHolders[2].el.style.display = 'none';

		_setupTransforms();

		// Setup global events
		_globalEventHandlers = {
			resize: self.updateSize,

			// Fixes: iOS 10.3 resize event
			// does not update scrollWrap.clientWidth instantly after resize
			// https://github.com/dimsemenov/PhotoSwipe/issues/1315
			orientationchange: function() {
				clearTimeout(_orientationChangeTimeout);
				_orientationChangeTimeout = setTimeout(function() {
					if(_viewportSize.x !== self.scrollWrap.clientWidth) {
						self.updateSize();
					}
				}, 500);
			},
			scroll: _updatePageScrollOffset,
			keydown: _onKeyDown,
			click: _onGlobalClick
		};

		// disable show/hide effects on old browsers that don't support CSS animations or transforms, 
		// old IOS, Android and Opera mobile. Blackberry seems to work fine, even older models.
		var oldPhone = _features.isOldIOSPhone || _features.isOldAndroid || _features.isMobileOpera;
		if(!_features.animationName || !_features.transform || oldPhone) {
			_options.showAnimationDuration = _options.hideAnimationDuration = 0;
		}

		// init modules
		for(i = 0; i < _modules.length; i++) {
			self['init' + _modules[i]]();
		}
		
		// init
		if(UiClass) {
			var ui = self.ui = new UiClass(self, framework);
			ui.init();
		}

		_shout('firstUpdate');
		_currentItemIndex = _currentItemIndex || _options.index || 0;
		// validate index
		if( isNaN(_currentItemIndex) || _currentItemIndex < 0 || _currentItemIndex >= _getNumItems() ) {
			_currentItemIndex = 0;
		}
		self.currItem = _getItemAt( _currentItemIndex );

		
		if(_features.isOldIOSPhone || _features.isOldAndroid) {
			_isFixedPosition = false;
		}
		
		template.setAttribute('aria-hidden', 'false');
		if(_options.modal) {
			if(!_isFixedPosition) {
				template.style.position = 'absolute';
				template.style.top = framework.getScrollY() + 'px';
			} else {
				template.style.position = 'fixed';
			}
		}

		if(_currentWindowScrollY === undefined) {
			_shout('initialLayout');
			_currentWindowScrollY = _initalWindowScrollY = framework.getScrollY();
		}
		
		// add classes to root element of PhotoSwipe
		var rootClasses = 'pswp--open ';
		if(_options.mainClass) {
			rootClasses += _options.mainClass + ' ';
		}
		if(_options.showHideOpacity) {
			rootClasses += 'pswp--animate_opacity ';
		}
		rootClasses += _likelyTouchDevice ? 'pswp--touch' : 'pswp--notouch';
		rootClasses += _features.animationName ? ' pswp--css_animation' : '';
		rootClasses += _features.svg ? ' pswp--svg' : '';
		framework.addClass(template, rootClasses);

		self.updateSize();

		// initial update
		_containerShiftIndex = -1;
		_indexDiff = null;
		for(i = 0; i < NUM_HOLDERS; i++) {
			_setTranslateX( (i+_containerShiftIndex) * _slideSize.x, _itemHolders[i].el.style);
		}

		if(!_oldIE) {
			framework.bind(self.scrollWrap, _downEvents, self); // no dragging for old IE
		}	

		_listen('initialZoomInEnd', function() {
			self.setContent(_itemHolders[0], _currentItemIndex-1);
			self.setContent(_itemHolders[2], _currentItemIndex+1);

			_itemHolders[0].el.style.display = _itemHolders[2].el.style.display = 'block';

			if(_options.focus) {
				// focus causes layout, 
				// which causes lag during the animation, 
				// that's why we delay it untill the initial zoom transition ends
				template.focus();
			}
			 

			_bindEvents();
		});

		// set content for center slide (first time)
		self.setContent(_itemHolders[1], _currentItemIndex);
		
		self.updateCurrItem();

		_shout('afterInit');

		if(!_isFixedPosition) {

			// On all versions of iOS lower than 8.0, we check size of viewport every second.
			// 
			// This is done to detect when Safari top & bottom bars appear, 
			// as this action doesn't trigger any events (like resize). 
			// 
			// On iOS8 they fixed this.
			// 
			// 10 Nov 2014: iOS 7 usage ~40%. iOS 8 usage 56%.
			
			_updateSizeInterval = setInterval(function() {
				if(!_numAnimations && !_isDragging && !_isZooming && (_currZoomLevel === self.currItem.initialZoomLevel)  ) {
					self.updateSize();
				}
			}, 1000);
		}

		framework.addClass(template, 'pswp--visible');
	},

	// Close the gallery, then destroy it
	close: function() {
		if(!_isOpen) {
			return;
		}

		_isOpen = false;
		_isDestroying = true;
		_shout('close');
		_unbindEvents();

		_showOrHide(self.currItem, null, true, self.destroy);
	},

	// destroys the gallery (unbinds events, cleans up intervals and timeouts to avoid memory leaks)
	destroy: function() {
		_shout('destroy');

		if(_showOrHideTimeout) {
			clearTimeout(_showOrHideTimeout);
		}
		
		template.setAttribute('aria-hidden', 'true');
		template.className = _initalClassName;

		if(_updateSizeInterval) {
			clearInterval(_updateSizeInterval);
		}

		framework.unbind(self.scrollWrap, _downEvents, self);

		// we unbind scroll event at the end, as closing animation may depend on it
		framework.unbind(window, 'scroll', self);

		_stopDragUpdateLoop();

		_stopAllAnimations();

		_listeners = null;
	},

	/**
	 * Pan image to position
	 * @param {Number} x     
	 * @param {Number} y     
	 * @param {Boolean} force Will ignore bounds if set to true.
	 */
	panTo: function(x,y,force) {
		if(!force) {
			if(x > _currPanBounds.min.x) {
				x = _currPanBounds.min.x;
			} else if(x < _currPanBounds.max.x) {
				x = _currPanBounds.max.x;
			}

			if(y > _currPanBounds.min.y) {
				y = _currPanBounds.min.y;
			} else if(y < _currPanBounds.max.y) {
				y = _currPanBounds.max.y;
			}
		}
		
		_panOffset.x = x;
		_panOffset.y = y;
		_applyCurrentZoomPan();
	},
	
	handleEvent: function (e) {
		e = e || window.event;
		if(_globalEventHandlers[e.type]) {
			_globalEventHandlers[e.type](e);
		}
	},


	goTo: function(index) {

		index = _getLoopedId(index);

		var diff = index - _currentItemIndex;
		_indexDiff = diff;

		_currentItemIndex = index;
		self.currItem = _getItemAt( _currentItemIndex );
		_currPositionIndex -= diff;
		
		_moveMainScroll(_slideSize.x * _currPositionIndex);
		

		_stopAllAnimations();
		_mainScrollAnimating = false;

		self.updateCurrItem();
	},
	next: function() {
		self.goTo( _currentItemIndex + 1);
	},
	prev: function() {
		self.goTo( _currentItemIndex - 1);
	},

	// update current zoom/pan objects
	updateCurrZoomItem: function(emulateSetContent) {
		if(emulateSetContent) {
			_shout('beforeChange', 0);
		}

		// itemHolder[1] is middle (current) item
		if(_itemHolders[1].el.children.length) {
			var zoomElement = _itemHolders[1].el.children[0];
			if( framework.hasClass(zoomElement, 'pswp__zoom-wrap') ) {
				_currZoomElementStyle = zoomElement.style;
			} else {
				_currZoomElementStyle = null;
			}
		} else {
			_currZoomElementStyle = null;
		}
		
		_currPanBounds = self.currItem.bounds;	
		_startZoomLevel = _currZoomLevel = self.currItem.initialZoomLevel;

		_panOffset.x = _currPanBounds.center.x;
		_panOffset.y = _currPanBounds.center.y;

		if(emulateSetContent) {
			_shout('afterChange');
		}
	},


	invalidateCurrItems: function() {
		_itemsNeedUpdate = true;
		for(var i = 0; i < NUM_HOLDERS; i++) {
			if( _itemHolders[i].item ) {
				_itemHolders[i].item.needsUpdate = true;
			}
		}
	},

	updateCurrItem: function(beforeAnimation) {

		if(_indexDiff === 0) {
			return;
		}

		var diffAbs = Math.abs(_indexDiff),
			tempHolder;

		if(beforeAnimation && diffAbs < 2) {
			return;
		}


		self.currItem = _getItemAt( _currentItemIndex );
		_renderMaxResolution = false;
		
		_shout('beforeChange', _indexDiff);

		if(diffAbs >= NUM_HOLDERS) {
			_containerShiftIndex += _indexDiff + (_indexDiff > 0 ? -NUM_HOLDERS : NUM_HOLDERS);
			diffAbs = NUM_HOLDERS;
		}
		for(var i = 0; i < diffAbs; i++) {
			if(_indexDiff > 0) {
				tempHolder = _itemHolders.shift();
				_itemHolders[NUM_HOLDERS-1] = tempHolder; // move first to last

				_containerShiftIndex++;
				_setTranslateX( (_containerShiftIndex+2) * _slideSize.x, tempHolder.el.style);
				self.setContent(tempHolder, _currentItemIndex - diffAbs + i + 1 + 1);
			} else {
				tempHolder = _itemHolders.pop();
				_itemHolders.unshift( tempHolder ); // move last to first

				_containerShiftIndex--;
				_setTranslateX( _containerShiftIndex * _slideSize.x, tempHolder.el.style);
				self.setContent(tempHolder, _currentItemIndex + diffAbs - i - 1 - 1);
			}
			
		}

		// reset zoom/pan on previous item
		if(_currZoomElementStyle && Math.abs(_indexDiff) === 1) {

			var prevItem = _getItemAt(_prevItemIndex);
			if(prevItem.initialZoomLevel !== _currZoomLevel) {
				_calculateItemSize(prevItem , _viewportSize );
				_setImageSize(prevItem);
				_applyZoomPanToItem( prevItem ); 				
			}

		}

		// reset diff after update
		_indexDiff = 0;

		self.updateCurrZoomItem();

		_prevItemIndex = _currentItemIndex;

		_shout('afterChange');
		
	},



	updateSize: function(force) {
		
		if(!_isFixedPosition && _options.modal) {
			var windowScrollY = framework.getScrollY();
			if(_currentWindowScrollY !== windowScrollY) {
				template.style.top = windowScrollY + 'px';
				_currentWindowScrollY = windowScrollY;
			}
			if(!force && _windowVisibleSize.x === window.innerWidth && _windowVisibleSize.y === window.innerHeight) {
				return;
			}
			_windowVisibleSize.x = window.innerWidth;
			_windowVisibleSize.y = window.innerHeight;

			//template.style.width = _windowVisibleSize.x + 'px';
			template.style.height = _windowVisibleSize.y + 'px';
		}



		_viewportSize.x = self.scrollWrap.clientWidth;
		_viewportSize.y = self.scrollWrap.clientHeight;

		_updatePageScrollOffset();

		_slideSize.x = _viewportSize.x + Math.round(_viewportSize.x * _options.spacing);
		_slideSize.y = _viewportSize.y;

		_moveMainScroll(_slideSize.x * _currPositionIndex);

		_shout('beforeResize'); // even may be used for example to switch image sources


		// don't re-calculate size on inital size update
		if(_containerShiftIndex !== undefined) {

			var holder,
				item,
				hIndex;

			for(var i = 0; i < NUM_HOLDERS; i++) {
				holder = _itemHolders[i];
				_setTranslateX( (i+_containerShiftIndex) * _slideSize.x, holder.el.style);

				hIndex = _currentItemIndex+i-1;

				if(_options.loop && _getNumItems() > 2) {
					hIndex = _getLoopedId(hIndex);
				}

				// update zoom level on items and refresh source (if needsUpdate)
				item = _getItemAt( hIndex );

				// re-render gallery item if `needsUpdate`,
				// or doesn't have `bounds` (entirely new slide object)
				if( item && (_itemsNeedUpdate || item.needsUpdate || !item.bounds) ) {

					self.cleanSlide( item );
					
					self.setContent( holder, hIndex );

					// if "center" slide
					if(i === 1) {
						self.currItem = item;
						self.updateCurrZoomItem(true);
					}

					item.needsUpdate = false;

				} else if(holder.index === -1 && hIndex >= 0) {
					// add content first time
					self.setContent( holder, hIndex );
				}
				if(item && item.container) {
					_calculateItemSize(item, _viewportSize);
					_setImageSize(item);
					_applyZoomPanToItem( item );
				}
				
			}
			_itemsNeedUpdate = false;
		}	

		_startZoomLevel = _currZoomLevel = self.currItem.initialZoomLevel;
		_currPanBounds = self.currItem.bounds;

		if(_currPanBounds) {
			_panOffset.x = _currPanBounds.center.x;
			_panOffset.y = _currPanBounds.center.y;
			_applyCurrentZoomPan( true );
		}
		
		_shout('resize');
	},
	
	// Zoom current item to
	zoomTo: function(destZoomLevel, centerPoint, speed, easingFn, updateFn) {
		/*
			if(destZoomLevel === 'fit') {
				destZoomLevel = self.currItem.fitRatio;
			} else if(destZoomLevel === 'fill') {
				destZoomLevel = self.currItem.fillRatio;
			}
		*/

		if(centerPoint) {
			_startZoomLevel = _currZoomLevel;
			_midZoomPoint.x = Math.abs(centerPoint.x) - _panOffset.x ;
			_midZoomPoint.y = Math.abs(centerPoint.y) - _panOffset.y ;
			_equalizePoints(_startPanOffset, _panOffset);
		}

		var destPanBounds = _calculatePanBounds(destZoomLevel, false),
			destPanOffset = {};

		_modifyDestPanOffset('x', destPanBounds, destPanOffset, destZoomLevel);
		_modifyDestPanOffset('y', destPanBounds, destPanOffset, destZoomLevel);

		var initialZoomLevel = _currZoomLevel;
		var initialPanOffset = {
			x: _panOffset.x,
			y: _panOffset.y
		};

		_roundPoint(destPanOffset);

		var onUpdate = function(now) {
			if(now === 1) {
				_currZoomLevel = destZoomLevel;
				_panOffset.x = destPanOffset.x;
				_panOffset.y = destPanOffset.y;
			} else {
				_currZoomLevel = (destZoomLevel - initialZoomLevel) * now + initialZoomLevel;
				_panOffset.x = (destPanOffset.x - initialPanOffset.x) * now + initialPanOffset.x;
				_panOffset.y = (destPanOffset.y - initialPanOffset.y) * now + initialPanOffset.y;
			}

			if(updateFn) {
				updateFn(now);
			}

			_applyCurrentZoomPan( now === 1 );
		};

		if(speed) {
			_animateProp('customZoomTo', 0, 1, speed, easingFn || framework.easing.sine.inOut, onUpdate);
		} else {
			onUpdate(1);
		}
	}


};


/*>>core*/

/*>>gestures*/
/**
 * Mouse/touch/pointer event handlers.
 * 
 * separated from @core.js for readability
 */

var MIN_SWIPE_DISTANCE = 30,
	DIRECTION_CHECK_OFFSET = 10; // amount of pixels to drag to determine direction of swipe

var _gestureStartTime,
	_gestureCheckSpeedTime,

	// pool of objects that are used during dragging of zooming
	p = {}, // first point
	p2 = {}, // second point (for zoom gesture)
	delta = {},
	_currPoint = {},
	_startPoint = {},
	_currPointers = [],
	_startMainScrollPos = {},
	_releaseAnimData,
	_posPoints = [], // array of points during dragging, used to determine type of gesture
	_tempPoint = {},

	_isZoomingIn,
	_verticalDragInitiated,
	_oldAndroidTouchEndTimeout,
	_currZoomedItemIndex = 0,
	_centerPoint = _getEmptyPoint(),
	_lastReleaseTime = 0,
	_isDragging, // at least one pointer is down
	_isMultitouch, // at least two _pointers are down
	_zoomStarted, // zoom level changed during zoom gesture
	_moved,
	_dragAnimFrame,
	_mainScrollShifted,
	_currentPoints, // array of current touch points
	_isZooming,
	_currPointsDistance,
	_startPointsDistance,
	_currPanBounds,
	_mainScrollPos = _getEmptyPoint(),
	_currZoomElementStyle,
	_mainScrollAnimating, // true, if animation after swipe gesture is running
	_midZoomPoint = _getEmptyPoint(),
	_currCenterPoint = _getEmptyPoint(),
	_direction,
	_isFirstMove,
	_opacityChanged,
	_bgOpacity,
	_wasOverInitialZoom,

	_isEqualPoints = function(p1, p2) {
		return p1.x === p2.x && p1.y === p2.y;
	},
	_isNearbyPoints = function(touch0, touch1) {
		return Math.abs(touch0.x - touch1.x) < DOUBLE_TAP_RADIUS && Math.abs(touch0.y - touch1.y) < DOUBLE_TAP_RADIUS;
	},
	_calculatePointsDistance = function(p1, p2) {
		_tempPoint.x = Math.abs( p1.x - p2.x );
		_tempPoint.y = Math.abs( p1.y - p2.y );
		return Math.sqrt(_tempPoint.x * _tempPoint.x + _tempPoint.y * _tempPoint.y);
	},
	_stopDragUpdateLoop = function() {
		if(_dragAnimFrame) {
			_cancelAF(_dragAnimFrame);
			_dragAnimFrame = null;
		}
	},
	_dragUpdateLoop = function() {
		if(_isDragging) {
			_dragAnimFrame = _requestAF(_dragUpdateLoop);
			_renderMovement();
		}
	},
	_canPan = function() {
		return !(_options.scaleMode === 'fit' && _currZoomLevel ===  self.currItem.initialZoomLevel);
	},
	
	// find the closest parent DOM element
	_closestElement = function(el, fn) {
	  	if(!el || el === document) {
	  		return false;
	  	}

	  	// don't search elements above pswp__scroll-wrap
	  	if(el.getAttribute('class') && el.getAttribute('class').indexOf('pswp__scroll-wrap') > -1 ) {
	  		return false;
	  	}

	  	if( fn(el) ) {
	  		return el;
	  	}

	  	return _closestElement(el.parentNode, fn);
	},

	_preventObj = {},
	_preventDefaultEventBehaviour = function(e, isDown) {
	    _preventObj.prevent = !_closestElement(e.target, _options.isClickableElement);

		_shout('preventDragEvent', e, isDown, _preventObj);
		return _preventObj.prevent;

	},
	_convertTouchToPoint = function(touch, p) {
		p.x = touch.pageX;
		p.y = touch.pageY;
		p.id = touch.identifier;
		return p;
	},
	_findCenterOfPoints = function(p1, p2, pCenter) {
		pCenter.x = (p1.x + p2.x) * 0.5;
		pCenter.y = (p1.y + p2.y) * 0.5;
	},
	_pushPosPoint = function(time, x, y) {
		if(time - _gestureCheckSpeedTime > 50) {
			var o = _posPoints.length > 2 ? _posPoints.shift() : {};
			o.x = x;
			o.y = y; 
			_posPoints.push(o);
			_gestureCheckSpeedTime = time;
		}
	},

	_calculateVerticalDragOpacityRatio = function() {
		var yOffset = _panOffset.y - self.currItem.initialPosition.y; // difference between initial and current position
		return 1 -  Math.abs( yOffset / (_viewportSize.y / 2)  );
	},

	
	// points pool, reused during touch events
	_ePoint1 = {},
	_ePoint2 = {},
	_tempPointsArr = [],
	_tempCounter,
	_getTouchPoints = function(e) {
		// clean up previous points, without recreating array
		while(_tempPointsArr.length > 0) {
			_tempPointsArr.pop();
		}

		if(!_pointerEventEnabled) {
			if(e.type.indexOf('touch') > -1) {

				if(e.touches && e.touches.length > 0) {
					_tempPointsArr[0] = _convertTouchToPoint(e.touches[0], _ePoint1);
					if(e.touches.length > 1) {
						_tempPointsArr[1] = _convertTouchToPoint(e.touches[1], _ePoint2);
					}
				}
				
			} else {
				_ePoint1.x = e.pageX;
				_ePoint1.y = e.pageY;
				_ePoint1.id = '';
				_tempPointsArr[0] = _ePoint1;//_ePoint1;
			}
		} else {
			_tempCounter = 0;
			// we can use forEach, as pointer events are supported only in modern browsers
			_currPointers.forEach(function(p) {
				if(_tempCounter === 0) {
					_tempPointsArr[0] = p;
				} else if(_tempCounter === 1) {
					_tempPointsArr[1] = p;
				}
				_tempCounter++;

			});
		}
		return _tempPointsArr;
	},

	_panOrMoveMainScroll = function(axis, delta) {

		var panFriction,
			overDiff = 0,
			newOffset = _panOffset[axis] + delta[axis],
			startOverDiff,
			dir = delta[axis] > 0,
			newMainScrollPosition = _mainScrollPos.x + delta.x,
			mainScrollDiff = _mainScrollPos.x - _startMainScrollPos.x,
			newPanPos,
			newMainScrollPos;

		// calculate fdistance over the bounds and friction
		if(newOffset > _currPanBounds.min[axis] || newOffset < _currPanBounds.max[axis]) {
			panFriction = _options.panEndFriction;
			// Linear increasing of friction, so at 1/4 of viewport it's at max value. 
			// Looks not as nice as was expected. Left for history.
			// panFriction = (1 - (_panOffset[axis] + delta[axis] + panBounds.min[axis]) / (_viewportSize[axis] / 4) );
		} else {
			panFriction = 1;
		}
		
		newOffset = _panOffset[axis] + delta[axis] * panFriction;

		// move main scroll or start panning
		if(_options.allowPanToNext || _currZoomLevel === self.currItem.initialZoomLevel) {


			if(!_currZoomElementStyle) {
				
				newMainScrollPos = newMainScrollPosition;

			} else if(_direction === 'h' && axis === 'x' && !_zoomStarted ) {
				
				if(dir) {
					if(newOffset > _currPanBounds.min[axis]) {
						panFriction = _options.panEndFriction;
						overDiff = _currPanBounds.min[axis] - newOffset;
						startOverDiff = _currPanBounds.min[axis] - _startPanOffset[axis];
					}
					
					// drag right
					if( (startOverDiff <= 0 || mainScrollDiff < 0) && _getNumItems() > 1 ) {
						newMainScrollPos = newMainScrollPosition;
						if(mainScrollDiff < 0 && newMainScrollPosition > _startMainScrollPos.x) {
							newMainScrollPos = _startMainScrollPos.x;
						}
					} else {
						if(_currPanBounds.min.x !== _currPanBounds.max.x) {
							newPanPos = newOffset;
						}
						
					}

				} else {

					if(newOffset < _currPanBounds.max[axis] ) {
						panFriction =_options.panEndFriction;
						overDiff = newOffset - _currPanBounds.max[axis];
						startOverDiff = _startPanOffset[axis] - _currPanBounds.max[axis];
					}

					if( (startOverDiff <= 0 || mainScrollDiff > 0) && _getNumItems() > 1 ) {
						newMainScrollPos = newMainScrollPosition;

						if(mainScrollDiff > 0 && newMainScrollPosition < _startMainScrollPos.x) {
							newMainScrollPos = _startMainScrollPos.x;
						}

					} else {
						if(_currPanBounds.min.x !== _currPanBounds.max.x) {
							newPanPos = newOffset;
						}
					}

				}


				//
			}

			if(axis === 'x') {

				if(newMainScrollPos !== undefined) {
					_moveMainScroll(newMainScrollPos, true);
					if(newMainScrollPos === _startMainScrollPos.x) {
						_mainScrollShifted = false;
					} else {
						_mainScrollShifted = true;
					}
				}

				if(_currPanBounds.min.x !== _currPanBounds.max.x) {
					if(newPanPos !== undefined) {
						_panOffset.x = newPanPos;
					} else if(!_mainScrollShifted) {
						_panOffset.x += delta.x * panFriction;
					}
				}

				return newMainScrollPos !== undefined;
			}

		}

		if(!_mainScrollAnimating) {
			
			if(!_mainScrollShifted) {
				if(_currZoomLevel > self.currItem.fitRatio) {
					_panOffset[axis] += delta[axis] * panFriction;
				
				}
			}

			
		}
		
	},

	// Pointerdown/touchstart/mousedown handler
	_onDragStart = function(e) {

		// Allow dragging only via left mouse button.
		// As this handler is not added in IE8 - we ignore e.which
		// 
		// http://www.quirksmode.org/js/events_properties.html
		// https://developer.mozilla.org/en-US/docs/Web/API/event.button
		if(e.type === 'mousedown' && e.button > 0  ) {
			return;
		}

		if(_initialZoomRunning) {
			e.preventDefault();
			return;
		}

		if(_oldAndroidTouchEndTimeout && e.type === 'mousedown') {
			return;
		}

		if(_preventDefaultEventBehaviour(e, true)) {
			e.preventDefault();
		}



		_shout('pointerDown');

		if(_pointerEventEnabled) {
			var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, 'id');
			if(pointerIndex < 0) {
				pointerIndex = _currPointers.length;
			}
			_currPointers[pointerIndex] = {x:e.pageX, y:e.pageY, id: e.pointerId};
		}
		


		var startPointsList = _getTouchPoints(e),
			numPoints = startPointsList.length;

		_currentPoints = null;

		_stopAllAnimations();

		// init drag
		if(!_isDragging || numPoints === 1) {

			

			_isDragging = _isFirstMove = true;
			framework.bind(window, _upMoveEvents, self);

			_isZoomingIn = 
				_wasOverInitialZoom = 
				_opacityChanged = 
				_verticalDragInitiated = 
				_mainScrollShifted = 
				_moved = 
				_isMultitouch = 
				_zoomStarted = false;

			_direction = null;

			_shout('firstTouchStart', startPointsList);

			_equalizePoints(_startPanOffset, _panOffset);

			_currPanDist.x = _currPanDist.y = 0;
			_equalizePoints(_currPoint, startPointsList[0]);
			_equalizePoints(_startPoint, _currPoint);

			//_equalizePoints(_startMainScrollPos, _mainScrollPos);
			_startMainScrollPos.x = _slideSize.x * _currPositionIndex;

			_posPoints = [{
				x: _currPoint.x,
				y: _currPoint.y
			}];

			_gestureCheckSpeedTime = _gestureStartTime = _getCurrentTime();

			//_mainScrollAnimationEnd(true);
			_calculatePanBounds( _currZoomLevel, true );
			
			// Start rendering
			_stopDragUpdateLoop();
			_dragUpdateLoop();
			
		}

		// init zoom
		if(!_isZooming && numPoints > 1 && !_mainScrollAnimating && !_mainScrollShifted) {
			_startZoomLevel = _currZoomLevel;
			_zoomStarted = false; // true if zoom changed at least once

			_isZooming = _isMultitouch = true;
			_currPanDist.y = _currPanDist.x = 0;

			_equalizePoints(_startPanOffset, _panOffset);

			_equalizePoints(p, startPointsList[0]);
			_equalizePoints(p2, startPointsList[1]);

			_findCenterOfPoints(p, p2, _currCenterPoint);

			_midZoomPoint.x = Math.abs(_currCenterPoint.x) - _panOffset.x;
			_midZoomPoint.y = Math.abs(_currCenterPoint.y) - _panOffset.y;
			_currPointsDistance = _startPointsDistance = _calculatePointsDistance(p, p2);
		}


	},

	// Pointermove/touchmove/mousemove handler
	_onDragMove = function(e) {

		e.preventDefault();

		if(_pointerEventEnabled) {
			var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, 'id');
			if(pointerIndex > -1) {
				var p = _currPointers[pointerIndex];
				p.x = e.pageX;
				p.y = e.pageY; 
			}
		}

		if(_isDragging) {
			var touchesList = _getTouchPoints(e);
			if(!_direction && !_moved && !_isZooming) {

				if(_mainScrollPos.x !== _slideSize.x * _currPositionIndex) {
					// if main scroll position is shifted – direction is always horizontal
					_direction = 'h';
				} else {
					var diff = Math.abs(touchesList[0].x - _currPoint.x) - Math.abs(touchesList[0].y - _currPoint.y);
					// check the direction of movement
					if(Math.abs(diff) >= DIRECTION_CHECK_OFFSET) {
						_direction = diff > 0 ? 'h' : 'v';
						_currentPoints = touchesList;
					}
				}
				
			} else {
				_currentPoints = touchesList;
			}
		}	
	},
	// 
	_renderMovement =  function() {

		if(!_currentPoints) {
			return;
		}

		var numPoints = _currentPoints.length;

		if(numPoints === 0) {
			return;
		}

		_equalizePoints(p, _currentPoints[0]);

		delta.x = p.x - _currPoint.x;
		delta.y = p.y - _currPoint.y;

		if(_isZooming && numPoints > 1) {
			// Handle behaviour for more than 1 point

			_currPoint.x = p.x;
			_currPoint.y = p.y;
		
			// check if one of two points changed
			if( !delta.x && !delta.y && _isEqualPoints(_currentPoints[1], p2) ) {
				return;
			}

			_equalizePoints(p2, _currentPoints[1]);


			if(!_zoomStarted) {
				_zoomStarted = true;
				_shout('zoomGestureStarted');
			}
			
			// Distance between two points
			var pointsDistance = _calculatePointsDistance(p,p2);

			var zoomLevel = _calculateZoomLevel(pointsDistance);

			// slightly over the of initial zoom level
			if(zoomLevel > self.currItem.initialZoomLevel + self.currItem.initialZoomLevel / 15) {
				_wasOverInitialZoom = true;
			}

			// Apply the friction if zoom level is out of the bounds
			var zoomFriction = 1,
				minZoomLevel = _getMinZoomLevel(),
				maxZoomLevel = _getMaxZoomLevel();

			if ( zoomLevel < minZoomLevel ) {
				
				if(_options.pinchToClose && !_wasOverInitialZoom && _startZoomLevel <= self.currItem.initialZoomLevel) {
					// fade out background if zooming out
					var minusDiff = minZoomLevel - zoomLevel;
					var percent = 1 - minusDiff / (minZoomLevel / 1.2);

					_applyBgOpacity(percent);
					_shout('onPinchClose', percent);
					_opacityChanged = true;
				} else {
					zoomFriction = (minZoomLevel - zoomLevel) / minZoomLevel;
					if(zoomFriction > 1) {
						zoomFriction = 1;
					}
					zoomLevel = minZoomLevel - zoomFriction * (minZoomLevel / 3);
				}
				
			} else if ( zoomLevel > maxZoomLevel ) {
				// 1.5 - extra zoom level above the max. E.g. if max is x6, real max 6 + 1.5 = 7.5
				zoomFriction = (zoomLevel - maxZoomLevel) / ( minZoomLevel * 6 );
				if(zoomFriction > 1) {
					zoomFriction = 1;
				}
				zoomLevel = maxZoomLevel + zoomFriction * minZoomLevel;
			}

			if(zoomFriction < 0) {
				zoomFriction = 0;
			}

			// distance between touch points after friction is applied
			_currPointsDistance = pointsDistance;

			// _centerPoint - The point in the middle of two pointers
			_findCenterOfPoints(p, p2, _centerPoint);
		
			// paning with two pointers pressed
			_currPanDist.x += _centerPoint.x - _currCenterPoint.x;
			_currPanDist.y += _centerPoint.y - _currCenterPoint.y;
			_equalizePoints(_currCenterPoint, _centerPoint);

			_panOffset.x = _calculatePanOffset('x', zoomLevel);
			_panOffset.y = _calculatePanOffset('y', zoomLevel);

			_isZoomingIn = zoomLevel > _currZoomLevel;
			_currZoomLevel = zoomLevel;
			_applyCurrentZoomPan();

		} else {

			// handle behaviour for one point (dragging or panning)

			if(!_direction) {
				return;
			}

			if(_isFirstMove) {
				_isFirstMove = false;

				// subtract drag distance that was used during the detection direction  

				if( Math.abs(delta.x) >= DIRECTION_CHECK_OFFSET) {
					delta.x -= _currentPoints[0].x - _startPoint.x;
				}
				
				if( Math.abs(delta.y) >= DIRECTION_CHECK_OFFSET) {
					delta.y -= _currentPoints[0].y - _startPoint.y;
				}
			}

			_currPoint.x = p.x;
			_currPoint.y = p.y;

			// do nothing if pointers position hasn't changed
			if(delta.x === 0 && delta.y === 0) {
				return;
			}

			if(_direction === 'v' && _options.closeOnVerticalDrag) {
				if(!_canPan()) {
					_currPanDist.y += delta.y;
					_panOffset.y += delta.y;

					var opacityRatio = _calculateVerticalDragOpacityRatio();

					_verticalDragInitiated = true;
					_shout('onVerticalDrag', opacityRatio);

					_applyBgOpacity(opacityRatio);
					_applyCurrentZoomPan();
					return ;
				}
			}

			_pushPosPoint(_getCurrentTime(), p.x, p.y);

			_moved = true;
			_currPanBounds = self.currItem.bounds;
			
			var mainScrollChanged = _panOrMoveMainScroll('x', delta);
			if(!mainScrollChanged) {
				_panOrMoveMainScroll('y', delta);

				_roundPoint(_panOffset);
				_applyCurrentZoomPan();
			}

		}

	},
	
	// Pointerup/pointercancel/touchend/touchcancel/mouseup event handler
	_onDragRelease = function(e) {

		if(_features.isOldAndroid ) {

			if(_oldAndroidTouchEndTimeout && e.type === 'mouseup') {
				return;
			}

			// on Android (v4.1, 4.2, 4.3 & possibly older) 
			// ghost mousedown/up event isn't preventable via e.preventDefault,
			// which causes fake mousedown event
			// so we block mousedown/up for 600ms
			if( e.type.indexOf('touch') > -1 ) {
				clearTimeout(_oldAndroidTouchEndTimeout);
				_oldAndroidTouchEndTimeout = setTimeout(function() {
					_oldAndroidTouchEndTimeout = 0;
				}, 600);
			}
			
		}

		_shout('pointerUp');

		if(_preventDefaultEventBehaviour(e, false)) {
			e.preventDefault();
		}

		var releasePoint;

		if(_pointerEventEnabled) {
			var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, 'id');
			
			if(pointerIndex > -1) {
				releasePoint = _currPointers.splice(pointerIndex, 1)[0];

				if(navigator.pointerEnabled) {
					releasePoint.type = e.pointerType || 'mouse';
				} else {
					var MSPOINTER_TYPES = {
						4: 'mouse', // event.MSPOINTER_TYPE_MOUSE
						2: 'touch', // event.MSPOINTER_TYPE_TOUCH 
						3: 'pen' // event.MSPOINTER_TYPE_PEN
					};
					releasePoint.type = MSPOINTER_TYPES[e.pointerType];

					if(!releasePoint.type) {
						releasePoint.type = e.pointerType || 'mouse';
					}
				}

			}
		}

		var touchList = _getTouchPoints(e),
			gestureType,
			numPoints = touchList.length;

		if(e.type === 'mouseup') {
			numPoints = 0;
		}

		// Do nothing if there were 3 touch points or more
		if(numPoints === 2) {
			_currentPoints = null;
			return true;
		}

		// if second pointer released
		if(numPoints === 1) {
			_equalizePoints(_startPoint, touchList[0]);
		}				


		// pointer hasn't moved, send "tap release" point
		if(numPoints === 0 && !_direction && !_mainScrollAnimating) {
			if(!releasePoint) {
				if(e.type === 'mouseup') {
					releasePoint = {x: e.pageX, y: e.pageY, type:'mouse'};
				} else if(e.changedTouches && e.changedTouches[0]) {
					releasePoint = {x: e.changedTouches[0].pageX, y: e.changedTouches[0].pageY, type:'touch'};
				}		
			}

			_shout('touchRelease', e, releasePoint);
		}

		// Difference in time between releasing of two last touch points (zoom gesture)
		var releaseTimeDiff = -1;

		// Gesture completed, no pointers left
		if(numPoints === 0) {
			_isDragging = false;
			framework.unbind(window, _upMoveEvents, self);

			_stopDragUpdateLoop();

			if(_isZooming) {
				// Two points released at the same time
				releaseTimeDiff = 0;
			} else if(_lastReleaseTime !== -1) {
				releaseTimeDiff = _getCurrentTime() - _lastReleaseTime;
			}
		}
		_lastReleaseTime = numPoints === 1 ? _getCurrentTime() : -1;
		
		if(releaseTimeDiff !== -1 && releaseTimeDiff < 150) {
			gestureType = 'zoom';
		} else {
			gestureType = 'swipe';
		}

		if(_isZooming && numPoints < 2) {
			_isZooming = false;

			// Only second point released
			if(numPoints === 1) {
				gestureType = 'zoomPointerUp';
			}
			_shout('zoomGestureEnded');
		}

		_currentPoints = null;
		if(!_moved && !_zoomStarted && !_mainScrollAnimating && !_verticalDragInitiated) {
			// nothing to animate
			return;
		}
	
		_stopAllAnimations();

		
		if(!_releaseAnimData) {
			_releaseAnimData = _initDragReleaseAnimationData();
		}
		
		_releaseAnimData.calculateSwipeSpeed('x');


		if(_verticalDragInitiated) {

			var opacityRatio = _calculateVerticalDragOpacityRatio();

			if(opacityRatio < _options.verticalDragRange) {
				self.close();
			} else {
				var initalPanY = _panOffset.y,
					initialBgOpacity = _bgOpacity;

				_animateProp('verticalDrag', 0, 1, 300, framework.easing.cubic.out, function(now) {
					
					_panOffset.y = (self.currItem.initialPosition.y - initalPanY) * now + initalPanY;

					_applyBgOpacity(  (1 - initialBgOpacity) * now + initialBgOpacity );
					_applyCurrentZoomPan();
				});

				_shout('onVerticalDrag', 1);
			}

			return;
		}


		// main scroll 
		if(  (_mainScrollShifted || _mainScrollAnimating) && numPoints === 0) {
			var itemChanged = _finishSwipeMainScrollGesture(gestureType, _releaseAnimData);
			if(itemChanged) {
				return;
			}
			gestureType = 'zoomPointerUp';
		}

		// prevent zoom/pan animation when main scroll animation runs
		if(_mainScrollAnimating) {
			return;
		}
		
		// Complete simple zoom gesture (reset zoom level if it's out of the bounds)  
		if(gestureType !== 'swipe') {
			_completeZoomGesture();
			return;
		}
	
		// Complete pan gesture if main scroll is not shifted, and it's possible to pan current image
		if(!_mainScrollShifted && _currZoomLevel > self.currItem.fitRatio) {
			_completePanGesture(_releaseAnimData);
		}
	},


	// Returns object with data about gesture
	// It's created only once and then reused
	_initDragReleaseAnimationData  = function() {
		// temp local vars
		var lastFlickDuration,
			tempReleasePos;

		// s = this
		var s = {
			lastFlickOffset: {},
			lastFlickDist: {},
			lastFlickSpeed: {},
			slowDownRatio:  {},
			slowDownRatioReverse:  {},
			speedDecelerationRatio:  {},
			speedDecelerationRatioAbs:  {},
			distanceOffset:  {},
			backAnimDestination: {},
			backAnimStarted: {},
			calculateSwipeSpeed: function(axis) {
				

				if( _posPoints.length > 1) {
					lastFlickDuration = _getCurrentTime() - _gestureCheckSpeedTime + 50;
					tempReleasePos = _posPoints[_posPoints.length-2][axis];
				} else {
					lastFlickDuration = _getCurrentTime() - _gestureStartTime; // total gesture duration
					tempReleasePos = _startPoint[axis];
				}
				s.lastFlickOffset[axis] = _currPoint[axis] - tempReleasePos;
				s.lastFlickDist[axis] = Math.abs(s.lastFlickOffset[axis]);
				if(s.lastFlickDist[axis] > 20) {
					s.lastFlickSpeed[axis] = s.lastFlickOffset[axis] / lastFlickDuration;
				} else {
					s.lastFlickSpeed[axis] = 0;
				}
				if( Math.abs(s.lastFlickSpeed[axis]) < 0.1 ) {
					s.lastFlickSpeed[axis] = 0;
				}
				
				s.slowDownRatio[axis] = 0.95;
				s.slowDownRatioReverse[axis] = 1 - s.slowDownRatio[axis];
				s.speedDecelerationRatio[axis] = 1;
			},

			calculateOverBoundsAnimOffset: function(axis, speed) {
				if(!s.backAnimStarted[axis]) {

					if(_panOffset[axis] > _currPanBounds.min[axis]) {
						s.backAnimDestination[axis] = _currPanBounds.min[axis];
						
					} else if(_panOffset[axis] < _currPanBounds.max[axis]) {
						s.backAnimDestination[axis] = _currPanBounds.max[axis];
					}

					if(s.backAnimDestination[axis] !== undefined) {
						s.slowDownRatio[axis] = 0.7;
						s.slowDownRatioReverse[axis] = 1 - s.slowDownRatio[axis];
						if(s.speedDecelerationRatioAbs[axis] < 0.05) {

							s.lastFlickSpeed[axis] = 0;
							s.backAnimStarted[axis] = true;

							_animateProp('bounceZoomPan'+axis,_panOffset[axis], 
								s.backAnimDestination[axis], 
								speed || 300, 
								framework.easing.sine.out, 
								function(pos) {
									_panOffset[axis] = pos;
									_applyCurrentZoomPan();
								}
							);

						}
					}
				}
			},

			// Reduces the speed by slowDownRatio (per 10ms)
			calculateAnimOffset: function(axis) {
				if(!s.backAnimStarted[axis]) {
					s.speedDecelerationRatio[axis] = s.speedDecelerationRatio[axis] * (s.slowDownRatio[axis] + 
												s.slowDownRatioReverse[axis] - 
												s.slowDownRatioReverse[axis] * s.timeDiff / 10);

					s.speedDecelerationRatioAbs[axis] = Math.abs(s.lastFlickSpeed[axis] * s.speedDecelerationRatio[axis]);
					s.distanceOffset[axis] = s.lastFlickSpeed[axis] * s.speedDecelerationRatio[axis] * s.timeDiff;
					_panOffset[axis] += s.distanceOffset[axis];

				}
			},

			panAnimLoop: function() {
				if ( _animations.zoomPan ) {
					_animations.zoomPan.raf = _requestAF(s.panAnimLoop);

					s.now = _getCurrentTime();
					s.timeDiff = s.now - s.lastNow;
					s.lastNow = s.now;
					
					s.calculateAnimOffset('x');
					s.calculateAnimOffset('y');

					_applyCurrentZoomPan();
					
					s.calculateOverBoundsAnimOffset('x');
					s.calculateOverBoundsAnimOffset('y');


					if (s.speedDecelerationRatioAbs.x < 0.05 && s.speedDecelerationRatioAbs.y < 0.05) {

						// round pan position
						_panOffset.x = Math.round(_panOffset.x);
						_panOffset.y = Math.round(_panOffset.y);
						_applyCurrentZoomPan();
						
						_stopAnimation('zoomPan');
						return;
					}
				}

			}
		};
		return s;
	},

	_completePanGesture = function(animData) {
		// calculate swipe speed for Y axis (paanning)
		animData.calculateSwipeSpeed('y');

		_currPanBounds = self.currItem.bounds;
		
		animData.backAnimDestination = {};
		animData.backAnimStarted = {};

		// Avoid acceleration animation if speed is too low
		if(Math.abs(animData.lastFlickSpeed.x) <= 0.05 && Math.abs(animData.lastFlickSpeed.y) <= 0.05 ) {
			animData.speedDecelerationRatioAbs.x = animData.speedDecelerationRatioAbs.y = 0;

			// Run pan drag release animation. E.g. if you drag image and release finger without momentum.
			animData.calculateOverBoundsAnimOffset('x');
			animData.calculateOverBoundsAnimOffset('y');
			return true;
		}

		// Animation loop that controls the acceleration after pan gesture ends
		_registerStartAnimation('zoomPan');
		animData.lastNow = _getCurrentTime();
		animData.panAnimLoop();
	},


	_finishSwipeMainScrollGesture = function(gestureType, _releaseAnimData) {
		var itemChanged;
		if(!_mainScrollAnimating) {
			_currZoomedItemIndex = _currentItemIndex;
		}


		
		var itemsDiff;

		if(gestureType === 'swipe') {
			var totalShiftDist = _currPoint.x - _startPoint.x,
				isFastLastFlick = _releaseAnimData.lastFlickDist.x < 10;

			// if container is shifted for more than MIN_SWIPE_DISTANCE, 
			// and last flick gesture was in right direction
			if(totalShiftDist > MIN_SWIPE_DISTANCE && 
				(isFastLastFlick || _releaseAnimData.lastFlickOffset.x > 20) ) {
				// go to prev item
				itemsDiff = -1;
			} else if(totalShiftDist < -MIN_SWIPE_DISTANCE && 
				(isFastLastFlick || _releaseAnimData.lastFlickOffset.x < -20) ) {
				// go to next item
				itemsDiff = 1;
			}
		}

		var nextCircle;

		if(itemsDiff) {
			
			_currentItemIndex += itemsDiff;

			if(_currentItemIndex < 0) {
				_currentItemIndex = _options.loop ? _getNumItems()-1 : 0;
				nextCircle = true;
			} else if(_currentItemIndex >= _getNumItems()) {
				_currentItemIndex = _options.loop ? 0 : _getNumItems()-1;
				nextCircle = true;
			}

			if(!nextCircle || _options.loop) {
				_indexDiff += itemsDiff;
				_currPositionIndex -= itemsDiff;
				itemChanged = true;
			}
			

			
		}

		var animateToX = _slideSize.x * _currPositionIndex;
		var animateToDist = Math.abs( animateToX - _mainScrollPos.x );
		var finishAnimDuration;


		if(!itemChanged && animateToX > _mainScrollPos.x !== _releaseAnimData.lastFlickSpeed.x > 0) {
			// "return to current" duration, e.g. when dragging from slide 0 to -1
			finishAnimDuration = 333; 
		} else {
			finishAnimDuration = Math.abs(_releaseAnimData.lastFlickSpeed.x) > 0 ? 
									animateToDist / Math.abs(_releaseAnimData.lastFlickSpeed.x) : 
									333;

			finishAnimDuration = Math.min(finishAnimDuration, 400);
			finishAnimDuration = Math.max(finishAnimDuration, 250);
		}

		if(_currZoomedItemIndex === _currentItemIndex) {
			itemChanged = false;
		}
		
		_mainScrollAnimating = true;
		
		_shout('mainScrollAnimStart');

		_animateProp('mainScroll', _mainScrollPos.x, animateToX, finishAnimDuration, framework.easing.cubic.out, 
			_moveMainScroll,
			function() {
				_stopAllAnimations();
				_mainScrollAnimating = false;
				_currZoomedItemIndex = -1;
				
				if(itemChanged || _currZoomedItemIndex !== _currentItemIndex) {
					self.updateCurrItem();
				}
				
				_shout('mainScrollAnimComplete');
			}
		);

		if(itemChanged) {
			self.updateCurrItem(true);
		}

		return itemChanged;
	},

	_calculateZoomLevel = function(touchesDistance) {
		return  1 / _startPointsDistance * touchesDistance * _startZoomLevel;
	},

	// Resets zoom if it's out of bounds
	_completeZoomGesture = function() {
		var destZoomLevel = _currZoomLevel,
			minZoomLevel = _getMinZoomLevel(),
			maxZoomLevel = _getMaxZoomLevel();

		if ( _currZoomLevel < minZoomLevel ) {
			destZoomLevel = minZoomLevel;
		} else if ( _currZoomLevel > maxZoomLevel ) {
			destZoomLevel = maxZoomLevel;
		}

		var destOpacity = 1,
			onUpdate,
			initialOpacity = _bgOpacity;

		if(_opacityChanged && !_isZoomingIn && !_wasOverInitialZoom && _currZoomLevel < minZoomLevel) {
			//_closedByScroll = true;
			self.close();
			return true;
		}

		if(_opacityChanged) {
			onUpdate = function(now) {
				_applyBgOpacity(  (destOpacity - initialOpacity) * now + initialOpacity );
			};
		}

		self.zoomTo(destZoomLevel, 0, 200,  framework.easing.cubic.out, onUpdate);
		return true;
	};


_registerModule('Gestures', {
	publicMethods: {

		initGestures: function() {

			// helper function that builds touch/pointer/mouse events
			var addEventNames = function(pref, down, move, up, cancel) {
				_dragStartEvent = pref + down;
				_dragMoveEvent = pref + move;
				_dragEndEvent = pref + up;
				if(cancel) {
					_dragCancelEvent = pref + cancel;
				} else {
					_dragCancelEvent = '';
				}
			};

			_pointerEventEnabled = _features.pointerEvent;
			if(_pointerEventEnabled && _features.touch) {
				// we don't need touch events, if browser supports pointer events
				_features.touch = false;
			}

			if(_pointerEventEnabled) {
				if(navigator.pointerEnabled) {
					addEventNames('pointer', 'down', 'move', 'up', 'cancel');
				} else {
					// IE10 pointer events are case-sensitive
					addEventNames('MSPointer', 'Down', 'Move', 'Up', 'Cancel');
				}
			} else if(_features.touch) {
				addEventNames('touch', 'start', 'move', 'end', 'cancel');
				_likelyTouchDevice = true;
			} else {
				addEventNames('mouse', 'down', 'move', 'up');	
			}

			_upMoveEvents = _dragMoveEvent + ' ' + _dragEndEvent  + ' ' +  _dragCancelEvent;
			_downEvents = _dragStartEvent;

			if(_pointerEventEnabled && !_likelyTouchDevice) {
				_likelyTouchDevice = (navigator.maxTouchPoints > 1) || (navigator.msMaxTouchPoints > 1);
			}
			// make variable public
			self.likelyTouchDevice = _likelyTouchDevice; 
			
			_globalEventHandlers[_dragStartEvent] = _onDragStart;
			_globalEventHandlers[_dragMoveEvent] = _onDragMove;
			_globalEventHandlers[_dragEndEvent] = _onDragRelease; // the Kraken

			if(_dragCancelEvent) {
				_globalEventHandlers[_dragCancelEvent] = _globalEventHandlers[_dragEndEvent];
			}

			// Bind mouse events on device with detected hardware touch support, in case it supports multiple types of input.
			if(_features.touch) {
				_downEvents += ' mousedown';
				_upMoveEvents += ' mousemove mouseup';
				_globalEventHandlers.mousedown = _globalEventHandlers[_dragStartEvent];
				_globalEventHandlers.mousemove = _globalEventHandlers[_dragMoveEvent];
				_globalEventHandlers.mouseup = _globalEventHandlers[_dragEndEvent];
			}

			if(!_likelyTouchDevice) {
				// don't allow pan to next slide from zoomed state on Desktop
				_options.allowPanToNext = false;
			}
		}

	}
});


/*>>gestures*/

/*>>show-hide-transition*/
/**
 * show-hide-transition.js:
 *
 * Manages initial opening or closing transition.
 *
 * If you're not planning to use transition for gallery at all,
 * you may set options hideAnimationDuration and showAnimationDuration to 0,
 * and just delete startAnimation function.
 * 
 */


var _showOrHideTimeout,
	_showOrHide = function(item, img, out, completeFn) {

		if(_showOrHideTimeout) {
			clearTimeout(_showOrHideTimeout);
		}

		_initialZoomRunning = true;
		_initialContentSet = true;
		
		// dimensions of small thumbnail {x:,y:,w:}.
		// Height is optional, as calculated based on large image.
		var thumbBounds; 
		if(item.initialLayout) {
			thumbBounds = item.initialLayout;
			item.initialLayout = null;
		} else {
			thumbBounds = _options.getThumbBoundsFn && _options.getThumbBoundsFn(_currentItemIndex);
		}

		var duration = out ? _options.hideAnimationDuration : _options.showAnimationDuration;

		var onComplete = function() {
			_stopAnimation('initialZoom');
			if(!out) {
				_applyBgOpacity(1);
				if(img) {
					img.style.display = 'block';
				}
				framework.addClass(template, 'pswp--animated-in');
				_shout('initialZoom' + (out ? 'OutEnd' : 'InEnd'));
			} else {
				self.template.removeAttribute('style');
				self.bg.removeAttribute('style');
			}

			if(completeFn) {
				completeFn();
			}
			_initialZoomRunning = false;
		};

		// if bounds aren't provided, just open gallery without animation
		if(!duration || !thumbBounds || thumbBounds.x === undefined) {

			_shout('initialZoom' + (out ? 'Out' : 'In') );

			_currZoomLevel = item.initialZoomLevel;
			_equalizePoints(_panOffset,  item.initialPosition );
			_applyCurrentZoomPan();

			template.style.opacity = out ? 0 : 1;
			_applyBgOpacity(1);

			if(duration) {
				setTimeout(function() {
					onComplete();
				}, duration);
			} else {
				onComplete();
			}

			return;
		}

		var startAnimation = function() {
			var closeWithRaf = _closedByScroll,
				fadeEverything = !self.currItem.src || self.currItem.loadError || _options.showHideOpacity;
			
			// apply hw-acceleration to image
			if(item.miniImg) {
				item.miniImg.style.webkitBackfaceVisibility = 'hidden';
			}

			if(!out) {
				_currZoomLevel = thumbBounds.w / item.w;
				_panOffset.x = thumbBounds.x;
				_panOffset.y = thumbBounds.y - _initalWindowScrollY;

				self[fadeEverything ? 'template' : 'bg'].style.opacity = 0.001;
				_applyCurrentZoomPan();
			}

			_registerStartAnimation('initialZoom');
			
			if(out && !closeWithRaf) {
				framework.removeClass(template, 'pswp--animated-in');
			}

			if(fadeEverything) {
				if(out) {
					framework[ (closeWithRaf ? 'remove' : 'add') + 'Class' ](template, 'pswp--animate_opacity');
				} else {
					setTimeout(function() {
						framework.addClass(template, 'pswp--animate_opacity');
					}, 30);
				}
			}

			_showOrHideTimeout = setTimeout(function() {

				_shout('initialZoom' + (out ? 'Out' : 'In') );
				

				if(!out) {

					// "in" animation always uses CSS transitions (instead of rAF).
					// CSS transition work faster here, 
					// as developer may also want to animate other things, 
					// like ui on top of sliding area, which can be animated just via CSS
					
					_currZoomLevel = item.initialZoomLevel;
					_equalizePoints(_panOffset,  item.initialPosition );
					_applyCurrentZoomPan();
					_applyBgOpacity(1);

					if(fadeEverything) {
						template.style.opacity = 1;
					} else {
						_applyBgOpacity(1);
					}

					_showOrHideTimeout = setTimeout(onComplete, duration + 20);
				} else {

					// "out" animation uses rAF only when PhotoSwipe is closed by browser scroll, to recalculate position
					var destZoomLevel = thumbBounds.w / item.w,
						initialPanOffset = {
							x: _panOffset.x,
							y: _panOffset.y
						},
						initialZoomLevel = _currZoomLevel,
						initalBgOpacity = _bgOpacity,
						onUpdate = function(now) {
							
							if(now === 1) {
								_currZoomLevel = destZoomLevel;
								_panOffset.x = thumbBounds.x;
								_panOffset.y = thumbBounds.y  - _currentWindowScrollY;
							} else {
								_currZoomLevel = (destZoomLevel - initialZoomLevel) * now + initialZoomLevel;
								_panOffset.x = (thumbBounds.x - initialPanOffset.x) * now + initialPanOffset.x;
								_panOffset.y = (thumbBounds.y - _currentWindowScrollY - initialPanOffset.y) * now + initialPanOffset.y;
							}
							
							_applyCurrentZoomPan();
							if(fadeEverything) {
								template.style.opacity = 1 - now;
							} else {
								_applyBgOpacity( initalBgOpacity - now * initalBgOpacity );
							}
						};

					if(closeWithRaf) {
						_animateProp('initialZoom', 0, 1, duration, framework.easing.cubic.out, onUpdate, onComplete);
					} else {
						onUpdate(1);
						_showOrHideTimeout = setTimeout(onComplete, duration + 20);
					}
				}
			
			}, out ? 25 : 90); // Main purpose of this delay is to give browser time to paint and
					// create composite layers of PhotoSwipe UI parts (background, controls, caption, arrows).
					// Which avoids lag at the beginning of scale transition.
		};
		startAnimation();

		
	};

/*>>show-hide-transition*/

/*>>items-controller*/
/**
*
* Controller manages gallery items, their dimensions, and their content.
* 
*/

var _items,
	_tempPanAreaSize = {},
	_imagesToAppendPool = [],
	_initialContentSet,
	_initialZoomRunning,
	_controllerDefaultOptions = {
		index: 0,
		errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
		forceProgressiveLoading: false, // TODO
		preload: [1,1],
		getNumItemsFn: function() {
			return _items.length;
		}
	};


var _getItemAt,
	_getNumItems,
	_initialIsLoop,
	_getZeroBounds = function() {
		return {
			center:{x:0,y:0}, 
			max:{x:0,y:0}, 
			min:{x:0,y:0}
		};
	},
	_calculateSingleItemPanBounds = function(item, realPanElementW, realPanElementH ) {
		var bounds = item.bounds;

		// position of element when it's centered
		bounds.center.x = Math.round((_tempPanAreaSize.x - realPanElementW) / 2);
		bounds.center.y = Math.round((_tempPanAreaSize.y - realPanElementH) / 2) + item.vGap.top;

		// maximum pan position
		bounds.max.x = (realPanElementW > _tempPanAreaSize.x) ? 
							Math.round(_tempPanAreaSize.x - realPanElementW) : 
							bounds.center.x;
		
		bounds.max.y = (realPanElementH > _tempPanAreaSize.y) ? 
							Math.round(_tempPanAreaSize.y - realPanElementH) + item.vGap.top : 
							bounds.center.y;
		
		// minimum pan position
		bounds.min.x = (realPanElementW > _tempPanAreaSize.x) ? 0 : bounds.center.x;
		bounds.min.y = (realPanElementH > _tempPanAreaSize.y) ? item.vGap.top : bounds.center.y;
	},
	_calculateItemSize = function(item, viewportSize, zoomLevel) {

		if (item.src && !item.loadError) {
			var isInitial = !zoomLevel;
			
			if(isInitial) {
				if(!item.vGap) {
					item.vGap = {top:0,bottom:0};
				}
				// allows overriding vertical margin for individual items
				_shout('parseVerticalMargin', item);
			}


			_tempPanAreaSize.x = viewportSize.x;
			_tempPanAreaSize.y = viewportSize.y - item.vGap.top - item.vGap.bottom;

			if (isInitial) {
				var hRatio = _tempPanAreaSize.x / item.w;
				var vRatio = _tempPanAreaSize.y / item.h;

				item.fitRatio = hRatio < vRatio ? hRatio : vRatio;
				//item.fillRatio = hRatio > vRatio ? hRatio : vRatio;

				var scaleMode = _options.scaleMode;

				if (scaleMode === 'orig') {
					zoomLevel = 1;
				} else if (scaleMode === 'fit') {
					zoomLevel = item.fitRatio;
				}

				if (zoomLevel > 1) {
					zoomLevel = 1;
				}

				item.initialZoomLevel = zoomLevel;
				
				if(!item.bounds) {
					// reuse bounds object
					item.bounds = _getZeroBounds(); 
				}
			}

			if(!zoomLevel) {
				return;
			}

			_calculateSingleItemPanBounds(item, item.w * zoomLevel, item.h * zoomLevel);

			if (isInitial && zoomLevel === item.initialZoomLevel) {
				item.initialPosition = item.bounds.center;
			}

			return item.bounds;
		} else {
			item.w = item.h = 0;
			item.initialZoomLevel = item.fitRatio = 1;
			item.bounds = _getZeroBounds();
			item.initialPosition = item.bounds.center;

			// if it's not image, we return zero bounds (content is not zoomable)
			return item.bounds;
		}
		
	},

	


	_appendImage = function(index, item, baseDiv, img, preventAnimation, keepPlaceholder) {
		

		if(item.loadError) {
			return;
		}

		if(img) {

			item.imageAppended = true;
			_setImageSize(item, img, (item === self.currItem && _renderMaxResolution) );
			
			baseDiv.appendChild(img);

			if(keepPlaceholder) {
				setTimeout(function() {
					if(item && item.loaded && item.placeholder) {
						item.placeholder.style.display = 'none';
						item.placeholder = null;
					}
				}, 500);
			}
		}
	},
	


	_preloadImage = function(item) {
		item.loading = true;
		item.loaded = false;
		var img = item.img = framework.createEl('pswp__img', 'img');
		var onComplete = function() {
			item.loading = false;
			item.loaded = true;

			if(item.loadComplete) {
				item.loadComplete(item);
			} else {
				item.img = null; // no need to store image object
			}
			img.onload = img.onerror = null;
			img = null;
		};
		img.onload = onComplete;
		img.onerror = function() {
			item.loadError = true;
			onComplete();
		};		

		img.src = item.src;// + '?a=' + Math.random();

		return img;
	},
	_checkForError = function(item, cleanUp) {
		if(item.src && item.loadError && item.container) {

			if(cleanUp) {
				item.container.innerHTML = '';
			}

			item.container.innerHTML = _options.errorMsg.replace('%url%',  item.src );
			return true;
			
		}
	},
	_setImageSize = function(item, img, maxRes) {
		if(!item.src) {
			return;
		}

		if(!img) {
			img = item.container.lastChild;
		}

		var w = maxRes ? item.w : Math.round(item.w * item.fitRatio),
			h = maxRes ? item.h : Math.round(item.h * item.fitRatio);
		
		if(item.placeholder && !item.loaded) {
			item.placeholder.style.width = w + 'px';
			item.placeholder.style.height = h + 'px';
		}

		img.style.width = w + 'px';
		img.style.height = h + 'px';
	},
	_appendImagesPool = function() {

		if(_imagesToAppendPool.length) {
			var poolItem;

			for(var i = 0; i < _imagesToAppendPool.length; i++) {
				poolItem = _imagesToAppendPool[i];
				if( poolItem.holder.index === poolItem.index ) {
					_appendImage(poolItem.index, poolItem.item, poolItem.baseDiv, poolItem.img, false, poolItem.clearPlaceholder);
				}
			}
			_imagesToAppendPool = [];
		}
	};
	


_registerModule('Controller', {

	publicMethods: {

		lazyLoadItem: function(index) {
			index = _getLoopedId(index);
			var item = _getItemAt(index);

			if(!item || ((item.loaded || item.loading) && !_itemsNeedUpdate)) {
				return;
			}

			_shout('gettingData', index, item);

			if (!item.src) {
				return;
			}

			_preloadImage(item);
		},
		initController: function() {
			framework.extend(_options, _controllerDefaultOptions, true);
			self.items = _items = items;
			_getItemAt = self.getItemAt;
			_getNumItems = _options.getNumItemsFn; //self.getNumItems;



			_initialIsLoop = _options.loop;
			if(_getNumItems() < 3) {
				_options.loop = false; // disable loop if less then 3 items
			}

			_listen('beforeChange', function(diff) {

				var p = _options.preload,
					isNext = diff === null ? true : (diff >= 0),
					preloadBefore = Math.min(p[0], _getNumItems() ),
					preloadAfter = Math.min(p[1], _getNumItems() ),
					i;


				for(i = 1; i <= (isNext ? preloadAfter : preloadBefore); i++) {
					self.lazyLoadItem(_currentItemIndex+i);
				}
				for(i = 1; i <= (isNext ? preloadBefore : preloadAfter); i++) {
					self.lazyLoadItem(_currentItemIndex-i);
				}
			});

			_listen('initialLayout', function() {
				self.currItem.initialLayout = _options.getThumbBoundsFn && _options.getThumbBoundsFn(_currentItemIndex);
			});

			_listen('mainScrollAnimComplete', _appendImagesPool);
			_listen('initialZoomInEnd', _appendImagesPool);



			_listen('destroy', function() {
				var item;
				for(var i = 0; i < _items.length; i++) {
					item = _items[i];
					// remove reference to DOM elements, for GC
					if(item.container) {
						item.container = null; 
					}
					if(item.placeholder) {
						item.placeholder = null;
					}
					if(item.img) {
						item.img = null;
					}
					if(item.preloader) {
						item.preloader = null;
					}
					if(item.loadError) {
						item.loaded = item.loadError = false;
					}
				}
				_imagesToAppendPool = null;
			});
		},


		getItemAt: function(index) {
			if (index >= 0) {
				return _items[index] !== undefined ? _items[index] : false;
			}
			return false;
		},

		allowProgressiveImg: function() {
			// 1. Progressive image loading isn't working on webkit/blink 
			//    when hw-acceleration (e.g. translateZ) is applied to IMG element.
			//    That's why in PhotoSwipe parent element gets zoom transform, not image itself.
			//    
			// 2. Progressive image loading sometimes blinks in webkit/blink when applying animation to parent element.
			//    That's why it's disabled on touch devices (mainly because of swipe transition)
			//    
			// 3. Progressive image loading sometimes doesn't work in IE (up to 11).

			// Don't allow progressive loading on non-large touch devices
			return _options.forceProgressiveLoading || !_likelyTouchDevice || _options.mouseUsed || screen.width > 1200; 
			// 1200 - to eliminate touch devices with large screen (like Chromebook Pixel)
		},

		setContent: function(holder, index) {

			if(_options.loop) {
				index = _getLoopedId(index);
			}

			var prevItem = self.getItemAt(holder.index);
			if(prevItem) {
				prevItem.container = null;
			}
	
			var item = self.getItemAt(index),
				img;
			
			if(!item) {
				holder.el.innerHTML = '';
				return;
			}

			// allow to override data
			_shout('gettingData', index, item);

			holder.index = index;
			holder.item = item;

			// base container DIV is created only once for each of 3 holders
			var baseDiv = item.container = framework.createEl('pswp__zoom-wrap'); 

			

			if(!item.src && item.html) {
				if(item.html.tagName) {
					baseDiv.appendChild(item.html);
				} else {
					baseDiv.innerHTML = item.html;
				}
			}

			_checkForError(item);

			_calculateItemSize(item, _viewportSize);
			
			if(item.src && !item.loadError && !item.loaded) {

				item.loadComplete = function(item) {

					// gallery closed before image finished loading
					if(!_isOpen) {
						return;
					}

					// check if holder hasn't changed while image was loading
					if(holder && holder.index === index ) {
						if( _checkForError(item, true) ) {
							item.loadComplete = item.img = null;
							_calculateItemSize(item, _viewportSize);
							_applyZoomPanToItem(item);

							if(holder.index === _currentItemIndex) {
								// recalculate dimensions
								self.updateCurrZoomItem();
							}
							return;
						}
						if( !item.imageAppended ) {
							if(_features.transform && (_mainScrollAnimating || _initialZoomRunning) ) {
								_imagesToAppendPool.push({
									item:item,
									baseDiv:baseDiv,
									img:item.img,
									index:index,
									holder:holder,
									clearPlaceholder:true
								});
							} else {
								_appendImage(index, item, baseDiv, item.img, _mainScrollAnimating || _initialZoomRunning, true);
							}
						} else {
							// remove preloader & mini-img
							if(!_initialZoomRunning && item.placeholder) {
								item.placeholder.style.display = 'none';
								item.placeholder = null;
							}
						}
					}

					item.loadComplete = null;
					item.img = null; // no need to store image element after it's added

					_shout('imageLoadComplete', index, item);
				};

				if(framework.features.transform) {
					
					var placeholderClassName = 'pswp__img pswp__img--placeholder'; 
					placeholderClassName += (item.msrc ? '' : ' pswp__img--placeholder--blank');

					var placeholder = framework.createEl(placeholderClassName, item.msrc ? 'img' : '');
					if(item.msrc) {
						placeholder.src = item.msrc;
					}
					
					_setImageSize(item, placeholder);

					baseDiv.appendChild(placeholder);
					item.placeholder = placeholder;

				}
				

				

				if(!item.loading) {
					_preloadImage(item);
				}


				if( self.allowProgressiveImg() ) {
					// just append image
					if(!_initialContentSet && _features.transform) {
						_imagesToAppendPool.push({
							item:item, 
							baseDiv:baseDiv, 
							img:item.img, 
							index:index, 
							holder:holder
						});
					} else {
						_appendImage(index, item, baseDiv, item.img, true, true);
					}
				}
				
			} else if(item.src && !item.loadError) {
				// image object is created every time, due to bugs of image loading & delay when switching images
				img = framework.createEl('pswp__img', 'img');
				img.style.opacity = 1;
				img.src = item.src;
				_setImageSize(item, img);
				_appendImage(index, item, baseDiv, img, true);
			}
			

			if(!_initialContentSet && index === _currentItemIndex) {
				_currZoomElementStyle = baseDiv.style;
				_showOrHide(item, (img ||item.img) );
			} else {
				_applyZoomPanToItem(item);
			}

			holder.el.innerHTML = '';
			holder.el.appendChild(baseDiv);
		},

		cleanSlide: function( item ) {
			if(item.img ) {
				item.img.onload = item.img.onerror = null;
			}
			item.loaded = item.loading = item.img = item.imageAppended = false;
		}

	}
});

/*>>items-controller*/

/*>>tap*/
/**
 * tap.js:
 *
 * Displatches tap and double-tap events.
 * 
 */

var tapTimer,
	tapReleasePoint = {},
	_dispatchTapEvent = function(origEvent, releasePoint, pointerType) {		
		var e = document.createEvent( 'CustomEvent' ),
			eDetail = {
				origEvent:origEvent, 
				target:origEvent.target, 
				releasePoint: releasePoint, 
				pointerType:pointerType || 'touch'
			};

		e.initCustomEvent( 'pswpTap', true, true, eDetail );
		origEvent.target.dispatchEvent(e);
	};

_registerModule('Tap', {
	publicMethods: {
		initTap: function() {
			_listen('firstTouchStart', self.onTapStart);
			_listen('touchRelease', self.onTapRelease);
			_listen('destroy', function() {
				tapReleasePoint = {};
				tapTimer = null;
			});
		},
		onTapStart: function(touchList) {
			if(touchList.length > 1) {
				clearTimeout(tapTimer);
				tapTimer = null;
			}
		},
		onTapRelease: function(e, releasePoint) {
			if(!releasePoint) {
				return;
			}

			if(!_moved && !_isMultitouch && !_numAnimations) {
				var p0 = releasePoint;
				if(tapTimer) {
					clearTimeout(tapTimer);
					tapTimer = null;

					// Check if taped on the same place
					if ( _isNearbyPoints(p0, tapReleasePoint) ) {
						_shout('doubleTap', p0);
						return;
					}
				}

				if(releasePoint.type === 'mouse') {
					_dispatchTapEvent(e, releasePoint, 'mouse');
					return;
				}

				var clickedTagName = e.target.tagName.toUpperCase();
				// avoid double tap delay on buttons and elements that have class pswp__single-tap
				if(clickedTagName === 'BUTTON' || framework.hasClass(e.target, 'pswp__single-tap') ) {
					_dispatchTapEvent(e, releasePoint);
					return;
				}

				_equalizePoints(tapReleasePoint, p0);

				tapTimer = setTimeout(function() {
					_dispatchTapEvent(e, releasePoint);
					tapTimer = null;
				}, 300);
			}
		}
	}
});

/*>>tap*/

/*>>desktop-zoom*/
/**
 *
 * desktop-zoom.js:
 *
 * - Binds mousewheel event for paning zoomed image.
 * - Manages "dragging", "zoomed-in", "zoom-out" classes.
 *   (which are used for cursors and zoom icon)
 * - Adds toggleDesktopZoom function.
 * 
 */

var _wheelDelta;
	
_registerModule('DesktopZoom', {

	publicMethods: {

		initDesktopZoom: function() {

			if(_oldIE) {
				// no zoom for old IE (<=8)
				return;
			}

			if(_likelyTouchDevice) {
				// if detected hardware touch support, we wait until mouse is used,
				// and only then apply desktop-zoom features
				_listen('mouseUsed', function() {
					self.setupDesktopZoom();
				});
			} else {
				self.setupDesktopZoom(true);
			}

		},

		setupDesktopZoom: function(onInit) {

			_wheelDelta = {};

			var events = 'wheel mousewheel DOMMouseScroll';
			
			_listen('bindEvents', function() {
				framework.bind(template, events,  self.handleMouseWheel);
			});

			_listen('unbindEvents', function() {
				if(_wheelDelta) {
					framework.unbind(template, events, self.handleMouseWheel);
				}
			});

			self.mouseZoomedIn = false;

			var hasDraggingClass,
				updateZoomable = function() {
					if(self.mouseZoomedIn) {
						framework.removeClass(template, 'pswp--zoomed-in');
						self.mouseZoomedIn = false;
					}
					if(_currZoomLevel < 1) {
						framework.addClass(template, 'pswp--zoom-allowed');
					} else {
						framework.removeClass(template, 'pswp--zoom-allowed');
					}
					removeDraggingClass();
				},
				removeDraggingClass = function() {
					if(hasDraggingClass) {
						framework.removeClass(template, 'pswp--dragging');
						hasDraggingClass = false;
					}
				};

			_listen('resize' , updateZoomable);
			_listen('afterChange' , updateZoomable);
			_listen('pointerDown', function() {
				if(self.mouseZoomedIn) {
					hasDraggingClass = true;
					framework.addClass(template, 'pswp--dragging');
				}
			});
			_listen('pointerUp', removeDraggingClass);

			if(!onInit) {
				updateZoomable();
			}
			
		},

		handleMouseWheel: function(e) {

			if(_currZoomLevel <= self.currItem.fitRatio) {
				if( _options.modal ) {

					if (!_options.closeOnScroll || _numAnimations || _isDragging) {
						e.preventDefault();
					} else if(_transformKey && Math.abs(e.deltaY) > 2) {
						// close PhotoSwipe
						// if browser supports transforms & scroll changed enough
						_closedByScroll = true;
						self.close();
					}

				}
				return true;
			}

			// allow just one event to fire
			e.stopPropagation();

			// https://developer.mozilla.org/en-US/docs/Web/Events/wheel
			_wheelDelta.x = 0;

			if('deltaX' in e) {
				if(e.deltaMode === 1 /* DOM_DELTA_LINE */) {
					// 18 - average line height
					_wheelDelta.x = e.deltaX * 18;
					_wheelDelta.y = e.deltaY * 18;
				} else {
					_wheelDelta.x = e.deltaX;
					_wheelDelta.y = e.deltaY;
				}
			} else if('wheelDelta' in e) {
				if(e.wheelDeltaX) {
					_wheelDelta.x = -0.16 * e.wheelDeltaX;
				}
				if(e.wheelDeltaY) {
					_wheelDelta.y = -0.16 * e.wheelDeltaY;
				} else {
					_wheelDelta.y = -0.16 * e.wheelDelta;
				}
			} else if('detail' in e) {
				_wheelDelta.y = e.detail;
			} else {
				return;
			}

			_calculatePanBounds(_currZoomLevel, true);

			var newPanX = _panOffset.x - _wheelDelta.x,
				newPanY = _panOffset.y - _wheelDelta.y;

			// only prevent scrolling in nonmodal mode when not at edges
			if (_options.modal ||
				(
				newPanX <= _currPanBounds.min.x && newPanX >= _currPanBounds.max.x &&
				newPanY <= _currPanBounds.min.y && newPanY >= _currPanBounds.max.y
				) ) {
				e.preventDefault();
			}

			// TODO: use rAF instead of mousewheel?
			self.panTo(newPanX, newPanY);
		},

		toggleDesktopZoom: function(centerPoint) {
			centerPoint = centerPoint || {x:_viewportSize.x/2 + _offset.x, y:_viewportSize.y/2 + _offset.y };

			var doubleTapZoomLevel = _options.getDoubleTapZoom(true, self.currItem);
			var zoomOut = _currZoomLevel === doubleTapZoomLevel;
			
			self.mouseZoomedIn = !zoomOut;

			self.zoomTo(zoomOut ? self.currItem.initialZoomLevel : doubleTapZoomLevel, centerPoint, 333);
			framework[ (!zoomOut ? 'add' : 'remove') + 'Class'](template, 'pswp--zoomed-in');
		}

	}
});


/*>>desktop-zoom*/

/*>>history*/
/**
 *
 * history.js:
 *
 * - Back button to close gallery.
 * 
 * - Unique URL for each slide: example.com/&pid=1&gid=3
 *   (where PID is picture index, and GID and gallery index)
 *   
 * - Switch URL when slides change.
 * 
 */


var _historyDefaultOptions = {
	history: true,
	galleryUID: 1
};

var _historyUpdateTimeout,
	_hashChangeTimeout,
	_hashAnimCheckTimeout,
	_hashChangedByScript,
	_hashChangedByHistory,
	_hashReseted,
	_initialHash,
	_historyChanged,
	_closedFromURL,
	_urlChangedOnce,
	_windowLoc,

	_supportsPushState,

	_getHash = function() {
		return _windowLoc.hash.substring(1);
	},
	_cleanHistoryTimeouts = function() {

		if(_historyUpdateTimeout) {
			clearTimeout(_historyUpdateTimeout);
		}

		if(_hashAnimCheckTimeout) {
			clearTimeout(_hashAnimCheckTimeout);
		}
	},

	// pid - Picture index
	// gid - Gallery index
	_parseItemIndexFromURL = function() {
		var hash = _getHash(),
			params = {};

		if(hash.length < 5) { // pid=1
			return params;
		}

		var i, vars = hash.split('&');
		for (i = 0; i < vars.length; i++) {
			if(!vars[i]) {
				continue;
			}
			var pair = vars[i].split('=');	
			if(pair.length < 2) {
				continue;
			}
			params[pair[0]] = pair[1];
		}
		if(_options.galleryPIDs) {
			// detect custom pid in hash and search for it among the items collection
			var searchfor = params.pid;
			params.pid = 0; // if custom pid cannot be found, fallback to the first item
			for(i = 0; i < _items.length; i++) {
				if(_items[i].pid === searchfor) {
					params.pid = i;
					break;
				}
			}
		} else {
			params.pid = parseInt(params.pid,10)-1;
		}
		if( params.pid < 0 ) {
			params.pid = 0;
		}
		return params;
	},
	_updateHash = function() {

		if(_hashAnimCheckTimeout) {
			clearTimeout(_hashAnimCheckTimeout);
		}


		if(_numAnimations || _isDragging) {
			// changing browser URL forces layout/paint in some browsers, which causes noticable lag during animation
			// that's why we update hash only when no animations running
			_hashAnimCheckTimeout = setTimeout(_updateHash, 500);
			return;
		}
		
		if(_hashChangedByScript) {
			clearTimeout(_hashChangeTimeout);
		} else {
			_hashChangedByScript = true;
		}


		var pid = (_currentItemIndex + 1);
		var item = _getItemAt( _currentItemIndex );
		if(item.hasOwnProperty('pid')) {
			// carry forward any custom pid assigned to the item
			pid = item.pid;
		}
		var newHash = _initialHash + '&'  +  'gid=' + _options.galleryUID + '&' + 'pid=' + pid;

		if(!_historyChanged) {
			if(_windowLoc.hash.indexOf(newHash) === -1) {
				_urlChangedOnce = true;
			}
			// first time - add new hisory record, then just replace
		}

		var newURL = _windowLoc.href.split('#')[0] + '#' +  newHash;

		if( _supportsPushState ) {

			if('#' + newHash !== window.location.hash) {
				history[_historyChanged ? 'replaceState' : 'pushState']('', document.title, newURL);
			}

		} else {
			if(_historyChanged) {
				_windowLoc.replace( newURL );
			} else {
				_windowLoc.hash = newHash;
			}
		}
		
		

		_historyChanged = true;
		_hashChangeTimeout = setTimeout(function() {
			_hashChangedByScript = false;
		}, 60);
	};



	

_registerModule('History', {

	

	publicMethods: {
		initHistory: function() {

			framework.extend(_options, _historyDefaultOptions, true);

			if( !_options.history ) {
				return;
			}


			_windowLoc = window.location;
			_urlChangedOnce = false;
			_closedFromURL = false;
			_historyChanged = false;
			_initialHash = _getHash();
			_supportsPushState = ('pushState' in history);


			if(_initialHash.indexOf('gid=') > -1) {
				_initialHash = _initialHash.split('&gid=')[0];
				_initialHash = _initialHash.split('?gid=')[0];
			}
			

			_listen('afterChange', self.updateURL);
			_listen('unbindEvents', function() {
				framework.unbind(window, 'hashchange', self.onHashChange);
			});


			var returnToOriginal = function() {
				_hashReseted = true;
				if(!_closedFromURL) {

					if(_urlChangedOnce) {
						history.back();
					} else {

						if(_initialHash) {
							_windowLoc.hash = _initialHash;
						} else {
							if (_supportsPushState) {

								// remove hash from url without refreshing it or scrolling to top
								history.pushState('', document.title,  _windowLoc.pathname + _windowLoc.search );
							} else {
								_windowLoc.hash = '';
							}
						}
					}
					
				}

				_cleanHistoryTimeouts();
			};


			_listen('unbindEvents', function() {
				if(_closedByScroll) {
					// if PhotoSwipe is closed by scroll, we go "back" before the closing animation starts
					// this is done to keep the scroll position
					returnToOriginal();
				}
			});
			_listen('destroy', function() {
				if(!_hashReseted) {
					returnToOriginal();
				}
			});
			_listen('firstUpdate', function() {
				_currentItemIndex = _parseItemIndexFromURL().pid;
			});

			

			
			var index = _initialHash.indexOf('pid=');
			if(index > -1) {
				_initialHash = _initialHash.substring(0, index);
				if(_initialHash.slice(-1) === '&') {
					_initialHash = _initialHash.slice(0, -1);
				}
			}
			

			setTimeout(function() {
				if(_isOpen) { // hasn't destroyed yet
					framework.bind(window, 'hashchange', self.onHashChange);
				}
			}, 40);
			
		},
		onHashChange: function() {

			if(_getHash() === _initialHash) {

				_closedFromURL = true;
				self.close();
				return;
			}
			if(!_hashChangedByScript) {

				_hashChangedByHistory = true;
				self.goTo( _parseItemIndexFromURL().pid );
				_hashChangedByHistory = false;
			}
			
		},
		updateURL: function() {

			// Delay the update of URL, to avoid lag during transition, 
			// and to not to trigger actions like "refresh page sound" or "blinking favicon" to often
			
			_cleanHistoryTimeouts();
			

			if(_hashChangedByHistory) {
				return;
			}

			if(!_historyChanged) {
				_updateHash(); // first time
			} else {
				_historyUpdateTimeout = setTimeout(_updateHash, 800);
			}
		}
	
	}
});


/*>>history*/
	framework.extend(self, publicMethods); };
	return PhotoSwipe;
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjRkYTA3YmE2MjNhZWMzMWQzOGEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGhvdG9zd2lwZS9kaXN0L3Bob3Rvc3dpcGUtdWktZGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGhvdG9zd2lwZS9kaXN0L3Bob3Rvc3dpcGUuanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwibGF6eWxvYWQiLCJvcGVuUGhvdG9Td2lwZSIsInBzd3BFbGVtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIml0ZW1zIiwic3JjIiwidyIsImgiLCJvcHRpb25zIiwiaW5kZXgiLCJnYWxsZXJ5IiwiaW5pdCIsImdldEVsZW1lbnRCeUlkIiwib25jbGljayJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBO0FBQ0E7O0FBRUFBLFNBQVNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFZO0FBQ3hEO0FBQ0FDOztBQUVBLE1BQUlDLGlCQUFpQixTQUFqQkEsY0FBaUIsR0FBWTs7QUFFL0I7QUFDQSxRQUFJQyxjQUFjSixTQUFTSyxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxDQUFuQyxDQUFsQjs7QUFFQTtBQUNBLFFBQUlDLFFBQVEsQ0FDVjtBQUNFQyxXQUFLLDRCQURQO0FBRUVDLFNBQUcsSUFGTDtBQUdFQyxTQUFHO0FBSEwsS0FEVSxFQU1WO0FBQ0VGLFdBQUssa0NBRFA7QUFFRUMsU0FBRyxJQUZMO0FBR0VDLFNBQUc7QUFITCxLQU5VLENBQVo7O0FBYUE7QUFDQSxRQUFJQyxVQUFVO0FBQ1o7QUFDQTtBQUNBQyxhQUFPO0FBSEssS0FBZDs7QUFNQTtBQUNBLFFBQUlDLFVBQVUsSUFBSSxrREFBSixDQUFnQlIsV0FBaEIsRUFBNkIsNkVBQTdCLEVBQW1ERSxLQUFuRCxFQUEwREksT0FBMUQsQ0FBZDtBQUNBRSxZQUFRQyxJQUFSO0FBQ0QsR0E3QkQ7O0FBK0JBYixXQUFTYyxjQUFULENBQXdCLFNBQXhCLEVBQW1DQyxPQUFuQyxHQUE2Q1osY0FBN0M7QUFDRCxDQXBDRCxFOzs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxDQUFDOztBQUVEOzs7O0FBSUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYyxzQkFBc0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEtBQUssOEZBQThGLEtBQUssRUFBRTtBQUMxRyxLQUFLLDBFQUEwRSxNQUFNLE9BQU8sS0FBSyxFQUFFO0FBQ25HLEtBQUs7QUFDTCxxQkFBcUIsS0FBSyxTQUFTLFdBQVcsZUFBZSxNQUFNLEVBQUU7QUFDckUsS0FBSyw4Q0FBOEMsZUFBZTtBQUNsRTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsd0JBQXdCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixrQ0FBa0M7QUFDbkQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDhDQUE4QyxLQUFLO0FBQ25ELHFCQUFxQixXQUFXO0FBQ2hDLHFCQUFxQixlQUFlO0FBQ3BDLHFCQUFxQixNQUFNOztBQUUzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0Esa0JBQWtCLG9DQUFvQztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QztBQUNBO0FBQ0E7O0FBRUEsT0FBTztBQUNQLHFDQUFxQztBQUNyQzs7QUFFQSxNQUFNOztBQUVOLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBOztBQUVBLGlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLDRCQUE0QjtBQUM1QjtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjs7OztBQUlBO0FBQ0EsRztBQUNBO0FBQ0E7QUFDQSx5QjtBQUNBLDJCO0FBQ0EsSTtBQUNBLEdBQUc7QUFDSCxHO0FBQ0E7QUFDQTtBQUNBLHlCO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLEk7QUFDQSxHQUFHO0FBQ0gsRztBQUNBO0FBQ0E7QUFDQSx5QjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJO0FBQ0EsR0FBRztBQUNILEc7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRztBQUNBO0FBQ0E7QUFDQSx5QjtBQUNBO0FBQ0EsSTtBQUNBLEdBQUc7QUFDSCxHO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEc7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxHO0FBQ0E7QUFDQTtBQUNBLHNCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsSTtBQUNBLEdBQUc7QUFDSCxHO0FBQ0E7QUFDQTtBQUNBLHlCO0FBQ0E7QUFDQSxJO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7O0FBRUE7O0FBRUEsd0NBQXdDOztBQUV4QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCO0FBQ0E7QUFDQSx1RDtBQUNBLG1DOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wseUM7QUFDQTtBQUNBO0FBQ0EsMEI7QUFDQTs7QUFFQSxrQzs7QUFFQTtBQUNBLGtDQUFrQyxnQ0FBZ0M7QUFDbEU7O0FBRUE7QUFDQTs7OztBQUlBO0FBQ0E7OztBQUdBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUM1MUJEO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEMsMkI7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLDRGO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixPQUFPLFdBQVc7QUFDM0M7QUFDQTs7QUFFQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLDhCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQSw2Q0FBNkM7QUFDN0MsSTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLE9BQU87QUFDdkI7O0FBRUEsaUJBQWlCLE9BQU87QUFDeEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsMkJBQTJCLEVBQUU7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGtCQUFrQjtBQUNsRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQSxpQztBQUNBLFVBQVUsUztBQUNWOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLHNCQUFzQjtBQUN2QztBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EsaUU7QUFDQTs7QUFFQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTs7QUFFRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsa0U7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSwyQztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxJQUFJLDRCO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEs7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0Esa0Q7QUFDQTs7Ozs7Ozs7QUFRQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJOztBQUVBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDBDQUEwQztBQUMxQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQSxFQUFFOztBQUVGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQzs7OztBQUlBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7OztBQUlBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qjs7QUFFeEI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxFQUFFOztBQUVGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUk7QUFDSjtBQUNBO0FBQ0EsRztBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsRUFBRTs7QUFFRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsS0FBSztBQUNMLHFCQUFxQjtBQUNyQixLO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOzs7QUFHRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QixvQkFBb0I7QUFDcEIscUJBQXFCO0FBQ3JCLHFCQUFxQjtBQUNyQiw0QkFBNEI7QUFDNUIsOEJBQThCO0FBQzlCLGlDQUFpQztBQUNqQyxzQkFBc0I7QUFDdEIsMEJBQTBCO0FBQzFCLHNCQUFzQjtBQUN0Qjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLCtEQUErRDtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7O0FBR0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSw0QjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSixpRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQzs7QUFFQTtBQUNBO0FBQ0Esd0RBQXdEOztBQUV4RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7O0FBR0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxvQ0FBb0MsU0FBUztBQUM3QztBQUNBLGtCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSxpQkFBaUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsUUFBUSxRQUFRO0FBQ2hCLFFBQVE7QUFDUjtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtB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QTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUEsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCLHFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxpQ0FBaUM7O0FBRWpDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7O0FBR0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVCQUF1QjtBQUN2QjtBQUNBOztBQUVBO0FBQ0EsYUFBYSxpQkFBaUI7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsaUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLGFBQWEsbUJBQW1CO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7OztBQU1BOzs7O0FBSUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJOzs7OztBQUtKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsSUFBSTs7QUFFSixHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCO0FBQ2xCLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOzs7QUFHRDtBQUNBLHVDQUF1QztBQUN2QztBQUNBLENBQUMsRSIsImZpbGUiOiJqcy9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYXNzZXRzL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hc3NldHMvanMvYXBwLmpzXCIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGI0ZGEwN2JhNjIzYWVjMzFkMzhhIiwiaW1wb3J0IFBob3RvU3dpcGUgZnJvbSAncGhvdG9zd2lwZSc7XG5pbXBvcnQgUGhvdG9Td2lwZVVJX0RlZmF1bHQgZnJvbSAncGhvdG9zd2lwZS9kaXN0L3Bob3Rvc3dpcGUtdWktZGVmYXVsdCc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gIC8vIExhenlsb2FkLlxuICBsYXp5bG9hZCgpO1xuXG4gIHZhciBvcGVuUGhvdG9Td2lwZSA9IGZ1bmN0aW9uICgpIHtcblxuICAgIC8vIFBob3Rvc3dpcGUuXG4gICAgbGV0IHBzd3BFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBzd3AnKVswXTtcblxuICAgIC8vIGJ1aWxkIGl0ZW1zIGFycmF5XG4gICAgbGV0IGl0ZW1zID0gW1xuICAgICAge1xuICAgICAgICBzcmM6ICcvYXNzZXRzL2ltYWdlcy9nb3JpbGxhLmpwZycsXG4gICAgICAgIHc6IDEwMDAsXG4gICAgICAgIGg6IDY2N1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3JjOiAnaHR0cHM6Ly9wbGFjZWtpdHRlbi5jb20vMTIwMC85MDAnLFxuICAgICAgICB3OiAxMjAwLFxuICAgICAgICBoOiA5MDBcbiAgICAgIH1cbiAgICBdO1xuXG4gICAgLy8gZGVmaW5lIG9wdGlvbnMgKGlmIG5lZWRlZClcbiAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgIC8vIG9wdGlvbk5hbWU6ICdvcHRpb24gdmFsdWUnXG4gICAgICAvLyBmb3IgZXhhbXBsZTpcbiAgICAgIGluZGV4OiAwXG4gICAgfTtcblxuICAgIC8vIEluaXRpYWxpemVzIGFuZCBvcGVucyBQaG90b1N3aXBlXG4gICAgbGV0IGdhbGxlcnkgPSBuZXcgUGhvdG9Td2lwZSggcHN3cEVsZW1lbnQsIFBob3RvU3dpcGVVSV9EZWZhdWx0LCBpdGVtcywgb3B0aW9ucyk7XG4gICAgZ2FsbGVyeS5pbml0KCk7XG4gIH07XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dvcmlsbGEnKS5vbmNsaWNrID0gb3BlblBob3RvU3dpcGU7XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9hcHAuanMiLCIvKiEgUGhvdG9Td2lwZSBEZWZhdWx0IFVJIC0gNC4xLjIgLSAyMDE3LTA0LTA1XG4qIGh0dHA6Ly9waG90b3N3aXBlLmNvbVxuKiBDb3B5cmlnaHQgKGMpIDIwMTcgRG1pdHJ5IFNlbWVub3Y7ICovXG4vKipcbipcbiogVUkgb24gdG9wIG9mIG1haW4gc2xpZGluZyBhcmVhIChjYXB0aW9uLCBhcnJvd3MsIGNsb3NlIGJ1dHRvbiwgZXRjLikuXG4qIEJ1aWx0IGp1c3QgdXNpbmcgcHVibGljIG1ldGhvZHMvcHJvcGVydGllcyBvZiBQaG90b1N3aXBlLlxuKiBcbiovXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHsgXG5cdGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcblx0XHRkZWZpbmUoZmFjdG9yeSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdH0gZWxzZSB7XG5cdFx0cm9vdC5QaG90b1N3aXBlVUlfRGVmYXVsdCA9IGZhY3RvcnkoKTtcblx0fVxufSkodGhpcywgZnVuY3Rpb24gKCkge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXG5cbnZhciBQaG90b1N3aXBlVUlfRGVmYXVsdCA9XG4gZnVuY3Rpb24ocHN3cCwgZnJhbWV3b3JrKSB7XG5cblx0dmFyIHVpID0gdGhpcztcblx0dmFyIF9vdmVybGF5VUlVcGRhdGVkID0gZmFsc2UsXG5cdFx0X2NvbnRyb2xzVmlzaWJsZSA9IHRydWUsXG5cdFx0X2Z1bGxzY3JlbkFQSSxcblx0XHRfY29udHJvbHMsXG5cdFx0X2NhcHRpb25Db250YWluZXIsXG5cdFx0X2Zha2VDYXB0aW9uQ29udGFpbmVyLFxuXHRcdF9pbmRleEluZGljYXRvcixcblx0XHRfc2hhcmVCdXR0b24sXG5cdFx0X3NoYXJlTW9kYWwsXG5cdFx0X3NoYXJlTW9kYWxIaWRkZW4gPSB0cnVlLFxuXHRcdF9pbml0YWxDbG9zZU9uU2Nyb2xsVmFsdWUsXG5cdFx0X2lzSWRsZSxcblx0XHRfbGlzdGVuLFxuXG5cdFx0X2xvYWRpbmdJbmRpY2F0b3IsXG5cdFx0X2xvYWRpbmdJbmRpY2F0b3JIaWRkZW4sXG5cdFx0X2xvYWRpbmdJbmRpY2F0b3JUaW1lb3V0LFxuXG5cdFx0X2dhbGxlcnlIYXNPbmVTbGlkZSxcblxuXHRcdF9vcHRpb25zLFxuXHRcdF9kZWZhdWx0VUlPcHRpb25zID0ge1xuXHRcdFx0YmFyc1NpemU6IHt0b3A6NDQsIGJvdHRvbTonYXV0byd9LFxuXHRcdFx0Y2xvc2VFbENsYXNzZXM6IFsnaXRlbScsICdjYXB0aW9uJywgJ3pvb20td3JhcCcsICd1aScsICd0b3AtYmFyJ10sIFxuXHRcdFx0dGltZVRvSWRsZTogNDAwMCwgXG5cdFx0XHR0aW1lVG9JZGxlT3V0c2lkZTogMTAwMCxcblx0XHRcdGxvYWRpbmdJbmRpY2F0b3JEZWxheTogMTAwMCwgLy8gMnNcblx0XHRcdFxuXHRcdFx0YWRkQ2FwdGlvbkhUTUxGbjogZnVuY3Rpb24oaXRlbSwgY2FwdGlvbkVsIC8qLCBpc0Zha2UgKi8pIHtcblx0XHRcdFx0aWYoIWl0ZW0udGl0bGUpIHtcblx0XHRcdFx0XHRjYXB0aW9uRWwuY2hpbGRyZW5bMF0uaW5uZXJIVE1MID0gJyc7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNhcHRpb25FbC5jaGlsZHJlblswXS5pbm5lckhUTUwgPSBpdGVtLnRpdGxlO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH0sXG5cblx0XHRcdGNsb3NlRWw6dHJ1ZSxcblx0XHRcdGNhcHRpb25FbDogdHJ1ZSxcblx0XHRcdGZ1bGxzY3JlZW5FbDogdHJ1ZSxcblx0XHRcdHpvb21FbDogdHJ1ZSxcblx0XHRcdHNoYXJlRWw6IHRydWUsXG5cdFx0XHRjb3VudGVyRWw6IHRydWUsXG5cdFx0XHRhcnJvd0VsOiB0cnVlLFxuXHRcdFx0cHJlbG9hZGVyRWw6IHRydWUsXG5cblx0XHRcdHRhcFRvQ2xvc2U6IGZhbHNlLFxuXHRcdFx0dGFwVG9Ub2dnbGVDb250cm9sczogdHJ1ZSxcblxuXHRcdFx0Y2xpY2tUb0Nsb3NlTm9uWm9vbWFibGU6IHRydWUsXG5cblx0XHRcdHNoYXJlQnV0dG9uczogW1xuXHRcdFx0XHR7aWQ6J2ZhY2Vib29rJywgbGFiZWw6J1NoYXJlIG9uIEZhY2Vib29rJywgdXJsOidodHRwczovL3d3dy5mYWNlYm9vay5jb20vc2hhcmVyL3NoYXJlci5waHA/dT17e3VybH19J30sXG5cdFx0XHRcdHtpZDondHdpdHRlcicsIGxhYmVsOidUd2VldCcsIHVybDonaHR0cHM6Ly90d2l0dGVyLmNvbS9pbnRlbnQvdHdlZXQ/dGV4dD17e3RleHR9fSZ1cmw9e3t1cmx9fSd9LFxuXHRcdFx0XHR7aWQ6J3BpbnRlcmVzdCcsIGxhYmVsOidQaW4gaXQnLCB1cmw6J2h0dHA6Ly93d3cucGludGVyZXN0LmNvbS9waW4vY3JlYXRlL2J1dHRvbi8nK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnP3VybD17e3VybH19Jm1lZGlhPXt7aW1hZ2VfdXJsfX0mZGVzY3JpcHRpb249e3t0ZXh0fX0nfSxcblx0XHRcdFx0e2lkOidkb3dubG9hZCcsIGxhYmVsOidEb3dubG9hZCBpbWFnZScsIHVybDone3tyYXdfaW1hZ2VfdXJsfX0nLCBkb3dubG9hZDp0cnVlfVxuXHRcdFx0XSxcblx0XHRcdGdldEltYWdlVVJMRm9yU2hhcmU6IGZ1bmN0aW9uKCAvKiBzaGFyZUJ1dHRvbkRhdGEgKi8gKSB7XG5cdFx0XHRcdHJldHVybiBwc3dwLmN1cnJJdGVtLnNyYyB8fCAnJztcblx0XHRcdH0sXG5cdFx0XHRnZXRQYWdlVVJMRm9yU2hhcmU6IGZ1bmN0aW9uKCAvKiBzaGFyZUJ1dHRvbkRhdGEgKi8gKSB7XG5cdFx0XHRcdHJldHVybiB3aW5kb3cubG9jYXRpb24uaHJlZjtcblx0XHRcdH0sXG5cdFx0XHRnZXRUZXh0Rm9yU2hhcmU6IGZ1bmN0aW9uKCAvKiBzaGFyZUJ1dHRvbkRhdGEgKi8gKSB7XG5cdFx0XHRcdHJldHVybiBwc3dwLmN1cnJJdGVtLnRpdGxlIHx8ICcnO1xuXHRcdFx0fSxcblx0XHRcdFx0XG5cdFx0XHRpbmRleEluZGljYXRvclNlcDogJyAvICcsXG5cdFx0XHRmaXRDb250cm9sc1dpZHRoOiAxMjAwXG5cblx0XHR9LFxuXHRcdF9ibG9ja0NvbnRyb2xzVGFwLFxuXHRcdF9ibG9ja0NvbnRyb2xzVGFwVGltZW91dDtcblxuXG5cblx0dmFyIF9vbkNvbnRyb2xzVGFwID0gZnVuY3Rpb24oZSkge1xuXHRcdFx0aWYoX2Jsb2NrQ29udHJvbHNUYXApIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cblxuXHRcdFx0ZSA9IGUgfHwgd2luZG93LmV2ZW50O1xuXG5cdFx0XHRpZihfb3B0aW9ucy50aW1lVG9JZGxlICYmIF9vcHRpb25zLm1vdXNlVXNlZCAmJiAhX2lzSWRsZSkge1xuXHRcdFx0XHQvLyByZXNldCBpZGxlIHRpbWVyXG5cdFx0XHRcdF9vbklkbGVNb3VzZU1vdmUoKTtcblx0XHRcdH1cblxuXG5cdFx0XHR2YXIgdGFyZ2V0ID0gZS50YXJnZXQgfHwgZS5zcmNFbGVtZW50LFxuXHRcdFx0XHR1aUVsZW1lbnQsXG5cdFx0XHRcdGNsaWNrZWRDbGFzcyA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgfHwgJycsXG5cdFx0XHRcdGZvdW5kO1xuXG5cdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgX3VpRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dWlFbGVtZW50ID0gX3VpRWxlbWVudHNbaV07XG5cdFx0XHRcdGlmKHVpRWxlbWVudC5vblRhcCAmJiBjbGlja2VkQ2xhc3MuaW5kZXhPZigncHN3cF9fJyArIHVpRWxlbWVudC5uYW1lICkgPiAtMSApIHtcblx0XHRcdFx0XHR1aUVsZW1lbnQub25UYXAoKTtcblx0XHRcdFx0XHRmb3VuZCA9IHRydWU7XG5cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZihmb3VuZCkge1xuXHRcdFx0XHRpZihlLnN0b3BQcm9wYWdhdGlvbikge1xuXHRcdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0X2Jsb2NrQ29udHJvbHNUYXAgPSB0cnVlO1xuXG5cdFx0XHRcdC8vIFNvbWUgdmVyc2lvbnMgb2YgQW5kcm9pZCBkb24ndCBwcmV2ZW50IGdob3N0IGNsaWNrIGV2ZW50IFxuXHRcdFx0XHQvLyB3aGVuIHByZXZlbnREZWZhdWx0KCkgd2FzIGNhbGxlZCBvbiB0b3VjaHN0YXJ0IGFuZC9vciB0b3VjaGVuZC5cblx0XHRcdFx0Ly8gXG5cdFx0XHRcdC8vIFRoaXMgaGFwcGVucyBvbiB2NC4zLCA0LjIsIDQuMSwgXG5cdFx0XHRcdC8vIG9sZGVyIHZlcnNpb25zIHN0cmFuZ2VseSB3b3JrIGNvcnJlY3RseSwgXG5cdFx0XHRcdC8vIGJ1dCBqdXN0IGluIGNhc2Ugd2UgYWRkIGRlbGF5IG9uIGFsbCBvZiB0aGVtKVx0XG5cdFx0XHRcdHZhciB0YXBEZWxheSA9IGZyYW1ld29yay5mZWF0dXJlcy5pc09sZEFuZHJvaWQgPyA2MDAgOiAzMDtcblx0XHRcdFx0X2Jsb2NrQ29udHJvbHNUYXBUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRfYmxvY2tDb250cm9sc1RhcCA9IGZhbHNlO1xuXHRcdFx0XHR9LCB0YXBEZWxheSk7XG5cdFx0XHR9XG5cblx0XHR9LFxuXHRcdF9maXRDb250cm9sc0luVmlld3BvcnQgPSBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiAhcHN3cC5saWtlbHlUb3VjaERldmljZSB8fCBfb3B0aW9ucy5tb3VzZVVzZWQgfHwgc2NyZWVuLndpZHRoID4gX29wdGlvbnMuZml0Q29udHJvbHNXaWR0aDtcblx0XHR9LFxuXHRcdF90b2dnbGVQc3dwQ2xhc3MgPSBmdW5jdGlvbihlbCwgY05hbWUsIGFkZCkge1xuXHRcdFx0ZnJhbWV3b3JrWyAoYWRkID8gJ2FkZCcgOiAncmVtb3ZlJykgKyAnQ2xhc3MnIF0oZWwsICdwc3dwX18nICsgY05hbWUpO1xuXHRcdH0sXG5cblx0XHQvLyBhZGQgY2xhc3Mgd2hlbiB0aGVyZSBpcyBqdXN0IG9uZSBpdGVtIGluIHRoZSBnYWxsZXJ5XG5cdFx0Ly8gKGJ5IGRlZmF1bHQgaXQgaGlkZXMgbGVmdC9yaWdodCBhcnJvd3MgYW5kIDFvZlggY291bnRlcilcblx0XHRfY291bnROdW1JdGVtcyA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGhhc09uZVNsaWRlID0gKF9vcHRpb25zLmdldE51bUl0ZW1zRm4oKSA9PT0gMSk7XG5cblx0XHRcdGlmKGhhc09uZVNsaWRlICE9PSBfZ2FsbGVyeUhhc09uZVNsaWRlKSB7XG5cdFx0XHRcdF90b2dnbGVQc3dwQ2xhc3MoX2NvbnRyb2xzLCAndWktLW9uZS1zbGlkZScsIGhhc09uZVNsaWRlKTtcblx0XHRcdFx0X2dhbGxlcnlIYXNPbmVTbGlkZSA9IGhhc09uZVNsaWRlO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0X3RvZ2dsZVNoYXJlTW9kYWxDbGFzcyA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0X3RvZ2dsZVBzd3BDbGFzcyhfc2hhcmVNb2RhbCwgJ3NoYXJlLW1vZGFsLS1oaWRkZW4nLCBfc2hhcmVNb2RhbEhpZGRlbik7XG5cdFx0fSxcblx0XHRfdG9nZ2xlU2hhcmVNb2RhbCA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRfc2hhcmVNb2RhbEhpZGRlbiA9ICFfc2hhcmVNb2RhbEhpZGRlbjtcblx0XHRcdFxuXHRcdFx0XG5cdFx0XHRpZighX3NoYXJlTW9kYWxIaWRkZW4pIHtcblx0XHRcdFx0X3RvZ2dsZVNoYXJlTW9kYWxDbGFzcygpO1xuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlmKCFfc2hhcmVNb2RhbEhpZGRlbikge1xuXHRcdFx0XHRcdFx0ZnJhbWV3b3JrLmFkZENsYXNzKF9zaGFyZU1vZGFsLCAncHN3cF9fc2hhcmUtbW9kYWwtLWZhZGUtaW4nKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sIDMwKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZyYW1ld29yay5yZW1vdmVDbGFzcyhfc2hhcmVNb2RhbCwgJ3Bzd3BfX3NoYXJlLW1vZGFsLS1mYWRlLWluJyk7XG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aWYoX3NoYXJlTW9kYWxIaWRkZW4pIHtcblx0XHRcdFx0XHRcdF90b2dnbGVTaGFyZU1vZGFsQ2xhc3MoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sIDMwMCk7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdGlmKCFfc2hhcmVNb2RhbEhpZGRlbikge1xuXHRcdFx0XHRfdXBkYXRlU2hhcmVVUkxzKCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSxcblxuXHRcdF9vcGVuV2luZG93UG9wdXAgPSBmdW5jdGlvbihlKSB7XG5cdFx0XHRlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XG5cdFx0XHR2YXIgdGFyZ2V0ID0gZS50YXJnZXQgfHwgZS5zcmNFbGVtZW50O1xuXG5cdFx0XHRwc3dwLnNob3V0KCdzaGFyZUxpbmtDbGljaycsIGUsIHRhcmdldCk7XG5cblx0XHRcdGlmKCF0YXJnZXQuaHJlZikge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCB0YXJnZXQuaGFzQXR0cmlidXRlKCdkb3dubG9hZCcpICkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0d2luZG93Lm9wZW4odGFyZ2V0LmhyZWYsICdwc3dwX3NoYXJlJywgJ3Njcm9sbGJhcnM9eWVzLHJlc2l6YWJsZT15ZXMsdG9vbGJhcj1ubywnK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQnbG9jYXRpb249eWVzLHdpZHRoPTU1MCxoZWlnaHQ9NDIwLHRvcD0xMDAsbGVmdD0nICsgXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCh3aW5kb3cuc2NyZWVuID8gTWF0aC5yb3VuZChzY3JlZW4ud2lkdGggLyAyIC0gMjc1KSA6IDEwMCkgICk7XG5cblx0XHRcdGlmKCFfc2hhcmVNb2RhbEhpZGRlbikge1xuXHRcdFx0XHRfdG9nZ2xlU2hhcmVNb2RhbCgpO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSxcblx0XHRfdXBkYXRlU2hhcmVVUkxzID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgc2hhcmVCdXR0b25PdXQgPSAnJyxcblx0XHRcdFx0c2hhcmVCdXR0b25EYXRhLFxuXHRcdFx0XHRzaGFyZVVSTCxcblx0XHRcdFx0aW1hZ2VfdXJsLFxuXHRcdFx0XHRwYWdlX3VybCxcblx0XHRcdFx0c2hhcmVfdGV4dDtcblxuXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IF9vcHRpb25zLnNoYXJlQnV0dG9ucy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRzaGFyZUJ1dHRvbkRhdGEgPSBfb3B0aW9ucy5zaGFyZUJ1dHRvbnNbaV07XG5cblx0XHRcdFx0aW1hZ2VfdXJsID0gX29wdGlvbnMuZ2V0SW1hZ2VVUkxGb3JTaGFyZShzaGFyZUJ1dHRvbkRhdGEpO1xuXHRcdFx0XHRwYWdlX3VybCA9IF9vcHRpb25zLmdldFBhZ2VVUkxGb3JTaGFyZShzaGFyZUJ1dHRvbkRhdGEpO1xuXHRcdFx0XHRzaGFyZV90ZXh0ID0gX29wdGlvbnMuZ2V0VGV4dEZvclNoYXJlKHNoYXJlQnV0dG9uRGF0YSk7XG5cblx0XHRcdFx0c2hhcmVVUkwgPSBzaGFyZUJ1dHRvbkRhdGEudXJsLnJlcGxhY2UoJ3t7dXJsfX0nLCBlbmNvZGVVUklDb21wb25lbnQocGFnZV91cmwpIClcblx0XHRcdFx0XHRcdFx0XHRcdC5yZXBsYWNlKCd7e2ltYWdlX3VybH19JywgZW5jb2RlVVJJQ29tcG9uZW50KGltYWdlX3VybCkgKVxuXHRcdFx0XHRcdFx0XHRcdFx0LnJlcGxhY2UoJ3t7cmF3X2ltYWdlX3VybH19JywgaW1hZ2VfdXJsIClcblx0XHRcdFx0XHRcdFx0XHRcdC5yZXBsYWNlKCd7e3RleHR9fScsIGVuY29kZVVSSUNvbXBvbmVudChzaGFyZV90ZXh0KSApO1xuXG5cdFx0XHRcdHNoYXJlQnV0dG9uT3V0ICs9ICc8YSBocmVmPVwiJyArIHNoYXJlVVJMICsgJ1wiIHRhcmdldD1cIl9ibGFua1wiICcrXG5cdFx0XHRcdFx0XHRcdFx0XHQnY2xhc3M9XCJwc3dwX19zaGFyZS0tJyArIHNoYXJlQnV0dG9uRGF0YS5pZCArICdcIicgK1xuXHRcdFx0XHRcdFx0XHRcdFx0KHNoYXJlQnV0dG9uRGF0YS5kb3dubG9hZCA/ICdkb3dubG9hZCcgOiAnJykgKyAnPicgKyBcblx0XHRcdFx0XHRcdFx0XHRcdHNoYXJlQnV0dG9uRGF0YS5sYWJlbCArICc8L2E+JztcblxuXHRcdFx0XHRpZihfb3B0aW9ucy5wYXJzZVNoYXJlQnV0dG9uT3V0KSB7XG5cdFx0XHRcdFx0c2hhcmVCdXR0b25PdXQgPSBfb3B0aW9ucy5wYXJzZVNoYXJlQnV0dG9uT3V0KHNoYXJlQnV0dG9uRGF0YSwgc2hhcmVCdXR0b25PdXQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRfc2hhcmVNb2RhbC5jaGlsZHJlblswXS5pbm5lckhUTUwgPSBzaGFyZUJ1dHRvbk91dDtcblx0XHRcdF9zaGFyZU1vZGFsLmNoaWxkcmVuWzBdLm9uY2xpY2sgPSBfb3BlbldpbmRvd1BvcHVwO1xuXG5cdFx0fSxcblx0XHRfaGFzQ2xvc2VDbGFzcyA9IGZ1bmN0aW9uKHRhcmdldCkge1xuXHRcdFx0Zm9yKHZhciAgaSA9IDA7IGkgPCBfb3B0aW9ucy5jbG9zZUVsQ2xhc3Nlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiggZnJhbWV3b3JrLmhhc0NsYXNzKHRhcmdldCwgJ3Bzd3BfXycgKyBfb3B0aW9ucy5jbG9zZUVsQ2xhc3Nlc1tpXSkgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdF9pZGxlSW50ZXJ2YWwsXG5cdFx0X2lkbGVUaW1lcixcblx0XHRfaWRsZUluY3JlbWVudCA9IDAsXG5cdFx0X29uSWRsZU1vdXNlTW92ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0Y2xlYXJUaW1lb3V0KF9pZGxlVGltZXIpO1xuXHRcdFx0X2lkbGVJbmNyZW1lbnQgPSAwO1xuXHRcdFx0aWYoX2lzSWRsZSkge1xuXHRcdFx0XHR1aS5zZXRJZGxlKGZhbHNlKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdF9vbk1vdXNlTGVhdmVXaW5kb3cgPSBmdW5jdGlvbihlKSB7XG5cdFx0XHRlID0gZSA/IGUgOiB3aW5kb3cuZXZlbnQ7XG5cdFx0XHR2YXIgZnJvbSA9IGUucmVsYXRlZFRhcmdldCB8fCBlLnRvRWxlbWVudDtcblx0XHRcdGlmICghZnJvbSB8fCBmcm9tLm5vZGVOYW1lID09PSAnSFRNTCcpIHtcblx0XHRcdFx0Y2xlYXJUaW1lb3V0KF9pZGxlVGltZXIpO1xuXHRcdFx0XHRfaWRsZVRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHR1aS5zZXRJZGxlKHRydWUpO1xuXHRcdFx0XHR9LCBfb3B0aW9ucy50aW1lVG9JZGxlT3V0c2lkZSk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRfc2V0dXBGdWxsc2NyZWVuQVBJID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRpZihfb3B0aW9ucy5mdWxsc2NyZWVuRWwgJiYgIWZyYW1ld29yay5mZWF0dXJlcy5pc09sZEFuZHJvaWQpIHtcblx0XHRcdFx0aWYoIV9mdWxsc2NyZW5BUEkpIHtcblx0XHRcdFx0XHRfZnVsbHNjcmVuQVBJID0gdWkuZ2V0RnVsbHNjcmVlbkFQSSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmKF9mdWxsc2NyZW5BUEkpIHtcblx0XHRcdFx0XHRmcmFtZXdvcmsuYmluZChkb2N1bWVudCwgX2Z1bGxzY3JlbkFQSS5ldmVudEssIHVpLnVwZGF0ZUZ1bGxzY3JlZW4pO1xuXHRcdFx0XHRcdHVpLnVwZGF0ZUZ1bGxzY3JlZW4oKTtcblx0XHRcdFx0XHRmcmFtZXdvcmsuYWRkQ2xhc3MocHN3cC50ZW1wbGF0ZSwgJ3Bzd3AtLXN1cHBvcnRzLWZzJyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZnJhbWV3b3JrLnJlbW92ZUNsYXNzKHBzd3AudGVtcGxhdGUsICdwc3dwLS1zdXBwb3J0cy1mcycpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRfc2V0dXBMb2FkaW5nSW5kaWNhdG9yID0gZnVuY3Rpb24oKSB7XG5cdFx0XHQvLyBTZXR1cCBsb2FkaW5nIGluZGljYXRvclxuXHRcdFx0aWYoX29wdGlvbnMucHJlbG9hZGVyRWwpIHtcblx0XHRcdFxuXHRcdFx0XHRfdG9nZ2xlTG9hZGluZ0luZGljYXRvcih0cnVlKTtcblxuXHRcdFx0XHRfbGlzdGVuKCdiZWZvcmVDaGFuZ2UnLCBmdW5jdGlvbigpIHtcblxuXHRcdFx0XHRcdGNsZWFyVGltZW91dChfbG9hZGluZ0luZGljYXRvclRpbWVvdXQpO1xuXG5cdFx0XHRcdFx0Ly8gZGlzcGxheSBsb2FkaW5nIGluZGljYXRvciB3aXRoIGRlbGF5XG5cdFx0XHRcdFx0X2xvYWRpbmdJbmRpY2F0b3JUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcblxuXHRcdFx0XHRcdFx0aWYocHN3cC5jdXJySXRlbSAmJiBwc3dwLmN1cnJJdGVtLmxvYWRpbmcpIHtcblxuXHRcdFx0XHRcdFx0XHRpZiggIXBzd3AuYWxsb3dQcm9ncmVzc2l2ZUltZygpIHx8IChwc3dwLmN1cnJJdGVtLmltZyAmJiAhcHN3cC5jdXJySXRlbS5pbWcubmF0dXJhbFdpZHRoKSAgKSB7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gc2hvdyBwcmVsb2FkZXIgaWYgcHJvZ3Jlc3NpdmUgbG9hZGluZyBpcyBub3QgZW5hYmxlZCwgXG5cdFx0XHRcdFx0XHRcdFx0Ly8gb3IgaW1hZ2Ugd2lkdGggaXMgbm90IGRlZmluZWQgeWV0IChiZWNhdXNlIG9mIHNsb3cgY29ubmVjdGlvbilcblx0XHRcdFx0XHRcdFx0XHRfdG9nZ2xlTG9hZGluZ0luZGljYXRvcihmYWxzZSk7IFxuXHRcdFx0XHRcdFx0XHRcdC8vIGl0ZW1zLWNvbnRyb2xsZXIuanMgZnVuY3Rpb24gYWxsb3dQcm9ncmVzc2l2ZUltZ1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0X3RvZ2dsZUxvYWRpbmdJbmRpY2F0b3IodHJ1ZSk7IC8vIGhpZGUgcHJlbG9hZGVyXG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR9LCBfb3B0aW9ucy5sb2FkaW5nSW5kaWNhdG9yRGVsYXkpO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0X2xpc3RlbignaW1hZ2VMb2FkQ29tcGxldGUnLCBmdW5jdGlvbihpbmRleCwgaXRlbSkge1xuXHRcdFx0XHRcdGlmKHBzd3AuY3Vyckl0ZW0gPT09IGl0ZW0pIHtcblx0XHRcdFx0XHRcdF90b2dnbGVMb2FkaW5nSW5kaWNhdG9yKHRydWUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cblx0XHRcdH1cblx0XHR9LFxuXHRcdF90b2dnbGVMb2FkaW5nSW5kaWNhdG9yID0gZnVuY3Rpb24oaGlkZSkge1xuXHRcdFx0aWYoIF9sb2FkaW5nSW5kaWNhdG9ySGlkZGVuICE9PSBoaWRlICkge1xuXHRcdFx0XHRfdG9nZ2xlUHN3cENsYXNzKF9sb2FkaW5nSW5kaWNhdG9yLCAncHJlbG9hZGVyLS1hY3RpdmUnLCAhaGlkZSk7XG5cdFx0XHRcdF9sb2FkaW5nSW5kaWNhdG9ySGlkZGVuID0gaGlkZTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdF9hcHBseU5hdkJhckdhcHMgPSBmdW5jdGlvbihpdGVtKSB7XG5cdFx0XHR2YXIgZ2FwID0gaXRlbS52R2FwO1xuXG5cdFx0XHRpZiggX2ZpdENvbnRyb2xzSW5WaWV3cG9ydCgpICkge1xuXHRcdFx0XHRcblx0XHRcdFx0dmFyIGJhcnMgPSBfb3B0aW9ucy5iYXJzU2l6ZTsgXG5cdFx0XHRcdGlmKF9vcHRpb25zLmNhcHRpb25FbCAmJiBiYXJzLmJvdHRvbSA9PT0gJ2F1dG8nKSB7XG5cdFx0XHRcdFx0aWYoIV9mYWtlQ2FwdGlvbkNvbnRhaW5lcikge1xuXHRcdFx0XHRcdFx0X2Zha2VDYXB0aW9uQ29udGFpbmVyID0gZnJhbWV3b3JrLmNyZWF0ZUVsKCdwc3dwX19jYXB0aW9uIHBzd3BfX2NhcHRpb24tLWZha2UnKTtcblx0XHRcdFx0XHRcdF9mYWtlQ2FwdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZCggZnJhbWV3b3JrLmNyZWF0ZUVsKCdwc3dwX19jYXB0aW9uX19jZW50ZXInKSApO1xuXHRcdFx0XHRcdFx0X2NvbnRyb2xzLmluc2VydEJlZm9yZShfZmFrZUNhcHRpb25Db250YWluZXIsIF9jYXB0aW9uQ29udGFpbmVyKTtcblx0XHRcdFx0XHRcdGZyYW1ld29yay5hZGRDbGFzcyhfY29udHJvbHMsICdwc3dwX191aS0tZml0Jyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmKCBfb3B0aW9ucy5hZGRDYXB0aW9uSFRNTEZuKGl0ZW0sIF9mYWtlQ2FwdGlvbkNvbnRhaW5lciwgdHJ1ZSkgKSB7XG5cblx0XHRcdFx0XHRcdHZhciBjYXB0aW9uU2l6ZSA9IF9mYWtlQ2FwdGlvbkNvbnRhaW5lci5jbGllbnRIZWlnaHQ7XG5cdFx0XHRcdFx0XHRnYXAuYm90dG9tID0gcGFyc2VJbnQoY2FwdGlvblNpemUsMTApIHx8IDQ0O1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRnYXAuYm90dG9tID0gYmFycy50b3A7IC8vIGlmIG5vIGNhcHRpb24sIHNldCBzaXplIG9mIGJvdHRvbSBnYXAgdG8gc2l6ZSBvZiB0b3Bcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Z2FwLmJvdHRvbSA9IGJhcnMuYm90dG9tID09PSAnYXV0bycgPyAwIDogYmFycy5ib3R0b207XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdC8vIGhlaWdodCBvZiB0b3AgYmFyIGlzIHN0YXRpYywgbm8gbmVlZCB0byBjYWxjdWxhdGUgaXRcblx0XHRcdFx0Z2FwLnRvcCA9IGJhcnMudG9wO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Z2FwLnRvcCA9IGdhcC5ib3R0b20gPSAwO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0X3NldHVwSWRsZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0Ly8gSGlkZSBjb250cm9scyB3aGVuIG1vdXNlIGlzIHVzZWRcblx0XHRcdGlmKF9vcHRpb25zLnRpbWVUb0lkbGUpIHtcblx0XHRcdFx0X2xpc3RlbignbW91c2VVc2VkJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0ZnJhbWV3b3JrLmJpbmQoZG9jdW1lbnQsICdtb3VzZW1vdmUnLCBfb25JZGxlTW91c2VNb3ZlKTtcblx0XHRcdFx0XHRmcmFtZXdvcmsuYmluZChkb2N1bWVudCwgJ21vdXNlb3V0JywgX29uTW91c2VMZWF2ZVdpbmRvdyk7XG5cblx0XHRcdFx0XHRfaWRsZUludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRfaWRsZUluY3JlbWVudCsrO1xuXHRcdFx0XHRcdFx0aWYoX2lkbGVJbmNyZW1lbnQgPT09IDIpIHtcblx0XHRcdFx0XHRcdFx0dWkuc2V0SWRsZSh0cnVlKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LCBfb3B0aW9ucy50aW1lVG9JZGxlIC8gMik7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0X3NldHVwSGlkaW5nQ29udHJvbHNEdXJpbmdHZXN0dXJlcyA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHQvLyBIaWRlIGNvbnRyb2xzIG9uIHZlcnRpY2FsIGRyYWdcblx0XHRcdF9saXN0ZW4oJ29uVmVydGljYWxEcmFnJywgZnVuY3Rpb24obm93KSB7XG5cdFx0XHRcdGlmKF9jb250cm9sc1Zpc2libGUgJiYgbm93IDwgMC45NSkge1xuXHRcdFx0XHRcdHVpLmhpZGVDb250cm9scygpO1xuXHRcdFx0XHR9IGVsc2UgaWYoIV9jb250cm9sc1Zpc2libGUgJiYgbm93ID49IDAuOTUpIHtcblx0XHRcdFx0XHR1aS5zaG93Q29udHJvbHMoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdC8vIEhpZGUgY29udHJvbHMgd2hlbiBwaW5jaGluZyB0byBjbG9zZVxuXHRcdFx0dmFyIHBpbmNoQ29udHJvbHNIaWRkZW47XG5cdFx0XHRfbGlzdGVuKCdvblBpbmNoQ2xvc2UnICwgZnVuY3Rpb24obm93KSB7XG5cdFx0XHRcdGlmKF9jb250cm9sc1Zpc2libGUgJiYgbm93IDwgMC45KSB7XG5cdFx0XHRcdFx0dWkuaGlkZUNvbnRyb2xzKCk7XG5cdFx0XHRcdFx0cGluY2hDb250cm9sc0hpZGRlbiA9IHRydWU7XG5cdFx0XHRcdH0gZWxzZSBpZihwaW5jaENvbnRyb2xzSGlkZGVuICYmICFfY29udHJvbHNWaXNpYmxlICYmIG5vdyA+IDAuOSkge1xuXHRcdFx0XHRcdHVpLnNob3dDb250cm9scygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0X2xpc3Rlbignem9vbUdlc3R1cmVFbmRlZCcsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRwaW5jaENvbnRyb2xzSGlkZGVuID0gZmFsc2U7XG5cdFx0XHRcdGlmKHBpbmNoQ29udHJvbHNIaWRkZW4gJiYgIV9jb250cm9sc1Zpc2libGUpIHtcblx0XHRcdFx0XHR1aS5zaG93Q29udHJvbHMoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHR9O1xuXG5cblxuXHR2YXIgX3VpRWxlbWVudHMgPSBbXG5cdFx0eyBcblx0XHRcdG5hbWU6ICdjYXB0aW9uJywgXG5cdFx0XHRvcHRpb246ICdjYXB0aW9uRWwnLFxuXHRcdFx0b25Jbml0OiBmdW5jdGlvbihlbCkgeyAgXG5cdFx0XHRcdF9jYXB0aW9uQ29udGFpbmVyID0gZWw7IFxuXHRcdFx0fSBcblx0XHR9LFxuXHRcdHsgXG5cdFx0XHRuYW1lOiAnc2hhcmUtbW9kYWwnLCBcblx0XHRcdG9wdGlvbjogJ3NoYXJlRWwnLFxuXHRcdFx0b25Jbml0OiBmdW5jdGlvbihlbCkgeyAgXG5cdFx0XHRcdF9zaGFyZU1vZGFsID0gZWw7XG5cdFx0XHR9LFxuXHRcdFx0b25UYXA6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRfdG9nZ2xlU2hhcmVNb2RhbCgpO1xuXHRcdFx0fSBcblx0XHR9LFxuXHRcdHsgXG5cdFx0XHRuYW1lOiAnYnV0dG9uLS1zaGFyZScsIFxuXHRcdFx0b3B0aW9uOiAnc2hhcmVFbCcsXG5cdFx0XHRvbkluaXQ6IGZ1bmN0aW9uKGVsKSB7IFxuXHRcdFx0XHRfc2hhcmVCdXR0b24gPSBlbDtcblx0XHRcdH0sXG5cdFx0XHRvblRhcDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdF90b2dnbGVTaGFyZU1vZGFsKCk7XG5cdFx0XHR9IFxuXHRcdH0sXG5cdFx0eyBcblx0XHRcdG5hbWU6ICdidXR0b24tLXpvb20nLCBcblx0XHRcdG9wdGlvbjogJ3pvb21FbCcsXG5cdFx0XHRvblRhcDogcHN3cC50b2dnbGVEZXNrdG9wWm9vbVxuXHRcdH0sXG5cdFx0eyBcblx0XHRcdG5hbWU6ICdjb3VudGVyJywgXG5cdFx0XHRvcHRpb246ICdjb3VudGVyRWwnLFxuXHRcdFx0b25Jbml0OiBmdW5jdGlvbihlbCkgeyAgXG5cdFx0XHRcdF9pbmRleEluZGljYXRvciA9IGVsO1xuXHRcdFx0fSBcblx0XHR9LFxuXHRcdHsgXG5cdFx0XHRuYW1lOiAnYnV0dG9uLS1jbG9zZScsIFxuXHRcdFx0b3B0aW9uOiAnY2xvc2VFbCcsXG5cdFx0XHRvblRhcDogcHN3cC5jbG9zZVxuXHRcdH0sXG5cdFx0eyBcblx0XHRcdG5hbWU6ICdidXR0b24tLWFycm93LS1sZWZ0JywgXG5cdFx0XHRvcHRpb246ICdhcnJvd0VsJyxcblx0XHRcdG9uVGFwOiBwc3dwLnByZXZcblx0XHR9LFxuXHRcdHsgXG5cdFx0XHRuYW1lOiAnYnV0dG9uLS1hcnJvdy0tcmlnaHQnLCBcblx0XHRcdG9wdGlvbjogJ2Fycm93RWwnLFxuXHRcdFx0b25UYXA6IHBzd3AubmV4dFxuXHRcdH0sXG5cdFx0eyBcblx0XHRcdG5hbWU6ICdidXR0b24tLWZzJywgXG5cdFx0XHRvcHRpb246ICdmdWxsc2NyZWVuRWwnLFxuXHRcdFx0b25UYXA6IGZ1bmN0aW9uKCkgeyAgXG5cdFx0XHRcdGlmKF9mdWxsc2NyZW5BUEkuaXNGdWxsc2NyZWVuKCkpIHtcblx0XHRcdFx0XHRfZnVsbHNjcmVuQVBJLmV4aXQoKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRfZnVsbHNjcmVuQVBJLmVudGVyKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gXG5cdFx0fSxcblx0XHR7IFxuXHRcdFx0bmFtZTogJ3ByZWxvYWRlcicsIFxuXHRcdFx0b3B0aW9uOiAncHJlbG9hZGVyRWwnLFxuXHRcdFx0b25Jbml0OiBmdW5jdGlvbihlbCkgeyAgXG5cdFx0XHRcdF9sb2FkaW5nSW5kaWNhdG9yID0gZWw7XG5cdFx0XHR9IFxuXHRcdH1cblxuXHRdO1xuXG5cdHZhciBfc2V0dXBVSUVsZW1lbnRzID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGl0ZW0sXG5cdFx0XHRjbGFzc0F0dHIsXG5cdFx0XHR1aUVsZW1lbnQ7XG5cblx0XHR2YXIgbG9vcFRocm91Z2hDaGlsZEVsZW1lbnRzID0gZnVuY3Rpb24oc0NoaWxkcmVuKSB7XG5cdFx0XHRpZighc0NoaWxkcmVuKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGwgPSBzQ2hpbGRyZW4ubGVuZ3RoO1xuXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGw7IGkrKykge1xuXHRcdFx0XHRpdGVtID0gc0NoaWxkcmVuW2ldO1xuXHRcdFx0XHRjbGFzc0F0dHIgPSBpdGVtLmNsYXNzTmFtZTtcblxuXHRcdFx0XHRmb3IodmFyIGEgPSAwOyBhIDwgX3VpRWxlbWVudHMubGVuZ3RoOyBhKyspIHtcblx0XHRcdFx0XHR1aUVsZW1lbnQgPSBfdWlFbGVtZW50c1thXTtcblxuXHRcdFx0XHRcdGlmKGNsYXNzQXR0ci5pbmRleE9mKCdwc3dwX18nICsgdWlFbGVtZW50Lm5hbWUpID4gLTEgICkge1xuXG5cdFx0XHRcdFx0XHRpZiggX29wdGlvbnNbdWlFbGVtZW50Lm9wdGlvbl0gKSB7IC8vIGlmIGVsZW1lbnQgaXMgbm90IGRpc2FibGVkIGZyb20gb3B0aW9uc1xuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0ZnJhbWV3b3JrLnJlbW92ZUNsYXNzKGl0ZW0sICdwc3dwX19lbGVtZW50LS1kaXNhYmxlZCcpO1xuXHRcdFx0XHRcdFx0XHRpZih1aUVsZW1lbnQub25Jbml0KSB7XG5cdFx0XHRcdFx0XHRcdFx0dWlFbGVtZW50Lm9uSW5pdChpdGVtKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0Ly9pdGVtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0ZnJhbWV3b3JrLmFkZENsYXNzKGl0ZW0sICdwc3dwX19lbGVtZW50LS1kaXNhYmxlZCcpO1xuXHRcdFx0XHRcdFx0XHQvL2l0ZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXHRcdGxvb3BUaHJvdWdoQ2hpbGRFbGVtZW50cyhfY29udHJvbHMuY2hpbGRyZW4pO1xuXG5cdFx0dmFyIHRvcEJhciA9ICBmcmFtZXdvcmsuZ2V0Q2hpbGRCeUNsYXNzKF9jb250cm9scywgJ3Bzd3BfX3RvcC1iYXInKTtcblx0XHRpZih0b3BCYXIpIHtcblx0XHRcdGxvb3BUaHJvdWdoQ2hpbGRFbGVtZW50cyggdG9wQmFyLmNoaWxkcmVuICk7XG5cdFx0fVxuXHR9O1xuXG5cblx0XG5cblx0dWkuaW5pdCA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0Ly8gZXh0ZW5kIG9wdGlvbnNcblx0XHRmcmFtZXdvcmsuZXh0ZW5kKHBzd3Aub3B0aW9ucywgX2RlZmF1bHRVSU9wdGlvbnMsIHRydWUpO1xuXG5cdFx0Ly8gY3JlYXRlIGxvY2FsIGxpbmsgZm9yIGZhc3QgYWNjZXNzXG5cdFx0X29wdGlvbnMgPSBwc3dwLm9wdGlvbnM7XG5cblx0XHQvLyBmaW5kIHBzd3BfX3VpIGVsZW1lbnRcblx0XHRfY29udHJvbHMgPSBmcmFtZXdvcmsuZ2V0Q2hpbGRCeUNsYXNzKHBzd3Auc2Nyb2xsV3JhcCwgJ3Bzd3BfX3VpJyk7XG5cblx0XHQvLyBjcmVhdGUgbG9jYWwgbGlua1xuXHRcdF9saXN0ZW4gPSBwc3dwLmxpc3RlbjtcblxuXG5cdFx0X3NldHVwSGlkaW5nQ29udHJvbHNEdXJpbmdHZXN0dXJlcygpO1xuXG5cdFx0Ly8gdXBkYXRlIGNvbnRyb2xzIHdoZW4gc2xpZGVzIGNoYW5nZVxuXHRcdF9saXN0ZW4oJ2JlZm9yZUNoYW5nZScsIHVpLnVwZGF0ZSk7XG5cblx0XHQvLyB0b2dnbGUgem9vbSBvbiBkb3VibGUtdGFwXG5cdFx0X2xpc3RlbignZG91YmxlVGFwJywgZnVuY3Rpb24ocG9pbnQpIHtcblx0XHRcdHZhciBpbml0aWFsWm9vbUxldmVsID0gcHN3cC5jdXJySXRlbS5pbml0aWFsWm9vbUxldmVsO1xuXHRcdFx0aWYocHN3cC5nZXRab29tTGV2ZWwoKSAhPT0gaW5pdGlhbFpvb21MZXZlbCkge1xuXHRcdFx0XHRwc3dwLnpvb21Ubyhpbml0aWFsWm9vbUxldmVsLCBwb2ludCwgMzMzKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHBzd3Auem9vbVRvKF9vcHRpb25zLmdldERvdWJsZVRhcFpvb20oZmFsc2UsIHBzd3AuY3Vyckl0ZW0pLCBwb2ludCwgMzMzKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdC8vIEFsbG93IHRleHQgc2VsZWN0aW9uIGluIGNhcHRpb25cblx0XHRfbGlzdGVuKCdwcmV2ZW50RHJhZ0V2ZW50JywgZnVuY3Rpb24oZSwgaXNEb3duLCBwcmV2ZW50T2JqKSB7XG5cdFx0XHR2YXIgdCA9IGUudGFyZ2V0IHx8IGUuc3JjRWxlbWVudDtcblx0XHRcdGlmKFxuXHRcdFx0XHR0ICYmIFxuXHRcdFx0XHR0LmdldEF0dHJpYnV0ZSgnY2xhc3MnKSAmJiBlLnR5cGUuaW5kZXhPZignbW91c2UnKSA+IC0xICYmIFxuXHRcdFx0XHQoIHQuZ2V0QXR0cmlidXRlKCdjbGFzcycpLmluZGV4T2YoJ19fY2FwdGlvbicpID4gMCB8fCAoLyhTTUFMTHxTVFJPTkd8RU0pL2kpLnRlc3QodC50YWdOYW1lKSApIFxuXHRcdFx0KSB7XG5cdFx0XHRcdHByZXZlbnRPYmoucHJldmVudCA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0Ly8gYmluZCBldmVudHMgZm9yIFVJXG5cdFx0X2xpc3RlbignYmluZEV2ZW50cycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0ZnJhbWV3b3JrLmJpbmQoX2NvbnRyb2xzLCAncHN3cFRhcCBjbGljaycsIF9vbkNvbnRyb2xzVGFwKTtcblx0XHRcdGZyYW1ld29yay5iaW5kKHBzd3Auc2Nyb2xsV3JhcCwgJ3Bzd3BUYXAnLCB1aS5vbkdsb2JhbFRhcCk7XG5cblx0XHRcdGlmKCFwc3dwLmxpa2VseVRvdWNoRGV2aWNlKSB7XG5cdFx0XHRcdGZyYW1ld29yay5iaW5kKHBzd3Auc2Nyb2xsV3JhcCwgJ21vdXNlb3ZlcicsIHVpLm9uTW91c2VPdmVyKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdC8vIHVuYmluZCBldmVudHMgZm9yIFVJXG5cdFx0X2xpc3RlbigndW5iaW5kRXZlbnRzJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRpZighX3NoYXJlTW9kYWxIaWRkZW4pIHtcblx0XHRcdFx0X3RvZ2dsZVNoYXJlTW9kYWwoKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoX2lkbGVJbnRlcnZhbCkge1xuXHRcdFx0XHRjbGVhckludGVydmFsKF9pZGxlSW50ZXJ2YWwpO1xuXHRcdFx0fVxuXHRcdFx0ZnJhbWV3b3JrLnVuYmluZChkb2N1bWVudCwgJ21vdXNlb3V0JywgX29uTW91c2VMZWF2ZVdpbmRvdyk7XG5cdFx0XHRmcmFtZXdvcmsudW5iaW5kKGRvY3VtZW50LCAnbW91c2Vtb3ZlJywgX29uSWRsZU1vdXNlTW92ZSk7XG5cdFx0XHRmcmFtZXdvcmsudW5iaW5kKF9jb250cm9scywgJ3Bzd3BUYXAgY2xpY2snLCBfb25Db250cm9sc1RhcCk7XG5cdFx0XHRmcmFtZXdvcmsudW5iaW5kKHBzd3Auc2Nyb2xsV3JhcCwgJ3Bzd3BUYXAnLCB1aS5vbkdsb2JhbFRhcCk7XG5cdFx0XHRmcmFtZXdvcmsudW5iaW5kKHBzd3Auc2Nyb2xsV3JhcCwgJ21vdXNlb3ZlcicsIHVpLm9uTW91c2VPdmVyKTtcblxuXHRcdFx0aWYoX2Z1bGxzY3JlbkFQSSkge1xuXHRcdFx0XHRmcmFtZXdvcmsudW5iaW5kKGRvY3VtZW50LCBfZnVsbHNjcmVuQVBJLmV2ZW50SywgdWkudXBkYXRlRnVsbHNjcmVlbik7XG5cdFx0XHRcdGlmKF9mdWxsc2NyZW5BUEkuaXNGdWxsc2NyZWVuKCkpIHtcblx0XHRcdFx0XHRfb3B0aW9ucy5oaWRlQW5pbWF0aW9uRHVyYXRpb24gPSAwO1xuXHRcdFx0XHRcdF9mdWxsc2NyZW5BUEkuZXhpdCgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdF9mdWxsc2NyZW5BUEkgPSBudWxsO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cblx0XHQvLyBjbGVhbiB1cCB0aGluZ3Mgd2hlbiBnYWxsZXJ5IGlzIGRlc3Ryb3llZFxuXHRcdF9saXN0ZW4oJ2Rlc3Ryb3knLCBmdW5jdGlvbigpIHtcblx0XHRcdGlmKF9vcHRpb25zLmNhcHRpb25FbCkge1xuXHRcdFx0XHRpZihfZmFrZUNhcHRpb25Db250YWluZXIpIHtcblx0XHRcdFx0XHRfY29udHJvbHMucmVtb3ZlQ2hpbGQoX2Zha2VDYXB0aW9uQ29udGFpbmVyKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRmcmFtZXdvcmsucmVtb3ZlQ2xhc3MoX2NhcHRpb25Db250YWluZXIsICdwc3dwX19jYXB0aW9uLS1lbXB0eScpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZihfc2hhcmVNb2RhbCkge1xuXHRcdFx0XHRfc2hhcmVNb2RhbC5jaGlsZHJlblswXS5vbmNsaWNrID0gbnVsbDtcblx0XHRcdH1cblx0XHRcdGZyYW1ld29yay5yZW1vdmVDbGFzcyhfY29udHJvbHMsICdwc3dwX191aS0tb3Zlci1jbG9zZScpO1xuXHRcdFx0ZnJhbWV3b3JrLmFkZENsYXNzKCBfY29udHJvbHMsICdwc3dwX191aS0taGlkZGVuJyk7XG5cdFx0XHR1aS5zZXRJZGxlKGZhbHNlKTtcblx0XHR9KTtcblx0XHRcblxuXHRcdGlmKCFfb3B0aW9ucy5zaG93QW5pbWF0aW9uRHVyYXRpb24pIHtcblx0XHRcdGZyYW1ld29yay5yZW1vdmVDbGFzcyggX2NvbnRyb2xzLCAncHN3cF9fdWktLWhpZGRlbicpO1xuXHRcdH1cblx0XHRfbGlzdGVuKCdpbml0aWFsWm9vbUluJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRpZihfb3B0aW9ucy5zaG93QW5pbWF0aW9uRHVyYXRpb24pIHtcblx0XHRcdFx0ZnJhbWV3b3JrLnJlbW92ZUNsYXNzKCBfY29udHJvbHMsICdwc3dwX191aS0taGlkZGVuJyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0X2xpc3RlbignaW5pdGlhbFpvb21PdXQnLCBmdW5jdGlvbigpIHtcblx0XHRcdGZyYW1ld29yay5hZGRDbGFzcyggX2NvbnRyb2xzLCAncHN3cF9fdWktLWhpZGRlbicpO1xuXHRcdH0pO1xuXG5cdFx0X2xpc3RlbigncGFyc2VWZXJ0aWNhbE1hcmdpbicsIF9hcHBseU5hdkJhckdhcHMpO1xuXHRcdFxuXHRcdF9zZXR1cFVJRWxlbWVudHMoKTtcblxuXHRcdGlmKF9vcHRpb25zLnNoYXJlRWwgJiYgX3NoYXJlQnV0dG9uICYmIF9zaGFyZU1vZGFsKSB7XG5cdFx0XHRfc2hhcmVNb2RhbEhpZGRlbiA9IHRydWU7XG5cdFx0fVxuXG5cdFx0X2NvdW50TnVtSXRlbXMoKTtcblxuXHRcdF9zZXR1cElkbGUoKTtcblxuXHRcdF9zZXR1cEZ1bGxzY3JlZW5BUEkoKTtcblxuXHRcdF9zZXR1cExvYWRpbmdJbmRpY2F0b3IoKTtcblx0fTtcblxuXHR1aS5zZXRJZGxlID0gZnVuY3Rpb24oaXNJZGxlKSB7XG5cdFx0X2lzSWRsZSA9IGlzSWRsZTtcblx0XHRfdG9nZ2xlUHN3cENsYXNzKF9jb250cm9scywgJ3VpLS1pZGxlJywgaXNJZGxlKTtcblx0fTtcblxuXHR1aS51cGRhdGUgPSBmdW5jdGlvbigpIHtcblx0XHQvLyBEb24ndCB1cGRhdGUgVUkgaWYgaXQncyBoaWRkZW5cblx0XHRpZihfY29udHJvbHNWaXNpYmxlICYmIHBzd3AuY3Vyckl0ZW0pIHtcblx0XHRcdFxuXHRcdFx0dWkudXBkYXRlSW5kZXhJbmRpY2F0b3IoKTtcblxuXHRcdFx0aWYoX29wdGlvbnMuY2FwdGlvbkVsKSB7XG5cdFx0XHRcdF9vcHRpb25zLmFkZENhcHRpb25IVE1MRm4ocHN3cC5jdXJySXRlbSwgX2NhcHRpb25Db250YWluZXIpO1xuXG5cdFx0XHRcdF90b2dnbGVQc3dwQ2xhc3MoX2NhcHRpb25Db250YWluZXIsICdjYXB0aW9uLS1lbXB0eScsICFwc3dwLmN1cnJJdGVtLnRpdGxlKTtcblx0XHRcdH1cblxuXHRcdFx0X292ZXJsYXlVSVVwZGF0ZWQgPSB0cnVlO1xuXG5cdFx0fSBlbHNlIHtcblx0XHRcdF9vdmVybGF5VUlVcGRhdGVkID0gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYoIV9zaGFyZU1vZGFsSGlkZGVuKSB7XG5cdFx0XHRfdG9nZ2xlU2hhcmVNb2RhbCgpO1xuXHRcdH1cblxuXHRcdF9jb3VudE51bUl0ZW1zKCk7XG5cdH07XG5cblx0dWkudXBkYXRlRnVsbHNjcmVlbiA9IGZ1bmN0aW9uKGUpIHtcblxuXHRcdGlmKGUpIHtcblx0XHRcdC8vIHNvbWUgYnJvd3NlcnMgY2hhbmdlIHdpbmRvdyBzY3JvbGwgcG9zaXRpb24gZHVyaW5nIHRoZSBmdWxsc2NyZWVuXG5cdFx0XHQvLyBzbyBQaG90b1N3aXBlIHVwZGF0ZXMgaXQganVzdCBpbiBjYXNlXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRwc3dwLnNldFNjcm9sbE9mZnNldCggMCwgZnJhbWV3b3JrLmdldFNjcm9sbFkoKSApO1xuXHRcdFx0fSwgNTApO1xuXHRcdH1cblx0XHRcblx0XHQvLyB0b29nbGUgcHN3cC0tZnMgY2xhc3Mgb24gcm9vdCBlbGVtZW50XG5cdFx0ZnJhbWV3b3JrWyAoX2Z1bGxzY3JlbkFQSS5pc0Z1bGxzY3JlZW4oKSA/ICdhZGQnIDogJ3JlbW92ZScpICsgJ0NsYXNzJyBdKHBzd3AudGVtcGxhdGUsICdwc3dwLS1mcycpO1xuXHR9O1xuXG5cdHVpLnVwZGF0ZUluZGV4SW5kaWNhdG9yID0gZnVuY3Rpb24oKSB7XG5cdFx0aWYoX29wdGlvbnMuY291bnRlckVsKSB7XG5cdFx0XHRfaW5kZXhJbmRpY2F0b3IuaW5uZXJIVE1MID0gKHBzd3AuZ2V0Q3VycmVudEluZGV4KCkrMSkgKyBcblx0XHRcdFx0XHRcdFx0XHRcdFx0X29wdGlvbnMuaW5kZXhJbmRpY2F0b3JTZXAgKyBcblx0XHRcdFx0XHRcdFx0XHRcdFx0X29wdGlvbnMuZ2V0TnVtSXRlbXNGbigpO1xuXHRcdH1cblx0fTtcblx0XG5cdHVpLm9uR2xvYmFsVGFwID0gZnVuY3Rpb24oZSkge1xuXHRcdGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcblx0XHR2YXIgdGFyZ2V0ID0gZS50YXJnZXQgfHwgZS5zcmNFbGVtZW50O1xuXG5cdFx0aWYoX2Jsb2NrQ29udHJvbHNUYXApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZihlLmRldGFpbCAmJiBlLmRldGFpbC5wb2ludGVyVHlwZSA9PT0gJ21vdXNlJykge1xuXG5cdFx0XHQvLyBjbG9zZSBnYWxsZXJ5IGlmIGNsaWNrZWQgb3V0c2lkZSBvZiB0aGUgaW1hZ2Vcblx0XHRcdGlmKF9oYXNDbG9zZUNsYXNzKHRhcmdldCkpIHtcblx0XHRcdFx0cHN3cC5jbG9zZSgpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGlmKGZyYW1ld29yay5oYXNDbGFzcyh0YXJnZXQsICdwc3dwX19pbWcnKSkge1xuXHRcdFx0XHRpZihwc3dwLmdldFpvb21MZXZlbCgpID09PSAxICYmIHBzd3AuZ2V0Wm9vbUxldmVsKCkgPD0gcHN3cC5jdXJySXRlbS5maXRSYXRpbykge1xuXHRcdFx0XHRcdGlmKF9vcHRpb25zLmNsaWNrVG9DbG9zZU5vblpvb21hYmxlKSB7XG5cdFx0XHRcdFx0XHRwc3dwLmNsb3NlKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHBzd3AudG9nZ2xlRGVza3RvcFpvb20oZS5kZXRhaWwucmVsZWFzZVBvaW50KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0XG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Ly8gdGFwIGFueXdoZXJlIChleGNlcHQgYnV0dG9ucykgdG8gdG9nZ2xlIHZpc2liaWxpdHkgb2YgY29udHJvbHNcblx0XHRcdGlmKF9vcHRpb25zLnRhcFRvVG9nZ2xlQ29udHJvbHMpIHtcblx0XHRcdFx0aWYoX2NvbnRyb2xzVmlzaWJsZSkge1xuXHRcdFx0XHRcdHVpLmhpZGVDb250cm9scygpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHVpLnNob3dDb250cm9scygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIHRhcCB0byBjbG9zZSBnYWxsZXJ5XG5cdFx0XHRpZihfb3B0aW9ucy50YXBUb0Nsb3NlICYmIChmcmFtZXdvcmsuaGFzQ2xhc3ModGFyZ2V0LCAncHN3cF9faW1nJykgfHwgX2hhc0Nsb3NlQ2xhc3ModGFyZ2V0KSkgKSB7XG5cdFx0XHRcdHBzd3AuY2xvc2UoKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0fVxuXHR9O1xuXHR1aS5vbk1vdXNlT3ZlciA9IGZ1bmN0aW9uKGUpIHtcblx0XHRlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XG5cdFx0dmFyIHRhcmdldCA9IGUudGFyZ2V0IHx8IGUuc3JjRWxlbWVudDtcblxuXHRcdC8vIGFkZCBjbGFzcyB3aGVuIG1vdXNlIGlzIG92ZXIgYW4gZWxlbWVudCB0aGF0IHNob3VsZCBjbG9zZSB0aGUgZ2FsbGVyeVxuXHRcdF90b2dnbGVQc3dwQ2xhc3MoX2NvbnRyb2xzLCAndWktLW92ZXItY2xvc2UnLCBfaGFzQ2xvc2VDbGFzcyh0YXJnZXQpKTtcblx0fTtcblxuXHR1aS5oaWRlQ29udHJvbHMgPSBmdW5jdGlvbigpIHtcblx0XHRmcmFtZXdvcmsuYWRkQ2xhc3MoX2NvbnRyb2xzLCdwc3dwX191aS0taGlkZGVuJyk7XG5cdFx0X2NvbnRyb2xzVmlzaWJsZSA9IGZhbHNlO1xuXHR9O1xuXG5cdHVpLnNob3dDb250cm9scyA9IGZ1bmN0aW9uKCkge1xuXHRcdF9jb250cm9sc1Zpc2libGUgPSB0cnVlO1xuXHRcdGlmKCFfb3ZlcmxheVVJVXBkYXRlZCkge1xuXHRcdFx0dWkudXBkYXRlKCk7XG5cdFx0fVxuXHRcdGZyYW1ld29yay5yZW1vdmVDbGFzcyhfY29udHJvbHMsJ3Bzd3BfX3VpLS1oaWRkZW4nKTtcblx0fTtcblxuXHR1aS5zdXBwb3J0c0Z1bGxzY3JlZW4gPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgZCA9IGRvY3VtZW50O1xuXHRcdHJldHVybiAhIShkLmV4aXRGdWxsc2NyZWVuIHx8IGQubW96Q2FuY2VsRnVsbFNjcmVlbiB8fCBkLndlYmtpdEV4aXRGdWxsc2NyZWVuIHx8IGQubXNFeGl0RnVsbHNjcmVlbik7XG5cdH07XG5cblx0dWkuZ2V0RnVsbHNjcmVlbkFQSSA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBkRSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxcblx0XHRcdGFwaSxcblx0XHRcdHRGID0gJ2Z1bGxzY3JlZW5jaGFuZ2UnO1xuXG5cdFx0aWYgKGRFLnJlcXVlc3RGdWxsc2NyZWVuKSB7XG5cdFx0XHRhcGkgPSB7XG5cdFx0XHRcdGVudGVySzogJ3JlcXVlc3RGdWxsc2NyZWVuJyxcblx0XHRcdFx0ZXhpdEs6ICdleGl0RnVsbHNjcmVlbicsXG5cdFx0XHRcdGVsZW1lbnRLOiAnZnVsbHNjcmVlbkVsZW1lbnQnLFxuXHRcdFx0XHRldmVudEs6IHRGXG5cdFx0XHR9O1xuXG5cdFx0fSBlbHNlIGlmKGRFLm1velJlcXVlc3RGdWxsU2NyZWVuICkge1xuXHRcdFx0YXBpID0ge1xuXHRcdFx0XHRlbnRlcks6ICdtb3pSZXF1ZXN0RnVsbFNjcmVlbicsXG5cdFx0XHRcdGV4aXRLOiAnbW96Q2FuY2VsRnVsbFNjcmVlbicsXG5cdFx0XHRcdGVsZW1lbnRLOiAnbW96RnVsbFNjcmVlbkVsZW1lbnQnLFxuXHRcdFx0XHRldmVudEs6ICdtb3onICsgdEZcblx0XHRcdH07XG5cblx0XHRcdFxuXG5cdFx0fSBlbHNlIGlmKGRFLndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKSB7XG5cdFx0XHRhcGkgPSB7XG5cdFx0XHRcdGVudGVySzogJ3dlYmtpdFJlcXVlc3RGdWxsc2NyZWVuJyxcblx0XHRcdFx0ZXhpdEs6ICd3ZWJraXRFeGl0RnVsbHNjcmVlbicsXG5cdFx0XHRcdGVsZW1lbnRLOiAnd2Via2l0RnVsbHNjcmVlbkVsZW1lbnQnLFxuXHRcdFx0XHRldmVudEs6ICd3ZWJraXQnICsgdEZcblx0XHRcdH07XG5cblx0XHR9IGVsc2UgaWYoZEUubXNSZXF1ZXN0RnVsbHNjcmVlbikge1xuXHRcdFx0YXBpID0ge1xuXHRcdFx0XHRlbnRlcks6ICdtc1JlcXVlc3RGdWxsc2NyZWVuJyxcblx0XHRcdFx0ZXhpdEs6ICdtc0V4aXRGdWxsc2NyZWVuJyxcblx0XHRcdFx0ZWxlbWVudEs6ICdtc0Z1bGxzY3JlZW5FbGVtZW50Jyxcblx0XHRcdFx0ZXZlbnRLOiAnTVNGdWxsc2NyZWVuQ2hhbmdlJ1xuXHRcdFx0fTtcblx0XHR9XG5cblx0XHRpZihhcGkpIHtcblx0XHRcdGFwaS5lbnRlciA9IGZ1bmN0aW9uKCkgeyBcblx0XHRcdFx0Ly8gZGlzYWJsZSBjbG9zZS1vbi1zY3JvbGwgaW4gZnVsbHNjcmVlblxuXHRcdFx0XHRfaW5pdGFsQ2xvc2VPblNjcm9sbFZhbHVlID0gX29wdGlvbnMuY2xvc2VPblNjcm9sbDsgXG5cdFx0XHRcdF9vcHRpb25zLmNsb3NlT25TY3JvbGwgPSBmYWxzZTsgXG5cblx0XHRcdFx0aWYodGhpcy5lbnRlcksgPT09ICd3ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbicpIHtcblx0XHRcdFx0XHRwc3dwLnRlbXBsYXRlW3RoaXMuZW50ZXJLXSggRWxlbWVudC5BTExPV19LRVlCT0FSRF9JTlBVVCApO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiBwc3dwLnRlbXBsYXRlW3RoaXMuZW50ZXJLXSgpOyBcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdGFwaS5leGl0ID0gZnVuY3Rpb24oKSB7IFxuXHRcdFx0XHRfb3B0aW9ucy5jbG9zZU9uU2Nyb2xsID0gX2luaXRhbENsb3NlT25TY3JvbGxWYWx1ZTtcblxuXHRcdFx0XHRyZXR1cm4gZG9jdW1lbnRbdGhpcy5leGl0S10oKTsgXG5cblx0XHRcdH07XG5cdFx0XHRhcGkuaXNGdWxsc2NyZWVuID0gZnVuY3Rpb24oKSB7IHJldHVybiBkb2N1bWVudFt0aGlzLmVsZW1lbnRLXTsgfTtcblx0XHR9XG5cblx0XHRyZXR1cm4gYXBpO1xuXHR9O1xuXG5cblxufTtcbnJldHVybiBQaG90b1N3aXBlVUlfRGVmYXVsdDtcblxuXG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Bob3Rvc3dpcGUvZGlzdC9waG90b3N3aXBlLXVpLWRlZmF1bHQuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Bob3Rvc3dpcGUvZGlzdC9waG90b3N3aXBlLXVpLWRlZmF1bHQuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyohIFBob3RvU3dpcGUgLSB2NC4xLjIgLSAyMDE3LTA0LTA1XG4qIGh0dHA6Ly9waG90b3N3aXBlLmNvbVxuKiBDb3B5cmlnaHQgKGMpIDIwMTcgRG1pdHJ5IFNlbWVub3Y7ICovXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHsgXG5cdGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcblx0XHRkZWZpbmUoZmFjdG9yeSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdH0gZWxzZSB7XG5cdFx0cm9vdC5QaG90b1N3aXBlID0gZmFjdG9yeSgpO1xuXHR9XG59KSh0aGlzLCBmdW5jdGlvbiAoKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgUGhvdG9Td2lwZSA9IGZ1bmN0aW9uKHRlbXBsYXRlLCBVaUNsYXNzLCBpdGVtcywgb3B0aW9ucyl7XG5cbi8qPj5mcmFtZXdvcmstYnJpZGdlKi9cbi8qKlxuICpcbiAqIFNldCBvZiBnZW5lcmljIGZ1bmN0aW9ucyB1c2VkIGJ5IGdhbGxlcnkuXG4gKiBcbiAqIFlvdSdyZSBmcmVlIHRvIG1vZGlmeSBhbnl0aGluZyBoZXJlIGFzIGxvbmcgYXMgZnVuY3Rpb25hbGl0eSBpcyBrZXB0LlxuICogXG4gKi9cbnZhciBmcmFtZXdvcmsgPSB7XG5cdGZlYXR1cmVzOiBudWxsLFxuXHRiaW5kOiBmdW5jdGlvbih0YXJnZXQsIHR5cGUsIGxpc3RlbmVyLCB1bmJpbmQpIHtcblx0XHR2YXIgbWV0aG9kTmFtZSA9ICh1bmJpbmQgPyAncmVtb3ZlJyA6ICdhZGQnKSArICdFdmVudExpc3RlbmVyJztcblx0XHR0eXBlID0gdHlwZS5zcGxpdCgnICcpO1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0eXBlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZih0eXBlW2ldKSB7XG5cdFx0XHRcdHRhcmdldFttZXRob2ROYW1lXSggdHlwZVtpXSwgbGlzdGVuZXIsIGZhbHNlKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdGlzQXJyYXk6IGZ1bmN0aW9uKG9iaikge1xuXHRcdHJldHVybiAob2JqIGluc3RhbmNlb2YgQXJyYXkpO1xuXHR9LFxuXHRjcmVhdGVFbDogZnVuY3Rpb24oY2xhc3NlcywgdGFnKSB7XG5cdFx0dmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcgfHwgJ2RpdicpO1xuXHRcdGlmKGNsYXNzZXMpIHtcblx0XHRcdGVsLmNsYXNzTmFtZSA9IGNsYXNzZXM7XG5cdFx0fVxuXHRcdHJldHVybiBlbDtcblx0fSxcblx0Z2V0U2Nyb2xsWTogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHlPZmZzZXQgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG5cdFx0cmV0dXJuIHlPZmZzZXQgIT09IHVuZGVmaW5lZCA/IHlPZmZzZXQgOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuXHR9LFxuXHR1bmJpbmQ6IGZ1bmN0aW9uKHRhcmdldCwgdHlwZSwgbGlzdGVuZXIpIHtcblx0XHRmcmFtZXdvcmsuYmluZCh0YXJnZXQsdHlwZSxsaXN0ZW5lcix0cnVlKTtcblx0fSxcblx0cmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uKGVsLCBjbGFzc05hbWUpIHtcblx0XHR2YXIgcmVnID0gbmV3IFJlZ0V4cCgnKFxcXFxzfF4pJyArIGNsYXNzTmFtZSArICcoXFxcXHN8JCknKTtcblx0XHRlbC5jbGFzc05hbWUgPSBlbC5jbGFzc05hbWUucmVwbGFjZShyZWcsICcgJykucmVwbGFjZSgvXlxcc1xccyovLCAnJykucmVwbGFjZSgvXFxzXFxzKiQvLCAnJyk7IFxuXHR9LFxuXHRhZGRDbGFzczogZnVuY3Rpb24oZWwsIGNsYXNzTmFtZSkge1xuXHRcdGlmKCAhZnJhbWV3b3JrLmhhc0NsYXNzKGVsLGNsYXNzTmFtZSkgKSB7XG5cdFx0XHRlbC5jbGFzc05hbWUgKz0gKGVsLmNsYXNzTmFtZSA/ICcgJyA6ICcnKSArIGNsYXNzTmFtZTtcblx0XHR9XG5cdH0sXG5cdGhhc0NsYXNzOiBmdW5jdGlvbihlbCwgY2xhc3NOYW1lKSB7XG5cdFx0cmV0dXJuIGVsLmNsYXNzTmFtZSAmJiBuZXcgUmVnRXhwKCcoXnxcXFxccyknICsgY2xhc3NOYW1lICsgJyhcXFxcc3wkKScpLnRlc3QoZWwuY2xhc3NOYW1lKTtcblx0fSxcblx0Z2V0Q2hpbGRCeUNsYXNzOiBmdW5jdGlvbihwYXJlbnRFbCwgY2hpbGRDbGFzc05hbWUpIHtcblx0XHR2YXIgbm9kZSA9IHBhcmVudEVsLmZpcnN0Q2hpbGQ7XG5cdFx0d2hpbGUobm9kZSkge1xuXHRcdFx0aWYoIGZyYW1ld29yay5oYXNDbGFzcyhub2RlLCBjaGlsZENsYXNzTmFtZSkgKSB7XG5cdFx0XHRcdHJldHVybiBub2RlO1xuXHRcdFx0fVxuXHRcdFx0bm9kZSA9IG5vZGUubmV4dFNpYmxpbmc7XG5cdFx0fVxuXHR9LFxuXHRhcnJheVNlYXJjaDogZnVuY3Rpb24oYXJyYXksIHZhbHVlLCBrZXkpIHtcblx0XHR2YXIgaSA9IGFycmF5Lmxlbmd0aDtcblx0XHR3aGlsZShpLS0pIHtcblx0XHRcdGlmKGFycmF5W2ldW2tleV0gPT09IHZhbHVlKSB7XG5cdFx0XHRcdHJldHVybiBpO1xuXHRcdFx0fSBcblx0XHR9XG5cdFx0cmV0dXJuIC0xO1xuXHR9LFxuXHRleHRlbmQ6IGZ1bmN0aW9uKG8xLCBvMiwgcHJldmVudE92ZXJ3cml0ZSkge1xuXHRcdGZvciAodmFyIHByb3AgaW4gbzIpIHtcblx0XHRcdGlmIChvMi5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuXHRcdFx0XHRpZihwcmV2ZW50T3ZlcndyaXRlICYmIG8xLmhhc093blByb3BlcnR5KHByb3ApKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0bzFbcHJvcF0gPSBvMltwcm9wXTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdGVhc2luZzoge1xuXHRcdHNpbmU6IHtcblx0XHRcdG91dDogZnVuY3Rpb24oaykge1xuXHRcdFx0XHRyZXR1cm4gTWF0aC5zaW4oayAqIChNYXRoLlBJIC8gMikpO1xuXHRcdFx0fSxcblx0XHRcdGluT3V0OiBmdW5jdGlvbihrKSB7XG5cdFx0XHRcdHJldHVybiAtIChNYXRoLmNvcyhNYXRoLlBJICogaykgLSAxKSAvIDI7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRjdWJpYzoge1xuXHRcdFx0b3V0OiBmdW5jdGlvbihrKSB7XG5cdFx0XHRcdHJldHVybiAtLWsgKiBrICogayArIDE7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8qXG5cdFx0XHRlbGFzdGljOiB7XG5cdFx0XHRcdG91dDogZnVuY3Rpb24gKCBrICkge1xuXG5cdFx0XHRcdFx0dmFyIHMsIGEgPSAwLjEsIHAgPSAwLjQ7XG5cdFx0XHRcdFx0aWYgKCBrID09PSAwICkgcmV0dXJuIDA7XG5cdFx0XHRcdFx0aWYgKCBrID09PSAxICkgcmV0dXJuIDE7XG5cdFx0XHRcdFx0aWYgKCAhYSB8fCBhIDwgMSApIHsgYSA9IDE7IHMgPSBwIC8gNDsgfVxuXHRcdFx0XHRcdGVsc2UgcyA9IHAgKiBNYXRoLmFzaW4oIDEgLyBhICkgLyAoIDIgKiBNYXRoLlBJICk7XG5cdFx0XHRcdFx0cmV0dXJuICggYSAqIE1hdGgucG93KCAyLCAtIDEwICogaykgKiBNYXRoLnNpbiggKCBrIC0gcyApICogKCAyICogTWF0aC5QSSApIC8gcCApICsgMSApO1xuXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0YmFjazoge1xuXHRcdFx0XHRvdXQ6IGZ1bmN0aW9uICggayApIHtcblx0XHRcdFx0XHR2YXIgcyA9IDEuNzAxNTg7XG5cdFx0XHRcdFx0cmV0dXJuIC0tayAqIGsgKiAoICggcyArIDEgKSAqIGsgKyBzICkgKyAxO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0Ki9cblx0fSxcblxuXHQvKipcblx0ICogXG5cdCAqIEByZXR1cm4ge29iamVjdH1cblx0ICogXG5cdCAqIHtcblx0ICogIHJhZiA6IHJlcXVlc3QgYW5pbWF0aW9uIGZyYW1lIGZ1bmN0aW9uXG5cdCAqICBjYWYgOiBjYW5jZWwgYW5pbWF0aW9uIGZyYW1lIGZ1bmN0aW9uXG5cdCAqICB0cmFuc2Zyb20gOiB0cmFuc2Zvcm0gcHJvcGVydHkga2V5ICh3aXRoIHZlbmRvciksIG9yIG51bGwgaWYgbm90IHN1cHBvcnRlZFxuXHQgKiAgb2xkSUUgOiBJRTggb3IgYmVsb3dcblx0ICogfVxuXHQgKiBcblx0ICovXG5cdGRldGVjdEZlYXR1cmVzOiBmdW5jdGlvbigpIHtcblx0XHRpZihmcmFtZXdvcmsuZmVhdHVyZXMpIHtcblx0XHRcdHJldHVybiBmcmFtZXdvcmsuZmVhdHVyZXM7XG5cdFx0fVxuXHRcdHZhciBoZWxwZXJFbCA9IGZyYW1ld29yay5jcmVhdGVFbCgpLFxuXHRcdFx0aGVscGVyU3R5bGUgPSBoZWxwZXJFbC5zdHlsZSxcblx0XHRcdHZlbmRvciA9ICcnLFxuXHRcdFx0ZmVhdHVyZXMgPSB7fTtcblxuXHRcdC8vIElFOCBhbmQgYmVsb3dcblx0XHRmZWF0dXJlcy5vbGRJRSA9IGRvY3VtZW50LmFsbCAmJiAhZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcjtcblxuXHRcdGZlYXR1cmVzLnRvdWNoID0gJ29udG91Y2hzdGFydCcgaW4gd2luZG93O1xuXG5cdFx0aWYod2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSkge1xuXHRcdFx0ZmVhdHVyZXMucmFmID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZTtcblx0XHRcdGZlYXR1cmVzLmNhZiA9IHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZTtcblx0XHR9XG5cblx0XHRmZWF0dXJlcy5wb2ludGVyRXZlbnQgPSBuYXZpZ2F0b3IucG9pbnRlckVuYWJsZWQgfHwgbmF2aWdhdG9yLm1zUG9pbnRlckVuYWJsZWQ7XG5cblx0XHQvLyBmaXggZmFsc2UtcG9zaXRpdmUgZGV0ZWN0aW9uIG9mIG9sZCBBbmRyb2lkIGluIG5ldyBJRVxuXHRcdC8vIChJRTExIHVhIHN0cmluZyBjb250YWlucyBcIkFuZHJvaWQgNC4wXCIpXG5cdFx0XG5cdFx0aWYoIWZlYXR1cmVzLnBvaW50ZXJFdmVudCkgeyBcblxuXHRcdFx0dmFyIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcblxuXHRcdFx0Ly8gRGV0ZWN0IGlmIGRldmljZSBpcyBpUGhvbmUgb3IgaVBvZCBhbmQgaWYgaXQncyBvbGRlciB0aGFuIGlPUyA4XG5cdFx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xNDIyMzkyMFxuXHRcdFx0Ly8gXG5cdFx0XHQvLyBUaGlzIGRldGVjdGlvbiBpcyBtYWRlIGJlY2F1c2Ugb2YgYnVnZ3kgdG9wL2JvdHRvbSB0b29sYmFyc1xuXHRcdFx0Ly8gdGhhdCBkb24ndCB0cmlnZ2VyIHdpbmRvdy5yZXNpemUgZXZlbnQuXG5cdFx0XHQvLyBGb3IgbW9yZSBpbmZvIHJlZmVyIHRvIF9pc0ZpeGVkUG9zaXRpb24gdmFyaWFibGUgaW4gY29yZS5qc1xuXG5cdFx0XHRpZiAoL2lQKGhvbmV8b2QpLy50ZXN0KG5hdmlnYXRvci5wbGF0Zm9ybSkpIHtcblx0XHRcdFx0dmFyIHYgPSAobmF2aWdhdG9yLmFwcFZlcnNpb24pLm1hdGNoKC9PUyAoXFxkKylfKFxcZCspXz8oXFxkKyk/Lyk7XG5cdFx0XHRcdGlmKHYgJiYgdi5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0diA9IHBhcnNlSW50KHZbMV0sIDEwKTtcblx0XHRcdFx0XHRpZih2ID49IDEgJiYgdiA8IDggKSB7XG5cdFx0XHRcdFx0XHRmZWF0dXJlcy5pc09sZElPU1Bob25lID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gRGV0ZWN0IG9sZCBBbmRyb2lkIChiZWZvcmUgS2l0S2F0KVxuXHRcdFx0Ly8gZHVlIHRvIGJ1Z3MgcmVsYXRlZCB0byBwb3NpdGlvbjpmaXhlZFxuXHRcdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy83MTg0NTczL3BpY2stdXAtdGhlLWFuZHJvaWQtdmVyc2lvbi1pbi10aGUtYnJvd3Nlci1ieS1qYXZhc2NyaXB0XG5cdFx0XHRcblx0XHRcdHZhciBtYXRjaCA9IHVhLm1hdGNoKC9BbmRyb2lkXFxzKFswLTlcXC5dKikvKTtcblx0XHRcdHZhciBhbmRyb2lkdmVyc2lvbiA9ICBtYXRjaCA/IG1hdGNoWzFdIDogMDtcblx0XHRcdGFuZHJvaWR2ZXJzaW9uID0gcGFyc2VGbG9hdChhbmRyb2lkdmVyc2lvbik7XG5cdFx0XHRpZihhbmRyb2lkdmVyc2lvbiA+PSAxICkge1xuXHRcdFx0XHRpZihhbmRyb2lkdmVyc2lvbiA8IDQuNCkge1xuXHRcdFx0XHRcdGZlYXR1cmVzLmlzT2xkQW5kcm9pZCA9IHRydWU7IC8vIGZvciBmaXhlZCBwb3NpdGlvbiBidWcgJiBwZXJmb3JtYW5jZVxuXHRcdFx0XHR9XG5cdFx0XHRcdGZlYXR1cmVzLmFuZHJvaWRWZXJzaW9uID0gYW5kcm9pZHZlcnNpb247IC8vIGZvciB0b3VjaGVuZCBidWdcblx0XHRcdH1cdFxuXHRcdFx0ZmVhdHVyZXMuaXNNb2JpbGVPcGVyYSA9IC9vcGVyYSBtaW5pfG9wZXJhIG1vYmkvaS50ZXN0KHVhKTtcblxuXHRcdFx0Ly8gcC5zLiB5ZXMsIHllcywgVUEgc25pZmZpbmcgaXMgYmFkLCBwcm9wb3NlIHlvdXIgc29sdXRpb24gZm9yIGFib3ZlIGJ1Z3MuXG5cdFx0fVxuXHRcdFxuXHRcdHZhciBzdHlsZUNoZWNrcyA9IFsndHJhbnNmb3JtJywgJ3BlcnNwZWN0aXZlJywgJ2FuaW1hdGlvbk5hbWUnXSxcblx0XHRcdHZlbmRvcnMgPSBbJycsICd3ZWJraXQnLCdNb3onLCdtcycsJ08nXSxcblx0XHRcdHN0eWxlQ2hlY2tJdGVtLFxuXHRcdFx0c3R5bGVOYW1lO1xuXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IDQ7IGkrKykge1xuXHRcdFx0dmVuZG9yID0gdmVuZG9yc1tpXTtcblxuXHRcdFx0Zm9yKHZhciBhID0gMDsgYSA8IDM7IGErKykge1xuXHRcdFx0XHRzdHlsZUNoZWNrSXRlbSA9IHN0eWxlQ2hlY2tzW2FdO1xuXG5cdFx0XHRcdC8vIHVwcGVyY2FzZSBmaXJzdCBsZXR0ZXIgb2YgcHJvcGVydHkgbmFtZSwgaWYgdmVuZG9yIGlzIHByZXNlbnRcblx0XHRcdFx0c3R5bGVOYW1lID0gdmVuZG9yICsgKHZlbmRvciA/IFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZUNoZWNrSXRlbS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0eWxlQ2hlY2tJdGVtLnNsaWNlKDEpIDogXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlQ2hlY2tJdGVtKTtcblx0XHRcdFxuXHRcdFx0XHRpZighZmVhdHVyZXNbc3R5bGVDaGVja0l0ZW1dICYmIHN0eWxlTmFtZSBpbiBoZWxwZXJTdHlsZSApIHtcblx0XHRcdFx0XHRmZWF0dXJlc1tzdHlsZUNoZWNrSXRlbV0gPSBzdHlsZU5hbWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYodmVuZG9yICYmICFmZWF0dXJlcy5yYWYpIHtcblx0XHRcdFx0dmVuZG9yID0gdmVuZG9yLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRcdGZlYXR1cmVzLnJhZiA9IHdpbmRvd1t2ZW5kb3IrJ1JlcXVlc3RBbmltYXRpb25GcmFtZSddO1xuXHRcdFx0XHRpZihmZWF0dXJlcy5yYWYpIHtcblx0XHRcdFx0XHRmZWF0dXJlcy5jYWYgPSB3aW5kb3dbdmVuZG9yKydDYW5jZWxBbmltYXRpb25GcmFtZSddIHx8IFxuXHRcdFx0XHRcdFx0XHRcdFx0d2luZG93W3ZlbmRvcisnQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ107XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0XHRcblx0XHRpZighZmVhdHVyZXMucmFmKSB7XG5cdFx0XHR2YXIgbGFzdFRpbWUgPSAwO1xuXHRcdFx0ZmVhdHVyZXMucmFmID0gZnVuY3Rpb24oZm4pIHtcblx0XHRcdFx0dmFyIGN1cnJUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cdFx0XHRcdHZhciB0aW1lVG9DYWxsID0gTWF0aC5tYXgoMCwgMTYgLSAoY3VyclRpbWUgLSBsYXN0VGltZSkpO1xuXHRcdFx0XHR2YXIgaWQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHsgZm4oY3VyclRpbWUgKyB0aW1lVG9DYWxsKTsgfSwgdGltZVRvQ2FsbCk7XG5cdFx0XHRcdGxhc3RUaW1lID0gY3VyclRpbWUgKyB0aW1lVG9DYWxsO1xuXHRcdFx0XHRyZXR1cm4gaWQ7XG5cdFx0XHR9O1xuXHRcdFx0ZmVhdHVyZXMuY2FmID0gZnVuY3Rpb24oaWQpIHsgY2xlYXJUaW1lb3V0KGlkKTsgfTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgU1ZHIHN1cHBvcnRcblx0XHRmZWF0dXJlcy5zdmcgPSAhIWRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyAmJiBcblx0XHRcdFx0XHRcdCEhZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKS5jcmVhdGVTVkdSZWN0O1xuXG5cdFx0ZnJhbWV3b3JrLmZlYXR1cmVzID0gZmVhdHVyZXM7XG5cblx0XHRyZXR1cm4gZmVhdHVyZXM7XG5cdH1cbn07XG5cbmZyYW1ld29yay5kZXRlY3RGZWF0dXJlcygpO1xuXG4vLyBPdmVycmlkZSBhZGRFdmVudExpc3RlbmVyIGZvciBvbGQgdmVyc2lvbnMgb2YgSUVcbmlmKGZyYW1ld29yay5mZWF0dXJlcy5vbGRJRSkge1xuXG5cdGZyYW1ld29yay5iaW5kID0gZnVuY3Rpb24odGFyZ2V0LCB0eXBlLCBsaXN0ZW5lciwgdW5iaW5kKSB7XG5cdFx0XG5cdFx0dHlwZSA9IHR5cGUuc3BsaXQoJyAnKTtcblxuXHRcdHZhciBtZXRob2ROYW1lID0gKHVuYmluZCA/ICdkZXRhY2gnIDogJ2F0dGFjaCcpICsgJ0V2ZW50Jyxcblx0XHRcdGV2TmFtZSxcblx0XHRcdF9oYW5kbGVFdiA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRsaXN0ZW5lci5oYW5kbGVFdmVudC5jYWxsKGxpc3RlbmVyKTtcblx0XHRcdH07XG5cblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdHlwZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0ZXZOYW1lID0gdHlwZVtpXTtcblx0XHRcdGlmKGV2TmFtZSkge1xuXG5cdFx0XHRcdGlmKHR5cGVvZiBsaXN0ZW5lciA9PT0gJ29iamVjdCcgJiYgbGlzdGVuZXIuaGFuZGxlRXZlbnQpIHtcblx0XHRcdFx0XHRpZighdW5iaW5kKSB7XG5cdFx0XHRcdFx0XHRsaXN0ZW5lclsnb2xkSUUnICsgZXZOYW1lXSA9IF9oYW5kbGVFdjtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0aWYoIWxpc3RlbmVyWydvbGRJRScgKyBldk5hbWVdKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0YXJnZXRbbWV0aG9kTmFtZV0oICdvbicgKyBldk5hbWUsIGxpc3RlbmVyWydvbGRJRScgKyBldk5hbWVdKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0YXJnZXRbbWV0aG9kTmFtZV0oICdvbicgKyBldk5hbWUsIGxpc3RlbmVyKTtcblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRcbn1cblxuLyo+PmZyYW1ld29yay1icmlkZ2UqL1xuXG4vKj4+Y29yZSovXG4vL2Z1bmN0aW9uKHRlbXBsYXRlLCBVaUNsYXNzLCBpdGVtcywgb3B0aW9ucylcblxudmFyIHNlbGYgPSB0aGlzO1xuXG4vKipcbiAqIFN0YXRpYyB2YXJzLCBkb24ndCBjaGFuZ2UgdW5sZXNzIHlvdSBrbm93IHdoYXQgeW91J3JlIGRvaW5nLlxuICovXG52YXIgRE9VQkxFX1RBUF9SQURJVVMgPSAyNSwgXG5cdE5VTV9IT0xERVJTID0gMztcblxuLyoqXG4gKiBPcHRpb25zXG4gKi9cbnZhciBfb3B0aW9ucyA9IHtcblx0YWxsb3dQYW5Ub05leHQ6dHJ1ZSxcblx0c3BhY2luZzogMC4xMixcblx0YmdPcGFjaXR5OiAxLFxuXHRtb3VzZVVzZWQ6IGZhbHNlLFxuXHRsb29wOiB0cnVlLFxuXHRwaW5jaFRvQ2xvc2U6IHRydWUsXG5cdGNsb3NlT25TY3JvbGw6IHRydWUsXG5cdGNsb3NlT25WZXJ0aWNhbERyYWc6IHRydWUsXG5cdHZlcnRpY2FsRHJhZ1JhbmdlOiAwLjc1LFxuXHRoaWRlQW5pbWF0aW9uRHVyYXRpb246IDMzMyxcblx0c2hvd0FuaW1hdGlvbkR1cmF0aW9uOiAzMzMsXG5cdHNob3dIaWRlT3BhY2l0eTogZmFsc2UsXG5cdGZvY3VzOiB0cnVlLFxuXHRlc2NLZXk6IHRydWUsXG5cdGFycm93S2V5czogdHJ1ZSxcblx0bWFpblNjcm9sbEVuZEZyaWN0aW9uOiAwLjM1LFxuXHRwYW5FbmRGcmljdGlvbjogMC4zNSxcblx0aXNDbGlja2FibGVFbGVtZW50OiBmdW5jdGlvbihlbCkge1xuICAgICAgICByZXR1cm4gZWwudGFnTmFtZSA9PT0gJ0EnO1xuICAgIH0sXG4gICAgZ2V0RG91YmxlVGFwWm9vbTogZnVuY3Rpb24oaXNNb3VzZUNsaWNrLCBpdGVtKSB7XG4gICAgXHRpZihpc01vdXNlQ2xpY2spIHtcbiAgICBcdFx0cmV0dXJuIDE7XG4gICAgXHR9IGVsc2Uge1xuICAgIFx0XHRyZXR1cm4gaXRlbS5pbml0aWFsWm9vbUxldmVsIDwgMC43ID8gMSA6IDEuMzM7XG4gICAgXHR9XG4gICAgfSxcbiAgICBtYXhTcHJlYWRab29tOiAxLjMzLFxuXHRtb2RhbDogdHJ1ZSxcblxuXHQvLyBub3QgZnVsbHkgaW1wbGVtZW50ZWQgeWV0XG5cdHNjYWxlTW9kZTogJ2ZpdCcgLy8gVE9ET1xufTtcbmZyYW1ld29yay5leHRlbmQoX29wdGlvbnMsIG9wdGlvbnMpO1xuXG5cbi8qKlxuICogUHJpdmF0ZSBoZWxwZXIgdmFyaWFibGVzICYgZnVuY3Rpb25zXG4gKi9cblxudmFyIF9nZXRFbXB0eVBvaW50ID0gZnVuY3Rpb24oKSB7IFxuXHRcdHJldHVybiB7eDowLHk6MH07IFxuXHR9O1xuXG52YXIgX2lzT3Blbixcblx0X2lzRGVzdHJveWluZyxcblx0X2Nsb3NlZEJ5U2Nyb2xsLFxuXHRfY3VycmVudEl0ZW1JbmRleCxcblx0X2NvbnRhaW5lclN0eWxlLFxuXHRfY29udGFpbmVyU2hpZnRJbmRleCxcblx0X2N1cnJQYW5EaXN0ID0gX2dldEVtcHR5UG9pbnQoKSxcblx0X3N0YXJ0UGFuT2Zmc2V0ID0gX2dldEVtcHR5UG9pbnQoKSxcblx0X3Bhbk9mZnNldCA9IF9nZXRFbXB0eVBvaW50KCksXG5cdF91cE1vdmVFdmVudHMsIC8vIGRyYWcgbW92ZSwgZHJhZyBlbmQgJiBkcmFnIGNhbmNlbCBldmVudHMgYXJyYXlcblx0X2Rvd25FdmVudHMsIC8vIGRyYWcgc3RhcnQgZXZlbnRzIGFycmF5XG5cdF9nbG9iYWxFdmVudEhhbmRsZXJzLFxuXHRfdmlld3BvcnRTaXplID0ge30sXG5cdF9jdXJyWm9vbUxldmVsLFxuXHRfc3RhcnRab29tTGV2ZWwsXG5cdF90cmFuc2xhdGVQcmVmaXgsXG5cdF90cmFuc2xhdGVTdWZpeCxcblx0X3VwZGF0ZVNpemVJbnRlcnZhbCxcblx0X2l0ZW1zTmVlZFVwZGF0ZSxcblx0X2N1cnJQb3NpdGlvbkluZGV4ID0gMCxcblx0X29mZnNldCA9IHt9LFxuXHRfc2xpZGVTaXplID0gX2dldEVtcHR5UG9pbnQoKSwgLy8gc2l6ZSBvZiBzbGlkZSBhcmVhLCBpbmNsdWRpbmcgc3BhY2luZ1xuXHRfaXRlbUhvbGRlcnMsXG5cdF9wcmV2SXRlbUluZGV4LFxuXHRfaW5kZXhEaWZmID0gMCwgLy8gZGlmZmVyZW5jZSBvZiBpbmRleGVzIHNpbmNlIGxhc3QgY29udGVudCB1cGRhdGVcblx0X2RyYWdTdGFydEV2ZW50LFxuXHRfZHJhZ01vdmVFdmVudCxcblx0X2RyYWdFbmRFdmVudCxcblx0X2RyYWdDYW5jZWxFdmVudCxcblx0X3RyYW5zZm9ybUtleSxcblx0X3BvaW50ZXJFdmVudEVuYWJsZWQsXG5cdF9pc0ZpeGVkUG9zaXRpb24gPSB0cnVlLFxuXHRfbGlrZWx5VG91Y2hEZXZpY2UsXG5cdF9tb2R1bGVzID0gW10sXG5cdF9yZXF1ZXN0QUYsXG5cdF9jYW5jZWxBRixcblx0X2luaXRhbENsYXNzTmFtZSxcblx0X2luaXRhbFdpbmRvd1Njcm9sbFksXG5cdF9vbGRJRSxcblx0X2N1cnJlbnRXaW5kb3dTY3JvbGxZLFxuXHRfZmVhdHVyZXMsXG5cdF93aW5kb3dWaXNpYmxlU2l6ZSA9IHt9LFxuXHRfcmVuZGVyTWF4UmVzb2x1dGlvbiA9IGZhbHNlLFxuXHRfb3JpZW50YXRpb25DaGFuZ2VUaW1lb3V0LFxuXG5cblx0Ly8gUmVnaXN0ZXJzIFBob3RvU1dpcGUgbW9kdWxlIChIaXN0b3J5LCBDb250cm9sbGVyIC4uLilcblx0X3JlZ2lzdGVyTW9kdWxlID0gZnVuY3Rpb24obmFtZSwgbW9kdWxlKSB7XG5cdFx0ZnJhbWV3b3JrLmV4dGVuZChzZWxmLCBtb2R1bGUucHVibGljTWV0aG9kcyk7XG5cdFx0X21vZHVsZXMucHVzaChuYW1lKTtcblx0fSxcblxuXHRfZ2V0TG9vcGVkSWQgPSBmdW5jdGlvbihpbmRleCkge1xuXHRcdHZhciBudW1TbGlkZXMgPSBfZ2V0TnVtSXRlbXMoKTtcblx0XHRpZihpbmRleCA+IG51bVNsaWRlcyAtIDEpIHtcblx0XHRcdHJldHVybiBpbmRleCAtIG51bVNsaWRlcztcblx0XHR9IGVsc2UgIGlmKGluZGV4IDwgMCkge1xuXHRcdFx0cmV0dXJuIG51bVNsaWRlcyArIGluZGV4O1xuXHRcdH1cblx0XHRyZXR1cm4gaW5kZXg7XG5cdH0sXG5cdFxuXHQvLyBNaWNybyBiaW5kL3RyaWdnZXJcblx0X2xpc3RlbmVycyA9IHt9LFxuXHRfbGlzdGVuID0gZnVuY3Rpb24obmFtZSwgZm4pIHtcblx0XHRpZighX2xpc3RlbmVyc1tuYW1lXSkge1xuXHRcdFx0X2xpc3RlbmVyc1tuYW1lXSA9IFtdO1xuXHRcdH1cblx0XHRyZXR1cm4gX2xpc3RlbmVyc1tuYW1lXS5wdXNoKGZuKTtcblx0fSxcblx0X3Nob3V0ID0gZnVuY3Rpb24obmFtZSkge1xuXHRcdHZhciBsaXN0ZW5lcnMgPSBfbGlzdGVuZXJzW25hbWVdO1xuXG5cdFx0aWYobGlzdGVuZXJzKSB7XG5cdFx0XHR2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cdFx0XHRhcmdzLnNoaWZ0KCk7XG5cblx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0bGlzdGVuZXJzW2ldLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblxuXHRfZ2V0Q3VycmVudFRpbWUgPSBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cdH0sXG5cdF9hcHBseUJnT3BhY2l0eSA9IGZ1bmN0aW9uKG9wYWNpdHkpIHtcblx0XHRfYmdPcGFjaXR5ID0gb3BhY2l0eTtcblx0XHRzZWxmLmJnLnN0eWxlLm9wYWNpdHkgPSBvcGFjaXR5ICogX29wdGlvbnMuYmdPcGFjaXR5O1xuXHR9LFxuXG5cdF9hcHBseVpvb21UcmFuc2Zvcm0gPSBmdW5jdGlvbihzdHlsZU9iaix4LHksem9vbSxpdGVtKSB7XG5cdFx0aWYoIV9yZW5kZXJNYXhSZXNvbHV0aW9uIHx8IChpdGVtICYmIGl0ZW0gIT09IHNlbGYuY3Vyckl0ZW0pICkge1xuXHRcdFx0em9vbSA9IHpvb20gLyAoaXRlbSA/IGl0ZW0uZml0UmF0aW8gOiBzZWxmLmN1cnJJdGVtLmZpdFJhdGlvKTtcdFxuXHRcdH1cblx0XHRcdFxuXHRcdHN0eWxlT2JqW190cmFuc2Zvcm1LZXldID0gX3RyYW5zbGF0ZVByZWZpeCArIHggKyAncHgsICcgKyB5ICsgJ3B4JyArIF90cmFuc2xhdGVTdWZpeCArICcgc2NhbGUoJyArIHpvb20gKyAnKSc7XG5cdH0sXG5cdF9hcHBseUN1cnJlbnRab29tUGFuID0gZnVuY3Rpb24oIGFsbG93UmVuZGVyUmVzb2x1dGlvbiApIHtcblx0XHRpZihfY3Vyclpvb21FbGVtZW50U3R5bGUpIHtcblxuXHRcdFx0aWYoYWxsb3dSZW5kZXJSZXNvbHV0aW9uKSB7XG5cdFx0XHRcdGlmKF9jdXJyWm9vbUxldmVsID4gc2VsZi5jdXJySXRlbS5maXRSYXRpbykge1xuXHRcdFx0XHRcdGlmKCFfcmVuZGVyTWF4UmVzb2x1dGlvbikge1xuXHRcdFx0XHRcdFx0X3NldEltYWdlU2l6ZShzZWxmLmN1cnJJdGVtLCBmYWxzZSwgdHJ1ZSk7XG5cdFx0XHRcdFx0XHRfcmVuZGVyTWF4UmVzb2x1dGlvbiA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGlmKF9yZW5kZXJNYXhSZXNvbHV0aW9uKSB7XG5cdFx0XHRcdFx0XHRfc2V0SW1hZ2VTaXplKHNlbGYuY3Vyckl0ZW0pO1xuXHRcdFx0XHRcdFx0X3JlbmRlck1heFJlc29sdXRpb24gPSBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdFxuXG5cdFx0XHRfYXBwbHlab29tVHJhbnNmb3JtKF9jdXJyWm9vbUVsZW1lbnRTdHlsZSwgX3Bhbk9mZnNldC54LCBfcGFuT2Zmc2V0LnksIF9jdXJyWm9vbUxldmVsKTtcblx0XHR9XG5cdH0sXG5cdF9hcHBseVpvb21QYW5Ub0l0ZW0gPSBmdW5jdGlvbihpdGVtKSB7XG5cdFx0aWYoaXRlbS5jb250YWluZXIpIHtcblxuXHRcdFx0X2FwcGx5Wm9vbVRyYW5zZm9ybShpdGVtLmNvbnRhaW5lci5zdHlsZSwgXG5cdFx0XHRcdFx0XHRcdFx0aXRlbS5pbml0aWFsUG9zaXRpb24ueCwgXG5cdFx0XHRcdFx0XHRcdFx0aXRlbS5pbml0aWFsUG9zaXRpb24ueSwgXG5cdFx0XHRcdFx0XHRcdFx0aXRlbS5pbml0aWFsWm9vbUxldmVsLFxuXHRcdFx0XHRcdFx0XHRcdGl0ZW0pO1xuXHRcdH1cblx0fSxcblx0X3NldFRyYW5zbGF0ZVggPSBmdW5jdGlvbih4LCBlbFN0eWxlKSB7XG5cdFx0ZWxTdHlsZVtfdHJhbnNmb3JtS2V5XSA9IF90cmFuc2xhdGVQcmVmaXggKyB4ICsgJ3B4LCAwcHgnICsgX3RyYW5zbGF0ZVN1Zml4O1xuXHR9LFxuXHRfbW92ZU1haW5TY3JvbGwgPSBmdW5jdGlvbih4LCBkcmFnZ2luZykge1xuXG5cdFx0aWYoIV9vcHRpb25zLmxvb3AgJiYgZHJhZ2dpbmcpIHtcblx0XHRcdHZhciBuZXdTbGlkZUluZGV4T2Zmc2V0ID0gX2N1cnJlbnRJdGVtSW5kZXggKyAoX3NsaWRlU2l6ZS54ICogX2N1cnJQb3NpdGlvbkluZGV4IC0geCkgLyBfc2xpZGVTaXplLngsXG5cdFx0XHRcdGRlbHRhID0gTWF0aC5yb3VuZCh4IC0gX21haW5TY3JvbGxQb3MueCk7XG5cblx0XHRcdGlmKCAobmV3U2xpZGVJbmRleE9mZnNldCA8IDAgJiYgZGVsdGEgPiAwKSB8fCBcblx0XHRcdFx0KG5ld1NsaWRlSW5kZXhPZmZzZXQgPj0gX2dldE51bUl0ZW1zKCkgLSAxICYmIGRlbHRhIDwgMCkgKSB7XG5cdFx0XHRcdHggPSBfbWFpblNjcm9sbFBvcy54ICsgZGVsdGEgKiBfb3B0aW9ucy5tYWluU2Nyb2xsRW5kRnJpY3Rpb247XG5cdFx0XHR9IFxuXHRcdH1cblx0XHRcblx0XHRfbWFpblNjcm9sbFBvcy54ID0geDtcblx0XHRfc2V0VHJhbnNsYXRlWCh4LCBfY29udGFpbmVyU3R5bGUpO1xuXHR9LFxuXHRfY2FsY3VsYXRlUGFuT2Zmc2V0ID0gZnVuY3Rpb24oYXhpcywgem9vbUxldmVsKSB7XG5cdFx0dmFyIG0gPSBfbWlkWm9vbVBvaW50W2F4aXNdIC0gX29mZnNldFtheGlzXTtcblx0XHRyZXR1cm4gX3N0YXJ0UGFuT2Zmc2V0W2F4aXNdICsgX2N1cnJQYW5EaXN0W2F4aXNdICsgbSAtIG0gKiAoIHpvb21MZXZlbCAvIF9zdGFydFpvb21MZXZlbCApO1xuXHR9LFxuXHRcblx0X2VxdWFsaXplUG9pbnRzID0gZnVuY3Rpb24ocDEsIHAyKSB7XG5cdFx0cDEueCA9IHAyLng7XG5cdFx0cDEueSA9IHAyLnk7XG5cdFx0aWYocDIuaWQpIHtcblx0XHRcdHAxLmlkID0gcDIuaWQ7XG5cdFx0fVxuXHR9LFxuXHRfcm91bmRQb2ludCA9IGZ1bmN0aW9uKHApIHtcblx0XHRwLnggPSBNYXRoLnJvdW5kKHAueCk7XG5cdFx0cC55ID0gTWF0aC5yb3VuZChwLnkpO1xuXHR9LFxuXG5cdF9tb3VzZU1vdmVUaW1lb3V0ID0gbnVsbCxcblx0X29uRmlyc3RNb3VzZU1vdmUgPSBmdW5jdGlvbigpIHtcblx0XHQvLyBXYWl0IHVudGlsIG1vdXNlIG1vdmUgZXZlbnQgaXMgZmlyZWQgYXQgbGVhc3QgdHdpY2UgZHVyaW5nIDEwMG1zXG5cdFx0Ly8gV2UgZG8gdGhpcywgYmVjYXVzZSBzb21lIG1vYmlsZSBicm93c2VycyB0cmlnZ2VyIGl0IG9uIHRvdWNoc3RhcnRcblx0XHRpZihfbW91c2VNb3ZlVGltZW91dCApIHsgXG5cdFx0XHRmcmFtZXdvcmsudW5iaW5kKGRvY3VtZW50LCAnbW91c2Vtb3ZlJywgX29uRmlyc3RNb3VzZU1vdmUpO1xuXHRcdFx0ZnJhbWV3b3JrLmFkZENsYXNzKHRlbXBsYXRlLCAncHN3cC0taGFzX21vdXNlJyk7XG5cdFx0XHRfb3B0aW9ucy5tb3VzZVVzZWQgPSB0cnVlO1xuXHRcdFx0X3Nob3V0KCdtb3VzZVVzZWQnKTtcblx0XHR9XG5cdFx0X21vdXNlTW92ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0X21vdXNlTW92ZVRpbWVvdXQgPSBudWxsO1xuXHRcdH0sIDEwMCk7XG5cdH0sXG5cblx0X2JpbmRFdmVudHMgPSBmdW5jdGlvbigpIHtcblx0XHRmcmFtZXdvcmsuYmluZChkb2N1bWVudCwgJ2tleWRvd24nLCBzZWxmKTtcblxuXHRcdGlmKF9mZWF0dXJlcy50cmFuc2Zvcm0pIHtcblx0XHRcdC8vIGRvbid0IGJpbmQgY2xpY2sgZXZlbnQgaW4gYnJvd3NlcnMgdGhhdCBkb24ndCBzdXBwb3J0IHRyYW5zZm9ybSAobW9zdGx5IElFOClcblx0XHRcdGZyYW1ld29yay5iaW5kKHNlbGYuc2Nyb2xsV3JhcCwgJ2NsaWNrJywgc2VsZik7XG5cdFx0fVxuXHRcdFxuXG5cdFx0aWYoIV9vcHRpb25zLm1vdXNlVXNlZCkge1xuXHRcdFx0ZnJhbWV3b3JrLmJpbmQoZG9jdW1lbnQsICdtb3VzZW1vdmUnLCBfb25GaXJzdE1vdXNlTW92ZSk7XG5cdFx0fVxuXG5cdFx0ZnJhbWV3b3JrLmJpbmQod2luZG93LCAncmVzaXplIHNjcm9sbCBvcmllbnRhdGlvbmNoYW5nZScsIHNlbGYpO1xuXG5cdFx0X3Nob3V0KCdiaW5kRXZlbnRzJyk7XG5cdH0sXG5cblx0X3VuYmluZEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXHRcdGZyYW1ld29yay51bmJpbmQod2luZG93LCAncmVzaXplIHNjcm9sbCBvcmllbnRhdGlvbmNoYW5nZScsIHNlbGYpO1xuXHRcdGZyYW1ld29yay51bmJpbmQod2luZG93LCAnc2Nyb2xsJywgX2dsb2JhbEV2ZW50SGFuZGxlcnMuc2Nyb2xsKTtcblx0XHRmcmFtZXdvcmsudW5iaW5kKGRvY3VtZW50LCAna2V5ZG93bicsIHNlbGYpO1xuXHRcdGZyYW1ld29yay51bmJpbmQoZG9jdW1lbnQsICdtb3VzZW1vdmUnLCBfb25GaXJzdE1vdXNlTW92ZSk7XG5cblx0XHRpZihfZmVhdHVyZXMudHJhbnNmb3JtKSB7XG5cdFx0XHRmcmFtZXdvcmsudW5iaW5kKHNlbGYuc2Nyb2xsV3JhcCwgJ2NsaWNrJywgc2VsZik7XG5cdFx0fVxuXG5cdFx0aWYoX2lzRHJhZ2dpbmcpIHtcblx0XHRcdGZyYW1ld29yay51bmJpbmQod2luZG93LCBfdXBNb3ZlRXZlbnRzLCBzZWxmKTtcblx0XHR9XG5cblx0XHRjbGVhclRpbWVvdXQoX29yaWVudGF0aW9uQ2hhbmdlVGltZW91dCk7XG5cblx0XHRfc2hvdXQoJ3VuYmluZEV2ZW50cycpO1xuXHR9LFxuXHRcblx0X2NhbGN1bGF0ZVBhbkJvdW5kcyA9IGZ1bmN0aW9uKHpvb21MZXZlbCwgdXBkYXRlKSB7XG5cdFx0dmFyIGJvdW5kcyA9IF9jYWxjdWxhdGVJdGVtU2l6ZSggc2VsZi5jdXJySXRlbSwgX3ZpZXdwb3J0U2l6ZSwgem9vbUxldmVsICk7XG5cdFx0aWYodXBkYXRlKSB7XG5cdFx0XHRfY3VyclBhbkJvdW5kcyA9IGJvdW5kcztcblx0XHR9XG5cdFx0cmV0dXJuIGJvdW5kcztcblx0fSxcblx0XG5cdF9nZXRNaW5ab29tTGV2ZWwgPSBmdW5jdGlvbihpdGVtKSB7XG5cdFx0aWYoIWl0ZW0pIHtcblx0XHRcdGl0ZW0gPSBzZWxmLmN1cnJJdGVtO1xuXHRcdH1cblx0XHRyZXR1cm4gaXRlbS5pbml0aWFsWm9vbUxldmVsO1xuXHR9LFxuXHRfZ2V0TWF4Wm9vbUxldmVsID0gZnVuY3Rpb24oaXRlbSkge1xuXHRcdGlmKCFpdGVtKSB7XG5cdFx0XHRpdGVtID0gc2VsZi5jdXJySXRlbTtcblx0XHR9XG5cdFx0cmV0dXJuIGl0ZW0udyA+IDAgPyBfb3B0aW9ucy5tYXhTcHJlYWRab29tIDogMTtcblx0fSxcblxuXHQvLyBSZXR1cm4gdHJ1ZSBpZiBvZmZzZXQgaXMgb3V0IG9mIHRoZSBib3VuZHNcblx0X21vZGlmeURlc3RQYW5PZmZzZXQgPSBmdW5jdGlvbihheGlzLCBkZXN0UGFuQm91bmRzLCBkZXN0UGFuT2Zmc2V0LCBkZXN0Wm9vbUxldmVsKSB7XG5cdFx0aWYoZGVzdFpvb21MZXZlbCA9PT0gc2VsZi5jdXJySXRlbS5pbml0aWFsWm9vbUxldmVsKSB7XG5cdFx0XHRkZXN0UGFuT2Zmc2V0W2F4aXNdID0gc2VsZi5jdXJySXRlbS5pbml0aWFsUG9zaXRpb25bYXhpc107XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZGVzdFBhbk9mZnNldFtheGlzXSA9IF9jYWxjdWxhdGVQYW5PZmZzZXQoYXhpcywgZGVzdFpvb21MZXZlbCk7IFxuXG5cdFx0XHRpZihkZXN0UGFuT2Zmc2V0W2F4aXNdID4gZGVzdFBhbkJvdW5kcy5taW5bYXhpc10pIHtcblx0XHRcdFx0ZGVzdFBhbk9mZnNldFtheGlzXSA9IGRlc3RQYW5Cb3VuZHMubWluW2F4aXNdO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH0gZWxzZSBpZihkZXN0UGFuT2Zmc2V0W2F4aXNdIDwgZGVzdFBhbkJvdW5kcy5tYXhbYXhpc10gKSB7XG5cdFx0XHRcdGRlc3RQYW5PZmZzZXRbYXhpc10gPSBkZXN0UGFuQm91bmRzLm1heFtheGlzXTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fSxcblxuXHRfc2V0dXBUcmFuc2Zvcm1zID0gZnVuY3Rpb24oKSB7XG5cblx0XHRpZihfdHJhbnNmb3JtS2V5KSB7XG5cdFx0XHQvLyBzZXR1cCAzZCB0cmFuc2Zvcm1zXG5cdFx0XHR2YXIgYWxsb3czZFRyYW5zZm9ybSA9IF9mZWF0dXJlcy5wZXJzcGVjdGl2ZSAmJiAhX2xpa2VseVRvdWNoRGV2aWNlO1xuXHRcdFx0X3RyYW5zbGF0ZVByZWZpeCA9ICd0cmFuc2xhdGUnICsgKGFsbG93M2RUcmFuc2Zvcm0gPyAnM2QoJyA6ICcoJyk7XG5cdFx0XHRfdHJhbnNsYXRlU3VmaXggPSBfZmVhdHVyZXMucGVyc3BlY3RpdmUgPyAnLCAwcHgpJyA6ICcpJztcdFxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIE92ZXJyaWRlIHpvb20vcGFuL21vdmUgZnVuY3Rpb25zIGluIGNhc2Ugb2xkIGJyb3dzZXIgaXMgdXNlZCAobW9zdCBsaWtlbHkgSUUpXG5cdFx0Ly8gKHNvIHRoZXkgdXNlIGxlZnQvdG9wL3dpZHRoL2hlaWdodCwgaW5zdGVhZCBvZiBDU1MgdHJhbnNmb3JtKVxuXHRcblx0XHRfdHJhbnNmb3JtS2V5ID0gJ2xlZnQnO1xuXHRcdGZyYW1ld29yay5hZGRDbGFzcyh0ZW1wbGF0ZSwgJ3Bzd3AtLWllJyk7XG5cblx0XHRfc2V0VHJhbnNsYXRlWCA9IGZ1bmN0aW9uKHgsIGVsU3R5bGUpIHtcblx0XHRcdGVsU3R5bGUubGVmdCA9IHggKyAncHgnO1xuXHRcdH07XG5cdFx0X2FwcGx5Wm9vbVBhblRvSXRlbSA9IGZ1bmN0aW9uKGl0ZW0pIHtcblxuXHRcdFx0dmFyIHpvb21SYXRpbyA9IGl0ZW0uZml0UmF0aW8gPiAxID8gMSA6IGl0ZW0uZml0UmF0aW8sXG5cdFx0XHRcdHMgPSBpdGVtLmNvbnRhaW5lci5zdHlsZSxcblx0XHRcdFx0dyA9IHpvb21SYXRpbyAqIGl0ZW0udyxcblx0XHRcdFx0aCA9IHpvb21SYXRpbyAqIGl0ZW0uaDtcblxuXHRcdFx0cy53aWR0aCA9IHcgKyAncHgnO1xuXHRcdFx0cy5oZWlnaHQgPSBoICsgJ3B4Jztcblx0XHRcdHMubGVmdCA9IGl0ZW0uaW5pdGlhbFBvc2l0aW9uLnggKyAncHgnO1xuXHRcdFx0cy50b3AgPSBpdGVtLmluaXRpYWxQb3NpdGlvbi55ICsgJ3B4JztcblxuXHRcdH07XG5cdFx0X2FwcGx5Q3VycmVudFpvb21QYW4gPSBmdW5jdGlvbigpIHtcblx0XHRcdGlmKF9jdXJyWm9vbUVsZW1lbnRTdHlsZSkge1xuXG5cdFx0XHRcdHZhciBzID0gX2N1cnJab29tRWxlbWVudFN0eWxlLFxuXHRcdFx0XHRcdGl0ZW0gPSBzZWxmLmN1cnJJdGVtLFxuXHRcdFx0XHRcdHpvb21SYXRpbyA9IGl0ZW0uZml0UmF0aW8gPiAxID8gMSA6IGl0ZW0uZml0UmF0aW8sXG5cdFx0XHRcdFx0dyA9IHpvb21SYXRpbyAqIGl0ZW0udyxcblx0XHRcdFx0XHRoID0gem9vbVJhdGlvICogaXRlbS5oO1xuXG5cdFx0XHRcdHMud2lkdGggPSB3ICsgJ3B4Jztcblx0XHRcdFx0cy5oZWlnaHQgPSBoICsgJ3B4JztcblxuXG5cdFx0XHRcdHMubGVmdCA9IF9wYW5PZmZzZXQueCArICdweCc7XG5cdFx0XHRcdHMudG9wID0gX3Bhbk9mZnNldC55ICsgJ3B4Jztcblx0XHRcdH1cblx0XHRcdFxuXHRcdH07XG5cdH0sXG5cblx0X29uS2V5RG93biA9IGZ1bmN0aW9uKGUpIHtcblx0XHR2YXIga2V5ZG93bkFjdGlvbiA9ICcnO1xuXHRcdGlmKF9vcHRpb25zLmVzY0tleSAmJiBlLmtleUNvZGUgPT09IDI3KSB7IFxuXHRcdFx0a2V5ZG93bkFjdGlvbiA9ICdjbG9zZSc7XG5cdFx0fSBlbHNlIGlmKF9vcHRpb25zLmFycm93S2V5cykge1xuXHRcdFx0aWYoZS5rZXlDb2RlID09PSAzNykge1xuXHRcdFx0XHRrZXlkb3duQWN0aW9uID0gJ3ByZXYnO1xuXHRcdFx0fSBlbHNlIGlmKGUua2V5Q29kZSA9PT0gMzkpIHsgXG5cdFx0XHRcdGtleWRvd25BY3Rpb24gPSAnbmV4dCc7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYoa2V5ZG93bkFjdGlvbikge1xuXHRcdFx0Ly8gZG9uJ3QgZG8gYW55dGhpbmcgaWYgc3BlY2lhbCBrZXkgcHJlc3NlZCB0byBwcmV2ZW50IGZyb20gb3ZlcnJpZGluZyBkZWZhdWx0IGJyb3dzZXIgYWN0aW9uc1xuXHRcdFx0Ly8gZS5nLiBpbiBDaHJvbWUgb24gTWFjIGNtZCthcnJvdy1sZWZ0IHJldHVybnMgdG8gcHJldmlvdXMgcGFnZVxuXHRcdFx0aWYoICFlLmN0cmxLZXkgJiYgIWUuYWx0S2V5ICYmICFlLnNoaWZ0S2V5ICYmICFlLm1ldGFLZXkgKSB7XG5cdFx0XHRcdGlmKGUucHJldmVudERlZmF1bHQpIHtcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZS5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuXHRcdFx0XHR9IFxuXHRcdFx0XHRzZWxmW2tleWRvd25BY3Rpb25dKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXG5cdF9vbkdsb2JhbENsaWNrID0gZnVuY3Rpb24oZSkge1xuXHRcdGlmKCFlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gZG9uJ3QgYWxsb3cgY2xpY2sgZXZlbnQgdG8gcGFzcyB0aHJvdWdoIHdoZW4gdHJpZ2dlcmluZyBhZnRlciBkcmFnIG9yIHNvbWUgb3RoZXIgZ2VzdHVyZVxuXHRcdGlmKF9tb3ZlZCB8fCBfem9vbVN0YXJ0ZWQgfHwgX21haW5TY3JvbGxBbmltYXRpbmcgfHwgX3ZlcnRpY2FsRHJhZ0luaXRpYXRlZCkge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR9XG5cdH0sXG5cblx0X3VwZGF0ZVBhZ2VTY3JvbGxPZmZzZXQgPSBmdW5jdGlvbigpIHtcblx0XHRzZWxmLnNldFNjcm9sbE9mZnNldCgwLCBmcmFtZXdvcmsuZ2V0U2Nyb2xsWSgpKTtcdFx0XG5cdH07XG5cdFxuXG5cblx0XG5cblxuXG4vLyBNaWNybyBhbmltYXRpb24gZW5naW5lXG52YXIgX2FuaW1hdGlvbnMgPSB7fSxcblx0X251bUFuaW1hdGlvbnMgPSAwLFxuXHRfc3RvcEFuaW1hdGlvbiA9IGZ1bmN0aW9uKG5hbWUpIHtcblx0XHRpZihfYW5pbWF0aW9uc1tuYW1lXSkge1xuXHRcdFx0aWYoX2FuaW1hdGlvbnNbbmFtZV0ucmFmKSB7XG5cdFx0XHRcdF9jYW5jZWxBRiggX2FuaW1hdGlvbnNbbmFtZV0ucmFmICk7XG5cdFx0XHR9XG5cdFx0XHRfbnVtQW5pbWF0aW9ucy0tO1xuXHRcdFx0ZGVsZXRlIF9hbmltYXRpb25zW25hbWVdO1xuXHRcdH1cblx0fSxcblx0X3JlZ2lzdGVyU3RhcnRBbmltYXRpb24gPSBmdW5jdGlvbihuYW1lKSB7XG5cdFx0aWYoX2FuaW1hdGlvbnNbbmFtZV0pIHtcblx0XHRcdF9zdG9wQW5pbWF0aW9uKG5hbWUpO1xuXHRcdH1cblx0XHRpZighX2FuaW1hdGlvbnNbbmFtZV0pIHtcblx0XHRcdF9udW1BbmltYXRpb25zKys7XG5cdFx0XHRfYW5pbWF0aW9uc1tuYW1lXSA9IHt9O1xuXHRcdH1cblx0fSxcblx0X3N0b3BBbGxBbmltYXRpb25zID0gZnVuY3Rpb24oKSB7XG5cdFx0Zm9yICh2YXIgcHJvcCBpbiBfYW5pbWF0aW9ucykge1xuXG5cdFx0XHRpZiggX2FuaW1hdGlvbnMuaGFzT3duUHJvcGVydHkoIHByb3AgKSApIHtcblx0XHRcdFx0X3N0b3BBbmltYXRpb24ocHJvcCk7XG5cdFx0XHR9IFxuXHRcdFx0XG5cdFx0fVxuXHR9LFxuXHRfYW5pbWF0ZVByb3AgPSBmdW5jdGlvbihuYW1lLCBiLCBlbmRQcm9wLCBkLCBlYXNpbmdGbiwgb25VcGRhdGUsIG9uQ29tcGxldGUpIHtcblx0XHR2YXIgc3RhcnRBbmltVGltZSA9IF9nZXRDdXJyZW50VGltZSgpLCB0O1xuXHRcdF9yZWdpc3RlclN0YXJ0QW5pbWF0aW9uKG5hbWUpO1xuXG5cdFx0dmFyIGFuaW1sb29wID0gZnVuY3Rpb24oKXtcblx0XHRcdGlmICggX2FuaW1hdGlvbnNbbmFtZV0gKSB7XG5cdFx0XHRcdFxuXHRcdFx0XHR0ID0gX2dldEN1cnJlbnRUaW1lKCkgLSBzdGFydEFuaW1UaW1lOyAvLyB0aW1lIGRpZmZcblx0XHRcdFx0Ly9iIC0gYmVnaW5uaW5nIChzdGFydCBwcm9wKVxuXHRcdFx0XHQvL2QgLSBhbmltIGR1cmF0aW9uXG5cblx0XHRcdFx0aWYgKCB0ID49IGQgKSB7XG5cdFx0XHRcdFx0X3N0b3BBbmltYXRpb24obmFtZSk7XG5cdFx0XHRcdFx0b25VcGRhdGUoZW5kUHJvcCk7XG5cdFx0XHRcdFx0aWYob25Db21wbGV0ZSkge1xuXHRcdFx0XHRcdFx0b25Db21wbGV0ZSgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0b25VcGRhdGUoIChlbmRQcm9wIC0gYikgKiBlYXNpbmdGbih0L2QpICsgYiApO1xuXG5cdFx0XHRcdF9hbmltYXRpb25zW25hbWVdLnJhZiA9IF9yZXF1ZXN0QUYoYW5pbWxvb3ApO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0YW5pbWxvb3AoKTtcblx0fTtcblx0XG5cblxudmFyIHB1YmxpY01ldGhvZHMgPSB7XG5cblx0Ly8gbWFrZSBhIGZldyBsb2NhbCB2YXJpYWJsZXMgYW5kIGZ1bmN0aW9ucyBwdWJsaWNcblx0c2hvdXQ6IF9zaG91dCxcblx0bGlzdGVuOiBfbGlzdGVuLFxuXHR2aWV3cG9ydFNpemU6IF92aWV3cG9ydFNpemUsXG5cdG9wdGlvbnM6IF9vcHRpb25zLFxuXG5cdGlzTWFpblNjcm9sbEFuaW1hdGluZzogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIF9tYWluU2Nyb2xsQW5pbWF0aW5nO1xuXHR9LFxuXHRnZXRab29tTGV2ZWw6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfY3Vyclpvb21MZXZlbDtcblx0fSxcblx0Z2V0Q3VycmVudEluZGV4OiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gX2N1cnJlbnRJdGVtSW5kZXg7XG5cdH0sXG5cdGlzRHJhZ2dpbmc6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfaXNEcmFnZ2luZztcblx0fSxcdFxuXHRpc1pvb21pbmc6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfaXNab29taW5nO1xuXHR9LFxuXHRzZXRTY3JvbGxPZmZzZXQ6IGZ1bmN0aW9uKHgseSkge1xuXHRcdF9vZmZzZXQueCA9IHg7XG5cdFx0X2N1cnJlbnRXaW5kb3dTY3JvbGxZID0gX29mZnNldC55ID0geTtcblx0XHRfc2hvdXQoJ3VwZGF0ZVNjcm9sbE9mZnNldCcsIF9vZmZzZXQpO1xuXHR9LFxuXHRhcHBseVpvb21QYW46IGZ1bmN0aW9uKHpvb21MZXZlbCxwYW5YLHBhblksYWxsb3dSZW5kZXJSZXNvbHV0aW9uKSB7XG5cdFx0X3Bhbk9mZnNldC54ID0gcGFuWDtcblx0XHRfcGFuT2Zmc2V0LnkgPSBwYW5ZO1xuXHRcdF9jdXJyWm9vbUxldmVsID0gem9vbUxldmVsO1xuXHRcdF9hcHBseUN1cnJlbnRab29tUGFuKCBhbGxvd1JlbmRlclJlc29sdXRpb24gKTtcblx0fSxcblxuXHRpbml0OiBmdW5jdGlvbigpIHtcblxuXHRcdGlmKF9pc09wZW4gfHwgX2lzRGVzdHJveWluZykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHZhciBpO1xuXG5cdFx0c2VsZi5mcmFtZXdvcmsgPSBmcmFtZXdvcms7IC8vIGJhc2ljIGZ1bmN0aW9uYWxpdHlcblx0XHRzZWxmLnRlbXBsYXRlID0gdGVtcGxhdGU7IC8vIHJvb3QgRE9NIGVsZW1lbnQgb2YgUGhvdG9Td2lwZVxuXHRcdHNlbGYuYmcgPSBmcmFtZXdvcmsuZ2V0Q2hpbGRCeUNsYXNzKHRlbXBsYXRlLCAncHN3cF9fYmcnKTtcblxuXHRcdF9pbml0YWxDbGFzc05hbWUgPSB0ZW1wbGF0ZS5jbGFzc05hbWU7XG5cdFx0X2lzT3BlbiA9IHRydWU7XG5cdFx0XHRcdFxuXHRcdF9mZWF0dXJlcyA9IGZyYW1ld29yay5kZXRlY3RGZWF0dXJlcygpO1xuXHRcdF9yZXF1ZXN0QUYgPSBfZmVhdHVyZXMucmFmO1xuXHRcdF9jYW5jZWxBRiA9IF9mZWF0dXJlcy5jYWY7XG5cdFx0X3RyYW5zZm9ybUtleSA9IF9mZWF0dXJlcy50cmFuc2Zvcm07XG5cdFx0X29sZElFID0gX2ZlYXR1cmVzLm9sZElFO1xuXHRcdFxuXHRcdHNlbGYuc2Nyb2xsV3JhcCA9IGZyYW1ld29yay5nZXRDaGlsZEJ5Q2xhc3ModGVtcGxhdGUsICdwc3dwX19zY3JvbGwtd3JhcCcpO1xuXHRcdHNlbGYuY29udGFpbmVyID0gZnJhbWV3b3JrLmdldENoaWxkQnlDbGFzcyhzZWxmLnNjcm9sbFdyYXAsICdwc3dwX19jb250YWluZXInKTtcblxuXHRcdF9jb250YWluZXJTdHlsZSA9IHNlbGYuY29udGFpbmVyLnN0eWxlOyAvLyBmb3IgZmFzdCBhY2Nlc3NcblxuXHRcdC8vIE9iamVjdHMgdGhhdCBob2xkIHNsaWRlcyAodGhlcmUgYXJlIG9ubHkgMyBpbiBET00pXG5cdFx0c2VsZi5pdGVtSG9sZGVycyA9IF9pdGVtSG9sZGVycyA9IFtcblx0XHRcdHtlbDpzZWxmLmNvbnRhaW5lci5jaGlsZHJlblswXSAsIHdyYXA6MCwgaW5kZXg6IC0xfSxcblx0XHRcdHtlbDpzZWxmLmNvbnRhaW5lci5jaGlsZHJlblsxXSAsIHdyYXA6MCwgaW5kZXg6IC0xfSxcblx0XHRcdHtlbDpzZWxmLmNvbnRhaW5lci5jaGlsZHJlblsyXSAsIHdyYXA6MCwgaW5kZXg6IC0xfVxuXHRcdF07XG5cblx0XHQvLyBoaWRlIG5lYXJieSBpdGVtIGhvbGRlcnMgdW50aWwgaW5pdGlhbCB6b29tIGFuaW1hdGlvbiBmaW5pc2hlcyAodG8gYXZvaWQgZXh0cmEgUGFpbnRzKVxuXHRcdF9pdGVtSG9sZGVyc1swXS5lbC5zdHlsZS5kaXNwbGF5ID0gX2l0ZW1Ib2xkZXJzWzJdLmVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cblx0XHRfc2V0dXBUcmFuc2Zvcm1zKCk7XG5cblx0XHQvLyBTZXR1cCBnbG9iYWwgZXZlbnRzXG5cdFx0X2dsb2JhbEV2ZW50SGFuZGxlcnMgPSB7XG5cdFx0XHRyZXNpemU6IHNlbGYudXBkYXRlU2l6ZSxcblxuXHRcdFx0Ly8gRml4ZXM6IGlPUyAxMC4zIHJlc2l6ZSBldmVudFxuXHRcdFx0Ly8gZG9lcyBub3QgdXBkYXRlIHNjcm9sbFdyYXAuY2xpZW50V2lkdGggaW5zdGFudGx5IGFmdGVyIHJlc2l6ZVxuXHRcdFx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL2RpbXNlbWVub3YvUGhvdG9Td2lwZS9pc3N1ZXMvMTMxNVxuXHRcdFx0b3JpZW50YXRpb25jaGFuZ2U6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRjbGVhclRpbWVvdXQoX29yaWVudGF0aW9uQ2hhbmdlVGltZW91dCk7XG5cdFx0XHRcdF9vcmllbnRhdGlvbkNoYW5nZVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlmKF92aWV3cG9ydFNpemUueCAhPT0gc2VsZi5zY3JvbGxXcmFwLmNsaWVudFdpZHRoKSB7XG5cdFx0XHRcdFx0XHRzZWxmLnVwZGF0ZVNpemUoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sIDUwMCk7XG5cdFx0XHR9LFxuXHRcdFx0c2Nyb2xsOiBfdXBkYXRlUGFnZVNjcm9sbE9mZnNldCxcblx0XHRcdGtleWRvd246IF9vbktleURvd24sXG5cdFx0XHRjbGljazogX29uR2xvYmFsQ2xpY2tcblx0XHR9O1xuXG5cdFx0Ly8gZGlzYWJsZSBzaG93L2hpZGUgZWZmZWN0cyBvbiBvbGQgYnJvd3NlcnMgdGhhdCBkb24ndCBzdXBwb3J0IENTUyBhbmltYXRpb25zIG9yIHRyYW5zZm9ybXMsIFxuXHRcdC8vIG9sZCBJT1MsIEFuZHJvaWQgYW5kIE9wZXJhIG1vYmlsZS4gQmxhY2tiZXJyeSBzZWVtcyB0byB3b3JrIGZpbmUsIGV2ZW4gb2xkZXIgbW9kZWxzLlxuXHRcdHZhciBvbGRQaG9uZSA9IF9mZWF0dXJlcy5pc09sZElPU1Bob25lIHx8IF9mZWF0dXJlcy5pc09sZEFuZHJvaWQgfHwgX2ZlYXR1cmVzLmlzTW9iaWxlT3BlcmE7XG5cdFx0aWYoIV9mZWF0dXJlcy5hbmltYXRpb25OYW1lIHx8ICFfZmVhdHVyZXMudHJhbnNmb3JtIHx8IG9sZFBob25lKSB7XG5cdFx0XHRfb3B0aW9ucy5zaG93QW5pbWF0aW9uRHVyYXRpb24gPSBfb3B0aW9ucy5oaWRlQW5pbWF0aW9uRHVyYXRpb24gPSAwO1xuXHRcdH1cblxuXHRcdC8vIGluaXQgbW9kdWxlc1xuXHRcdGZvcihpID0gMDsgaSA8IF9tb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRzZWxmWydpbml0JyArIF9tb2R1bGVzW2ldXSgpO1xuXHRcdH1cblx0XHRcblx0XHQvLyBpbml0XG5cdFx0aWYoVWlDbGFzcykge1xuXHRcdFx0dmFyIHVpID0gc2VsZi51aSA9IG5ldyBVaUNsYXNzKHNlbGYsIGZyYW1ld29yayk7XG5cdFx0XHR1aS5pbml0KCk7XG5cdFx0fVxuXG5cdFx0X3Nob3V0KCdmaXJzdFVwZGF0ZScpO1xuXHRcdF9jdXJyZW50SXRlbUluZGV4ID0gX2N1cnJlbnRJdGVtSW5kZXggfHwgX29wdGlvbnMuaW5kZXggfHwgMDtcblx0XHQvLyB2YWxpZGF0ZSBpbmRleFxuXHRcdGlmKCBpc05hTihfY3VycmVudEl0ZW1JbmRleCkgfHwgX2N1cnJlbnRJdGVtSW5kZXggPCAwIHx8IF9jdXJyZW50SXRlbUluZGV4ID49IF9nZXROdW1JdGVtcygpICkge1xuXHRcdFx0X2N1cnJlbnRJdGVtSW5kZXggPSAwO1xuXHRcdH1cblx0XHRzZWxmLmN1cnJJdGVtID0gX2dldEl0ZW1BdCggX2N1cnJlbnRJdGVtSW5kZXggKTtcblxuXHRcdFxuXHRcdGlmKF9mZWF0dXJlcy5pc09sZElPU1Bob25lIHx8IF9mZWF0dXJlcy5pc09sZEFuZHJvaWQpIHtcblx0XHRcdF9pc0ZpeGVkUG9zaXRpb24gPSBmYWxzZTtcblx0XHR9XG5cdFx0XG5cdFx0dGVtcGxhdGUuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuXHRcdGlmKF9vcHRpb25zLm1vZGFsKSB7XG5cdFx0XHRpZighX2lzRml4ZWRQb3NpdGlvbikge1xuXHRcdFx0XHR0ZW1wbGF0ZS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG5cdFx0XHRcdHRlbXBsYXRlLnN0eWxlLnRvcCA9IGZyYW1ld29yay5nZXRTY3JvbGxZKCkgKyAncHgnO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGVtcGxhdGUuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmKF9jdXJyZW50V2luZG93U2Nyb2xsWSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRfc2hvdXQoJ2luaXRpYWxMYXlvdXQnKTtcblx0XHRcdF9jdXJyZW50V2luZG93U2Nyb2xsWSA9IF9pbml0YWxXaW5kb3dTY3JvbGxZID0gZnJhbWV3b3JrLmdldFNjcm9sbFkoKTtcblx0XHR9XG5cdFx0XG5cdFx0Ly8gYWRkIGNsYXNzZXMgdG8gcm9vdCBlbGVtZW50IG9mIFBob3RvU3dpcGVcblx0XHR2YXIgcm9vdENsYXNzZXMgPSAncHN3cC0tb3BlbiAnO1xuXHRcdGlmKF9vcHRpb25zLm1haW5DbGFzcykge1xuXHRcdFx0cm9vdENsYXNzZXMgKz0gX29wdGlvbnMubWFpbkNsYXNzICsgJyAnO1xuXHRcdH1cblx0XHRpZihfb3B0aW9ucy5zaG93SGlkZU9wYWNpdHkpIHtcblx0XHRcdHJvb3RDbGFzc2VzICs9ICdwc3dwLS1hbmltYXRlX29wYWNpdHkgJztcblx0XHR9XG5cdFx0cm9vdENsYXNzZXMgKz0gX2xpa2VseVRvdWNoRGV2aWNlID8gJ3Bzd3AtLXRvdWNoJyA6ICdwc3dwLS1ub3RvdWNoJztcblx0XHRyb290Q2xhc3NlcyArPSBfZmVhdHVyZXMuYW5pbWF0aW9uTmFtZSA/ICcgcHN3cC0tY3NzX2FuaW1hdGlvbicgOiAnJztcblx0XHRyb290Q2xhc3NlcyArPSBfZmVhdHVyZXMuc3ZnID8gJyBwc3dwLS1zdmcnIDogJyc7XG5cdFx0ZnJhbWV3b3JrLmFkZENsYXNzKHRlbXBsYXRlLCByb290Q2xhc3Nlcyk7XG5cblx0XHRzZWxmLnVwZGF0ZVNpemUoKTtcblxuXHRcdC8vIGluaXRpYWwgdXBkYXRlXG5cdFx0X2NvbnRhaW5lclNoaWZ0SW5kZXggPSAtMTtcblx0XHRfaW5kZXhEaWZmID0gbnVsbDtcblx0XHRmb3IoaSA9IDA7IGkgPCBOVU1fSE9MREVSUzsgaSsrKSB7XG5cdFx0XHRfc2V0VHJhbnNsYXRlWCggKGkrX2NvbnRhaW5lclNoaWZ0SW5kZXgpICogX3NsaWRlU2l6ZS54LCBfaXRlbUhvbGRlcnNbaV0uZWwuc3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKCFfb2xkSUUpIHtcblx0XHRcdGZyYW1ld29yay5iaW5kKHNlbGYuc2Nyb2xsV3JhcCwgX2Rvd25FdmVudHMsIHNlbGYpOyAvLyBubyBkcmFnZ2luZyBmb3Igb2xkIElFXG5cdFx0fVx0XG5cblx0XHRfbGlzdGVuKCdpbml0aWFsWm9vbUluRW5kJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRzZWxmLnNldENvbnRlbnQoX2l0ZW1Ib2xkZXJzWzBdLCBfY3VycmVudEl0ZW1JbmRleC0xKTtcblx0XHRcdHNlbGYuc2V0Q29udGVudChfaXRlbUhvbGRlcnNbMl0sIF9jdXJyZW50SXRlbUluZGV4KzEpO1xuXG5cdFx0XHRfaXRlbUhvbGRlcnNbMF0uZWwuc3R5bGUuZGlzcGxheSA9IF9pdGVtSG9sZGVyc1syXS5lbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuXHRcdFx0aWYoX29wdGlvbnMuZm9jdXMpIHtcblx0XHRcdFx0Ly8gZm9jdXMgY2F1c2VzIGxheW91dCwgXG5cdFx0XHRcdC8vIHdoaWNoIGNhdXNlcyBsYWcgZHVyaW5nIHRoZSBhbmltYXRpb24sIFxuXHRcdFx0XHQvLyB0aGF0J3Mgd2h5IHdlIGRlbGF5IGl0IHVudGlsbCB0aGUgaW5pdGlhbCB6b29tIHRyYW5zaXRpb24gZW5kc1xuXHRcdFx0XHR0ZW1wbGF0ZS5mb2N1cygpO1xuXHRcdFx0fVxuXHRcdFx0IFxuXG5cdFx0XHRfYmluZEV2ZW50cygpO1xuXHRcdH0pO1xuXG5cdFx0Ly8gc2V0IGNvbnRlbnQgZm9yIGNlbnRlciBzbGlkZSAoZmlyc3QgdGltZSlcblx0XHRzZWxmLnNldENvbnRlbnQoX2l0ZW1Ib2xkZXJzWzFdLCBfY3VycmVudEl0ZW1JbmRleCk7XG5cdFx0XG5cdFx0c2VsZi51cGRhdGVDdXJySXRlbSgpO1xuXG5cdFx0X3Nob3V0KCdhZnRlckluaXQnKTtcblxuXHRcdGlmKCFfaXNGaXhlZFBvc2l0aW9uKSB7XG5cblx0XHRcdC8vIE9uIGFsbCB2ZXJzaW9ucyBvZiBpT1MgbG93ZXIgdGhhbiA4LjAsIHdlIGNoZWNrIHNpemUgb2Ygdmlld3BvcnQgZXZlcnkgc2Vjb25kLlxuXHRcdFx0Ly8gXG5cdFx0XHQvLyBUaGlzIGlzIGRvbmUgdG8gZGV0ZWN0IHdoZW4gU2FmYXJpIHRvcCAmIGJvdHRvbSBiYXJzIGFwcGVhciwgXG5cdFx0XHQvLyBhcyB0aGlzIGFjdGlvbiBkb2Vzbid0IHRyaWdnZXIgYW55IGV2ZW50cyAobGlrZSByZXNpemUpLiBcblx0XHRcdC8vIFxuXHRcdFx0Ly8gT24gaU9TOCB0aGV5IGZpeGVkIHRoaXMuXG5cdFx0XHQvLyBcblx0XHRcdC8vIDEwIE5vdiAyMDE0OiBpT1MgNyB1c2FnZSB+NDAlLiBpT1MgOCB1c2FnZSA1NiUuXG5cdFx0XHRcblx0XHRcdF91cGRhdGVTaXplSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYoIV9udW1BbmltYXRpb25zICYmICFfaXNEcmFnZ2luZyAmJiAhX2lzWm9vbWluZyAmJiAoX2N1cnJab29tTGV2ZWwgPT09IHNlbGYuY3Vyckl0ZW0uaW5pdGlhbFpvb21MZXZlbCkgICkge1xuXHRcdFx0XHRcdHNlbGYudXBkYXRlU2l6ZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCAxMDAwKTtcblx0XHR9XG5cblx0XHRmcmFtZXdvcmsuYWRkQ2xhc3ModGVtcGxhdGUsICdwc3dwLS12aXNpYmxlJyk7XG5cdH0sXG5cblx0Ly8gQ2xvc2UgdGhlIGdhbGxlcnksIHRoZW4gZGVzdHJveSBpdFxuXHRjbG9zZTogZnVuY3Rpb24oKSB7XG5cdFx0aWYoIV9pc09wZW4pIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRfaXNPcGVuID0gZmFsc2U7XG5cdFx0X2lzRGVzdHJveWluZyA9IHRydWU7XG5cdFx0X3Nob3V0KCdjbG9zZScpO1xuXHRcdF91bmJpbmRFdmVudHMoKTtcblxuXHRcdF9zaG93T3JIaWRlKHNlbGYuY3Vyckl0ZW0sIG51bGwsIHRydWUsIHNlbGYuZGVzdHJveSk7XG5cdH0sXG5cblx0Ly8gZGVzdHJveXMgdGhlIGdhbGxlcnkgKHVuYmluZHMgZXZlbnRzLCBjbGVhbnMgdXAgaW50ZXJ2YWxzIGFuZCB0aW1lb3V0cyB0byBhdm9pZCBtZW1vcnkgbGVha3MpXG5cdGRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xuXHRcdF9zaG91dCgnZGVzdHJveScpO1xuXG5cdFx0aWYoX3Nob3dPckhpZGVUaW1lb3V0KSB7XG5cdFx0XHRjbGVhclRpbWVvdXQoX3Nob3dPckhpZGVUaW1lb3V0KTtcblx0XHR9XG5cdFx0XG5cdFx0dGVtcGxhdGUuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG5cdFx0dGVtcGxhdGUuY2xhc3NOYW1lID0gX2luaXRhbENsYXNzTmFtZTtcblxuXHRcdGlmKF91cGRhdGVTaXplSW50ZXJ2YWwpIHtcblx0XHRcdGNsZWFySW50ZXJ2YWwoX3VwZGF0ZVNpemVJbnRlcnZhbCk7XG5cdFx0fVxuXG5cdFx0ZnJhbWV3b3JrLnVuYmluZChzZWxmLnNjcm9sbFdyYXAsIF9kb3duRXZlbnRzLCBzZWxmKTtcblxuXHRcdC8vIHdlIHVuYmluZCBzY3JvbGwgZXZlbnQgYXQgdGhlIGVuZCwgYXMgY2xvc2luZyBhbmltYXRpb24gbWF5IGRlcGVuZCBvbiBpdFxuXHRcdGZyYW1ld29yay51bmJpbmQod2luZG93LCAnc2Nyb2xsJywgc2VsZik7XG5cblx0XHRfc3RvcERyYWdVcGRhdGVMb29wKCk7XG5cblx0XHRfc3RvcEFsbEFuaW1hdGlvbnMoKTtcblxuXHRcdF9saXN0ZW5lcnMgPSBudWxsO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBQYW4gaW1hZ2UgdG8gcG9zaXRpb25cblx0ICogQHBhcmFtIHtOdW1iZXJ9IHggICAgIFxuXHQgKiBAcGFyYW0ge051bWJlcn0geSAgICAgXG5cdCAqIEBwYXJhbSB7Qm9vbGVhbn0gZm9yY2UgV2lsbCBpZ25vcmUgYm91bmRzIGlmIHNldCB0byB0cnVlLlxuXHQgKi9cblx0cGFuVG86IGZ1bmN0aW9uKHgseSxmb3JjZSkge1xuXHRcdGlmKCFmb3JjZSkge1xuXHRcdFx0aWYoeCA+IF9jdXJyUGFuQm91bmRzLm1pbi54KSB7XG5cdFx0XHRcdHggPSBfY3VyclBhbkJvdW5kcy5taW4ueDtcblx0XHRcdH0gZWxzZSBpZih4IDwgX2N1cnJQYW5Cb3VuZHMubWF4LngpIHtcblx0XHRcdFx0eCA9IF9jdXJyUGFuQm91bmRzLm1heC54O1xuXHRcdFx0fVxuXG5cdFx0XHRpZih5ID4gX2N1cnJQYW5Cb3VuZHMubWluLnkpIHtcblx0XHRcdFx0eSA9IF9jdXJyUGFuQm91bmRzLm1pbi55O1xuXHRcdFx0fSBlbHNlIGlmKHkgPCBfY3VyclBhbkJvdW5kcy5tYXgueSkge1xuXHRcdFx0XHR5ID0gX2N1cnJQYW5Cb3VuZHMubWF4Lnk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdFxuXHRcdF9wYW5PZmZzZXQueCA9IHg7XG5cdFx0X3Bhbk9mZnNldC55ID0geTtcblx0XHRfYXBwbHlDdXJyZW50Wm9vbVBhbigpO1xuXHR9LFxuXHRcblx0aGFuZGxlRXZlbnQ6IGZ1bmN0aW9uIChlKSB7XG5cdFx0ZSA9IGUgfHwgd2luZG93LmV2ZW50O1xuXHRcdGlmKF9nbG9iYWxFdmVudEhhbmRsZXJzW2UudHlwZV0pIHtcblx0XHRcdF9nbG9iYWxFdmVudEhhbmRsZXJzW2UudHlwZV0oZSk7XG5cdFx0fVxuXHR9LFxuXG5cblx0Z29UbzogZnVuY3Rpb24oaW5kZXgpIHtcblxuXHRcdGluZGV4ID0gX2dldExvb3BlZElkKGluZGV4KTtcblxuXHRcdHZhciBkaWZmID0gaW5kZXggLSBfY3VycmVudEl0ZW1JbmRleDtcblx0XHRfaW5kZXhEaWZmID0gZGlmZjtcblxuXHRcdF9jdXJyZW50SXRlbUluZGV4ID0gaW5kZXg7XG5cdFx0c2VsZi5jdXJySXRlbSA9IF9nZXRJdGVtQXQoIF9jdXJyZW50SXRlbUluZGV4ICk7XG5cdFx0X2N1cnJQb3NpdGlvbkluZGV4IC09IGRpZmY7XG5cdFx0XG5cdFx0X21vdmVNYWluU2Nyb2xsKF9zbGlkZVNpemUueCAqIF9jdXJyUG9zaXRpb25JbmRleCk7XG5cdFx0XG5cblx0XHRfc3RvcEFsbEFuaW1hdGlvbnMoKTtcblx0XHRfbWFpblNjcm9sbEFuaW1hdGluZyA9IGZhbHNlO1xuXG5cdFx0c2VsZi51cGRhdGVDdXJySXRlbSgpO1xuXHR9LFxuXHRuZXh0OiBmdW5jdGlvbigpIHtcblx0XHRzZWxmLmdvVG8oIF9jdXJyZW50SXRlbUluZGV4ICsgMSk7XG5cdH0sXG5cdHByZXY6IGZ1bmN0aW9uKCkge1xuXHRcdHNlbGYuZ29UbyggX2N1cnJlbnRJdGVtSW5kZXggLSAxKTtcblx0fSxcblxuXHQvLyB1cGRhdGUgY3VycmVudCB6b29tL3BhbiBvYmplY3RzXG5cdHVwZGF0ZUN1cnJab29tSXRlbTogZnVuY3Rpb24oZW11bGF0ZVNldENvbnRlbnQpIHtcblx0XHRpZihlbXVsYXRlU2V0Q29udGVudCkge1xuXHRcdFx0X3Nob3V0KCdiZWZvcmVDaGFuZ2UnLCAwKTtcblx0XHR9XG5cblx0XHQvLyBpdGVtSG9sZGVyWzFdIGlzIG1pZGRsZSAoY3VycmVudCkgaXRlbVxuXHRcdGlmKF9pdGVtSG9sZGVyc1sxXS5lbC5jaGlsZHJlbi5sZW5ndGgpIHtcblx0XHRcdHZhciB6b29tRWxlbWVudCA9IF9pdGVtSG9sZGVyc1sxXS5lbC5jaGlsZHJlblswXTtcblx0XHRcdGlmKCBmcmFtZXdvcmsuaGFzQ2xhc3Moem9vbUVsZW1lbnQsICdwc3dwX196b29tLXdyYXAnKSApIHtcblx0XHRcdFx0X2N1cnJab29tRWxlbWVudFN0eWxlID0gem9vbUVsZW1lbnQuc3R5bGU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRfY3Vyclpvb21FbGVtZW50U3R5bGUgPSBudWxsO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRfY3Vyclpvb21FbGVtZW50U3R5bGUgPSBudWxsO1xuXHRcdH1cblx0XHRcblx0XHRfY3VyclBhbkJvdW5kcyA9IHNlbGYuY3Vyckl0ZW0uYm91bmRzO1x0XG5cdFx0X3N0YXJ0Wm9vbUxldmVsID0gX2N1cnJab29tTGV2ZWwgPSBzZWxmLmN1cnJJdGVtLmluaXRpYWxab29tTGV2ZWw7XG5cblx0XHRfcGFuT2Zmc2V0LnggPSBfY3VyclBhbkJvdW5kcy5jZW50ZXIueDtcblx0XHRfcGFuT2Zmc2V0LnkgPSBfY3VyclBhbkJvdW5kcy5jZW50ZXIueTtcblxuXHRcdGlmKGVtdWxhdGVTZXRDb250ZW50KSB7XG5cdFx0XHRfc2hvdXQoJ2FmdGVyQ2hhbmdlJyk7XG5cdFx0fVxuXHR9LFxuXG5cblx0aW52YWxpZGF0ZUN1cnJJdGVtczogZnVuY3Rpb24oKSB7XG5cdFx0X2l0ZW1zTmVlZFVwZGF0ZSA9IHRydWU7XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IE5VTV9IT0xERVJTOyBpKyspIHtcblx0XHRcdGlmKCBfaXRlbUhvbGRlcnNbaV0uaXRlbSApIHtcblx0XHRcdFx0X2l0ZW1Ib2xkZXJzW2ldLml0ZW0ubmVlZHNVcGRhdGUgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblxuXHR1cGRhdGVDdXJySXRlbTogZnVuY3Rpb24oYmVmb3JlQW5pbWF0aW9uKSB7XG5cblx0XHRpZihfaW5kZXhEaWZmID09PSAwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dmFyIGRpZmZBYnMgPSBNYXRoLmFicyhfaW5kZXhEaWZmKSxcblx0XHRcdHRlbXBIb2xkZXI7XG5cblx0XHRpZihiZWZvcmVBbmltYXRpb24gJiYgZGlmZkFicyA8IDIpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblxuXHRcdHNlbGYuY3Vyckl0ZW0gPSBfZ2V0SXRlbUF0KCBfY3VycmVudEl0ZW1JbmRleCApO1xuXHRcdF9yZW5kZXJNYXhSZXNvbHV0aW9uID0gZmFsc2U7XG5cdFx0XG5cdFx0X3Nob3V0KCdiZWZvcmVDaGFuZ2UnLCBfaW5kZXhEaWZmKTtcblxuXHRcdGlmKGRpZmZBYnMgPj0gTlVNX0hPTERFUlMpIHtcblx0XHRcdF9jb250YWluZXJTaGlmdEluZGV4ICs9IF9pbmRleERpZmYgKyAoX2luZGV4RGlmZiA+IDAgPyAtTlVNX0hPTERFUlMgOiBOVU1fSE9MREVSUyk7XG5cdFx0XHRkaWZmQWJzID0gTlVNX0hPTERFUlM7XG5cdFx0fVxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkaWZmQWJzOyBpKyspIHtcblx0XHRcdGlmKF9pbmRleERpZmYgPiAwKSB7XG5cdFx0XHRcdHRlbXBIb2xkZXIgPSBfaXRlbUhvbGRlcnMuc2hpZnQoKTtcblx0XHRcdFx0X2l0ZW1Ib2xkZXJzW05VTV9IT0xERVJTLTFdID0gdGVtcEhvbGRlcjsgLy8gbW92ZSBmaXJzdCB0byBsYXN0XG5cblx0XHRcdFx0X2NvbnRhaW5lclNoaWZ0SW5kZXgrKztcblx0XHRcdFx0X3NldFRyYW5zbGF0ZVgoIChfY29udGFpbmVyU2hpZnRJbmRleCsyKSAqIF9zbGlkZVNpemUueCwgdGVtcEhvbGRlci5lbC5zdHlsZSk7XG5cdFx0XHRcdHNlbGYuc2V0Q29udGVudCh0ZW1wSG9sZGVyLCBfY3VycmVudEl0ZW1JbmRleCAtIGRpZmZBYnMgKyBpICsgMSArIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGVtcEhvbGRlciA9IF9pdGVtSG9sZGVycy5wb3AoKTtcblx0XHRcdFx0X2l0ZW1Ib2xkZXJzLnVuc2hpZnQoIHRlbXBIb2xkZXIgKTsgLy8gbW92ZSBsYXN0IHRvIGZpcnN0XG5cblx0XHRcdFx0X2NvbnRhaW5lclNoaWZ0SW5kZXgtLTtcblx0XHRcdFx0X3NldFRyYW5zbGF0ZVgoIF9jb250YWluZXJTaGlmdEluZGV4ICogX3NsaWRlU2l6ZS54LCB0ZW1wSG9sZGVyLmVsLnN0eWxlKTtcblx0XHRcdFx0c2VsZi5zZXRDb250ZW50KHRlbXBIb2xkZXIsIF9jdXJyZW50SXRlbUluZGV4ICsgZGlmZkFicyAtIGkgLSAxIC0gMSk7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHR9XG5cblx0XHQvLyByZXNldCB6b29tL3BhbiBvbiBwcmV2aW91cyBpdGVtXG5cdFx0aWYoX2N1cnJab29tRWxlbWVudFN0eWxlICYmIE1hdGguYWJzKF9pbmRleERpZmYpID09PSAxKSB7XG5cblx0XHRcdHZhciBwcmV2SXRlbSA9IF9nZXRJdGVtQXQoX3ByZXZJdGVtSW5kZXgpO1xuXHRcdFx0aWYocHJldkl0ZW0uaW5pdGlhbFpvb21MZXZlbCAhPT0gX2N1cnJab29tTGV2ZWwpIHtcblx0XHRcdFx0X2NhbGN1bGF0ZUl0ZW1TaXplKHByZXZJdGVtICwgX3ZpZXdwb3J0U2l6ZSApO1xuXHRcdFx0XHRfc2V0SW1hZ2VTaXplKHByZXZJdGVtKTtcblx0XHRcdFx0X2FwcGx5Wm9vbVBhblRvSXRlbSggcHJldkl0ZW0gKTsgXHRcdFx0XHRcblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdC8vIHJlc2V0IGRpZmYgYWZ0ZXIgdXBkYXRlXG5cdFx0X2luZGV4RGlmZiA9IDA7XG5cblx0XHRzZWxmLnVwZGF0ZUN1cnJab29tSXRlbSgpO1xuXG5cdFx0X3ByZXZJdGVtSW5kZXggPSBfY3VycmVudEl0ZW1JbmRleDtcblxuXHRcdF9zaG91dCgnYWZ0ZXJDaGFuZ2UnKTtcblx0XHRcblx0fSxcblxuXG5cblx0dXBkYXRlU2l6ZTogZnVuY3Rpb24oZm9yY2UpIHtcblx0XHRcblx0XHRpZighX2lzRml4ZWRQb3NpdGlvbiAmJiBfb3B0aW9ucy5tb2RhbCkge1xuXHRcdFx0dmFyIHdpbmRvd1Njcm9sbFkgPSBmcmFtZXdvcmsuZ2V0U2Nyb2xsWSgpO1xuXHRcdFx0aWYoX2N1cnJlbnRXaW5kb3dTY3JvbGxZICE9PSB3aW5kb3dTY3JvbGxZKSB7XG5cdFx0XHRcdHRlbXBsYXRlLnN0eWxlLnRvcCA9IHdpbmRvd1Njcm9sbFkgKyAncHgnO1xuXHRcdFx0XHRfY3VycmVudFdpbmRvd1Njcm9sbFkgPSB3aW5kb3dTY3JvbGxZO1xuXHRcdFx0fVxuXHRcdFx0aWYoIWZvcmNlICYmIF93aW5kb3dWaXNpYmxlU2l6ZS54ID09PSB3aW5kb3cuaW5uZXJXaWR0aCAmJiBfd2luZG93VmlzaWJsZVNpemUueSA9PT0gd2luZG93LmlubmVySGVpZ2h0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdF93aW5kb3dWaXNpYmxlU2l6ZS54ID0gd2luZG93LmlubmVyV2lkdGg7XG5cdFx0XHRfd2luZG93VmlzaWJsZVNpemUueSA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuXHRcdFx0Ly90ZW1wbGF0ZS5zdHlsZS53aWR0aCA9IF93aW5kb3dWaXNpYmxlU2l6ZS54ICsgJ3B4Jztcblx0XHRcdHRlbXBsYXRlLnN0eWxlLmhlaWdodCA9IF93aW5kb3dWaXNpYmxlU2l6ZS55ICsgJ3B4Jztcblx0XHR9XG5cblxuXG5cdFx0X3ZpZXdwb3J0U2l6ZS54ID0gc2VsZi5zY3JvbGxXcmFwLmNsaWVudFdpZHRoO1xuXHRcdF92aWV3cG9ydFNpemUueSA9IHNlbGYuc2Nyb2xsV3JhcC5jbGllbnRIZWlnaHQ7XG5cblx0XHRfdXBkYXRlUGFnZVNjcm9sbE9mZnNldCgpO1xuXG5cdFx0X3NsaWRlU2l6ZS54ID0gX3ZpZXdwb3J0U2l6ZS54ICsgTWF0aC5yb3VuZChfdmlld3BvcnRTaXplLnggKiBfb3B0aW9ucy5zcGFjaW5nKTtcblx0XHRfc2xpZGVTaXplLnkgPSBfdmlld3BvcnRTaXplLnk7XG5cblx0XHRfbW92ZU1haW5TY3JvbGwoX3NsaWRlU2l6ZS54ICogX2N1cnJQb3NpdGlvbkluZGV4KTtcblxuXHRcdF9zaG91dCgnYmVmb3JlUmVzaXplJyk7IC8vIGV2ZW4gbWF5IGJlIHVzZWQgZm9yIGV4YW1wbGUgdG8gc3dpdGNoIGltYWdlIHNvdXJjZXNcblxuXG5cdFx0Ly8gZG9uJ3QgcmUtY2FsY3VsYXRlIHNpemUgb24gaW5pdGFsIHNpemUgdXBkYXRlXG5cdFx0aWYoX2NvbnRhaW5lclNoaWZ0SW5kZXggIT09IHVuZGVmaW5lZCkge1xuXG5cdFx0XHR2YXIgaG9sZGVyLFxuXHRcdFx0XHRpdGVtLFxuXHRcdFx0XHRoSW5kZXg7XG5cblx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBOVU1fSE9MREVSUzsgaSsrKSB7XG5cdFx0XHRcdGhvbGRlciA9IF9pdGVtSG9sZGVyc1tpXTtcblx0XHRcdFx0X3NldFRyYW5zbGF0ZVgoIChpK19jb250YWluZXJTaGlmdEluZGV4KSAqIF9zbGlkZVNpemUueCwgaG9sZGVyLmVsLnN0eWxlKTtcblxuXHRcdFx0XHRoSW5kZXggPSBfY3VycmVudEl0ZW1JbmRleCtpLTE7XG5cblx0XHRcdFx0aWYoX29wdGlvbnMubG9vcCAmJiBfZ2V0TnVtSXRlbXMoKSA+IDIpIHtcblx0XHRcdFx0XHRoSW5kZXggPSBfZ2V0TG9vcGVkSWQoaEluZGV4KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIHVwZGF0ZSB6b29tIGxldmVsIG9uIGl0ZW1zIGFuZCByZWZyZXNoIHNvdXJjZSAoaWYgbmVlZHNVcGRhdGUpXG5cdFx0XHRcdGl0ZW0gPSBfZ2V0SXRlbUF0KCBoSW5kZXggKTtcblxuXHRcdFx0XHQvLyByZS1yZW5kZXIgZ2FsbGVyeSBpdGVtIGlmIGBuZWVkc1VwZGF0ZWAsXG5cdFx0XHRcdC8vIG9yIGRvZXNuJ3QgaGF2ZSBgYm91bmRzYCAoZW50aXJlbHkgbmV3IHNsaWRlIG9iamVjdClcblx0XHRcdFx0aWYoIGl0ZW0gJiYgKF9pdGVtc05lZWRVcGRhdGUgfHwgaXRlbS5uZWVkc1VwZGF0ZSB8fCAhaXRlbS5ib3VuZHMpICkge1xuXG5cdFx0XHRcdFx0c2VsZi5jbGVhblNsaWRlKCBpdGVtICk7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0c2VsZi5zZXRDb250ZW50KCBob2xkZXIsIGhJbmRleCApO1xuXG5cdFx0XHRcdFx0Ly8gaWYgXCJjZW50ZXJcIiBzbGlkZVxuXHRcdFx0XHRcdGlmKGkgPT09IDEpIHtcblx0XHRcdFx0XHRcdHNlbGYuY3Vyckl0ZW0gPSBpdGVtO1xuXHRcdFx0XHRcdFx0c2VsZi51cGRhdGVDdXJyWm9vbUl0ZW0odHJ1ZSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aXRlbS5uZWVkc1VwZGF0ZSA9IGZhbHNlO1xuXG5cdFx0XHRcdH0gZWxzZSBpZihob2xkZXIuaW5kZXggPT09IC0xICYmIGhJbmRleCA+PSAwKSB7XG5cdFx0XHRcdFx0Ly8gYWRkIGNvbnRlbnQgZmlyc3QgdGltZVxuXHRcdFx0XHRcdHNlbGYuc2V0Q29udGVudCggaG9sZGVyLCBoSW5kZXggKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZihpdGVtICYmIGl0ZW0uY29udGFpbmVyKSB7XG5cdFx0XHRcdFx0X2NhbGN1bGF0ZUl0ZW1TaXplKGl0ZW0sIF92aWV3cG9ydFNpemUpO1xuXHRcdFx0XHRcdF9zZXRJbWFnZVNpemUoaXRlbSk7XG5cdFx0XHRcdFx0X2FwcGx5Wm9vbVBhblRvSXRlbSggaXRlbSApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0fVxuXHRcdFx0X2l0ZW1zTmVlZFVwZGF0ZSA9IGZhbHNlO1xuXHRcdH1cdFxuXG5cdFx0X3N0YXJ0Wm9vbUxldmVsID0gX2N1cnJab29tTGV2ZWwgPSBzZWxmLmN1cnJJdGVtLmluaXRpYWxab29tTGV2ZWw7XG5cdFx0X2N1cnJQYW5Cb3VuZHMgPSBzZWxmLmN1cnJJdGVtLmJvdW5kcztcblxuXHRcdGlmKF9jdXJyUGFuQm91bmRzKSB7XG5cdFx0XHRfcGFuT2Zmc2V0LnggPSBfY3VyclBhbkJvdW5kcy5jZW50ZXIueDtcblx0XHRcdF9wYW5PZmZzZXQueSA9IF9jdXJyUGFuQm91bmRzLmNlbnRlci55O1xuXHRcdFx0X2FwcGx5Q3VycmVudFpvb21QYW4oIHRydWUgKTtcblx0XHR9XG5cdFx0XG5cdFx0X3Nob3V0KCdyZXNpemUnKTtcblx0fSxcblx0XG5cdC8vIFpvb20gY3VycmVudCBpdGVtIHRvXG5cdHpvb21UbzogZnVuY3Rpb24oZGVzdFpvb21MZXZlbCwgY2VudGVyUG9pbnQsIHNwZWVkLCBlYXNpbmdGbiwgdXBkYXRlRm4pIHtcblx0XHQvKlxuXHRcdFx0aWYoZGVzdFpvb21MZXZlbCA9PT0gJ2ZpdCcpIHtcblx0XHRcdFx0ZGVzdFpvb21MZXZlbCA9IHNlbGYuY3Vyckl0ZW0uZml0UmF0aW87XG5cdFx0XHR9IGVsc2UgaWYoZGVzdFpvb21MZXZlbCA9PT0gJ2ZpbGwnKSB7XG5cdFx0XHRcdGRlc3Rab29tTGV2ZWwgPSBzZWxmLmN1cnJJdGVtLmZpbGxSYXRpbztcblx0XHRcdH1cblx0XHQqL1xuXG5cdFx0aWYoY2VudGVyUG9pbnQpIHtcblx0XHRcdF9zdGFydFpvb21MZXZlbCA9IF9jdXJyWm9vbUxldmVsO1xuXHRcdFx0X21pZFpvb21Qb2ludC54ID0gTWF0aC5hYnMoY2VudGVyUG9pbnQueCkgLSBfcGFuT2Zmc2V0LnggO1xuXHRcdFx0X21pZFpvb21Qb2ludC55ID0gTWF0aC5hYnMoY2VudGVyUG9pbnQueSkgLSBfcGFuT2Zmc2V0LnkgO1xuXHRcdFx0X2VxdWFsaXplUG9pbnRzKF9zdGFydFBhbk9mZnNldCwgX3Bhbk9mZnNldCk7XG5cdFx0fVxuXG5cdFx0dmFyIGRlc3RQYW5Cb3VuZHMgPSBfY2FsY3VsYXRlUGFuQm91bmRzKGRlc3Rab29tTGV2ZWwsIGZhbHNlKSxcblx0XHRcdGRlc3RQYW5PZmZzZXQgPSB7fTtcblxuXHRcdF9tb2RpZnlEZXN0UGFuT2Zmc2V0KCd4JywgZGVzdFBhbkJvdW5kcywgZGVzdFBhbk9mZnNldCwgZGVzdFpvb21MZXZlbCk7XG5cdFx0X21vZGlmeURlc3RQYW5PZmZzZXQoJ3knLCBkZXN0UGFuQm91bmRzLCBkZXN0UGFuT2Zmc2V0LCBkZXN0Wm9vbUxldmVsKTtcblxuXHRcdHZhciBpbml0aWFsWm9vbUxldmVsID0gX2N1cnJab29tTGV2ZWw7XG5cdFx0dmFyIGluaXRpYWxQYW5PZmZzZXQgPSB7XG5cdFx0XHR4OiBfcGFuT2Zmc2V0LngsXG5cdFx0XHR5OiBfcGFuT2Zmc2V0Lnlcblx0XHR9O1xuXG5cdFx0X3JvdW5kUG9pbnQoZGVzdFBhbk9mZnNldCk7XG5cblx0XHR2YXIgb25VcGRhdGUgPSBmdW5jdGlvbihub3cpIHtcblx0XHRcdGlmKG5vdyA9PT0gMSkge1xuXHRcdFx0XHRfY3Vyclpvb21MZXZlbCA9IGRlc3Rab29tTGV2ZWw7XG5cdFx0XHRcdF9wYW5PZmZzZXQueCA9IGRlc3RQYW5PZmZzZXQueDtcblx0XHRcdFx0X3Bhbk9mZnNldC55ID0gZGVzdFBhbk9mZnNldC55O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0X2N1cnJab29tTGV2ZWwgPSAoZGVzdFpvb21MZXZlbCAtIGluaXRpYWxab29tTGV2ZWwpICogbm93ICsgaW5pdGlhbFpvb21MZXZlbDtcblx0XHRcdFx0X3Bhbk9mZnNldC54ID0gKGRlc3RQYW5PZmZzZXQueCAtIGluaXRpYWxQYW5PZmZzZXQueCkgKiBub3cgKyBpbml0aWFsUGFuT2Zmc2V0Lng7XG5cdFx0XHRcdF9wYW5PZmZzZXQueSA9IChkZXN0UGFuT2Zmc2V0LnkgLSBpbml0aWFsUGFuT2Zmc2V0LnkpICogbm93ICsgaW5pdGlhbFBhbk9mZnNldC55O1xuXHRcdFx0fVxuXG5cdFx0XHRpZih1cGRhdGVGbikge1xuXHRcdFx0XHR1cGRhdGVGbihub3cpO1xuXHRcdFx0fVxuXG5cdFx0XHRfYXBwbHlDdXJyZW50Wm9vbVBhbiggbm93ID09PSAxICk7XG5cdFx0fTtcblxuXHRcdGlmKHNwZWVkKSB7XG5cdFx0XHRfYW5pbWF0ZVByb3AoJ2N1c3RvbVpvb21UbycsIDAsIDEsIHNwZWVkLCBlYXNpbmdGbiB8fCBmcmFtZXdvcmsuZWFzaW5nLnNpbmUuaW5PdXQsIG9uVXBkYXRlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0b25VcGRhdGUoMSk7XG5cdFx0fVxuXHR9XG5cblxufTtcblxuXG4vKj4+Y29yZSovXG5cbi8qPj5nZXN0dXJlcyovXG4vKipcbiAqIE1vdXNlL3RvdWNoL3BvaW50ZXIgZXZlbnQgaGFuZGxlcnMuXG4gKiBcbiAqIHNlcGFyYXRlZCBmcm9tIEBjb3JlLmpzIGZvciByZWFkYWJpbGl0eVxuICovXG5cbnZhciBNSU5fU1dJUEVfRElTVEFOQ0UgPSAzMCxcblx0RElSRUNUSU9OX0NIRUNLX09GRlNFVCA9IDEwOyAvLyBhbW91bnQgb2YgcGl4ZWxzIHRvIGRyYWcgdG8gZGV0ZXJtaW5lIGRpcmVjdGlvbiBvZiBzd2lwZVxuXG52YXIgX2dlc3R1cmVTdGFydFRpbWUsXG5cdF9nZXN0dXJlQ2hlY2tTcGVlZFRpbWUsXG5cblx0Ly8gcG9vbCBvZiBvYmplY3RzIHRoYXQgYXJlIHVzZWQgZHVyaW5nIGRyYWdnaW5nIG9mIHpvb21pbmdcblx0cCA9IHt9LCAvLyBmaXJzdCBwb2ludFxuXHRwMiA9IHt9LCAvLyBzZWNvbmQgcG9pbnQgKGZvciB6b29tIGdlc3R1cmUpXG5cdGRlbHRhID0ge30sXG5cdF9jdXJyUG9pbnQgPSB7fSxcblx0X3N0YXJ0UG9pbnQgPSB7fSxcblx0X2N1cnJQb2ludGVycyA9IFtdLFxuXHRfc3RhcnRNYWluU2Nyb2xsUG9zID0ge30sXG5cdF9yZWxlYXNlQW5pbURhdGEsXG5cdF9wb3NQb2ludHMgPSBbXSwgLy8gYXJyYXkgb2YgcG9pbnRzIGR1cmluZyBkcmFnZ2luZywgdXNlZCB0byBkZXRlcm1pbmUgdHlwZSBvZiBnZXN0dXJlXG5cdF90ZW1wUG9pbnQgPSB7fSxcblxuXHRfaXNab29taW5nSW4sXG5cdF92ZXJ0aWNhbERyYWdJbml0aWF0ZWQsXG5cdF9vbGRBbmRyb2lkVG91Y2hFbmRUaW1lb3V0LFxuXHRfY3Vyclpvb21lZEl0ZW1JbmRleCA9IDAsXG5cdF9jZW50ZXJQb2ludCA9IF9nZXRFbXB0eVBvaW50KCksXG5cdF9sYXN0UmVsZWFzZVRpbWUgPSAwLFxuXHRfaXNEcmFnZ2luZywgLy8gYXQgbGVhc3Qgb25lIHBvaW50ZXIgaXMgZG93blxuXHRfaXNNdWx0aXRvdWNoLCAvLyBhdCBsZWFzdCB0d28gX3BvaW50ZXJzIGFyZSBkb3duXG5cdF96b29tU3RhcnRlZCwgLy8gem9vbSBsZXZlbCBjaGFuZ2VkIGR1cmluZyB6b29tIGdlc3R1cmVcblx0X21vdmVkLFxuXHRfZHJhZ0FuaW1GcmFtZSxcblx0X21haW5TY3JvbGxTaGlmdGVkLFxuXHRfY3VycmVudFBvaW50cywgLy8gYXJyYXkgb2YgY3VycmVudCB0b3VjaCBwb2ludHNcblx0X2lzWm9vbWluZyxcblx0X2N1cnJQb2ludHNEaXN0YW5jZSxcblx0X3N0YXJ0UG9pbnRzRGlzdGFuY2UsXG5cdF9jdXJyUGFuQm91bmRzLFxuXHRfbWFpblNjcm9sbFBvcyA9IF9nZXRFbXB0eVBvaW50KCksXG5cdF9jdXJyWm9vbUVsZW1lbnRTdHlsZSxcblx0X21haW5TY3JvbGxBbmltYXRpbmcsIC8vIHRydWUsIGlmIGFuaW1hdGlvbiBhZnRlciBzd2lwZSBnZXN0dXJlIGlzIHJ1bm5pbmdcblx0X21pZFpvb21Qb2ludCA9IF9nZXRFbXB0eVBvaW50KCksXG5cdF9jdXJyQ2VudGVyUG9pbnQgPSBfZ2V0RW1wdHlQb2ludCgpLFxuXHRfZGlyZWN0aW9uLFxuXHRfaXNGaXJzdE1vdmUsXG5cdF9vcGFjaXR5Q2hhbmdlZCxcblx0X2JnT3BhY2l0eSxcblx0X3dhc092ZXJJbml0aWFsWm9vbSxcblxuXHRfaXNFcXVhbFBvaW50cyA9IGZ1bmN0aW9uKHAxLCBwMikge1xuXHRcdHJldHVybiBwMS54ID09PSBwMi54ICYmIHAxLnkgPT09IHAyLnk7XG5cdH0sXG5cdF9pc05lYXJieVBvaW50cyA9IGZ1bmN0aW9uKHRvdWNoMCwgdG91Y2gxKSB7XG5cdFx0cmV0dXJuIE1hdGguYWJzKHRvdWNoMC54IC0gdG91Y2gxLngpIDwgRE9VQkxFX1RBUF9SQURJVVMgJiYgTWF0aC5hYnModG91Y2gwLnkgLSB0b3VjaDEueSkgPCBET1VCTEVfVEFQX1JBRElVUztcblx0fSxcblx0X2NhbGN1bGF0ZVBvaW50c0Rpc3RhbmNlID0gZnVuY3Rpb24ocDEsIHAyKSB7XG5cdFx0X3RlbXBQb2ludC54ID0gTWF0aC5hYnMoIHAxLnggLSBwMi54ICk7XG5cdFx0X3RlbXBQb2ludC55ID0gTWF0aC5hYnMoIHAxLnkgLSBwMi55ICk7XG5cdFx0cmV0dXJuIE1hdGguc3FydChfdGVtcFBvaW50LnggKiBfdGVtcFBvaW50LnggKyBfdGVtcFBvaW50LnkgKiBfdGVtcFBvaW50LnkpO1xuXHR9LFxuXHRfc3RvcERyYWdVcGRhdGVMb29wID0gZnVuY3Rpb24oKSB7XG5cdFx0aWYoX2RyYWdBbmltRnJhbWUpIHtcblx0XHRcdF9jYW5jZWxBRihfZHJhZ0FuaW1GcmFtZSk7XG5cdFx0XHRfZHJhZ0FuaW1GcmFtZSA9IG51bGw7XG5cdFx0fVxuXHR9LFxuXHRfZHJhZ1VwZGF0ZUxvb3AgPSBmdW5jdGlvbigpIHtcblx0XHRpZihfaXNEcmFnZ2luZykge1xuXHRcdFx0X2RyYWdBbmltRnJhbWUgPSBfcmVxdWVzdEFGKF9kcmFnVXBkYXRlTG9vcCk7XG5cdFx0XHRfcmVuZGVyTW92ZW1lbnQoKTtcblx0XHR9XG5cdH0sXG5cdF9jYW5QYW4gPSBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gIShfb3B0aW9ucy5zY2FsZU1vZGUgPT09ICdmaXQnICYmIF9jdXJyWm9vbUxldmVsID09PSAgc2VsZi5jdXJySXRlbS5pbml0aWFsWm9vbUxldmVsKTtcblx0fSxcblx0XG5cdC8vIGZpbmQgdGhlIGNsb3Nlc3QgcGFyZW50IERPTSBlbGVtZW50XG5cdF9jbG9zZXN0RWxlbWVudCA9IGZ1bmN0aW9uKGVsLCBmbikge1xuXHQgIFx0aWYoIWVsIHx8IGVsID09PSBkb2N1bWVudCkge1xuXHQgIFx0XHRyZXR1cm4gZmFsc2U7XG5cdCAgXHR9XG5cblx0ICBcdC8vIGRvbid0IHNlYXJjaCBlbGVtZW50cyBhYm92ZSBwc3dwX19zY3JvbGwtd3JhcFxuXHQgIFx0aWYoZWwuZ2V0QXR0cmlidXRlKCdjbGFzcycpICYmIGVsLmdldEF0dHJpYnV0ZSgnY2xhc3MnKS5pbmRleE9mKCdwc3dwX19zY3JvbGwtd3JhcCcpID4gLTEgKSB7XG5cdCAgXHRcdHJldHVybiBmYWxzZTtcblx0ICBcdH1cblxuXHQgIFx0aWYoIGZuKGVsKSApIHtcblx0ICBcdFx0cmV0dXJuIGVsO1xuXHQgIFx0fVxuXG5cdCAgXHRyZXR1cm4gX2Nsb3Nlc3RFbGVtZW50KGVsLnBhcmVudE5vZGUsIGZuKTtcblx0fSxcblxuXHRfcHJldmVudE9iaiA9IHt9LFxuXHRfcHJldmVudERlZmF1bHRFdmVudEJlaGF2aW91ciA9IGZ1bmN0aW9uKGUsIGlzRG93bikge1xuXHQgICAgX3ByZXZlbnRPYmoucHJldmVudCA9ICFfY2xvc2VzdEVsZW1lbnQoZS50YXJnZXQsIF9vcHRpb25zLmlzQ2xpY2thYmxlRWxlbWVudCk7XG5cblx0XHRfc2hvdXQoJ3ByZXZlbnREcmFnRXZlbnQnLCBlLCBpc0Rvd24sIF9wcmV2ZW50T2JqKTtcblx0XHRyZXR1cm4gX3ByZXZlbnRPYmoucHJldmVudDtcblxuXHR9LFxuXHRfY29udmVydFRvdWNoVG9Qb2ludCA9IGZ1bmN0aW9uKHRvdWNoLCBwKSB7XG5cdFx0cC54ID0gdG91Y2gucGFnZVg7XG5cdFx0cC55ID0gdG91Y2gucGFnZVk7XG5cdFx0cC5pZCA9IHRvdWNoLmlkZW50aWZpZXI7XG5cdFx0cmV0dXJuIHA7XG5cdH0sXG5cdF9maW5kQ2VudGVyT2ZQb2ludHMgPSBmdW5jdGlvbihwMSwgcDIsIHBDZW50ZXIpIHtcblx0XHRwQ2VudGVyLnggPSAocDEueCArIHAyLngpICogMC41O1xuXHRcdHBDZW50ZXIueSA9IChwMS55ICsgcDIueSkgKiAwLjU7XG5cdH0sXG5cdF9wdXNoUG9zUG9pbnQgPSBmdW5jdGlvbih0aW1lLCB4LCB5KSB7XG5cdFx0aWYodGltZSAtIF9nZXN0dXJlQ2hlY2tTcGVlZFRpbWUgPiA1MCkge1xuXHRcdFx0dmFyIG8gPSBfcG9zUG9pbnRzLmxlbmd0aCA+IDIgPyBfcG9zUG9pbnRzLnNoaWZ0KCkgOiB7fTtcblx0XHRcdG8ueCA9IHg7XG5cdFx0XHRvLnkgPSB5OyBcblx0XHRcdF9wb3NQb2ludHMucHVzaChvKTtcblx0XHRcdF9nZXN0dXJlQ2hlY2tTcGVlZFRpbWUgPSB0aW1lO1xuXHRcdH1cblx0fSxcblxuXHRfY2FsY3VsYXRlVmVydGljYWxEcmFnT3BhY2l0eVJhdGlvID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHlPZmZzZXQgPSBfcGFuT2Zmc2V0LnkgLSBzZWxmLmN1cnJJdGVtLmluaXRpYWxQb3NpdGlvbi55OyAvLyBkaWZmZXJlbmNlIGJldHdlZW4gaW5pdGlhbCBhbmQgY3VycmVudCBwb3NpdGlvblxuXHRcdHJldHVybiAxIC0gIE1hdGguYWJzKCB5T2Zmc2V0IC8gKF92aWV3cG9ydFNpemUueSAvIDIpICApO1xuXHR9LFxuXG5cdFxuXHQvLyBwb2ludHMgcG9vbCwgcmV1c2VkIGR1cmluZyB0b3VjaCBldmVudHNcblx0X2VQb2ludDEgPSB7fSxcblx0X2VQb2ludDIgPSB7fSxcblx0X3RlbXBQb2ludHNBcnIgPSBbXSxcblx0X3RlbXBDb3VudGVyLFxuXHRfZ2V0VG91Y2hQb2ludHMgPSBmdW5jdGlvbihlKSB7XG5cdFx0Ly8gY2xlYW4gdXAgcHJldmlvdXMgcG9pbnRzLCB3aXRob3V0IHJlY3JlYXRpbmcgYXJyYXlcblx0XHR3aGlsZShfdGVtcFBvaW50c0Fyci5sZW5ndGggPiAwKSB7XG5cdFx0XHRfdGVtcFBvaW50c0Fyci5wb3AoKTtcblx0XHR9XG5cblx0XHRpZighX3BvaW50ZXJFdmVudEVuYWJsZWQpIHtcblx0XHRcdGlmKGUudHlwZS5pbmRleE9mKCd0b3VjaCcpID4gLTEpIHtcblxuXHRcdFx0XHRpZihlLnRvdWNoZXMgJiYgZS50b3VjaGVzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRfdGVtcFBvaW50c0FyclswXSA9IF9jb252ZXJ0VG91Y2hUb1BvaW50KGUudG91Y2hlc1swXSwgX2VQb2ludDEpO1xuXHRcdFx0XHRcdGlmKGUudG91Y2hlcy5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdFx0XHRfdGVtcFBvaW50c0FyclsxXSA9IF9jb252ZXJ0VG91Y2hUb1BvaW50KGUudG91Y2hlc1sxXSwgX2VQb2ludDIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdF9lUG9pbnQxLnggPSBlLnBhZ2VYO1xuXHRcdFx0XHRfZVBvaW50MS55ID0gZS5wYWdlWTtcblx0XHRcdFx0X2VQb2ludDEuaWQgPSAnJztcblx0XHRcdFx0X3RlbXBQb2ludHNBcnJbMF0gPSBfZVBvaW50MTsvL19lUG9pbnQxO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRfdGVtcENvdW50ZXIgPSAwO1xuXHRcdFx0Ly8gd2UgY2FuIHVzZSBmb3JFYWNoLCBhcyBwb2ludGVyIGV2ZW50cyBhcmUgc3VwcG9ydGVkIG9ubHkgaW4gbW9kZXJuIGJyb3dzZXJzXG5cdFx0XHRfY3VyclBvaW50ZXJzLmZvckVhY2goZnVuY3Rpb24ocCkge1xuXHRcdFx0XHRpZihfdGVtcENvdW50ZXIgPT09IDApIHtcblx0XHRcdFx0XHRfdGVtcFBvaW50c0FyclswXSA9IHA7XG5cdFx0XHRcdH0gZWxzZSBpZihfdGVtcENvdW50ZXIgPT09IDEpIHtcblx0XHRcdFx0XHRfdGVtcFBvaW50c0FyclsxXSA9IHA7XG5cdFx0XHRcdH1cblx0XHRcdFx0X3RlbXBDb3VudGVyKys7XG5cblx0XHRcdH0pO1xuXHRcdH1cblx0XHRyZXR1cm4gX3RlbXBQb2ludHNBcnI7XG5cdH0sXG5cblx0X3Bhbk9yTW92ZU1haW5TY3JvbGwgPSBmdW5jdGlvbihheGlzLCBkZWx0YSkge1xuXG5cdFx0dmFyIHBhbkZyaWN0aW9uLFxuXHRcdFx0b3ZlckRpZmYgPSAwLFxuXHRcdFx0bmV3T2Zmc2V0ID0gX3Bhbk9mZnNldFtheGlzXSArIGRlbHRhW2F4aXNdLFxuXHRcdFx0c3RhcnRPdmVyRGlmZixcblx0XHRcdGRpciA9IGRlbHRhW2F4aXNdID4gMCxcblx0XHRcdG5ld01haW5TY3JvbGxQb3NpdGlvbiA9IF9tYWluU2Nyb2xsUG9zLnggKyBkZWx0YS54LFxuXHRcdFx0bWFpblNjcm9sbERpZmYgPSBfbWFpblNjcm9sbFBvcy54IC0gX3N0YXJ0TWFpblNjcm9sbFBvcy54LFxuXHRcdFx0bmV3UGFuUG9zLFxuXHRcdFx0bmV3TWFpblNjcm9sbFBvcztcblxuXHRcdC8vIGNhbGN1bGF0ZSBmZGlzdGFuY2Ugb3ZlciB0aGUgYm91bmRzIGFuZCBmcmljdGlvblxuXHRcdGlmKG5ld09mZnNldCA+IF9jdXJyUGFuQm91bmRzLm1pbltheGlzXSB8fCBuZXdPZmZzZXQgPCBfY3VyclBhbkJvdW5kcy5tYXhbYXhpc10pIHtcblx0XHRcdHBhbkZyaWN0aW9uID0gX29wdGlvbnMucGFuRW5kRnJpY3Rpb247XG5cdFx0XHQvLyBMaW5lYXIgaW5jcmVhc2luZyBvZiBmcmljdGlvbiwgc28gYXQgMS80IG9mIHZpZXdwb3J0IGl0J3MgYXQgbWF4IHZhbHVlLiBcblx0XHRcdC8vIExvb2tzIG5vdCBhcyBuaWNlIGFzIHdhcyBleHBlY3RlZC4gTGVmdCBmb3IgaGlzdG9yeS5cblx0XHRcdC8vIHBhbkZyaWN0aW9uID0gKDEgLSAoX3Bhbk9mZnNldFtheGlzXSArIGRlbHRhW2F4aXNdICsgcGFuQm91bmRzLm1pbltheGlzXSkgLyAoX3ZpZXdwb3J0U2l6ZVtheGlzXSAvIDQpICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHBhbkZyaWN0aW9uID0gMTtcblx0XHR9XG5cdFx0XG5cdFx0bmV3T2Zmc2V0ID0gX3Bhbk9mZnNldFtheGlzXSArIGRlbHRhW2F4aXNdICogcGFuRnJpY3Rpb247XG5cblx0XHQvLyBtb3ZlIG1haW4gc2Nyb2xsIG9yIHN0YXJ0IHBhbm5pbmdcblx0XHRpZihfb3B0aW9ucy5hbGxvd1BhblRvTmV4dCB8fCBfY3Vyclpvb21MZXZlbCA9PT0gc2VsZi5jdXJySXRlbS5pbml0aWFsWm9vbUxldmVsKSB7XG5cblxuXHRcdFx0aWYoIV9jdXJyWm9vbUVsZW1lbnRTdHlsZSkge1xuXHRcdFx0XHRcblx0XHRcdFx0bmV3TWFpblNjcm9sbFBvcyA9IG5ld01haW5TY3JvbGxQb3NpdGlvbjtcblxuXHRcdFx0fSBlbHNlIGlmKF9kaXJlY3Rpb24gPT09ICdoJyAmJiBheGlzID09PSAneCcgJiYgIV96b29tU3RhcnRlZCApIHtcblx0XHRcdFx0XG5cdFx0XHRcdGlmKGRpcikge1xuXHRcdFx0XHRcdGlmKG5ld09mZnNldCA+IF9jdXJyUGFuQm91bmRzLm1pbltheGlzXSkge1xuXHRcdFx0XHRcdFx0cGFuRnJpY3Rpb24gPSBfb3B0aW9ucy5wYW5FbmRGcmljdGlvbjtcblx0XHRcdFx0XHRcdG92ZXJEaWZmID0gX2N1cnJQYW5Cb3VuZHMubWluW2F4aXNdIC0gbmV3T2Zmc2V0O1xuXHRcdFx0XHRcdFx0c3RhcnRPdmVyRGlmZiA9IF9jdXJyUGFuQm91bmRzLm1pbltheGlzXSAtIF9zdGFydFBhbk9mZnNldFtheGlzXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0Ly8gZHJhZyByaWdodFxuXHRcdFx0XHRcdGlmKCAoc3RhcnRPdmVyRGlmZiA8PSAwIHx8IG1haW5TY3JvbGxEaWZmIDwgMCkgJiYgX2dldE51bUl0ZW1zKCkgPiAxICkge1xuXHRcdFx0XHRcdFx0bmV3TWFpblNjcm9sbFBvcyA9IG5ld01haW5TY3JvbGxQb3NpdGlvbjtcblx0XHRcdFx0XHRcdGlmKG1haW5TY3JvbGxEaWZmIDwgMCAmJiBuZXdNYWluU2Nyb2xsUG9zaXRpb24gPiBfc3RhcnRNYWluU2Nyb2xsUG9zLngpIHtcblx0XHRcdFx0XHRcdFx0bmV3TWFpblNjcm9sbFBvcyA9IF9zdGFydE1haW5TY3JvbGxQb3MueDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0aWYoX2N1cnJQYW5Cb3VuZHMubWluLnggIT09IF9jdXJyUGFuQm91bmRzLm1heC54KSB7XG5cdFx0XHRcdFx0XHRcdG5ld1BhblBvcyA9IG5ld09mZnNldDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0aWYobmV3T2Zmc2V0IDwgX2N1cnJQYW5Cb3VuZHMubWF4W2F4aXNdICkge1xuXHRcdFx0XHRcdFx0cGFuRnJpY3Rpb24gPV9vcHRpb25zLnBhbkVuZEZyaWN0aW9uO1xuXHRcdFx0XHRcdFx0b3ZlckRpZmYgPSBuZXdPZmZzZXQgLSBfY3VyclBhbkJvdW5kcy5tYXhbYXhpc107XG5cdFx0XHRcdFx0XHRzdGFydE92ZXJEaWZmID0gX3N0YXJ0UGFuT2Zmc2V0W2F4aXNdIC0gX2N1cnJQYW5Cb3VuZHMubWF4W2F4aXNdO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmKCAoc3RhcnRPdmVyRGlmZiA8PSAwIHx8IG1haW5TY3JvbGxEaWZmID4gMCkgJiYgX2dldE51bUl0ZW1zKCkgPiAxICkge1xuXHRcdFx0XHRcdFx0bmV3TWFpblNjcm9sbFBvcyA9IG5ld01haW5TY3JvbGxQb3NpdGlvbjtcblxuXHRcdFx0XHRcdFx0aWYobWFpblNjcm9sbERpZmYgPiAwICYmIG5ld01haW5TY3JvbGxQb3NpdGlvbiA8IF9zdGFydE1haW5TY3JvbGxQb3MueCkge1xuXHRcdFx0XHRcdFx0XHRuZXdNYWluU2Nyb2xsUG9zID0gX3N0YXJ0TWFpblNjcm9sbFBvcy54O1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGlmKF9jdXJyUGFuQm91bmRzLm1pbi54ICE9PSBfY3VyclBhbkJvdW5kcy5tYXgueCkge1xuXHRcdFx0XHRcdFx0XHRuZXdQYW5Qb3MgPSBuZXdPZmZzZXQ7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH1cblxuXG5cdFx0XHRcdC8vXG5cdFx0XHR9XG5cblx0XHRcdGlmKGF4aXMgPT09ICd4Jykge1xuXG5cdFx0XHRcdGlmKG5ld01haW5TY3JvbGxQb3MgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdF9tb3ZlTWFpblNjcm9sbChuZXdNYWluU2Nyb2xsUG9zLCB0cnVlKTtcblx0XHRcdFx0XHRpZihuZXdNYWluU2Nyb2xsUG9zID09PSBfc3RhcnRNYWluU2Nyb2xsUG9zLngpIHtcblx0XHRcdFx0XHRcdF9tYWluU2Nyb2xsU2hpZnRlZCA9IGZhbHNlO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRfbWFpblNjcm9sbFNoaWZ0ZWQgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmKF9jdXJyUGFuQm91bmRzLm1pbi54ICE9PSBfY3VyclBhbkJvdW5kcy5tYXgueCkge1xuXHRcdFx0XHRcdGlmKG5ld1BhblBvcyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0XHRfcGFuT2Zmc2V0LnggPSBuZXdQYW5Qb3M7XG5cdFx0XHRcdFx0fSBlbHNlIGlmKCFfbWFpblNjcm9sbFNoaWZ0ZWQpIHtcblx0XHRcdFx0XHRcdF9wYW5PZmZzZXQueCArPSBkZWx0YS54ICogcGFuRnJpY3Rpb247XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIG5ld01haW5TY3JvbGxQb3MgIT09IHVuZGVmaW5lZDtcblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdGlmKCFfbWFpblNjcm9sbEFuaW1hdGluZykge1xuXHRcdFx0XG5cdFx0XHRpZighX21haW5TY3JvbGxTaGlmdGVkKSB7XG5cdFx0XHRcdGlmKF9jdXJyWm9vbUxldmVsID4gc2VsZi5jdXJySXRlbS5maXRSYXRpbykge1xuXHRcdFx0XHRcdF9wYW5PZmZzZXRbYXhpc10gKz0gZGVsdGFbYXhpc10gKiBwYW5GcmljdGlvbjtcblx0XHRcdFx0XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0XG5cdFx0fVxuXHRcdFxuXHR9LFxuXG5cdC8vIFBvaW50ZXJkb3duL3RvdWNoc3RhcnQvbW91c2Vkb3duIGhhbmRsZXJcblx0X29uRHJhZ1N0YXJ0ID0gZnVuY3Rpb24oZSkge1xuXG5cdFx0Ly8gQWxsb3cgZHJhZ2dpbmcgb25seSB2aWEgbGVmdCBtb3VzZSBidXR0b24uXG5cdFx0Ly8gQXMgdGhpcyBoYW5kbGVyIGlzIG5vdCBhZGRlZCBpbiBJRTggLSB3ZSBpZ25vcmUgZS53aGljaFxuXHRcdC8vIFxuXHRcdC8vIGh0dHA6Ly93d3cucXVpcmtzbW9kZS5vcmcvanMvZXZlbnRzX3Byb3BlcnRpZXMuaHRtbFxuXHRcdC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9ldmVudC5idXR0b25cblx0XHRpZihlLnR5cGUgPT09ICdtb3VzZWRvd24nICYmIGUuYnV0dG9uID4gMCAgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYoX2luaXRpYWxab29tUnVubmluZykge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmKF9vbGRBbmRyb2lkVG91Y2hFbmRUaW1lb3V0ICYmIGUudHlwZSA9PT0gJ21vdXNlZG93bicpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZihfcHJldmVudERlZmF1bHRFdmVudEJlaGF2aW91cihlLCB0cnVlKSkge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdH1cblxuXG5cblx0XHRfc2hvdXQoJ3BvaW50ZXJEb3duJyk7XG5cblx0XHRpZihfcG9pbnRlckV2ZW50RW5hYmxlZCkge1xuXHRcdFx0dmFyIHBvaW50ZXJJbmRleCA9IGZyYW1ld29yay5hcnJheVNlYXJjaChfY3VyclBvaW50ZXJzLCBlLnBvaW50ZXJJZCwgJ2lkJyk7XG5cdFx0XHRpZihwb2ludGVySW5kZXggPCAwKSB7XG5cdFx0XHRcdHBvaW50ZXJJbmRleCA9IF9jdXJyUG9pbnRlcnMubGVuZ3RoO1xuXHRcdFx0fVxuXHRcdFx0X2N1cnJQb2ludGVyc1twb2ludGVySW5kZXhdID0ge3g6ZS5wYWdlWCwgeTplLnBhZ2VZLCBpZDogZS5wb2ludGVySWR9O1xuXHRcdH1cblx0XHRcblxuXG5cdFx0dmFyIHN0YXJ0UG9pbnRzTGlzdCA9IF9nZXRUb3VjaFBvaW50cyhlKSxcblx0XHRcdG51bVBvaW50cyA9IHN0YXJ0UG9pbnRzTGlzdC5sZW5ndGg7XG5cblx0XHRfY3VycmVudFBvaW50cyA9IG51bGw7XG5cblx0XHRfc3RvcEFsbEFuaW1hdGlvbnMoKTtcblxuXHRcdC8vIGluaXQgZHJhZ1xuXHRcdGlmKCFfaXNEcmFnZ2luZyB8fCBudW1Qb2ludHMgPT09IDEpIHtcblxuXHRcdFx0XG5cblx0XHRcdF9pc0RyYWdnaW5nID0gX2lzRmlyc3RNb3ZlID0gdHJ1ZTtcblx0XHRcdGZyYW1ld29yay5iaW5kKHdpbmRvdywgX3VwTW92ZUV2ZW50cywgc2VsZik7XG5cblx0XHRcdF9pc1pvb21pbmdJbiA9IFxuXHRcdFx0XHRfd2FzT3ZlckluaXRpYWxab29tID0gXG5cdFx0XHRcdF9vcGFjaXR5Q2hhbmdlZCA9IFxuXHRcdFx0XHRfdmVydGljYWxEcmFnSW5pdGlhdGVkID0gXG5cdFx0XHRcdF9tYWluU2Nyb2xsU2hpZnRlZCA9IFxuXHRcdFx0XHRfbW92ZWQgPSBcblx0XHRcdFx0X2lzTXVsdGl0b3VjaCA9IFxuXHRcdFx0XHRfem9vbVN0YXJ0ZWQgPSBmYWxzZTtcblxuXHRcdFx0X2RpcmVjdGlvbiA9IG51bGw7XG5cblx0XHRcdF9zaG91dCgnZmlyc3RUb3VjaFN0YXJ0Jywgc3RhcnRQb2ludHNMaXN0KTtcblxuXHRcdFx0X2VxdWFsaXplUG9pbnRzKF9zdGFydFBhbk9mZnNldCwgX3Bhbk9mZnNldCk7XG5cblx0XHRcdF9jdXJyUGFuRGlzdC54ID0gX2N1cnJQYW5EaXN0LnkgPSAwO1xuXHRcdFx0X2VxdWFsaXplUG9pbnRzKF9jdXJyUG9pbnQsIHN0YXJ0UG9pbnRzTGlzdFswXSk7XG5cdFx0XHRfZXF1YWxpemVQb2ludHMoX3N0YXJ0UG9pbnQsIF9jdXJyUG9pbnQpO1xuXG5cdFx0XHQvL19lcXVhbGl6ZVBvaW50cyhfc3RhcnRNYWluU2Nyb2xsUG9zLCBfbWFpblNjcm9sbFBvcyk7XG5cdFx0XHRfc3RhcnRNYWluU2Nyb2xsUG9zLnggPSBfc2xpZGVTaXplLnggKiBfY3VyclBvc2l0aW9uSW5kZXg7XG5cblx0XHRcdF9wb3NQb2ludHMgPSBbe1xuXHRcdFx0XHR4OiBfY3VyclBvaW50LngsXG5cdFx0XHRcdHk6IF9jdXJyUG9pbnQueVxuXHRcdFx0fV07XG5cblx0XHRcdF9nZXN0dXJlQ2hlY2tTcGVlZFRpbWUgPSBfZ2VzdHVyZVN0YXJ0VGltZSA9IF9nZXRDdXJyZW50VGltZSgpO1xuXG5cdFx0XHQvL19tYWluU2Nyb2xsQW5pbWF0aW9uRW5kKHRydWUpO1xuXHRcdFx0X2NhbGN1bGF0ZVBhbkJvdW5kcyggX2N1cnJab29tTGV2ZWwsIHRydWUgKTtcblx0XHRcdFxuXHRcdFx0Ly8gU3RhcnQgcmVuZGVyaW5nXG5cdFx0XHRfc3RvcERyYWdVcGRhdGVMb29wKCk7XG5cdFx0XHRfZHJhZ1VwZGF0ZUxvb3AoKTtcblx0XHRcdFxuXHRcdH1cblxuXHRcdC8vIGluaXQgem9vbVxuXHRcdGlmKCFfaXNab29taW5nICYmIG51bVBvaW50cyA+IDEgJiYgIV9tYWluU2Nyb2xsQW5pbWF0aW5nICYmICFfbWFpblNjcm9sbFNoaWZ0ZWQpIHtcblx0XHRcdF9zdGFydFpvb21MZXZlbCA9IF9jdXJyWm9vbUxldmVsO1xuXHRcdFx0X3pvb21TdGFydGVkID0gZmFsc2U7IC8vIHRydWUgaWYgem9vbSBjaGFuZ2VkIGF0IGxlYXN0IG9uY2VcblxuXHRcdFx0X2lzWm9vbWluZyA9IF9pc011bHRpdG91Y2ggPSB0cnVlO1xuXHRcdFx0X2N1cnJQYW5EaXN0LnkgPSBfY3VyclBhbkRpc3QueCA9IDA7XG5cblx0XHRcdF9lcXVhbGl6ZVBvaW50cyhfc3RhcnRQYW5PZmZzZXQsIF9wYW5PZmZzZXQpO1xuXG5cdFx0XHRfZXF1YWxpemVQb2ludHMocCwgc3RhcnRQb2ludHNMaXN0WzBdKTtcblx0XHRcdF9lcXVhbGl6ZVBvaW50cyhwMiwgc3RhcnRQb2ludHNMaXN0WzFdKTtcblxuXHRcdFx0X2ZpbmRDZW50ZXJPZlBvaW50cyhwLCBwMiwgX2N1cnJDZW50ZXJQb2ludCk7XG5cblx0XHRcdF9taWRab29tUG9pbnQueCA9IE1hdGguYWJzKF9jdXJyQ2VudGVyUG9pbnQueCkgLSBfcGFuT2Zmc2V0Lng7XG5cdFx0XHRfbWlkWm9vbVBvaW50LnkgPSBNYXRoLmFicyhfY3VyckNlbnRlclBvaW50LnkpIC0gX3Bhbk9mZnNldC55O1xuXHRcdFx0X2N1cnJQb2ludHNEaXN0YW5jZSA9IF9zdGFydFBvaW50c0Rpc3RhbmNlID0gX2NhbGN1bGF0ZVBvaW50c0Rpc3RhbmNlKHAsIHAyKTtcblx0XHR9XG5cblxuXHR9LFxuXG5cdC8vIFBvaW50ZXJtb3ZlL3RvdWNobW92ZS9tb3VzZW1vdmUgaGFuZGxlclxuXHRfb25EcmFnTW92ZSA9IGZ1bmN0aW9uKGUpIHtcblxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdGlmKF9wb2ludGVyRXZlbnRFbmFibGVkKSB7XG5cdFx0XHR2YXIgcG9pbnRlckluZGV4ID0gZnJhbWV3b3JrLmFycmF5U2VhcmNoKF9jdXJyUG9pbnRlcnMsIGUucG9pbnRlcklkLCAnaWQnKTtcblx0XHRcdGlmKHBvaW50ZXJJbmRleCA+IC0xKSB7XG5cdFx0XHRcdHZhciBwID0gX2N1cnJQb2ludGVyc1twb2ludGVySW5kZXhdO1xuXHRcdFx0XHRwLnggPSBlLnBhZ2VYO1xuXHRcdFx0XHRwLnkgPSBlLnBhZ2VZOyBcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZihfaXNEcmFnZ2luZykge1xuXHRcdFx0dmFyIHRvdWNoZXNMaXN0ID0gX2dldFRvdWNoUG9pbnRzKGUpO1xuXHRcdFx0aWYoIV9kaXJlY3Rpb24gJiYgIV9tb3ZlZCAmJiAhX2lzWm9vbWluZykge1xuXG5cdFx0XHRcdGlmKF9tYWluU2Nyb2xsUG9zLnggIT09IF9zbGlkZVNpemUueCAqIF9jdXJyUG9zaXRpb25JbmRleCkge1xuXHRcdFx0XHRcdC8vIGlmIG1haW4gc2Nyb2xsIHBvc2l0aW9uIGlzIHNoaWZ0ZWQg4oCTIGRpcmVjdGlvbiBpcyBhbHdheXMgaG9yaXpvbnRhbFxuXHRcdFx0XHRcdF9kaXJlY3Rpb24gPSAnaCc7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dmFyIGRpZmYgPSBNYXRoLmFicyh0b3VjaGVzTGlzdFswXS54IC0gX2N1cnJQb2ludC54KSAtIE1hdGguYWJzKHRvdWNoZXNMaXN0WzBdLnkgLSBfY3VyclBvaW50LnkpO1xuXHRcdFx0XHRcdC8vIGNoZWNrIHRoZSBkaXJlY3Rpb24gb2YgbW92ZW1lbnRcblx0XHRcdFx0XHRpZihNYXRoLmFicyhkaWZmKSA+PSBESVJFQ1RJT05fQ0hFQ0tfT0ZGU0VUKSB7XG5cdFx0XHRcdFx0XHRfZGlyZWN0aW9uID0gZGlmZiA+IDAgPyAnaCcgOiAndic7XG5cdFx0XHRcdFx0XHRfY3VycmVudFBvaW50cyA9IHRvdWNoZXNMaXN0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdF9jdXJyZW50UG9pbnRzID0gdG91Y2hlc0xpc3Q7XG5cdFx0XHR9XG5cdFx0fVx0XG5cdH0sXG5cdC8vIFxuXHRfcmVuZGVyTW92ZW1lbnQgPSAgZnVuY3Rpb24oKSB7XG5cblx0XHRpZighX2N1cnJlbnRQb2ludHMpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2YXIgbnVtUG9pbnRzID0gX2N1cnJlbnRQb2ludHMubGVuZ3RoO1xuXG5cdFx0aWYobnVtUG9pbnRzID09PSAwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0X2VxdWFsaXplUG9pbnRzKHAsIF9jdXJyZW50UG9pbnRzWzBdKTtcblxuXHRcdGRlbHRhLnggPSBwLnggLSBfY3VyclBvaW50Lng7XG5cdFx0ZGVsdGEueSA9IHAueSAtIF9jdXJyUG9pbnQueTtcblxuXHRcdGlmKF9pc1pvb21pbmcgJiYgbnVtUG9pbnRzID4gMSkge1xuXHRcdFx0Ly8gSGFuZGxlIGJlaGF2aW91ciBmb3IgbW9yZSB0aGFuIDEgcG9pbnRcblxuXHRcdFx0X2N1cnJQb2ludC54ID0gcC54O1xuXHRcdFx0X2N1cnJQb2ludC55ID0gcC55O1xuXHRcdFxuXHRcdFx0Ly8gY2hlY2sgaWYgb25lIG9mIHR3byBwb2ludHMgY2hhbmdlZFxuXHRcdFx0aWYoICFkZWx0YS54ICYmICFkZWx0YS55ICYmIF9pc0VxdWFsUG9pbnRzKF9jdXJyZW50UG9pbnRzWzFdLCBwMikgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0X2VxdWFsaXplUG9pbnRzKHAyLCBfY3VycmVudFBvaW50c1sxXSk7XG5cblxuXHRcdFx0aWYoIV96b29tU3RhcnRlZCkge1xuXHRcdFx0XHRfem9vbVN0YXJ0ZWQgPSB0cnVlO1xuXHRcdFx0XHRfc2hvdXQoJ3pvb21HZXN0dXJlU3RhcnRlZCcpO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHQvLyBEaXN0YW5jZSBiZXR3ZWVuIHR3byBwb2ludHNcblx0XHRcdHZhciBwb2ludHNEaXN0YW5jZSA9IF9jYWxjdWxhdGVQb2ludHNEaXN0YW5jZShwLHAyKTtcblxuXHRcdFx0dmFyIHpvb21MZXZlbCA9IF9jYWxjdWxhdGVab29tTGV2ZWwocG9pbnRzRGlzdGFuY2UpO1xuXG5cdFx0XHQvLyBzbGlnaHRseSBvdmVyIHRoZSBvZiBpbml0aWFsIHpvb20gbGV2ZWxcblx0XHRcdGlmKHpvb21MZXZlbCA+IHNlbGYuY3Vyckl0ZW0uaW5pdGlhbFpvb21MZXZlbCArIHNlbGYuY3Vyckl0ZW0uaW5pdGlhbFpvb21MZXZlbCAvIDE1KSB7XG5cdFx0XHRcdF93YXNPdmVySW5pdGlhbFpvb20gPSB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBBcHBseSB0aGUgZnJpY3Rpb24gaWYgem9vbSBsZXZlbCBpcyBvdXQgb2YgdGhlIGJvdW5kc1xuXHRcdFx0dmFyIHpvb21GcmljdGlvbiA9IDEsXG5cdFx0XHRcdG1pblpvb21MZXZlbCA9IF9nZXRNaW5ab29tTGV2ZWwoKSxcblx0XHRcdFx0bWF4Wm9vbUxldmVsID0gX2dldE1heFpvb21MZXZlbCgpO1xuXG5cdFx0XHRpZiAoIHpvb21MZXZlbCA8IG1pblpvb21MZXZlbCApIHtcblx0XHRcdFx0XG5cdFx0XHRcdGlmKF9vcHRpb25zLnBpbmNoVG9DbG9zZSAmJiAhX3dhc092ZXJJbml0aWFsWm9vbSAmJiBfc3RhcnRab29tTGV2ZWwgPD0gc2VsZi5jdXJySXRlbS5pbml0aWFsWm9vbUxldmVsKSB7XG5cdFx0XHRcdFx0Ly8gZmFkZSBvdXQgYmFja2dyb3VuZCBpZiB6b29taW5nIG91dFxuXHRcdFx0XHRcdHZhciBtaW51c0RpZmYgPSBtaW5ab29tTGV2ZWwgLSB6b29tTGV2ZWw7XG5cdFx0XHRcdFx0dmFyIHBlcmNlbnQgPSAxIC0gbWludXNEaWZmIC8gKG1pblpvb21MZXZlbCAvIDEuMik7XG5cblx0XHRcdFx0XHRfYXBwbHlCZ09wYWNpdHkocGVyY2VudCk7XG5cdFx0XHRcdFx0X3Nob3V0KCdvblBpbmNoQ2xvc2UnLCBwZXJjZW50KTtcblx0XHRcdFx0XHRfb3BhY2l0eUNoYW5nZWQgPSB0cnVlO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHpvb21GcmljdGlvbiA9IChtaW5ab29tTGV2ZWwgLSB6b29tTGV2ZWwpIC8gbWluWm9vbUxldmVsO1xuXHRcdFx0XHRcdGlmKHpvb21GcmljdGlvbiA+IDEpIHtcblx0XHRcdFx0XHRcdHpvb21GcmljdGlvbiA9IDE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHpvb21MZXZlbCA9IG1pblpvb21MZXZlbCAtIHpvb21GcmljdGlvbiAqIChtaW5ab29tTGV2ZWwgLyAzKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdH0gZWxzZSBpZiAoIHpvb21MZXZlbCA+IG1heFpvb21MZXZlbCApIHtcblx0XHRcdFx0Ly8gMS41IC0gZXh0cmEgem9vbSBsZXZlbCBhYm92ZSB0aGUgbWF4LiBFLmcuIGlmIG1heCBpcyB4NiwgcmVhbCBtYXggNiArIDEuNSA9IDcuNVxuXHRcdFx0XHR6b29tRnJpY3Rpb24gPSAoem9vbUxldmVsIC0gbWF4Wm9vbUxldmVsKSAvICggbWluWm9vbUxldmVsICogNiApO1xuXHRcdFx0XHRpZih6b29tRnJpY3Rpb24gPiAxKSB7XG5cdFx0XHRcdFx0em9vbUZyaWN0aW9uID0gMTtcblx0XHRcdFx0fVxuXHRcdFx0XHR6b29tTGV2ZWwgPSBtYXhab29tTGV2ZWwgKyB6b29tRnJpY3Rpb24gKiBtaW5ab29tTGV2ZWw7XG5cdFx0XHR9XG5cblx0XHRcdGlmKHpvb21GcmljdGlvbiA8IDApIHtcblx0XHRcdFx0em9vbUZyaWN0aW9uID0gMDtcblx0XHRcdH1cblxuXHRcdFx0Ly8gZGlzdGFuY2UgYmV0d2VlbiB0b3VjaCBwb2ludHMgYWZ0ZXIgZnJpY3Rpb24gaXMgYXBwbGllZFxuXHRcdFx0X2N1cnJQb2ludHNEaXN0YW5jZSA9IHBvaW50c0Rpc3RhbmNlO1xuXG5cdFx0XHQvLyBfY2VudGVyUG9pbnQgLSBUaGUgcG9pbnQgaW4gdGhlIG1pZGRsZSBvZiB0d28gcG9pbnRlcnNcblx0XHRcdF9maW5kQ2VudGVyT2ZQb2ludHMocCwgcDIsIF9jZW50ZXJQb2ludCk7XG5cdFx0XG5cdFx0XHQvLyBwYW5pbmcgd2l0aCB0d28gcG9pbnRlcnMgcHJlc3NlZFxuXHRcdFx0X2N1cnJQYW5EaXN0LnggKz0gX2NlbnRlclBvaW50LnggLSBfY3VyckNlbnRlclBvaW50Lng7XG5cdFx0XHRfY3VyclBhbkRpc3QueSArPSBfY2VudGVyUG9pbnQueSAtIF9jdXJyQ2VudGVyUG9pbnQueTtcblx0XHRcdF9lcXVhbGl6ZVBvaW50cyhfY3VyckNlbnRlclBvaW50LCBfY2VudGVyUG9pbnQpO1xuXG5cdFx0XHRfcGFuT2Zmc2V0LnggPSBfY2FsY3VsYXRlUGFuT2Zmc2V0KCd4Jywgem9vbUxldmVsKTtcblx0XHRcdF9wYW5PZmZzZXQueSA9IF9jYWxjdWxhdGVQYW5PZmZzZXQoJ3knLCB6b29tTGV2ZWwpO1xuXG5cdFx0XHRfaXNab29taW5nSW4gPSB6b29tTGV2ZWwgPiBfY3Vyclpvb21MZXZlbDtcblx0XHRcdF9jdXJyWm9vbUxldmVsID0gem9vbUxldmVsO1xuXHRcdFx0X2FwcGx5Q3VycmVudFpvb21QYW4oKTtcblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdC8vIGhhbmRsZSBiZWhhdmlvdXIgZm9yIG9uZSBwb2ludCAoZHJhZ2dpbmcgb3IgcGFubmluZylcblxuXHRcdFx0aWYoIV9kaXJlY3Rpb24pIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZihfaXNGaXJzdE1vdmUpIHtcblx0XHRcdFx0X2lzRmlyc3RNb3ZlID0gZmFsc2U7XG5cblx0XHRcdFx0Ly8gc3VidHJhY3QgZHJhZyBkaXN0YW5jZSB0aGF0IHdhcyB1c2VkIGR1cmluZyB0aGUgZGV0ZWN0aW9uIGRpcmVjdGlvbiAgXG5cblx0XHRcdFx0aWYoIE1hdGguYWJzKGRlbHRhLngpID49IERJUkVDVElPTl9DSEVDS19PRkZTRVQpIHtcblx0XHRcdFx0XHRkZWx0YS54IC09IF9jdXJyZW50UG9pbnRzWzBdLnggLSBfc3RhcnRQb2ludC54O1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHRpZiggTWF0aC5hYnMoZGVsdGEueSkgPj0gRElSRUNUSU9OX0NIRUNLX09GRlNFVCkge1xuXHRcdFx0XHRcdGRlbHRhLnkgLT0gX2N1cnJlbnRQb2ludHNbMF0ueSAtIF9zdGFydFBvaW50Lnk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0X2N1cnJQb2ludC54ID0gcC54O1xuXHRcdFx0X2N1cnJQb2ludC55ID0gcC55O1xuXG5cdFx0XHQvLyBkbyBub3RoaW5nIGlmIHBvaW50ZXJzIHBvc2l0aW9uIGhhc24ndCBjaGFuZ2VkXG5cdFx0XHRpZihkZWx0YS54ID09PSAwICYmIGRlbHRhLnkgPT09IDApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZihfZGlyZWN0aW9uID09PSAndicgJiYgX29wdGlvbnMuY2xvc2VPblZlcnRpY2FsRHJhZykge1xuXHRcdFx0XHRpZighX2NhblBhbigpKSB7XG5cdFx0XHRcdFx0X2N1cnJQYW5EaXN0LnkgKz0gZGVsdGEueTtcblx0XHRcdFx0XHRfcGFuT2Zmc2V0LnkgKz0gZGVsdGEueTtcblxuXHRcdFx0XHRcdHZhciBvcGFjaXR5UmF0aW8gPSBfY2FsY3VsYXRlVmVydGljYWxEcmFnT3BhY2l0eVJhdGlvKCk7XG5cblx0XHRcdFx0XHRfdmVydGljYWxEcmFnSW5pdGlhdGVkID0gdHJ1ZTtcblx0XHRcdFx0XHRfc2hvdXQoJ29uVmVydGljYWxEcmFnJywgb3BhY2l0eVJhdGlvKTtcblxuXHRcdFx0XHRcdF9hcHBseUJnT3BhY2l0eShvcGFjaXR5UmF0aW8pO1xuXHRcdFx0XHRcdF9hcHBseUN1cnJlbnRab29tUGFuKCk7XG5cdFx0XHRcdFx0cmV0dXJuIDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRfcHVzaFBvc1BvaW50KF9nZXRDdXJyZW50VGltZSgpLCBwLngsIHAueSk7XG5cblx0XHRcdF9tb3ZlZCA9IHRydWU7XG5cdFx0XHRfY3VyclBhbkJvdW5kcyA9IHNlbGYuY3Vyckl0ZW0uYm91bmRzO1xuXHRcdFx0XG5cdFx0XHR2YXIgbWFpblNjcm9sbENoYW5nZWQgPSBfcGFuT3JNb3ZlTWFpblNjcm9sbCgneCcsIGRlbHRhKTtcblx0XHRcdGlmKCFtYWluU2Nyb2xsQ2hhbmdlZCkge1xuXHRcdFx0XHRfcGFuT3JNb3ZlTWFpblNjcm9sbCgneScsIGRlbHRhKTtcblxuXHRcdFx0XHRfcm91bmRQb2ludChfcGFuT2Zmc2V0KTtcblx0XHRcdFx0X2FwcGx5Q3VycmVudFpvb21QYW4oKTtcblx0XHRcdH1cblxuXHRcdH1cblxuXHR9LFxuXHRcblx0Ly8gUG9pbnRlcnVwL3BvaW50ZXJjYW5jZWwvdG91Y2hlbmQvdG91Y2hjYW5jZWwvbW91c2V1cCBldmVudCBoYW5kbGVyXG5cdF9vbkRyYWdSZWxlYXNlID0gZnVuY3Rpb24oZSkge1xuXG5cdFx0aWYoX2ZlYXR1cmVzLmlzT2xkQW5kcm9pZCApIHtcblxuXHRcdFx0aWYoX29sZEFuZHJvaWRUb3VjaEVuZFRpbWVvdXQgJiYgZS50eXBlID09PSAnbW91c2V1cCcpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBvbiBBbmRyb2lkICh2NC4xLCA0LjIsIDQuMyAmIHBvc3NpYmx5IG9sZGVyKSBcblx0XHRcdC8vIGdob3N0IG1vdXNlZG93bi91cCBldmVudCBpc24ndCBwcmV2ZW50YWJsZSB2aWEgZS5wcmV2ZW50RGVmYXVsdCxcblx0XHRcdC8vIHdoaWNoIGNhdXNlcyBmYWtlIG1vdXNlZG93biBldmVudFxuXHRcdFx0Ly8gc28gd2UgYmxvY2sgbW91c2Vkb3duL3VwIGZvciA2MDBtc1xuXHRcdFx0aWYoIGUudHlwZS5pbmRleE9mKCd0b3VjaCcpID4gLTEgKSB7XG5cdFx0XHRcdGNsZWFyVGltZW91dChfb2xkQW5kcm9pZFRvdWNoRW5kVGltZW91dCk7XG5cdFx0XHRcdF9vbGRBbmRyb2lkVG91Y2hFbmRUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRfb2xkQW5kcm9pZFRvdWNoRW5kVGltZW91dCA9IDA7XG5cdFx0XHRcdH0sIDYwMCk7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHR9XG5cblx0XHRfc2hvdXQoJ3BvaW50ZXJVcCcpO1xuXG5cdFx0aWYoX3ByZXZlbnREZWZhdWx0RXZlbnRCZWhhdmlvdXIoZSwgZmFsc2UpKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0fVxuXG5cdFx0dmFyIHJlbGVhc2VQb2ludDtcblxuXHRcdGlmKF9wb2ludGVyRXZlbnRFbmFibGVkKSB7XG5cdFx0XHR2YXIgcG9pbnRlckluZGV4ID0gZnJhbWV3b3JrLmFycmF5U2VhcmNoKF9jdXJyUG9pbnRlcnMsIGUucG9pbnRlcklkLCAnaWQnKTtcblx0XHRcdFxuXHRcdFx0aWYocG9pbnRlckluZGV4ID4gLTEpIHtcblx0XHRcdFx0cmVsZWFzZVBvaW50ID0gX2N1cnJQb2ludGVycy5zcGxpY2UocG9pbnRlckluZGV4LCAxKVswXTtcblxuXHRcdFx0XHRpZihuYXZpZ2F0b3IucG9pbnRlckVuYWJsZWQpIHtcblx0XHRcdFx0XHRyZWxlYXNlUG9pbnQudHlwZSA9IGUucG9pbnRlclR5cGUgfHwgJ21vdXNlJztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR2YXIgTVNQT0lOVEVSX1RZUEVTID0ge1xuXHRcdFx0XHRcdFx0NDogJ21vdXNlJywgLy8gZXZlbnQuTVNQT0lOVEVSX1RZUEVfTU9VU0Vcblx0XHRcdFx0XHRcdDI6ICd0b3VjaCcsIC8vIGV2ZW50Lk1TUE9JTlRFUl9UWVBFX1RPVUNIIFxuXHRcdFx0XHRcdFx0MzogJ3BlbicgLy8gZXZlbnQuTVNQT0lOVEVSX1RZUEVfUEVOXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRyZWxlYXNlUG9pbnQudHlwZSA9IE1TUE9JTlRFUl9UWVBFU1tlLnBvaW50ZXJUeXBlXTtcblxuXHRcdFx0XHRcdGlmKCFyZWxlYXNlUG9pbnQudHlwZSkge1xuXHRcdFx0XHRcdFx0cmVsZWFzZVBvaW50LnR5cGUgPSBlLnBvaW50ZXJUeXBlIHx8ICdtb3VzZSc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdH1cblx0XHR9XG5cblx0XHR2YXIgdG91Y2hMaXN0ID0gX2dldFRvdWNoUG9pbnRzKGUpLFxuXHRcdFx0Z2VzdHVyZVR5cGUsXG5cdFx0XHRudW1Qb2ludHMgPSB0b3VjaExpc3QubGVuZ3RoO1xuXG5cdFx0aWYoZS50eXBlID09PSAnbW91c2V1cCcpIHtcblx0XHRcdG51bVBvaW50cyA9IDA7XG5cdFx0fVxuXG5cdFx0Ly8gRG8gbm90aGluZyBpZiB0aGVyZSB3ZXJlIDMgdG91Y2ggcG9pbnRzIG9yIG1vcmVcblx0XHRpZihudW1Qb2ludHMgPT09IDIpIHtcblx0XHRcdF9jdXJyZW50UG9pbnRzID0gbnVsbDtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdC8vIGlmIHNlY29uZCBwb2ludGVyIHJlbGVhc2VkXG5cdFx0aWYobnVtUG9pbnRzID09PSAxKSB7XG5cdFx0XHRfZXF1YWxpemVQb2ludHMoX3N0YXJ0UG9pbnQsIHRvdWNoTGlzdFswXSk7XG5cdFx0fVx0XHRcdFx0XG5cblxuXHRcdC8vIHBvaW50ZXIgaGFzbid0IG1vdmVkLCBzZW5kIFwidGFwIHJlbGVhc2VcIiBwb2ludFxuXHRcdGlmKG51bVBvaW50cyA9PT0gMCAmJiAhX2RpcmVjdGlvbiAmJiAhX21haW5TY3JvbGxBbmltYXRpbmcpIHtcblx0XHRcdGlmKCFyZWxlYXNlUG9pbnQpIHtcblx0XHRcdFx0aWYoZS50eXBlID09PSAnbW91c2V1cCcpIHtcblx0XHRcdFx0XHRyZWxlYXNlUG9pbnQgPSB7eDogZS5wYWdlWCwgeTogZS5wYWdlWSwgdHlwZTonbW91c2UnfTtcblx0XHRcdFx0fSBlbHNlIGlmKGUuY2hhbmdlZFRvdWNoZXMgJiYgZS5jaGFuZ2VkVG91Y2hlc1swXSkge1xuXHRcdFx0XHRcdHJlbGVhc2VQb2ludCA9IHt4OiBlLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYLCB5OiBlLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZLCB0eXBlOid0b3VjaCd9O1xuXHRcdFx0XHR9XHRcdFxuXHRcdFx0fVxuXG5cdFx0XHRfc2hvdXQoJ3RvdWNoUmVsZWFzZScsIGUsIHJlbGVhc2VQb2ludCk7XG5cdFx0fVxuXG5cdFx0Ly8gRGlmZmVyZW5jZSBpbiB0aW1lIGJldHdlZW4gcmVsZWFzaW5nIG9mIHR3byBsYXN0IHRvdWNoIHBvaW50cyAoem9vbSBnZXN0dXJlKVxuXHRcdHZhciByZWxlYXNlVGltZURpZmYgPSAtMTtcblxuXHRcdC8vIEdlc3R1cmUgY29tcGxldGVkLCBubyBwb2ludGVycyBsZWZ0XG5cdFx0aWYobnVtUG9pbnRzID09PSAwKSB7XG5cdFx0XHRfaXNEcmFnZ2luZyA9IGZhbHNlO1xuXHRcdFx0ZnJhbWV3b3JrLnVuYmluZCh3aW5kb3csIF91cE1vdmVFdmVudHMsIHNlbGYpO1xuXG5cdFx0XHRfc3RvcERyYWdVcGRhdGVMb29wKCk7XG5cblx0XHRcdGlmKF9pc1pvb21pbmcpIHtcblx0XHRcdFx0Ly8gVHdvIHBvaW50cyByZWxlYXNlZCBhdCB0aGUgc2FtZSB0aW1lXG5cdFx0XHRcdHJlbGVhc2VUaW1lRGlmZiA9IDA7XG5cdFx0XHR9IGVsc2UgaWYoX2xhc3RSZWxlYXNlVGltZSAhPT0gLTEpIHtcblx0XHRcdFx0cmVsZWFzZVRpbWVEaWZmID0gX2dldEN1cnJlbnRUaW1lKCkgLSBfbGFzdFJlbGVhc2VUaW1lO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRfbGFzdFJlbGVhc2VUaW1lID0gbnVtUG9pbnRzID09PSAxID8gX2dldEN1cnJlbnRUaW1lKCkgOiAtMTtcblx0XHRcblx0XHRpZihyZWxlYXNlVGltZURpZmYgIT09IC0xICYmIHJlbGVhc2VUaW1lRGlmZiA8IDE1MCkge1xuXHRcdFx0Z2VzdHVyZVR5cGUgPSAnem9vbSc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGdlc3R1cmVUeXBlID0gJ3N3aXBlJztcblx0XHR9XG5cblx0XHRpZihfaXNab29taW5nICYmIG51bVBvaW50cyA8IDIpIHtcblx0XHRcdF9pc1pvb21pbmcgPSBmYWxzZTtcblxuXHRcdFx0Ly8gT25seSBzZWNvbmQgcG9pbnQgcmVsZWFzZWRcblx0XHRcdGlmKG51bVBvaW50cyA9PT0gMSkge1xuXHRcdFx0XHRnZXN0dXJlVHlwZSA9ICd6b29tUG9pbnRlclVwJztcblx0XHRcdH1cblx0XHRcdF9zaG91dCgnem9vbUdlc3R1cmVFbmRlZCcpO1xuXHRcdH1cblxuXHRcdF9jdXJyZW50UG9pbnRzID0gbnVsbDtcblx0XHRpZighX21vdmVkICYmICFfem9vbVN0YXJ0ZWQgJiYgIV9tYWluU2Nyb2xsQW5pbWF0aW5nICYmICFfdmVydGljYWxEcmFnSW5pdGlhdGVkKSB7XG5cdFx0XHQvLyBub3RoaW5nIHRvIGFuaW1hdGVcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFxuXHRcdF9zdG9wQWxsQW5pbWF0aW9ucygpO1xuXG5cdFx0XG5cdFx0aWYoIV9yZWxlYXNlQW5pbURhdGEpIHtcblx0XHRcdF9yZWxlYXNlQW5pbURhdGEgPSBfaW5pdERyYWdSZWxlYXNlQW5pbWF0aW9uRGF0YSgpO1xuXHRcdH1cblx0XHRcblx0XHRfcmVsZWFzZUFuaW1EYXRhLmNhbGN1bGF0ZVN3aXBlU3BlZWQoJ3gnKTtcblxuXG5cdFx0aWYoX3ZlcnRpY2FsRHJhZ0luaXRpYXRlZCkge1xuXG5cdFx0XHR2YXIgb3BhY2l0eVJhdGlvID0gX2NhbGN1bGF0ZVZlcnRpY2FsRHJhZ09wYWNpdHlSYXRpbygpO1xuXG5cdFx0XHRpZihvcGFjaXR5UmF0aW8gPCBfb3B0aW9ucy52ZXJ0aWNhbERyYWdSYW5nZSkge1xuXHRcdFx0XHRzZWxmLmNsb3NlKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgaW5pdGFsUGFuWSA9IF9wYW5PZmZzZXQueSxcblx0XHRcdFx0XHRpbml0aWFsQmdPcGFjaXR5ID0gX2JnT3BhY2l0eTtcblxuXHRcdFx0XHRfYW5pbWF0ZVByb3AoJ3ZlcnRpY2FsRHJhZycsIDAsIDEsIDMwMCwgZnJhbWV3b3JrLmVhc2luZy5jdWJpYy5vdXQsIGZ1bmN0aW9uKG5vdykge1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdF9wYW5PZmZzZXQueSA9IChzZWxmLmN1cnJJdGVtLmluaXRpYWxQb3NpdGlvbi55IC0gaW5pdGFsUGFuWSkgKiBub3cgKyBpbml0YWxQYW5ZO1xuXG5cdFx0XHRcdFx0X2FwcGx5QmdPcGFjaXR5KCAgKDEgLSBpbml0aWFsQmdPcGFjaXR5KSAqIG5vdyArIGluaXRpYWxCZ09wYWNpdHkgKTtcblx0XHRcdFx0XHRfYXBwbHlDdXJyZW50Wm9vbVBhbigpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRfc2hvdXQoJ29uVmVydGljYWxEcmFnJywgMSk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblxuXHRcdC8vIG1haW4gc2Nyb2xsIFxuXHRcdGlmKCAgKF9tYWluU2Nyb2xsU2hpZnRlZCB8fCBfbWFpblNjcm9sbEFuaW1hdGluZykgJiYgbnVtUG9pbnRzID09PSAwKSB7XG5cdFx0XHR2YXIgaXRlbUNoYW5nZWQgPSBfZmluaXNoU3dpcGVNYWluU2Nyb2xsR2VzdHVyZShnZXN0dXJlVHlwZSwgX3JlbGVhc2VBbmltRGF0YSk7XG5cdFx0XHRpZihpdGVtQ2hhbmdlZCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRnZXN0dXJlVHlwZSA9ICd6b29tUG9pbnRlclVwJztcblx0XHR9XG5cblx0XHQvLyBwcmV2ZW50IHpvb20vcGFuIGFuaW1hdGlvbiB3aGVuIG1haW4gc2Nyb2xsIGFuaW1hdGlvbiBydW5zXG5cdFx0aWYoX21haW5TY3JvbGxBbmltYXRpbmcpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0XG5cdFx0Ly8gQ29tcGxldGUgc2ltcGxlIHpvb20gZ2VzdHVyZSAocmVzZXQgem9vbSBsZXZlbCBpZiBpdCdzIG91dCBvZiB0aGUgYm91bmRzKSAgXG5cdFx0aWYoZ2VzdHVyZVR5cGUgIT09ICdzd2lwZScpIHtcblx0XHRcdF9jb21wbGV0ZVpvb21HZXN0dXJlKCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcblx0XHQvLyBDb21wbGV0ZSBwYW4gZ2VzdHVyZSBpZiBtYWluIHNjcm9sbCBpcyBub3Qgc2hpZnRlZCwgYW5kIGl0J3MgcG9zc2libGUgdG8gcGFuIGN1cnJlbnQgaW1hZ2Vcblx0XHRpZighX21haW5TY3JvbGxTaGlmdGVkICYmIF9jdXJyWm9vbUxldmVsID4gc2VsZi5jdXJySXRlbS5maXRSYXRpbykge1xuXHRcdFx0X2NvbXBsZXRlUGFuR2VzdHVyZShfcmVsZWFzZUFuaW1EYXRhKTtcblx0XHR9XG5cdH0sXG5cblxuXHQvLyBSZXR1cm5zIG9iamVjdCB3aXRoIGRhdGEgYWJvdXQgZ2VzdHVyZVxuXHQvLyBJdCdzIGNyZWF0ZWQgb25seSBvbmNlIGFuZCB0aGVuIHJldXNlZFxuXHRfaW5pdERyYWdSZWxlYXNlQW5pbWF0aW9uRGF0YSAgPSBmdW5jdGlvbigpIHtcblx0XHQvLyB0ZW1wIGxvY2FsIHZhcnNcblx0XHR2YXIgbGFzdEZsaWNrRHVyYXRpb24sXG5cdFx0XHR0ZW1wUmVsZWFzZVBvcztcblxuXHRcdC8vIHMgPSB0aGlzXG5cdFx0dmFyIHMgPSB7XG5cdFx0XHRsYXN0RmxpY2tPZmZzZXQ6IHt9LFxuXHRcdFx0bGFzdEZsaWNrRGlzdDoge30sXG5cdFx0XHRsYXN0RmxpY2tTcGVlZDoge30sXG5cdFx0XHRzbG93RG93blJhdGlvOiAge30sXG5cdFx0XHRzbG93RG93blJhdGlvUmV2ZXJzZTogIHt9LFxuXHRcdFx0c3BlZWREZWNlbGVyYXRpb25SYXRpbzogIHt9LFxuXHRcdFx0c3BlZWREZWNlbGVyYXRpb25SYXRpb0FiczogIHt9LFxuXHRcdFx0ZGlzdGFuY2VPZmZzZXQ6ICB7fSxcblx0XHRcdGJhY2tBbmltRGVzdGluYXRpb246IHt9LFxuXHRcdFx0YmFja0FuaW1TdGFydGVkOiB7fSxcblx0XHRcdGNhbGN1bGF0ZVN3aXBlU3BlZWQ6IGZ1bmN0aW9uKGF4aXMpIHtcblx0XHRcdFx0XG5cblx0XHRcdFx0aWYoIF9wb3NQb2ludHMubGVuZ3RoID4gMSkge1xuXHRcdFx0XHRcdGxhc3RGbGlja0R1cmF0aW9uID0gX2dldEN1cnJlbnRUaW1lKCkgLSBfZ2VzdHVyZUNoZWNrU3BlZWRUaW1lICsgNTA7XG5cdFx0XHRcdFx0dGVtcFJlbGVhc2VQb3MgPSBfcG9zUG9pbnRzW19wb3NQb2ludHMubGVuZ3RoLTJdW2F4aXNdO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGxhc3RGbGlja0R1cmF0aW9uID0gX2dldEN1cnJlbnRUaW1lKCkgLSBfZ2VzdHVyZVN0YXJ0VGltZTsgLy8gdG90YWwgZ2VzdHVyZSBkdXJhdGlvblxuXHRcdFx0XHRcdHRlbXBSZWxlYXNlUG9zID0gX3N0YXJ0UG9pbnRbYXhpc107XG5cdFx0XHRcdH1cblx0XHRcdFx0cy5sYXN0RmxpY2tPZmZzZXRbYXhpc10gPSBfY3VyclBvaW50W2F4aXNdIC0gdGVtcFJlbGVhc2VQb3M7XG5cdFx0XHRcdHMubGFzdEZsaWNrRGlzdFtheGlzXSA9IE1hdGguYWJzKHMubGFzdEZsaWNrT2Zmc2V0W2F4aXNdKTtcblx0XHRcdFx0aWYocy5sYXN0RmxpY2tEaXN0W2F4aXNdID4gMjApIHtcblx0XHRcdFx0XHRzLmxhc3RGbGlja1NwZWVkW2F4aXNdID0gcy5sYXN0RmxpY2tPZmZzZXRbYXhpc10gLyBsYXN0RmxpY2tEdXJhdGlvbjtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzLmxhc3RGbGlja1NwZWVkW2F4aXNdID0gMDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiggTWF0aC5hYnMocy5sYXN0RmxpY2tTcGVlZFtheGlzXSkgPCAwLjEgKSB7XG5cdFx0XHRcdFx0cy5sYXN0RmxpY2tTcGVlZFtheGlzXSA9IDA7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdHMuc2xvd0Rvd25SYXRpb1theGlzXSA9IDAuOTU7XG5cdFx0XHRcdHMuc2xvd0Rvd25SYXRpb1JldmVyc2VbYXhpc10gPSAxIC0gcy5zbG93RG93blJhdGlvW2F4aXNdO1xuXHRcdFx0XHRzLnNwZWVkRGVjZWxlcmF0aW9uUmF0aW9bYXhpc10gPSAxO1xuXHRcdFx0fSxcblxuXHRcdFx0Y2FsY3VsYXRlT3ZlckJvdW5kc0FuaW1PZmZzZXQ6IGZ1bmN0aW9uKGF4aXMsIHNwZWVkKSB7XG5cdFx0XHRcdGlmKCFzLmJhY2tBbmltU3RhcnRlZFtheGlzXSkge1xuXG5cdFx0XHRcdFx0aWYoX3Bhbk9mZnNldFtheGlzXSA+IF9jdXJyUGFuQm91bmRzLm1pbltheGlzXSkge1xuXHRcdFx0XHRcdFx0cy5iYWNrQW5pbURlc3RpbmF0aW9uW2F4aXNdID0gX2N1cnJQYW5Cb3VuZHMubWluW2F4aXNdO1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0fSBlbHNlIGlmKF9wYW5PZmZzZXRbYXhpc10gPCBfY3VyclBhbkJvdW5kcy5tYXhbYXhpc10pIHtcblx0XHRcdFx0XHRcdHMuYmFja0FuaW1EZXN0aW5hdGlvbltheGlzXSA9IF9jdXJyUGFuQm91bmRzLm1heFtheGlzXTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZihzLmJhY2tBbmltRGVzdGluYXRpb25bYXhpc10gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdFx0cy5zbG93RG93blJhdGlvW2F4aXNdID0gMC43O1xuXHRcdFx0XHRcdFx0cy5zbG93RG93blJhdGlvUmV2ZXJzZVtheGlzXSA9IDEgLSBzLnNsb3dEb3duUmF0aW9bYXhpc107XG5cdFx0XHRcdFx0XHRpZihzLnNwZWVkRGVjZWxlcmF0aW9uUmF0aW9BYnNbYXhpc10gPCAwLjA1KSB7XG5cblx0XHRcdFx0XHRcdFx0cy5sYXN0RmxpY2tTcGVlZFtheGlzXSA9IDA7XG5cdFx0XHRcdFx0XHRcdHMuYmFja0FuaW1TdGFydGVkW2F4aXNdID0gdHJ1ZTtcblxuXHRcdFx0XHRcdFx0XHRfYW5pbWF0ZVByb3AoJ2JvdW5jZVpvb21QYW4nK2F4aXMsX3Bhbk9mZnNldFtheGlzXSwgXG5cdFx0XHRcdFx0XHRcdFx0cy5iYWNrQW5pbURlc3RpbmF0aW9uW2F4aXNdLCBcblx0XHRcdFx0XHRcdFx0XHRzcGVlZCB8fCAzMDAsIFxuXHRcdFx0XHRcdFx0XHRcdGZyYW1ld29yay5lYXNpbmcuc2luZS5vdXQsIFxuXHRcdFx0XHRcdFx0XHRcdGZ1bmN0aW9uKHBvcykge1xuXHRcdFx0XHRcdFx0XHRcdFx0X3Bhbk9mZnNldFtheGlzXSA9IHBvcztcblx0XHRcdFx0XHRcdFx0XHRcdF9hcHBseUN1cnJlbnRab29tUGFuKCk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQpO1xuXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXG5cdFx0XHQvLyBSZWR1Y2VzIHRoZSBzcGVlZCBieSBzbG93RG93blJhdGlvIChwZXIgMTBtcylcblx0XHRcdGNhbGN1bGF0ZUFuaW1PZmZzZXQ6IGZ1bmN0aW9uKGF4aXMpIHtcblx0XHRcdFx0aWYoIXMuYmFja0FuaW1TdGFydGVkW2F4aXNdKSB7XG5cdFx0XHRcdFx0cy5zcGVlZERlY2VsZXJhdGlvblJhdGlvW2F4aXNdID0gcy5zcGVlZERlY2VsZXJhdGlvblJhdGlvW2F4aXNdICogKHMuc2xvd0Rvd25SYXRpb1theGlzXSArIFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cy5zbG93RG93blJhdGlvUmV2ZXJzZVtheGlzXSAtIFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cy5zbG93RG93blJhdGlvUmV2ZXJzZVtheGlzXSAqIHMudGltZURpZmYgLyAxMCk7XG5cblx0XHRcdFx0XHRzLnNwZWVkRGVjZWxlcmF0aW9uUmF0aW9BYnNbYXhpc10gPSBNYXRoLmFicyhzLmxhc3RGbGlja1NwZWVkW2F4aXNdICogcy5zcGVlZERlY2VsZXJhdGlvblJhdGlvW2F4aXNdKTtcblx0XHRcdFx0XHRzLmRpc3RhbmNlT2Zmc2V0W2F4aXNdID0gcy5sYXN0RmxpY2tTcGVlZFtheGlzXSAqIHMuc3BlZWREZWNlbGVyYXRpb25SYXRpb1theGlzXSAqIHMudGltZURpZmY7XG5cdFx0XHRcdFx0X3Bhbk9mZnNldFtheGlzXSArPSBzLmRpc3RhbmNlT2Zmc2V0W2F4aXNdO1xuXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cblx0XHRcdHBhbkFuaW1Mb29wOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKCBfYW5pbWF0aW9ucy56b29tUGFuICkge1xuXHRcdFx0XHRcdF9hbmltYXRpb25zLnpvb21QYW4ucmFmID0gX3JlcXVlc3RBRihzLnBhbkFuaW1Mb29wKTtcblxuXHRcdFx0XHRcdHMubm93ID0gX2dldEN1cnJlbnRUaW1lKCk7XG5cdFx0XHRcdFx0cy50aW1lRGlmZiA9IHMubm93IC0gcy5sYXN0Tm93O1xuXHRcdFx0XHRcdHMubGFzdE5vdyA9IHMubm93O1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdHMuY2FsY3VsYXRlQW5pbU9mZnNldCgneCcpO1xuXHRcdFx0XHRcdHMuY2FsY3VsYXRlQW5pbU9mZnNldCgneScpO1xuXG5cdFx0XHRcdFx0X2FwcGx5Q3VycmVudFpvb21QYW4oKTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRzLmNhbGN1bGF0ZU92ZXJCb3VuZHNBbmltT2Zmc2V0KCd4Jyk7XG5cdFx0XHRcdFx0cy5jYWxjdWxhdGVPdmVyQm91bmRzQW5pbU9mZnNldCgneScpO1xuXG5cblx0XHRcdFx0XHRpZiAocy5zcGVlZERlY2VsZXJhdGlvblJhdGlvQWJzLnggPCAwLjA1ICYmIHMuc3BlZWREZWNlbGVyYXRpb25SYXRpb0Ficy55IDwgMC4wNSkge1xuXG5cdFx0XHRcdFx0XHQvLyByb3VuZCBwYW4gcG9zaXRpb25cblx0XHRcdFx0XHRcdF9wYW5PZmZzZXQueCA9IE1hdGgucm91bmQoX3Bhbk9mZnNldC54KTtcblx0XHRcdFx0XHRcdF9wYW5PZmZzZXQueSA9IE1hdGgucm91bmQoX3Bhbk9mZnNldC55KTtcblx0XHRcdFx0XHRcdF9hcHBseUN1cnJlbnRab29tUGFuKCk7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdF9zdG9wQW5pbWF0aW9uKCd6b29tUGFuJyk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdH1cblx0XHR9O1xuXHRcdHJldHVybiBzO1xuXHR9LFxuXG5cdF9jb21wbGV0ZVBhbkdlc3R1cmUgPSBmdW5jdGlvbihhbmltRGF0YSkge1xuXHRcdC8vIGNhbGN1bGF0ZSBzd2lwZSBzcGVlZCBmb3IgWSBheGlzIChwYWFubmluZylcblx0XHRhbmltRGF0YS5jYWxjdWxhdGVTd2lwZVNwZWVkKCd5Jyk7XG5cblx0XHRfY3VyclBhbkJvdW5kcyA9IHNlbGYuY3Vyckl0ZW0uYm91bmRzO1xuXHRcdFxuXHRcdGFuaW1EYXRhLmJhY2tBbmltRGVzdGluYXRpb24gPSB7fTtcblx0XHRhbmltRGF0YS5iYWNrQW5pbVN0YXJ0ZWQgPSB7fTtcblxuXHRcdC8vIEF2b2lkIGFjY2VsZXJhdGlvbiBhbmltYXRpb24gaWYgc3BlZWQgaXMgdG9vIGxvd1xuXHRcdGlmKE1hdGguYWJzKGFuaW1EYXRhLmxhc3RGbGlja1NwZWVkLngpIDw9IDAuMDUgJiYgTWF0aC5hYnMoYW5pbURhdGEubGFzdEZsaWNrU3BlZWQueSkgPD0gMC4wNSApIHtcblx0XHRcdGFuaW1EYXRhLnNwZWVkRGVjZWxlcmF0aW9uUmF0aW9BYnMueCA9IGFuaW1EYXRhLnNwZWVkRGVjZWxlcmF0aW9uUmF0aW9BYnMueSA9IDA7XG5cblx0XHRcdC8vIFJ1biBwYW4gZHJhZyByZWxlYXNlIGFuaW1hdGlvbi4gRS5nLiBpZiB5b3UgZHJhZyBpbWFnZSBhbmQgcmVsZWFzZSBmaW5nZXIgd2l0aG91dCBtb21lbnR1bS5cblx0XHRcdGFuaW1EYXRhLmNhbGN1bGF0ZU92ZXJCb3VuZHNBbmltT2Zmc2V0KCd4Jyk7XG5cdFx0XHRhbmltRGF0YS5jYWxjdWxhdGVPdmVyQm91bmRzQW5pbU9mZnNldCgneScpO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0Ly8gQW5pbWF0aW9uIGxvb3AgdGhhdCBjb250cm9scyB0aGUgYWNjZWxlcmF0aW9uIGFmdGVyIHBhbiBnZXN0dXJlIGVuZHNcblx0XHRfcmVnaXN0ZXJTdGFydEFuaW1hdGlvbignem9vbVBhbicpO1xuXHRcdGFuaW1EYXRhLmxhc3ROb3cgPSBfZ2V0Q3VycmVudFRpbWUoKTtcblx0XHRhbmltRGF0YS5wYW5BbmltTG9vcCgpO1xuXHR9LFxuXG5cblx0X2ZpbmlzaFN3aXBlTWFpblNjcm9sbEdlc3R1cmUgPSBmdW5jdGlvbihnZXN0dXJlVHlwZSwgX3JlbGVhc2VBbmltRGF0YSkge1xuXHRcdHZhciBpdGVtQ2hhbmdlZDtcblx0XHRpZighX21haW5TY3JvbGxBbmltYXRpbmcpIHtcblx0XHRcdF9jdXJyWm9vbWVkSXRlbUluZGV4ID0gX2N1cnJlbnRJdGVtSW5kZXg7XG5cdFx0fVxuXG5cblx0XHRcblx0XHR2YXIgaXRlbXNEaWZmO1xuXG5cdFx0aWYoZ2VzdHVyZVR5cGUgPT09ICdzd2lwZScpIHtcblx0XHRcdHZhciB0b3RhbFNoaWZ0RGlzdCA9IF9jdXJyUG9pbnQueCAtIF9zdGFydFBvaW50LngsXG5cdFx0XHRcdGlzRmFzdExhc3RGbGljayA9IF9yZWxlYXNlQW5pbURhdGEubGFzdEZsaWNrRGlzdC54IDwgMTA7XG5cblx0XHRcdC8vIGlmIGNvbnRhaW5lciBpcyBzaGlmdGVkIGZvciBtb3JlIHRoYW4gTUlOX1NXSVBFX0RJU1RBTkNFLCBcblx0XHRcdC8vIGFuZCBsYXN0IGZsaWNrIGdlc3R1cmUgd2FzIGluIHJpZ2h0IGRpcmVjdGlvblxuXHRcdFx0aWYodG90YWxTaGlmdERpc3QgPiBNSU5fU1dJUEVfRElTVEFOQ0UgJiYgXG5cdFx0XHRcdChpc0Zhc3RMYXN0RmxpY2sgfHwgX3JlbGVhc2VBbmltRGF0YS5sYXN0RmxpY2tPZmZzZXQueCA+IDIwKSApIHtcblx0XHRcdFx0Ly8gZ28gdG8gcHJldiBpdGVtXG5cdFx0XHRcdGl0ZW1zRGlmZiA9IC0xO1xuXHRcdFx0fSBlbHNlIGlmKHRvdGFsU2hpZnREaXN0IDwgLU1JTl9TV0lQRV9ESVNUQU5DRSAmJiBcblx0XHRcdFx0KGlzRmFzdExhc3RGbGljayB8fCBfcmVsZWFzZUFuaW1EYXRhLmxhc3RGbGlja09mZnNldC54IDwgLTIwKSApIHtcblx0XHRcdFx0Ly8gZ28gdG8gbmV4dCBpdGVtXG5cdFx0XHRcdGl0ZW1zRGlmZiA9IDE7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dmFyIG5leHRDaXJjbGU7XG5cblx0XHRpZihpdGVtc0RpZmYpIHtcblx0XHRcdFxuXHRcdFx0X2N1cnJlbnRJdGVtSW5kZXggKz0gaXRlbXNEaWZmO1xuXG5cdFx0XHRpZihfY3VycmVudEl0ZW1JbmRleCA8IDApIHtcblx0XHRcdFx0X2N1cnJlbnRJdGVtSW5kZXggPSBfb3B0aW9ucy5sb29wID8gX2dldE51bUl0ZW1zKCktMSA6IDA7XG5cdFx0XHRcdG5leHRDaXJjbGUgPSB0cnVlO1xuXHRcdFx0fSBlbHNlIGlmKF9jdXJyZW50SXRlbUluZGV4ID49IF9nZXROdW1JdGVtcygpKSB7XG5cdFx0XHRcdF9jdXJyZW50SXRlbUluZGV4ID0gX29wdGlvbnMubG9vcCA/IDAgOiBfZ2V0TnVtSXRlbXMoKS0xO1xuXHRcdFx0XHRuZXh0Q2lyY2xlID0gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIW5leHRDaXJjbGUgfHwgX29wdGlvbnMubG9vcCkge1xuXHRcdFx0XHRfaW5kZXhEaWZmICs9IGl0ZW1zRGlmZjtcblx0XHRcdFx0X2N1cnJQb3NpdGlvbkluZGV4IC09IGl0ZW1zRGlmZjtcblx0XHRcdFx0aXRlbUNoYW5nZWQgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0XG5cblx0XHRcdFxuXHRcdH1cblxuXHRcdHZhciBhbmltYXRlVG9YID0gX3NsaWRlU2l6ZS54ICogX2N1cnJQb3NpdGlvbkluZGV4O1xuXHRcdHZhciBhbmltYXRlVG9EaXN0ID0gTWF0aC5hYnMoIGFuaW1hdGVUb1ggLSBfbWFpblNjcm9sbFBvcy54ICk7XG5cdFx0dmFyIGZpbmlzaEFuaW1EdXJhdGlvbjtcblxuXG5cdFx0aWYoIWl0ZW1DaGFuZ2VkICYmIGFuaW1hdGVUb1ggPiBfbWFpblNjcm9sbFBvcy54ICE9PSBfcmVsZWFzZUFuaW1EYXRhLmxhc3RGbGlja1NwZWVkLnggPiAwKSB7XG5cdFx0XHQvLyBcInJldHVybiB0byBjdXJyZW50XCIgZHVyYXRpb24sIGUuZy4gd2hlbiBkcmFnZ2luZyBmcm9tIHNsaWRlIDAgdG8gLTFcblx0XHRcdGZpbmlzaEFuaW1EdXJhdGlvbiA9IDMzMzsgXG5cdFx0fSBlbHNlIHtcblx0XHRcdGZpbmlzaEFuaW1EdXJhdGlvbiA9IE1hdGguYWJzKF9yZWxlYXNlQW5pbURhdGEubGFzdEZsaWNrU3BlZWQueCkgPiAwID8gXG5cdFx0XHRcdFx0XHRcdFx0XHRhbmltYXRlVG9EaXN0IC8gTWF0aC5hYnMoX3JlbGVhc2VBbmltRGF0YS5sYXN0RmxpY2tTcGVlZC54KSA6IFxuXHRcdFx0XHRcdFx0XHRcdFx0MzMzO1xuXG5cdFx0XHRmaW5pc2hBbmltRHVyYXRpb24gPSBNYXRoLm1pbihmaW5pc2hBbmltRHVyYXRpb24sIDQwMCk7XG5cdFx0XHRmaW5pc2hBbmltRHVyYXRpb24gPSBNYXRoLm1heChmaW5pc2hBbmltRHVyYXRpb24sIDI1MCk7XG5cdFx0fVxuXG5cdFx0aWYoX2N1cnJab29tZWRJdGVtSW5kZXggPT09IF9jdXJyZW50SXRlbUluZGV4KSB7XG5cdFx0XHRpdGVtQ2hhbmdlZCA9IGZhbHNlO1xuXHRcdH1cblx0XHRcblx0XHRfbWFpblNjcm9sbEFuaW1hdGluZyA9IHRydWU7XG5cdFx0XG5cdFx0X3Nob3V0KCdtYWluU2Nyb2xsQW5pbVN0YXJ0Jyk7XG5cblx0XHRfYW5pbWF0ZVByb3AoJ21haW5TY3JvbGwnLCBfbWFpblNjcm9sbFBvcy54LCBhbmltYXRlVG9YLCBmaW5pc2hBbmltRHVyYXRpb24sIGZyYW1ld29yay5lYXNpbmcuY3ViaWMub3V0LCBcblx0XHRcdF9tb3ZlTWFpblNjcm9sbCxcblx0XHRcdGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRfc3RvcEFsbEFuaW1hdGlvbnMoKTtcblx0XHRcdFx0X21haW5TY3JvbGxBbmltYXRpbmcgPSBmYWxzZTtcblx0XHRcdFx0X2N1cnJab29tZWRJdGVtSW5kZXggPSAtMTtcblx0XHRcdFx0XG5cdFx0XHRcdGlmKGl0ZW1DaGFuZ2VkIHx8IF9jdXJyWm9vbWVkSXRlbUluZGV4ICE9PSBfY3VycmVudEl0ZW1JbmRleCkge1xuXHRcdFx0XHRcdHNlbGYudXBkYXRlQ3Vyckl0ZW0oKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0X3Nob3V0KCdtYWluU2Nyb2xsQW5pbUNvbXBsZXRlJyk7XG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdGlmKGl0ZW1DaGFuZ2VkKSB7XG5cdFx0XHRzZWxmLnVwZGF0ZUN1cnJJdGVtKHRydWUpO1xuXHRcdH1cblxuXHRcdHJldHVybiBpdGVtQ2hhbmdlZDtcblx0fSxcblxuXHRfY2FsY3VsYXRlWm9vbUxldmVsID0gZnVuY3Rpb24odG91Y2hlc0Rpc3RhbmNlKSB7XG5cdFx0cmV0dXJuICAxIC8gX3N0YXJ0UG9pbnRzRGlzdGFuY2UgKiB0b3VjaGVzRGlzdGFuY2UgKiBfc3RhcnRab29tTGV2ZWw7XG5cdH0sXG5cblx0Ly8gUmVzZXRzIHpvb20gaWYgaXQncyBvdXQgb2YgYm91bmRzXG5cdF9jb21wbGV0ZVpvb21HZXN0dXJlID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGRlc3Rab29tTGV2ZWwgPSBfY3Vyclpvb21MZXZlbCxcblx0XHRcdG1pblpvb21MZXZlbCA9IF9nZXRNaW5ab29tTGV2ZWwoKSxcblx0XHRcdG1heFpvb21MZXZlbCA9IF9nZXRNYXhab29tTGV2ZWwoKTtcblxuXHRcdGlmICggX2N1cnJab29tTGV2ZWwgPCBtaW5ab29tTGV2ZWwgKSB7XG5cdFx0XHRkZXN0Wm9vbUxldmVsID0gbWluWm9vbUxldmVsO1xuXHRcdH0gZWxzZSBpZiAoIF9jdXJyWm9vbUxldmVsID4gbWF4Wm9vbUxldmVsICkge1xuXHRcdFx0ZGVzdFpvb21MZXZlbCA9IG1heFpvb21MZXZlbDtcblx0XHR9XG5cblx0XHR2YXIgZGVzdE9wYWNpdHkgPSAxLFxuXHRcdFx0b25VcGRhdGUsXG5cdFx0XHRpbml0aWFsT3BhY2l0eSA9IF9iZ09wYWNpdHk7XG5cblx0XHRpZihfb3BhY2l0eUNoYW5nZWQgJiYgIV9pc1pvb21pbmdJbiAmJiAhX3dhc092ZXJJbml0aWFsWm9vbSAmJiBfY3Vyclpvb21MZXZlbCA8IG1pblpvb21MZXZlbCkge1xuXHRcdFx0Ly9fY2xvc2VkQnlTY3JvbGwgPSB0cnVlO1xuXHRcdFx0c2VsZi5jbG9zZSgpO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0aWYoX29wYWNpdHlDaGFuZ2VkKSB7XG5cdFx0XHRvblVwZGF0ZSA9IGZ1bmN0aW9uKG5vdykge1xuXHRcdFx0XHRfYXBwbHlCZ09wYWNpdHkoICAoZGVzdE9wYWNpdHkgLSBpbml0aWFsT3BhY2l0eSkgKiBub3cgKyBpbml0aWFsT3BhY2l0eSApO1xuXHRcdFx0fTtcblx0XHR9XG5cblx0XHRzZWxmLnpvb21UbyhkZXN0Wm9vbUxldmVsLCAwLCAyMDAsICBmcmFtZXdvcmsuZWFzaW5nLmN1YmljLm91dCwgb25VcGRhdGUpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9O1xuXG5cbl9yZWdpc3Rlck1vZHVsZSgnR2VzdHVyZXMnLCB7XG5cdHB1YmxpY01ldGhvZHM6IHtcblxuXHRcdGluaXRHZXN0dXJlczogZnVuY3Rpb24oKSB7XG5cblx0XHRcdC8vIGhlbHBlciBmdW5jdGlvbiB0aGF0IGJ1aWxkcyB0b3VjaC9wb2ludGVyL21vdXNlIGV2ZW50c1xuXHRcdFx0dmFyIGFkZEV2ZW50TmFtZXMgPSBmdW5jdGlvbihwcmVmLCBkb3duLCBtb3ZlLCB1cCwgY2FuY2VsKSB7XG5cdFx0XHRcdF9kcmFnU3RhcnRFdmVudCA9IHByZWYgKyBkb3duO1xuXHRcdFx0XHRfZHJhZ01vdmVFdmVudCA9IHByZWYgKyBtb3ZlO1xuXHRcdFx0XHRfZHJhZ0VuZEV2ZW50ID0gcHJlZiArIHVwO1xuXHRcdFx0XHRpZihjYW5jZWwpIHtcblx0XHRcdFx0XHRfZHJhZ0NhbmNlbEV2ZW50ID0gcHJlZiArIGNhbmNlbDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRfZHJhZ0NhbmNlbEV2ZW50ID0gJyc7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRcdF9wb2ludGVyRXZlbnRFbmFibGVkID0gX2ZlYXR1cmVzLnBvaW50ZXJFdmVudDtcblx0XHRcdGlmKF9wb2ludGVyRXZlbnRFbmFibGVkICYmIF9mZWF0dXJlcy50b3VjaCkge1xuXHRcdFx0XHQvLyB3ZSBkb24ndCBuZWVkIHRvdWNoIGV2ZW50cywgaWYgYnJvd3NlciBzdXBwb3J0cyBwb2ludGVyIGV2ZW50c1xuXHRcdFx0XHRfZmVhdHVyZXMudG91Y2ggPSBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0aWYoX3BvaW50ZXJFdmVudEVuYWJsZWQpIHtcblx0XHRcdFx0aWYobmF2aWdhdG9yLnBvaW50ZXJFbmFibGVkKSB7XG5cdFx0XHRcdFx0YWRkRXZlbnROYW1lcygncG9pbnRlcicsICdkb3duJywgJ21vdmUnLCAndXAnLCAnY2FuY2VsJyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gSUUxMCBwb2ludGVyIGV2ZW50cyBhcmUgY2FzZS1zZW5zaXRpdmVcblx0XHRcdFx0XHRhZGRFdmVudE5hbWVzKCdNU1BvaW50ZXInLCAnRG93bicsICdNb3ZlJywgJ1VwJywgJ0NhbmNlbCcpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYoX2ZlYXR1cmVzLnRvdWNoKSB7XG5cdFx0XHRcdGFkZEV2ZW50TmFtZXMoJ3RvdWNoJywgJ3N0YXJ0JywgJ21vdmUnLCAnZW5kJywgJ2NhbmNlbCcpO1xuXHRcdFx0XHRfbGlrZWx5VG91Y2hEZXZpY2UgPSB0cnVlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YWRkRXZlbnROYW1lcygnbW91c2UnLCAnZG93bicsICdtb3ZlJywgJ3VwJyk7XHRcblx0XHRcdH1cblxuXHRcdFx0X3VwTW92ZUV2ZW50cyA9IF9kcmFnTW92ZUV2ZW50ICsgJyAnICsgX2RyYWdFbmRFdmVudCAgKyAnICcgKyAgX2RyYWdDYW5jZWxFdmVudDtcblx0XHRcdF9kb3duRXZlbnRzID0gX2RyYWdTdGFydEV2ZW50O1xuXG5cdFx0XHRpZihfcG9pbnRlckV2ZW50RW5hYmxlZCAmJiAhX2xpa2VseVRvdWNoRGV2aWNlKSB7XG5cdFx0XHRcdF9saWtlbHlUb3VjaERldmljZSA9IChuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgPiAxKSB8fCAobmF2aWdhdG9yLm1zTWF4VG91Y2hQb2ludHMgPiAxKTtcblx0XHRcdH1cblx0XHRcdC8vIG1ha2UgdmFyaWFibGUgcHVibGljXG5cdFx0XHRzZWxmLmxpa2VseVRvdWNoRGV2aWNlID0gX2xpa2VseVRvdWNoRGV2aWNlOyBcblx0XHRcdFxuXHRcdFx0X2dsb2JhbEV2ZW50SGFuZGxlcnNbX2RyYWdTdGFydEV2ZW50XSA9IF9vbkRyYWdTdGFydDtcblx0XHRcdF9nbG9iYWxFdmVudEhhbmRsZXJzW19kcmFnTW92ZUV2ZW50XSA9IF9vbkRyYWdNb3ZlO1xuXHRcdFx0X2dsb2JhbEV2ZW50SGFuZGxlcnNbX2RyYWdFbmRFdmVudF0gPSBfb25EcmFnUmVsZWFzZTsgLy8gdGhlIEtyYWtlblxuXG5cdFx0XHRpZihfZHJhZ0NhbmNlbEV2ZW50KSB7XG5cdFx0XHRcdF9nbG9iYWxFdmVudEhhbmRsZXJzW19kcmFnQ2FuY2VsRXZlbnRdID0gX2dsb2JhbEV2ZW50SGFuZGxlcnNbX2RyYWdFbmRFdmVudF07XG5cdFx0XHR9XG5cblx0XHRcdC8vIEJpbmQgbW91c2UgZXZlbnRzIG9uIGRldmljZSB3aXRoIGRldGVjdGVkIGhhcmR3YXJlIHRvdWNoIHN1cHBvcnQsIGluIGNhc2UgaXQgc3VwcG9ydHMgbXVsdGlwbGUgdHlwZXMgb2YgaW5wdXQuXG5cdFx0XHRpZihfZmVhdHVyZXMudG91Y2gpIHtcblx0XHRcdFx0X2Rvd25FdmVudHMgKz0gJyBtb3VzZWRvd24nO1xuXHRcdFx0XHRfdXBNb3ZlRXZlbnRzICs9ICcgbW91c2Vtb3ZlIG1vdXNldXAnO1xuXHRcdFx0XHRfZ2xvYmFsRXZlbnRIYW5kbGVycy5tb3VzZWRvd24gPSBfZ2xvYmFsRXZlbnRIYW5kbGVyc1tfZHJhZ1N0YXJ0RXZlbnRdO1xuXHRcdFx0XHRfZ2xvYmFsRXZlbnRIYW5kbGVycy5tb3VzZW1vdmUgPSBfZ2xvYmFsRXZlbnRIYW5kbGVyc1tfZHJhZ01vdmVFdmVudF07XG5cdFx0XHRcdF9nbG9iYWxFdmVudEhhbmRsZXJzLm1vdXNldXAgPSBfZ2xvYmFsRXZlbnRIYW5kbGVyc1tfZHJhZ0VuZEV2ZW50XTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIV9saWtlbHlUb3VjaERldmljZSkge1xuXHRcdFx0XHQvLyBkb24ndCBhbGxvdyBwYW4gdG8gbmV4dCBzbGlkZSBmcm9tIHpvb21lZCBzdGF0ZSBvbiBEZXNrdG9wXG5cdFx0XHRcdF9vcHRpb25zLmFsbG93UGFuVG9OZXh0ID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdH1cbn0pO1xuXG5cbi8qPj5nZXN0dXJlcyovXG5cbi8qPj5zaG93LWhpZGUtdHJhbnNpdGlvbiovXG4vKipcbiAqIHNob3ctaGlkZS10cmFuc2l0aW9uLmpzOlxuICpcbiAqIE1hbmFnZXMgaW5pdGlhbCBvcGVuaW5nIG9yIGNsb3NpbmcgdHJhbnNpdGlvbi5cbiAqXG4gKiBJZiB5b3UncmUgbm90IHBsYW5uaW5nIHRvIHVzZSB0cmFuc2l0aW9uIGZvciBnYWxsZXJ5IGF0IGFsbCxcbiAqIHlvdSBtYXkgc2V0IG9wdGlvbnMgaGlkZUFuaW1hdGlvbkR1cmF0aW9uIGFuZCBzaG93QW5pbWF0aW9uRHVyYXRpb24gdG8gMCxcbiAqIGFuZCBqdXN0IGRlbGV0ZSBzdGFydEFuaW1hdGlvbiBmdW5jdGlvbi5cbiAqIFxuICovXG5cblxudmFyIF9zaG93T3JIaWRlVGltZW91dCxcblx0X3Nob3dPckhpZGUgPSBmdW5jdGlvbihpdGVtLCBpbWcsIG91dCwgY29tcGxldGVGbikge1xuXG5cdFx0aWYoX3Nob3dPckhpZGVUaW1lb3V0KSB7XG5cdFx0XHRjbGVhclRpbWVvdXQoX3Nob3dPckhpZGVUaW1lb3V0KTtcblx0XHR9XG5cblx0XHRfaW5pdGlhbFpvb21SdW5uaW5nID0gdHJ1ZTtcblx0XHRfaW5pdGlhbENvbnRlbnRTZXQgPSB0cnVlO1xuXHRcdFxuXHRcdC8vIGRpbWVuc2lvbnMgb2Ygc21hbGwgdGh1bWJuYWlsIHt4Oix5Oix3On0uXG5cdFx0Ly8gSGVpZ2h0IGlzIG9wdGlvbmFsLCBhcyBjYWxjdWxhdGVkIGJhc2VkIG9uIGxhcmdlIGltYWdlLlxuXHRcdHZhciB0aHVtYkJvdW5kczsgXG5cdFx0aWYoaXRlbS5pbml0aWFsTGF5b3V0KSB7XG5cdFx0XHR0aHVtYkJvdW5kcyA9IGl0ZW0uaW5pdGlhbExheW91dDtcblx0XHRcdGl0ZW0uaW5pdGlhbExheW91dCA9IG51bGw7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRodW1iQm91bmRzID0gX29wdGlvbnMuZ2V0VGh1bWJCb3VuZHNGbiAmJiBfb3B0aW9ucy5nZXRUaHVtYkJvdW5kc0ZuKF9jdXJyZW50SXRlbUluZGV4KTtcblx0XHR9XG5cblx0XHR2YXIgZHVyYXRpb24gPSBvdXQgPyBfb3B0aW9ucy5oaWRlQW5pbWF0aW9uRHVyYXRpb24gOiBfb3B0aW9ucy5zaG93QW5pbWF0aW9uRHVyYXRpb247XG5cblx0XHR2YXIgb25Db21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0X3N0b3BBbmltYXRpb24oJ2luaXRpYWxab29tJyk7XG5cdFx0XHRpZighb3V0KSB7XG5cdFx0XHRcdF9hcHBseUJnT3BhY2l0eSgxKTtcblx0XHRcdFx0aWYoaW1nKSB7XG5cdFx0XHRcdFx0aW1nLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGZyYW1ld29yay5hZGRDbGFzcyh0ZW1wbGF0ZSwgJ3Bzd3AtLWFuaW1hdGVkLWluJyk7XG5cdFx0XHRcdF9zaG91dCgnaW5pdGlhbFpvb20nICsgKG91dCA/ICdPdXRFbmQnIDogJ0luRW5kJykpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c2VsZi50ZW1wbGF0ZS5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG5cdFx0XHRcdHNlbGYuYmcucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZihjb21wbGV0ZUZuKSB7XG5cdFx0XHRcdGNvbXBsZXRlRm4oKTtcblx0XHRcdH1cblx0XHRcdF9pbml0aWFsWm9vbVJ1bm5pbmcgPSBmYWxzZTtcblx0XHR9O1xuXG5cdFx0Ly8gaWYgYm91bmRzIGFyZW4ndCBwcm92aWRlZCwganVzdCBvcGVuIGdhbGxlcnkgd2l0aG91dCBhbmltYXRpb25cblx0XHRpZighZHVyYXRpb24gfHwgIXRodW1iQm91bmRzIHx8IHRodW1iQm91bmRzLnggPT09IHVuZGVmaW5lZCkge1xuXG5cdFx0XHRfc2hvdXQoJ2luaXRpYWxab29tJyArIChvdXQgPyAnT3V0JyA6ICdJbicpICk7XG5cblx0XHRcdF9jdXJyWm9vbUxldmVsID0gaXRlbS5pbml0aWFsWm9vbUxldmVsO1xuXHRcdFx0X2VxdWFsaXplUG9pbnRzKF9wYW5PZmZzZXQsICBpdGVtLmluaXRpYWxQb3NpdGlvbiApO1xuXHRcdFx0X2FwcGx5Q3VycmVudFpvb21QYW4oKTtcblxuXHRcdFx0dGVtcGxhdGUuc3R5bGUub3BhY2l0eSA9IG91dCA/IDAgOiAxO1xuXHRcdFx0X2FwcGx5QmdPcGFjaXR5KDEpO1xuXG5cdFx0XHRpZihkdXJhdGlvbikge1xuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdG9uQ29tcGxldGUoKTtcblx0XHRcdFx0fSwgZHVyYXRpb24pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0b25Db21wbGV0ZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dmFyIHN0YXJ0QW5pbWF0aW9uID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgY2xvc2VXaXRoUmFmID0gX2Nsb3NlZEJ5U2Nyb2xsLFxuXHRcdFx0XHRmYWRlRXZlcnl0aGluZyA9ICFzZWxmLmN1cnJJdGVtLnNyYyB8fCBzZWxmLmN1cnJJdGVtLmxvYWRFcnJvciB8fCBfb3B0aW9ucy5zaG93SGlkZU9wYWNpdHk7XG5cdFx0XHRcblx0XHRcdC8vIGFwcGx5IGh3LWFjY2VsZXJhdGlvbiB0byBpbWFnZVxuXHRcdFx0aWYoaXRlbS5taW5pSW1nKSB7XG5cdFx0XHRcdGl0ZW0ubWluaUltZy5zdHlsZS53ZWJraXRCYWNrZmFjZVZpc2liaWxpdHkgPSAnaGlkZGVuJztcblx0XHRcdH1cblxuXHRcdFx0aWYoIW91dCkge1xuXHRcdFx0XHRfY3Vyclpvb21MZXZlbCA9IHRodW1iQm91bmRzLncgLyBpdGVtLnc7XG5cdFx0XHRcdF9wYW5PZmZzZXQueCA9IHRodW1iQm91bmRzLng7XG5cdFx0XHRcdF9wYW5PZmZzZXQueSA9IHRodW1iQm91bmRzLnkgLSBfaW5pdGFsV2luZG93U2Nyb2xsWTtcblxuXHRcdFx0XHRzZWxmW2ZhZGVFdmVyeXRoaW5nID8gJ3RlbXBsYXRlJyA6ICdiZyddLnN0eWxlLm9wYWNpdHkgPSAwLjAwMTtcblx0XHRcdFx0X2FwcGx5Q3VycmVudFpvb21QYW4oKTtcblx0XHRcdH1cblxuXHRcdFx0X3JlZ2lzdGVyU3RhcnRBbmltYXRpb24oJ2luaXRpYWxab29tJyk7XG5cdFx0XHRcblx0XHRcdGlmKG91dCAmJiAhY2xvc2VXaXRoUmFmKSB7XG5cdFx0XHRcdGZyYW1ld29yay5yZW1vdmVDbGFzcyh0ZW1wbGF0ZSwgJ3Bzd3AtLWFuaW1hdGVkLWluJyk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKGZhZGVFdmVyeXRoaW5nKSB7XG5cdFx0XHRcdGlmKG91dCkge1xuXHRcdFx0XHRcdGZyYW1ld29ya1sgKGNsb3NlV2l0aFJhZiA/ICdyZW1vdmUnIDogJ2FkZCcpICsgJ0NsYXNzJyBdKHRlbXBsYXRlLCAncHN3cC0tYW5pbWF0ZV9vcGFjaXR5Jyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdGZyYW1ld29yay5hZGRDbGFzcyh0ZW1wbGF0ZSwgJ3Bzd3AtLWFuaW1hdGVfb3BhY2l0eScpO1xuXHRcdFx0XHRcdH0sIDMwKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRfc2hvd09ySGlkZVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRcdF9zaG91dCgnaW5pdGlhbFpvb20nICsgKG91dCA/ICdPdXQnIDogJ0luJykgKTtcblx0XHRcdFx0XG5cblx0XHRcdFx0aWYoIW91dCkge1xuXG5cdFx0XHRcdFx0Ly8gXCJpblwiIGFuaW1hdGlvbiBhbHdheXMgdXNlcyBDU1MgdHJhbnNpdGlvbnMgKGluc3RlYWQgb2YgckFGKS5cblx0XHRcdFx0XHQvLyBDU1MgdHJhbnNpdGlvbiB3b3JrIGZhc3RlciBoZXJlLCBcblx0XHRcdFx0XHQvLyBhcyBkZXZlbG9wZXIgbWF5IGFsc28gd2FudCB0byBhbmltYXRlIG90aGVyIHRoaW5ncywgXG5cdFx0XHRcdFx0Ly8gbGlrZSB1aSBvbiB0b3Agb2Ygc2xpZGluZyBhcmVhLCB3aGljaCBjYW4gYmUgYW5pbWF0ZWQganVzdCB2aWEgQ1NTXG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0X2N1cnJab29tTGV2ZWwgPSBpdGVtLmluaXRpYWxab29tTGV2ZWw7XG5cdFx0XHRcdFx0X2VxdWFsaXplUG9pbnRzKF9wYW5PZmZzZXQsICBpdGVtLmluaXRpYWxQb3NpdGlvbiApO1xuXHRcdFx0XHRcdF9hcHBseUN1cnJlbnRab29tUGFuKCk7XG5cdFx0XHRcdFx0X2FwcGx5QmdPcGFjaXR5KDEpO1xuXG5cdFx0XHRcdFx0aWYoZmFkZUV2ZXJ5dGhpbmcpIHtcblx0XHRcdFx0XHRcdHRlbXBsYXRlLnN0eWxlLm9wYWNpdHkgPSAxO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRfYXBwbHlCZ09wYWNpdHkoMSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0X3Nob3dPckhpZGVUaW1lb3V0ID0gc2V0VGltZW91dChvbkNvbXBsZXRlLCBkdXJhdGlvbiArIDIwKTtcblx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdC8vIFwib3V0XCIgYW5pbWF0aW9uIHVzZXMgckFGIG9ubHkgd2hlbiBQaG90b1N3aXBlIGlzIGNsb3NlZCBieSBicm93c2VyIHNjcm9sbCwgdG8gcmVjYWxjdWxhdGUgcG9zaXRpb25cblx0XHRcdFx0XHR2YXIgZGVzdFpvb21MZXZlbCA9IHRodW1iQm91bmRzLncgLyBpdGVtLncsXG5cdFx0XHRcdFx0XHRpbml0aWFsUGFuT2Zmc2V0ID0ge1xuXHRcdFx0XHRcdFx0XHR4OiBfcGFuT2Zmc2V0LngsXG5cdFx0XHRcdFx0XHRcdHk6IF9wYW5PZmZzZXQueVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdGluaXRpYWxab29tTGV2ZWwgPSBfY3Vyclpvb21MZXZlbCxcblx0XHRcdFx0XHRcdGluaXRhbEJnT3BhY2l0eSA9IF9iZ09wYWNpdHksXG5cdFx0XHRcdFx0XHRvblVwZGF0ZSA9IGZ1bmN0aW9uKG5vdykge1xuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0aWYobm93ID09PSAxKSB7XG5cdFx0XHRcdFx0XHRcdFx0X2N1cnJab29tTGV2ZWwgPSBkZXN0Wm9vbUxldmVsO1xuXHRcdFx0XHRcdFx0XHRcdF9wYW5PZmZzZXQueCA9IHRodW1iQm91bmRzLng7XG5cdFx0XHRcdFx0XHRcdFx0X3Bhbk9mZnNldC55ID0gdGh1bWJCb3VuZHMueSAgLSBfY3VycmVudFdpbmRvd1Njcm9sbFk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0X2N1cnJab29tTGV2ZWwgPSAoZGVzdFpvb21MZXZlbCAtIGluaXRpYWxab29tTGV2ZWwpICogbm93ICsgaW5pdGlhbFpvb21MZXZlbDtcblx0XHRcdFx0XHRcdFx0XHRfcGFuT2Zmc2V0LnggPSAodGh1bWJCb3VuZHMueCAtIGluaXRpYWxQYW5PZmZzZXQueCkgKiBub3cgKyBpbml0aWFsUGFuT2Zmc2V0Lng7XG5cdFx0XHRcdFx0XHRcdFx0X3Bhbk9mZnNldC55ID0gKHRodW1iQm91bmRzLnkgLSBfY3VycmVudFdpbmRvd1Njcm9sbFkgLSBpbml0aWFsUGFuT2Zmc2V0LnkpICogbm93ICsgaW5pdGlhbFBhbk9mZnNldC55O1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRfYXBwbHlDdXJyZW50Wm9vbVBhbigpO1xuXHRcdFx0XHRcdFx0XHRpZihmYWRlRXZlcnl0aGluZykge1xuXHRcdFx0XHRcdFx0XHRcdHRlbXBsYXRlLnN0eWxlLm9wYWNpdHkgPSAxIC0gbm93O1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdF9hcHBseUJnT3BhY2l0eSggaW5pdGFsQmdPcGFjaXR5IC0gbm93ICogaW5pdGFsQmdPcGFjaXR5ICk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH07XG5cblx0XHRcdFx0XHRpZihjbG9zZVdpdGhSYWYpIHtcblx0XHRcdFx0XHRcdF9hbmltYXRlUHJvcCgnaW5pdGlhbFpvb20nLCAwLCAxLCBkdXJhdGlvbiwgZnJhbWV3b3JrLmVhc2luZy5jdWJpYy5vdXQsIG9uVXBkYXRlLCBvbkNvbXBsZXRlKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0b25VcGRhdGUoMSk7XG5cdFx0XHRcdFx0XHRfc2hvd09ySGlkZVRpbWVvdXQgPSBzZXRUaW1lb3V0KG9uQ29tcGxldGUsIGR1cmF0aW9uICsgMjApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XG5cdFx0XHR9LCBvdXQgPyAyNSA6IDkwKTsgLy8gTWFpbiBwdXJwb3NlIG9mIHRoaXMgZGVsYXkgaXMgdG8gZ2l2ZSBicm93c2VyIHRpbWUgdG8gcGFpbnQgYW5kXG5cdFx0XHRcdFx0Ly8gY3JlYXRlIGNvbXBvc2l0ZSBsYXllcnMgb2YgUGhvdG9Td2lwZSBVSSBwYXJ0cyAoYmFja2dyb3VuZCwgY29udHJvbHMsIGNhcHRpb24sIGFycm93cykuXG5cdFx0XHRcdFx0Ly8gV2hpY2ggYXZvaWRzIGxhZyBhdCB0aGUgYmVnaW5uaW5nIG9mIHNjYWxlIHRyYW5zaXRpb24uXG5cdFx0fTtcblx0XHRzdGFydEFuaW1hdGlvbigpO1xuXG5cdFx0XG5cdH07XG5cbi8qPj5zaG93LWhpZGUtdHJhbnNpdGlvbiovXG5cbi8qPj5pdGVtcy1jb250cm9sbGVyKi9cbi8qKlxuKlxuKiBDb250cm9sbGVyIG1hbmFnZXMgZ2FsbGVyeSBpdGVtcywgdGhlaXIgZGltZW5zaW9ucywgYW5kIHRoZWlyIGNvbnRlbnQuXG4qIFxuKi9cblxudmFyIF9pdGVtcyxcblx0X3RlbXBQYW5BcmVhU2l6ZSA9IHt9LFxuXHRfaW1hZ2VzVG9BcHBlbmRQb29sID0gW10sXG5cdF9pbml0aWFsQ29udGVudFNldCxcblx0X2luaXRpYWxab29tUnVubmluZyxcblx0X2NvbnRyb2xsZXJEZWZhdWx0T3B0aW9ucyA9IHtcblx0XHRpbmRleDogMCxcblx0XHRlcnJvck1zZzogJzxkaXYgY2xhc3M9XCJwc3dwX19lcnJvci1tc2dcIj48YSBocmVmPVwiJXVybCVcIiB0YXJnZXQ9XCJfYmxhbmtcIj5UaGUgaW1hZ2U8L2E+IGNvdWxkIG5vdCBiZSBsb2FkZWQuPC9kaXY+Jyxcblx0XHRmb3JjZVByb2dyZXNzaXZlTG9hZGluZzogZmFsc2UsIC8vIFRPRE9cblx0XHRwcmVsb2FkOiBbMSwxXSxcblx0XHRnZXROdW1JdGVtc0ZuOiBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiBfaXRlbXMubGVuZ3RoO1xuXHRcdH1cblx0fTtcblxuXG52YXIgX2dldEl0ZW1BdCxcblx0X2dldE51bUl0ZW1zLFxuXHRfaW5pdGlhbElzTG9vcCxcblx0X2dldFplcm9Cb3VuZHMgPSBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y2VudGVyOnt4OjAseTowfSwgXG5cdFx0XHRtYXg6e3g6MCx5OjB9LCBcblx0XHRcdG1pbjp7eDowLHk6MH1cblx0XHR9O1xuXHR9LFxuXHRfY2FsY3VsYXRlU2luZ2xlSXRlbVBhbkJvdW5kcyA9IGZ1bmN0aW9uKGl0ZW0sIHJlYWxQYW5FbGVtZW50VywgcmVhbFBhbkVsZW1lbnRIICkge1xuXHRcdHZhciBib3VuZHMgPSBpdGVtLmJvdW5kcztcblxuXHRcdC8vIHBvc2l0aW9uIG9mIGVsZW1lbnQgd2hlbiBpdCdzIGNlbnRlcmVkXG5cdFx0Ym91bmRzLmNlbnRlci54ID0gTWF0aC5yb3VuZCgoX3RlbXBQYW5BcmVhU2l6ZS54IC0gcmVhbFBhbkVsZW1lbnRXKSAvIDIpO1xuXHRcdGJvdW5kcy5jZW50ZXIueSA9IE1hdGgucm91bmQoKF90ZW1wUGFuQXJlYVNpemUueSAtIHJlYWxQYW5FbGVtZW50SCkgLyAyKSArIGl0ZW0udkdhcC50b3A7XG5cblx0XHQvLyBtYXhpbXVtIHBhbiBwb3NpdGlvblxuXHRcdGJvdW5kcy5tYXgueCA9IChyZWFsUGFuRWxlbWVudFcgPiBfdGVtcFBhbkFyZWFTaXplLngpID8gXG5cdFx0XHRcdFx0XHRcdE1hdGgucm91bmQoX3RlbXBQYW5BcmVhU2l6ZS54IC0gcmVhbFBhbkVsZW1lbnRXKSA6IFxuXHRcdFx0XHRcdFx0XHRib3VuZHMuY2VudGVyLng7XG5cdFx0XG5cdFx0Ym91bmRzLm1heC55ID0gKHJlYWxQYW5FbGVtZW50SCA+IF90ZW1wUGFuQXJlYVNpemUueSkgPyBcblx0XHRcdFx0XHRcdFx0TWF0aC5yb3VuZChfdGVtcFBhbkFyZWFTaXplLnkgLSByZWFsUGFuRWxlbWVudEgpICsgaXRlbS52R2FwLnRvcCA6IFxuXHRcdFx0XHRcdFx0XHRib3VuZHMuY2VudGVyLnk7XG5cdFx0XG5cdFx0Ly8gbWluaW11bSBwYW4gcG9zaXRpb25cblx0XHRib3VuZHMubWluLnggPSAocmVhbFBhbkVsZW1lbnRXID4gX3RlbXBQYW5BcmVhU2l6ZS54KSA/IDAgOiBib3VuZHMuY2VudGVyLng7XG5cdFx0Ym91bmRzLm1pbi55ID0gKHJlYWxQYW5FbGVtZW50SCA+IF90ZW1wUGFuQXJlYVNpemUueSkgPyBpdGVtLnZHYXAudG9wIDogYm91bmRzLmNlbnRlci55O1xuXHR9LFxuXHRfY2FsY3VsYXRlSXRlbVNpemUgPSBmdW5jdGlvbihpdGVtLCB2aWV3cG9ydFNpemUsIHpvb21MZXZlbCkge1xuXG5cdFx0aWYgKGl0ZW0uc3JjICYmICFpdGVtLmxvYWRFcnJvcikge1xuXHRcdFx0dmFyIGlzSW5pdGlhbCA9ICF6b29tTGV2ZWw7XG5cdFx0XHRcblx0XHRcdGlmKGlzSW5pdGlhbCkge1xuXHRcdFx0XHRpZighaXRlbS52R2FwKSB7XG5cdFx0XHRcdFx0aXRlbS52R2FwID0ge3RvcDowLGJvdHRvbTowfTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBhbGxvd3Mgb3ZlcnJpZGluZyB2ZXJ0aWNhbCBtYXJnaW4gZm9yIGluZGl2aWR1YWwgaXRlbXNcblx0XHRcdFx0X3Nob3V0KCdwYXJzZVZlcnRpY2FsTWFyZ2luJywgaXRlbSk7XG5cdFx0XHR9XG5cblxuXHRcdFx0X3RlbXBQYW5BcmVhU2l6ZS54ID0gdmlld3BvcnRTaXplLng7XG5cdFx0XHRfdGVtcFBhbkFyZWFTaXplLnkgPSB2aWV3cG9ydFNpemUueSAtIGl0ZW0udkdhcC50b3AgLSBpdGVtLnZHYXAuYm90dG9tO1xuXG5cdFx0XHRpZiAoaXNJbml0aWFsKSB7XG5cdFx0XHRcdHZhciBoUmF0aW8gPSBfdGVtcFBhbkFyZWFTaXplLnggLyBpdGVtLnc7XG5cdFx0XHRcdHZhciB2UmF0aW8gPSBfdGVtcFBhbkFyZWFTaXplLnkgLyBpdGVtLmg7XG5cblx0XHRcdFx0aXRlbS5maXRSYXRpbyA9IGhSYXRpbyA8IHZSYXRpbyA/IGhSYXRpbyA6IHZSYXRpbztcblx0XHRcdFx0Ly9pdGVtLmZpbGxSYXRpbyA9IGhSYXRpbyA+IHZSYXRpbyA/IGhSYXRpbyA6IHZSYXRpbztcblxuXHRcdFx0XHR2YXIgc2NhbGVNb2RlID0gX29wdGlvbnMuc2NhbGVNb2RlO1xuXG5cdFx0XHRcdGlmIChzY2FsZU1vZGUgPT09ICdvcmlnJykge1xuXHRcdFx0XHRcdHpvb21MZXZlbCA9IDE7XG5cdFx0XHRcdH0gZWxzZSBpZiAoc2NhbGVNb2RlID09PSAnZml0Jykge1xuXHRcdFx0XHRcdHpvb21MZXZlbCA9IGl0ZW0uZml0UmF0aW87XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoem9vbUxldmVsID4gMSkge1xuXHRcdFx0XHRcdHpvb21MZXZlbCA9IDE7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpdGVtLmluaXRpYWxab29tTGV2ZWwgPSB6b29tTGV2ZWw7XG5cdFx0XHRcdFxuXHRcdFx0XHRpZighaXRlbS5ib3VuZHMpIHtcblx0XHRcdFx0XHQvLyByZXVzZSBib3VuZHMgb2JqZWN0XG5cdFx0XHRcdFx0aXRlbS5ib3VuZHMgPSBfZ2V0WmVyb0JvdW5kcygpOyBcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZighem9vbUxldmVsKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0X2NhbGN1bGF0ZVNpbmdsZUl0ZW1QYW5Cb3VuZHMoaXRlbSwgaXRlbS53ICogem9vbUxldmVsLCBpdGVtLmggKiB6b29tTGV2ZWwpO1xuXG5cdFx0XHRpZiAoaXNJbml0aWFsICYmIHpvb21MZXZlbCA9PT0gaXRlbS5pbml0aWFsWm9vbUxldmVsKSB7XG5cdFx0XHRcdGl0ZW0uaW5pdGlhbFBvc2l0aW9uID0gaXRlbS5ib3VuZHMuY2VudGVyO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gaXRlbS5ib3VuZHM7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGl0ZW0udyA9IGl0ZW0uaCA9IDA7XG5cdFx0XHRpdGVtLmluaXRpYWxab29tTGV2ZWwgPSBpdGVtLmZpdFJhdGlvID0gMTtcblx0XHRcdGl0ZW0uYm91bmRzID0gX2dldFplcm9Cb3VuZHMoKTtcblx0XHRcdGl0ZW0uaW5pdGlhbFBvc2l0aW9uID0gaXRlbS5ib3VuZHMuY2VudGVyO1xuXG5cdFx0XHQvLyBpZiBpdCdzIG5vdCBpbWFnZSwgd2UgcmV0dXJuIHplcm8gYm91bmRzIChjb250ZW50IGlzIG5vdCB6b29tYWJsZSlcblx0XHRcdHJldHVybiBpdGVtLmJvdW5kcztcblx0XHR9XG5cdFx0XG5cdH0sXG5cblx0XG5cblxuXHRfYXBwZW5kSW1hZ2UgPSBmdW5jdGlvbihpbmRleCwgaXRlbSwgYmFzZURpdiwgaW1nLCBwcmV2ZW50QW5pbWF0aW9uLCBrZWVwUGxhY2Vob2xkZXIpIHtcblx0XHRcblxuXHRcdGlmKGl0ZW0ubG9hZEVycm9yKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYoaW1nKSB7XG5cblx0XHRcdGl0ZW0uaW1hZ2VBcHBlbmRlZCA9IHRydWU7XG5cdFx0XHRfc2V0SW1hZ2VTaXplKGl0ZW0sIGltZywgKGl0ZW0gPT09IHNlbGYuY3Vyckl0ZW0gJiYgX3JlbmRlck1heFJlc29sdXRpb24pICk7XG5cdFx0XHRcblx0XHRcdGJhc2VEaXYuYXBwZW5kQ2hpbGQoaW1nKTtcblxuXHRcdFx0aWYoa2VlcFBsYWNlaG9sZGVyKSB7XG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aWYoaXRlbSAmJiBpdGVtLmxvYWRlZCAmJiBpdGVtLnBsYWNlaG9sZGVyKSB7XG5cdFx0XHRcdFx0XHRpdGVtLnBsYWNlaG9sZGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdFx0XHRpdGVtLnBsYWNlaG9sZGVyID0gbnVsbDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sIDUwMCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRcblxuXG5cdF9wcmVsb2FkSW1hZ2UgPSBmdW5jdGlvbihpdGVtKSB7XG5cdFx0aXRlbS5sb2FkaW5nID0gdHJ1ZTtcblx0XHRpdGVtLmxvYWRlZCA9IGZhbHNlO1xuXHRcdHZhciBpbWcgPSBpdGVtLmltZyA9IGZyYW1ld29yay5jcmVhdGVFbCgncHN3cF9faW1nJywgJ2ltZycpO1xuXHRcdHZhciBvbkNvbXBsZXRlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRpdGVtLmxvYWRpbmcgPSBmYWxzZTtcblx0XHRcdGl0ZW0ubG9hZGVkID0gdHJ1ZTtcblxuXHRcdFx0aWYoaXRlbS5sb2FkQ29tcGxldGUpIHtcblx0XHRcdFx0aXRlbS5sb2FkQ29tcGxldGUoaXRlbSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpdGVtLmltZyA9IG51bGw7IC8vIG5vIG5lZWQgdG8gc3RvcmUgaW1hZ2Ugb2JqZWN0XG5cdFx0XHR9XG5cdFx0XHRpbWcub25sb2FkID0gaW1nLm9uZXJyb3IgPSBudWxsO1xuXHRcdFx0aW1nID0gbnVsbDtcblx0XHR9O1xuXHRcdGltZy5vbmxvYWQgPSBvbkNvbXBsZXRlO1xuXHRcdGltZy5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRpdGVtLmxvYWRFcnJvciA9IHRydWU7XG5cdFx0XHRvbkNvbXBsZXRlKCk7XG5cdFx0fTtcdFx0XG5cblx0XHRpbWcuc3JjID0gaXRlbS5zcmM7Ly8gKyAnP2E9JyArIE1hdGgucmFuZG9tKCk7XG5cblx0XHRyZXR1cm4gaW1nO1xuXHR9LFxuXHRfY2hlY2tGb3JFcnJvciA9IGZ1bmN0aW9uKGl0ZW0sIGNsZWFuVXApIHtcblx0XHRpZihpdGVtLnNyYyAmJiBpdGVtLmxvYWRFcnJvciAmJiBpdGVtLmNvbnRhaW5lcikge1xuXG5cdFx0XHRpZihjbGVhblVwKSB7XG5cdFx0XHRcdGl0ZW0uY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuXHRcdFx0fVxuXG5cdFx0XHRpdGVtLmNvbnRhaW5lci5pbm5lckhUTUwgPSBfb3B0aW9ucy5lcnJvck1zZy5yZXBsYWNlKCcldXJsJScsICBpdGVtLnNyYyApO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcblx0XHR9XG5cdH0sXG5cdF9zZXRJbWFnZVNpemUgPSBmdW5jdGlvbihpdGVtLCBpbWcsIG1heFJlcykge1xuXHRcdGlmKCFpdGVtLnNyYykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmKCFpbWcpIHtcblx0XHRcdGltZyA9IGl0ZW0uY29udGFpbmVyLmxhc3RDaGlsZDtcblx0XHR9XG5cblx0XHR2YXIgdyA9IG1heFJlcyA/IGl0ZW0udyA6IE1hdGgucm91bmQoaXRlbS53ICogaXRlbS5maXRSYXRpbyksXG5cdFx0XHRoID0gbWF4UmVzID8gaXRlbS5oIDogTWF0aC5yb3VuZChpdGVtLmggKiBpdGVtLmZpdFJhdGlvKTtcblx0XHRcblx0XHRpZihpdGVtLnBsYWNlaG9sZGVyICYmICFpdGVtLmxvYWRlZCkge1xuXHRcdFx0aXRlbS5wbGFjZWhvbGRlci5zdHlsZS53aWR0aCA9IHcgKyAncHgnO1xuXHRcdFx0aXRlbS5wbGFjZWhvbGRlci5zdHlsZS5oZWlnaHQgPSBoICsgJ3B4Jztcblx0XHR9XG5cblx0XHRpbWcuc3R5bGUud2lkdGggPSB3ICsgJ3B4Jztcblx0XHRpbWcuc3R5bGUuaGVpZ2h0ID0gaCArICdweCc7XG5cdH0sXG5cdF9hcHBlbmRJbWFnZXNQb29sID0gZnVuY3Rpb24oKSB7XG5cblx0XHRpZihfaW1hZ2VzVG9BcHBlbmRQb29sLmxlbmd0aCkge1xuXHRcdFx0dmFyIHBvb2xJdGVtO1xuXG5cdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgX2ltYWdlc1RvQXBwZW5kUG9vbC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRwb29sSXRlbSA9IF9pbWFnZXNUb0FwcGVuZFBvb2xbaV07XG5cdFx0XHRcdGlmKCBwb29sSXRlbS5ob2xkZXIuaW5kZXggPT09IHBvb2xJdGVtLmluZGV4ICkge1xuXHRcdFx0XHRcdF9hcHBlbmRJbWFnZShwb29sSXRlbS5pbmRleCwgcG9vbEl0ZW0uaXRlbSwgcG9vbEl0ZW0uYmFzZURpdiwgcG9vbEl0ZW0uaW1nLCBmYWxzZSwgcG9vbEl0ZW0uY2xlYXJQbGFjZWhvbGRlcik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdF9pbWFnZXNUb0FwcGVuZFBvb2wgPSBbXTtcblx0XHR9XG5cdH07XG5cdFxuXG5cbl9yZWdpc3Rlck1vZHVsZSgnQ29udHJvbGxlcicsIHtcblxuXHRwdWJsaWNNZXRob2RzOiB7XG5cblx0XHRsYXp5TG9hZEl0ZW06IGZ1bmN0aW9uKGluZGV4KSB7XG5cdFx0XHRpbmRleCA9IF9nZXRMb29wZWRJZChpbmRleCk7XG5cdFx0XHR2YXIgaXRlbSA9IF9nZXRJdGVtQXQoaW5kZXgpO1xuXG5cdFx0XHRpZighaXRlbSB8fCAoKGl0ZW0ubG9hZGVkIHx8IGl0ZW0ubG9hZGluZykgJiYgIV9pdGVtc05lZWRVcGRhdGUpKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0X3Nob3V0KCdnZXR0aW5nRGF0YScsIGluZGV4LCBpdGVtKTtcblxuXHRcdFx0aWYgKCFpdGVtLnNyYykge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdF9wcmVsb2FkSW1hZ2UoaXRlbSk7XG5cdFx0fSxcblx0XHRpbml0Q29udHJvbGxlcjogZnVuY3Rpb24oKSB7XG5cdFx0XHRmcmFtZXdvcmsuZXh0ZW5kKF9vcHRpb25zLCBfY29udHJvbGxlckRlZmF1bHRPcHRpb25zLCB0cnVlKTtcblx0XHRcdHNlbGYuaXRlbXMgPSBfaXRlbXMgPSBpdGVtcztcblx0XHRcdF9nZXRJdGVtQXQgPSBzZWxmLmdldEl0ZW1BdDtcblx0XHRcdF9nZXROdW1JdGVtcyA9IF9vcHRpb25zLmdldE51bUl0ZW1zRm47IC8vc2VsZi5nZXROdW1JdGVtcztcblxuXG5cblx0XHRcdF9pbml0aWFsSXNMb29wID0gX29wdGlvbnMubG9vcDtcblx0XHRcdGlmKF9nZXROdW1JdGVtcygpIDwgMykge1xuXHRcdFx0XHRfb3B0aW9ucy5sb29wID0gZmFsc2U7IC8vIGRpc2FibGUgbG9vcCBpZiBsZXNzIHRoZW4gMyBpdGVtc1xuXHRcdFx0fVxuXG5cdFx0XHRfbGlzdGVuKCdiZWZvcmVDaGFuZ2UnLCBmdW5jdGlvbihkaWZmKSB7XG5cblx0XHRcdFx0dmFyIHAgPSBfb3B0aW9ucy5wcmVsb2FkLFxuXHRcdFx0XHRcdGlzTmV4dCA9IGRpZmYgPT09IG51bGwgPyB0cnVlIDogKGRpZmYgPj0gMCksXG5cdFx0XHRcdFx0cHJlbG9hZEJlZm9yZSA9IE1hdGgubWluKHBbMF0sIF9nZXROdW1JdGVtcygpICksXG5cdFx0XHRcdFx0cHJlbG9hZEFmdGVyID0gTWF0aC5taW4ocFsxXSwgX2dldE51bUl0ZW1zKCkgKSxcblx0XHRcdFx0XHRpO1xuXG5cblx0XHRcdFx0Zm9yKGkgPSAxOyBpIDw9IChpc05leHQgPyBwcmVsb2FkQWZ0ZXIgOiBwcmVsb2FkQmVmb3JlKTsgaSsrKSB7XG5cdFx0XHRcdFx0c2VsZi5sYXp5TG9hZEl0ZW0oX2N1cnJlbnRJdGVtSW5kZXgraSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Zm9yKGkgPSAxOyBpIDw9IChpc05leHQgPyBwcmVsb2FkQmVmb3JlIDogcHJlbG9hZEFmdGVyKTsgaSsrKSB7XG5cdFx0XHRcdFx0c2VsZi5sYXp5TG9hZEl0ZW0oX2N1cnJlbnRJdGVtSW5kZXgtaSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRfbGlzdGVuKCdpbml0aWFsTGF5b3V0JywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHNlbGYuY3Vyckl0ZW0uaW5pdGlhbExheW91dCA9IF9vcHRpb25zLmdldFRodW1iQm91bmRzRm4gJiYgX29wdGlvbnMuZ2V0VGh1bWJCb3VuZHNGbihfY3VycmVudEl0ZW1JbmRleCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0X2xpc3RlbignbWFpblNjcm9sbEFuaW1Db21wbGV0ZScsIF9hcHBlbmRJbWFnZXNQb29sKTtcblx0XHRcdF9saXN0ZW4oJ2luaXRpYWxab29tSW5FbmQnLCBfYXBwZW5kSW1hZ2VzUG9vbCk7XG5cblxuXG5cdFx0XHRfbGlzdGVuKCdkZXN0cm95JywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciBpdGVtO1xuXHRcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgX2l0ZW1zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aXRlbSA9IF9pdGVtc1tpXTtcblx0XHRcdFx0XHQvLyByZW1vdmUgcmVmZXJlbmNlIHRvIERPTSBlbGVtZW50cywgZm9yIEdDXG5cdFx0XHRcdFx0aWYoaXRlbS5jb250YWluZXIpIHtcblx0XHRcdFx0XHRcdGl0ZW0uY29udGFpbmVyID0gbnVsbDsgXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmKGl0ZW0ucGxhY2Vob2xkZXIpIHtcblx0XHRcdFx0XHRcdGl0ZW0ucGxhY2Vob2xkZXIgPSBudWxsO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZihpdGVtLmltZykge1xuXHRcdFx0XHRcdFx0aXRlbS5pbWcgPSBudWxsO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZihpdGVtLnByZWxvYWRlcikge1xuXHRcdFx0XHRcdFx0aXRlbS5wcmVsb2FkZXIgPSBudWxsO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZihpdGVtLmxvYWRFcnJvcikge1xuXHRcdFx0XHRcdFx0aXRlbS5sb2FkZWQgPSBpdGVtLmxvYWRFcnJvciA9IGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRfaW1hZ2VzVG9BcHBlbmRQb29sID0gbnVsbDtcblx0XHRcdH0pO1xuXHRcdH0sXG5cblxuXHRcdGdldEl0ZW1BdDogZnVuY3Rpb24oaW5kZXgpIHtcblx0XHRcdGlmIChpbmRleCA+PSAwKSB7XG5cdFx0XHRcdHJldHVybiBfaXRlbXNbaW5kZXhdICE9PSB1bmRlZmluZWQgPyBfaXRlbXNbaW5kZXhdIDogZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSxcblxuXHRcdGFsbG93UHJvZ3Jlc3NpdmVJbWc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0Ly8gMS4gUHJvZ3Jlc3NpdmUgaW1hZ2UgbG9hZGluZyBpc24ndCB3b3JraW5nIG9uIHdlYmtpdC9ibGluayBcblx0XHRcdC8vICAgIHdoZW4gaHctYWNjZWxlcmF0aW9uIChlLmcuIHRyYW5zbGF0ZVopIGlzIGFwcGxpZWQgdG8gSU1HIGVsZW1lbnQuXG5cdFx0XHQvLyAgICBUaGF0J3Mgd2h5IGluIFBob3RvU3dpcGUgcGFyZW50IGVsZW1lbnQgZ2V0cyB6b29tIHRyYW5zZm9ybSwgbm90IGltYWdlIGl0c2VsZi5cblx0XHRcdC8vICAgIFxuXHRcdFx0Ly8gMi4gUHJvZ3Jlc3NpdmUgaW1hZ2UgbG9hZGluZyBzb21ldGltZXMgYmxpbmtzIGluIHdlYmtpdC9ibGluayB3aGVuIGFwcGx5aW5nIGFuaW1hdGlvbiB0byBwYXJlbnQgZWxlbWVudC5cblx0XHRcdC8vICAgIFRoYXQncyB3aHkgaXQncyBkaXNhYmxlZCBvbiB0b3VjaCBkZXZpY2VzIChtYWlubHkgYmVjYXVzZSBvZiBzd2lwZSB0cmFuc2l0aW9uKVxuXHRcdFx0Ly8gICAgXG5cdFx0XHQvLyAzLiBQcm9ncmVzc2l2ZSBpbWFnZSBsb2FkaW5nIHNvbWV0aW1lcyBkb2Vzbid0IHdvcmsgaW4gSUUgKHVwIHRvIDExKS5cblxuXHRcdFx0Ly8gRG9uJ3QgYWxsb3cgcHJvZ3Jlc3NpdmUgbG9hZGluZyBvbiBub24tbGFyZ2UgdG91Y2ggZGV2aWNlc1xuXHRcdFx0cmV0dXJuIF9vcHRpb25zLmZvcmNlUHJvZ3Jlc3NpdmVMb2FkaW5nIHx8ICFfbGlrZWx5VG91Y2hEZXZpY2UgfHwgX29wdGlvbnMubW91c2VVc2VkIHx8IHNjcmVlbi53aWR0aCA+IDEyMDA7IFxuXHRcdFx0Ly8gMTIwMCAtIHRvIGVsaW1pbmF0ZSB0b3VjaCBkZXZpY2VzIHdpdGggbGFyZ2Ugc2NyZWVuIChsaWtlIENocm9tZWJvb2sgUGl4ZWwpXG5cdFx0fSxcblxuXHRcdHNldENvbnRlbnQ6IGZ1bmN0aW9uKGhvbGRlciwgaW5kZXgpIHtcblxuXHRcdFx0aWYoX29wdGlvbnMubG9vcCkge1xuXHRcdFx0XHRpbmRleCA9IF9nZXRMb29wZWRJZChpbmRleCk7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBwcmV2SXRlbSA9IHNlbGYuZ2V0SXRlbUF0KGhvbGRlci5pbmRleCk7XG5cdFx0XHRpZihwcmV2SXRlbSkge1xuXHRcdFx0XHRwcmV2SXRlbS5jb250YWluZXIgPSBudWxsO1xuXHRcdFx0fVxuXHRcblx0XHRcdHZhciBpdGVtID0gc2VsZi5nZXRJdGVtQXQoaW5kZXgpLFxuXHRcdFx0XHRpbWc7XG5cdFx0XHRcblx0XHRcdGlmKCFpdGVtKSB7XG5cdFx0XHRcdGhvbGRlci5lbC5pbm5lckhUTUwgPSAnJztcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBhbGxvdyB0byBvdmVycmlkZSBkYXRhXG5cdFx0XHRfc2hvdXQoJ2dldHRpbmdEYXRhJywgaW5kZXgsIGl0ZW0pO1xuXG5cdFx0XHRob2xkZXIuaW5kZXggPSBpbmRleDtcblx0XHRcdGhvbGRlci5pdGVtID0gaXRlbTtcblxuXHRcdFx0Ly8gYmFzZSBjb250YWluZXIgRElWIGlzIGNyZWF0ZWQgb25seSBvbmNlIGZvciBlYWNoIG9mIDMgaG9sZGVyc1xuXHRcdFx0dmFyIGJhc2VEaXYgPSBpdGVtLmNvbnRhaW5lciA9IGZyYW1ld29yay5jcmVhdGVFbCgncHN3cF9fem9vbS13cmFwJyk7IFxuXG5cdFx0XHRcblxuXHRcdFx0aWYoIWl0ZW0uc3JjICYmIGl0ZW0uaHRtbCkge1xuXHRcdFx0XHRpZihpdGVtLmh0bWwudGFnTmFtZSkge1xuXHRcdFx0XHRcdGJhc2VEaXYuYXBwZW5kQ2hpbGQoaXRlbS5odG1sKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRiYXNlRGl2LmlubmVySFRNTCA9IGl0ZW0uaHRtbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRfY2hlY2tGb3JFcnJvcihpdGVtKTtcblxuXHRcdFx0X2NhbGN1bGF0ZUl0ZW1TaXplKGl0ZW0sIF92aWV3cG9ydFNpemUpO1xuXHRcdFx0XG5cdFx0XHRpZihpdGVtLnNyYyAmJiAhaXRlbS5sb2FkRXJyb3IgJiYgIWl0ZW0ubG9hZGVkKSB7XG5cblx0XHRcdFx0aXRlbS5sb2FkQ29tcGxldGUgPSBmdW5jdGlvbihpdGVtKSB7XG5cblx0XHRcdFx0XHQvLyBnYWxsZXJ5IGNsb3NlZCBiZWZvcmUgaW1hZ2UgZmluaXNoZWQgbG9hZGluZ1xuXHRcdFx0XHRcdGlmKCFfaXNPcGVuKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gY2hlY2sgaWYgaG9sZGVyIGhhc24ndCBjaGFuZ2VkIHdoaWxlIGltYWdlIHdhcyBsb2FkaW5nXG5cdFx0XHRcdFx0aWYoaG9sZGVyICYmIGhvbGRlci5pbmRleCA9PT0gaW5kZXggKSB7XG5cdFx0XHRcdFx0XHRpZiggX2NoZWNrRm9yRXJyb3IoaXRlbSwgdHJ1ZSkgKSB7XG5cdFx0XHRcdFx0XHRcdGl0ZW0ubG9hZENvbXBsZXRlID0gaXRlbS5pbWcgPSBudWxsO1xuXHRcdFx0XHRcdFx0XHRfY2FsY3VsYXRlSXRlbVNpemUoaXRlbSwgX3ZpZXdwb3J0U2l6ZSk7XG5cdFx0XHRcdFx0XHRcdF9hcHBseVpvb21QYW5Ub0l0ZW0oaXRlbSk7XG5cblx0XHRcdFx0XHRcdFx0aWYoaG9sZGVyLmluZGV4ID09PSBfY3VycmVudEl0ZW1JbmRleCkge1xuXHRcdFx0XHRcdFx0XHRcdC8vIHJlY2FsY3VsYXRlIGRpbWVuc2lvbnNcblx0XHRcdFx0XHRcdFx0XHRzZWxmLnVwZGF0ZUN1cnJab29tSXRlbSgpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmKCAhaXRlbS5pbWFnZUFwcGVuZGVkICkge1xuXHRcdFx0XHRcdFx0XHRpZihfZmVhdHVyZXMudHJhbnNmb3JtICYmIChfbWFpblNjcm9sbEFuaW1hdGluZyB8fCBfaW5pdGlhbFpvb21SdW5uaW5nKSApIHtcblx0XHRcdFx0XHRcdFx0XHRfaW1hZ2VzVG9BcHBlbmRQb29sLnB1c2goe1xuXHRcdFx0XHRcdFx0XHRcdFx0aXRlbTppdGVtLFxuXHRcdFx0XHRcdFx0XHRcdFx0YmFzZURpdjpiYXNlRGl2LFxuXHRcdFx0XHRcdFx0XHRcdFx0aW1nOml0ZW0uaW1nLFxuXHRcdFx0XHRcdFx0XHRcdFx0aW5kZXg6aW5kZXgsXG5cdFx0XHRcdFx0XHRcdFx0XHRob2xkZXI6aG9sZGVyLFxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xlYXJQbGFjZWhvbGRlcjp0cnVlXG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0X2FwcGVuZEltYWdlKGluZGV4LCBpdGVtLCBiYXNlRGl2LCBpdGVtLmltZywgX21haW5TY3JvbGxBbmltYXRpbmcgfHwgX2luaXRpYWxab29tUnVubmluZywgdHJ1ZSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdC8vIHJlbW92ZSBwcmVsb2FkZXIgJiBtaW5pLWltZ1xuXHRcdFx0XHRcdFx0XHRpZighX2luaXRpYWxab29tUnVubmluZyAmJiBpdGVtLnBsYWNlaG9sZGVyKSB7XG5cdFx0XHRcdFx0XHRcdFx0aXRlbS5wbGFjZWhvbGRlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHRcdFx0XHRcdGl0ZW0ucGxhY2Vob2xkZXIgPSBudWxsO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aXRlbS5sb2FkQ29tcGxldGUgPSBudWxsO1xuXHRcdFx0XHRcdGl0ZW0uaW1nID0gbnVsbDsgLy8gbm8gbmVlZCB0byBzdG9yZSBpbWFnZSBlbGVtZW50IGFmdGVyIGl0J3MgYWRkZWRcblxuXHRcdFx0XHRcdF9zaG91dCgnaW1hZ2VMb2FkQ29tcGxldGUnLCBpbmRleCwgaXRlbSk7XG5cdFx0XHRcdH07XG5cblx0XHRcdFx0aWYoZnJhbWV3b3JrLmZlYXR1cmVzLnRyYW5zZm9ybSkge1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdHZhciBwbGFjZWhvbGRlckNsYXNzTmFtZSA9ICdwc3dwX19pbWcgcHN3cF9faW1nLS1wbGFjZWhvbGRlcic7IFxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyQ2xhc3NOYW1lICs9IChpdGVtLm1zcmMgPyAnJyA6ICcgcHN3cF9faW1nLS1wbGFjZWhvbGRlci0tYmxhbmsnKTtcblxuXHRcdFx0XHRcdHZhciBwbGFjZWhvbGRlciA9IGZyYW1ld29yay5jcmVhdGVFbChwbGFjZWhvbGRlckNsYXNzTmFtZSwgaXRlbS5tc3JjID8gJ2ltZycgOiAnJyk7XG5cdFx0XHRcdFx0aWYoaXRlbS5tc3JjKSB7XG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlci5zcmMgPSBpdGVtLm1zcmM7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdF9zZXRJbWFnZVNpemUoaXRlbSwgcGxhY2Vob2xkZXIpO1xuXG5cdFx0XHRcdFx0YmFzZURpdi5hcHBlbmRDaGlsZChwbGFjZWhvbGRlcik7XG5cdFx0XHRcdFx0aXRlbS5wbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyO1xuXG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cblx0XHRcdFx0XG5cblx0XHRcdFx0aWYoIWl0ZW0ubG9hZGluZykge1xuXHRcdFx0XHRcdF9wcmVsb2FkSW1hZ2UoaXRlbSk7XG5cdFx0XHRcdH1cblxuXG5cdFx0XHRcdGlmKCBzZWxmLmFsbG93UHJvZ3Jlc3NpdmVJbWcoKSApIHtcblx0XHRcdFx0XHQvLyBqdXN0IGFwcGVuZCBpbWFnZVxuXHRcdFx0XHRcdGlmKCFfaW5pdGlhbENvbnRlbnRTZXQgJiYgX2ZlYXR1cmVzLnRyYW5zZm9ybSkge1xuXHRcdFx0XHRcdFx0X2ltYWdlc1RvQXBwZW5kUG9vbC5wdXNoKHtcblx0XHRcdFx0XHRcdFx0aXRlbTppdGVtLCBcblx0XHRcdFx0XHRcdFx0YmFzZURpdjpiYXNlRGl2LCBcblx0XHRcdFx0XHRcdFx0aW1nOml0ZW0uaW1nLCBcblx0XHRcdFx0XHRcdFx0aW5kZXg6aW5kZXgsIFxuXHRcdFx0XHRcdFx0XHRob2xkZXI6aG9sZGVyXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0X2FwcGVuZEltYWdlKGluZGV4LCBpdGVtLCBiYXNlRGl2LCBpdGVtLmltZywgdHJ1ZSwgdHJ1ZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0fSBlbHNlIGlmKGl0ZW0uc3JjICYmICFpdGVtLmxvYWRFcnJvcikge1xuXHRcdFx0XHQvLyBpbWFnZSBvYmplY3QgaXMgY3JlYXRlZCBldmVyeSB0aW1lLCBkdWUgdG8gYnVncyBvZiBpbWFnZSBsb2FkaW5nICYgZGVsYXkgd2hlbiBzd2l0Y2hpbmcgaW1hZ2VzXG5cdFx0XHRcdGltZyA9IGZyYW1ld29yay5jcmVhdGVFbCgncHN3cF9faW1nJywgJ2ltZycpO1xuXHRcdFx0XHRpbWcuc3R5bGUub3BhY2l0eSA9IDE7XG5cdFx0XHRcdGltZy5zcmMgPSBpdGVtLnNyYztcblx0XHRcdFx0X3NldEltYWdlU2l6ZShpdGVtLCBpbWcpO1xuXHRcdFx0XHRfYXBwZW5kSW1hZ2UoaW5kZXgsIGl0ZW0sIGJhc2VEaXYsIGltZywgdHJ1ZSk7XG5cdFx0XHR9XG5cdFx0XHRcblxuXHRcdFx0aWYoIV9pbml0aWFsQ29udGVudFNldCAmJiBpbmRleCA9PT0gX2N1cnJlbnRJdGVtSW5kZXgpIHtcblx0XHRcdFx0X2N1cnJab29tRWxlbWVudFN0eWxlID0gYmFzZURpdi5zdHlsZTtcblx0XHRcdFx0X3Nob3dPckhpZGUoaXRlbSwgKGltZyB8fGl0ZW0uaW1nKSApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0X2FwcGx5Wm9vbVBhblRvSXRlbShpdGVtKTtcblx0XHRcdH1cblxuXHRcdFx0aG9sZGVyLmVsLmlubmVySFRNTCA9ICcnO1xuXHRcdFx0aG9sZGVyLmVsLmFwcGVuZENoaWxkKGJhc2VEaXYpO1xuXHRcdH0sXG5cblx0XHRjbGVhblNsaWRlOiBmdW5jdGlvbiggaXRlbSApIHtcblx0XHRcdGlmKGl0ZW0uaW1nICkge1xuXHRcdFx0XHRpdGVtLmltZy5vbmxvYWQgPSBpdGVtLmltZy5vbmVycm9yID0gbnVsbDtcblx0XHRcdH1cblx0XHRcdGl0ZW0ubG9hZGVkID0gaXRlbS5sb2FkaW5nID0gaXRlbS5pbWcgPSBpdGVtLmltYWdlQXBwZW5kZWQgPSBmYWxzZTtcblx0XHR9XG5cblx0fVxufSk7XG5cbi8qPj5pdGVtcy1jb250cm9sbGVyKi9cblxuLyo+PnRhcCovXG4vKipcbiAqIHRhcC5qczpcbiAqXG4gKiBEaXNwbGF0Y2hlcyB0YXAgYW5kIGRvdWJsZS10YXAgZXZlbnRzLlxuICogXG4gKi9cblxudmFyIHRhcFRpbWVyLFxuXHR0YXBSZWxlYXNlUG9pbnQgPSB7fSxcblx0X2Rpc3BhdGNoVGFwRXZlbnQgPSBmdW5jdGlvbihvcmlnRXZlbnQsIHJlbGVhc2VQb2ludCwgcG9pbnRlclR5cGUpIHtcdFx0XG5cdFx0dmFyIGUgPSBkb2N1bWVudC5jcmVhdGVFdmVudCggJ0N1c3RvbUV2ZW50JyApLFxuXHRcdFx0ZURldGFpbCA9IHtcblx0XHRcdFx0b3JpZ0V2ZW50Om9yaWdFdmVudCwgXG5cdFx0XHRcdHRhcmdldDpvcmlnRXZlbnQudGFyZ2V0LCBcblx0XHRcdFx0cmVsZWFzZVBvaW50OiByZWxlYXNlUG9pbnQsIFxuXHRcdFx0XHRwb2ludGVyVHlwZTpwb2ludGVyVHlwZSB8fCAndG91Y2gnXG5cdFx0XHR9O1xuXG5cdFx0ZS5pbml0Q3VzdG9tRXZlbnQoICdwc3dwVGFwJywgdHJ1ZSwgdHJ1ZSwgZURldGFpbCApO1xuXHRcdG9yaWdFdmVudC50YXJnZXQuZGlzcGF0Y2hFdmVudChlKTtcblx0fTtcblxuX3JlZ2lzdGVyTW9kdWxlKCdUYXAnLCB7XG5cdHB1YmxpY01ldGhvZHM6IHtcblx0XHRpbml0VGFwOiBmdW5jdGlvbigpIHtcblx0XHRcdF9saXN0ZW4oJ2ZpcnN0VG91Y2hTdGFydCcsIHNlbGYub25UYXBTdGFydCk7XG5cdFx0XHRfbGlzdGVuKCd0b3VjaFJlbGVhc2UnLCBzZWxmLm9uVGFwUmVsZWFzZSk7XG5cdFx0XHRfbGlzdGVuKCdkZXN0cm95JywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHRhcFJlbGVhc2VQb2ludCA9IHt9O1xuXHRcdFx0XHR0YXBUaW1lciA9IG51bGw7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdG9uVGFwU3RhcnQ6IGZ1bmN0aW9uKHRvdWNoTGlzdCkge1xuXHRcdFx0aWYodG91Y2hMaXN0Lmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRhcFRpbWVyKTtcblx0XHRcdFx0dGFwVGltZXIgPSBudWxsO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0b25UYXBSZWxlYXNlOiBmdW5jdGlvbihlLCByZWxlYXNlUG9pbnQpIHtcblx0XHRcdGlmKCFyZWxlYXNlUG9pbnQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZighX21vdmVkICYmICFfaXNNdWx0aXRvdWNoICYmICFfbnVtQW5pbWF0aW9ucykge1xuXHRcdFx0XHR2YXIgcDAgPSByZWxlYXNlUG9pbnQ7XG5cdFx0XHRcdGlmKHRhcFRpbWVyKSB7XG5cdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRhcFRpbWVyKTtcblx0XHRcdFx0XHR0YXBUaW1lciA9IG51bGw7XG5cblx0XHRcdFx0XHQvLyBDaGVjayBpZiB0YXBlZCBvbiB0aGUgc2FtZSBwbGFjZVxuXHRcdFx0XHRcdGlmICggX2lzTmVhcmJ5UG9pbnRzKHAwLCB0YXBSZWxlYXNlUG9pbnQpICkge1xuXHRcdFx0XHRcdFx0X3Nob3V0KCdkb3VibGVUYXAnLCBwMCk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYocmVsZWFzZVBvaW50LnR5cGUgPT09ICdtb3VzZScpIHtcblx0XHRcdFx0XHRfZGlzcGF0Y2hUYXBFdmVudChlLCByZWxlYXNlUG9pbnQsICdtb3VzZScpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHZhciBjbGlja2VkVGFnTmFtZSA9IGUudGFyZ2V0LnRhZ05hbWUudG9VcHBlckNhc2UoKTtcblx0XHRcdFx0Ly8gYXZvaWQgZG91YmxlIHRhcCBkZWxheSBvbiBidXR0b25zIGFuZCBlbGVtZW50cyB0aGF0IGhhdmUgY2xhc3MgcHN3cF9fc2luZ2xlLXRhcFxuXHRcdFx0XHRpZihjbGlja2VkVGFnTmFtZSA9PT0gJ0JVVFRPTicgfHwgZnJhbWV3b3JrLmhhc0NsYXNzKGUudGFyZ2V0LCAncHN3cF9fc2luZ2xlLXRhcCcpICkge1xuXHRcdFx0XHRcdF9kaXNwYXRjaFRhcEV2ZW50KGUsIHJlbGVhc2VQb2ludCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0X2VxdWFsaXplUG9pbnRzKHRhcFJlbGVhc2VQb2ludCwgcDApO1xuXG5cdFx0XHRcdHRhcFRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRfZGlzcGF0Y2hUYXBFdmVudChlLCByZWxlYXNlUG9pbnQpO1xuXHRcdFx0XHRcdHRhcFRpbWVyID0gbnVsbDtcblx0XHRcdFx0fSwgMzAwKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn0pO1xuXG4vKj4+dGFwKi9cblxuLyo+PmRlc2t0b3Atem9vbSovXG4vKipcbiAqXG4gKiBkZXNrdG9wLXpvb20uanM6XG4gKlxuICogLSBCaW5kcyBtb3VzZXdoZWVsIGV2ZW50IGZvciBwYW5pbmcgem9vbWVkIGltYWdlLlxuICogLSBNYW5hZ2VzIFwiZHJhZ2dpbmdcIiwgXCJ6b29tZWQtaW5cIiwgXCJ6b29tLW91dFwiIGNsYXNzZXMuXG4gKiAgICh3aGljaCBhcmUgdXNlZCBmb3IgY3Vyc29ycyBhbmQgem9vbSBpY29uKVxuICogLSBBZGRzIHRvZ2dsZURlc2t0b3Bab29tIGZ1bmN0aW9uLlxuICogXG4gKi9cblxudmFyIF93aGVlbERlbHRhO1xuXHRcbl9yZWdpc3Rlck1vZHVsZSgnRGVza3RvcFpvb20nLCB7XG5cblx0cHVibGljTWV0aG9kczoge1xuXG5cdFx0aW5pdERlc2t0b3Bab29tOiBmdW5jdGlvbigpIHtcblxuXHRcdFx0aWYoX29sZElFKSB7XG5cdFx0XHRcdC8vIG5vIHpvb20gZm9yIG9sZCBJRSAoPD04KVxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGlmKF9saWtlbHlUb3VjaERldmljZSkge1xuXHRcdFx0XHQvLyBpZiBkZXRlY3RlZCBoYXJkd2FyZSB0b3VjaCBzdXBwb3J0LCB3ZSB3YWl0IHVudGlsIG1vdXNlIGlzIHVzZWQsXG5cdFx0XHRcdC8vIGFuZCBvbmx5IHRoZW4gYXBwbHkgZGVza3RvcC16b29tIGZlYXR1cmVzXG5cdFx0XHRcdF9saXN0ZW4oJ21vdXNlVXNlZCcsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHNlbGYuc2V0dXBEZXNrdG9wWm9vbSgpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHNlbGYuc2V0dXBEZXNrdG9wWm9vbSh0cnVlKTtcblx0XHRcdH1cblxuXHRcdH0sXG5cblx0XHRzZXR1cERlc2t0b3Bab29tOiBmdW5jdGlvbihvbkluaXQpIHtcblxuXHRcdFx0X3doZWVsRGVsdGEgPSB7fTtcblxuXHRcdFx0dmFyIGV2ZW50cyA9ICd3aGVlbCBtb3VzZXdoZWVsIERPTU1vdXNlU2Nyb2xsJztcblx0XHRcdFxuXHRcdFx0X2xpc3RlbignYmluZEV2ZW50cycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRmcmFtZXdvcmsuYmluZCh0ZW1wbGF0ZSwgZXZlbnRzLCAgc2VsZi5oYW5kbGVNb3VzZVdoZWVsKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRfbGlzdGVuKCd1bmJpbmRFdmVudHMnLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYoX3doZWVsRGVsdGEpIHtcblx0XHRcdFx0XHRmcmFtZXdvcmsudW5iaW5kKHRlbXBsYXRlLCBldmVudHMsIHNlbGYuaGFuZGxlTW91c2VXaGVlbCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRzZWxmLm1vdXNlWm9vbWVkSW4gPSBmYWxzZTtcblxuXHRcdFx0dmFyIGhhc0RyYWdnaW5nQ2xhc3MsXG5cdFx0XHRcdHVwZGF0ZVpvb21hYmxlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aWYoc2VsZi5tb3VzZVpvb21lZEluKSB7XG5cdFx0XHRcdFx0XHRmcmFtZXdvcmsucmVtb3ZlQ2xhc3ModGVtcGxhdGUsICdwc3dwLS16b29tZWQtaW4nKTtcblx0XHRcdFx0XHRcdHNlbGYubW91c2Vab29tZWRJbiA9IGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZihfY3Vyclpvb21MZXZlbCA8IDEpIHtcblx0XHRcdFx0XHRcdGZyYW1ld29yay5hZGRDbGFzcyh0ZW1wbGF0ZSwgJ3Bzd3AtLXpvb20tYWxsb3dlZCcpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRmcmFtZXdvcmsucmVtb3ZlQ2xhc3ModGVtcGxhdGUsICdwc3dwLS16b29tLWFsbG93ZWQnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmVtb3ZlRHJhZ2dpbmdDbGFzcygpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRyZW1vdmVEcmFnZ2luZ0NsYXNzID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aWYoaGFzRHJhZ2dpbmdDbGFzcykge1xuXHRcdFx0XHRcdFx0ZnJhbWV3b3JrLnJlbW92ZUNsYXNzKHRlbXBsYXRlLCAncHN3cC0tZHJhZ2dpbmcnKTtcblx0XHRcdFx0XHRcdGhhc0RyYWdnaW5nQ2xhc3MgPSBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cblx0XHRcdF9saXN0ZW4oJ3Jlc2l6ZScgLCB1cGRhdGVab29tYWJsZSk7XG5cdFx0XHRfbGlzdGVuKCdhZnRlckNoYW5nZScgLCB1cGRhdGVab29tYWJsZSk7XG5cdFx0XHRfbGlzdGVuKCdwb2ludGVyRG93bicsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZihzZWxmLm1vdXNlWm9vbWVkSW4pIHtcblx0XHRcdFx0XHRoYXNEcmFnZ2luZ0NsYXNzID0gdHJ1ZTtcblx0XHRcdFx0XHRmcmFtZXdvcmsuYWRkQ2xhc3ModGVtcGxhdGUsICdwc3dwLS1kcmFnZ2luZycpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdF9saXN0ZW4oJ3BvaW50ZXJVcCcsIHJlbW92ZURyYWdnaW5nQ2xhc3MpO1xuXG5cdFx0XHRpZighb25Jbml0KSB7XG5cdFx0XHRcdHVwZGF0ZVpvb21hYmxlKCk7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHR9LFxuXG5cdFx0aGFuZGxlTW91c2VXaGVlbDogZnVuY3Rpb24oZSkge1xuXG5cdFx0XHRpZihfY3Vyclpvb21MZXZlbCA8PSBzZWxmLmN1cnJJdGVtLmZpdFJhdGlvKSB7XG5cdFx0XHRcdGlmKCBfb3B0aW9ucy5tb2RhbCApIHtcblxuXHRcdFx0XHRcdGlmICghX29wdGlvbnMuY2xvc2VPblNjcm9sbCB8fCBfbnVtQW5pbWF0aW9ucyB8fCBfaXNEcmFnZ2luZykge1xuXHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZihfdHJhbnNmb3JtS2V5ICYmIE1hdGguYWJzKGUuZGVsdGFZKSA+IDIpIHtcblx0XHRcdFx0XHRcdC8vIGNsb3NlIFBob3RvU3dpcGVcblx0XHRcdFx0XHRcdC8vIGlmIGJyb3dzZXIgc3VwcG9ydHMgdHJhbnNmb3JtcyAmIHNjcm9sbCBjaGFuZ2VkIGVub3VnaFxuXHRcdFx0XHRcdFx0X2Nsb3NlZEJ5U2Nyb2xsID0gdHJ1ZTtcblx0XHRcdFx0XHRcdHNlbGYuY2xvc2UoKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gYWxsb3cganVzdCBvbmUgZXZlbnQgdG8gZmlyZVxuXHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdFx0Ly8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvRXZlbnRzL3doZWVsXG5cdFx0XHRfd2hlZWxEZWx0YS54ID0gMDtcblxuXHRcdFx0aWYoJ2RlbHRhWCcgaW4gZSkge1xuXHRcdFx0XHRpZihlLmRlbHRhTW9kZSA9PT0gMSAvKiBET01fREVMVEFfTElORSAqLykge1xuXHRcdFx0XHRcdC8vIDE4IC0gYXZlcmFnZSBsaW5lIGhlaWdodFxuXHRcdFx0XHRcdF93aGVlbERlbHRhLnggPSBlLmRlbHRhWCAqIDE4O1xuXHRcdFx0XHRcdF93aGVlbERlbHRhLnkgPSBlLmRlbHRhWSAqIDE4O1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdF93aGVlbERlbHRhLnggPSBlLmRlbHRhWDtcblx0XHRcdFx0XHRfd2hlZWxEZWx0YS55ID0gZS5kZWx0YVk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZignd2hlZWxEZWx0YScgaW4gZSkge1xuXHRcdFx0XHRpZihlLndoZWVsRGVsdGFYKSB7XG5cdFx0XHRcdFx0X3doZWVsRGVsdGEueCA9IC0wLjE2ICogZS53aGVlbERlbHRhWDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZihlLndoZWVsRGVsdGFZKSB7XG5cdFx0XHRcdFx0X3doZWVsRGVsdGEueSA9IC0wLjE2ICogZS53aGVlbERlbHRhWTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRfd2hlZWxEZWx0YS55ID0gLTAuMTYgKiBlLndoZWVsRGVsdGE7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZignZGV0YWlsJyBpbiBlKSB7XG5cdFx0XHRcdF93aGVlbERlbHRhLnkgPSBlLmRldGFpbDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0X2NhbGN1bGF0ZVBhbkJvdW5kcyhfY3Vyclpvb21MZXZlbCwgdHJ1ZSk7XG5cblx0XHRcdHZhciBuZXdQYW5YID0gX3Bhbk9mZnNldC54IC0gX3doZWVsRGVsdGEueCxcblx0XHRcdFx0bmV3UGFuWSA9IF9wYW5PZmZzZXQueSAtIF93aGVlbERlbHRhLnk7XG5cblx0XHRcdC8vIG9ubHkgcHJldmVudCBzY3JvbGxpbmcgaW4gbm9ubW9kYWwgbW9kZSB3aGVuIG5vdCBhdCBlZGdlc1xuXHRcdFx0aWYgKF9vcHRpb25zLm1vZGFsIHx8XG5cdFx0XHRcdChcblx0XHRcdFx0bmV3UGFuWCA8PSBfY3VyclBhbkJvdW5kcy5taW4ueCAmJiBuZXdQYW5YID49IF9jdXJyUGFuQm91bmRzLm1heC54ICYmXG5cdFx0XHRcdG5ld1BhblkgPD0gX2N1cnJQYW5Cb3VuZHMubWluLnkgJiYgbmV3UGFuWSA+PSBfY3VyclBhbkJvdW5kcy5tYXgueVxuXHRcdFx0XHQpICkge1xuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFRPRE86IHVzZSByQUYgaW5zdGVhZCBvZiBtb3VzZXdoZWVsP1xuXHRcdFx0c2VsZi5wYW5UbyhuZXdQYW5YLCBuZXdQYW5ZKTtcblx0XHR9LFxuXG5cdFx0dG9nZ2xlRGVza3RvcFpvb206IGZ1bmN0aW9uKGNlbnRlclBvaW50KSB7XG5cdFx0XHRjZW50ZXJQb2ludCA9IGNlbnRlclBvaW50IHx8IHt4Ol92aWV3cG9ydFNpemUueC8yICsgX29mZnNldC54LCB5Ol92aWV3cG9ydFNpemUueS8yICsgX29mZnNldC55IH07XG5cblx0XHRcdHZhciBkb3VibGVUYXBab29tTGV2ZWwgPSBfb3B0aW9ucy5nZXREb3VibGVUYXBab29tKHRydWUsIHNlbGYuY3Vyckl0ZW0pO1xuXHRcdFx0dmFyIHpvb21PdXQgPSBfY3Vyclpvb21MZXZlbCA9PT0gZG91YmxlVGFwWm9vbUxldmVsO1xuXHRcdFx0XG5cdFx0XHRzZWxmLm1vdXNlWm9vbWVkSW4gPSAhem9vbU91dDtcblxuXHRcdFx0c2VsZi56b29tVG8oem9vbU91dCA/IHNlbGYuY3Vyckl0ZW0uaW5pdGlhbFpvb21MZXZlbCA6IGRvdWJsZVRhcFpvb21MZXZlbCwgY2VudGVyUG9pbnQsIDMzMyk7XG5cdFx0XHRmcmFtZXdvcmtbICghem9vbU91dCA/ICdhZGQnIDogJ3JlbW92ZScpICsgJ0NsYXNzJ10odGVtcGxhdGUsICdwc3dwLS16b29tZWQtaW4nKTtcblx0XHR9XG5cblx0fVxufSk7XG5cblxuLyo+PmRlc2t0b3Atem9vbSovXG5cbi8qPj5oaXN0b3J5Ki9cbi8qKlxuICpcbiAqIGhpc3RvcnkuanM6XG4gKlxuICogLSBCYWNrIGJ1dHRvbiB0byBjbG9zZSBnYWxsZXJ5LlxuICogXG4gKiAtIFVuaXF1ZSBVUkwgZm9yIGVhY2ggc2xpZGU6IGV4YW1wbGUuY29tLyZwaWQ9MSZnaWQ9M1xuICogICAod2hlcmUgUElEIGlzIHBpY3R1cmUgaW5kZXgsIGFuZCBHSUQgYW5kIGdhbGxlcnkgaW5kZXgpXG4gKiAgIFxuICogLSBTd2l0Y2ggVVJMIHdoZW4gc2xpZGVzIGNoYW5nZS5cbiAqIFxuICovXG5cblxudmFyIF9oaXN0b3J5RGVmYXVsdE9wdGlvbnMgPSB7XG5cdGhpc3Rvcnk6IHRydWUsXG5cdGdhbGxlcnlVSUQ6IDFcbn07XG5cbnZhciBfaGlzdG9yeVVwZGF0ZVRpbWVvdXQsXG5cdF9oYXNoQ2hhbmdlVGltZW91dCxcblx0X2hhc2hBbmltQ2hlY2tUaW1lb3V0LFxuXHRfaGFzaENoYW5nZWRCeVNjcmlwdCxcblx0X2hhc2hDaGFuZ2VkQnlIaXN0b3J5LFxuXHRfaGFzaFJlc2V0ZWQsXG5cdF9pbml0aWFsSGFzaCxcblx0X2hpc3RvcnlDaGFuZ2VkLFxuXHRfY2xvc2VkRnJvbVVSTCxcblx0X3VybENoYW5nZWRPbmNlLFxuXHRfd2luZG93TG9jLFxuXG5cdF9zdXBwb3J0c1B1c2hTdGF0ZSxcblxuXHRfZ2V0SGFzaCA9IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfd2luZG93TG9jLmhhc2guc3Vic3RyaW5nKDEpO1xuXHR9LFxuXHRfY2xlYW5IaXN0b3J5VGltZW91dHMgPSBmdW5jdGlvbigpIHtcblxuXHRcdGlmKF9oaXN0b3J5VXBkYXRlVGltZW91dCkge1xuXHRcdFx0Y2xlYXJUaW1lb3V0KF9oaXN0b3J5VXBkYXRlVGltZW91dCk7XG5cdFx0fVxuXG5cdFx0aWYoX2hhc2hBbmltQ2hlY2tUaW1lb3V0KSB7XG5cdFx0XHRjbGVhclRpbWVvdXQoX2hhc2hBbmltQ2hlY2tUaW1lb3V0KTtcblx0XHR9XG5cdH0sXG5cblx0Ly8gcGlkIC0gUGljdHVyZSBpbmRleFxuXHQvLyBnaWQgLSBHYWxsZXJ5IGluZGV4XG5cdF9wYXJzZUl0ZW1JbmRleEZyb21VUkwgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgaGFzaCA9IF9nZXRIYXNoKCksXG5cdFx0XHRwYXJhbXMgPSB7fTtcblxuXHRcdGlmKGhhc2gubGVuZ3RoIDwgNSkgeyAvLyBwaWQ9MVxuXHRcdFx0cmV0dXJuIHBhcmFtcztcblx0XHR9XG5cblx0XHR2YXIgaSwgdmFycyA9IGhhc2guc3BsaXQoJyYnKTtcblx0XHRmb3IgKGkgPSAwOyBpIDwgdmFycy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYoIXZhcnNbaV0pIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHR2YXIgcGFpciA9IHZhcnNbaV0uc3BsaXQoJz0nKTtcdFxuXHRcdFx0aWYocGFpci5sZW5ndGggPCAyKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0cGFyYW1zW3BhaXJbMF1dID0gcGFpclsxXTtcblx0XHR9XG5cdFx0aWYoX29wdGlvbnMuZ2FsbGVyeVBJRHMpIHtcblx0XHRcdC8vIGRldGVjdCBjdXN0b20gcGlkIGluIGhhc2ggYW5kIHNlYXJjaCBmb3IgaXQgYW1vbmcgdGhlIGl0ZW1zIGNvbGxlY3Rpb25cblx0XHRcdHZhciBzZWFyY2hmb3IgPSBwYXJhbXMucGlkO1xuXHRcdFx0cGFyYW1zLnBpZCA9IDA7IC8vIGlmIGN1c3RvbSBwaWQgY2Fubm90IGJlIGZvdW5kLCBmYWxsYmFjayB0byB0aGUgZmlyc3QgaXRlbVxuXHRcdFx0Zm9yKGkgPSAwOyBpIDwgX2l0ZW1zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmKF9pdGVtc1tpXS5waWQgPT09IHNlYXJjaGZvcikge1xuXHRcdFx0XHRcdHBhcmFtcy5waWQgPSBpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHBhcmFtcy5waWQgPSBwYXJzZUludChwYXJhbXMucGlkLDEwKS0xO1xuXHRcdH1cblx0XHRpZiggcGFyYW1zLnBpZCA8IDAgKSB7XG5cdFx0XHRwYXJhbXMucGlkID0gMDtcblx0XHR9XG5cdFx0cmV0dXJuIHBhcmFtcztcblx0fSxcblx0X3VwZGF0ZUhhc2ggPSBmdW5jdGlvbigpIHtcblxuXHRcdGlmKF9oYXNoQW5pbUNoZWNrVGltZW91dCkge1xuXHRcdFx0Y2xlYXJUaW1lb3V0KF9oYXNoQW5pbUNoZWNrVGltZW91dCk7XG5cdFx0fVxuXG5cblx0XHRpZihfbnVtQW5pbWF0aW9ucyB8fCBfaXNEcmFnZ2luZykge1xuXHRcdFx0Ly8gY2hhbmdpbmcgYnJvd3NlciBVUkwgZm9yY2VzIGxheW91dC9wYWludCBpbiBzb21lIGJyb3dzZXJzLCB3aGljaCBjYXVzZXMgbm90aWNhYmxlIGxhZyBkdXJpbmcgYW5pbWF0aW9uXG5cdFx0XHQvLyB0aGF0J3Mgd2h5IHdlIHVwZGF0ZSBoYXNoIG9ubHkgd2hlbiBubyBhbmltYXRpb25zIHJ1bm5pbmdcblx0XHRcdF9oYXNoQW5pbUNoZWNrVGltZW91dCA9IHNldFRpbWVvdXQoX3VwZGF0ZUhhc2gsIDUwMCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdFxuXHRcdGlmKF9oYXNoQ2hhbmdlZEJ5U2NyaXB0KSB7XG5cdFx0XHRjbGVhclRpbWVvdXQoX2hhc2hDaGFuZ2VUaW1lb3V0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0X2hhc2hDaGFuZ2VkQnlTY3JpcHQgPSB0cnVlO1xuXHRcdH1cblxuXG5cdFx0dmFyIHBpZCA9IChfY3VycmVudEl0ZW1JbmRleCArIDEpO1xuXHRcdHZhciBpdGVtID0gX2dldEl0ZW1BdCggX2N1cnJlbnRJdGVtSW5kZXggKTtcblx0XHRpZihpdGVtLmhhc093blByb3BlcnR5KCdwaWQnKSkge1xuXHRcdFx0Ly8gY2FycnkgZm9yd2FyZCBhbnkgY3VzdG9tIHBpZCBhc3NpZ25lZCB0byB0aGUgaXRlbVxuXHRcdFx0cGlkID0gaXRlbS5waWQ7XG5cdFx0fVxuXHRcdHZhciBuZXdIYXNoID0gX2luaXRpYWxIYXNoICsgJyYnICArICAnZ2lkPScgKyBfb3B0aW9ucy5nYWxsZXJ5VUlEICsgJyYnICsgJ3BpZD0nICsgcGlkO1xuXG5cdFx0aWYoIV9oaXN0b3J5Q2hhbmdlZCkge1xuXHRcdFx0aWYoX3dpbmRvd0xvYy5oYXNoLmluZGV4T2YobmV3SGFzaCkgPT09IC0xKSB7XG5cdFx0XHRcdF91cmxDaGFuZ2VkT25jZSA9IHRydWU7XG5cdFx0XHR9XG5cdFx0XHQvLyBmaXJzdCB0aW1lIC0gYWRkIG5ldyBoaXNvcnkgcmVjb3JkLCB0aGVuIGp1c3QgcmVwbGFjZVxuXHRcdH1cblxuXHRcdHZhciBuZXdVUkwgPSBfd2luZG93TG9jLmhyZWYuc3BsaXQoJyMnKVswXSArICcjJyArICBuZXdIYXNoO1xuXG5cdFx0aWYoIF9zdXBwb3J0c1B1c2hTdGF0ZSApIHtcblxuXHRcdFx0aWYoJyMnICsgbmV3SGFzaCAhPT0gd2luZG93LmxvY2F0aW9uLmhhc2gpIHtcblx0XHRcdFx0aGlzdG9yeVtfaGlzdG9yeUNoYW5nZWQgPyAncmVwbGFjZVN0YXRlJyA6ICdwdXNoU3RhdGUnXSgnJywgZG9jdW1lbnQudGl0bGUsIG5ld1VSTCk7XG5cdFx0XHR9XG5cblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYoX2hpc3RvcnlDaGFuZ2VkKSB7XG5cdFx0XHRcdF93aW5kb3dMb2MucmVwbGFjZSggbmV3VVJMICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRfd2luZG93TG9jLmhhc2ggPSBuZXdIYXNoO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRcblx0XHRcblxuXHRcdF9oaXN0b3J5Q2hhbmdlZCA9IHRydWU7XG5cdFx0X2hhc2hDaGFuZ2VUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdF9oYXNoQ2hhbmdlZEJ5U2NyaXB0ID0gZmFsc2U7XG5cdFx0fSwgNjApO1xuXHR9O1xuXG5cblxuXHRcblxuX3JlZ2lzdGVyTW9kdWxlKCdIaXN0b3J5Jywge1xuXG5cdFxuXG5cdHB1YmxpY01ldGhvZHM6IHtcblx0XHRpbml0SGlzdG9yeTogZnVuY3Rpb24oKSB7XG5cblx0XHRcdGZyYW1ld29yay5leHRlbmQoX29wdGlvbnMsIF9oaXN0b3J5RGVmYXVsdE9wdGlvbnMsIHRydWUpO1xuXG5cdFx0XHRpZiggIV9vcHRpb25zLmhpc3RvcnkgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXG5cdFx0XHRfd2luZG93TG9jID0gd2luZG93LmxvY2F0aW9uO1xuXHRcdFx0X3VybENoYW5nZWRPbmNlID0gZmFsc2U7XG5cdFx0XHRfY2xvc2VkRnJvbVVSTCA9IGZhbHNlO1xuXHRcdFx0X2hpc3RvcnlDaGFuZ2VkID0gZmFsc2U7XG5cdFx0XHRfaW5pdGlhbEhhc2ggPSBfZ2V0SGFzaCgpO1xuXHRcdFx0X3N1cHBvcnRzUHVzaFN0YXRlID0gKCdwdXNoU3RhdGUnIGluIGhpc3RvcnkpO1xuXG5cblx0XHRcdGlmKF9pbml0aWFsSGFzaC5pbmRleE9mKCdnaWQ9JykgPiAtMSkge1xuXHRcdFx0XHRfaW5pdGlhbEhhc2ggPSBfaW5pdGlhbEhhc2guc3BsaXQoJyZnaWQ9JylbMF07XG5cdFx0XHRcdF9pbml0aWFsSGFzaCA9IF9pbml0aWFsSGFzaC5zcGxpdCgnP2dpZD0nKVswXTtcblx0XHRcdH1cblx0XHRcdFxuXG5cdFx0XHRfbGlzdGVuKCdhZnRlckNoYW5nZScsIHNlbGYudXBkYXRlVVJMKTtcblx0XHRcdF9saXN0ZW4oJ3VuYmluZEV2ZW50cycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRmcmFtZXdvcmsudW5iaW5kKHdpbmRvdywgJ2hhc2hjaGFuZ2UnLCBzZWxmLm9uSGFzaENoYW5nZSk7XG5cdFx0XHR9KTtcblxuXG5cdFx0XHR2YXIgcmV0dXJuVG9PcmlnaW5hbCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRfaGFzaFJlc2V0ZWQgPSB0cnVlO1xuXHRcdFx0XHRpZighX2Nsb3NlZEZyb21VUkwpIHtcblxuXHRcdFx0XHRcdGlmKF91cmxDaGFuZ2VkT25jZSkge1xuXHRcdFx0XHRcdFx0aGlzdG9yeS5iYWNrKCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdFx0aWYoX2luaXRpYWxIYXNoKSB7XG5cdFx0XHRcdFx0XHRcdF93aW5kb3dMb2MuaGFzaCA9IF9pbml0aWFsSGFzaDtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGlmIChfc3VwcG9ydHNQdXNoU3RhdGUpIHtcblxuXHRcdFx0XHRcdFx0XHRcdC8vIHJlbW92ZSBoYXNoIGZyb20gdXJsIHdpdGhvdXQgcmVmcmVzaGluZyBpdCBvciBzY3JvbGxpbmcgdG8gdG9wXG5cdFx0XHRcdFx0XHRcdFx0aGlzdG9yeS5wdXNoU3RhdGUoJycsIGRvY3VtZW50LnRpdGxlLCAgX3dpbmRvd0xvYy5wYXRobmFtZSArIF93aW5kb3dMb2Muc2VhcmNoICk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0X3dpbmRvd0xvYy5oYXNoID0gJyc7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRfY2xlYW5IaXN0b3J5VGltZW91dHMoKTtcblx0XHRcdH07XG5cblxuXHRcdFx0X2xpc3RlbigndW5iaW5kRXZlbnRzJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmKF9jbG9zZWRCeVNjcm9sbCkge1xuXHRcdFx0XHRcdC8vIGlmIFBob3RvU3dpcGUgaXMgY2xvc2VkIGJ5IHNjcm9sbCwgd2UgZ28gXCJiYWNrXCIgYmVmb3JlIHRoZSBjbG9zaW5nIGFuaW1hdGlvbiBzdGFydHNcblx0XHRcdFx0XHQvLyB0aGlzIGlzIGRvbmUgdG8ga2VlcCB0aGUgc2Nyb2xsIHBvc2l0aW9uXG5cdFx0XHRcdFx0cmV0dXJuVG9PcmlnaW5hbCgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdF9saXN0ZW4oJ2Rlc3Ryb3knLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYoIV9oYXNoUmVzZXRlZCkge1xuXHRcdFx0XHRcdHJldHVyblRvT3JpZ2luYWwoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHRfbGlzdGVuKCdmaXJzdFVwZGF0ZScsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRfY3VycmVudEl0ZW1JbmRleCA9IF9wYXJzZUl0ZW1JbmRleEZyb21VUkwoKS5waWQ7XG5cdFx0XHR9KTtcblxuXHRcdFx0XG5cblx0XHRcdFxuXHRcdFx0dmFyIGluZGV4ID0gX2luaXRpYWxIYXNoLmluZGV4T2YoJ3BpZD0nKTtcblx0XHRcdGlmKGluZGV4ID4gLTEpIHtcblx0XHRcdFx0X2luaXRpYWxIYXNoID0gX2luaXRpYWxIYXNoLnN1YnN0cmluZygwLCBpbmRleCk7XG5cdFx0XHRcdGlmKF9pbml0aWFsSGFzaC5zbGljZSgtMSkgPT09ICcmJykge1xuXHRcdFx0XHRcdF9pbml0aWFsSGFzaCA9IF9pbml0aWFsSGFzaC5zbGljZSgwLCAtMSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdFxuXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZihfaXNPcGVuKSB7IC8vIGhhc24ndCBkZXN0cm95ZWQgeWV0XG5cdFx0XHRcdFx0ZnJhbWV3b3JrLmJpbmQod2luZG93LCAnaGFzaGNoYW5nZScsIHNlbGYub25IYXNoQ2hhbmdlKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgNDApO1xuXHRcdFx0XG5cdFx0fSxcblx0XHRvbkhhc2hDaGFuZ2U6IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRpZihfZ2V0SGFzaCgpID09PSBfaW5pdGlhbEhhc2gpIHtcblxuXHRcdFx0XHRfY2xvc2VkRnJvbVVSTCA9IHRydWU7XG5cdFx0XHRcdHNlbGYuY2xvc2UoKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYoIV9oYXNoQ2hhbmdlZEJ5U2NyaXB0KSB7XG5cblx0XHRcdFx0X2hhc2hDaGFuZ2VkQnlIaXN0b3J5ID0gdHJ1ZTtcblx0XHRcdFx0c2VsZi5nb1RvKCBfcGFyc2VJdGVtSW5kZXhGcm9tVVJMKCkucGlkICk7XG5cdFx0XHRcdF9oYXNoQ2hhbmdlZEJ5SGlzdG9yeSA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0fSxcblx0XHR1cGRhdGVVUkw6IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHQvLyBEZWxheSB0aGUgdXBkYXRlIG9mIFVSTCwgdG8gYXZvaWQgbGFnIGR1cmluZyB0cmFuc2l0aW9uLCBcblx0XHRcdC8vIGFuZCB0byBub3QgdG8gdHJpZ2dlciBhY3Rpb25zIGxpa2UgXCJyZWZyZXNoIHBhZ2Ugc291bmRcIiBvciBcImJsaW5raW5nIGZhdmljb25cIiB0byBvZnRlblxuXHRcdFx0XG5cdFx0XHRfY2xlYW5IaXN0b3J5VGltZW91dHMoKTtcblx0XHRcdFxuXG5cdFx0XHRpZihfaGFzaENoYW5nZWRCeUhpc3RvcnkpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZighX2hpc3RvcnlDaGFuZ2VkKSB7XG5cdFx0XHRcdF91cGRhdGVIYXNoKCk7IC8vIGZpcnN0IHRpbWVcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdF9oaXN0b3J5VXBkYXRlVGltZW91dCA9IHNldFRpbWVvdXQoX3VwZGF0ZUhhc2gsIDgwMCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcblx0fVxufSk7XG5cblxuLyo+Pmhpc3RvcnkqL1xuXHRmcmFtZXdvcmsuZXh0ZW5kKHNlbGYsIHB1YmxpY01ldGhvZHMpOyB9O1xuXHRyZXR1cm4gUGhvdG9Td2lwZTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Bob3Rvc3dpcGUvZGlzdC9waG90b3N3aXBlLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9waG90b3N3aXBlL2Rpc3QvcGhvdG9zd2lwZS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwic291cmNlUm9vdCI6IiJ9