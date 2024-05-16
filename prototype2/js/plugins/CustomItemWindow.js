/*:
 * @plugindesc 修改物品窗口样式插件.
 * @author Meiyu
 *
 * @help
 *   注意本插件是直接覆盖原代码方法，涉及到的有关代码会有冲突现象
 *   使用前请确定其他插件是否也有修改下列方法
 *   若产生冲突导致工程损坏一概不负责
 *
 *   另外本插件可以随意使用、二次修改、商用等，无需与作者报备
*/

//==================================================================
// Scene_Item
//==================================================================
Scene_Item.prototype.create = function() {
	Scene_ItemBase.prototype.create.call(this);
    this.createHelpWindow();
    this.createItemWindow();
    this.createActorWindow();
};

Scene_Item.prototype.createItemWindow = function() {
    var wy = this._helpWindow.height;
    var wh = Graphics.boxHeight - wy;
    this._itemWindow = new Window_ItemList(0, wy, Graphics.boxWidth, wh);
    this._itemWindow.setHelpWindow(this._helpWindow);
    this._itemWindow.setHandler('ok',     this.onItemOk.bind(this));
    this._itemWindow.setHandler('cancel', this.onItemCancel.bind(this));
    this._itemWindow.setCategory('item');
    this._itemWindow.activate();
    this._itemWindow.selectLast();
    this.addWindow(this._itemWindow);
};

Scene_Item.prototype.onItemCancel = function() {
    this._itemWindow.deselect();
    SceneManager.pop();
};

//==================================================================
// Scene_Item
//==================================================================
Scene_Shop.prototype.create = function() {
    Scene_MenuBase.prototype.create.call(this);
    this.createHelpWindow();
    this.createGoldWindow();
    this.createCommandWindow();
    this.createDummyWindow();
    this.createNumberWindow();
    this.createStatusWindow();
    this.createBuyWindow();
    this.createSellWindow();
};

Scene_Shop.prototype.createSellWindow = function() {
    var wy = this._dummyWindow.y;
    var wh = Graphics.boxHeight - wy;
    this._sellWindow = new Window_ShopSell(0, wy, Graphics.boxWidth, wh);
    this._sellWindow.setHelpWindow(this._helpWindow);
    this._sellWindow.hide();
    this._sellWindow.setHandler('ok',     this.onSellOk.bind(this));
    this._sellWindow.setHandler('cancel', this.onSellCancel.bind(this));
    this._sellWindow.setCategory('item');
    this.addWindow(this._sellWindow);
};

Scene_Shop.prototype.activateSellWindow = function() {
    this._sellWindow.refresh();
    this._sellWindow.show();
    this._sellWindow.activate();
    this._statusWindow.hide();
};

Scene_Shop.prototype.commandSell = function() {
    this._dummyWindow.hide();
    this.activateSellWindow();
    this._sellWindow.select(0);
};

Scene_Shop.prototype.onSellOk = function() {
    this._item = this._sellWindow.item();
    this._sellWindow.hide();
    this._numberWindow.setup(this._item, this.maxSell(), this.sellingPrice());
    this._numberWindow.setCurrencyUnit(this.currencyUnit());
    this._numberWindow.show();
    this._numberWindow.activate();
    this._statusWindow.setItem(this._item);
    this._statusWindow.show();
};

Scene_Shop.prototype.onSellCancel = function() {
    this._sellWindow.deselect();
    this._statusWindow.setItem(null);
    this._helpWindow.clear();
    this._commandWindow.activate();
    this._dummyWindow.show();
    this._sellWindow.hide();
};