/* 
		WARNING 
		Auto generated file. 
		Do not modify its contents.
*/

const extend = require('js-base/core/extend');
const Page = require('sf-core/ui/page');
const StatusBarStyle = require('sf-core/ui/statusbarstyle');
const Color = require('sf-core/ui/color');
const FlexLayout = require('sf-core/ui/flexlayout');



const getCombinedStyle = require("library/styler-builder").getCombinedStyle;

const PgNotification_ = extend(Page)(
	//constructor
	function(_super, props) {
		// initalizes super class for this page scope
		_super(this, Object.assign({}, {
			onShow: onShow.bind(this),
			onLoad: onLoad.bind(this),
			orientation: Page.Orientation.PORTRAIT
		}, props || {}));


	});

// Page.onShow -> This event is called when a page appears on the screen (everytime).
function onShow() {
  //StatusBar props
  const statusBarStyle = getCombinedStyle(".statusBar", {
		visible: true,
		color: Color.create(255, 44, 50, 57),
		style: StatusBarStyle.LIGHTCONTENT
	});
	
	Object.assign(this.statusBar, statusBarStyle);
	
	if(statusBarStyle.color)
	  this.statusBar.android && (this.statusBar.android.color = statusBarStyle.color);
	if(statusBarStyle.style)
	  this.statusBar.ios && (this.statusBar.ios.style = statusBarStyle.style);

  //HeaderBar props
  const headerBarStyle = getCombinedStyle(".headerBar", {
		backgroundColor: Color.create(255, 44, 50, 57),
		visible: true,
		title: "Notification History",
		titleColor: Color.create(255, 255, 255, 255)
	});
	
	Object.assign(this.headerBar,	headerBarStyle);
	
}

// Page.onLoad -> This event is called once when page is created.
function onLoad() { 

  const pageStyle = getCombinedStyle(".page", {
		backgroundColor: Color.create("#FFFFFF"),
		alignContent: FlexLayout.AlignContent.STRETCH,
		alignItems: FlexLayout.AlignItems.STRETCH,
		direction: FlexLayout.Direction.INHERIT,
		flexDirection: FlexLayout.FlexDirection.COLUMN,
		flexWrap: FlexLayout.FlexWrap.NOWRAP,
		justifyContent: FlexLayout.JustifyContent.FLEX_START
	});
	
	Object.assign(this.layout, pageStyle);
	
}

module && (module.exports = PgNotification_);