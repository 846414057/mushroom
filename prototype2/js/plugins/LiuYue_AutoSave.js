/*:
 * @plugindesc v1.03 liuYue_AutoSave 自动存档
 * @author 流逝的岁月
 *
 * @help
 * ============================================================================
 * 介绍
 * ============================================================================
 *
 *
 *
 * 这款插件提供了自动存档相关功能
 *
 * 有时候玩家可能不想手动存档，这会造成一些时间的浪费
 * 这款插件可实现在 进入地图时 退出菜单时 战斗结束后 或是一段时间后,进行自动存档
 *
 *
 *
 *
 *
 *以下是可以使用的插件指令
 *-----------------------PluginCommand-------------------------
 *
 * ZzyASF SetUp x(true/false)                   //插件开关选项,控制插件功能是否有效
 *
 * ZzyASF AutoSave                              //这将手动的进行一次自动存档
 * ZzyASF AutoSaveId x(true/false)              //设置自动存储的文件ID值,请填写整数
 * ZzyASF OverLoad x(true/false)                //设置自动存档的文件ID,是否可以通过手动存档来进行覆盖,false代表不可以覆盖,true代表可以覆盖
 * ZzyASF SaveText x                            //这是自动存档的存档名称,如果设置为空("",undefined,null),则使用默认的文件+ID的形式
 * ZzyASF TextColor x                           //这是存档名称的颜色,可填写#000000~#ffffff或是rgba(0~255,0~255,0~255,0~1)格式
 * ZzyASF BorderColor x                         //这是存档名称的颜色,可填写#000000~#ffffff或是rgba(0~255,0~255,0~255,0~1)格式
 *  
 *
 * ZzyASF InMapSave x(true/false)               //这会使刚进入到地图时,是否进行存档
 * ZzyASF OutMenuSave x(true/false)             //这会使每次关闭主菜单后,是否会进行存档
 * ZzyASF OutBattleSave x(true/false)           //这会使每次战斗结束后,是否会进行进行存档
 * ZzyASF IsFrameSave x(true/false)             //这会使开启自动计时进行存档
 * ZzyASF IsSVValueSave x(true/false)          //这会使插件参数中填写的开关和变量发生变化时,是否会进行存档
 * ZzyASF FrameSave x                           //这会在地图中经过时长进行自动存档,填写自动存档的x帧数,x需要为一个整数
 *
 * ZzyASF SavePicture x                         //这会修改显示图片,填写图片的名称,图片需要放在项目/img/system文件夹下
 * ZzyASF PicPosition x(left-up/center-up/right-up/left-center/center/right-center/left-down/center-down/right-down)
                                       填写对应的显示模式,可以确认位置
 * ZzyASF PicPosOfx x                           //这会修改显示图片的微调x
 * ZzyASF PicPosOfy x                           //这会修改显示图片的微调y
 * ZzyASF PicOp x                               //这会修改图片显示的最大透明度
 * ZzyASF PicFadeIn x                           //这会修改图片渐入所需时长
 * ZzyASF PicWait x                             //这会修改图片显示所等待的时长
 * ZzyASF PicFadeOut x                          //这会修改图片渐出所需时长
 *
 *
 *
 *
 * 以下是可以调用的脚本
 * 
 *---------------------Script-------------------------
 *
 * Zzy.ASF.LastSaveGame()                    //这会覆盖最后一次存档,如果没有进行过存档,则返回false,并不执行任何内容
 * Zzy.ASF.SaveNullGame()                    //这会遍历空的存档并进行存储,如果存档被占满,则返回false,并不执行任何内容
 * Zzy.ASF.ForceSave(ID)                     //这会强制存储在某一文件ID的位置,注意下标从1开始,如果存储ID越界则返回false,并不执行任何内容
 * Zzy.ASF.IsHaveSave(ID)                    //这会判断文件ID位置是否有存储过文件,如果ID越界则返回undefined  如果存在存储文件则返回true  如果不存在则返回false
 * Zzy.ASF.GetAutoSaveCount()                //这会返回进行过自动存档的次数
 *
 *
 * Zzy.ASF.SetUp(isEnable)                    //插件开关选项,控制插件功能是否有效
 *
 * Zzy.ASF.AutoSave()                         //这会进行一次自动存档,并覆盖自动存档
 * Zzy.ASF.AutoSaveId(fileId)                 //设置自动存储的文件ID值,请填写整数
 * Zzy.ASF.OverLoad(isEnable)                 //设置自动存档的文件ID,是否可以通过手动存档来进行覆盖,false代表不可以覆盖,true代表可以覆盖
 * Zzy.ASF.SaveText(text)                     //这是自动存档的存档名称,如果设置为空("",undefined,null),则使用默认的文件+ID的形式
 * Zzy.ASF.TextColor(color)                   //这是存档名称的颜色,可填写#000000~#ffffff或是rgba(0~255,0~255,0~255,0~1)格式
 * Zzy.ASF.BorderColor(color)                 //这是存档名称的颜色,可填写#000000~#ffffff或是rgba(0~255,0~255,0~255,0~1)格式
 *
 * Zzy.ASF.InMapSave(isEnable)                //这会使刚进入到地图时,是否进行存档
 * Zzy.ASF.OutMenuSave(isEnable)              //这会使每次关闭主菜单后,都会进行存档
 * Zzy.ASF.OutBattleSave(isEnable)            //这会使每次战斗结束后,进行存档
 * Zzy.ASF.IsFrameSave(isEnable)              //这会使开启自动计时进行存档
 * Zzy.ASF.IsSVValueSave(isEnable)            //这会使插件参数中填写的开关和变量发生变化时,进行存档
 * Zzy.ASF.FrameSave(fFrame)                  //这会在地图中经过时长进行自动存档,填写自动存档的x帧数,x需要为一个整数
 *
 * Zzy.ASF.SavePicture(name)                  //这会修改显示图片,填写图片的名称,图片需要放在项目/img/system文件夹下
 * Zzy.ASF.PicPosition(modeStr)               //填写对应的显示模式,可以确认位置
 * Zzy.ASF.PicPosOfx(ofx)                     //这会修改显示图片的微调x
 * Zzy.ASF.PicPosOfy(ofy)                     //这会修改显示图片的微调y
 * Zzy.ASF.PicOp(op)                          //这会修改图片显示的最大透明度
 * Zzy.ASF.PicFadeIn(tFrame)                  //这会修改图片渐入所需时长
 * Zzy.ASF.PicWait(tFrame)                    //这会修改图片显示所等待的时长
 * Zzy.ASF.PicFadeOut(tFrame)                 //这会修改图片渐出所需时长
 *
 *
 *
 *
------------------------------------------------------------
 
 
 
 我叫坂本：v1.03 兼容旧存档,拓展脚本函数
 我叫坂本：v1.02 修复了战斗结束导致获取结果失效bug,添加了开关变量检测连续存储限制,添加自动存档音效,优化代码
 我叫坂本：v1.01 兼容旧存档,添加新的脚本函数
 我叫坂本：v1.00 完成插件
 
 
 
------------------------------------------------------------
 *
 *
 *
 *
 *
 * @param ---设置---
 * @default
 *
 * @param IsSetUp
 * @text 插件启动
 * @parent ---设置---
 * @type boolean
 * @on YES
 * @off NO
 * @desc 设置插件功能是否启动,如果禁用则所有效果设置都将无效
 * YES - true     NO - false
 * @default true
 *
 *
 * @param ---游戏设置---
 * @default
 *
 *
 * @param AutoSaveId
 * @text 自动存档ID
 * @parent ---游戏设置---
 * @type Number
 * @desc 这是进行自动存档时,将会使用的文件ID值,注意这个值是从1开始,请填写整数
 * @default 1
 *
 * @param IsOverLoad
 * @text 自动存档可被覆盖
 * @parent ---游戏设置---
 * @type boolean
 * @on YES
 * @off NO
 * @desc 这是被设为自动存档的存档项,是否可以通过手动存档来进行覆盖
 * YES - true     NO - false
 * @default false
 *
 * @param SaveText
 * @text 自动存档名称
 * @parent ---游戏设置---
 * @type Text
 * @desc 这是自动存档的存档名称,如果不设置,则使用默认的文件+ID的形式
 * @default 自动存档
 *
 * @param TextColor
 * @text 自动存档文字颜色
 * @parent ---游戏设置---
 * @type Text
 * @desc 这是自动存档的存档名称的颜色,可填写#000000~#ffffff或是rgba(0~255,0~255,0~255,0~1)格式,如果不设置则使用默认的颜色
 * @default #ffff66
 *
 * @param BorderColor
 * @text 自动存档文字边框颜色
 * @parent ---游戏设置---
 * @type Text
 * @desc 这是自动存档的存档名称的颜色,可填写#000000~#ffffff或是rgba(0~255,0~255,0~255,0~1)格式,如果不设置则使用默认的颜色
 * @default rgba(0,0,0,0.5)
 *
 *
 * @param ---音效---
 * @default
 *
 * @param NotSaveSound
 * @text 点击覆盖存储音效
 * @parent ---音效---
 * @type file
 * @dir audio/se
 * @desc 在点中无法存储时,会播放的音效的音频,位置在Audio/SE文件夹中
 * @default Buzzer1
 *
 * @param NotSaveVolume
 * @text 无法覆盖存储音量
 * @parent ---音效---
 * @type Number
 * @desc 音量大小,默认100
 * @default 100
 
 * @param NotSavePitch
 * @text 无法覆盖存储声调
 * @parent ---音效---
 * @type Number
 * @desc 声调,默认100
 * @default 100
 
 * @param NotSavePan
 * @text 无法覆盖存储声道
 * @parent ---音效---
 * @type Number
 * @desc 声道,默认0
 * @default 0
 *
 *
 * @param AutoSaveSound
 * @text 自动存储音效
 * @parent ---音效---
 * @type file
 * @dir audio/se
 * @desc 自动存储时,会播放的音效的音频,位置在Audio/SE文件夹中,如果未填写,则不会播放
 * @default Decision1
 *
 * @param AutoSaveVolume
 * @text 自动存储音量
 * @parent ---音效---
 * @type Number
 * @desc 音量大小,默认100
 * @default 100
 
 * @param AutoSavePitch
 * @text 自动存储声调
 * @parent ---音效---
 * @type Number
 * @desc 声调,默认100
 * @default 100
 
 * @param AutoSavePan
 * @text 自动存储声道
 * @parent ---音效---
 * @type Number
 * @desc 声道,默认0
 * @default 0
 *
 *
 *
 * @param ---存储类型---
 * @default
 *
 *
 * @param IsFrameSave
 * @text 是否通过帧数存储
 * @parent ---存储类型---
 * @type boolean
 * @on YES
 * @off NO
 * @desc 在到达一定帧数时,将会进行自动存储
 * YES - true     NO - false
 * @default false
 *
 * @param FrameSave
 * @text 帧数存储
 * @parent ---存储类型---
 * @type Number
 * @desc 在处于地图界面时,经过多少帧数,会进行存储,单位为帧,默认为3600帧
 * @default 3600
 *
 *
 * @param IsInMapSave
 * @text 是否进入地图存档
 * @parent ---存储类型---
 * @type boolean
 * @on YES
 * @off NO
 * @desc 每次进入到地图时,将会进行存档
 * YES - true     NO - false
 * @default false
 *
 * @param IsOutMenuSave
 * @text 是否退出主菜单存档
 * @parent ---存储类型---
 * @type boolean
 * @on YES
 * @off NO
 * @desc 每次退出主菜单时,都会进行自动存档
 * YES - true     NO - false
 * @default false
 *
 *
 *
 * @param IsOutBattleSave
 * @text 是否战斗之后存储
 * @parent ---存储类型---
 * @type boolean
 * @on YES
 * @off NO
 * @desc 每次战斗结束后,都会进行自动存档
 * YES - true     NO - false
 * @default false
 *
 * @param IsSVValueSave
 * @text 是否记录开关和变量存储
 * @parent ---存储类型---
 * @type boolean
 * @on YES
 * @off NO
 * @desc 是否监视开关和变量发生改变后,进行自动存档
 * YES - true     NO - false
 * @default false
 *
 * @param SwitchCheckArr
 * @text 开关检测
 * @parent ---存储类型---
 * @type switch[]
 * @desc 记录中的开关发生了变化时,进行自动存档
 * @default
 *
 * @param VariableCheckArr
 * @text 变量检测
 * @parent ---存储类型---
 * @type Variable[]
 * @desc 记录中的变量数据发生了变化时,进行自动存档
 * @default
 *
 * @param ---存档限制---
 * @default
 *
 * @param SaveOnceMaxFrame
 * @text 连续存档间隔
 * @parent ---存档限制---
 * @type number
 * @desc 这会限制两次自动存档时间上限间隔,防止频繁自动存档的问题,单位为帧,默认值为0
 * @default 0
 *
 * @param ---界面---
 * @default
 *
 *
 * @param SavePicture
 * @text 自动存储提示图片
 * @parent ---界面---
 * @type file
 * @dir img/system
 * @desc 填写自动存储时的提示图片路径,如果不填写,则不会显示,屠屏放在img/system/文件夹下
 * @default
 *
 *
 * @param PicPosition
 * @parent ---界面---
 * @text 图片位置
 * @type combo
 * @option left-up
 * @option center-up
 * @option right-up
 * @option left-center
 * @option center
 * @option right-center
 * @option left-down
 * @option center-down
 * @option right-down
 * @desc 这是位图显示的位置信息,采用九宫格标记位置,分别是左上,中上,右上,左中,中心,右中,左下,中下,右下.会自动校对位置
 * @default right-down
 *
 * @param PicPosOfx
 * @text 图片偏移x
 * @parent ---界面---
 * @type text
 * @desc 图片的位置微调,可以填写正负整数值,默认值0
 * @default 0
 *
 * @param PicPosOfy
 * @text 图片偏移y
 * @parent ---界面---
 * @type text
 * @desc 图片的位置微调,可以填写正负整数值,默认值0
 * @default 0
 *
 * @param PicOp
 * @text 图片最大透明度
 * @parent ---界面---
 * @type Number
 * @min 0
 * @desc 显示图片最大的透明度,默认值255
 * @default 255
 *
 * @param PicFadeIn
 * @text 图片渐入所需帧数
 * @parent ---界面---
 * @type Number
 * @min 0
 * @desc 显示图片渐入所需要的帧数,默认值10帧
 * @default 10
 *
 * @param PicWait
 * @text 图片持续所需帧数
 * @parent ---界面---
 * @type Number
 * @min 0
 * @desc 图片显示期间的帧数,默认值60帧
 * @default 60
 *
 * @param PicFadeOut
 * @text 图片渐出所需帧数
 * @parent ---界面---
 * @type Number
 * @min 0
 * @desc 图片显示期间的帧数,默认值10帧
 * @default 10
 *
 *
 *
 */


var LiuYue = LiuYue || {};
LiuYue.liuYue_AutoSave = true;//插件启动

var Zzy = Zzy || {};
Zzy.ASF = Zzy.ASF || {};
Zzy.ASF.version = 1.03;  
Zzy.Parameters = PluginManager.parameters('liuYue_AutoSave');
Zzy.Param = Zzy.Param || {};



Zzy.Param.ASFIsSetUp = eval(String(Zzy.Parameters['IsSetUp']));//插件开关

Zzy.Param.ASFAutoSaveId = parseInt(Zzy.Parameters['AutoSaveId']);
Zzy.Param.ASFIsOverLoad = eval(String(Zzy.Parameters['IsOverLoad']));//进入地图时存储
Zzy.Param.ASFSaveText = String(Zzy.Parameters['SaveText']);//自动存档名称
Zzy.Param.ASFTextColor = String(Zzy.Parameters['TextColor']);//自动存档文字颜色
Zzy.Param.ASFBorderColor = String(Zzy.Parameters['BorderColor']);//自动存档文字边框颜色

Zzy.Param.ASFIsInMapSave = eval(String(Zzy.Parameters['IsInMapSave']));//进入地图时存储
Zzy.Param.ASFIsOutMenuSave = eval(String(Zzy.Parameters['IsOutMenuSave']));//进入地图时存储
Zzy.Param.ASFIsOutBattleSave = eval(String(Zzy.Parameters['IsOutBattleSave']));//是否战斗之后存储

Zzy.Param.ASFIsFrameSave = eval(String(Zzy.Parameters['IsFrameSave']));//是否通过帧数存储
Zzy.Param.ASFFrameSave = parseInt(Zzy.Parameters['FrameSave']);//自动存储的时长

Zzy.Param.ASFIsSVValueSave = eval(String(Zzy.Parameters['IsSVValueSave']));//是否监视变量和开关存储
Zzy.Param.ASFSwitchCheckArr = String(Zzy.Parameters['SwitchCheckArr']);//存储
Zzy.Param.ASFVariableCheckArr = String(Zzy.Parameters['VariableCheckArr']);//存储

Zzy.Param.ASFSaveOnceMaxFrame = parseInt(Zzy.Parameters['SaveOnceMaxFrame']);//单次存储间隔



Zzy.Param.ASFSavePicture = String(Zzy.Parameters['SavePicture']);//自动存储提示图片
Zzy.Param.ASFPicPosition = String(Zzy.Parameters['PicPosition']);//图片大致位置
Zzy.Param.ASFPicPosOfx = Number(Zzy.Parameters['PicPosOfx']);//图片x
Zzy.Param.ASFPicPosOfy = Number(Zzy.Parameters['PicPosOfy']);//y
Zzy.Param.ASFPicOp = parseInt(Zzy.Parameters['PicOp']);//图片渐入透明度
Zzy.Param.ASFPicFadeIn = parseInt(Zzy.Parameters['PicFadeIn']);//图片渐入所需帧数
Zzy.Param.ASFPicWait = parseInt(Zzy.Parameters['PicWait']);//图片持续所需帧数
Zzy.Param.ASFPicFadeOut = parseInt(Zzy.Parameters['PicFadeOut']);//图片渐出所需帧数



//声音
Zzy.ASF.MakeSE = function(seName,seVolume,sePitch,sePan)
{
	if(!seName)return undefined;
	var se = {
		name:seName,
		volume:(seVolume ? seVolume : 100),
		pitch:(sePitch ? sePitch : 100),
		pan:(sePan ? sePan : 0)
	};
	return se;
}


Zzy.Param.ASFNotSaveSound = String(Zzy.Parameters['NotSaveSound']);
Zzy.Param.ASFNotSaveVolume = parseInt(Zzy.Parameters['NotSaveVolume']);
Zzy.Param.ASFNotSavePitch = parseInt(Zzy.Parameters['NotSavePitch']);
Zzy.Param.ASFNotSavePan = parseInt(Zzy.Parameters['NotSavePan']);
Zzy.Param.ASFNotSaveSE = Zzy.ASF.MakeSE(Zzy.Param.ASFNotSaveSound,
Zzy.Param.ASFNotSaveVolume,
Zzy.Param.ASFNotSavePitch,
Zzy.Param.ASFNotSavePan);


Zzy.Param.ASFAutoSaveSound = String(Zzy.Parameters['AutoSaveSound']);
Zzy.Param.ASFAutoSaveVolume = parseInt(Zzy.Parameters['AutoSaveVolume']);
Zzy.Param.ASFAutoSavePitch = parseInt(Zzy.Parameters['AutoSavePitch']);
Zzy.Param.ASFAutoSavePan = parseInt(Zzy.Parameters['AutoSavePan']);
Zzy.Param.ASFAutoSaveSE = Zzy.ASF.MakeSE(Zzy.Param.ASFAutoSaveSound,
Zzy.Param.ASFAutoSaveVolume,
Zzy.Param.ASFAutoSavePitch,
Zzy.Param.ASFAutoSavePan);



Zzy.Param.ASFAllSE = [];
Zzy.Param.ASFAllSE = [
undefined,
Zzy.Param.ASFNotSaveSE,//无法点击音效
Zzy.Param.ASFAutoSaveSE//自动存储音效
];

Zzy.ASF.TempMapComFrame = 5;//等待5帧存档
Zzy.ASF.TempDelayFrameSave = 3;//等待3帧存储


Zzy.ASF.TempSwitchCheckArr = [];//存储开关检测
Zzy.ASF.TempVariableCheckArr = [];//存储变量检测


Zzy.ASF.TempNeedSaveFlag = false;//存储标记
Zzy.ASF.TempNeedSaveDelay = 0;//延迟存储记录



//转换开关和变量参数数据
Zzy.ASF.TranslateSVVParames = function()
{
	var sStrArr = eval(Zzy.Param.ASFSwitchCheckArr);
	var vStrArr = eval(Zzy.Param.ASFVariableCheckArr);
	var StrArr = [sStrArr,vStrArr];
	var TargetArr = [Zzy.ASF.TempSwitchCheckArr,Zzy.ASF.TempVariableCheckArr];
	
	for(var a=0;a<StrArr.length;a++)
	{
		var sArr = StrArr[a];
		var tArr = TargetArr[a];
		
		if(sArr)
		{
			for(var i=0;i<sArr.length;i++)
			{
				var index = parseInt(sArr[i]);
				tArr[index] = true;//标记开启
			}
		}		
	}
}
Zzy.ASF.TranslateSVVParames();



//=================================================================
//Game_System
//=================================================================

Zzy.ASF.Game_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() 
{
    Zzy.ASF.Game_System_initialize.call(this);
	this.ZzyASFInitData();//初始化数据
};

Game_System.prototype.ZzyASFInitData = function()
{
	this._ZzyASFIsSetUp = Zzy.Param.ASFIsSetUp;

	this._ZzyASFAutoSaveId = Zzy.Param.ASFAutoSaveId;
	this._ZzyASFIsOverLoad = Zzy.Param.ASFIsOverLoad;
	
	this._ZzyASFSaveText = Zzy.Param.ASFSaveText;
	this._ZzyASFTextColor = Zzy.Param.ASFTextColor;
	this._ZzyASFBorderColor = Zzy.Param.ASFBorderColor;
	
	this._ZzyASFIsInMapSave = Zzy.Param.ASFIsInMapSave;
	this._ZzyASFIsOutMenuSave = Zzy.Param.ASFIsOutMenuSave;
	this._ZzyASFIsOutBattleSave = Zzy.Param.ASFIsOutBattleSave;

	this._ZzyASFIsFrameSave = Zzy.Param.ASFIsFrameSave;
	this._ZzyASFFrameSave = Zzy.Param.ASFFrameSave;
	
	this._ZzyASFIsSVValueSave = Zzy.Param.ASFIsSVValueSave;

	this._ZzyASFSavePicture = Zzy.Param.ASFSavePicture;
	this._ZzyASFPicPosition = Zzy.ASF.PicPositionToID(Zzy.Param.ASFPicPosition);
	this._ZzyASFPicPosOfx = Zzy.Param.ASFPicPosOfx;
	this._ZzyASFPicPosOfy = Zzy.Param.ASFPicPosOfy;
	this._ZzyASFPicOp = Zzy.Param.ASFPicOp;
	this._ZzyASFPicFadeIn = Zzy.Param.ASFPicFadeIn;
	this._ZzyASFPicWait = Zzy.Param.ASFPicWait;
	this._ZzyASFPicFadeOut = Zzy.Param.ASFPicFadeOut;


	this._ZzyASFLastId = -1;//最后存档的ID值
	
	this._ZzyASFInMapID = 0;//目前ID
	this._ZzyASFMenuShouldSave = false;//退出菜单存档


	this._ZzyASFCSaveFrame = this._ZzyASFFrameSave;//等待存储所需时长
	
	
	this._ZzyASFSaveCount = 0;//自动存档次数
	
	this._ZzyASFSaveOnceMaxFrame = 0;//存储间隔
	
}


Game_System.prototype.GetZzyASFSaveOnceMaxFrame = function()
{
	if(this._ZzyASFSaveOnceMaxFrame === undefined)
	{this._ZzyASFSaveOnceMaxFrame = 0;}
	return this._ZzyASFSaveOnceMaxFrame;
}

Game_System.prototype.SetZzyASFSaveOnceMaxFrame = function(value)
{
	this._ZzyASFSaveOnceMaxFrame = value;
}


Game_System.prototype.GetZzyASFCSaveFrame = function()
{
	if(this._ZzyASFCSaveFrame === undefined)
	{
		this._ZzyASFCSaveFrame = Zzy.Param.ASFFrameSave;
	}
	return this._ZzyASFCSaveFrame;
}

Game_System.prototype.SetZzyASFCSaveFrame = function(value)
{
	this._ZzyASFCSaveFrame = value;
}



Game_System.prototype.GetZzyASFMenuShouldSave = function()
{
	if(this._ZzyASFMenuShouldSave === undefined)
	{
		this._ZzyASFMenuShouldSave = false;
	}
	return this._ZzyASFMenuShouldSave;
}

Game_System.prototype.SetZzyASFMenuShouldSave = function(value)
{
	this._ZzyASFMenuShouldSave = value;
}


Game_System.prototype.GetZzyASFInMapID = function()
{
	if(this._ZzyASFInMapID === undefined)
	{
		this._ZzyASFInMapID = 0;
	}
	return this._ZzyASFInMapID;
}

Game_System.prototype.SetZzyASFInMapID = function(value)
{
	this._ZzyASFInMapID = value;
}

Game_System.prototype.GetZzyASFLastId = function()
{
	if(this._ZzyASFLastId === undefined)
	{
		this._ZzyASFLastId = -1;
	}
	return this._ZzyASFLastId;
}

Game_System.prototype.SetZzyASFLastId = function(value)
{
	this._ZzyASFLastId = value;
}


Game_System.prototype.GetZzyASFPicFadeOut = function()
{
	if(this._ZzyASFPicFadeOut === undefined)
	{
		this._ZzyASFPicFadeOut = Zzy.Param.ASFPicFadeOut;
	}
	return this._ZzyASFPicFadeOut;
}

Game_System.prototype.SetZzyASFPicFadeOut = function(value)
{
	this._ZzyASFPicFadeOut = value;
}


Game_System.prototype.GetZzyASFPicWait = function()
{
	if(this._ZzyASFPicWait === undefined)
	{
		this._ZzyASFPicWait = Zzy.Param.ASFPicWait;
	}
	return this._ZzyASFPicWait;
}

Game_System.prototype.SetZzyASFPicWait = function(value)
{
	this._ZzyASFPicWait = value;
}



Game_System.prototype.GetZzyASFPicFadeIn = function()
{
	if(this._ZzyASFPicFadeIn === undefined)
	{
		this._ZzyASFPicFadeIn = Zzy.Param.ASFPicFadeIn;
	}
	return this._ZzyASFPicFadeIn;
}

Game_System.prototype.SetZzyASFPicFadeIn = function(value)
{
	this._ZzyASFPicFadeIn = value;
}

Game_System.prototype.GetZzyASFPicOp = function()
{
	if(this._ZzyASFPicOp === undefined)
	{
		this._ZzyASFPicOp = Zzy.Param.ASFPicOp;
	}
	return this._ZzyASFPicOp;
}

Game_System.prototype.SetZzyASFPicOp = function(value)
{
	this._ZzyASFPicOp = value;
}

Game_System.prototype.GetZzyASFPicPosOfy = function()
{
	if(this._ZzyASFPicPosOfy === undefined)
	{
		this._ZzyASFPicPosOfy = Zzy.Param.ASFPicPosOfy;
	}
	return this._ZzyASFPicPosOfy;
}

Game_System.prototype.SetZzyASFPicPosOfy = function(value)
{
	this._ZzyASFPicPosOfy = value;
}

Game_System.prototype.GetZzyASFPicPosOfx = function()
{
	if(this._ZzyASFPicPosOfx === undefined)
	{
		this._ZzyASFPicPosOfx = Zzy.Param.ASFPicPosOfx;
	}
	return this._ZzyASFPicPosOfx;
}

Game_System.prototype.SetZzyASFPicPosOfx = function(value)
{
	this._ZzyASFPicPosOfx = value;
}




Game_System.prototype.GetZzyASFSavePicture = function()
{
	if(this._ZzyASFSavePicture === undefined)
	{
		this._ZzyASFSavePicture = Zzy.Param.ASFSavePicture;
	}
	return this._ZzyASFSavePicture;
}

Game_System.prototype.SetZzyASFSavePicture = function(value)
{
	this._ZzyASFSavePicture = value;
}




Game_System.prototype.GetZzyASFPicPosition = function()
{
	if(this._ZzyASFPicPosition === undefined)
	{
		this._ZzyASFPicPosition = Zzy.ASF.PicPositionToID(Zzy.Param.ASFPicPosition);
	}
	return this._ZzyASFPicPosition;
}

Game_System.prototype.SetZzyASFPicPosition = function(value)
{
	this._ZzyASFPicPosition = value;
}





Game_System.prototype.ResetZzyASFSaveOnceMaxFrame = function()
{
	this._ZzyASFSaveOnceMaxFrame = Zzy.Param.ASFSaveOnceMaxFrame;
}

Game_System.prototype.CheckZzyASFSaveOnceMaxFrame = function()
{
	this.GetZzyASFSaveOnceMaxFrame();
	
	if(!this._ZzyASFSaveOnceMaxFrame)//如果存档禁止缓冲小于等于0,则代表可以存档
	{
		return true;
	}
	this._ZzyASFSaveOnceMaxFrame--;
	return false;
}



Game_System.prototype.AddZzyASFSaveCount = function()//增加自动存档次数
{
	if(this._ZzyASFSaveCount === undefined)
	{this._ZzyASFSaveCount = 0;}
	this._ZzyASFSaveCount++;
}

Game_System.prototype.GetZzyASFSaveCount = function()
{
	if(this._ZzyASFSaveCount === undefined)
	{this._ZzyASFSaveCount = 0;}
	return this._ZzyASFSaveCount;
}


Game_System.prototype.setZzyASFIsSetUp = function(isEnable)
{
	this._ZzyASFIsSetUp = isEnable;
}

Game_System.prototype.getZzyASFIsSetUp = function()
{
	if(this._ZzyASFIsSetUp === undefined)
	{this._ZzyASFIsSetUp = Zzy.Param.ASFIsSetUp;}
	return this._ZzyASFIsSetUp;
}


Game_System.prototype.setZzyASFIsFrameSave = function(isEnable)
{
	this._ZzyASFIsFrameSave = isEnable;
}

Game_System.prototype.getZzyASFIsFrameSave = function()
{
	if(this._ZzyASFIsFrameSave === undefined)
	{this._ZzyASFIsFrameSave = Zzy.Param.ASFIsFrameSave;}
	return this._ZzyASFIsFrameSave;
}

Game_System.prototype.setZzyASFIsSVValueSave = function(isEnable)
{
	this._ZzyASFIsSVValueSave = isEnable;
}

Game_System.prototype.getZzyASFIsSVValueSave = function()
{
	if(this._ZzyASFIsSVValueSave === undefined)
	{this._ZzyASFIsSVValueSave = Zzy.Param.ASFIsSVValueSave;}
	return this._ZzyASFIsSVValueSave;
}

Game_System.prototype.setZzyASFFrameSave = function(fFrame)
{
	this._ZzyASFFrameSave = fFrame;
	this._ZzyASFCSaveFrame = this._ZzyASFCSaveFrame > this._ZzyASFFrameSave ? this._ZzyASFFrameSave : this._ZzyASFCSaveFrame;
}

Game_System.prototype.getZzyASFFrameSave = function()
{
	if(this._ZzyASFFrameSave === undefined)
	{this._ZzyASFFrameSave = Zzy.Param.ASFFrameSave;}
	return this._ZzyASFFrameSave;
}



Game_System.prototype.setZzyASFSaveText = function(text)
{
	this._ZzyASFSaveText = text;
}

Game_System.prototype.getZzyASFSaveText = function()
{
	if(this._ZzyASFSaveText === undefined)
	{this._ZzyASFSaveText = Zzy.Param.ASFSaveText;}
	return this._ZzyASFSaveText;
}

Game_System.prototype.setZzyASFTextColor = function(textColor)
{
	this._ZzyASFTextColor = textColor;
}

Game_System.prototype.getZzyASFTextColor = function()
{
	if(this._ZzyASFTextColor === undefined)
	{this._ZzyASFTextColor = Zzy.Param.ASFTextColor;}
	return this._ZzyASFTextColor;
}

Game_System.prototype.setZzyASFBorderColor = function(borderColor)
{
	this._ZzyASFBorderColor = borderColor;
}

Game_System.prototype.getZzyASFBorderColor = function()
{
	if(this._ZzyASFBorderColor === undefined)
	{this._ZzyASFBorderColor = Zzy.Param.ASFBorderColor;}
	return this._ZzyASFBorderColor;
}


Game_System.prototype.setZzyASFIsInMapSave = function(isEnable)
{
	this._ZzyASFIsInMapSave = isEnable;
}

Game_System.prototype.getZzyASFIsInMapSave = function()
{
	if(this._ZzyASFIsInMapSave === undefined)
	{this._ZzyASFIsInMapSave = Zzy.Param.ASFIsInMapSave;}
	return this._ZzyASFIsInMapSave;
}


Game_System.prototype.setZzyASFIsOutMenuSave = function(isEnable)
{
	this._ZzyASFIsOutMenuSave = isEnable;
}

Game_System.prototype.getZzyASFIsOutMenuSave = function()
{
	if(this._ZzyASFIsOutMenuSave === undefined)
	{this._ZzyASFIsOutMenuSave = Zzy.Param.ASFIsOutMenuSave;}
	return this._ZzyASFIsOutMenuSave;
}


Game_System.prototype.setZzyASFIsOutBattleSave = function(isEnable)
{
	this._ZzyASFIsOutBattleSave = isEnable;
}

Game_System.prototype.getZzyASFIsOutBattleSave = function()
{
	if(this._ZzyASFIsOutBattleSave === undefined)
	{this._ZzyASFIsOutBattleSave = Zzy.Param.ASFIsOutBattleSave;}
	return this._ZzyASFIsOutBattleSave;
}

Game_System.prototype.setZzyASFAutoSaveId = function(saveId)
{
	this._ZzyASFAutoSaveId = saveId;
}

Game_System.prototype.getZzyASFAutoSaveId = function()
{
	if(this._ZzyASFAutoSaveId === undefined)
	{this._ZzyASFAutoSaveId = Zzy.Param.ASFAutoSaveId;}
	return this._ZzyASFAutoSaveId;
}


Game_System.prototype.setZzyASFIsOverLoad = function(isEnable)
{
	this._ZzyASFIsOverLoad = isEnable;
}

Game_System.prototype.getZzyASFIsOverLoad = function()
{
	if(this._ZzyASFIsOverLoad === undefined)
	{this._ZzyASFIsOverLoad = Zzy.Param.ASFIsOverLoad;}
	return this._ZzyASFIsOverLoad;
}



//================================================================
//Game_Interpreter
//================================================================
Zzy.ASF.Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args)
{
	Zzy.ASF.Game_Interpreter_pluginCommand.call(this,command,args);
	if(command === 'ZzyASF')
	{
		this.ZzyASFCommand(args);
	}
	
}

Game_Interpreter.prototype.ZzyASFCommand = function(args)
{
	var command = String(args[0]);

	switch(command)
	{
		case 'SetUp':
		var isEnable = eval(String(args[1]));
		Zzy.ASF.SetUp(isEnable);
		
		//$gameSystem.setZzyASFIsSetUp(isEnable);
		break;
		
		case 'AutoSave':
		Zzy.ASF.AutoSave();
		break;
		
		case 'AutoSaveId':
		var fileId = parseInt(args[1]);
		Zzy.ASF.AutoSaveId(fileId);
		
		//$gameSystem.setZzyASFAutoSaveId(fileId);
		break;
		
		case 'OverLoad':
		var isEnable = eval(String(args[1]));
		Zzy.ASF.OverLoad(isEnable);
		
		//$gameSystem.setZzyASFIsOverLoad(isEnable);
		break;
		
		case 'SaveText':
		var text = String(args[1]);
		Zzy.ASF.SaveText(text);
		
		//$gameSystem.setZzyASFSaveText(text);
		break;
		
		case 'TextColor':
		var color = String(args[1]);
		Zzy.ASF.TextColor(color);
		
		//$gameSystem.setZzyASFTextColor(color);
		break;

		case 'BorderColor':
		var color = String(args[1]);
		Zzy.ASF.BorderColor(color);
		
		//$gameSystem.setZzyASFBorderColor(color);
		break;
		
		case 'InMapSave'://进入地图存储
		var isEnable = eval(String(args[1]));
		Zzy.ASF.InMapSave(isEnable);
		
		//$gameSystem.setZzyASFIsInMapSave(isEnable);
		break;
		
		case 'OutMenuSave'://离开菜单时存储
		var isEnable = eval(String(args[1]));
		Zzy.ASF.OutMenuSave(isEnable);
		
		//$gameSystem.setZzyASFIsOutMenuSave(isEnable);
		break;
		
		case 'OutBattleSave'://离开战斗存储
		var isEnable = eval(String(args[1]));
		Zzy.ASF.OutBattleSave(isEnable);
		
		//$gameSystem.setZzyASFIsOutBattleSave(isEnable);
		break;
		
		case 'IsFrameSave':
		var isEnable = eval(String(args[1]));
		Zzy.ASF.IsFrameSave(isEnable);
		
		//$gameSystem.setZzyASFIsFrameSave(isEnable);
		break;
		
		case 'IsSVValueSave':
		var isEnable = eval(String(args[1]));
		Zzy.ASF.IsSVValueSave(isEnable);
		
		//$gameSystem.setZzyASFIsSVValueSave(isEnable);
		break;
		
		case 'FrameSave':
		var fFrame = parseInt(args[1]);
		Zzy.ASF.FrameSave(fFrame);
		
		//$gameSystem.setZzyASFFrameSave(fFrame);
		break;
		
		case 'SavePicture':
		var name = String(args[1]);
		Zzy.ASF.SavePicture(name);
		
		//$gameSystem._ZzyASFSavePicture = name;
		break;
		
		case 'PicPosition':
		var modeStr = String(args[1]);
		Zzy.ASF.PicPosition(modeStr);
		
		//$gameSystem._ZzyASFPicPosition = Zzy.ASF.PicPositionToID(modeStr);
		break;

		case 'PicPosOfx':
		var ofx	= Number(args[1]);
		Zzy.ASF.PicPosOfx(ofx);
		
		//$gameSystem._ZzyASFPicPosOfx = ofx;
		break;

		case 'PicPosOfy':
		var ofy	= Number(args[1]);
		Zzy.ASF.PicPosOfy(ofy);
		
		//$gameSystem._ZzyASFPicPosOfy = ofy;
		break;

		case 'PicOp':
		var op = parseInt(args[1]);
		Zzy.ASF.PicOp(op);
		
		//$gameSystem._ZzyASFPicOp = op;
		break;		
		
		case 'PicFadeIn':
		var tFrame = parseInt(args[1]);
		Zzy.ASF.PicFadeIn(tFrame);
		
		//$gameSystem._ZzyASFPicFadeIn = tFrame;
		break;		
		
		case 'PicWait':
		var tFrame = parseInt(args[1]);
		Zzy.ASF.PicWait(tFrame);
		
		//$gameSystem._ZzyASFPicWait = tFrame;
		break;	
		
		case 'PicFadeOut':
		var tFrame = parseInt(args[1]);
		Zzy.ASF.PicFadeOut(tFrame);
		
		//$gameSystem._ZzyASFPicFadeOut = tFrame;
		break;

	}
}

//=================================================================
//DataManager
//=================================================================


//存档游戏
DataManager.ZzyASFSaveGame = function(savefileId)
{
	
	var tempLastId = $gameSystem.GetZzyASFLastId();
	$gameSystem.SetZzyASFLastId(savefileId);	
	$gameSystem.onBeforeSave();
	if(DataManager.saveGame(savefileId))
	{
		//SoundManager.playSave();
		StorageManager.cleanBackup(savefileId);//清理拷贝		
		return true;
	}
	else
	{
		//SoundManager.playBuzzer();		
		$gameSystem.SetZzyASFLastId(tempLastId);
		return false;
	}
}

//=================================================================
//Game_Variables
//=================================================================
//变量检测
Zzy.ASF.Game_Variables_setValue = Game_Variables.prototype.setValue;
Game_Variables.prototype.setValue = function(variableId, value) 
{
	
	var flag = $gameSystem.getZzyASFIsSVValueSave() && Zzy.ASF.TempVariableCheckArr[variableId] ? true : false;
	var srcValue = 0;
	var afterValue = 0;

	if(flag){srcValue = this.value(variableId);}
	
	Zzy.ASF.Game_Variables_setValue.call(this,variableId, value);
	
	if(flag)//标记成立,比较数据是否发生了变化
	{
		afterValue = this.value(variableId);
		if(srcValue !== afterValue)
		{
			Zzy.ASF.TempNeedSaveFlag = true;//进行自动存储申请
			Zzy.ASF.TempNeedSaveDelay = 0;
		}
	}	
};


//=================================================================
//Game_Switches
//=================================================================
Zzy.ASF.Game_Switches_setValue = Game_Switches.prototype.setValue;
Game_Switches.prototype.setValue = function(switchId, value) 
{
	var flag = $gameSystem.getZzyASFIsSVValueSave() && Zzy.ASF.TempSwitchCheckArr[switchId] ? true : false;
	var srcValue = false;
	var afterValue = false;	

	if(flag){srcValue = this.value(switchId);}

	Zzy.ASF.Game_Switches_setValue.call(this,switchId,value);
	
	if(flag)//标记成立,比较开关是否发生了变化
	{
		afterValue = this.value(switchId);
		if(srcValue !== afterValue)
		{
			Zzy.ASF.TempNeedSaveFlag = true;//进行自动存储申请
			Zzy.ASF.TempNeedSaveDelay = 0;
		}
	}	
};

//=================================================================
//Scene_Map
//=================================================================

Zzy.ASF.Scene_Map_start = Scene_Map.prototype.start;
Scene_Map.prototype.start = function() 
{
	Zzy.ASF.Scene_Map_start.call(this);
	this.ExeZzyASFMapSave();//进入新地图检测
	this.CreateZzyASFAutoWindow();//存档图片窗口
};


Scene_Map.prototype.CreateZzyASFAutoWindow = function()
{
	this._ZzyASFAutoWindow = new Window_ASFAutoSave();
	this.addChild(this._ZzyASFAutoWindow);
}


Scene_Map.prototype.ExeZzyASFMapSave = function()
{
	//延迟几帧进行存储,为了防止意外

	if($gameSystem.GetZzyASFInMapID() !== $gameMap.mapId())
	{
		$gameSystem.SetZzyASFInMapID($gameMap.mapId());
		if($gameSystem.getZzyASFIsInMapSave())
		{
			Zzy.ASF.TempNeedSaveFlag = true;
			Zzy.ASF.TempNeedSaveDelay = Zzy.ASF.TempDelayFrameSave;//延迟存储,延迟时间为3帧			
		}
	}	
}


Zzy.ASF.Scene_Map_update = Scene_Map.prototype.update;
Scene_Map.prototype.update = function()
{
	Zzy.ASF.Scene_Map_update.call(this);
	
	if($gameSystem.getZzyASFIsSetUp())//判断功能是否开启
	{
		this.updateZzyASFAutoFrameSave();//固定时间记时自动存档
		
		this.updateZzyASFSave();//进行自动存档		
	}
}

Scene_Map.prototype.updateZzyASFSave = function()//更新自动存档
{
	var saveCheck = $gameSystem.CheckZzyASFSaveOnceMaxFrame();
	
	if(Zzy.ASF.TempNeedSaveFlag)
	{
		if(!saveCheck)//因为存档连续保护未冷却
		{
			Zzy.ASF.TempNeedSaveFlag = false;
			Zzy.ASF.TempNeedSaveDelay = 0;return;
		}		
		
		if(Zzy.ASF.TempNeedSaveDelay > 0)
		{Zzy.ASF.TempNeedSaveDelay--;}
		else
		{
			if(saveCheck)
			{
				Zzy.ASF.TempNeedSaveFlag = false;
				Zzy.ASF.AutoSave();//自动存档	
				$gameSystem.ResetZzyASFSaveOnceMaxFrame();//连续存档保护
			}
		}
	}
}


Scene_Map.prototype.updateZzyASFAutoFrameSave = function()
{
	if(!$gameSystem.getZzyASFIsFrameSave())return;
	
	var ff = $gameSystem.GetZzyASFCSaveFrame();

	if(ff > 0)
	{
		ff--;
		$gameSystem.SetZzyASFCSaveFrame(ff);
		return;
	}

	//执行存档
	$gameSystem.SetZzyASFCSaveFrame($gameSystem.getZzyASFFrameSave());
	
	Zzy.ASF.TempNeedSaveFlag = true;
	Zzy.ASF.TempNeedSaveDelay = 0;
}


Scene_Map.prototype.ZzyASFSetupAutoPic = function()//显示位图
{
	
	if(!this._ZzyASFAutoWindow || !this._ZzyASFAutoWindow._sprite || !this._ZzyASFAutoWindow._sprite.bitmap)
	{
		return undefined;
	}
	else
	{
		this._ZzyASFAutoWindow._sprite.Setup();//激活
	}
}


//=================================================================
//Window_SavefileList
//=================================================================

Zzy.ASF.Window_SavefileList_playBuzzerSound = Window_SavefileList.prototype.playBuzzerSound;
Window_SavefileList.prototype.playBuzzerSound = function() 
{
	if($gameSystem.getZzyASFIsSetUp())
	{
		if(SceneManager._scene instanceof Scene_File)
		{
			if(SceneManager._scene.savefileId() === $gameSystem.getZzyASFAutoSaveId() &&
			Zzy.Param.ASFAllSE[1].name)//播放声音
			{
				Zzy.ASF.PlaySE(1);
				return;
			}
		}				
	}


	if(Zzy.ASF.Window_SavefileList_playBuzzerSound)
	{Zzy.ASF.Window_SavefileList_playBuzzerSound.call(this);}
	else
	{Window_Selectable.prototype.playBuzzerSound.call(this);}
	
};




Zzy.ASF.Window_SavefileList_drawItem = Window_SavefileList.prototype.drawItem;
Window_SavefileList.prototype.drawItem = function(index) 
{
	
	if($gameSystem.getZzyASFIsSetUp())
	{		
		var id = index+1;
		if(id === $gameSystem.getZzyASFAutoSaveId())
		{
			this.drawZzyASFAutoItem(id);
		}
		else
		{
			Zzy.ASF.Window_SavefileList_drawItem.call(this,index);//原版绘制
		}		
	}
	else
	{
		Zzy.ASF.Window_SavefileList_drawItem.call(this,index);//原版绘制
	}

};

Window_SavefileList.prototype.drawZzyASFAutoItem = function(id)
{
		//获取原本颜色和边框
	var sTextColor = this.contents.textColor;
	var sOutlineColor = this.contents.outlineColor;
	this.contents.textColor = $gameSystem.getZzyASFTextColor() ? $gameSystem.getZzyASFTextColor() : sTextColor;
	this.contents.outlineColor = $gameSystem.getZzyASFBorderColor() ? $gameSystem.getZzyASFBorderColor() : sOutlineColor; 

	var valid = DataManager.isThisGameFile(id);
	var info = DataManager.loadSavefileInfo(id);
	var rect = this.itemRectForText(id-1);	
		
		//设置特殊效果
	if (this._mode === 'load') 
	{
		this.changePaintOpacity(valid);
	}		
		
	this.drawZzyASFFileId(id, rect.x, rect.y);
	if (info) 
	{
		this.changePaintOpacity(valid);
		this.drawContents(info, rect, valid);
		this.changePaintOpacity(true);
	}
	
	this.contents.textColor = sTextColor;
	this.contents.outlineColor = sOutlineColor;	
}

Window_SavefileList.prototype.drawZzyASFFileId = function(id, x, y) 
{
	var aText = $gameSystem.getZzyASFSaveText() ? $gameSystem.getZzyASFSaveText() : TextManager.file + ' ' + id;
    this.drawText(aText, x, y, 180);
};



//=================================================================
//Window_ASFAutoSave
//=================================================================


function Window_ASFAutoSave() 
{
    this.initialize.apply(this, arguments);
}

Window_ASFAutoSave.prototype = Object.create(Window_Base.prototype);
Window_ASFAutoSave.prototype.constructor = Window_ASFAutoSave;

Window_ASFAutoSave.prototype.initialize = function() 
{
	x = 0;
	y = 0;
	width = Graphics.boxWidth;
	height = Graphics.boxHeight;
    Window_Base.prototype.initialize.call(this, x, y, width, height);

	this.initWindow();//初始化
};

Window_ASFAutoSave.prototype.standardPadding = function() 
{
    return 0;
};

Window_ASFAutoSave.prototype.initWindow = function()
{
	this.opacity = 0;
	this._sprite = new Sprite_ZzyASFSave();//申请位图
	this.addChild(this._sprite);
	
}


//=================================================================
//Scene_Map
//=================================================================

Zzy.ASF.Scene_Menu_terminate = Scene_Menu.prototype.terminate;
Scene_Menu.prototype.terminate = function() //判断是否需要进行存档
{
	if(Zzy.ASF.Scene_Menu_terminate)
	{Zzy.ASF.Scene_Menu_terminate.call(this);}
	else
	{Scene_MenuBase.prototype.terminate.call(this);}
	
	//结束记录
	if($gameSystem.getZzyASFIsOutMenuSave())//满足存档
	{
		Zzy.ASF.TempNeedSaveFlag = true;
		Zzy.ASF.TempNeedSaveDelay = Zzy.ASF.TempMapComFrame;//等待
	}
};


//=================================================================
//Scene_Save
//=================================================================
Zzy.ASF.Scene_Save_onSavefileOk = Scene_Save.prototype.onSavefileOk;
Scene_Save.prototype.onSavefileOk = function() 
{
	if(!$gameSystem.getZzyASFIsOverLoad())
	{
		//不允许自动存档
		if(SceneManager._scene.savefileId() === $gameSystem.getZzyASFAutoSaveId())
		{
			
			Zzy.ASF.PlaySE(1);
			//保持活跃
			this._listWindow.activate();
			return;//不允许自动存档
		}
	}
	
	Zzy.ASF.Scene_Save_onSavefileOk.call(this);

};

//=================================================================
//BattleManager
//=================================================================
Zzy.ASF.BattleManager_endBattle = BattleManager.endBattle;
BattleManager.endBattle = function(result) //结束战斗
{
	Zzy.ASF.BattleManager_endBattle.call(this,result);

	//判断是否需要进行自动存档
	if($gameSystem.getZzyASFIsOutBattleSave())
	{
		//存档缓存
		Zzy.ASF.TempNeedSaveFlag = true;
		Zzy.ASF.TempNeedSaveDelay = Zzy.ASF.TempMapComFrame;
	}
};



//=================================================================
//Sprite_ZzyASFSave
//=================================================================

function Sprite_ZzyASFSave()
{
    this.initialize.apply(this, arguments);
}

Sprite_ZzyASFSave.prototype = Object.create(Sprite.prototype);
Sprite_ZzyASFSave.prototype.constructor = Sprite_ZzyASFSave;

Sprite_ZzyASFSave.prototype.initialize = function() 
{
    Sprite.prototype.initialize.call(this);
	this._stage = 0;//待机状态//0隐藏 1渐入 2等待 3渐出
	this.Cframe = 0;//等待	

	this.initSprite();//初始化
};

Sprite_ZzyASFSave.prototype.initSprite = function()
{
	this.x = -Graphics.boxWidth;
	this.y = -Graphics.boxHeight;
	this.refreshBitmap();//刷新bitmap
	//隐藏
	this.Hide();
}

Sprite_ZzyASFSave.prototype.refreshBitmap = function()//刷新位图
{
	if(!$gameSystem.getZzyASFIsSetUp())
	{
		this.bitmap = undefined;
		return;
	}
	var name = $gameSystem.GetZzyASFSavePicture();
	if(!name)
	{this.bitmap = undefined;}
	else
	{this.bitmap = ImageManager.loadSystem(name);}//申请位图
}


Sprite_ZzyASFSave.prototype.Hide = function()
{
	this.visible = false;
	this.opacity = 0;
}


Sprite_ZzyASFSave.prototype.Setup = function()//设置启动
{
	this.visible = true;
	this.opacity = 0;
	this._stage = 1;
	this.Cframe = 0;	
	
}

Sprite_ZzyASFSave.prototype.updateStage = function()
{
	if(this._stage === 0){return;}

	this.Cframe++;
	
	var op = $gameSystem.GetZzyASFPicOp();
	
	var picFadeIn = $gameSystem.GetZzyASFPicFadeIn();
	var picWait = $gameSystem.GetZzyASFPicWait();
	var picFadeOut = $gameSystem.GetZzyASFPicFadeOut();
	
	if(this._stage === 1)
	{
		if(this.Cframe >= picFadeIn)
		{
			this.Cframe = 0;
			this._stage = 2;
			this.opacity = op;
		}
		else
		{
			var rate = this.Cframe / picFadeIn;
			this.opacity = op * rate;			
		}

	}
	else if(this._stage === 2)
	{
		if(this.Cframe >= picWait)
		{
			this.Cframe = 0;
			this._stage = 3;
		}
		else
		{this.opacity = op;}
	}
	else if(this._stage === 3)
	{
		if(this.Cframe >= picFadeOut)
		{
			this.Cframe = 0;
			this._stage = 0;
			this.Hide();
		}
		else
		{
			var rate = 1 - (this.Cframe / picFadeOut);
			this.opacity = op * rate;			
		}
	}	
}

Sprite_ZzyASFSave.prototype.update = function()
{
	Sprite.prototype.update.call(this);
	this.updateStage();
	this.updatePosition();//更新位置
}


Sprite_ZzyASFSave.prototype.updatePosition = function()//刷新位置
{
	if(!this.bitmap || !this.bitmap.width || !this.bitmap.height)return;
	if(this._stage === 0){return;}
	
	var modeId = $gameSystem.GetZzyASFPicPosition();
	//取巧算法
	var mx = (modeId-1)%3;
	var my = Math.floor((modeId-1)/3);
	this.anchor.x = mx * 0.5;
	this.anchor.y = my * 0.5;
	
	this.x = Graphics.boxWidth/2 * mx + $gameSystem.GetZzyASFPicPosOfx();
	this.y = Graphics.boxHeight/2 * my + $gameSystem.GetZzyASFPicPosOfy();
}


//------------------------------Zzy.ASF.Function-------------------------------

Zzy.ASF.AutoSave = function()//调用自动存档
{
	if(!$gameSystem.getZzyASFIsSetUp())return undefined;
	var saveId = $gameSystem.getZzyASFAutoSaveId();
	//显示存档动画
	if(SceneManager._scene instanceof Scene_Map)
	{
		SceneManager._scene.ZzyASFSetupAutoPic();
	}
	Zzy.ASF.PlaySE(2);//自动存档音效
	$gameSystem.AddZzyASFSaveCount();//增加自动存档次数
	return Zzy.ASF.ForceSave(saveId);//存储到ID中
}


Zzy.ASF.LastSaveGame = function()//覆盖最后的存档点
{
	var lastId = $gameSystem.GetZzyASFLastId();
	if(lastId === -1)return false;
	return DataManager.ZzyASFSaveGame(lastId);
}

Zzy.ASF.SaveNullGame = function()//存储在空的文件中
{
	//获取最大存档数量
	var maxSave = DataManager.maxSavefiles();
	var saveId = -1;
	for(var i=1;i<=maxSave;i++)
	{
		if(!DataManager.loadSavefileInfo(i))
		{
			saveId = i;
			break;
		}
	}
	if(saveId === -1)
	{return false;}
	return DataManager.ZzyASFSaveGame(saveId);
}

Zzy.ASF.ForceSave = function(saveId)
{
	var maxSave = DataManager.maxSavefiles();
	if(saveId > maxSave)return false;
	return DataManager.ZzyASFSaveGame(saveId);
}



Zzy.ASF.IsHaveSave = function(saveId)
{
	var maxSave = DataManager.maxSavefiles();
	if(saveId > maxSave)return undefined;
	
	if(DataManager.loadSavefileInfo(saveId))return true;
	return false;
}


Zzy.ASF.PlaySE = function(soundID)//播放声音
{
	var se = Zzy.Param.ASFAllSE[soundID];
	if(se && se.name)
	{
		AudioManager.playSe(se);
	}
	
}


Zzy.ASF.PicPositionToID = function(str)
{
	switch(str)
	{
		case 'left-up':return 1;
		case 'center-up':return 2;
		case 'right-up':return 3;
		case 'left-center':return 4;
		case 'center':return 5;
		case 'right-center':return 6;
		case 'left-down':return 7;
		case 'center-down':return 8;
		case 'right-down':return 9;
	}
	console.log('Error:来自LiuYue_AutoSave,检查Position位置填写是否正确');return;
	return 1;
}

Zzy.ASF.GetAutoSaveCount = function()//返回自动存档次数
{
	return $gameSystem.GetZzyASFSaveCount();
}




Zzy.ASF.SetUp = function(isEnable)
{
	$gameSystem.setZzyASFIsSetUp(isEnable);
}

Zzy.ASF.AutoSaveId = function(fileId)
{
	$gameSystem.setZzyASFAutoSaveId(fileId);
}

Zzy.ASF.OverLoad = function(isEnable)
{
	$gameSystem.setZzyASFIsOverLoad(isEnable);
}

Zzy.ASF.SaveText = function(text)
{
	$gameSystem.setZzyASFSaveText(text);
}

Zzy.ASF.TextColor = function(color)
{
	$gameSystem.setZzyASFTextColor(color);
}

Zzy.ASF.BorderColor = function(color)
{
	$gameSystem.setZzyASFBorderColor(color);
}

Zzy.ASF.InMapSave = function(isEnable)
{
	$gameSystem.setZzyASFIsInMapSave(isEnable);
}

Zzy.ASF.OutMenuSave = function(isEnable)
{
	$gameSystem.setZzyASFIsOutMenuSave(isEnable);
}

Zzy.ASF.OutBattleSave = function(isEnable)
{
	$gameSystem.setZzyASFIsOutBattleSave(isEnable);
}

Zzy.ASF.IsFrameSave = function(isEnable)
{
	$gameSystem.setZzyASFIsFrameSave(isEnable);
}

Zzy.ASF.IsSVValueSave = function(isEnable)
{
	$gameSystem.setZzyASFIsSVValueSave(isEnable);
}

Zzy.ASF.FrameSave = function(fFrame)
{
	$gameSystem.setZzyASFFrameSave(fFrame);
}

Zzy.ASF.SavePicture = function(name)
{
	$gameSystem.SetZzyASFSavePicture(name);
}

Zzy.ASF.PicPosition = function(modeStr)
{
	var id = Zzy.ASF.PicPositionToID(modeStr);
	$gameSystem.SetZzyASFPicPosition(id);
}

Zzy.ASF.PicPosOfx = function(ofx)
{
	$gameSystem.SetZzyASFPicPosOfx(ofx);
}

Zzy.ASF.PicPosOfy = function(ofy)
{
	$gameSystem.SetZzyASFPicPosOfy(ofy);
}

Zzy.ASF.PicOp = function(op)
{
	$gameSystem.SetZzyASFPicOp(op);
}

Zzy.ASF.PicFadeIn = function(tFrame)
{
	$gameSystem.SetZzyASFPicFadeIn(tFrame);
}

Zzy.ASF.PicWait = function(tFrame)
{
	$gameSystem.SetZzyASFPicWait(tFrame);
}

Zzy.ASF.PicFadeOut = function(tFrame)
{
	$gameSystem.SetZzyASFPicFadeOut(tFrame);
}

