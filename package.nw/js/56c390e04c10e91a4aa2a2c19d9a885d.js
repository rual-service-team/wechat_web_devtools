'use strict';!function(require,directRequire){module.exports={DEV_TYPE:{MINI_PROGRAM:'MINI_PROGRAM',MP_WEB:'MP_WEB'},IDE_SCENE:{MENU_BAR:1,TOOL_BAR:2,MESSAGE_CENTER:3,SIMULATOR:4,EDITOR:5,DEBUGGER:6,NOTIFY:7},LOGIN_STATUS:{SUCCESS:'SUCCESS',FAIL:'FAIL',CANCEL:'CANCEL',REQUEST:'REQUEST',PENDING:'PENDING',EXPIRED:'EXPIRED'},LOGIN_QR_STATUS:{NOT_SCAN:1,SCAN:2,CONFIRM:3,CANCEL:4,OUTDATED:5,NETWORK_ERROR:6,OCCUPIED:7,UNKNOWN:10},LOGIN_WX_ERRR_CODE:{SUCCESS:405,SCANNED:404,CANCELLED:403,TIMEOUT:402,ERROR:500,KEEP_ALIVE:408},MAIN_WINDOW_TYPE:{LOGIN:'LOGIN',ENTRANCE:'ENTRANCE',SELECT_PROJECT:'SELECT_PROJECT',CREATE_PROJECT:'CREATE_PROJECT',CREATE_MINICODE:'CREATE_MINICODE',IMPORT_MINICODE:'IMPORT_MINICODE',DEV:'DEV',WEB_DEBUGGER:'WEB_DEBUGGER'},WINDOW_MODE:{MAX:'MAX',MIN:'MIN',FREE:'FREE',FULLSCREEN:'FULLSCREEN'},WINDOW_REGISTRY:{SETTINGS:'SETTINGS',CREATE_PROJECT:'CREATE_PROJECT',SELECT_PROJECT:'SELECT_PROJECT',CUSTOM_ANALYSIS:'CUSTOM_ANALYSIS',MOBILE_TEST:'MOBILE_TEST',PROJECT_MANAGEMENT:'PROJECT_MANAGEMENT',REMOTE_DEBUG_WINDOW:'REMOTE_DEBUG_WINDOW',QCLOUD_DEBUG_WINDOW:'QCLOUD_DEBUG_WINDOW',MUSIC:'MUSIC',MATERIAL:'MATERIAL'},SIZE:{MUSIC:{WIDTH:300,HEIGHT:75},DEFAULT:{WIDTH:1024,HEIGHT:1200},LOGIN:{WIDTH:334,HEIGHT:474},SELECT_PROJECT:{WIDTH:626,HEIGHT:474},CREATE_PROJECT:{WIDTH:411,HEIGHT:474},CONFIRM:{WIDTH:420,HEIGHT:180},SETTING:{WIDTH:440,HEIGHT:340},MOBILE_TEST:{WIDTH:633,HEIGHT:560},MOBILE_TEST_REPORT:{WIDTH:1280,HEIGHT:760,MIN_WIDTH:740},QCLOUD_UPLOADING:{WIDTH:420,HEIGHT:210},PROJECT_MANAGEMENT:{WIDTH:606,HEIGHT:474},MATERIAL:{WIDTH:706,HEIGHT:606}},WINDOW_FOCUS:{BODY:0,EDITOR:1,DEVTOOLS:2,REMOTE_DEBUG_DEVTOOLS:3},QCLOUD_STATUS:{UPLOADING:0,UPLOAD_SUCCESS:1,UPLOAD_FAIL:2,DEPLOYING:3,DEPLOY_SUCCESS:4,DEPLOY_FAIL:5,INSTALLING:6,INSTALL_SUCCESS:7,INSTALL_FAIL:8,RESTARTING:9,RESTART_SUCCESS:10,RESTART_FAIL:11,DONE:12},QCLOUD_ACTION_TYPE:{DEPLOY_DEV:'deployDev',INSTALL_DEP:'installDependence',RESTART_SERVICE:'restartService'},STATUS:{NONE:0,BEGIN:1,LOADING:2,SUCCESS:3,FAIL:4},REBUILD_INTERVAL:{AUTO_REFRESH:400,AUTO_REFRESH_AUTO_SAVE:3e3},MIN_MAIN_WINDOW_WIDTH:515,MIN_MAIN_WINDOW_HEIGHT:650,DISPLAY_ERROR:'DISPLAY_ERROR',DISPLAY_INFO:'DISPLAY_INFO',DISPLAY_TYPES:{CUSTOM_ANALYSIS_GET_APP_CONFIG:'CUSTOM_ANALYSIS_GET_APP_CONFIG',CUSTOM_ANALYSIS_ON_APP_CONFIG:'CUSTOM_ANALYSIS_ON_APP_CONFIG',CUSTOM_ANALYSIS_REPORT:'CUSTOM_ANALYSIS_REPORT',DOMAIN_ERROR:'DOMAIN_ERROR',HINT_NO_URL_CHECK:'HINT_NO_URL_CHECK',BBS_LOG_LINK:'BBS_LOG_LINK',PLUGIN_UPDATE_INFO:'PLUGIN_UPDATE_INFO',PLUGIN_VERSION_NOT_EXISTS:'PLUGIN_VERSION_NOT_EXISTS'},NETWORK_STATUS_DISPLAY:{wifi:'WiFi',"2g":'2G',"3g":'3G',"4g":'4G',none:'Offline'},MASK_TYPE:{GLOBAL_BLOCKING:'GLOBAL_BLOCKING',GLOBAL_NON_BLOCKING:'GLOBAL_NON_BLOCKING',MAIN_BLOCKING:'MAIN_BLOCKING',MAIN_NON_BLOCKING:'MAIN_NON_BLOCKING'},TOURIST_APPID:'touristappid',COMPILE_ORIGIN:{SAVE_FILE:1,BUTTON:2,SHORT_CUT:3,CONSOLE:4,SEARCH_WIDGET:5,HTTP:6},QUICKSTART_TYPE:{WEAPP:'weapp',QCLOUD_NODEJS:'qcloud_nodejs',QCLOUD_PHP:'qcloud_php',QCLOUD_NODEJS_GAME:'qcloud_nodejs_game',QCLOUD_PHP_GAME:'qcloud_php_game',PLUGIN:'plugin',GAME:'game',WEAPP_MINI:'weapp_mini',GAME_MINI:'game_mini',PLUGIN_MINI:'plugin_mini'},SELECT_PROJECT_TAB:{PROJECT:'project',MINI_CODE:'minicode'},MINI_CODE_FROM:{NONE:'',URL_SCHEME:'URL_SCHEME'},SEM_VER_UPDATE_TYPE:{MAJOR:'MAJOR',MINOR:'MINOR',PATCH:'PATCH'},CONTENTTYPEINFO:{"text/plain":'txt',"application/vnd.android.package-archive":'apk',"video/3gpp":'3gp',"application/atom+xml":'atom',"video/x-msvideo":'avi',"application/x-bcpio":'bcpio',"image/bmp":'bmp',"image/cgm":'cgm',"application/x-cpio":'cpio',"application/mac-compactpro":'cpt',"application/x-csh":'csh',"text/css":'css',"application/xml-dtd":'dtd',"application/x-dvi":'dvi',"application/x-director":'dxr',"application/postscript":'eps',"text/x-setext":'etx',"application/andrew-inset":'ez',"video/x-flv":'flv',"image/gif":'gif',"application/srgs":'gram',"application/srgs+xml":'grxml',"application/x-gtar":'gtar',"application/x-gzip":'gz',"application/x-hdf":'hdf',"application/mac-binhex40":'hqx',"x-conference/x-cooltalk":'ice',"image/x-icon":'ico',"image/ief":'ief',"application/x-java-jnlp-file":'jnlp',"image/jp2":'jp2',"application/x-javascript":'js',"application/x-latex":'latex',"audio/x-mpegurl":'m3u',"video/x-m4v":'m4v',"application/x-troff-man":'man',"application/mathml+xml":'mathml',"application/x-troff-me":'me',"application/vnd.mif":'mif',"video/x-sgi-movie":'movie',"video/mp4":'mp4',"application/x-troff-ms":'ms',"application/oda":'oda',"application/ogg":'ogg',"video/ogv":'ogv',"image/x-portable-bitmap":'pbm',"chemical/x-pdb":'pdb',"application/pdf":'pdf',"image/x-portable-graymap":'pgm',"application/x-chess-pgn":'pgn',"image/png":'png',"image/x-portable-anymap":'pnm',"image/x-portable-pixmap":'ppm',"image/x-cmu-raster":'ras',"application/rdf+xml":'rdf',"image/x-rgb":'rgb',"application/vnd.rn-realmedia":'rm',"text/rtf":'rtf',"text/richtext":'rtx',"application/x-sh":'sh',"application/x-shar":'shar',"application/x-stuffit":'sit',"application/x-futuresplash":'spl',"application/x-wais-source":'src',"application/x-sv4cpio":'sv4cpio',"application/x-sv4crc":'sv4crc',"image/svg+xml":'svg',"application/x-shockwave-flash":'swf',"application/x-tar":'tar',"application/x-tcl":'tcl',"application/x-tex":'tex',"text/tab-separated-values":'tsv',"application/x-ustar":'ustar',"application/x-cdlink":'vcd',"application/voicexml+xml":'vxml',"audio/x-wav":'wav',"image/vnd.wap.wbmp":'wbmp',"application/vnd.wap.wbxml":'wbxml',"video/webm":'webm',"text/vnd.wap.wml":'wml',"application/vnd.wap.wmlc":'wmlc',"text/vnd.wap.wmlscript":'wmls',"application/vnd.wap.wmlscriptc":'wmlsc',"video/x-ms-wmv":'wmv',"image/x-xbitmap":'xbm',"image/x-xpixmap":'xpm',"application/xslt+xml":'xslt',"application/vnd.mozilla.xul+xml":'xul',"image/x-xwindowdump":'xwd',"chemical/x-xyz":'xyz',"application/zip":'zip'}}}(require('lazyload'),require);