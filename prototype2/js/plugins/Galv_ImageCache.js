//-----------------------------------------------------------------------------
//  Galv's Image Cache
//-----------------------------------------------------------------------------
//  For: RPGMAKER MV
//  Galv_ImageCache.js
//-----------------------------------------------------------------------------
//  2017-10-12 - Version 1.1 - updated to work with MV 1.5.1 files
//  2017-04-26 - Version 1.0 - release
//-----------------------------------------------------------------------------
// Terms can be found at:
// galvs-scripts.com
//-----------------------------------------------------------------------------

var Imported = Imported || {};
Imported.Galv_ImageCache = true;

var Galv = Galv || {};                  // Galv's main object
Galv.CACHE = Galv.CACHE || {};          // Galv's stuff


//-----------------------------------------------------------------------------
/*:
 * @plugindesc (v.1.1) Pre-cache images that cause issues when loading during gameplay
 * 
 * @author Galv - galvs-scripts.com
 *
 * @param Folder 1
 * @desc 要从 /img/ 中的文件夹预缓存的图像列表。
 * 文件夹名称|图片,image,image,image,image
 * @default animations|
 *
 * @param Folder 2
 * @desc Image list to precache from a folder in /img/.
 * foldername|image,image,image,image,image
 * @default battlebacks1|
 *
 * @param Folder 3
 * @desc Image list to precache from a folder in /img/.
 * foldername|image,image,image,image,image
 * @default battlebacks2|
 *
 * @param Folder 4
 * @desc Image list to precache from a folder in /img/.
 * foldername|image,image,image,image,image
 * @default characters|
 *
 * @param Folder 5
 * @desc Image list to precache from a folder in /img/.
 * foldername|image,image,image,image,image
 * @default enemies|
 *
 * @param Folder 6
 * @desc Image list to precache from a folder in /img/.
 * foldername|image,image,image,image,image
 * @default faces|
 *
 * @param Folder 7
 * @desc Image list to precache from a folder in /img/.
 * foldername|image,image,image,image,image
 * @default parallaxes|
 *
 * @param Folder 8
 * @desc Image list to precache from a folder in /img/.
 * foldername|image,image,image,image,image
 * @default pictures|
 *
 * @param Folder 9
 * @desc Image list to precache from a folder in /img/.
 * foldername|image,image,image,image,image
 * @default sv_actors|
 *
 * @param Folder 10
 * @desc Image list to precache from a folder in /img/.
 * foldername|image,image,image,image,image
 * @default sv_enemies|
 *
 * @param Folder 11
 * @desc Image list to precache from a folder in /img/.
 * foldername|image,image,image,image,image
 * @default system|
 *
 * @param Folder 12
 * @desc Image list to precache from a folder in /img/.
 * foldername|image,image,image,image,image
 * @default tilesets|
 *
 * @param Folder 13
 * @desc Image list to precache from a folder in /img/.
 * foldername|image,image,image,image,image
 * @default titles1|
 *
 * @param Folder 14
 * @desc Image list to precache from a folder in /img/.
 * foldername|image,image,image,image,image
 * @default titles2|
 *
 * @param Folder 15
 * @desc Image list to precache from a folder in /img/.
 * foldername|image,image,image,image,image
 * @default
 *
 * @param Folder 16
 * @desc Image list to precache from a folder in /img/.
 * foldername|image,image,image,image,image
 * @default
 *
 * @param Folder 17
 * @desc Image list to precache from a folder in /img/.
 * foldername|image,image,image,image,image
 * @default
 *
 * @param Folder 18
 * @desc Image list to precache from a folder in /img/.
 * foldername|image,image,image,image,image
 * @default
 *
 * @param Folder 19
 * @desc Image list to precache from a folder in /img/.
 * foldername|image,image,image,image,image
 * @default
 *
 * @param Folder 20
 * @desc Image list to precache from a folder in /img/.
 * foldername|image,image,image,image,image
 * @default
 *
 * @param Folder 21
 * @desc Image list to precache from a folder in /img/.
 * foldername|image,image,image,image,image
 * @default
 *
 * @param Folder 22
 * @desc Image list to precache from a folder in /img/.
 * foldername|image,image,image,image,image
 * @default
 *
 * @param Folder 23
 * @desc Image list to precache from a folder in /img/.
 * foldername|image,image,image,image,image
 * @default
 *
 * @param Folder 24
 * @desc Image list to precache from a folder in /img/.
 * foldername|image,image,image,image,image
 * @default
 *
 * @param Folder 25
 * @desc Image list to precache from a folder in /img/.
 * foldername|image,image,image,image,image
 * @default
 *
 * @help
 *   Galv's Image Cache
 * ----------------------------------------------------------------------------
 * 编写此插件是为了允许您从项目中 /img/ 文件夹内的文件夹中指定某些图像，
 * 这些图像会导致问题（例如延迟、消失片刻、未在窗口中加载）并预加载它们。
 * 
 * （15+文件夹  可用于您可能正在使用的其他插件创建的自定义图像文件夹位置）
 * 
 *
 * 将这些图像预加载或预缓存到内存中意味着 RPG Maker 不必在需要时立即执行此
 * 操作（这可能会导致上述问题），因为它们已经在内存中。
 * 
 *
 * 插件设置包含加载游戏时要预缓存的图像列表。
 * 或者，您可以使用以下脚本调用在游戏期间需要它们之前预缓存图像：
 * 
 *
 *      Galv.CACHE.load('folder','img');
 *
 * ----------------------------------------------------------------------------
 */



//-----------------------------------------------------------------------------
//  CODE STUFFS
//-----------------------------------------------------------------------------

(function() {

ImageManager.reserveSpecific = function(filename, folder, hue, reservationId) {
	var folder = folder ? folder + '/' : '';
    return this.reserveBitmap('img/' + folder, filename, hue, false, reservationId || this._systemReservationId);
};

Galv.CACHE.loadOnBoot = function() {
	var params = PluginManager.parameters('Galv_ImageCache')
	var proceed = true;
	var i = 1;
	
	do {
		var txt = params['Folder ' + i];
		if (txt === undefined || txt === '') {
			proceed = false;
		} else {
			var arr = txt.split('|');
			if (arr) {
				var folder = arr[0];
				var list = arr[1].split(',');
				if (list[0] != '') {
					for (var j in list) {
						Galv.CACHE.load(folder,list[j]);
					}
				}
			}
			i += 1;
		}
	} while (proceed);
};


Galv.CACHE.load = function(folder,img) {
	ImageManager.reserveSpecific(img,folder);
};

Galv.CACHE.Scene_Boot_loadSystemImages = Scene_Boot.loadSystemImages;
Scene_Boot.loadSystemImages = function() {
	Galv.CACHE.Scene_Boot_loadSystemImages.call(this);
	Galv.CACHE.loadOnBoot();
};

})();