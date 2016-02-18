TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "id": "panorama_E26B62C9_E743_8D91_41BB_6D2DABC286B1",
  "hfov": 360,
  "hfovMax": 120,
  "class": "Panorama",
  "label": "awadorange",
  "hfovMin": 60,
  "pitch": 0.7839721441268921,
  "partial": false,
  "thumbnailUrl": "media/panorama_E26B62C9_E743_8D91_41BB_6D2DABC286B1_t.jpg",
  "vfov": 164.09128075522187,
  "frames": [
   {
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_E26B62C9_E743_8D91_41BB_6D2DABC286B1_f_hq.jpeg",
       "width": 1992,
       "height": 1992
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_E26B62C9_E743_8D91_41BB_6D2DABC286B1_f.jpeg",
       "width": 800,
       "height": 800
      }
     ]
    },
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_E26B62C9_E743_8D91_41BB_6D2DABC286B1_r_hq.jpeg",
       "width": 1992,
       "height": 1992
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_E26B62C9_E743_8D91_41BB_6D2DABC286B1_r.jpeg",
       "width": 800,
       "height": 800
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_E26B62C9_E743_8D91_41BB_6D2DABC286B1_u_hq.jpeg",
       "width": 1992,
       "height": 1992
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_E26B62C9_E743_8D91_41BB_6D2DABC286B1_u.jpeg",
       "width": 800,
       "height": 800
      }
     ]
    },
    "class": "CubicPanoramaFrame",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_E26B62C9_E743_8D91_41BB_6D2DABC286B1_d_hq.jpeg",
       "width": 1992,
       "height": 1992
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_E26B62C9_E743_8D91_41BB_6D2DABC286B1_d.jpeg",
       "width": 800,
       "height": 800
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_E26B62C9_E743_8D91_41BB_6D2DABC286B1_b_hq.jpeg",
       "width": 1992,
       "height": 1992
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_E26B62C9_E743_8D91_41BB_6D2DABC286B1_b.jpeg",
       "width": 800,
       "height": 800
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_E26B62C9_E743_8D91_41BB_6D2DABC286B1_l_hq.jpeg",
       "width": 1992,
       "height": 1992
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_E26B62C9_E743_8D91_41BB_6D2DABC286B1_l.jpeg",
       "width": 800,
       "height": 800
      }
     ]
    },
    "thumbnailUrl": "media/panorama_E26B62C9_E743_8D91_41BB_6D2DABC286B1_t.jpg"
   }
  ]
 },
 {
  "id": "panorama_E26B62C9_E743_8D91_41BB_6D2DABC286B1_camera",
  "manualRotationSpeed": 918,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 8.95
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 8.95
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 8.95
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "automaticRotationSpeed": 51,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": -1.5679442882537842
  }
 },
 {
  "class": "PlayList",
  "id": "playList_EFC77E0D_E747_F491_41DD_062AC1580857",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_E26B62C9_E743_8D91_41BB_6D2DABC286B1_camera",
    "player": {
     "id": "MainViewerPanoramaPlayer",
     "gyroscopeEnabled": true,
     "class": "PanoramaPlayer",
     "mouseControlMode": "drag_acceleration",
     "touchControlMode": "drag_rotation",
     "viewerArea": "this.MainViewer"
    },
    "media": "this.panorama_E26B62C9_E743_8D91_41BB_6D2DABC286B1"
   }
  ]
 }
], "children": [
 {
  "progressBarBorderSize": 0,
  "class": "ViewerArea",
  "progressBorderRadius": 0,
  "progressBarOpacity": 1,
  "progressBorderColor": "#000000",
  "paddingLeft": 0,
  "progressBottom": 0,
  "progressBorderSize": 0,
  "progressLeft": 0,
  "progressHeight": 10,
  "paddingRight": 0,
  "progressOpacity": 1,
  "playbackBarBackgroundColorDirection": "vertical",
  "progressRight": 0,
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarBorderRadius": 0,
  "playbackBarBackgroundOpacity": 1,
  "playbackBarBorderSize": 0,
  "playbackBarHeight": 10,
  "playbackBarBottom": 5,
  "playbackBarLeft": 0,
  "playbackBarRight": 0,
  "playbackBarOpacity": 1,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarProgressOpacity": 1,
  "paddingBottom": 0,
  "playbackBarProgressBorderRadius": 0,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarProgressBorderSize": 0,
  "paddingTop": 0,
  "playbackBarHeadOpacity": 1,
  "toolTipFontWeight": "normal",
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarHeadBorderRadius": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "height": "100%",
  "toolTipShadowHorizontalLength": 0,
  "id": "MainViewer",
  "playbackBarHeadWidth": 6,
  "toolTipShadowVerticalLength": 0,
  "width": "100%",
  "playbackBarHeadHeight": 15,
  "toolTipFontStyle": "normal",
  "playbackBarHeadShadow": true,
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarHeadBorderSize": 0,
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipOpacity": 1,
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipBorderColor": "#767676",
  "borderSize": 0,
  "toolTipBorderRadius": 3,
  "toolTipBorderSize": 1,
  "toolTipFontFamily": "Arial",
  "toolTipFontColor": "#606060",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "toolTipFontSize": 12,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "progressBackgroundColorRatios": [
   0
  ],
  "toolTipPaddingLeft": 6,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "borderRadius": 0,
  "toolTipPaddingRight": 6,
  "toolTipPaddingTop": 4,
  "toolTipPaddingBottom": 4,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipShadowBlurRadius": 3,
  "minHeight": 50,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "minWidth": 100,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipShadowOpacity": 1,
  "shadow": false,
  "toolTipShadowColor": "#333333",
  "transitionMode": "blending",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "progressBackgroundColorDirection": "vertical",
  "toolTipShadowSpread": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "progressBackgroundOpacity": 1,
  "toolTipTextShadowOpacity": 0,
  "toolTipTextShadowBlurRadius": 3,
  "toolTipTextShadowColor": "#000000",
  "progressBarBorderColor": "#000000",
  "progressBarBorderRadius": 0
 },
 {
  "backgroundOpacity": 0,
  "class": "Container",
  "scrollBarVisible": "rollOver",
  "children": [
   {
    "itemThumbnailShadowColor": "#000000",
    "itemThumbnailOpacity": 1,
    "backgroundOpacity": 0.2,
    "class": "ThumbnailList",
    "scrollBarVisible": "rollOver",
    "itemThumbnailWidth": 100,
    "itemBackgroundColorRatios": [],
    "paddingLeft": 20,
    "itemLabelPosition": "bottom",
    "itemMode": "normal",
    "borderSize": 0,
    "paddingRight": 20,
    "itemBackgroundOpacity": 0,
    "horizontalAlign": "left",
    "itemBorderRadius": 0,
    "playList": "this.playList_EFC77E0D_E747_F491_41DD_062AC1580857",
    "itemBackgroundColorDirection": "vertical",
    "maxHeight": 600,
    "maxWidth": 800,
    "borderRadius": 5,
    "itemPaddingRight": 3,
    "itemLabelFontFamily": "Arial",
    "itemThumbnailShadowOpacity": 0.8,
    "itemHorizontalAlign": "center",
    "itemLabelGap": 5,
    "minHeight": 0,
    "itemVerticalAlign": "middle",
    "minWidth": 0,
    "scrollBarColor": "#FFFFFF",
    "itemLabelFontSize": 14,
    "itemThumbnailHeight": 75,
    "backgroundColorRatios": [
     0
    ],
    "itemPaddingLeft": 3,
    "itemPaddingTop": 3,
    "itemPaddingBottom": 3,
    "shadow": false,
    "itemLabelHorizontalAlign": "center",
    "paddingBottom": 10,
    "itemThumbnailBorderRadius": 5,
    "layout": "horizontal",
    "backgroundColor": [
     "#000000"
    ],
    "itemLabelFontWeight": "normal",
    "paddingTop": 10,
    "itemLabelFontColor": "#FFFFFF",
    "verticalAlign": "top",
    "itemThumbnailScaleMode": "fit_outside",
    "itemBackgroundColor": [],
    "gap": 10,
    "itemLabelFontStyle": "normal",
    "itemLabelTextDecoration": "none",
    "itemThumbnailShadowBlurRadius": 4,
    "itemOpacity": 1,
    "itemThumbnailShadowVerticalLength": 3,
    "itemThumbnailShadow": true,
    "backgroundColorDirection": "vertical",
    "scrollBarWidth": 10,
    "scrollBarOpacity": 0.5,
    "scrollBarMargin": 2,
    "itemThumbnailShadowSpread": 1,
    "itemThumbnailShadowHorizontalLength": 3,
    "selectedItemLabelFontWeight": "bold"
   }
  ],
  "paddingLeft": 0,
  "borderSize": 0,
  "paddingRight": 0,
  "left": 0,
  "horizontalAlign": "center",
  "right": 0,
  "overflow": "visible",
  "bottom": 0,
  "borderRadius": 0,
  "minHeight": 20,
  "contentOpaque": false,
  "minWidth": 20,
  "scrollBarColor": "#000000",
  "verticalAlign": "bottom",
  "shadow": false,
  "paddingBottom": 0,
  "layout": "horizontal",
  "paddingTop": 0,
  "height": 200,
  "gap": 10,
  "scrollBarOpacity": 0.5,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2
 }
], 
 "scrollBarOpacity": 0.5,
 "class": "Player",
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingRight": 0,
 "horizontalAlign": "left",
 "overflow": "visible",
 "borderRadius": 0,
 "minHeight": 20,
 "contentOpaque": false,
 "minWidth": 20,
 "scrollBarColor": "#000000",
 "shadow": false,
 "paddingBottom": 0,
 "layout": "absolute",
 "start": "this.playList_EFC77E0D_E747_F491_41DD_062AC1580857.set('selectedIndex', 0)",
 "paddingTop": 0,
 "height": "100%",
 "verticalAlign": "top",
 "width": "100%",
 "gap": 10,
 "backgroundPreloadEnabled": true,
 "mouseWheelEnabled": true,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "scripts": {
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){    var enabled = this.get(playerFlag);   for(var i in components){       components[i].set('visible', enabled);   } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           this.stopGlobalAudio(audio);           playList.unbind('change', changeFunction, this);           if(endCallback)               endCallback();       }   };   playList.bind('change', changeFunction, this);   this.playGlobalAudio(audio, endCallback); },
  "playGlobalAudio": function(audio, endCallback){    var endFunction = function(){       audio.unbind('end', endFunction, this);       this.stopGlobalAudio(audio);       if(endCallback)           endCallback();   };   var audios = window.currentGlobalAudios;   if(!audios){       audios = window.currentGlobalAudios = [audio];   }   else if(audios.indexOf(audio) == -1){       audios.push(audio);   }   audio.bind('end', endFunction, this);   audio.play(); },
  "resumeGlobalAudios": function(caller){    if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller)       return;   window.currentGlobalAudiosActionCaller = undefined;   var audios = window.currentGlobalAudios;   if(!audios) return;   for(var i = 0, count = audios.length; i<count; i++){       audios[i].play();   } },
  "resumePlayList": function(playList, containsAudio){    if(playList){       var player = playList.get('items')[playList.get('selectedIndex')].get('player');       if(player){           if(!containsAudio && typeof player.resumeCamera !== 'undefined'){               player.resumeCamera();           }           else{               player.play();           }       }   } },
  "stopGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       var index = audios.indexOf(audio);       if(index != -1){           audios.splice(index, 1);       }   }   audio.stop(); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){    var resetFunction = function(){       panoramaPlayListItem.unbind('stop', resetFunction, this);       player.set('mapPlayer', null);   };   panoramaPlayListItem.bind('stop', resetFunction, this);   var player = panoramaPlayListItem.get('player');   player.set('mapPlayer', mapPlayer); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){    var changeVisibility = function(){        if(effect && propertyEffect){            component.set(propertyEffect, effect);        }        component.set('visible', visible);       if(component.get('class') == 'ViewerArea'){           try{               if(visible) component.restart();               else        component.pause();           }           catch(e){};       }   };   var effectTimeoutName = 'effectTimeout_'+component.get('id');   if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){       var effectTimeout = window[effectTimeoutName];       if(effectTimeout instanceof Array){           for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) }       }else{           clearTimeout(effectTimeout);       }       delete window[effectTimeoutName];   }   else if(visible == component.get('visible') && !ignoreClearTimeout)       return;   if(applyAt && applyAt > 0){       var effectTimeout = setTimeout(function(){            if(window[effectTimeoutName] instanceof Array) {                var arrayTimeoutVal = window[effectTimeoutName];               var index = arrayTimeoutVal.indexOf(effectTimeout);               arrayTimeoutVal.splice(index, 1);               if(arrayTimeoutVal.length == 0){                   delete window[effectTimeoutName];               }           }else{               delete window[effectTimeoutName];            }           changeVisibility();        }, applyAt);       if(window.hasOwnProperty(effectTimeoutName)){           window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout];       }else{           window[effectTimeoutName] = effectTimeout;       }   }   else{       changeVisibility();   } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){    var endFunction = function(){       if(playList.get('selectedIndex') == fromIndex)           playList.set('selectedIndex', toIndex);   };   this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "fixTogglePlayPauseButton": function(player){    var state = player.get('state');   var button = player.get('buttonPlayPause');   if(typeof button !== 'undefined' && player.get('state') == 'playing'){       button.set('pressed', true);   } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){    var self = this;   var stateChangeFunction = function(event){       if(event.data.state == 'stopped'){           dispose();       }   };   var changeFunction = function(){       var index = playListDispatcher.get('selectedIndex');       if(index != -1){           indexDispatcher = index;           dispose();       }   };   var dispose = function(){       playList.set('selectedIndex', -1);       playListDispatcher.set('selectedIndex', indexDispatcher);       if(player)           player.unbind('stateChange', stateChangeFunction, self);       if(sameViewerArea){           if(playList != playListDispatcher)               playListDispatcher.unbind('change', changeFunction, self);       }       else{           viewerArea.set('visible', false);       }   };   if(!mediaDispatcher){       var currentIndex = playList.get('selectedIndex');       var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.MainViewer;       if(currentPlayer.get('panorama')) mediaDispatcher = currentPlayer.get('panorama');       else if(currentPlayer.get('video')) mediaDispatcher = currentPlayer.get('video');       else if(currentPlayer.get('photoAlbum')) mediaDispatcher = currentPlayer.get('photoAlbum');       else if(currentPlayer.get('map')) mediaDispatcher = currentPlayer.get('map');   }   var playListDispatcher = this.getPlayListWithMedia(mediaDispatcher, true);   if(!playListDispatcher){       playList.set('selectedIndex', index);       return;   }   var indexDispatcher = playListDispatcher.get('selectedIndex');   if(playList.get('selectedIndex') == index || indexDispatcher == -1){       return;   }   var item = playList.get('items')[index];   var itemDispatcher = playListDispatcher.get('items')[indexDispatcher];   var viewerArea = item.get('player').get('viewerArea');   var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea');   if(sameViewerArea){       if(playList != playListDispatcher){           playListDispatcher.set('selectedIndex', -1);           playListDispatcher.bind('change', changeFunction, this);       }   }   else{       viewerArea.set('visible', true);   }   playList.set('selectedIndex', index);   if(item.get('player') != itemDispatcher.get('player')){       var player = item.get('player');       player.bind('stateChange', stateChangeFunction, this);   }   this.executeFunctionWhenChange(playList, index, dispose); },
  "shareFacebook": function(url){    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "shareGoogle": function(url){    window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "autotriggerAtStart": function(player, callback){    var stateChangeFunction = function(event){        if(event.data.state == 'playing'){           callback();           player.unbind('stateChange', stateChangeFunction, this);       }   };   player.bind('stateChange', stateChangeFunction, this); },
  "shareTwitter": function(url){    window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "changeBackgroundWhilePlay": function(playList, index, color){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           playList.unbind('change', changeFunction, this);           if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){               viewerArea.set('backgroundColor', backgroundColorBackup);               viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup);           }       }   };   var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var viewerArea = player.get('viewerArea');   var backgroundColorBackup = viewerArea.get('backgroundColor');   var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios');   var colorRatios = [0];   if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){       viewerArea.set('backgroundColor', color);       viewerArea.set('backgroundColorRatios', colorRatios);       playList.bind('change', changeFunction, this);   } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){    var rollOutFunction = function(){       var rollOverFunction = function(){           clearTimeout(timeoutID);           dispose();       };       var timeoutFunction = function(){           setVisibility(false);           dispose();       };       var dispose = function(){           parentComponent.unbind('rollOver', rollOverFunction, this);       };       parentComponent.unbind('rollOut', rollOutFunction, this);       parentComponent.bind('rollOver', rollOverFunction, this);       var timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut);   };   var setVisibility = function(visible){       for(var i = 0, length = components.length; i<length; i++){           components[i].set('visible', visible);       }   };   parentComponent.bind('rollOut', rollOutFunction, this);   setVisibility(true); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){    var self = this;   var changePlayListFunction = function(event){       if(event.data.previousSelectedIndex == index){           if(changeFunction) changeFunction();           if(endFunction) endObject.unbind('end', endFunction, self);           playList.unbind('change', changePlayListFunction, self);       }   };   if(endFunction){       var playListItem = playList.get('items')[index];       var camera = playListItem.get('camera');       if(camera){           var endObject = camera.get('initialSequence');           if(!endObject) return;       }       else{           endObject = playListItem.get('media');       }       endObject.bind('end', endFunction, this);   }   playList.bind('change', changePlayListFunction, this); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, playListToPause, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){    var self = this;   var closed = false;   var playerClickFunction = function() {       zoomImage.unbind('loaded', loadedFunction, self);       hideFunction();   };   var clearAutoClose = function(){       zoomImage.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var loadedFunction = function(){       self.unbind('click', playerClickFunction, self);       veil.set('visible', true);       setCloseButtonPosition();       closeButton.set('visible', true);       zoomImage.unbind('loaded', loadedFunction, this);       zoomImage.bind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this);       timeoutID = setTimeout(timeoutFunction, 200);   };   var timeoutFunction = function(){       timeoutID = undefined;       if(autoCloseMilliSeconds){           var autoCloseFunction = function(){               hideFunction();           };           zoomImage.bind('click', clearAutoClose, this);           timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);       }       zoomImage.bind('backgroundClick', hideFunction, this);       if(toggleImage) {           zoomImage.bind('click', toggleFunction, this);           zoomImage.set('imageCursor', 'hand');       }       closeButton.bind('click', hideFunction, this);       if(loadedCallback)           loadedCallback();   };   var hideFunction = function() {       closed = true;       if(timeoutID)           clearTimeout(timeoutID);       if(autoCloseMilliSeconds)           clearAutoClose();       if(hideCallback)           hideCallback();       zoomImage.set('visible', false);       if(hideEffect && hideEffect.get('duration') > 0){           hideEffect.bind('end', endEffectFunction, this);       }       else{           zoomImage.set('image', null);       }       closeButton.set('visible', false);       veil.set('visible', false);       self.unbind('click', playerClickFunction, self);       zoomImage.unbind('backgroundClick', hideFunction, this);       zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true);       if(toggleImage) {           zoomImage.unbind('click', toggleFunction, this);           zoomImage.set('cursor', 'default');       }       closeButton.unbind('click', hideFunction, this);       if(playListToPause){           self.resumePlayList(playListToPause, audio != null && stopBackgroundAudio);       }       if(audio){           if(stopBackgroundAudio){               self.resumeGlobalAudios();           }           self.stopGlobalAudio(audio);       }   };   var endEffectFunction = function() {       zoomImage.set('image', null);       hideEffect.unbind('end', endEffectFunction, this);   };   var toggleFunction = function() {       zoomImage.set('image', isToggleVisible() ? image : toggleImage);   };   var isToggleVisible = function() {       return zoomImage.get('image') == toggleImage;   };   var setCloseButtonPosition = function() {       var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10;       var top = zoomImage.get('imageTop') + 10;       if(right < 10) right = 10;       if(top < 10) top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   var userInteractionStartFunction = function() {       if(timeoutUserInteractionID){           clearTimeout(timeoutUserInteractionID);           timeoutUserInteractionID = undefined;       }       else{           closeButton.set('visible', false);       }   };   var userInteractionEndFunction = function() {       if(!closed){           timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300);       }   };   var userInteractionTimeoutFunction = function() {       timeoutUserInteractionID = undefined;       closeButton.set('visible', true);       setCloseButtonPosition();   };   var veil = this.veilPopupPanorama;   var zoomImage = this.zoomImagePopupPanorama;   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   if(playListToPause){       this.pausePlayList(playListToPause, audio != null && stopBackgroundAudio);   }   if(audio){       if(stopBackgroundAudio){           this.pauseGlobalAudios();       }       this.playGlobalAudio(audio);   }   var timeoutID = undefined;   var timeoutUserInteractionID = undefined;   zoomImage.bind('loaded', loadedFunction, this);   setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0);   zoomImage.set('image', image);   zoomImage.set('customWidth', customWidth);   zoomImage.set('customHeight', customHeight);   zoomImage.set('showEffect', showEffect);   zoomImage.set('hideEffect', hideEffect);   zoomImage.set('visible', true);   return zoomImage; },
  "showWindow": function(w, autoCloseMilliSeconds, currentPlayListToPause, containsAudio){    var closeFunction = function(){       clearAutoClose();       this.resumePlayList(currentPlayListToPause, containsAudio);       w.unbind('close', closeFunction, this);   };   var clearAutoClose = function(){       w.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var timeoutID = undefined;   if(autoCloseMilliSeconds){       var autoCloseFunction = function(){           w.hide();       };       w.bind('click', clearAutoClose, this);       timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);   }   this.pausePlayList(currentPlayListToPause, containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "loopAlbum": function(playList, index){    var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var loopFunction = function(){       player.play();   };   this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getPlayListWithMedia": function(media, onlySelected){    var playLists = window.tdvplayer.getByClassName('PlayList');   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       if(onlySelected && playList.get('selectedIndex') == -1)           continue;       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           if(items[j].get('media') == media)               return playList;       }   }   return undefined; },
  "startPanoramaWithCamera": function(playList, index, camera){    var playListItem = playList.get('items')[index];   var previousCamera = playListItem.get('camera');   playListItem.set('camera', camera);   var restoreCameraOnStop = function(){       playListItem.set('camera', previousCamera);       playListItem.unbind('stop', restoreCameraOnStop, this);   };   playListItem.bind('stop', restoreCameraOnStop, this);   playList.set('selectedIndex', index); },
  "loadFromCurrentMediaPlayList": function(playList, delta){    var currentIndex = playList.get('selectedIndex');   var totalItems = playList.get('items').length;   var newIndex = (currentIndex + delta) % totalItems;   while(newIndex < 0){       newIndex = totalItems + newIndex;   };   if(currentIndex != newIndex){       playList.set('selectedIndex', newIndex);   }; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){    var audios = window.currentGlobalAudios;   if(!audios) return;   var resumeFunction = this.resumeGlobalAudios;   var endFunction = function(){       resumeFunction(caller);   };   this.pauseGlobalAudios(caller);   this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){    var changeFunction = function(){       var index = playList.get('selectedIndex');       if(index >= 0){           var beginFunction = function(){               playListItem.unbind('begin', beginFunction);               setMediaLabel(index);           };           var setMediaLabel = function(index){               var media = playListItem.get('media');               var text = media.get('data');               if(!text)                   text = media.get('label');               setHtml(text);           };           var setHtml = function(text){               htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>');                          };           var playListItem = playList.get('items')[index];           if(htmlText.get('html')){               setHtml('Loading...');               playListItem.bind('begin', beginFunction);           }           else{               setMediaLabel(index);           }       }   };   var disposeFunction = function(){       htmlText.set('html', undefined);       playList.unbind('change', changeFunction, this);       playListItemStopToDispose.unbind('stop', disposeFunction, this);   };   if(playListItemStopToDispose){       playListItemStopToDispose.bind('stop', disposeFunction, this);   }   playList.bind('change', changeFunction, this);   changeFunction(); },
  "pauseGlobalAudios": function(caller){    var audios = window.currentGlobalAudios;   window.currentGlobalAudiosActionCaller = caller;   if(!audios) return;   for(var i = 0, count = audios.length; i<count; i++){       audios[i].pause();   } },
  "updatePlayListsUI": function(playLists){    var changeFunction = function(event){       var playListDispatched = event.source;       var selectedIndex = playListDispatched.get('selectedIndex');       if(selectedIndex < 0)           return;       var media = playListDispatched.get('items')[selectedIndex].get('media');       for(var i = 0, count = playLists.length; i<count; ++i){           var playList = playLists[i];           if(playList != playListDispatched){               var items = playList.get('items');               for(var j = 0, countJ = items.length; j<countJ; ++j){                   if(items[j].get('media') == media){                       if(playList.get('selectedIndex') != j){                           playList.set('selectedIndex', j);                       }                       break;                   }               }           }       }   };   for(var i = 0, count = playLists.length; i<count; ++i){       playLists[i].bind('change', changeFunction, this);   } },
  "pausePlayList": function(playList, containsAudio){    if(playList){       var player = playList.get('items')[playList.get('selectedIndex')].get('player');       if(player){           if(!containsAudio && typeof player.pauseCamera !== 'undefined'){               player.pauseCamera();           }           else{               player.pause();           }       }   } },
  "updateVideoCues": function(playList, index){    var playListItem = playList.get('items')[index];   var video = playListItem.get('media');   if(video.get('cues').length == 0)       return;   var player = playListItem.get('player');   var cues = [];   var changeFunction = function(){       if(playList.get('selectedIndex') != index){           video.unbind('cueChange', cueChangeFunction, this);           playList.unbind('change', changeFunction, this);       }   };   var cueChangeFunction = function(event){       var activeCues = event.data.activeCues;       for(var i = 0, count = cues.length; i<count; ++i){           var cue = cues[i];           if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){               cue.trigger('end');           }       }       cues = activeCues;   };   video.bind('cueChange', cueChangeFunction, this);   playList.bind('change', changeFunction, this); },
  "playAudioList": function(audios){    if(audios.length == 0) return;   var currentAudioCount = -1;   var currentAudio;   var playGlobalAudioFunction = this.playGlobalAudio;   var playNext = function(){       if(++currentAudioCount >= audios.length)           currentAudioCount = 0;       currentAudio = audios[currentAudioCount];       playGlobalAudioFunction(currentAudio, playNext);   };   playNext(); }
 }
})