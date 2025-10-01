// Garden Gnome Software - Skin
// Pano2VR 7.1.11/21010
// Filename: far glory.ggsk
// Generated 2025-10-02T01:06:38

function pano2vrSkin(player,base) {
	player.addVariable('vis_thumbnails', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_thumbnails_phone', 2, false, { ignoreInState: 0  });
	player.addVariable('resp_phone_1', 2, false, { ignoreInState: 1  });
	player.addVariable('var_map', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_floorplan', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_map', 2, false, { ignoreInState: 0  });
	player.addVariable('opt_desc_in_maps', 2, true, { ignoreInState: 1  });
	player.addVariable('resp_phone', 2, false, { ignoreInState: 1  });
	player.addVariable('menu_view', 2, false, { ignoreInState: 0  });
	player.addVariable('menu_room', 2, false, { ignoreInState: 0  });
	player.addVariable('menu_entertainment', 2, false, { ignoreInState: 0  });
	player.addVariable('menu_dining', 2, false, { ignoreInState: 0  });
	player.addVariable('menu_lobby', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_info_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('button_info', 2, false, { ignoreInState: 0  });
	player.addVariable('node_title', 2, false, { ignoreInState: 0  });
	player.addVariable('opt_3d_preview', 2, true, { ignoreInState: 1  });
	player.addVariable('node_data', 0, "", { ignoreInState: 0  });
	player.addVariable('node_view', 0, "", { ignoreInState: 0  });
	player.addVariable('opt_3d_preview_1', 2, true, { ignoreInState: 1  });
	player.addVariable('vis_info_show', 2, false, { ignoreInState: 0  });
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressedKey = 0;
	var skinKeyPressedText = '';
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		me._variable_resp_phone_1 = {};
		me._variable_resp_phone_1.ggCurrentLogicState = -1;
		me._variable_resp_phone_1.logicBlock = function() {
			var newLogicState_resp_phone_1;
			if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicState_resp_phone_1 = 0;
			}
			else {
				newLogicState_resp_phone_1 = -1;
			}
			if (me._variable_resp_phone_1.ggCurrentLogicState != newLogicState_resp_phone_1) {
				me._variable_resp_phone_1.ggCurrentLogicState = newLogicState_resp_phone_1;
				if (me._variable_resp_phone_1.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_phone_1', true);
				}
				else {
					player.setVariableValue('resp_phone_1', false);
				}
			}
		}
		me._variable_resp_phone = {};
		me._variable_resp_phone.ggCurrentLogicState = -1;
		me._variable_resp_phone.logicBlock = function() {
			var newLogicState_resp_phone;
			if (
				((player.getViewerSize(true).width <= 640))
			)
			{
				newLogicState_resp_phone = 0;
			}
			else {
				newLogicState_resp_phone = -1;
			}
			if (me._variable_resp_phone.ggCurrentLogicState != newLogicState_resp_phone) {
				me._variable_resp_phone.ggCurrentLogicState = newLogicState_resp_phone;
				if (me._variable_resp_phone.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_phone', true);
				}
				else {
					player.setVariableValue('resp_phone', false);
				}
			}
		}
		el=me._room_button_desktop=document.createElement('div');
		els=me._room_button_desktop__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Room Button desktop";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(150,150,150,0.705882);';
		hs+='border-color : rgba(33,33,33,0.784314);';
		hs+='border-radius : 10px;';
		hs+='border-style : solid;';
		hs+='border-width : 2px 2px 2px 2px;';
		hs+='bottom : 20px;';
		hs+='color : #000000;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 40px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._room_button_desktop.ggUpdateText=function() {
			var params = [];
			var hs = player._("\u4f4f \u623f", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._room_button_desktop.ggUpdateText();
		el.appendChild(els);
		me._room_button_desktop.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._room_button_desktop.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._room_button_desktop.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._room_button_desktop.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._room_button_desktop.style.transition='background-color 0s, border-width 0s, color 0s';
				if (me._room_button_desktop.ggCurrentLogicStateVisible == 0) {
					me._room_button_desktop.style.visibility="hidden";
					me._room_button_desktop.ggVisible=false;
				}
				else {
					me._room_button_desktop.style.visibility=(Number(me._room_button_desktop.style.opacity)>0||!me._room_button_desktop.style.opacity)?'inherit':'hidden';
					me._room_button_desktop.ggVisible=true;
				}
			}
		}
		me._room_button_desktop.logicBlock_visible();
		me._room_button_desktop.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseDown['room_button_desktop'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else if (
				((player.getVariableValue('menu_room') == true))
			)
			{
				newLogicStateBackgroundColor = 1;
			}
			else if (
				((me.elementMouseOver['room_button_desktop'] == true))
			)
			{
				newLogicStateBackgroundColor = 2;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._room_button_desktop.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._room_button_desktop.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._room_button_desktop.style.transition='background-color 0s, border-width 0s, color 0s';
				if (me._room_button_desktop.ggCurrentLogicStateBackgroundColor == 0) {
					me._room_button_desktop.style.backgroundColor="rgba(125,125,125,0.490196)";
				}
				else if (me._room_button_desktop.ggCurrentLogicStateBackgroundColor == 1) {
					me._room_button_desktop.style.backgroundColor="rgba(255,255,255,1)";
				}
				else if (me._room_button_desktop.ggCurrentLogicStateBackgroundColor == 2) {
					me._room_button_desktop.style.backgroundColor="rgba(200,200,200,0.784314)";
				}
				else {
					me._room_button_desktop.style.backgroundColor="rgba(150,150,150,0.705882)";
				}
			}
		}
		me._room_button_desktop.logicBlock_backgroundcolor();
		me._room_button_desktop.logicBlock_borderwidth = function() {
			var newLogicStateBorderWidth;
			if (
				((me.elementMouseDown['room_button_desktop'] == true))
			)
			{
				newLogicStateBorderWidth = 0;
			}
			else if (
				((me.elementMouseOver['room_button_desktop'] == true))
			)
			{
				newLogicStateBorderWidth = 1;
			}
			else {
				newLogicStateBorderWidth = -1;
			}
			if (me._room_button_desktop.ggCurrentLogicStateBorderWidth != newLogicStateBorderWidth) {
				me._room_button_desktop.ggCurrentLogicStateBorderWidth = newLogicStateBorderWidth;
				me._room_button_desktop.style.transition='background-color 0s, border-width 0s, color 0s';
				if (me._room_button_desktop.ggCurrentLogicStateBorderWidth == 0) {
					me._room_button_desktop.style.borderWidth="3px 0px 0px 3px";
				}
				else if (me._room_button_desktop.ggCurrentLogicStateBorderWidth == 1) {
					me._room_button_desktop.style.borderWidth="0px 3px 3px 0px";
				}
				else {
					me._room_button_desktop.style.borderWidth="2px 2px 2px 2px";
				}
			}
		}
		me._room_button_desktop.logicBlock_borderwidth();
		me._room_button_desktop.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseDown['room_button_desktop'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._room_button_desktop.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._room_button_desktop.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._room_button_desktop.style.transition='background-color 0s, border-width 0s, color 0s';
				if (me._room_button_desktop.ggCurrentLogicStateTextColor == 0) {
					me._room_button_desktop.style.color="rgba(255,255,255,1)";
				}
				else {
					me._room_button_desktop.style.color="rgba(0,0,0,1)";
				}
			}
		}
		me._room_button_desktop.logicBlock_textcolor();
		me._room_button_desktop.onclick=function (e) {
			player.setVariableValue('menu_room', !player.getVariableValue('menu_room'));
			player.setVariableValue('menu_entertainment', false);
			player.setVariableValue('menu_view', false);
			player.setVariableValue('menu_lobby', false);
			player.setVariableValue('menu_dining', false);
		}
		me._room_button_desktop.onmouseenter=function (e) {
			me.elementMouseOver['room_button_desktop']=true;
			me._room_button_desktop.logicBlock_backgroundcolor();
			me._room_button_desktop.logicBlock_borderwidth();
		}
		me._room_button_desktop.onmousedown=function (e) {
			me.elementMouseDown['room_button_desktop']=true;
			me._room_button_desktop.logicBlock_backgroundcolor();
			me._room_button_desktop.logicBlock_borderwidth();
			me._room_button_desktop.logicBlock_textcolor();
		}
		me._room_button_desktop.onmouseup=function (e) {
			me.elementMouseDown['room_button_desktop']=false;
			me._room_button_desktop.logicBlock_backgroundcolor();
			me._room_button_desktop.logicBlock_borderwidth();
			me._room_button_desktop.logicBlock_textcolor();
		}
		me._room_button_desktop.onmouseleave=function (e) {
			me.elementMouseDown['room_button_desktop']=false;
			me.elementMouseOver['room_button_desktop']=false;
			me._room_button_desktop.logicBlock_backgroundcolor();
			me._room_button_desktop.logicBlock_backgroundcolor();
			me._room_button_desktop.logicBlock_borderwidth();
			me._room_button_desktop.logicBlock_borderwidth();
			me._room_button_desktop.logicBlock_textcolor();
		}
		me._room_button_desktop.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._room_button_desktop);
		el=me._view_button_desktop=document.createElement('div');
		els=me._view_button_desktop__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="View Button desktop";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(150,150,150,0.705882);';
		hs+='border-color : rgba(33,33,33,0.784314);';
		hs+='border-radius : 10px;';
		hs+='border-style : solid;';
		hs+='border-width : 2px 2px 2px 2px;';
		hs+='bottom : 70px;';
		hs+='color : #000000;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 40px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._view_button_desktop.ggUpdateText=function() {
			var params = [];
			var hs = player._("\u666f \u89c0", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._view_button_desktop.ggUpdateText();
		el.appendChild(els);
		me._view_button_desktop.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._view_button_desktop.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._view_button_desktop.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._view_button_desktop.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._view_button_desktop.style.transition='background-color 0s, border-width 0s, color 0s';
				if (me._view_button_desktop.ggCurrentLogicStateVisible == 0) {
					me._view_button_desktop.style.visibility="hidden";
					me._view_button_desktop.ggVisible=false;
				}
				else {
					me._view_button_desktop.style.visibility=(Number(me._view_button_desktop.style.opacity)>0||!me._view_button_desktop.style.opacity)?'inherit':'hidden';
					me._view_button_desktop.ggVisible=true;
				}
			}
		}
		me._view_button_desktop.logicBlock_visible();
		me._view_button_desktop.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseDown['view_button_desktop'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else if (
				((player.getVariableValue('menu_view') == true))
			)
			{
				newLogicStateBackgroundColor = 1;
			}
			else if (
				((me.elementMouseOver['view_button_desktop'] == true))
			)
			{
				newLogicStateBackgroundColor = 2;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._view_button_desktop.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._view_button_desktop.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._view_button_desktop.style.transition='background-color 0s, border-width 0s, color 0s';
				if (me._view_button_desktop.ggCurrentLogicStateBackgroundColor == 0) {
					me._view_button_desktop.style.backgroundColor="rgba(100,100,100,0.862745)";
				}
				else if (me._view_button_desktop.ggCurrentLogicStateBackgroundColor == 1) {
					me._view_button_desktop.style.backgroundColor="rgba(255,255,255,1)";
				}
				else if (me._view_button_desktop.ggCurrentLogicStateBackgroundColor == 2) {
					me._view_button_desktop.style.backgroundColor="rgba(200,200,200,0.784314)";
				}
				else {
					me._view_button_desktop.style.backgroundColor="rgba(150,150,150,0.705882)";
				}
			}
		}
		me._view_button_desktop.logicBlock_backgroundcolor();
		me._view_button_desktop.logicBlock_borderwidth = function() {
			var newLogicStateBorderWidth;
			if (
				((me.elementMouseDown['view_button_desktop'] == true))
			)
			{
				newLogicStateBorderWidth = 0;
			}
			else if (
				((me.elementMouseOver['view_button_desktop'] == true))
			)
			{
				newLogicStateBorderWidth = 1;
			}
			else {
				newLogicStateBorderWidth = -1;
			}
			if (me._view_button_desktop.ggCurrentLogicStateBorderWidth != newLogicStateBorderWidth) {
				me._view_button_desktop.ggCurrentLogicStateBorderWidth = newLogicStateBorderWidth;
				me._view_button_desktop.style.transition='background-color 0s, border-width 0s, color 0s';
				if (me._view_button_desktop.ggCurrentLogicStateBorderWidth == 0) {
					me._view_button_desktop.style.borderWidth="4px 1px 1px 4px";
				}
				else if (me._view_button_desktop.ggCurrentLogicStateBorderWidth == 1) {
					me._view_button_desktop.style.borderWidth="1px 4px 4px 1px";
				}
				else {
					me._view_button_desktop.style.borderWidth="2px 2px 2px 2px";
				}
			}
		}
		me._view_button_desktop.logicBlock_borderwidth();
		me._view_button_desktop.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseDown['view_button_desktop'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._view_button_desktop.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._view_button_desktop.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._view_button_desktop.style.transition='background-color 0s, border-width 0s, color 0s';
				if (me._view_button_desktop.ggCurrentLogicStateTextColor == 0) {
					me._view_button_desktop.style.color="rgba(255,255,255,1)";
				}
				else {
					me._view_button_desktop.style.color="rgba(0,0,0,1)";
				}
			}
		}
		me._view_button_desktop.logicBlock_textcolor();
		me._view_button_desktop.onclick=function (e) {
			player.setVariableValue('menu_room', false);
			player.setVariableValue('menu_dining', false);
			player.setVariableValue('menu_entertainment', false);
			if (
				(
					((player.getVariableValue('resp_phone_1') == false))
				)
			) {
				player.setVariableValue('menu_view', !player.getVariableValue('menu_view'));
			}
			if (
				(
					((player.getVariableValue('resp_phone_1') == true))
				)
			) {
				player.setVariableValue('vis_thumbnails_phone', true);
			}
			player.setVariableValue('menu_lobby', false);
		}
		me._view_button_desktop.onmouseenter=function (e) {
			me.elementMouseOver['view_button_desktop']=true;
			me._view_button_desktop.logicBlock_backgroundcolor();
			me._view_button_desktop.logicBlock_borderwidth();
		}
		me._view_button_desktop.onmousedown=function (e) {
			me.elementMouseDown['view_button_desktop']=true;
			me._view_button_desktop.logicBlock_backgroundcolor();
			me._view_button_desktop.logicBlock_borderwidth();
			me._view_button_desktop.logicBlock_textcolor();
		}
		me._view_button_desktop.onmouseup=function (e) {
			me.elementMouseDown['view_button_desktop']=false;
			me._view_button_desktop.logicBlock_backgroundcolor();
			me._view_button_desktop.logicBlock_borderwidth();
			me._view_button_desktop.logicBlock_textcolor();
		}
		me._view_button_desktop.onmouseleave=function (e) {
			me.elementMouseDown['view_button_desktop']=false;
			me.elementMouseOver['view_button_desktop']=false;
			me._view_button_desktop.logicBlock_backgroundcolor();
			me._view_button_desktop.logicBlock_backgroundcolor();
			me._view_button_desktop.logicBlock_borderwidth();
			me._view_button_desktop.logicBlock_borderwidth();
			me._view_button_desktop.logicBlock_textcolor();
		}
		me._view_button_desktop.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._view_button_desktop);
		el=me._entertainment_button_desktop=document.createElement('div');
		els=me._entertainment_button_desktop__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Entertainment Button desktop";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(150,150,150,0.705882);';
		hs+='border-color : rgba(33,33,33,0.784314);';
		hs+='border-radius : 10px;';
		hs+='border-style : solid;';
		hs+='border-width : 2px 2px 2px 2px;';
		hs+='bottom : 120px;';
		hs+='color : #000000;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 40px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._entertainment_button_desktop.ggUpdateText=function() {
			var params = [];
			var hs = player._("\u5a1b \u6a02", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._entertainment_button_desktop.ggUpdateText();
		el.appendChild(els);
		me._entertainment_button_desktop.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._entertainment_button_desktop.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._entertainment_button_desktop.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._entertainment_button_desktop.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._entertainment_button_desktop.style.transition='background-color 0s, border-width 0s, color 0s';
				if (me._entertainment_button_desktop.ggCurrentLogicStateVisible == 0) {
					me._entertainment_button_desktop.style.visibility="hidden";
					me._entertainment_button_desktop.ggVisible=false;
				}
				else {
					me._entertainment_button_desktop.style.visibility=(Number(me._entertainment_button_desktop.style.opacity)>0||!me._entertainment_button_desktop.style.opacity)?'inherit':'hidden';
					me._entertainment_button_desktop.ggVisible=true;
				}
			}
		}
		me._entertainment_button_desktop.logicBlock_visible();
		me._entertainment_button_desktop.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseDown['entertainment_button_desktop'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else if (
				((player.getVariableValue('menu_entertainment') == true))
			)
			{
				newLogicStateBackgroundColor = 1;
			}
			else if (
				((me.elementMouseOver['entertainment_button_desktop'] == true))
			)
			{
				newLogicStateBackgroundColor = 2;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._entertainment_button_desktop.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._entertainment_button_desktop.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._entertainment_button_desktop.style.transition='background-color 0s, border-width 0s, color 0s';
				if (me._entertainment_button_desktop.ggCurrentLogicStateBackgroundColor == 0) {
					me._entertainment_button_desktop.style.backgroundColor="rgba(100,100,100,0.862745)";
				}
				else if (me._entertainment_button_desktop.ggCurrentLogicStateBackgroundColor == 1) {
					me._entertainment_button_desktop.style.backgroundColor="rgba(255,255,255,1)";
				}
				else if (me._entertainment_button_desktop.ggCurrentLogicStateBackgroundColor == 2) {
					me._entertainment_button_desktop.style.backgroundColor="rgba(200,200,200,0.784314)";
				}
				else {
					me._entertainment_button_desktop.style.backgroundColor="rgba(150,150,150,0.705882)";
				}
			}
		}
		me._entertainment_button_desktop.logicBlock_backgroundcolor();
		me._entertainment_button_desktop.logicBlock_borderwidth = function() {
			var newLogicStateBorderWidth;
			if (
				((me.elementMouseDown['entertainment_button_desktop'] == true))
			)
			{
				newLogicStateBorderWidth = 0;
			}
			else if (
				((me.elementMouseOver['entertainment_button_desktop'] == true))
			)
			{
				newLogicStateBorderWidth = 1;
			}
			else {
				newLogicStateBorderWidth = -1;
			}
			if (me._entertainment_button_desktop.ggCurrentLogicStateBorderWidth != newLogicStateBorderWidth) {
				me._entertainment_button_desktop.ggCurrentLogicStateBorderWidth = newLogicStateBorderWidth;
				me._entertainment_button_desktop.style.transition='background-color 0s, border-width 0s, color 0s';
				if (me._entertainment_button_desktop.ggCurrentLogicStateBorderWidth == 0) {
					me._entertainment_button_desktop.style.borderWidth="4px 1px 1px 4px";
				}
				else if (me._entertainment_button_desktop.ggCurrentLogicStateBorderWidth == 1) {
					me._entertainment_button_desktop.style.borderWidth="1px 4px 4px 1px";
				}
				else {
					me._entertainment_button_desktop.style.borderWidth="2px 2px 2px 2px";
				}
			}
		}
		me._entertainment_button_desktop.logicBlock_borderwidth();
		me._entertainment_button_desktop.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseDown['entertainment_button_desktop'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._entertainment_button_desktop.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._entertainment_button_desktop.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._entertainment_button_desktop.style.transition='background-color 0s, border-width 0s, color 0s';
				if (me._entertainment_button_desktop.ggCurrentLogicStateTextColor == 0) {
					me._entertainment_button_desktop.style.color="rgba(255,255,255,1)";
				}
				else {
					me._entertainment_button_desktop.style.color="rgba(0,0,0,1)";
				}
			}
		}
		me._entertainment_button_desktop.logicBlock_textcolor();
		me._entertainment_button_desktop.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone_1') == false))
				)
			) {
				player.setVariableValue('menu_entertainment', !player.getVariableValue('menu_entertainment'));
			}
			player.setVariableValue('menu_room', false);
			player.setVariableValue('menu_view', false);
			player.setVariableValue('menu_dining', false);
			player.setVariableValue('menu_lobby', false);
			if (
				(
					((player.getVariableValue('resp_phone_1') == true))
				)
			) {
				player.setVariableValue('vis_thumbnails_phone', true);
			}
		}
		me._entertainment_button_desktop.onmouseenter=function (e) {
			me.elementMouseOver['entertainment_button_desktop']=true;
			me._entertainment_button_desktop.logicBlock_backgroundcolor();
			me._entertainment_button_desktop.logicBlock_borderwidth();
		}
		me._entertainment_button_desktop.onmousedown=function (e) {
			me.elementMouseDown['entertainment_button_desktop']=true;
			me._entertainment_button_desktop.logicBlock_backgroundcolor();
			me._entertainment_button_desktop.logicBlock_borderwidth();
			me._entertainment_button_desktop.logicBlock_textcolor();
		}
		me._entertainment_button_desktop.onmouseup=function (e) {
			me.elementMouseDown['entertainment_button_desktop']=false;
			me._entertainment_button_desktop.logicBlock_backgroundcolor();
			me._entertainment_button_desktop.logicBlock_borderwidth();
			me._entertainment_button_desktop.logicBlock_textcolor();
		}
		me._entertainment_button_desktop.onmouseleave=function (e) {
			me.elementMouseDown['entertainment_button_desktop']=false;
			me.elementMouseOver['entertainment_button_desktop']=false;
			me._entertainment_button_desktop.logicBlock_backgroundcolor();
			me._entertainment_button_desktop.logicBlock_backgroundcolor();
			me._entertainment_button_desktop.logicBlock_borderwidth();
			me._entertainment_button_desktop.logicBlock_borderwidth();
			me._entertainment_button_desktop.logicBlock_textcolor();
		}
		me._entertainment_button_desktop.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._entertainment_button_desktop);
		el=me._dining_button_desktop=document.createElement('div');
		els=me._dining_button_desktop__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Dining Button desktop";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(150,150,150,0.705882);';
		hs+='border-color : rgba(33,33,33,0.784314);';
		hs+='border-radius : 10px;';
		hs+='border-style : solid;';
		hs+='border-width : 2px 2px 2px 2px;';
		hs+='bottom : 170px;';
		hs+='color : #000000;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 40px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._dining_button_desktop.ggUpdateText=function() {
			var params = [];
			var hs = player._("\u98f2 \u98df", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._dining_button_desktop.ggUpdateText();
		el.appendChild(els);
		me._dining_button_desktop.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._dining_button_desktop.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._dining_button_desktop.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._dining_button_desktop.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._dining_button_desktop.style.transition='background-color 0s, border-width 0s, color 0s';
				if (me._dining_button_desktop.ggCurrentLogicStateVisible == 0) {
					me._dining_button_desktop.style.visibility="hidden";
					me._dining_button_desktop.ggVisible=false;
				}
				else {
					me._dining_button_desktop.style.visibility=(Number(me._dining_button_desktop.style.opacity)>0||!me._dining_button_desktop.style.opacity)?'inherit':'hidden';
					me._dining_button_desktop.ggVisible=true;
				}
			}
		}
		me._dining_button_desktop.logicBlock_visible();
		me._dining_button_desktop.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseDown['dining_button_desktop'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else if (
				((player.getVariableValue('menu_dining') == true))
			)
			{
				newLogicStateBackgroundColor = 1;
			}
			else if (
				((me.elementMouseOver['dining_button_desktop'] == true))
			)
			{
				newLogicStateBackgroundColor = 2;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._dining_button_desktop.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._dining_button_desktop.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._dining_button_desktop.style.transition='background-color 0s, border-width 0s, color 0s';
				if (me._dining_button_desktop.ggCurrentLogicStateBackgroundColor == 0) {
					me._dining_button_desktop.style.backgroundColor="rgba(100,100,100,0.862745)";
				}
				else if (me._dining_button_desktop.ggCurrentLogicStateBackgroundColor == 1) {
					me._dining_button_desktop.style.backgroundColor="rgba(255,255,255,1)";
				}
				else if (me._dining_button_desktop.ggCurrentLogicStateBackgroundColor == 2) {
					me._dining_button_desktop.style.backgroundColor="rgba(200,200,200,0.784314)";
				}
				else {
					me._dining_button_desktop.style.backgroundColor="rgba(150,150,150,0.705882)";
				}
			}
		}
		me._dining_button_desktop.logicBlock_backgroundcolor();
		me._dining_button_desktop.logicBlock_borderwidth = function() {
			var newLogicStateBorderWidth;
			if (
				((me.elementMouseDown['dining_button_desktop'] == true))
			)
			{
				newLogicStateBorderWidth = 0;
			}
			else if (
				((me.elementMouseOver['dining_button_desktop'] == true))
			)
			{
				newLogicStateBorderWidth = 1;
			}
			else {
				newLogicStateBorderWidth = -1;
			}
			if (me._dining_button_desktop.ggCurrentLogicStateBorderWidth != newLogicStateBorderWidth) {
				me._dining_button_desktop.ggCurrentLogicStateBorderWidth = newLogicStateBorderWidth;
				me._dining_button_desktop.style.transition='background-color 0s, border-width 0s, color 0s';
				if (me._dining_button_desktop.ggCurrentLogicStateBorderWidth == 0) {
					me._dining_button_desktop.style.borderWidth="4px 1px 1px 4px";
				}
				else if (me._dining_button_desktop.ggCurrentLogicStateBorderWidth == 1) {
					me._dining_button_desktop.style.borderWidth="1px 4px 4px 1px";
				}
				else {
					me._dining_button_desktop.style.borderWidth="2px 2px 2px 2px";
				}
			}
		}
		me._dining_button_desktop.logicBlock_borderwidth();
		me._dining_button_desktop.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseDown['dining_button_desktop'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._dining_button_desktop.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._dining_button_desktop.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._dining_button_desktop.style.transition='background-color 0s, border-width 0s, color 0s';
				if (me._dining_button_desktop.ggCurrentLogicStateTextColor == 0) {
					me._dining_button_desktop.style.color="rgba(255,255,255,1)";
				}
				else {
					me._dining_button_desktop.style.color="rgba(0,0,0,1)";
				}
			}
		}
		me._dining_button_desktop.logicBlock_textcolor();
		me._dining_button_desktop.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone_1') == false))
				)
			) {
				player.setVariableValue('menu_dining', !player.getVariableValue('menu_dining'));
			}
			player.setVariableValue('menu_room', false);
			player.setVariableValue('menu_view', false);
			player.setVariableValue('menu_entertainment', false);
			player.setVariableValue('menu_lobby', false);
			if (
				(
					((player.getVariableValue('resp_phone_1') == true))
				)
			) {
				player.setVariableValue('vis_thumbnails_phone', true);
			}
		}
		me._dining_button_desktop.onmouseenter=function (e) {
			me.elementMouseOver['dining_button_desktop']=true;
			me._dining_button_desktop.logicBlock_backgroundcolor();
			me._dining_button_desktop.logicBlock_borderwidth();
		}
		me._dining_button_desktop.onmousedown=function (e) {
			me.elementMouseDown['dining_button_desktop']=true;
			me._dining_button_desktop.logicBlock_backgroundcolor();
			me._dining_button_desktop.logicBlock_borderwidth();
			me._dining_button_desktop.logicBlock_textcolor();
		}
		me._dining_button_desktop.onmouseup=function (e) {
			me.elementMouseDown['dining_button_desktop']=false;
			me._dining_button_desktop.logicBlock_backgroundcolor();
			me._dining_button_desktop.logicBlock_borderwidth();
			me._dining_button_desktop.logicBlock_textcolor();
		}
		me._dining_button_desktop.onmouseleave=function (e) {
			me.elementMouseDown['dining_button_desktop']=false;
			me.elementMouseOver['dining_button_desktop']=false;
			me._dining_button_desktop.logicBlock_backgroundcolor();
			me._dining_button_desktop.logicBlock_backgroundcolor();
			me._dining_button_desktop.logicBlock_borderwidth();
			me._dining_button_desktop.logicBlock_borderwidth();
			me._dining_button_desktop.logicBlock_textcolor();
		}
		me._dining_button_desktop.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._dining_button_desktop);
		el=me._lobby_button_desktop=document.createElement('div');
		els=me._lobby_button_desktop__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Lobby Button desktop";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(150,150,150,0.705882);';
		hs+='border-color : rgba(33,33,33,0.784314);';
		hs+='border-radius : 10px;';
		hs+='border-style : solid;';
		hs+='border-width : 2px 2px 2px 2px;';
		hs+='bottom : 220px;';
		hs+='color : #000000;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 40px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._lobby_button_desktop.ggUpdateText=function() {
			var params = [];
			var hs = player._("\u5927 \u5ef3", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._lobby_button_desktop.ggUpdateText();
		el.appendChild(els);
		me._lobby_button_desktop.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._lobby_button_desktop.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._lobby_button_desktop.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._lobby_button_desktop.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._lobby_button_desktop.style.transition='background-color 0s, border-width 0s, color 0s';
				if (me._lobby_button_desktop.ggCurrentLogicStateVisible == 0) {
					me._lobby_button_desktop.style.visibility="hidden";
					me._lobby_button_desktop.ggVisible=false;
				}
				else {
					me._lobby_button_desktop.style.visibility=(Number(me._lobby_button_desktop.style.opacity)>0||!me._lobby_button_desktop.style.opacity)?'inherit':'hidden';
					me._lobby_button_desktop.ggVisible=true;
				}
			}
		}
		me._lobby_button_desktop.logicBlock_visible();
		me._lobby_button_desktop.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseDown['lobby_button_desktop'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else if (
				((player.getVariableValue('menu_lobby') == true))
			)
			{
				newLogicStateBackgroundColor = 1;
			}
			else if (
				((me.elementMouseOver['lobby_button_desktop'] == true))
			)
			{
				newLogicStateBackgroundColor = 2;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._lobby_button_desktop.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._lobby_button_desktop.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._lobby_button_desktop.style.transition='background-color 0s, border-width 0s, color 0s';
				if (me._lobby_button_desktop.ggCurrentLogicStateBackgroundColor == 0) {
					me._lobby_button_desktop.style.backgroundColor="rgba(100,100,100,0.862745)";
				}
				else if (me._lobby_button_desktop.ggCurrentLogicStateBackgroundColor == 1) {
					me._lobby_button_desktop.style.backgroundColor="rgba(255,255,255,1)";
				}
				else if (me._lobby_button_desktop.ggCurrentLogicStateBackgroundColor == 2) {
					me._lobby_button_desktop.style.backgroundColor="rgba(200,200,200,0.784314)";
				}
				else {
					me._lobby_button_desktop.style.backgroundColor="rgba(150,150,150,0.705882)";
				}
			}
		}
		me._lobby_button_desktop.logicBlock_backgroundcolor();
		me._lobby_button_desktop.logicBlock_borderwidth = function() {
			var newLogicStateBorderWidth;
			if (
				((me.elementMouseDown['lobby_button_desktop'] == true))
			)
			{
				newLogicStateBorderWidth = 0;
			}
			else if (
				((me.elementMouseOver['lobby_button_desktop'] == true))
			)
			{
				newLogicStateBorderWidth = 1;
			}
			else {
				newLogicStateBorderWidth = -1;
			}
			if (me._lobby_button_desktop.ggCurrentLogicStateBorderWidth != newLogicStateBorderWidth) {
				me._lobby_button_desktop.ggCurrentLogicStateBorderWidth = newLogicStateBorderWidth;
				me._lobby_button_desktop.style.transition='background-color 0s, border-width 0s, color 0s';
				if (me._lobby_button_desktop.ggCurrentLogicStateBorderWidth == 0) {
					me._lobby_button_desktop.style.borderWidth="4px 1px 1px 4px";
				}
				else if (me._lobby_button_desktop.ggCurrentLogicStateBorderWidth == 1) {
					me._lobby_button_desktop.style.borderWidth="1px 4px 4px 1px";
				}
				else {
					me._lobby_button_desktop.style.borderWidth="2px 2px 2px 2px";
				}
			}
		}
		me._lobby_button_desktop.logicBlock_borderwidth();
		me._lobby_button_desktop.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseDown['lobby_button_desktop'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._lobby_button_desktop.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._lobby_button_desktop.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._lobby_button_desktop.style.transition='background-color 0s, border-width 0s, color 0s';
				if (me._lobby_button_desktop.ggCurrentLogicStateTextColor == 0) {
					me._lobby_button_desktop.style.color="rgba(255,255,255,1)";
				}
				else {
					me._lobby_button_desktop.style.color="rgba(0,0,0,1)";
				}
			}
		}
		me._lobby_button_desktop.logicBlock_textcolor();
		me._lobby_button_desktop.onclick=function (e) {
			player.setVariableValue('menu_room', false);
			player.setVariableValue('menu_view', false);
			player.setVariableValue('menu_entertainment', false);
			player.setVariableValue('menu_dining', false);
			if (
				(
					((player.getVariableValue('resp_phone_1') == false))
				)
			) {
				player.setVariableValue('menu_lobby', !player.getVariableValue('menu_lobby'));
			}
			if (
				(
					((player.getVariableValue('resp_phone_1') == true))
				)
			) {
				player.setVariableValue('vis_thumbnails_phone', true);
			}
		}
		me._lobby_button_desktop.onmouseenter=function (e) {
			me.elementMouseOver['lobby_button_desktop']=true;
			me._lobby_button_desktop.logicBlock_backgroundcolor();
			me._lobby_button_desktop.logicBlock_borderwidth();
		}
		me._lobby_button_desktop.onmousedown=function (e) {
			me.elementMouseDown['lobby_button_desktop']=true;
			me._lobby_button_desktop.logicBlock_backgroundcolor();
			me._lobby_button_desktop.logicBlock_borderwidth();
			me._lobby_button_desktop.logicBlock_textcolor();
		}
		me._lobby_button_desktop.onmouseup=function (e) {
			me.elementMouseDown['lobby_button_desktop']=false;
			me._lobby_button_desktop.logicBlock_backgroundcolor();
			me._lobby_button_desktop.logicBlock_borderwidth();
			me._lobby_button_desktop.logicBlock_textcolor();
		}
		me._lobby_button_desktop.onmouseleave=function (e) {
			me.elementMouseDown['lobby_button_desktop']=false;
			me.elementMouseOver['lobby_button_desktop']=false;
			me._lobby_button_desktop.logicBlock_backgroundcolor();
			me._lobby_button_desktop.logicBlock_backgroundcolor();
			me._lobby_button_desktop.logicBlock_borderwidth();
			me._lobby_button_desktop.logicBlock_borderwidth();
			me._lobby_button_desktop.logicBlock_textcolor();
		}
		me._lobby_button_desktop.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._lobby_button_desktop);
		el=me._hotspot_info_button=document.createElement('div');
		el.ggId="hotspot_info button";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 40px;';
		hs+='top : 60px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspot_info_button.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._hotspot_info_button.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hotspot_info_button.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hotspot_info_button.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hotspot_info_button.style.transition='';
				if (me._hotspot_info_button.ggCurrentLogicStateVisible == 0) {
					me._hotspot_info_button.style.visibility="hidden";
					me._hotspot_info_button.ggVisible=false;
				}
				else {
					me._hotspot_info_button.style.visibility=(Number(me._hotspot_info_button.style.opacity)>0||!me._hotspot_info_button.style.opacity)?'inherit':'hidden';
					me._hotspot_info_button.ggVisible=true;
				}
			}
		}
		me._hotspot_info_button.logicBlock_visible();
		me._hotspot_info_button.ggUpdatePosition=function (useTransition) {
		}
		el=me._info_button=document.createElement('div');
		el.ggId="info_button";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(150,150,150,0.705882);';
		hs+='border-color : rgba(33,33,33,0.784314);';
		hs+='border-radius : 10px;';
		hs+='border-style : solid;';
		hs+='border-width : 2px 2px 2px 2px;';
		hs+='cursor : pointer;';
		hs+='height : 36px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((36px + 4px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info_button.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_button.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseDown['info_button'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else if (
				((player.getVariableValue('button_info') == true))
			)
			{
				newLogicStateBackgroundColor = 1;
			}
			else if (
				((me.elementMouseOver['info_button'] == true))
			)
			{
				newLogicStateBackgroundColor = 2;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._info_button.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._info_button.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._info_button.style.transition='background-color 0s, border-width 0s';
				if (me._info_button.ggCurrentLogicStateBackgroundColor == 0) {
					me._info_button.style.backgroundColor="rgba(100,100,100,0.862745)";
				}
				else if (me._info_button.ggCurrentLogicStateBackgroundColor == 1) {
					me._info_button.style.backgroundColor="rgba(255,255,255,1)";
				}
				else if (me._info_button.ggCurrentLogicStateBackgroundColor == 2) {
					me._info_button.style.backgroundColor="rgba(200,200,200,0.784314)";
				}
				else {
					me._info_button.style.backgroundColor="rgba(150,150,150,0.705882)";
				}
			}
		}
		me._info_button.logicBlock_backgroundcolor();
		me._info_button.logicBlock_borderwidth = function() {
			var newLogicStateBorderWidth;
			if (
				((me.elementMouseDown['info_button'] == true))
			)
			{
				newLogicStateBorderWidth = 0;
			}
			else if (
				((me.elementMouseOver['info_button'] == true))
			)
			{
				newLogicStateBorderWidth = 1;
			}
			else {
				newLogicStateBorderWidth = -1;
			}
			if (me._info_button.ggCurrentLogicStateBorderWidth != newLogicStateBorderWidth) {
				me._info_button.ggCurrentLogicStateBorderWidth = newLogicStateBorderWidth;
				me._info_button.style.transition='background-color 0s, border-width 0s';
				if (me._info_button.ggCurrentLogicStateBorderWidth == 0) {
					me._info_button.style.borderWidth="4px 1px 1px 4px";
					me._info_button.style.top = 'calc(50% - (100px / 2) - (5px / 2))';
				}
				else if (me._info_button.ggCurrentLogicStateBorderWidth == 1) {
					me._info_button.style.borderWidth="1px 4px 4px 1px";
					me._info_button.style.top = 'calc(50% - (100px / 2) - (5px / 2))';
				}
				else {
					me._info_button.style.borderWidth="2px 2px 2px 2px";
					me._info_button.style.top = 'calc(50% - (100px / 2) - (4px / 2))';
				}
			}
		}
		me._info_button.logicBlock_borderwidth();
		me._info_button.onclick=function (e) {
			player.setVariableValue('vis_info_popup', !player.getVariableValue('vis_info_popup'));
			player.setVariableValue('button_info', !player.getVariableValue('button_info'));
			player.setVariableValue('vis_info_show', !player.getVariableValue('vis_info_show'));
		}
		me._info_button.onmouseenter=function (e) {
			me.elementMouseOver['info_button']=true;
			me._info_button.logicBlock_backgroundcolor();
			me._info_button.logicBlock_borderwidth();
		}
		me._info_button.onmousedown=function (e) {
			me.elementMouseDown['info_button']=true;
			me._info_button.logicBlock_backgroundcolor();
			me._info_button.logicBlock_borderwidth();
		}
		me._info_button.onmouseup=function (e) {
			me.elementMouseDown['info_button']=false;
			me._info_button.logicBlock_backgroundcolor();
			me._info_button.logicBlock_borderwidth();
		}
		me._info_button.onmouseleave=function (e) {
			me.elementMouseDown['info_button']=false;
			me.elementMouseOver['info_button']=false;
			me._info_button.logicBlock_backgroundcolor();
			me._info_button.logicBlock_backgroundcolor();
			me._info_button.logicBlock_borderwidth();
			me._info_button.logicBlock_borderwidth();
		}
		me._info_button.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_1=document.createElement('div');
		els=me._text_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border-color : #000000;';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 0px 0px;';
		hs+='color : rgba(0,0,0,1);';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: right;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("\u5834\u666f\u4ecb\u7d39", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_1.ggUpdateText();
		el.appendChild(els);
		me._text_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_1.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseDown['text_1'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._text_1.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._text_1.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._text_1.style.transition='color 0s';
				if (me._text_1.ggCurrentLogicStateTextColor == 0) {
					me._text_1.style.color="rgba(255,255,255,1)";
				}
				else {
					me._text_1.style.color="rgba(0,0,0,1)";
				}
			}
		}
		me._text_1.logicBlock_textcolor();
		me._text_1.onmousedown=function (e) {
			me.elementMouseDown['text_1']=true;
			me._text_1.logicBlock_textcolor();
		}
		me._text_1.onmouseup=function (e) {
			me.elementMouseDown['text_1']=false;
			me._text_1.logicBlock_textcolor();
		}
		me._text_1.onmouseleave=function (e) {
			me.elementMouseDown['text_1']=false;
			me._text_1.logicBlock_textcolor();
		}
		me._text_1.ggUpdatePosition=function (useTransition) {
		}
		me._info_button.appendChild(me._text_1);
		el=me._svg_2=document.createElement('div');
		els=me._svg_2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgR2VuZXJhdG9yOiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjgwMHB4IiBoZWlnaHQ9IjgwMHB4Ij4KIDxwYXRoIGQ9Ik0xMi41IDcuNWExIDEgMCAxIDEgMS0xIDEuMDAyIDEuMDAyIDAgMCAxLTEgMXpNMTMgMThWOWgtMnYxaDF2OGgtMXYxaDN2LTF6bTkuOC01LjVBMTAuMyAxMC4zIDAgMSAxIDEyLjUgMi4yYTEwLjI5NyAxMC'+
			'4yOTcgMCAwIDEgMTAuMyAxMC4zem0tMSAwYTkuMyA5LjMgMCAxIDAtOS4zIDkuMyA5LjMxIDkuMzEgMCAwIDAgOS4zLTkuM3oiLz4KIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KPC9zdmc+Cg==';
		me._svg_2__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		ela=me._svg_2__imga=document.createElement('img');
		ela.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE0LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgNDMzNjMpICAtLT4KPHN2ZyBiYXNlUHJvZmlsZT0iYmFzaWMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeD0iMHB4Ii'+
			'B4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDMyIDMyIiB3aWR0aD0iMzJweCIgeT0iMHB4IiBoZWlnaHQ9IjMycHgiPgogPGcgb3BhY2l0eT0iMC40Ij4KICA8Zz4KICAgPHBhdGggc3Ryb2tlPSIjM0MzQzNDIiBkPSJNMjYuNjA0LDE0LjEwM2gtMS45ODljLTAuNzM0LTMuMzUtMy4zNjgtNS45ODEtNi43MTYtNi43MTdWNS4zOTggICAgYzAtMS4wNDgtMC44NDktMS44OTktMS44OTctMS44OTljLTEuMDQ5LDAtMS44OTcsMC44NTEtMS44OTcsMS44OTl2MS45ODZjLTMuMzUyLDAuNzM1LTUuOTgz'+
			'LDMuMzY5LTYuNzIsNi43MTdINS4zOTggICAgQzQuMzQ4LDE0LjEwMSwzLjUsMTQuOTUxLDMuNSwxNnMwLjg1MSwxLjg5NiwxLjg5OSwxLjg5NmgxLjk4NWMwLjczNSwzLjM1LDMuMzY4LDUuOTg0LDYuNzIsNi43MTl2MS45ODkgICAgYzAsMS4wNDYsMC44NDgsMS44OTYsMS44OTcsMS44OTZjMS4wNDgsMCwxLjg5Ni0wLjg1MSwxLjg5Ni0xLjg5NnYtMS45ODljMy4zNTEtMC43MzYsNS45ODQtMy4zNjksNi43MTktNi43MTloMS45ODYgICAgYzEuMDQ5LDAsMS44OTctMC44NDgsMS44OTctMS44OTZDMjguNTAxLDE0Ljk1MSwyNy42NTIsMTQuMTAzLDI2LjYwNCwxNC4xMDN6IE0xNiwyMS4wMjljLT'+
			'IuNzc3LTAuMDA1LTUuMDIzLTIuMjUxLTUuMDMtNS4wMjYgICAgdi0wLjAwMWMwLTAuMDAxLDAtMC4wMDEsMC0wLjAwM2MwLjAwNi0yLjc3NywyLjI1My01LjAyMiw1LjAzLTUuMDI1YzIuNzc3LDAuMDA1LDUuMDI1LDIuMjUxLDUuMDI2LDUuMDI4aDAuMDAyICAgIEMyMS4wMjUsMTguNzc4LDE4Ljc3NywyMS4wMjQsMTYsMjEuMDI5eiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICA8L2c+CiAgPGNpcmNsZSBjeD0iMTYuMDAyIiBjeT0iMTYiIGZpbGw9IiNGRkZGRkYiIHI9IjIuMTA5Ii8+CiA8L2c+CiA8Zz4KICA8Zz4KICAgPHBhdGggc3Ryb2tlPSIjMDAwMDAwIiBkPSJNMjYuNjA0LDE0LjEwM2gt'+
			'MS45ODljLTAuNzM0LTMuMzUtMy4zNjgtNS45ODEtNi43MTYtNi43MTdWNS4zOTggICAgYzAtMS4wNDgtMC44NDktMS44OTktMS44OTctMS44OTljLTEuMDQ5LDAtMS44OTcsMC44NTEtMS44OTcsMS44OTl2MS45ODZjLTMuMzUyLDAuNzM1LTUuOTgzLDMuMzY5LTYuNzIsNi43MTdINS4zOTggICAgQzQuMzQ4LDE0LjEwMSwzLjUsMTQuOTUxLDMuNSwxNnMwLjg1MSwxLjg5NiwxLjg5OSwxLjg5NmgxLjk4NWMwLjczNSwzLjM1LDMuMzY4LDUuOTg0LDYuNzIsNi43MTl2MS45ODkgICAgYzAsMS4wNDYsMC44NDgsMS44OTYsMS44OTcsMS44OTZjMS4wNDgsMCwxLjg5Ni0wLjg1MSwxLjg5Ni0xLjg5Nn'+
			'YtMS45ODljMy4zNTEtMC43MzYsNS45ODQtMy4zNjksNi43MTktNi43MTloMS45ODYgICAgYzEuMDQ5LDAsMS44OTctMC44NDgsMS44OTctMS44OTZDMjguNTAxLDE0Ljk1MSwyNy42NTIsMTQuMTAzLDI2LjYwNCwxNC4xMDN6IE0xNiwyMS4wMjljLTIuNzc3LTAuMDA1LTUuMDIzLTIuMjUxLTUuMDMtNS4wMjYgICAgdi0wLjAwMWMwLTAuMDAxLDAtMC4wMDEsMC0wLjAwM2MwLjAwNi0yLjc3NywyLjI1My01LjAyMiw1LjAzLTUuMDI1YzIuNzc3LDAuMDA1LDUuMDI1LDIuMjUxLDUuMDI2LDUuMDI4aDAuMDAyICAgIEMyMS4wMjUsMTguNzc4LDE4Ljc3NywyMS4wMjQsMTYsMjEuMDI5eiIgZmlsbD0i'+
			'I0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIwLjIiLz4KICA8L2c+CiAgPGNpcmNsZSBjeD0iMTYuMDAyIiBjeT0iMTYiIGZpbGw9IiNGRkZGRkYiIHI9IjIuMTA5Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._svg_2__imga.setAttribute('src',hs);
		ela.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		ela['ondragstart']=function() { return false; };
		el.appendChild(ela);
		el.ggSubElementActive = ela;
		el.ggId="Svg 2";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 24px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_2.onmousedown=function (e) {
			me._svg_2__imga.style.visibility='inherit';
		}
		me._svg_2.onmouseup=function (e) {
			me._svg_2__imga.style.visibility='hidden';
		}
		me._svg_2.onmouseleave=function (e) {
			me._svg_2__imga.style.visibility='hidden';
		}
		me._svg_2.ggUpdatePosition=function (useTransition) {
		}
		me._info_button.appendChild(me._svg_2);
		me._hotspot_info_button.appendChild(me._info_button);
		me.divSkin.appendChild(me._hotspot_info_button);
		el=me._node_info=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="node info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : calc(25% - 40px);';
		hs+='position : absolute;';
		hs+='right : 40px;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : calc(25% - 40px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._node_info.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._node_info.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('var_map') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._node_info.ggCurrentLogicStateSize != newLogicStateSize) {
				me._node_info.ggCurrentLogicStateSize = newLogicStateSize;
				me._node_info.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms';
				if (me._node_info.ggCurrentLogicStateSize == 0) {
					me._node_info.style.width='0';
					me._node_info.style.height='0';
					setTimeout(function() {skin.updateSize(me._node_info);}, 1050);
				}
				else {
					me._node_info.style.width='calc(25% - 40px)';
					me._node_info.style.height='calc(25% - 40px)';
					setTimeout(function() {skin.updateSize(me._node_info);}, 1050);
				}
			}
		}
		me._node_info.logicBlock_size();
		me._node_info.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_info_popup') == true)) && 
				((player._(me.ggUserdata.description) != ""))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node_info.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node_info.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._node_info.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms';
				if (me._node_info.ggCurrentLogicStateVisible == 0) {
					me._node_info.style.visibility="hidden";
					me._node_info.ggVisible=false;
				}
				else if (me._node_info.ggCurrentLogicStateVisible == 1) {
					me._node_info.style.visibility=(Number(me._node_info.style.opacity)>0||!me._node_info.style.opacity)?'inherit':'hidden';
					me._node_info.ggVisible=true;
				}
				else {
					me._node_info.style.visibility="hidden";
					me._node_info.ggVisible=false;
				}
			}
		}
		me._node_info.logicBlock_visible();
		me._node_info.ggUpdatePosition=function (useTransition) {
		}
		el=me._info_bg=document.createElement('div');
		el.ggId="info_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(80,80,80,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_bg.ggUpdatePosition=function (useTransition) {
		}
		me._node_info.appendChild(me._info_bg);
		el=me._node_description=document.createElement('div');
		els=me._node_description__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node_description";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat_regular";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 90%;';
		hs+='left : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		hs+="line-height: 1.5;";
		els.setAttribute('style',hs);
		me._node_description.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.description)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._node_description.ggUpdateText();
		player.addListener('changenode', function() {
			me._node_description.ggUpdateText();
		});
		el.appendChild(els);
		me._node_description.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_description.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_desc_in_maps') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node_description.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node_description.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._node_description.style.transition='';
				if (me._node_description.ggCurrentLogicStateVisible == 0) {
					me._node_description.style.visibility="hidden";
					me._node_description.ggVisible=false;
				}
				else {
					me._node_description.style.visibility=(Number(me._node_description.style.opacity)>0||!me._node_description.style.opacity)?'inherit':'hidden';
					me._node_description.ggVisible=true;
				}
			}
		}
		me._node_description.logicBlock_visible();
		me._node_description.ggUpdatePosition=function (useTransition) {
		}
		me._node_info.appendChild(me._node_description);
		me.divSkin.appendChild(me._node_info);
		el=me._info_status=document.createElement('div');
		els=me._info_status__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_status";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 71px;';
		hs+='position : absolute;';
		hs+='top : 211px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._info_status.ggUpdateText=function() {
			var params = [];
			var hs = player._("text", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_status.ggUpdateText();
		el.appendChild(els);
		me._info_status.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._info_status.onclick=function (e) {
			player.setVariableValue('button_info', false);
			player.setVariableValue('vis_info_popup', false);
		}
		me._info_status.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._info_status);
		el=me._map=document.createElement('div');
		el.ggId="map";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : calc(100% - 220px);';
		hs+='left : calc(50% - ((calc(100% - 500px) + 0px) / 2) + 0%);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 8%;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 500px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._map.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_floorplan') == true)) || 
				((player.getVariableValue('vis_map') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map.style.transition='opacity 500ms ease 0ms';
				if (me._map.ggCurrentLogicStateAlpha == 0) {
					me._map.style.visibility=me._map.ggVisible?'inherit':'hidden';
					me._map.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._map.style.opacity == 0.0) { me._map.style.visibility="hidden"; } }, 505);
					me._map.style.opacity=0;
				}
			}
		}
		me._map.logicBlock_alpha();
		me._map.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_bg=document.createElement('div');
		el.ggId="map_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_bg.ggUpdatePosition=function (useTransition) {
		}
		me._map.appendChild(me._map_bg);
		el=me._map_el=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapLayers = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = '_none';
		el.ggId="map_el";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 100px);';
		hs+='left : calc(30% + 50px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 73px;';
		hs+='visibility : hidden;';
		hs+='width : calc(70% - 80px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_el.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_el.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('opt_desc_in_maps') == false))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._map_el.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._map_el.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._map_el.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._map_el.ggCurrentLogicStatePosition == 0) {
					me._map_el.style.left='30px';
					me._map_el.style.top='70px';
				}
				else {
					me._map_el.style.left='calc(30% + 50px)';
					me._map_el.style.top='73px';
				}
			}
		}
		me._map_el.logicBlock_position();
		me._map_el.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('opt_desc_in_maps') == false))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._map_el.ggCurrentLogicStateSize != newLogicStateSize) {
				me._map_el.ggCurrentLogicStateSize = newLogicStateSize;
				me._map_el.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._map_el.ggCurrentLogicStateSize == 0) {
					me._map_el.style.width='calc(100% - 60px)';
					me._map_el.style.height='calc(100% - 100px)';
					skin.updateSize(me._map_el);
				}
				else {
					me._map_el.style.width='calc(70% - 80px)';
					me._map_el.style.height='calc(100% - 100px)';
					skin.updateSize(me._map_el);
				}
			}
		}
		me._map_el.logicBlock_size();
		me._map_el.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_map') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_el.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_el.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_el.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._map_el.ggCurrentLogicStateVisible == 0) {
					me._map_el.style.visibility=(Number(me._map_el.style.opacity)>0||!me._map_el.style.opacity)?'inherit':'hidden';
					if (me._map_el.ggMapNotLoaded && me._map_el.ggInitMap) {
						me._map_el.ggInitMap(false);
						me._map_el.ggInitMapMarkers(true);
					}
					me._map_el.ggVisible=true;
				}
				else {
					me._map_el.style.visibility="hidden";
					if (me._map_el.ggClearMap) me._map_el.ggClearMap();
					me._map_el.ggVisible=false;
				}
			}
		}
		me._map_el.logicBlock_visible();
		me._map_el.ggUpdatePosition=function (useTransition) {
		}
		me._map.appendChild(me._map_el);
		el=me._floorplan_el=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapLayers = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan01';
		el.ggId="floorplan_el";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 100px);';
		hs+='left : calc(30% + 50px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 70px;';
		hs+='visibility : hidden;';
		hs+='width : calc(70% - 80px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._floorplan_el.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floorplan_el.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('opt_desc_in_maps') == false))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._floorplan_el.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._floorplan_el.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._floorplan_el.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._floorplan_el.ggCurrentLogicStatePosition == 0) {
					me._floorplan_el.style.left='30px';
					me._floorplan_el.style.top='70px';
				}
				else {
					me._floorplan_el.style.left='calc(30% + 50px)';
					me._floorplan_el.style.top='70px';
				}
			}
		}
		me._floorplan_el.logicBlock_position();
		me._floorplan_el.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('opt_desc_in_maps') == false))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._floorplan_el.ggCurrentLogicStateSize != newLogicStateSize) {
				me._floorplan_el.ggCurrentLogicStateSize = newLogicStateSize;
				me._floorplan_el.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._floorplan_el.ggCurrentLogicStateSize == 0) {
					me._floorplan_el.style.width='calc(100% - 60px)';
					me._floorplan_el.style.height='calc(100% - 100px)';
					skin.updateSize(me._floorplan_el);
				}
				else {
					me._floorplan_el.style.width='calc(70% - 80px)';
					me._floorplan_el.style.height='calc(100% - 100px)';
					skin.updateSize(me._floorplan_el);
				}
			}
		}
		me._floorplan_el.logicBlock_size();
		me._floorplan_el.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getMapsContainingNode(player.getCurrentNode()).length > 0 == true)) && 
				((player.getVariableValue('vis_floorplan') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._floorplan_el.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._floorplan_el.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._floorplan_el.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._floorplan_el.ggCurrentLogicStateVisible == 0) {
					me._floorplan_el.style.visibility=(Number(me._floorplan_el.style.opacity)>0||!me._floorplan_el.style.opacity)?'inherit':'hidden';
					if (me._floorplan_el.ggMapNotLoaded && me._floorplan_el.ggInitMap) {
						me._floorplan_el.ggInitMap(false);
						me._floorplan_el.ggInitMapMarkers(true);
					}
					me._floorplan_el.ggVisible=true;
				}
				else {
					me._floorplan_el.style.visibility="hidden";
					if (me._floorplan_el.ggClearMap) me._floorplan_el.ggClearMap();
					me._floorplan_el.ggVisible=false;
				}
			}
		}
		me._floorplan_el.logicBlock_visible();
		me._floorplan_el.ggCurrentLogicStatePosition = -1;
		me._floorplan_el.ggCurrentLogicStateSize = -1;
		me._floorplan_el.ggCurrentLogicStateVisible = -1;
		me._floorplan_el.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._floorplan_el.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._floorplan_el.ggCalculateFloorplanSize(mapDetails);
				me._floorplan_el.ggShowSimpleFloorplan(mapDetails);
				me._floorplan_el.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._floorplan_el.ggRadar) me._floorplan_el.ggRadar.update();
		}
		me._floorplan_el.ggUpdatePosition=function (useTransition) {
			me._floorplan_el.ggUpdateConditionResize();
		}
		me._map.appendChild(me._floorplan_el);
		el=me._map_node_description=document.createElement('div');
		els=me._map_node_description__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="map_node_description";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat_regular";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : calc(100% - 90px);';
		hs+='left : calc(5% + 5px);';
		hs+='position : absolute;';
		hs+='top : 100px;';
		hs+='visibility : inherit;';
		hs+='width : calc(30% - 25px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		hs+="line-height: 1.5;";
		els.setAttribute('style',hs);
		me._map_node_description.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.description)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._map_node_description.ggUpdateText();
		player.addListener('changenode', function() {
			me._map_node_description.ggUpdateText();
		});
		el.appendChild(els);
		me._map_node_description.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_node_description.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_desc_in_maps') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_node_description.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_node_description.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_node_description.style.transition='';
				if (me._map_node_description.ggCurrentLogicStateVisible == 0) {
					me._map_node_description.style.visibility="hidden";
					me._map_node_description.ggVisible=false;
				}
				else {
					me._map_node_description.style.visibility=(Number(me._map_node_description.style.opacity)>0||!me._map_node_description.style.opacity)?'inherit':'hidden';
					me._map_node_description.ggVisible=true;
				}
			}
		}
		me._map_node_description.logicBlock_visible();
		me._map_node_description.ggUpdatePosition=function (useTransition) {
		}
		me._map.appendChild(me._map_node_description);
		el=me._map_node_title=document.createElement('div');
		els=me._map_node_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="map_node_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat_regular";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : calc(5% + 5px);';
		hs+='position : absolute;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 70px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 22px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._map_node_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._map_node_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._map_node_title.ggUpdateText();
		});
		el.appendChild(els);
		me._map_node_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_node_title.ggUpdatePosition=function (useTransition) {
		}
		me._map.appendChild(me._map_node_title);
		el=me._map_top=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="map_top";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_top.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_top.onclick=function (e) {
			player.setVariableValue('vis_floorplan', false);
			player.setVariableValue('vis_map', false);
			if (
				(
					((player.getVariableValue('vis_info_show') == true))
				)
			) {
				player.setVariableValue('button_info', !player.getVariableValue('button_info'));
			}
			if (
				(
					((player.getVariableValue('vis_info_show') == true))
				)
			) {
				player.setVariableValue('vis_info_popup', !player.getVariableValue('vis_info_popup'));
			}
		}
		me._map_top.onmouseenter=function (e) {
			me.elementMouseOver['map_top']=true;
			me._map_close_btn.logicBlock_visible();
			me._map_close_btn_active.logicBlock_visible();
		}
		me._map_top.onmouseleave=function (e) {
			me.elementMouseOver['map_top']=false;
			me._map_close_btn.logicBlock_visible();
			me._map_close_btn_active.logicBlock_visible();
		}
		me._map_top.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_close_btn=document.createElement('div');
		els=me._map_close_btn__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzIgMzI7IiB2aWV3Qm94PSIwIDAgMzIgMzIiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzRGQjVDMjtzdHJva2Utd2lkdGg6MS4zMzMzO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo1LjMzMzM7fSYjeGQ7Cjwvc3R5bGU+CiA8bGluZSB5Mj0iMjQiIGNsYXNzPSJzdDAiIHgyPSI4IiB4MT0iMjQiIHkxPSI4Ii8+CiA8bGluZSB5Mj0iMjQiIGNsYXNzPSJzdDAiIHgyPSIyNCIgeDE9IjgiIHkxPSI4Ii8+Cjwvc3ZnPgo=';
		me._map_close_btn__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_close_btn";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_close_btn.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_close_btn.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['map_top'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_close_btn.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_close_btn.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_close_btn.style.transition='';
				if (me._map_close_btn.ggCurrentLogicStateVisible == 0) {
					me._map_close_btn.style.visibility="hidden";
					me._map_close_btn.ggVisible=false;
				}
				else {
					me._map_close_btn.style.visibility=(Number(me._map_close_btn.style.opacity)>0||!me._map_close_btn.style.opacity)?'inherit':'hidden';
					me._map_close_btn.ggVisible=true;
				}
			}
		}
		me._map_close_btn.logicBlock_visible();
		me._map_close_btn.ggUpdatePosition=function (useTransition) {
		}
		me._map_top.appendChild(me._map_close_btn);
		el=me._map_close_btn_active=document.createElement('div');
		els=me._map_close_btn_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzIgMzI7IiB2aWV3Qm94PSIwIDAgMzIgMzIiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MS4zMzMzO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo1LjMzMzM7fSYjeGQ7Cjwvc3R5bGU+CiA8bGluZSB5Mj0iMjQiIGNsYXNzPSJzdDAiIHgyPSI4IiB4MT0iMjQiIHkxPSI4Ii8+CiA8bGluZSB5Mj0iMjQiIGNsYXNzPSJzdDAiIHgyPSIyNCIgeDE9IjgiIHkxPSI4Ii8+Cjwvc3ZnPgo=';
		me._map_close_btn_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_close_btn_active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='top : 15px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_close_btn_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_close_btn_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['map_top'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_close_btn_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_close_btn_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_close_btn_active.style.transition='';
				if (me._map_close_btn_active.ggCurrentLogicStateVisible == 0) {
					me._map_close_btn_active.style.visibility=(Number(me._map_close_btn_active.style.opacity)>0||!me._map_close_btn_active.style.opacity)?'inherit':'hidden';
					me._map_close_btn_active.ggVisible=true;
				}
				else {
					me._map_close_btn_active.style.visibility="hidden";
					me._map_close_btn_active.ggVisible=false;
				}
			}
		}
		me._map_close_btn_active.logicBlock_visible();
		me._map_close_btn_active.ggUpdatePosition=function (useTransition) {
		}
		me._map_top.appendChild(me._map_close_btn_active);
		me._map.appendChild(me._map_top);
		el=me._reset_info=document.createElement('div');
		el.ggId="reset info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 8px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._reset_info.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._reset_info.onclick=function (e) {
				me._map_node_title.ggUpdateText=function() {
					var params = [];
					params.push(String(player._(me.ggUserdata.title)));
					var hs = player._("%1", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me._map_node_title.ggUpdateText();
			me._map_node_title.ggTextDiv.scrollTop = 0;
				me._map_node_description.ggUpdateText=function() {
					var params = [];
					params.push(String(player._(me.ggUserdata.description)));
					var hs = player._("%1", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me._map_node_description.ggUpdateText();
			me._map_node_description.ggTextDiv.scrollTop = 0;
		}
		me._reset_info.ggUpdatePosition=function (useTransition) {
		}
		me._map.appendChild(me._reset_info);
		me.divSkin.appendChild(me._map);
		el=me._map_button=document.createElement('div');
		el.ggId="map_button";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(47,108,115,0.705882);';
		hs+='border-color : rgba(33,33,33,0.784314);';
		hs+='border-radius : 10px;';
		hs+='border-style : solid;';
		hs+='border-width : 2px 2px 2px 2px;';
		hs+='bottom : 270px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 40px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_button.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._map_button.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getMapsContainingNode(player.getCurrentNode()).length > 0 == true)) && 
				((player.hasFloorplan() == true)) || 
				((player.hasMap() == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_button.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_button.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_button.style.transition='opacity 300ms ease 0ms, background-color 0s, border-width 0s';
				if (me._map_button.ggCurrentLogicStateVisible == 0) {
					me._map_button.style.visibility="hidden";
					me._map_button.ggVisible=false;
				}
				else if (me._map_button.ggCurrentLogicStateVisible == 1) {
					me._map_button.style.visibility=(Number(me._map_button.style.opacity)>0||!me._map_button.style.opacity)?'inherit':'hidden';
					me._map_button.ggVisible=true;
				}
				else {
					me._map_button.style.visibility="hidden";
					me._map_button.ggVisible=false;
				}
			}
		}
		me._map_button.logicBlock_visible();
		me._map_button.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('resp_phone') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((player.getVariableValue('vis_floorplan') == true)) || 
				((player.getVariableValue('vis_map') == true))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_button.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_button.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_button.style.transition='opacity 300ms ease 0ms, background-color 0s, border-width 0s';
				if (me._map_button.ggCurrentLogicStateAlpha == 0) {
					me._map_button.style.visibility=me._map_button.ggVisible?'inherit':'hidden';
					me._map_button.style.opacity=1;
				}
				else if (me._map_button.ggCurrentLogicStateAlpha == 1) {
					setTimeout(function() { if (me._map_button.style.opacity == 0.0) { me._map_button.style.visibility="hidden"; } }, 305);
					me._map_button.style.opacity=0;
				}
				else {
					me._map_button.style.visibility=me._map_button.ggVisible?'inherit':'hidden';
					me._map_button.style.opacity=1;
				}
			}
		}
		me._map_button.logicBlock_alpha();
		me._map_button.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseDown['map_button'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else if (
				((player.getVariableValue('vis_floorplan') == true))
			)
			{
				newLogicStateBackgroundColor = 1;
			}
			else if (
				((me.elementMouseOver['map_button'] == true))
			)
			{
				newLogicStateBackgroundColor = 2;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._map_button.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._map_button.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._map_button.style.transition='opacity 300ms ease 0ms, background-color 0s, border-width 0s';
				if (me._map_button.ggCurrentLogicStateBackgroundColor == 0) {
					me._map_button.style.backgroundColor="rgba(82,190,202,0.862745)";
				}
				else if (me._map_button.ggCurrentLogicStateBackgroundColor == 1) {
					me._map_button.style.backgroundColor="rgba(104,240,255,1)";
				}
				else if (me._map_button.ggCurrentLogicStateBackgroundColor == 2) {
					me._map_button.style.backgroundColor="rgba(82,190,202,0.705882)";
				}
				else {
					me._map_button.style.backgroundColor="rgba(47,108,115,0.705882)";
				}
			}
		}
		me._map_button.logicBlock_backgroundcolor();
		me._map_button.logicBlock_borderwidth = function() {
			var newLogicStateBorderWidth;
			if (
				((me.elementMouseDown['map_button'] == true))
			)
			{
				newLogicStateBorderWidth = 0;
			}
			else if (
				((me.elementMouseOver['map_button'] == true))
			)
			{
				newLogicStateBorderWidth = 1;
			}
			else {
				newLogicStateBorderWidth = -1;
			}
			if (me._map_button.ggCurrentLogicStateBorderWidth != newLogicStateBorderWidth) {
				me._map_button.ggCurrentLogicStateBorderWidth = newLogicStateBorderWidth;
				me._map_button.style.transition='opacity 300ms ease 0ms, background-color 0s, border-width 0s';
				if (me._map_button.ggCurrentLogicStateBorderWidth == 0) {
					me._map_button.style.borderWidth="4px 1px 1px 4px";
				}
				else if (me._map_button.ggCurrentLogicStateBorderWidth == 1) {
					me._map_button.style.borderWidth="1px 4px 4px 1px";
				}
				else {
					me._map_button.style.borderWidth="2px 2px 2px 2px";
				}
			}
		}
		me._map_button.logicBlock_borderwidth();
		me._map_button.onclick=function (e) {
			if (
				(
					((player.hasFloorplan() == true))
				)
			) {
				player.setVariableValue('vis_floorplan', !player.getVariableValue('vis_floorplan'));
			}
			if (
				(
					((player.hasFloorplan() == false))
				)
			) {
				player.setVariableValue('vis_map', !player.getVariableValue('vis_map'));
			}
			if (
				(
					((player.getVariableValue('vis_info_show') == true))
				)
			) {
				player.setVariableValue('button_info', !player.getVariableValue('button_info'));
			}
			if (
				(
					((player.getVariableValue('vis_info_show') == true))
				)
			) {
				player.setVariableValue('vis_info_popup', !player.getVariableValue('vis_info_popup'));
			}
		}
		me._map_button.onmouseenter=function (e) {
			me.elementMouseOver['map_button']=true;
			me._map_icon.logicBlock_visible();
			me._map_icon_active.logicBlock_visible();
			me._floorplan_icon.logicBlock_visible();
			me._floorplan_icon_active.logicBlock_visible();
			me._map_button_text.logicBlock_textcolor();
			me._map_button.logicBlock_backgroundcolor();
			me._map_button.logicBlock_borderwidth();
		}
		me._map_button.onmousedown=function (e) {
			me.elementMouseDown['map_button']=true;
			me._map_button.logicBlock_backgroundcolor();
			me._map_button.logicBlock_borderwidth();
		}
		me._map_button.onmouseup=function (e) {
			me.elementMouseDown['map_button']=false;
			me._map_button.logicBlock_backgroundcolor();
			me._map_button.logicBlock_borderwidth();
		}
		me._map_button.onmouseleave=function (e) {
			me.elementMouseDown['map_button']=false;
			me.elementMouseOver['map_button']=false;
			me._map_icon.logicBlock_visible();
			me._map_icon_active.logicBlock_visible();
			me._floorplan_icon.logicBlock_visible();
			me._floorplan_icon_active.logicBlock_visible();
			me._map_button_text.logicBlock_textcolor();
			me._map_button.logicBlock_backgroundcolor();
			me._map_button.logicBlock_backgroundcolor();
			me._map_button.logicBlock_borderwidth();
			me._map_button.logicBlock_borderwidth();
		}
		me._map_button.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_icon=document.createElement('div');
		els=me._map_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzNiAzNiIgeT0iMHB4Ij4KIDxwYXRoIHN0cm9rZS1saW'+
			'5lam9pbj0icm91bmQiIHN0cm9rZT0iIzAwMDAwMCIgZD0iTTMxLjUsMTUgIEMzMS41LDI1LjUsMTgsMzQuNSwxOCwzNC41UzQuNSwyNS41LDQuNSwxNWMwLTcuNSw2LTEzLjUsMTMuNS0xMy41UzMxLjUsNy41LDMxLjUsMTV6IiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjEuMjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogPGNpcmNsZSBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9IiMwMDAwMDAiIGN4PSIxOCIgY3k9IjE1IiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjEuMjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgcj0iNC41Ii8+Cjwvc3ZnPgo=';
		me._map_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_icon";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 36px;';
		hs+='left : 16px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_icon.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['map_button'] == true)) || 
				((player.hasFloorplan() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_icon.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_icon.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_icon.style.transition='';
				if (me._map_icon.ggCurrentLogicStateVisible == 0) {
					me._map_icon.style.visibility="hidden";
					me._map_icon.ggVisible=false;
				}
				else {
					me._map_icon.style.visibility=(Number(me._map_icon.style.opacity)>0||!me._map_icon.style.opacity)?'inherit':'hidden';
					me._map_icon.ggVisible=true;
				}
			}
		}
		me._map_icon.logicBlock_visible();
		me._map_icon.ggUpdatePosition=function (useTransition) {
		}
		me._map_button.appendChild(me._map_icon);
		el=me._map_icon_active=document.createElement('div');
		els=me._map_icon_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzYgMzY7IiB2aWV3Qm94PSIwIDAgMzYgMzYiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiNGRkZGRkY7c3Ryb2tlLXdpZHRoOjEuMjU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30KPC9zdHlsZT4KIDxwYXRoIGQ9Ik0zMS41LDE1QzMxLjUsMjUuNSwxOCwzNC41LDE4LDM0LjVTNC41LDI1LjUsNC41LDE1YzAtNy41LDYtMTMuNSwxMy41LTEzLjVTMzEuNSw3LjUsMzEuNSwxNXoiIGNsYXNzPSJzdDAiLz4KIDxjaXJjbGUgY3g9IjE4IiBjbGFzcz0ic3QwIiBjeT0iMTUiIHI9IjQuNSIvPgo8L3N2Zz4K';
		me._map_icon_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_icon_active";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 36px;';
		hs+='left : 16px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_icon_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_icon_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['map_button'] == true)) && 
				((player.hasFloorplan() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_icon_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_icon_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_icon_active.style.transition='';
				if (me._map_icon_active.ggCurrentLogicStateVisible == 0) {
					me._map_icon_active.style.visibility=(Number(me._map_icon_active.style.opacity)>0||!me._map_icon_active.style.opacity)?'inherit':'hidden';
					me._map_icon_active.ggVisible=true;
				}
				else {
					me._map_icon_active.style.visibility="hidden";
					me._map_icon_active.ggVisible=false;
				}
			}
		}
		me._map_icon_active.logicBlock_visible();
		me._map_icon_active.ggUpdatePosition=function (useTransition) {
		}
		me._map_button.appendChild(me._map_icon_active);
		el=me._floorplan_icon=document.createElement('div');
		els=me._floorplan_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzNiAzNiIgeT0iMHB4Ij4KIDxwb2x5Z29uIHN0cm9rZS'+
			'1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iIzAwMDAwMCIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxLjI1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHBvaW50cz0iMS41LDkgMS41LDMzICAgMTIsMjcgMjQsMzMgMzQuNSwyNyAzNC41LDMgMjQsOSAxMiwzICIvPgogPGxpbmUgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSIjMDAwMDAwIiB5Mj0iMjciIGZpbGw9Im5vbmUiIHgyPSIxMiIgeTE9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjI1IiB4MT0iMTIiLz4KIDxsaW5lIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iIzAwMDAwMCIg'+
			'eTI9IjMzIiBmaWxsPSJub25lIiB4Mj0iMjQiIHkxPSI5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS4yNSIgeDE9IjI0Ii8+Cjwvc3ZnPgo=';
		me._floorplan_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="floorplan_icon";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 28px;';
		hs+='left : 16px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((28px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._floorplan_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floorplan_icon.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['map_button'] == true)) || 
				((player.hasFloorplan() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._floorplan_icon.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._floorplan_icon.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._floorplan_icon.style.transition='';
				if (me._floorplan_icon.ggCurrentLogicStateVisible == 0) {
					me._floorplan_icon.style.visibility="hidden";
					me._floorplan_icon.ggVisible=false;
				}
				else {
					me._floorplan_icon.style.visibility=(Number(me._floorplan_icon.style.opacity)>0||!me._floorplan_icon.style.opacity)?'inherit':'hidden';
					me._floorplan_icon.ggVisible=true;
				}
			}
		}
		me._floorplan_icon.logicBlock_visible();
		me._floorplan_icon.ggUpdatePosition=function (useTransition) {
		}
		me._map_button.appendChild(me._floorplan_icon);
		el=me._floorplan_icon_active=document.createElement('div');
		els=me._floorplan_icon_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzNiAzNiIgeT0iMHB4Ij4KIDxwb2x5Z29uIHN0cm9rZS'+
			'1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLW9wYWNpdHk9IjEiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjI1IiBwb2ludHM9IjEuNSw5IDEuNSwzMyAmI3hhOyYjeDk7MTIsMjcgMjQsMzMgMzQuNSwyNyAzNC41LDMgMjQsOSAxMiwzICIvPgogPGxpbmUgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSIjZmZmZmZmIiB5Mj0iMjciIHN0cm9rZS1vcGFjaXR5PSIxIiBmaWxsPSJub25lIiB4Mj0iMTIiIHkxPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHgxPSIxMiIgc3Ryb2tlLXdpZHRoPSIxLjI1Ii8+CiA8'+
			'bGluZSBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9IiNmZmZmZmYiIHkyPSIzMyIgc3Ryb2tlLW9wYWNpdHk9IjEiIGZpbGw9Im5vbmUiIHgyPSIyNCIgeTE9IjkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgeDE9IjI0IiBzdHJva2Utd2lkdGg9IjEuMjUiLz4KPC9zdmc+Cg==';
		me._floorplan_icon_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="floorplan_icon_active";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 28px;';
		hs+='left : 16px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((28px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._floorplan_icon_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floorplan_icon_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['map_button'] == true)) && 
				((player.hasFloorplan() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._floorplan_icon_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._floorplan_icon_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._floorplan_icon_active.style.transition='';
				if (me._floorplan_icon_active.ggCurrentLogicStateVisible == 0) {
					me._floorplan_icon_active.style.visibility=(Number(me._floorplan_icon_active.style.opacity)>0||!me._floorplan_icon_active.style.opacity)?'inherit':'hidden';
					me._floorplan_icon_active.ggVisible=true;
				}
				else {
					me._floorplan_icon_active.style.visibility="hidden";
					me._floorplan_icon_active.ggVisible=false;
				}
			}
		}
		me._floorplan_icon_active.logicBlock_visible();
		me._floorplan_icon_active.ggUpdatePosition=function (useTransition) {
		}
		me._map_button.appendChild(me._floorplan_icon_active);
		el=me._map_button_text=document.createElement('div');
		els=me._map_button_text__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="map_button_text";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 4px;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._map_button_text.ggUpdateText=function() {
			var params = [];
			var hs = player._("\u5730 \u5716", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._map_button_text.ggUpdateText();
		el.appendChild(els);
		me._map_button_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_button_text.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['map_button'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._map_button_text.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._map_button_text.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._map_button_text.style.transition='color 0s';
				if (me._map_button_text.ggCurrentLogicStateTextColor == 0) {
					me._map_button_text.style.color="rgba(255,255,255,1)";
				}
				else {
					me._map_button_text.style.color="rgba(0,0,0,1)";
				}
			}
		}
		me._map_button_text.logicBlock_textcolor();
		me._map_button_text.ggUpdatePosition=function (useTransition) {
		}
		me._map_button.appendChild(me._map_button_text);
		me.divSkin.appendChild(me._map_button);
		el=me._view_desktop=document.createElement('div');
		el.ggId="view_desktop";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 21px;';
		hs+='height : 150px;';
		hs+='left : calc(50% - ((calc(85% - 400px) + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : calc(85% - 400px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._view_desktop.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._view_desktop.ggUpdatePosition=function (useTransition) {
		}
		el=me._view_menu=document.createElement('div');
		els=me._view_menu__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 139px;';
		hs+='left : 50%;';
		hs+='margin-left : -223.5px;';
		hs+='margin-top : -69.5px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 50%;';
		hs+='width : 447px;';
		hs+="";
		els.setAttribute('style',hs);
		me._view_menu.ggScrollByX = function(diffX) {
			if(!me._view_menu.ggHorScrollVisible || diffX == 0 || me._view_menu.ggHPercentVisible >= 1.0) return;
			me._view_menu.ggScrollPosX = (me._view_menu__horScrollFg.offsetLeft + diffX);
			me._view_menu.ggScrollPosX = Math.max(me._view_menu.ggScrollPosX, 0);
			me._view_menu.ggScrollPosX = Math.min(me._view_menu.ggScrollPosX, me._view_menu__horScrollBg.offsetWidth - me._view_menu__horScrollFg.offsetWidth);
			me._view_menu__horScrollFg.style.left = me._view_menu.ggScrollPosX + 'px';
			let percentScrolled = me._view_menu.ggScrollPosX / (me._view_menu__horScrollBg.offsetWidth - me._view_menu__horScrollFg.offsetWidth);
			me._view_menu__content.style.left = -(Math.round((me._view_menu.ggContentWidth * (1.0 - me._view_menu.ggHPercentVisible)) * percentScrolled)) + me._view_menu.ggContentLeftOffset + 'px';
			me._view_menu.ggScrollPosXPercent = (me._view_menu__horScrollFg.offsetLeft / me._view_menu__horScrollBg.offsetWidth);
		}
		me._view_menu.ggScrollByXSmooth = function(diffX) {
			if(!me._view_menu.ggHorScrollVisible || diffX == 0 || me._view_menu.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._view_menu.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._view_menu.ggScrollPosX >= me._view_menu__horScrollBg.offsetWidth - me._view_menu__horScrollFg.offsetWidth)) {
					me._view_menu.ggScrollPosX = Math.min(me._view_menu.ggScrollPosX, me._view_menu__horScrollBg.offsetWidth - me._view_menu__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._view_menu.ggScrollPosX <= 0)) {
					me._view_menu.ggScrollPosX = Math.max(me._view_menu.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._view_menu__horScrollFg.style.left = me._view_menu.ggScrollPosX + 'px';
			let percentScrolled = me._view_menu.ggScrollPosX / (me._view_menu__horScrollBg.offsetWidth - me._view_menu__horScrollFg.offsetWidth);
			me._view_menu__content.style.left = -(Math.round((me._view_menu.ggContentWidth * (1.0 - me._view_menu.ggHPercentVisible)) * percentScrolled)) + me._view_menu.ggContentLeftOffset + 'px';
			me._view_menu.ggScrollPosXPercent = (me._view_menu__horScrollFg.offsetLeft / me._view_menu__horScrollBg.offsetWidth);
			}, 10);
		}
		me._view_menu.ggScrollByY = function(diffY) {
			if(!me._view_menu.ggVertScrollVisible || diffY == 0 || me._view_menu.ggVPercentVisible >= 1.0) return;
			me._view_menu.ggScrollPosY = (me._view_menu__vertScrollFg.offsetTop + diffY);
			me._view_menu.ggScrollPosY = Math.max(me._view_menu.ggScrollPosY, 0);
			me._view_menu.ggScrollPosY = Math.min(me._view_menu.ggScrollPosY, me._view_menu__vertScrollBg.offsetHeight - me._view_menu__vertScrollFg.offsetHeight);
			me._view_menu__vertScrollFg.style.top = me._view_menu.ggScrollPosY + 'px';
			let percentScrolled = me._view_menu.ggScrollPosY / (me._view_menu__vertScrollBg.offsetHeight - me._view_menu__vertScrollFg.offsetHeight);
			me._view_menu__content.style.top = -(Math.round((me._view_menu.ggContentHeight * (1.0 - me._view_menu.ggVPercentVisible)) * percentScrolled)) + me._view_menu.ggContentTopOffset + 'px';
			me._view_menu.ggScrollPosYPercent = (me._view_menu__vertScrollFg.offsetTop / me._view_menu__vertScrollBg.offsetHeight);
		}
		me._view_menu.ggScrollByYSmooth = function(diffY) {
			if(!me._view_menu.ggVertScrollVisible || diffY == 0 || me._view_menu.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._view_menu.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._view_menu.ggScrollPosY >= me._view_menu__vertScrollBg.offsetHeight - me._view_menu__vertScrollFg.offsetHeight)) {
					me._view_menu.ggScrollPosY = Math.min(me._view_menu.ggScrollPosY, me._view_menu__vertScrollBg.offsetHeight - me._view_menu__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._view_menu.ggScrollPosY <= 0)) {
					me._view_menu.ggScrollPosY = Math.max(me._view_menu.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._view_menu__vertScrollFg.style.top = me._view_menu.ggScrollPosY + 'px';
			let percentScrolled = me._view_menu.ggScrollPosY / (me._view_menu__vertScrollBg.offsetHeight - me._view_menu__vertScrollFg.offsetHeight);
			me._view_menu__content.style.top = -(Math.round((me._view_menu.ggContentHeight * (1.0 - me._view_menu.ggVPercentVisible)) * percentScrolled)) + me._view_menu.ggContentTopOffset + 'px';
			me._view_menu.ggScrollPosYPercent = (me._view_menu__vertScrollFg.offsetTop / me._view_menu__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._view_menu.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._view_menu.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._view_menu.ggHPercentVisible);
					me._view_menu.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._view_menu.clientWidth - (me._view_menu.ggVertScrollVisible ? 5 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._view_menu.clientWidth - (me._view_menu.ggVertScrollVisible ? 5 : 0))) * me._view_menu.ggHPercentVisible);
					me._view_menu.ggScrollByXSmooth(diffX);
				}
			}
			if (me._view_menu.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._view_menu.ggVPercentVisible);
					me._view_menu.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._view_menu.clientHeight - (me._view_menu.ggHorScrollVisible ? 5 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._view_menu.clientHeight - (me._view_menu.ggHorScrollVisible ? 5 : 0))) * me._view_menu.ggVPercentVisible);
					me._view_menu.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._view_menu__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._view_menu.ggDragInertiaX *= 0.96;
				me._view_menu.ggDragInertiaY *= 0.96;
				me._view_menu.ggScrollByX(me._view_menu.ggDragInertiaX);
				me._view_menu.ggScrollByY(me._view_menu.ggDragInertiaY);
				if (Math.abs(me._view_menu.ggDragInertiaX) < 1.0 && Math.abs(me._view_menu.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._view_menu__content.onmouseup = null;
			me._view_menu__content.onmousemove = null;
			me._view_menu__content.ontouchend = null;
			me._view_menu__content.ontouchmove = null;
			me._view_menu__content.onpointerup = null;
			me._view_menu__content.onpointermove = null;
			setTimeout(function() { me._view_menu.ggIsDragging = false; }, 100);
		}
		me._view_menu__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._view_menu.ggDragStartX) > 10 || Math.abs(eventY - me._view_menu.ggDragStartY) > 10) me._view_menu.ggIsDragging = true;
			var diffX = (eventX - me._view_menu.ggDragLastX) * me._view_menu.ggHPercentVisible;
			var diffY = (eventY - me._view_menu.ggDragLastY) * me._view_menu.ggVPercentVisible;
			me._view_menu.ggDragInertiaX = -diffX;
			me._view_menu.ggDragInertiaY = -diffY;
			me._view_menu.ggDragLastX = eventX;
			me._view_menu.ggDragLastY = eventY;
			me._view_menu.ggScrollByX(-diffX);
			me._view_menu.ggScrollByY(-diffY);
		}
		me._view_menu__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._view_menu.ggDragLastX = me._view_menu.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._view_menu.ggDragLastY = me._view_menu.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._view_menu__content.onmouseup = me._view_menu__content.mousetouchend;
			me._view_menu__content.ontouchend = me._view_menu__content.mousetouchend;
			me._view_menu__content.onmousemove = me._view_menu__content.mousetouchmove;
			me._view_menu__content.ontouchmove = me._view_menu__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._view_menu__content.onpointerup = me._view_menu__content.ontouchend;
				me._view_menu__content.onpointermove = me._view_menu__content.ontouchmove;
			}
		}
		els.onmousedown = me._view_menu__content.mousetouchstart;
		els.ontouchstart = me._view_menu__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._view_menu__content.mousetouchstart;
		}
		elHorScrollBg = me._view_menu__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 448px; height: 5px; background-color: rgba(128,128,128,0); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._view_menu__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 448px; height: 5px; background-color: rgba(255,255,255,0.666667); pointer-events: auto;');
		me._view_menu.ggScrollPosX = 0;
		me._view_menu.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._view_menu.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._view_menu.ggDragInertiaX *= 0.96;
					me._view_menu.ggScrollByX(me._view_menu.ggDragInertiaX);
					if (Math.abs(me._view_menu.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._view_menu.ggDragLastX;
				me._view_menu.ggDragInertiaX = diffX;
				me._view_menu.ggDragLastX = e.clientX;
				me._view_menu.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._view_menu.ggDragLastX = t ? t[0].clientX : e.clientX;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._view_menu.ggDragInertiaX *= 0.96;
					me._view_menu.ggScrollByX(me._view_menu.ggDragInertiaX);
					if (Math.abs(me._view_menu.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me._view_menu.ggDragLastX;
				me._view_menu.ggDragInertiaX = diffX;
				me._view_menu.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._view_menu.ggScrollByX(diffX);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elHorScrollFg.onpointerdown = elHorScrollFg.ontouchstart;
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._view_menu.ggScrollWidth;
			if (e.offsetX < me._view_menu.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._view_menu.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._view_menu__horScrollBg.getBoundingClientRect();
			var diffX = me._view_menu.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._view_menu.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._view_menu.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me._view_menu.ggScrollByXSmooth(30 * me._view_menu.ggHPercentVisible * wheelDelta);
		});
		elCornerBg = me._view_menu__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 5px; height: 5px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="view_menu";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -150px;';
		hs+='height : 140px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._view_menu.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._view_menu.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('menu_view') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._view_menu.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._view_menu.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._view_menu.style.transition='left 1000ms ease 0ms, bottom 1000ms ease 0ms, width 1000ms ease 0ms, height 1000ms ease 0ms, left 1000ms ease 0ms, opacity 1500ms ease 0ms';
				if (me._view_menu.ggCurrentLogicStatePosition == 0) {
					me._view_menu.style.left = 'calc(50% - (100% / 2))';
					me._view_menu.style.bottom='0px';
				}
				else {
					me._view_menu.style.left='calc(50% - ((100% + 0px) / 2) + 0px)';
					me._view_menu.style.bottom='-150px';
				}
			}
		}
		me._view_menu.logicBlock_position();
		me._view_menu.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('var_map') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._view_menu.ggCurrentLogicStateSize != newLogicStateSize) {
				me._view_menu.ggCurrentLogicStateSize = newLogicStateSize;
				me._view_menu.style.transition='left 1000ms ease 0ms, bottom 1000ms ease 0ms, width 1000ms ease 0ms, height 1000ms ease 0ms, left 1000ms ease 0ms, opacity 1500ms ease 0ms';
				if (me._view_menu.ggCurrentLogicStateSize == 0) {
					me._view_menu.style.width='0%';
					me._view_menu.style.height='0px';
					me._view_menu.style.left = 'calc(50% - (0% / 2))';
					setTimeout(function() {skin.updateSize(me._view_menu);}, 1050);
				}
				else {
					me._view_menu.style.width='100%';
					me._view_menu.style.height='140px';
					me._view_menu.style.left = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me._view_menu);}, 1050);
				}
			}
		}
		me._view_menu.logicBlock_size();
		me._view_menu.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('menu_view') == true)) && 
				((player.getIsMobile() == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._view_menu.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._view_menu.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._view_menu.style.transition='left 1000ms ease 0ms, bottom 1000ms ease 0ms, width 1000ms ease 0ms, height 1000ms ease 0ms, left 1000ms ease 0ms, opacity 1500ms ease 0ms';
				if (me._view_menu.ggCurrentLogicStateAlpha == 0) {
					me._view_menu.style.visibility=me._view_menu.ggVisible?'inherit':'hidden';
					me._view_menu.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._view_menu.style.opacity == 0.0) { me._view_menu.style.visibility="hidden"; } }, 1505);
					me._view_menu.style.opacity=0;
				}
			}
		}
		me._view_menu.logicBlock_alpha();
		me._view_menu.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				var containerWidth = offsetWidthWithScale;
				if (this.ggVertScrollVisible) containerWidth -= 5;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = ((contentWidth/-2) - (this.ggVertScrollVisible ? (5/2) : 0)) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				var containerHeight = this.clientHeight;
				if (this.ggHorScrollVisible) containerHeight -= 5;
				if (contentHeight < containerHeight) {
					this.ggContent.style.top = '50%';
					this.ggContent.style.marginTop = ((contentHeight/-2) - (this.ggHorScrollVisible ? (5/2) : 0))  + 'px';
				}
				else {
					this.ggContent.style.top = this.ggContentTopOffset + 'px';
					this.ggContent.style.marginTop = '0px';
				}
				if (contentWidth > Math.ceil(offsetWidthWithScale)) {
					me._view_menu__horScrollBg.style.visibility = 'inherit';
					me._view_menu__horScrollFg.style.visibility = 'inherit';
					me._view_menu.ggHorScrollVisible = true;
				} else {
					me._view_menu__horScrollBg.style.visibility = 'hidden';
					me._view_menu__horScrollFg.style.visibility = 'hidden';
					me._view_menu.ggHorScrollVisible = false;
				}
				if(me._view_menu.ggHorScrollVisible) {
					me._view_menu.ggAvailableHeight = me._view_menu.clientHeight - 5;
					if (me._view_menu.ggVertScrollVisible) {
						me._view_menu.ggAvailableWidth = me._view_menu.clientWidth - 5;
						me._view_menu.ggAvailableWidthWithScale = me._view_menu.getBoundingClientRect().width - me._view_menu__horScrollBg.getBoundingClientRect().height;
					} else {
						me._view_menu.ggAvailableWidth = me._view_menu.clientWidth;
						me._view_menu.ggAvailableWidthWithScale = me._view_menu.getBoundingClientRect().width;
					}
					me._view_menu__horScrollBg.style.width = me._view_menu.ggAvailableWidth + 'px';
					me._view_menu.ggHPercentVisible = contentWidth != 0 ? me._view_menu.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me._view_menu.ggHPercentVisible > 1.0) me._view_menu.ggHPercentVisible = 1.0;
					me._view_menu.ggScrollWidth = Math.round(me._view_menu__horScrollBg.offsetWidth * me._view_menu.ggHPercentVisible);
					me._view_menu__horScrollFg.style.width = me._view_menu.ggScrollWidth + 'px';
					me._view_menu.ggScrollPosX = me._view_menu.ggScrollPosXPercent * me._view_menu.ggAvailableWidth;
					me._view_menu.ggScrollPosX = Math.min(me._view_menu.ggScrollPosX, me._view_menu__horScrollBg.offsetWidth - me._view_menu__horScrollFg.offsetWidth);
					me._view_menu__horScrollFg.style.left = me._view_menu.ggScrollPosX + 'px';
					if (me._view_menu.ggHPercentVisible < 1.0) {
						let percentScrolled = me._view_menu.ggScrollPosX / (me._view_menu__horScrollBg.offsetWidth - me._view_menu__horScrollFg.offsetWidth);
						me._view_menu__content.style.left = -(Math.round((me._view_menu.ggContentWidth * (1.0 - me._view_menu.ggHPercentVisible)) * percentScrolled)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me._view_menu.ggAvailableHeight = me._view_menu.clientHeight;
					me._view_menu.ggScrollPosX = 0;
					me._view_menu.ggScrollPosXPercent = 0.0;
				}
				if(horScrollWasVisible != me._view_menu.ggHorScrollVisible || vertScrollWasVisible != me._view_menu.ggVertScrollVisible) {
					skin.updateSize(me._view_menu);
					me._view_menu.ggUpdatePosition();
				}
			}
		}
		el=me._view_tint=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._view_tint;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="view_tint";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(33,33,33,0.501961);';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._view_tint.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._view_tint.ggUpdatePosition=function (useTransition) {
		}
		me._view_menu__content.appendChild(me._view_tint);
		el=me._view_cloner=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._view_cloner;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 188;
		el.ggHeight = 100;
		el.ggSizeChanged = false;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._view_cloner.ggUpdating == true) return;
			me._view_cloner.ggUpdating = true;
			var el=me._view_cloner;
			var curNumRows = 0;
			curNumRows = me._view_cloner.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && !el.ggSizeChanged && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._view_cloner.ggUpdating = false;
				return;
			} else {
				el.ggSizeChanged = false;
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._view_cloner.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._view_cloner.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._view_cloner.getFilteredNodes(tourNodes, filter);
			me._view_cloner.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._view_cloner.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._view_cloner.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._view_cloner.ggWidth) + 'px';
				parameter.width=me._view_cloner.ggWidth + 'px';
				parameter.height=me._view_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_view_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					row = 0;
					column++;
					el.ggNumCols++;
				}
			}
			me._view_cloner.ggNodeCount = me._view_cloner.ggNumFilterPassed;
			me._view_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._view_cloner.parentNode && me._view_cloner.parentNode.classList.contains('ggskin_subelement') && me._view_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._view_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "View";
		el.ggId="view_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 100px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 188px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._view_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._view_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._view_cloner.childNodes.length; i++) {
				var child=me._view_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._view_cloner.ggUpdatePosition=function (useTransition) {
			me._view_cloner.ggUpdate();
		}
		me._view_menu__content.appendChild(me._view_cloner);
		me._view_desktop.appendChild(me._view_menu);
		me.divSkin.appendChild(me._view_desktop);
		el=me._entertainment_desktop=document.createElement('div');
		el.ggId="entertainment_desktop";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 20px;';
		hs+='height : 150px;';
		hs+='left : calc(50% - ((calc(85% - 400px) + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : calc(85% - 400px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._entertainment_desktop.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._entertainment_desktop.ggUpdatePosition=function (useTransition) {
		}
		el=me._entertainment_menu=document.createElement('div');
		els=me._entertainment_menu__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 139px;';
		hs+='left : 50%;';
		hs+='margin-left : -223.5px;';
		hs+='margin-top : -69.5px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 50%;';
		hs+='width : 447px;';
		hs+="";
		els.setAttribute('style',hs);
		me._entertainment_menu.ggScrollByX = function(diffX) {
			if(!me._entertainment_menu.ggHorScrollVisible || diffX == 0 || me._entertainment_menu.ggHPercentVisible >= 1.0) return;
			me._entertainment_menu.ggScrollPosX = (me._entertainment_menu__horScrollFg.offsetLeft + diffX);
			me._entertainment_menu.ggScrollPosX = Math.max(me._entertainment_menu.ggScrollPosX, 0);
			me._entertainment_menu.ggScrollPosX = Math.min(me._entertainment_menu.ggScrollPosX, me._entertainment_menu__horScrollBg.offsetWidth - me._entertainment_menu__horScrollFg.offsetWidth);
			me._entertainment_menu__horScrollFg.style.left = me._entertainment_menu.ggScrollPosX + 'px';
			let percentScrolled = me._entertainment_menu.ggScrollPosX / (me._entertainment_menu__horScrollBg.offsetWidth - me._entertainment_menu__horScrollFg.offsetWidth);
			me._entertainment_menu__content.style.left = -(Math.round((me._entertainment_menu.ggContentWidth * (1.0 - me._entertainment_menu.ggHPercentVisible)) * percentScrolled)) + me._entertainment_menu.ggContentLeftOffset + 'px';
			me._entertainment_menu.ggScrollPosXPercent = (me._entertainment_menu__horScrollFg.offsetLeft / me._entertainment_menu__horScrollBg.offsetWidth);
		}
		me._entertainment_menu.ggScrollByXSmooth = function(diffX) {
			if(!me._entertainment_menu.ggHorScrollVisible || diffX == 0 || me._entertainment_menu.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._entertainment_menu.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._entertainment_menu.ggScrollPosX >= me._entertainment_menu__horScrollBg.offsetWidth - me._entertainment_menu__horScrollFg.offsetWidth)) {
					me._entertainment_menu.ggScrollPosX = Math.min(me._entertainment_menu.ggScrollPosX, me._entertainment_menu__horScrollBg.offsetWidth - me._entertainment_menu__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._entertainment_menu.ggScrollPosX <= 0)) {
					me._entertainment_menu.ggScrollPosX = Math.max(me._entertainment_menu.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._entertainment_menu__horScrollFg.style.left = me._entertainment_menu.ggScrollPosX + 'px';
			let percentScrolled = me._entertainment_menu.ggScrollPosX / (me._entertainment_menu__horScrollBg.offsetWidth - me._entertainment_menu__horScrollFg.offsetWidth);
			me._entertainment_menu__content.style.left = -(Math.round((me._entertainment_menu.ggContentWidth * (1.0 - me._entertainment_menu.ggHPercentVisible)) * percentScrolled)) + me._entertainment_menu.ggContentLeftOffset + 'px';
			me._entertainment_menu.ggScrollPosXPercent = (me._entertainment_menu__horScrollFg.offsetLeft / me._entertainment_menu__horScrollBg.offsetWidth);
			}, 10);
		}
		me._entertainment_menu.ggScrollByY = function(diffY) {
			if(!me._entertainment_menu.ggVertScrollVisible || diffY == 0 || me._entertainment_menu.ggVPercentVisible >= 1.0) return;
			me._entertainment_menu.ggScrollPosY = (me._entertainment_menu__vertScrollFg.offsetTop + diffY);
			me._entertainment_menu.ggScrollPosY = Math.max(me._entertainment_menu.ggScrollPosY, 0);
			me._entertainment_menu.ggScrollPosY = Math.min(me._entertainment_menu.ggScrollPosY, me._entertainment_menu__vertScrollBg.offsetHeight - me._entertainment_menu__vertScrollFg.offsetHeight);
			me._entertainment_menu__vertScrollFg.style.top = me._entertainment_menu.ggScrollPosY + 'px';
			let percentScrolled = me._entertainment_menu.ggScrollPosY / (me._entertainment_menu__vertScrollBg.offsetHeight - me._entertainment_menu__vertScrollFg.offsetHeight);
			me._entertainment_menu__content.style.top = -(Math.round((me._entertainment_menu.ggContentHeight * (1.0 - me._entertainment_menu.ggVPercentVisible)) * percentScrolled)) + me._entertainment_menu.ggContentTopOffset + 'px';
			me._entertainment_menu.ggScrollPosYPercent = (me._entertainment_menu__vertScrollFg.offsetTop / me._entertainment_menu__vertScrollBg.offsetHeight);
		}
		me._entertainment_menu.ggScrollByYSmooth = function(diffY) {
			if(!me._entertainment_menu.ggVertScrollVisible || diffY == 0 || me._entertainment_menu.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._entertainment_menu.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._entertainment_menu.ggScrollPosY >= me._entertainment_menu__vertScrollBg.offsetHeight - me._entertainment_menu__vertScrollFg.offsetHeight)) {
					me._entertainment_menu.ggScrollPosY = Math.min(me._entertainment_menu.ggScrollPosY, me._entertainment_menu__vertScrollBg.offsetHeight - me._entertainment_menu__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._entertainment_menu.ggScrollPosY <= 0)) {
					me._entertainment_menu.ggScrollPosY = Math.max(me._entertainment_menu.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._entertainment_menu__vertScrollFg.style.top = me._entertainment_menu.ggScrollPosY + 'px';
			let percentScrolled = me._entertainment_menu.ggScrollPosY / (me._entertainment_menu__vertScrollBg.offsetHeight - me._entertainment_menu__vertScrollFg.offsetHeight);
			me._entertainment_menu__content.style.top = -(Math.round((me._entertainment_menu.ggContentHeight * (1.0 - me._entertainment_menu.ggVPercentVisible)) * percentScrolled)) + me._entertainment_menu.ggContentTopOffset + 'px';
			me._entertainment_menu.ggScrollPosYPercent = (me._entertainment_menu__vertScrollFg.offsetTop / me._entertainment_menu__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._entertainment_menu.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._entertainment_menu.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._entertainment_menu.ggHPercentVisible);
					me._entertainment_menu.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._entertainment_menu.clientWidth - (me._entertainment_menu.ggVertScrollVisible ? 5 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._entertainment_menu.clientWidth - (me._entertainment_menu.ggVertScrollVisible ? 5 : 0))) * me._entertainment_menu.ggHPercentVisible);
					me._entertainment_menu.ggScrollByXSmooth(diffX);
				}
			}
			if (me._entertainment_menu.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._entertainment_menu.ggVPercentVisible);
					me._entertainment_menu.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._entertainment_menu.clientHeight - (me._entertainment_menu.ggHorScrollVisible ? 5 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._entertainment_menu.clientHeight - (me._entertainment_menu.ggHorScrollVisible ? 5 : 0))) * me._entertainment_menu.ggVPercentVisible);
					me._entertainment_menu.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._entertainment_menu__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._entertainment_menu.ggDragInertiaX *= 0.96;
				me._entertainment_menu.ggDragInertiaY *= 0.96;
				me._entertainment_menu.ggScrollByX(me._entertainment_menu.ggDragInertiaX);
				me._entertainment_menu.ggScrollByY(me._entertainment_menu.ggDragInertiaY);
				if (Math.abs(me._entertainment_menu.ggDragInertiaX) < 1.0 && Math.abs(me._entertainment_menu.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._entertainment_menu__content.onmouseup = null;
			me._entertainment_menu__content.onmousemove = null;
			me._entertainment_menu__content.ontouchend = null;
			me._entertainment_menu__content.ontouchmove = null;
			me._entertainment_menu__content.onpointerup = null;
			me._entertainment_menu__content.onpointermove = null;
			setTimeout(function() { me._entertainment_menu.ggIsDragging = false; }, 100);
		}
		me._entertainment_menu__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._entertainment_menu.ggDragStartX) > 10 || Math.abs(eventY - me._entertainment_menu.ggDragStartY) > 10) me._entertainment_menu.ggIsDragging = true;
			var diffX = (eventX - me._entertainment_menu.ggDragLastX) * me._entertainment_menu.ggHPercentVisible;
			var diffY = (eventY - me._entertainment_menu.ggDragLastY) * me._entertainment_menu.ggVPercentVisible;
			me._entertainment_menu.ggDragInertiaX = -diffX;
			me._entertainment_menu.ggDragInertiaY = -diffY;
			me._entertainment_menu.ggDragLastX = eventX;
			me._entertainment_menu.ggDragLastY = eventY;
			me._entertainment_menu.ggScrollByX(-diffX);
			me._entertainment_menu.ggScrollByY(-diffY);
		}
		me._entertainment_menu__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._entertainment_menu.ggDragLastX = me._entertainment_menu.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._entertainment_menu.ggDragLastY = me._entertainment_menu.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._entertainment_menu__content.onmouseup = me._entertainment_menu__content.mousetouchend;
			me._entertainment_menu__content.ontouchend = me._entertainment_menu__content.mousetouchend;
			me._entertainment_menu__content.onmousemove = me._entertainment_menu__content.mousetouchmove;
			me._entertainment_menu__content.ontouchmove = me._entertainment_menu__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._entertainment_menu__content.onpointerup = me._entertainment_menu__content.ontouchend;
				me._entertainment_menu__content.onpointermove = me._entertainment_menu__content.ontouchmove;
			}
		}
		els.onmousedown = me._entertainment_menu__content.mousetouchstart;
		els.ontouchstart = me._entertainment_menu__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._entertainment_menu__content.mousetouchstart;
		}
		elHorScrollBg = me._entertainment_menu__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 448px; height: 5px; background-color: rgba(128,128,128,0); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._entertainment_menu__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 448px; height: 5px; background-color: rgba(255,255,255,0.666667); pointer-events: auto;');
		me._entertainment_menu.ggScrollPosX = 0;
		me._entertainment_menu.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._entertainment_menu.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._entertainment_menu.ggDragInertiaX *= 0.96;
					me._entertainment_menu.ggScrollByX(me._entertainment_menu.ggDragInertiaX);
					if (Math.abs(me._entertainment_menu.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._entertainment_menu.ggDragLastX;
				me._entertainment_menu.ggDragInertiaX = diffX;
				me._entertainment_menu.ggDragLastX = e.clientX;
				me._entertainment_menu.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._entertainment_menu.ggDragLastX = t ? t[0].clientX : e.clientX;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._entertainment_menu.ggDragInertiaX *= 0.96;
					me._entertainment_menu.ggScrollByX(me._entertainment_menu.ggDragInertiaX);
					if (Math.abs(me._entertainment_menu.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me._entertainment_menu.ggDragLastX;
				me._entertainment_menu.ggDragInertiaX = diffX;
				me._entertainment_menu.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._entertainment_menu.ggScrollByX(diffX);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elHorScrollFg.onpointerdown = elHorScrollFg.ontouchstart;
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._entertainment_menu.ggScrollWidth;
			if (e.offsetX < me._entertainment_menu.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._entertainment_menu.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._entertainment_menu__horScrollBg.getBoundingClientRect();
			var diffX = me._entertainment_menu.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._entertainment_menu.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._entertainment_menu.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me._entertainment_menu.ggScrollByXSmooth(30 * me._entertainment_menu.ggHPercentVisible * wheelDelta);
		});
		elCornerBg = me._entertainment_menu__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 5px; height: 5px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="entertainment_menu";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -150px;';
		hs+='height : 140px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._entertainment_menu.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._entertainment_menu.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('menu_entertainment') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._entertainment_menu.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._entertainment_menu.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._entertainment_menu.style.transition='left 1000ms ease 0ms, bottom 1000ms ease 0ms, width 1000ms ease 0ms, height 1000ms ease 0ms, left 1000ms ease 0ms, opacity 1500ms ease 0ms';
				if (me._entertainment_menu.ggCurrentLogicStatePosition == 0) {
					me._entertainment_menu.style.left = 'calc(50% - (100% / 2))';
					me._entertainment_menu.style.bottom='0px';
				}
				else {
					me._entertainment_menu.style.left='calc(50% - ((100% + 0px) / 2) + 0px)';
					me._entertainment_menu.style.bottom='-150px';
				}
			}
		}
		me._entertainment_menu.logicBlock_position();
		me._entertainment_menu.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('var_map') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._entertainment_menu.ggCurrentLogicStateSize != newLogicStateSize) {
				me._entertainment_menu.ggCurrentLogicStateSize = newLogicStateSize;
				me._entertainment_menu.style.transition='left 1000ms ease 0ms, bottom 1000ms ease 0ms, width 1000ms ease 0ms, height 1000ms ease 0ms, left 1000ms ease 0ms, opacity 1500ms ease 0ms';
				if (me._entertainment_menu.ggCurrentLogicStateSize == 0) {
					me._entertainment_menu.style.width='0%';
					me._entertainment_menu.style.height='0px';
					me._entertainment_menu.style.left = 'calc(50% - (0% / 2))';
					setTimeout(function() {skin.updateSize(me._entertainment_menu);}, 1050);
				}
				else {
					me._entertainment_menu.style.width='100%';
					me._entertainment_menu.style.height='140px';
					me._entertainment_menu.style.left = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me._entertainment_menu);}, 1050);
				}
			}
		}
		me._entertainment_menu.logicBlock_size();
		me._entertainment_menu.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('menu_entertainment') == true)) && 
				((player.getIsMobile() == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._entertainment_menu.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._entertainment_menu.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._entertainment_menu.style.transition='left 1000ms ease 0ms, bottom 1000ms ease 0ms, width 1000ms ease 0ms, height 1000ms ease 0ms, left 1000ms ease 0ms, opacity 1500ms ease 0ms';
				if (me._entertainment_menu.ggCurrentLogicStateAlpha == 0) {
					me._entertainment_menu.style.visibility=me._entertainment_menu.ggVisible?'inherit':'hidden';
					me._entertainment_menu.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._entertainment_menu.style.opacity == 0.0) { me._entertainment_menu.style.visibility="hidden"; } }, 1505);
					me._entertainment_menu.style.opacity=0;
				}
			}
		}
		me._entertainment_menu.logicBlock_alpha();
		me._entertainment_menu.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				var containerWidth = offsetWidthWithScale;
				if (this.ggVertScrollVisible) containerWidth -= 5;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = ((contentWidth/-2) - (this.ggVertScrollVisible ? (5/2) : 0)) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				var containerHeight = this.clientHeight;
				if (this.ggHorScrollVisible) containerHeight -= 5;
				if (contentHeight < containerHeight) {
					this.ggContent.style.top = '50%';
					this.ggContent.style.marginTop = ((contentHeight/-2) - (this.ggHorScrollVisible ? (5/2) : 0))  + 'px';
				}
				else {
					this.ggContent.style.top = this.ggContentTopOffset + 'px';
					this.ggContent.style.marginTop = '0px';
				}
				if (contentWidth > Math.ceil(offsetWidthWithScale)) {
					me._entertainment_menu__horScrollBg.style.visibility = 'inherit';
					me._entertainment_menu__horScrollFg.style.visibility = 'inherit';
					me._entertainment_menu.ggHorScrollVisible = true;
				} else {
					me._entertainment_menu__horScrollBg.style.visibility = 'hidden';
					me._entertainment_menu__horScrollFg.style.visibility = 'hidden';
					me._entertainment_menu.ggHorScrollVisible = false;
				}
				if(me._entertainment_menu.ggHorScrollVisible) {
					me._entertainment_menu.ggAvailableHeight = me._entertainment_menu.clientHeight - 5;
					if (me._entertainment_menu.ggVertScrollVisible) {
						me._entertainment_menu.ggAvailableWidth = me._entertainment_menu.clientWidth - 5;
						me._entertainment_menu.ggAvailableWidthWithScale = me._entertainment_menu.getBoundingClientRect().width - me._entertainment_menu__horScrollBg.getBoundingClientRect().height;
					} else {
						me._entertainment_menu.ggAvailableWidth = me._entertainment_menu.clientWidth;
						me._entertainment_menu.ggAvailableWidthWithScale = me._entertainment_menu.getBoundingClientRect().width;
					}
					me._entertainment_menu__horScrollBg.style.width = me._entertainment_menu.ggAvailableWidth + 'px';
					me._entertainment_menu.ggHPercentVisible = contentWidth != 0 ? me._entertainment_menu.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me._entertainment_menu.ggHPercentVisible > 1.0) me._entertainment_menu.ggHPercentVisible = 1.0;
					me._entertainment_menu.ggScrollWidth = Math.round(me._entertainment_menu__horScrollBg.offsetWidth * me._entertainment_menu.ggHPercentVisible);
					me._entertainment_menu__horScrollFg.style.width = me._entertainment_menu.ggScrollWidth + 'px';
					me._entertainment_menu.ggScrollPosX = me._entertainment_menu.ggScrollPosXPercent * me._entertainment_menu.ggAvailableWidth;
					me._entertainment_menu.ggScrollPosX = Math.min(me._entertainment_menu.ggScrollPosX, me._entertainment_menu__horScrollBg.offsetWidth - me._entertainment_menu__horScrollFg.offsetWidth);
					me._entertainment_menu__horScrollFg.style.left = me._entertainment_menu.ggScrollPosX + 'px';
					if (me._entertainment_menu.ggHPercentVisible < 1.0) {
						let percentScrolled = me._entertainment_menu.ggScrollPosX / (me._entertainment_menu__horScrollBg.offsetWidth - me._entertainment_menu__horScrollFg.offsetWidth);
						me._entertainment_menu__content.style.left = -(Math.round((me._entertainment_menu.ggContentWidth * (1.0 - me._entertainment_menu.ggHPercentVisible)) * percentScrolled)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me._entertainment_menu.ggAvailableHeight = me._entertainment_menu.clientHeight;
					me._entertainment_menu.ggScrollPosX = 0;
					me._entertainment_menu.ggScrollPosXPercent = 0.0;
				}
				if(horScrollWasVisible != me._entertainment_menu.ggHorScrollVisible || vertScrollWasVisible != me._entertainment_menu.ggVertScrollVisible) {
					skin.updateSize(me._entertainment_menu);
					me._entertainment_menu.ggUpdatePosition();
				}
			}
		}
		el=me._rectangle_1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._rectangle_1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="Rectangle 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(33,33,33,0.501961);';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_1.ggUpdatePosition=function (useTransition) {
		}
		me._entertainment_menu__content.appendChild(me._rectangle_1);
		el=me._entertainment_cloner=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._entertainment_cloner;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 188;
		el.ggHeight = 100;
		el.ggSizeChanged = false;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._entertainment_cloner.ggUpdating == true) return;
			me._entertainment_cloner.ggUpdating = true;
			var el=me._entertainment_cloner;
			var curNumRows = 0;
			curNumRows = me._entertainment_cloner.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && !el.ggSizeChanged && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._entertainment_cloner.ggUpdating = false;
				return;
			} else {
				el.ggSizeChanged = false;
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._entertainment_cloner.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._entertainment_cloner.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._entertainment_cloner.getFilteredNodes(tourNodes, filter);
			me._entertainment_cloner.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._entertainment_cloner.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._entertainment_cloner.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._entertainment_cloner.ggWidth) + 'px';
				parameter.width=me._entertainment_cloner.ggWidth + 'px';
				parameter.height=me._entertainment_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_entertainment_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					row = 0;
					column++;
					el.ggNumCols++;
				}
			}
			me._entertainment_cloner.ggNodeCount = me._entertainment_cloner.ggNumFilterPassed;
			me._entertainment_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._entertainment_cloner.parentNode && me._entertainment_cloner.parentNode.classList.contains('ggskin_subelement') && me._entertainment_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._entertainment_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "entertainment";
		el.ggId="entertainment_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 100px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 188px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._entertainment_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._entertainment_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._entertainment_cloner.childNodes.length; i++) {
				var child=me._entertainment_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._entertainment_cloner.ggUpdatePosition=function (useTransition) {
			me._entertainment_cloner.ggUpdate();
		}
		me._entertainment_menu__content.appendChild(me._entertainment_cloner);
		me._entertainment_desktop.appendChild(me._entertainment_menu);
		me.divSkin.appendChild(me._entertainment_desktop);
		el=me._room_desktop=document.createElement('div');
		el.ggId="room_desktop";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 20px;';
		hs+='height : 150px;';
		hs+='left : calc(50% - ((calc(85% - 400px) + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : calc(85% - 400px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._room_desktop.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._room_desktop.ggUpdatePosition=function (useTransition) {
		}
		el=me._room_menu=document.createElement('div');
		els=me._room_menu__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 139px;';
		hs+='left : 50%;';
		hs+='margin-left : -223.5px;';
		hs+='margin-top : -69.5px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 50%;';
		hs+='width : 447px;';
		hs+="";
		els.setAttribute('style',hs);
		me._room_menu.ggScrollByX = function(diffX) {
			if(!me._room_menu.ggHorScrollVisible || diffX == 0 || me._room_menu.ggHPercentVisible >= 1.0) return;
			me._room_menu.ggScrollPosX = (me._room_menu__horScrollFg.offsetLeft + diffX);
			me._room_menu.ggScrollPosX = Math.max(me._room_menu.ggScrollPosX, 0);
			me._room_menu.ggScrollPosX = Math.min(me._room_menu.ggScrollPosX, me._room_menu__horScrollBg.offsetWidth - me._room_menu__horScrollFg.offsetWidth);
			me._room_menu__horScrollFg.style.left = me._room_menu.ggScrollPosX + 'px';
			let percentScrolled = me._room_menu.ggScrollPosX / (me._room_menu__horScrollBg.offsetWidth - me._room_menu__horScrollFg.offsetWidth);
			me._room_menu__content.style.left = -(Math.round((me._room_menu.ggContentWidth * (1.0 - me._room_menu.ggHPercentVisible)) * percentScrolled)) + me._room_menu.ggContentLeftOffset + 'px';
			me._room_menu.ggScrollPosXPercent = (me._room_menu__horScrollFg.offsetLeft / me._room_menu__horScrollBg.offsetWidth);
		}
		me._room_menu.ggScrollByXSmooth = function(diffX) {
			if(!me._room_menu.ggHorScrollVisible || diffX == 0 || me._room_menu.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._room_menu.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._room_menu.ggScrollPosX >= me._room_menu__horScrollBg.offsetWidth - me._room_menu__horScrollFg.offsetWidth)) {
					me._room_menu.ggScrollPosX = Math.min(me._room_menu.ggScrollPosX, me._room_menu__horScrollBg.offsetWidth - me._room_menu__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._room_menu.ggScrollPosX <= 0)) {
					me._room_menu.ggScrollPosX = Math.max(me._room_menu.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._room_menu__horScrollFg.style.left = me._room_menu.ggScrollPosX + 'px';
			let percentScrolled = me._room_menu.ggScrollPosX / (me._room_menu__horScrollBg.offsetWidth - me._room_menu__horScrollFg.offsetWidth);
			me._room_menu__content.style.left = -(Math.round((me._room_menu.ggContentWidth * (1.0 - me._room_menu.ggHPercentVisible)) * percentScrolled)) + me._room_menu.ggContentLeftOffset + 'px';
			me._room_menu.ggScrollPosXPercent = (me._room_menu__horScrollFg.offsetLeft / me._room_menu__horScrollBg.offsetWidth);
			}, 10);
		}
		me._room_menu.ggScrollByY = function(diffY) {
			if(!me._room_menu.ggVertScrollVisible || diffY == 0 || me._room_menu.ggVPercentVisible >= 1.0) return;
			me._room_menu.ggScrollPosY = (me._room_menu__vertScrollFg.offsetTop + diffY);
			me._room_menu.ggScrollPosY = Math.max(me._room_menu.ggScrollPosY, 0);
			me._room_menu.ggScrollPosY = Math.min(me._room_menu.ggScrollPosY, me._room_menu__vertScrollBg.offsetHeight - me._room_menu__vertScrollFg.offsetHeight);
			me._room_menu__vertScrollFg.style.top = me._room_menu.ggScrollPosY + 'px';
			let percentScrolled = me._room_menu.ggScrollPosY / (me._room_menu__vertScrollBg.offsetHeight - me._room_menu__vertScrollFg.offsetHeight);
			me._room_menu__content.style.top = -(Math.round((me._room_menu.ggContentHeight * (1.0 - me._room_menu.ggVPercentVisible)) * percentScrolled)) + me._room_menu.ggContentTopOffset + 'px';
			me._room_menu.ggScrollPosYPercent = (me._room_menu__vertScrollFg.offsetTop / me._room_menu__vertScrollBg.offsetHeight);
		}
		me._room_menu.ggScrollByYSmooth = function(diffY) {
			if(!me._room_menu.ggVertScrollVisible || diffY == 0 || me._room_menu.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._room_menu.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._room_menu.ggScrollPosY >= me._room_menu__vertScrollBg.offsetHeight - me._room_menu__vertScrollFg.offsetHeight)) {
					me._room_menu.ggScrollPosY = Math.min(me._room_menu.ggScrollPosY, me._room_menu__vertScrollBg.offsetHeight - me._room_menu__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._room_menu.ggScrollPosY <= 0)) {
					me._room_menu.ggScrollPosY = Math.max(me._room_menu.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._room_menu__vertScrollFg.style.top = me._room_menu.ggScrollPosY + 'px';
			let percentScrolled = me._room_menu.ggScrollPosY / (me._room_menu__vertScrollBg.offsetHeight - me._room_menu__vertScrollFg.offsetHeight);
			me._room_menu__content.style.top = -(Math.round((me._room_menu.ggContentHeight * (1.0 - me._room_menu.ggVPercentVisible)) * percentScrolled)) + me._room_menu.ggContentTopOffset + 'px';
			me._room_menu.ggScrollPosYPercent = (me._room_menu__vertScrollFg.offsetTop / me._room_menu__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._room_menu.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._room_menu.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._room_menu.ggHPercentVisible);
					me._room_menu.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._room_menu.clientWidth - (me._room_menu.ggVertScrollVisible ? 5 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._room_menu.clientWidth - (me._room_menu.ggVertScrollVisible ? 5 : 0))) * me._room_menu.ggHPercentVisible);
					me._room_menu.ggScrollByXSmooth(diffX);
				}
			}
			if (me._room_menu.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._room_menu.ggVPercentVisible);
					me._room_menu.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._room_menu.clientHeight - (me._room_menu.ggHorScrollVisible ? 5 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._room_menu.clientHeight - (me._room_menu.ggHorScrollVisible ? 5 : 0))) * me._room_menu.ggVPercentVisible);
					me._room_menu.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._room_menu__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._room_menu.ggDragInertiaX *= 0.96;
				me._room_menu.ggDragInertiaY *= 0.96;
				me._room_menu.ggScrollByX(me._room_menu.ggDragInertiaX);
				me._room_menu.ggScrollByY(me._room_menu.ggDragInertiaY);
				if (Math.abs(me._room_menu.ggDragInertiaX) < 1.0 && Math.abs(me._room_menu.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._room_menu__content.onmouseup = null;
			me._room_menu__content.onmousemove = null;
			me._room_menu__content.ontouchend = null;
			me._room_menu__content.ontouchmove = null;
			me._room_menu__content.onpointerup = null;
			me._room_menu__content.onpointermove = null;
			setTimeout(function() { me._room_menu.ggIsDragging = false; }, 100);
		}
		me._room_menu__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._room_menu.ggDragStartX) > 10 || Math.abs(eventY - me._room_menu.ggDragStartY) > 10) me._room_menu.ggIsDragging = true;
			var diffX = (eventX - me._room_menu.ggDragLastX) * me._room_menu.ggHPercentVisible;
			var diffY = (eventY - me._room_menu.ggDragLastY) * me._room_menu.ggVPercentVisible;
			me._room_menu.ggDragInertiaX = -diffX;
			me._room_menu.ggDragInertiaY = -diffY;
			me._room_menu.ggDragLastX = eventX;
			me._room_menu.ggDragLastY = eventY;
			me._room_menu.ggScrollByX(-diffX);
			me._room_menu.ggScrollByY(-diffY);
		}
		me._room_menu__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._room_menu.ggDragLastX = me._room_menu.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._room_menu.ggDragLastY = me._room_menu.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._room_menu__content.onmouseup = me._room_menu__content.mousetouchend;
			me._room_menu__content.ontouchend = me._room_menu__content.mousetouchend;
			me._room_menu__content.onmousemove = me._room_menu__content.mousetouchmove;
			me._room_menu__content.ontouchmove = me._room_menu__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._room_menu__content.onpointerup = me._room_menu__content.ontouchend;
				me._room_menu__content.onpointermove = me._room_menu__content.ontouchmove;
			}
		}
		els.onmousedown = me._room_menu__content.mousetouchstart;
		els.ontouchstart = me._room_menu__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._room_menu__content.mousetouchstart;
		}
		elHorScrollBg = me._room_menu__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 448px; height: 5px; background-color: rgba(128,128,128,0); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._room_menu__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 448px; height: 5px; background-color: rgba(255,255,255,0.666667); pointer-events: auto;');
		me._room_menu.ggScrollPosX = 0;
		me._room_menu.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._room_menu.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._room_menu.ggDragInertiaX *= 0.96;
					me._room_menu.ggScrollByX(me._room_menu.ggDragInertiaX);
					if (Math.abs(me._room_menu.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._room_menu.ggDragLastX;
				me._room_menu.ggDragInertiaX = diffX;
				me._room_menu.ggDragLastX = e.clientX;
				me._room_menu.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._room_menu.ggDragLastX = t ? t[0].clientX : e.clientX;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._room_menu.ggDragInertiaX *= 0.96;
					me._room_menu.ggScrollByX(me._room_menu.ggDragInertiaX);
					if (Math.abs(me._room_menu.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me._room_menu.ggDragLastX;
				me._room_menu.ggDragInertiaX = diffX;
				me._room_menu.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._room_menu.ggScrollByX(diffX);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elHorScrollFg.onpointerdown = elHorScrollFg.ontouchstart;
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._room_menu.ggScrollWidth;
			if (e.offsetX < me._room_menu.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._room_menu.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._room_menu__horScrollBg.getBoundingClientRect();
			var diffX = me._room_menu.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._room_menu.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._room_menu.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me._room_menu.ggScrollByXSmooth(30 * me._room_menu.ggHPercentVisible * wheelDelta);
		});
		elCornerBg = me._room_menu__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 5px; height: 5px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="room_menu";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -150px;';
		hs+='height : 140px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._room_menu.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._room_menu.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('menu_room') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._room_menu.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._room_menu.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._room_menu.style.transition='left 1000ms ease 0ms, bottom 1000ms ease 0ms, width 1000ms ease 0ms, height 1000ms ease 0ms, left 1000ms ease 0ms, opacity 1500ms ease 0ms';
				if (me._room_menu.ggCurrentLogicStatePosition == 0) {
					me._room_menu.style.left = 'calc(50% - (100% / 2))';
					me._room_menu.style.bottom='0px';
				}
				else {
					me._room_menu.style.left='calc(50% - ((100% + 0px) / 2) + 0px)';
					me._room_menu.style.bottom='-150px';
				}
			}
		}
		me._room_menu.logicBlock_position();
		me._room_menu.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('var_map') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._room_menu.ggCurrentLogicStateSize != newLogicStateSize) {
				me._room_menu.ggCurrentLogicStateSize = newLogicStateSize;
				me._room_menu.style.transition='left 1000ms ease 0ms, bottom 1000ms ease 0ms, width 1000ms ease 0ms, height 1000ms ease 0ms, left 1000ms ease 0ms, opacity 1500ms ease 0ms';
				if (me._room_menu.ggCurrentLogicStateSize == 0) {
					me._room_menu.style.width='0%';
					me._room_menu.style.height='0px';
					me._room_menu.style.left = 'calc(50% - (0% / 2))';
					setTimeout(function() {skin.updateSize(me._room_menu);}, 1050);
				}
				else {
					me._room_menu.style.width='100%';
					me._room_menu.style.height='140px';
					me._room_menu.style.left = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me._room_menu);}, 1050);
				}
			}
		}
		me._room_menu.logicBlock_size();
		me._room_menu.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('menu_room') == true)) && 
				((player.getIsMobile() == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._room_menu.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._room_menu.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._room_menu.style.transition='left 1000ms ease 0ms, bottom 1000ms ease 0ms, width 1000ms ease 0ms, height 1000ms ease 0ms, left 1000ms ease 0ms, opacity 1500ms ease 0ms';
				if (me._room_menu.ggCurrentLogicStateAlpha == 0) {
					me._room_menu.style.visibility=me._room_menu.ggVisible?'inherit':'hidden';
					me._room_menu.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._room_menu.style.opacity == 0.0) { me._room_menu.style.visibility="hidden"; } }, 1505);
					me._room_menu.style.opacity=0;
				}
			}
		}
		me._room_menu.logicBlock_alpha();
		me._room_menu.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				var containerWidth = offsetWidthWithScale;
				if (this.ggVertScrollVisible) containerWidth -= 5;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = ((contentWidth/-2) - (this.ggVertScrollVisible ? (5/2) : 0)) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				var containerHeight = this.clientHeight;
				if (this.ggHorScrollVisible) containerHeight -= 5;
				if (contentHeight < containerHeight) {
					this.ggContent.style.top = '50%';
					this.ggContent.style.marginTop = ((contentHeight/-2) - (this.ggHorScrollVisible ? (5/2) : 0))  + 'px';
				}
				else {
					this.ggContent.style.top = this.ggContentTopOffset + 'px';
					this.ggContent.style.marginTop = '0px';
				}
				if (contentWidth > Math.ceil(offsetWidthWithScale)) {
					me._room_menu__horScrollBg.style.visibility = 'inherit';
					me._room_menu__horScrollFg.style.visibility = 'inherit';
					me._room_menu.ggHorScrollVisible = true;
				} else {
					me._room_menu__horScrollBg.style.visibility = 'hidden';
					me._room_menu__horScrollFg.style.visibility = 'hidden';
					me._room_menu.ggHorScrollVisible = false;
				}
				if(me._room_menu.ggHorScrollVisible) {
					me._room_menu.ggAvailableHeight = me._room_menu.clientHeight - 5;
					if (me._room_menu.ggVertScrollVisible) {
						me._room_menu.ggAvailableWidth = me._room_menu.clientWidth - 5;
						me._room_menu.ggAvailableWidthWithScale = me._room_menu.getBoundingClientRect().width - me._room_menu__horScrollBg.getBoundingClientRect().height;
					} else {
						me._room_menu.ggAvailableWidth = me._room_menu.clientWidth;
						me._room_menu.ggAvailableWidthWithScale = me._room_menu.getBoundingClientRect().width;
					}
					me._room_menu__horScrollBg.style.width = me._room_menu.ggAvailableWidth + 'px';
					me._room_menu.ggHPercentVisible = contentWidth != 0 ? me._room_menu.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me._room_menu.ggHPercentVisible > 1.0) me._room_menu.ggHPercentVisible = 1.0;
					me._room_menu.ggScrollWidth = Math.round(me._room_menu__horScrollBg.offsetWidth * me._room_menu.ggHPercentVisible);
					me._room_menu__horScrollFg.style.width = me._room_menu.ggScrollWidth + 'px';
					me._room_menu.ggScrollPosX = me._room_menu.ggScrollPosXPercent * me._room_menu.ggAvailableWidth;
					me._room_menu.ggScrollPosX = Math.min(me._room_menu.ggScrollPosX, me._room_menu__horScrollBg.offsetWidth - me._room_menu__horScrollFg.offsetWidth);
					me._room_menu__horScrollFg.style.left = me._room_menu.ggScrollPosX + 'px';
					if (me._room_menu.ggHPercentVisible < 1.0) {
						let percentScrolled = me._room_menu.ggScrollPosX / (me._room_menu__horScrollBg.offsetWidth - me._room_menu__horScrollFg.offsetWidth);
						me._room_menu__content.style.left = -(Math.round((me._room_menu.ggContentWidth * (1.0 - me._room_menu.ggHPercentVisible)) * percentScrolled)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me._room_menu.ggAvailableHeight = me._room_menu.clientHeight;
					me._room_menu.ggScrollPosX = 0;
					me._room_menu.ggScrollPosXPercent = 0.0;
				}
				if(horScrollWasVisible != me._room_menu.ggHorScrollVisible || vertScrollWasVisible != me._room_menu.ggVertScrollVisible) {
					skin.updateSize(me._room_menu);
					me._room_menu.ggUpdatePosition();
				}
			}
		}
		el=me._room_tint=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._room_tint;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="room_tint";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(33,33,33,0.501961);';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._room_tint.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._room_tint.ggUpdatePosition=function (useTransition) {
		}
		me._room_menu__content.appendChild(me._room_tint);
		el=me._room_cloner=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._room_cloner;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 188;
		el.ggHeight = 100;
		el.ggSizeChanged = false;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._room_cloner.ggUpdating == true) return;
			me._room_cloner.ggUpdating = true;
			var el=me._room_cloner;
			var curNumRows = 0;
			curNumRows = me._room_cloner.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && !el.ggSizeChanged && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._room_cloner.ggUpdating = false;
				return;
			} else {
				el.ggSizeChanged = false;
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._room_cloner.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._room_cloner.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._room_cloner.getFilteredNodes(tourNodes, filter);
			me._room_cloner.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._room_cloner.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._room_cloner.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._room_cloner.ggWidth) + 'px';
				parameter.width=me._room_cloner.ggWidth + 'px';
				parameter.height=me._room_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_room_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					row = 0;
					column++;
					el.ggNumCols++;
				}
			}
			me._room_cloner.ggNodeCount = me._room_cloner.ggNumFilterPassed;
			me._room_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._room_cloner.parentNode && me._room_cloner.parentNode.classList.contains('ggskin_subelement') && me._room_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._room_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "room";
		el.ggId="room_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 100px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 188px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._room_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._room_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._room_cloner.childNodes.length; i++) {
				var child=me._room_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._room_cloner.ggUpdatePosition=function (useTransition) {
			me._room_cloner.ggUpdate();
		}
		me._room_menu__content.appendChild(me._room_cloner);
		me._room_desktop.appendChild(me._room_menu);
		me.divSkin.appendChild(me._room_desktop);
		el=me._dining_desktop=document.createElement('div');
		el.ggId="dining_desktop";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 20px;';
		hs+='height : 150px;';
		hs+='left : calc(50% - ((calc(85% - 400px) + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : calc(85% - 400px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._dining_desktop.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._dining_desktop.ggUpdatePosition=function (useTransition) {
		}
		el=me._dining_menu=document.createElement('div');
		els=me._dining_menu__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 139px;';
		hs+='left : 50%;';
		hs+='margin-left : -223.5px;';
		hs+='margin-top : -69.5px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 50%;';
		hs+='width : 447px;';
		hs+="";
		els.setAttribute('style',hs);
		me._dining_menu.ggScrollByX = function(diffX) {
			if(!me._dining_menu.ggHorScrollVisible || diffX == 0 || me._dining_menu.ggHPercentVisible >= 1.0) return;
			me._dining_menu.ggScrollPosX = (me._dining_menu__horScrollFg.offsetLeft + diffX);
			me._dining_menu.ggScrollPosX = Math.max(me._dining_menu.ggScrollPosX, 0);
			me._dining_menu.ggScrollPosX = Math.min(me._dining_menu.ggScrollPosX, me._dining_menu__horScrollBg.offsetWidth - me._dining_menu__horScrollFg.offsetWidth);
			me._dining_menu__horScrollFg.style.left = me._dining_menu.ggScrollPosX + 'px';
			let percentScrolled = me._dining_menu.ggScrollPosX / (me._dining_menu__horScrollBg.offsetWidth - me._dining_menu__horScrollFg.offsetWidth);
			me._dining_menu__content.style.left = -(Math.round((me._dining_menu.ggContentWidth * (1.0 - me._dining_menu.ggHPercentVisible)) * percentScrolled)) + me._dining_menu.ggContentLeftOffset + 'px';
			me._dining_menu.ggScrollPosXPercent = (me._dining_menu__horScrollFg.offsetLeft / me._dining_menu__horScrollBg.offsetWidth);
		}
		me._dining_menu.ggScrollByXSmooth = function(diffX) {
			if(!me._dining_menu.ggHorScrollVisible || diffX == 0 || me._dining_menu.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._dining_menu.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._dining_menu.ggScrollPosX >= me._dining_menu__horScrollBg.offsetWidth - me._dining_menu__horScrollFg.offsetWidth)) {
					me._dining_menu.ggScrollPosX = Math.min(me._dining_menu.ggScrollPosX, me._dining_menu__horScrollBg.offsetWidth - me._dining_menu__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._dining_menu.ggScrollPosX <= 0)) {
					me._dining_menu.ggScrollPosX = Math.max(me._dining_menu.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._dining_menu__horScrollFg.style.left = me._dining_menu.ggScrollPosX + 'px';
			let percentScrolled = me._dining_menu.ggScrollPosX / (me._dining_menu__horScrollBg.offsetWidth - me._dining_menu__horScrollFg.offsetWidth);
			me._dining_menu__content.style.left = -(Math.round((me._dining_menu.ggContentWidth * (1.0 - me._dining_menu.ggHPercentVisible)) * percentScrolled)) + me._dining_menu.ggContentLeftOffset + 'px';
			me._dining_menu.ggScrollPosXPercent = (me._dining_menu__horScrollFg.offsetLeft / me._dining_menu__horScrollBg.offsetWidth);
			}, 10);
		}
		me._dining_menu.ggScrollByY = function(diffY) {
			if(!me._dining_menu.ggVertScrollVisible || diffY == 0 || me._dining_menu.ggVPercentVisible >= 1.0) return;
			me._dining_menu.ggScrollPosY = (me._dining_menu__vertScrollFg.offsetTop + diffY);
			me._dining_menu.ggScrollPosY = Math.max(me._dining_menu.ggScrollPosY, 0);
			me._dining_menu.ggScrollPosY = Math.min(me._dining_menu.ggScrollPosY, me._dining_menu__vertScrollBg.offsetHeight - me._dining_menu__vertScrollFg.offsetHeight);
			me._dining_menu__vertScrollFg.style.top = me._dining_menu.ggScrollPosY + 'px';
			let percentScrolled = me._dining_menu.ggScrollPosY / (me._dining_menu__vertScrollBg.offsetHeight - me._dining_menu__vertScrollFg.offsetHeight);
			me._dining_menu__content.style.top = -(Math.round((me._dining_menu.ggContentHeight * (1.0 - me._dining_menu.ggVPercentVisible)) * percentScrolled)) + me._dining_menu.ggContentTopOffset + 'px';
			me._dining_menu.ggScrollPosYPercent = (me._dining_menu__vertScrollFg.offsetTop / me._dining_menu__vertScrollBg.offsetHeight);
		}
		me._dining_menu.ggScrollByYSmooth = function(diffY) {
			if(!me._dining_menu.ggVertScrollVisible || diffY == 0 || me._dining_menu.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._dining_menu.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._dining_menu.ggScrollPosY >= me._dining_menu__vertScrollBg.offsetHeight - me._dining_menu__vertScrollFg.offsetHeight)) {
					me._dining_menu.ggScrollPosY = Math.min(me._dining_menu.ggScrollPosY, me._dining_menu__vertScrollBg.offsetHeight - me._dining_menu__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._dining_menu.ggScrollPosY <= 0)) {
					me._dining_menu.ggScrollPosY = Math.max(me._dining_menu.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._dining_menu__vertScrollFg.style.top = me._dining_menu.ggScrollPosY + 'px';
			let percentScrolled = me._dining_menu.ggScrollPosY / (me._dining_menu__vertScrollBg.offsetHeight - me._dining_menu__vertScrollFg.offsetHeight);
			me._dining_menu__content.style.top = -(Math.round((me._dining_menu.ggContentHeight * (1.0 - me._dining_menu.ggVPercentVisible)) * percentScrolled)) + me._dining_menu.ggContentTopOffset + 'px';
			me._dining_menu.ggScrollPosYPercent = (me._dining_menu__vertScrollFg.offsetTop / me._dining_menu__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._dining_menu.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._dining_menu.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._dining_menu.ggHPercentVisible);
					me._dining_menu.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._dining_menu.clientWidth - (me._dining_menu.ggVertScrollVisible ? 5 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._dining_menu.clientWidth - (me._dining_menu.ggVertScrollVisible ? 5 : 0))) * me._dining_menu.ggHPercentVisible);
					me._dining_menu.ggScrollByXSmooth(diffX);
				}
			}
			if (me._dining_menu.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._dining_menu.ggVPercentVisible);
					me._dining_menu.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._dining_menu.clientHeight - (me._dining_menu.ggHorScrollVisible ? 5 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._dining_menu.clientHeight - (me._dining_menu.ggHorScrollVisible ? 5 : 0))) * me._dining_menu.ggVPercentVisible);
					me._dining_menu.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._dining_menu__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._dining_menu.ggDragInertiaX *= 0.96;
				me._dining_menu.ggDragInertiaY *= 0.96;
				me._dining_menu.ggScrollByX(me._dining_menu.ggDragInertiaX);
				me._dining_menu.ggScrollByY(me._dining_menu.ggDragInertiaY);
				if (Math.abs(me._dining_menu.ggDragInertiaX) < 1.0 && Math.abs(me._dining_menu.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._dining_menu__content.onmouseup = null;
			me._dining_menu__content.onmousemove = null;
			me._dining_menu__content.ontouchend = null;
			me._dining_menu__content.ontouchmove = null;
			me._dining_menu__content.onpointerup = null;
			me._dining_menu__content.onpointermove = null;
			setTimeout(function() { me._dining_menu.ggIsDragging = false; }, 100);
		}
		me._dining_menu__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._dining_menu.ggDragStartX) > 10 || Math.abs(eventY - me._dining_menu.ggDragStartY) > 10) me._dining_menu.ggIsDragging = true;
			var diffX = (eventX - me._dining_menu.ggDragLastX) * me._dining_menu.ggHPercentVisible;
			var diffY = (eventY - me._dining_menu.ggDragLastY) * me._dining_menu.ggVPercentVisible;
			me._dining_menu.ggDragInertiaX = -diffX;
			me._dining_menu.ggDragInertiaY = -diffY;
			me._dining_menu.ggDragLastX = eventX;
			me._dining_menu.ggDragLastY = eventY;
			me._dining_menu.ggScrollByX(-diffX);
			me._dining_menu.ggScrollByY(-diffY);
		}
		me._dining_menu__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._dining_menu.ggDragLastX = me._dining_menu.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._dining_menu.ggDragLastY = me._dining_menu.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._dining_menu__content.onmouseup = me._dining_menu__content.mousetouchend;
			me._dining_menu__content.ontouchend = me._dining_menu__content.mousetouchend;
			me._dining_menu__content.onmousemove = me._dining_menu__content.mousetouchmove;
			me._dining_menu__content.ontouchmove = me._dining_menu__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._dining_menu__content.onpointerup = me._dining_menu__content.ontouchend;
				me._dining_menu__content.onpointermove = me._dining_menu__content.ontouchmove;
			}
		}
		els.onmousedown = me._dining_menu__content.mousetouchstart;
		els.ontouchstart = me._dining_menu__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._dining_menu__content.mousetouchstart;
		}
		elHorScrollBg = me._dining_menu__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 448px; height: 5px; background-color: rgba(128,128,128,0); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._dining_menu__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 448px; height: 5px; background-color: rgba(255,255,255,0.666667); pointer-events: auto;');
		me._dining_menu.ggScrollPosX = 0;
		me._dining_menu.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._dining_menu.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._dining_menu.ggDragInertiaX *= 0.96;
					me._dining_menu.ggScrollByX(me._dining_menu.ggDragInertiaX);
					if (Math.abs(me._dining_menu.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._dining_menu.ggDragLastX;
				me._dining_menu.ggDragInertiaX = diffX;
				me._dining_menu.ggDragLastX = e.clientX;
				me._dining_menu.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._dining_menu.ggDragLastX = t ? t[0].clientX : e.clientX;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._dining_menu.ggDragInertiaX *= 0.96;
					me._dining_menu.ggScrollByX(me._dining_menu.ggDragInertiaX);
					if (Math.abs(me._dining_menu.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me._dining_menu.ggDragLastX;
				me._dining_menu.ggDragInertiaX = diffX;
				me._dining_menu.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._dining_menu.ggScrollByX(diffX);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elHorScrollFg.onpointerdown = elHorScrollFg.ontouchstart;
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._dining_menu.ggScrollWidth;
			if (e.offsetX < me._dining_menu.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._dining_menu.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._dining_menu__horScrollBg.getBoundingClientRect();
			var diffX = me._dining_menu.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._dining_menu.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._dining_menu.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me._dining_menu.ggScrollByXSmooth(30 * me._dining_menu.ggHPercentVisible * wheelDelta);
		});
		elCornerBg = me._dining_menu__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 5px; height: 5px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="dining_menu";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -150px;';
		hs+='height : 140px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._dining_menu.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dining_menu.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('menu_dining') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._dining_menu.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._dining_menu.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._dining_menu.style.transition='left 1000ms ease 0ms, bottom 1000ms ease 0ms, width 1000ms ease 0ms, height 1000ms ease 0ms, left 1000ms ease 0ms, opacity 1500ms ease 0ms';
				if (me._dining_menu.ggCurrentLogicStatePosition == 0) {
					me._dining_menu.style.left = 'calc(50% - (100% / 2))';
					me._dining_menu.style.bottom='0px';
				}
				else {
					me._dining_menu.style.left='calc(50% - ((100% + 0px) / 2) + 0px)';
					me._dining_menu.style.bottom='-150px';
				}
			}
		}
		me._dining_menu.logicBlock_position();
		me._dining_menu.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('var_map') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._dining_menu.ggCurrentLogicStateSize != newLogicStateSize) {
				me._dining_menu.ggCurrentLogicStateSize = newLogicStateSize;
				me._dining_menu.style.transition='left 1000ms ease 0ms, bottom 1000ms ease 0ms, width 1000ms ease 0ms, height 1000ms ease 0ms, left 1000ms ease 0ms, opacity 1500ms ease 0ms';
				if (me._dining_menu.ggCurrentLogicStateSize == 0) {
					me._dining_menu.style.width='0%';
					me._dining_menu.style.height='0px';
					me._dining_menu.style.left = 'calc(50% - (0% / 2))';
					setTimeout(function() {skin.updateSize(me._dining_menu);}, 1050);
				}
				else {
					me._dining_menu.style.width='100%';
					me._dining_menu.style.height='140px';
					me._dining_menu.style.left = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me._dining_menu);}, 1050);
				}
			}
		}
		me._dining_menu.logicBlock_size();
		me._dining_menu.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('menu_dining') == true)) && 
				((player.getIsMobile() == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._dining_menu.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._dining_menu.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._dining_menu.style.transition='left 1000ms ease 0ms, bottom 1000ms ease 0ms, width 1000ms ease 0ms, height 1000ms ease 0ms, left 1000ms ease 0ms, opacity 1500ms ease 0ms';
				if (me._dining_menu.ggCurrentLogicStateAlpha == 0) {
					me._dining_menu.style.visibility=me._dining_menu.ggVisible?'inherit':'hidden';
					me._dining_menu.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._dining_menu.style.opacity == 0.0) { me._dining_menu.style.visibility="hidden"; } }, 1505);
					me._dining_menu.style.opacity=0;
				}
			}
		}
		me._dining_menu.logicBlock_alpha();
		me._dining_menu.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				var containerWidth = offsetWidthWithScale;
				if (this.ggVertScrollVisible) containerWidth -= 5;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = ((contentWidth/-2) - (this.ggVertScrollVisible ? (5/2) : 0)) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				var containerHeight = this.clientHeight;
				if (this.ggHorScrollVisible) containerHeight -= 5;
				if (contentHeight < containerHeight) {
					this.ggContent.style.top = '50%';
					this.ggContent.style.marginTop = ((contentHeight/-2) - (this.ggHorScrollVisible ? (5/2) : 0))  + 'px';
				}
				else {
					this.ggContent.style.top = this.ggContentTopOffset + 'px';
					this.ggContent.style.marginTop = '0px';
				}
				if (contentWidth > Math.ceil(offsetWidthWithScale)) {
					me._dining_menu__horScrollBg.style.visibility = 'inherit';
					me._dining_menu__horScrollFg.style.visibility = 'inherit';
					me._dining_menu.ggHorScrollVisible = true;
				} else {
					me._dining_menu__horScrollBg.style.visibility = 'hidden';
					me._dining_menu__horScrollFg.style.visibility = 'hidden';
					me._dining_menu.ggHorScrollVisible = false;
				}
				if(me._dining_menu.ggHorScrollVisible) {
					me._dining_menu.ggAvailableHeight = me._dining_menu.clientHeight - 5;
					if (me._dining_menu.ggVertScrollVisible) {
						me._dining_menu.ggAvailableWidth = me._dining_menu.clientWidth - 5;
						me._dining_menu.ggAvailableWidthWithScale = me._dining_menu.getBoundingClientRect().width - me._dining_menu__horScrollBg.getBoundingClientRect().height;
					} else {
						me._dining_menu.ggAvailableWidth = me._dining_menu.clientWidth;
						me._dining_menu.ggAvailableWidthWithScale = me._dining_menu.getBoundingClientRect().width;
					}
					me._dining_menu__horScrollBg.style.width = me._dining_menu.ggAvailableWidth + 'px';
					me._dining_menu.ggHPercentVisible = contentWidth != 0 ? me._dining_menu.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me._dining_menu.ggHPercentVisible > 1.0) me._dining_menu.ggHPercentVisible = 1.0;
					me._dining_menu.ggScrollWidth = Math.round(me._dining_menu__horScrollBg.offsetWidth * me._dining_menu.ggHPercentVisible);
					me._dining_menu__horScrollFg.style.width = me._dining_menu.ggScrollWidth + 'px';
					me._dining_menu.ggScrollPosX = me._dining_menu.ggScrollPosXPercent * me._dining_menu.ggAvailableWidth;
					me._dining_menu.ggScrollPosX = Math.min(me._dining_menu.ggScrollPosX, me._dining_menu__horScrollBg.offsetWidth - me._dining_menu__horScrollFg.offsetWidth);
					me._dining_menu__horScrollFg.style.left = me._dining_menu.ggScrollPosX + 'px';
					if (me._dining_menu.ggHPercentVisible < 1.0) {
						let percentScrolled = me._dining_menu.ggScrollPosX / (me._dining_menu__horScrollBg.offsetWidth - me._dining_menu__horScrollFg.offsetWidth);
						me._dining_menu__content.style.left = -(Math.round((me._dining_menu.ggContentWidth * (1.0 - me._dining_menu.ggHPercentVisible)) * percentScrolled)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me._dining_menu.ggAvailableHeight = me._dining_menu.clientHeight;
					me._dining_menu.ggScrollPosX = 0;
					me._dining_menu.ggScrollPosXPercent = 0.0;
				}
				if(horScrollWasVisible != me._dining_menu.ggHorScrollVisible || vertScrollWasVisible != me._dining_menu.ggVertScrollVisible) {
					skin.updateSize(me._dining_menu);
					me._dining_menu.ggUpdatePosition();
				}
			}
		}
		el=me._dining_tint=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._dining_tint;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="dining_tint";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(33,33,33,0.501961);';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._dining_tint.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dining_tint.ggUpdatePosition=function (useTransition) {
		}
		me._dining_menu__content.appendChild(me._dining_tint);
		el=me._dining_cloner=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._dining_cloner;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 188;
		el.ggHeight = 100;
		el.ggSizeChanged = false;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._dining_cloner.ggUpdating == true) return;
			me._dining_cloner.ggUpdating = true;
			var el=me._dining_cloner;
			var curNumRows = 0;
			curNumRows = me._dining_cloner.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && !el.ggSizeChanged && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._dining_cloner.ggUpdating = false;
				return;
			} else {
				el.ggSizeChanged = false;
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._dining_cloner.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._dining_cloner.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._dining_cloner.getFilteredNodes(tourNodes, filter);
			me._dining_cloner.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._dining_cloner.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._dining_cloner.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._dining_cloner.ggWidth) + 'px';
				parameter.width=me._dining_cloner.ggWidth + 'px';
				parameter.height=me._dining_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_dining_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					row = 0;
					column++;
					el.ggNumCols++;
				}
			}
			me._dining_cloner.ggNodeCount = me._dining_cloner.ggNumFilterPassed;
			me._dining_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._dining_cloner.parentNode && me._dining_cloner.parentNode.classList.contains('ggskin_subelement') && me._dining_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._dining_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "Dining";
		el.ggId="dining_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 100px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 188px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._dining_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dining_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._dining_cloner.childNodes.length; i++) {
				var child=me._dining_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._dining_cloner.ggUpdatePosition=function (useTransition) {
			me._dining_cloner.ggUpdate();
		}
		me._dining_menu__content.appendChild(me._dining_cloner);
		me._dining_desktop.appendChild(me._dining_menu);
		me.divSkin.appendChild(me._dining_desktop);
		el=me._lobby_desktop=document.createElement('div');
		el.ggId="lobby_desktop";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 20px;';
		hs+='height : 150px;';
		hs+='left : calc(50% - ((calc(85% - 300px) + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : calc(85% - 300px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._lobby_desktop.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._lobby_desktop.ggUpdatePosition=function (useTransition) {
		}
		el=me._lobby_menu=document.createElement('div');
		els=me._lobby_menu__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 139px;';
		hs+='left : 50%;';
		hs+='margin-left : -223.5px;';
		hs+='margin-top : -69.5px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 50%;';
		hs+='width : 447px;';
		hs+="";
		els.setAttribute('style',hs);
		me._lobby_menu.ggScrollByX = function(diffX) {
			if(!me._lobby_menu.ggHorScrollVisible || diffX == 0 || me._lobby_menu.ggHPercentVisible >= 1.0) return;
			me._lobby_menu.ggScrollPosX = (me._lobby_menu__horScrollFg.offsetLeft + diffX);
			me._lobby_menu.ggScrollPosX = Math.max(me._lobby_menu.ggScrollPosX, 0);
			me._lobby_menu.ggScrollPosX = Math.min(me._lobby_menu.ggScrollPosX, me._lobby_menu__horScrollBg.offsetWidth - me._lobby_menu__horScrollFg.offsetWidth);
			me._lobby_menu__horScrollFg.style.left = me._lobby_menu.ggScrollPosX + 'px';
			let percentScrolled = me._lobby_menu.ggScrollPosX / (me._lobby_menu__horScrollBg.offsetWidth - me._lobby_menu__horScrollFg.offsetWidth);
			me._lobby_menu__content.style.left = -(Math.round((me._lobby_menu.ggContentWidth * (1.0 - me._lobby_menu.ggHPercentVisible)) * percentScrolled)) + me._lobby_menu.ggContentLeftOffset + 'px';
			me._lobby_menu.ggScrollPosXPercent = (me._lobby_menu__horScrollFg.offsetLeft / me._lobby_menu__horScrollBg.offsetWidth);
		}
		me._lobby_menu.ggScrollByXSmooth = function(diffX) {
			if(!me._lobby_menu.ggHorScrollVisible || diffX == 0 || me._lobby_menu.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._lobby_menu.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._lobby_menu.ggScrollPosX >= me._lobby_menu__horScrollBg.offsetWidth - me._lobby_menu__horScrollFg.offsetWidth)) {
					me._lobby_menu.ggScrollPosX = Math.min(me._lobby_menu.ggScrollPosX, me._lobby_menu__horScrollBg.offsetWidth - me._lobby_menu__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._lobby_menu.ggScrollPosX <= 0)) {
					me._lobby_menu.ggScrollPosX = Math.max(me._lobby_menu.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._lobby_menu__horScrollFg.style.left = me._lobby_menu.ggScrollPosX + 'px';
			let percentScrolled = me._lobby_menu.ggScrollPosX / (me._lobby_menu__horScrollBg.offsetWidth - me._lobby_menu__horScrollFg.offsetWidth);
			me._lobby_menu__content.style.left = -(Math.round((me._lobby_menu.ggContentWidth * (1.0 - me._lobby_menu.ggHPercentVisible)) * percentScrolled)) + me._lobby_menu.ggContentLeftOffset + 'px';
			me._lobby_menu.ggScrollPosXPercent = (me._lobby_menu__horScrollFg.offsetLeft / me._lobby_menu__horScrollBg.offsetWidth);
			}, 10);
		}
		me._lobby_menu.ggScrollByY = function(diffY) {
			if(!me._lobby_menu.ggVertScrollVisible || diffY == 0 || me._lobby_menu.ggVPercentVisible >= 1.0) return;
			me._lobby_menu.ggScrollPosY = (me._lobby_menu__vertScrollFg.offsetTop + diffY);
			me._lobby_menu.ggScrollPosY = Math.max(me._lobby_menu.ggScrollPosY, 0);
			me._lobby_menu.ggScrollPosY = Math.min(me._lobby_menu.ggScrollPosY, me._lobby_menu__vertScrollBg.offsetHeight - me._lobby_menu__vertScrollFg.offsetHeight);
			me._lobby_menu__vertScrollFg.style.top = me._lobby_menu.ggScrollPosY + 'px';
			let percentScrolled = me._lobby_menu.ggScrollPosY / (me._lobby_menu__vertScrollBg.offsetHeight - me._lobby_menu__vertScrollFg.offsetHeight);
			me._lobby_menu__content.style.top = -(Math.round((me._lobby_menu.ggContentHeight * (1.0 - me._lobby_menu.ggVPercentVisible)) * percentScrolled)) + me._lobby_menu.ggContentTopOffset + 'px';
			me._lobby_menu.ggScrollPosYPercent = (me._lobby_menu__vertScrollFg.offsetTop / me._lobby_menu__vertScrollBg.offsetHeight);
		}
		me._lobby_menu.ggScrollByYSmooth = function(diffY) {
			if(!me._lobby_menu.ggVertScrollVisible || diffY == 0 || me._lobby_menu.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._lobby_menu.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._lobby_menu.ggScrollPosY >= me._lobby_menu__vertScrollBg.offsetHeight - me._lobby_menu__vertScrollFg.offsetHeight)) {
					me._lobby_menu.ggScrollPosY = Math.min(me._lobby_menu.ggScrollPosY, me._lobby_menu__vertScrollBg.offsetHeight - me._lobby_menu__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._lobby_menu.ggScrollPosY <= 0)) {
					me._lobby_menu.ggScrollPosY = Math.max(me._lobby_menu.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._lobby_menu__vertScrollFg.style.top = me._lobby_menu.ggScrollPosY + 'px';
			let percentScrolled = me._lobby_menu.ggScrollPosY / (me._lobby_menu__vertScrollBg.offsetHeight - me._lobby_menu__vertScrollFg.offsetHeight);
			me._lobby_menu__content.style.top = -(Math.round((me._lobby_menu.ggContentHeight * (1.0 - me._lobby_menu.ggVPercentVisible)) * percentScrolled)) + me._lobby_menu.ggContentTopOffset + 'px';
			me._lobby_menu.ggScrollPosYPercent = (me._lobby_menu__vertScrollFg.offsetTop / me._lobby_menu__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._lobby_menu.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._lobby_menu.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._lobby_menu.ggHPercentVisible);
					me._lobby_menu.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._lobby_menu.clientWidth - (me._lobby_menu.ggVertScrollVisible ? 5 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._lobby_menu.clientWidth - (me._lobby_menu.ggVertScrollVisible ? 5 : 0))) * me._lobby_menu.ggHPercentVisible);
					me._lobby_menu.ggScrollByXSmooth(diffX);
				}
			}
			if (me._lobby_menu.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._lobby_menu.ggVPercentVisible);
					me._lobby_menu.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._lobby_menu.clientHeight - (me._lobby_menu.ggHorScrollVisible ? 5 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._lobby_menu.clientHeight - (me._lobby_menu.ggHorScrollVisible ? 5 : 0))) * me._lobby_menu.ggVPercentVisible);
					me._lobby_menu.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._lobby_menu__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._lobby_menu.ggDragInertiaX *= 0.96;
				me._lobby_menu.ggDragInertiaY *= 0.96;
				me._lobby_menu.ggScrollByX(me._lobby_menu.ggDragInertiaX);
				me._lobby_menu.ggScrollByY(me._lobby_menu.ggDragInertiaY);
				if (Math.abs(me._lobby_menu.ggDragInertiaX) < 1.0 && Math.abs(me._lobby_menu.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._lobby_menu__content.onmouseup = null;
			me._lobby_menu__content.onmousemove = null;
			me._lobby_menu__content.ontouchend = null;
			me._lobby_menu__content.ontouchmove = null;
			me._lobby_menu__content.onpointerup = null;
			me._lobby_menu__content.onpointermove = null;
			setTimeout(function() { me._lobby_menu.ggIsDragging = false; }, 100);
		}
		me._lobby_menu__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._lobby_menu.ggDragStartX) > 10 || Math.abs(eventY - me._lobby_menu.ggDragStartY) > 10) me._lobby_menu.ggIsDragging = true;
			var diffX = (eventX - me._lobby_menu.ggDragLastX) * me._lobby_menu.ggHPercentVisible;
			var diffY = (eventY - me._lobby_menu.ggDragLastY) * me._lobby_menu.ggVPercentVisible;
			me._lobby_menu.ggDragInertiaX = -diffX;
			me._lobby_menu.ggDragInertiaY = -diffY;
			me._lobby_menu.ggDragLastX = eventX;
			me._lobby_menu.ggDragLastY = eventY;
			me._lobby_menu.ggScrollByX(-diffX);
			me._lobby_menu.ggScrollByY(-diffY);
		}
		me._lobby_menu__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._lobby_menu.ggDragLastX = me._lobby_menu.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._lobby_menu.ggDragLastY = me._lobby_menu.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._lobby_menu__content.onmouseup = me._lobby_menu__content.mousetouchend;
			me._lobby_menu__content.ontouchend = me._lobby_menu__content.mousetouchend;
			me._lobby_menu__content.onmousemove = me._lobby_menu__content.mousetouchmove;
			me._lobby_menu__content.ontouchmove = me._lobby_menu__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._lobby_menu__content.onpointerup = me._lobby_menu__content.ontouchend;
				me._lobby_menu__content.onpointermove = me._lobby_menu__content.ontouchmove;
			}
		}
		els.onmousedown = me._lobby_menu__content.mousetouchstart;
		els.ontouchstart = me._lobby_menu__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._lobby_menu__content.mousetouchstart;
		}
		elHorScrollBg = me._lobby_menu__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 448px; height: 5px; background-color: rgba(128,128,128,0); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._lobby_menu__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 448px; height: 5px; background-color: rgba(255,255,255,0.666667); pointer-events: auto;');
		me._lobby_menu.ggScrollPosX = 0;
		me._lobby_menu.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._lobby_menu.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._lobby_menu.ggDragInertiaX *= 0.96;
					me._lobby_menu.ggScrollByX(me._lobby_menu.ggDragInertiaX);
					if (Math.abs(me._lobby_menu.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._lobby_menu.ggDragLastX;
				me._lobby_menu.ggDragInertiaX = diffX;
				me._lobby_menu.ggDragLastX = e.clientX;
				me._lobby_menu.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._lobby_menu.ggDragLastX = t ? t[0].clientX : e.clientX;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._lobby_menu.ggDragInertiaX *= 0.96;
					me._lobby_menu.ggScrollByX(me._lobby_menu.ggDragInertiaX);
					if (Math.abs(me._lobby_menu.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me._lobby_menu.ggDragLastX;
				me._lobby_menu.ggDragInertiaX = diffX;
				me._lobby_menu.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._lobby_menu.ggScrollByX(diffX);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elHorScrollFg.onpointerdown = elHorScrollFg.ontouchstart;
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._lobby_menu.ggScrollWidth;
			if (e.offsetX < me._lobby_menu.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._lobby_menu.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._lobby_menu__horScrollBg.getBoundingClientRect();
			var diffX = me._lobby_menu.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._lobby_menu.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._lobby_menu.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me._lobby_menu.ggScrollByXSmooth(30 * me._lobby_menu.ggHPercentVisible * wheelDelta);
		});
		elCornerBg = me._lobby_menu__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 5px; height: 5px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="lobby_menu";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -150px;';
		hs+='height : 140px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._lobby_menu.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._lobby_menu.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('menu_lobby') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._lobby_menu.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._lobby_menu.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._lobby_menu.style.transition='left 1000ms ease 0ms, bottom 1000ms ease 0ms, width 1000ms ease 0ms, height 1000ms ease 0ms, left 1000ms ease 0ms, opacity 1500ms ease 0ms';
				if (me._lobby_menu.ggCurrentLogicStatePosition == 0) {
					me._lobby_menu.style.left = 'calc(50% - (100% / 2))';
					me._lobby_menu.style.bottom='0px';
				}
				else {
					me._lobby_menu.style.left='calc(50% - ((100% + 0px) / 2) + 0px)';
					me._lobby_menu.style.bottom='-150px';
				}
			}
		}
		me._lobby_menu.logicBlock_position();
		me._lobby_menu.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('var_map') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._lobby_menu.ggCurrentLogicStateSize != newLogicStateSize) {
				me._lobby_menu.ggCurrentLogicStateSize = newLogicStateSize;
				me._lobby_menu.style.transition='left 1000ms ease 0ms, bottom 1000ms ease 0ms, width 1000ms ease 0ms, height 1000ms ease 0ms, left 1000ms ease 0ms, opacity 1500ms ease 0ms';
				if (me._lobby_menu.ggCurrentLogicStateSize == 0) {
					me._lobby_menu.style.width='0%';
					me._lobby_menu.style.height='0px';
					me._lobby_menu.style.left = 'calc(50% - (0% / 2))';
					setTimeout(function() {skin.updateSize(me._lobby_menu);}, 1050);
				}
				else {
					me._lobby_menu.style.width='100%';
					me._lobby_menu.style.height='140px';
					me._lobby_menu.style.left = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me._lobby_menu);}, 1050);
				}
			}
		}
		me._lobby_menu.logicBlock_size();
		me._lobby_menu.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('menu_lobby') == true)) && 
				((player.getIsMobile() == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._lobby_menu.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._lobby_menu.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._lobby_menu.style.transition='left 1000ms ease 0ms, bottom 1000ms ease 0ms, width 1000ms ease 0ms, height 1000ms ease 0ms, left 1000ms ease 0ms, opacity 1500ms ease 0ms';
				if (me._lobby_menu.ggCurrentLogicStateAlpha == 0) {
					me._lobby_menu.style.visibility=me._lobby_menu.ggVisible?'inherit':'hidden';
					me._lobby_menu.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._lobby_menu.style.opacity == 0.0) { me._lobby_menu.style.visibility="hidden"; } }, 1505);
					me._lobby_menu.style.opacity=0;
				}
			}
		}
		me._lobby_menu.logicBlock_alpha();
		me._lobby_menu.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				var containerWidth = offsetWidthWithScale;
				if (this.ggVertScrollVisible) containerWidth -= 5;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = ((contentWidth/-2) - (this.ggVertScrollVisible ? (5/2) : 0)) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				var containerHeight = this.clientHeight;
				if (this.ggHorScrollVisible) containerHeight -= 5;
				if (contentHeight < containerHeight) {
					this.ggContent.style.top = '50%';
					this.ggContent.style.marginTop = ((contentHeight/-2) - (this.ggHorScrollVisible ? (5/2) : 0))  + 'px';
				}
				else {
					this.ggContent.style.top = this.ggContentTopOffset + 'px';
					this.ggContent.style.marginTop = '0px';
				}
				if (contentWidth > Math.ceil(offsetWidthWithScale)) {
					me._lobby_menu__horScrollBg.style.visibility = 'inherit';
					me._lobby_menu__horScrollFg.style.visibility = 'inherit';
					me._lobby_menu.ggHorScrollVisible = true;
				} else {
					me._lobby_menu__horScrollBg.style.visibility = 'hidden';
					me._lobby_menu__horScrollFg.style.visibility = 'hidden';
					me._lobby_menu.ggHorScrollVisible = false;
				}
				if(me._lobby_menu.ggHorScrollVisible) {
					me._lobby_menu.ggAvailableHeight = me._lobby_menu.clientHeight - 5;
					if (me._lobby_menu.ggVertScrollVisible) {
						me._lobby_menu.ggAvailableWidth = me._lobby_menu.clientWidth - 5;
						me._lobby_menu.ggAvailableWidthWithScale = me._lobby_menu.getBoundingClientRect().width - me._lobby_menu__horScrollBg.getBoundingClientRect().height;
					} else {
						me._lobby_menu.ggAvailableWidth = me._lobby_menu.clientWidth;
						me._lobby_menu.ggAvailableWidthWithScale = me._lobby_menu.getBoundingClientRect().width;
					}
					me._lobby_menu__horScrollBg.style.width = me._lobby_menu.ggAvailableWidth + 'px';
					me._lobby_menu.ggHPercentVisible = contentWidth != 0 ? me._lobby_menu.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me._lobby_menu.ggHPercentVisible > 1.0) me._lobby_menu.ggHPercentVisible = 1.0;
					me._lobby_menu.ggScrollWidth = Math.round(me._lobby_menu__horScrollBg.offsetWidth * me._lobby_menu.ggHPercentVisible);
					me._lobby_menu__horScrollFg.style.width = me._lobby_menu.ggScrollWidth + 'px';
					me._lobby_menu.ggScrollPosX = me._lobby_menu.ggScrollPosXPercent * me._lobby_menu.ggAvailableWidth;
					me._lobby_menu.ggScrollPosX = Math.min(me._lobby_menu.ggScrollPosX, me._lobby_menu__horScrollBg.offsetWidth - me._lobby_menu__horScrollFg.offsetWidth);
					me._lobby_menu__horScrollFg.style.left = me._lobby_menu.ggScrollPosX + 'px';
					if (me._lobby_menu.ggHPercentVisible < 1.0) {
						let percentScrolled = me._lobby_menu.ggScrollPosX / (me._lobby_menu__horScrollBg.offsetWidth - me._lobby_menu__horScrollFg.offsetWidth);
						me._lobby_menu__content.style.left = -(Math.round((me._lobby_menu.ggContentWidth * (1.0 - me._lobby_menu.ggHPercentVisible)) * percentScrolled)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me._lobby_menu.ggAvailableHeight = me._lobby_menu.clientHeight;
					me._lobby_menu.ggScrollPosX = 0;
					me._lobby_menu.ggScrollPosXPercent = 0.0;
				}
				if(horScrollWasVisible != me._lobby_menu.ggHorScrollVisible || vertScrollWasVisible != me._lobby_menu.ggVertScrollVisible) {
					skin.updateSize(me._lobby_menu);
					me._lobby_menu.ggUpdatePosition();
				}
			}
		}
		el=me._lobby_tint=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._lobby_tint;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="lobby_tint";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(33,33,33,0.501961);';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._lobby_tint.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._lobby_tint.ggUpdatePosition=function (useTransition) {
		}
		me._lobby_menu__content.appendChild(me._lobby_tint);
		el=me._lobby_cloner=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._lobby_cloner;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 188;
		el.ggHeight = 100;
		el.ggSizeChanged = false;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._lobby_cloner.ggUpdating == true) return;
			me._lobby_cloner.ggUpdating = true;
			var el=me._lobby_cloner;
			var curNumRows = 0;
			curNumRows = me._lobby_cloner.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && !el.ggSizeChanged && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._lobby_cloner.ggUpdating = false;
				return;
			} else {
				el.ggSizeChanged = false;
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._lobby_cloner.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._lobby_cloner.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._lobby_cloner.getFilteredNodes(tourNodes, filter);
			me._lobby_cloner.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._lobby_cloner.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._lobby_cloner.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._lobby_cloner.ggWidth) + 'px';
				parameter.width=me._lobby_cloner.ggWidth + 'px';
				parameter.height=me._lobby_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_lobby_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					row = 0;
					column++;
					el.ggNumCols++;
				}
			}
			me._lobby_cloner.ggNodeCount = me._lobby_cloner.ggNumFilterPassed;
			me._lobby_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._lobby_cloner.parentNode && me._lobby_cloner.parentNode.classList.contains('ggskin_subelement') && me._lobby_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._lobby_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "Lobby";
		el.ggId="lobby_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 100px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 188px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._lobby_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._lobby_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._lobby_cloner.childNodes.length; i++) {
				var child=me._lobby_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._lobby_cloner.ggUpdatePosition=function (useTransition) {
			me._lobby_cloner.ggUpdate();
		}
		me._lobby_menu__content.appendChild(me._lobby_cloner);
		me._lobby_desktop.appendChild(me._lobby_menu);
		me.divSkin.appendChild(me._lobby_desktop);
		el=me._desktop=document.createElement('div');
		el.ggId="\u5206\u9694\u7dda--desktop";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='height : 20px;';
		hs+='left : 24px;';
		hs+='position : absolute;';
		hs+='top : 800px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._desktop.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._desktop.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._desktop);
		el=me.__flag2=document.createElement('div');
		els=me.__flag2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\u80b2\u6a02 flag";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='color : #000000;';
		hs+='height : 20px;';
		hs+='left : 41px;';
		hs+='position : absolute;';
		hs+='top : 31px;';
		hs+='visibility : hidden;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__flag2.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(player.getVariableValue('menu_entertainment', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')))));
			var hs = player._("\u80b2\u6a02 flag = %1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__flag2.ggUpdateText();
		player.addListener('varchanged_menu_entertainment', function() {
			me.__flag2.ggUpdateText();
		});
		el.appendChild(els);
		me.__flag2.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__flag2.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me.__flag2);
		el=me.__flag1=document.createElement('div');
		els=me.__flag1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\u666f\u89c0 flag";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='color : #000000;';
		hs+='height : 20px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 31px;';
		hs+='visibility : hidden;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__flag1.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(player.getVariableValue('menu_view', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')))));
			var hs = player._("\u666f\u89c0 flag = %1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__flag1.ggUpdateText();
		player.addListener('varchanged_menu_view', function() {
			me.__flag1.ggUpdateText();
		});
		el.appendChild(els);
		me.__flag1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__flag1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me.__flag1);
		el=me.__flag0=document.createElement('div');
		els=me.__flag0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\u4f4f\u623f flag";
		el.ggDx=50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='color : #000000;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((140px + 2px) / 2) + 50px);';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : hidden;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__flag0.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(player.getVariableValue('menu_room', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')))));
			var hs = player._("\u4f4f\u623f flag = %1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__flag0.ggUpdateText();
		player.addListener('varchanged_menu_room', function() {
			me.__flag0.ggUpdateText();
		});
		el.appendChild(els);
		me.__flag0.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__flag0.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me.__flag0);
		el=me.__flag=document.createElement('div');
		els=me.__flag__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\u5927\u5ef3 flag";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='color : #000000;';
		hs+='height : 20px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 30px;';
		hs+='visibility : hidden;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__flag.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(player.getVariableValue('menu_lobby', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')))));
			var hs = player._("\u5927\u5ef3 flag = %1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__flag.ggUpdateText();
		player.addListener('varchanged_menu_lobby', function() {
			me.__flag.ggUpdateText();
		});
		el.appendChild(els);
		me.__flag.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__flag.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me.__flag);
		el=me._text_5=document.createElement('div');
		els=me._text_5__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='color : #000000;';
		hs+='height : 25px;';
		hs+='left : 45px;';
		hs+='position : absolute;';
		hs+='top : 385px;';
		hs+='visibility : hidden;';
		hs+='width : 175px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_5.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(player.getVariableValue('vis_info_show', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')))));
			var hs = player._("info_show %1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_5.ggUpdateText();
		player.addListener('varchanged_vis_info_show', function() {
			me._text_5.ggUpdateText();
		});
		el.appendChild(els);
		me._text_5.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._text_5.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._text_5);
		el=me._text_4=document.createElement('div');
		els=me._text_4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='color : #000000;';
		hs+='height : 20px;';
		hs+='left : 26px;';
		hs+='position : absolute;';
		hs+='top : 94px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_4.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(player.getVariableValue('vis_info_popup', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')))));
			var hs = player._("popup %1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_4.ggUpdateText();
		player.addListener('varchanged_vis_info_popup', function() {
			me._text_4.ggUpdateText();
		});
		el.appendChild(els);
		me._text_4.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._text_4.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._text_4);
		el=me._text_3=document.createElement('div');
		els=me._text_3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='color : #000000;';
		hs+='height : 20px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 57px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_3.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(player.getVariableValue('vis_info_popup', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')))));
			var hs = player._("node : %1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_3.ggUpdateText();
		player.addListener('varchanged_vis_info_popup', function() {
			me._text_3.ggUpdateText();
		});
		el.appendChild(els);
		me._text_3.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._text_3.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._text_3);
		el=me._text_2=document.createElement('div');
		els=me._text_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='color : #000000;';
		hs+='height : 20px;';
		hs+='left : 24px;';
		hs+='position : absolute;';
		hs+='top : 24px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_2.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(player.getVariableValue('button_info', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')))));
			var hs = player._("button: %1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_2.ggUpdateText();
		player.addListener('varchanged_button_info', function() {
			me._text_2.ggUpdateText();
		});
		el.appendChild(els);
		me._text_2.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._text_2.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._text_2);
		el=me._timer_node_change=document.createElement('div');
		el.ggTimestamp=0;
		el.ggLastIsActive=false;
		el.ggTimeout=5000;
		el.ggId="timer_node_change";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._timer_node_change.ggIsActive=function() {
			return (me._timer_node_change.ggTimestamp + me._timer_node_change.ggTimeout) >= skin.ggCurrentTime;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._timer_node_change.ggDeactivate=function () {
			player.openNext(player.getVariableValue('node_data', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')),player.getVariableValue('node_view', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')));
		}
		me._timer_node_change.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._timer_node_change);
		el=me._map_code=document.createElement('div');
		el.ggId="map_code";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_code ";
		el.ggType='code';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_code.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._map_code.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._map_code);
		el=me._common=document.createElement('div');
		el.ggId="\u5206\u9694\u7dda--common";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='height : 20px;';
		hs+='left : 24px;';
		hs+='position : absolute;';
		hs+='top : 800px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._common.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._common.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._common);
		el=me._hotspot_info_button_m=document.createElement('div');
		el.ggId="hotspot_info button_M";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : calc(6%);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='top : 20px;';
		hs+='visibility : hidden;';
		hs+='width : calc(16.5% - 20px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspot_info_button_m.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._hotspot_info_button_m.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hotspot_info_button_m.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hotspot_info_button_m.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hotspot_info_button_m.style.transition='opacity 0s';
				if (me._hotspot_info_button_m.ggCurrentLogicStateAlpha == 0) {
					me._hotspot_info_button_m.style.visibility=me._hotspot_info_button_m.ggVisible?'inherit':'hidden';
					me._hotspot_info_button_m.style.opacity=1;
				}
				else {
					me._hotspot_info_button_m.style.visibility="hidden";
					me._hotspot_info_button_m.style.opacity=0;
				}
			}
		}
		me._hotspot_info_button_m.logicBlock_alpha();
		me._hotspot_info_button_m.ggUpdatePosition=function (useTransition) {
		}
		el=me._info_button_m=document.createElement('div');
		el.ggId="info_button_M";
		el.ggDx=0;
		el.ggDy=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(150,150,150,0.705882);';
		hs+='border-color : rgba(33,33,33,0.784314);';
		hs+='border-radius : 10px;';
		hs+='border-style : solid;';
		hs+='border-width : 2px 2px 2px 2px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 4px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 4px) / 2) - 1px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info_button_m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_button_m.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseDown['info_button_m'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else if (
				((player.getVariableValue('button_info') == true))
			)
			{
				newLogicStateBackgroundColor = 1;
			}
			else if (
				((me.elementMouseOver['info_button_m'] == true))
			)
			{
				newLogicStateBackgroundColor = 2;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._info_button_m.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._info_button_m.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._info_button_m.style.transition='background-color 0s, border-width 0s';
				if (me._info_button_m.ggCurrentLogicStateBackgroundColor == 0) {
					me._info_button_m.style.backgroundColor="rgba(100,100,100,0.862745)";
				}
				else if (me._info_button_m.ggCurrentLogicStateBackgroundColor == 1) {
					me._info_button_m.style.backgroundColor="rgba(255,255,255,1)";
				}
				else if (me._info_button_m.ggCurrentLogicStateBackgroundColor == 2) {
					me._info_button_m.style.backgroundColor="rgba(200,200,200,0.784314)";
				}
				else {
					me._info_button_m.style.backgroundColor="rgba(150,150,150,0.705882)";
				}
			}
		}
		me._info_button_m.logicBlock_backgroundcolor();
		me._info_button_m.logicBlock_borderwidth = function() {
			var newLogicStateBorderWidth;
			if (
				((me.elementMouseDown['info_button_m'] == true))
			)
			{
				newLogicStateBorderWidth = 0;
			}
			else if (
				((me.elementMouseOver['info_button_m'] == true))
			)
			{
				newLogicStateBorderWidth = 1;
			}
			else {
				newLogicStateBorderWidth = -1;
			}
			if (me._info_button_m.ggCurrentLogicStateBorderWidth != newLogicStateBorderWidth) {
				me._info_button_m.ggCurrentLogicStateBorderWidth = newLogicStateBorderWidth;
				me._info_button_m.style.transition='background-color 0s, border-width 0s';
				if (me._info_button_m.ggCurrentLogicStateBorderWidth == 0) {
					me._info_button_m.style.borderWidth="4px 1px 1px 4px";
					me._info_button_m.style.left = 'calc(50% - (100% / 2) - (5px / 2))';
					me._info_button_m.style.top = 'calc(50% - (100% / 2) - (5px / 2) + -1px)';
				}
				else if (me._info_button_m.ggCurrentLogicStateBorderWidth == 1) {
					me._info_button_m.style.borderWidth="1px 4px 4px 1px";
					me._info_button_m.style.left = 'calc(50% - (100% / 2) - (5px / 2))';
					me._info_button_m.style.top = 'calc(50% - (100% / 2) - (5px / 2) + -1px)';
				}
				else {
					me._info_button_m.style.borderWidth="2px 2px 2px 2px";
					me._info_button_m.style.left = 'calc(50% - (100% / 2) - (4px / 2))';
					me._info_button_m.style.top = 'calc(50% - (100% / 2) - (4px / 2) + -1px)';
				}
			}
		}
		me._info_button_m.logicBlock_borderwidth();
		me._info_button_m.onclick=function (e) {
			player.setVariableValue('vis_info_popup', !player.getVariableValue('vis_info_popup'));
			player.setVariableValue('button_info', !player.getVariableValue('button_info'));
			player.setVariableValue('vis_info_show', !player.getVariableValue('vis_info_show'));
		}
		me._info_button_m.onmouseenter=function (e) {
			me.elementMouseOver['info_button_m']=true;
			me._info_button_m.logicBlock_backgroundcolor();
			me._info_button_m.logicBlock_borderwidth();
		}
		me._info_button_m.onmousedown=function (e) {
			me.elementMouseDown['info_button_m']=true;
			me._info_button_m.logicBlock_backgroundcolor();
			me._info_button_m.logicBlock_borderwidth();
		}
		me._info_button_m.onmouseup=function (e) {
			me.elementMouseDown['info_button_m']=false;
			me._info_button_m.logicBlock_backgroundcolor();
			me._info_button_m.logicBlock_borderwidth();
		}
		me._info_button_m.onmouseleave=function (e) {
			me.elementMouseDown['info_button_m']=false;
			me.elementMouseOver['info_button_m']=false;
			me._info_button_m.logicBlock_backgroundcolor();
			me._info_button_m.logicBlock_backgroundcolor();
			me._info_button_m.logicBlock_borderwidth();
			me._info_button_m.logicBlock_borderwidth();
		}
		me._info_button_m.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_2_m=document.createElement('div');
		els=me._svg_2_m__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgR2VuZXJhdG9yOiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjgwMHB4IiBoZWlnaHQ9IjgwMHB4Ij4KIDxwYXRoIGQ9Ik0xMi41IDcuNWExIDEgMCAxIDEgMS0xIDEuMDAyIDEuMDAyIDAgMCAxLTEgMXpNMTMgMThWOWgtMnYxaDF2OGgtMXYxaDN2LTF6bTkuOC01LjVBMTAuMyAxMC4zIDAgMSAxIDEyLjUgMi4yYTEwLjI5NyAxMC'+
			'4yOTcgMCAwIDEgMTAuMyAxMC4zem0tMSAwYTkuMyA5LjMgMCAxIDAtOS4zIDkuMyA5LjMxIDkuMzEgMCAwIDAgOS4zLTkuM3oiLz4KIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KPC9zdmc+Cg==';
		me._svg_2_m__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		ela=me._svg_2_m__imga=document.createElement('img');
		ela.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE0LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgNDMzNjMpICAtLT4KPHN2ZyBiYXNlUHJvZmlsZT0iYmFzaWMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeD0iMHB4Ii'+
			'B4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDMyIDMyIiB3aWR0aD0iMzJweCIgeT0iMHB4IiBoZWlnaHQ9IjMycHgiPgogPGcgb3BhY2l0eT0iMC40Ij4KICA8Zz4KICAgPHBhdGggc3Ryb2tlPSIjM0MzQzNDIiBkPSJNMjYuNjA0LDE0LjEwM2gtMS45ODljLTAuNzM0LTMuMzUtMy4zNjgtNS45ODEtNi43MTYtNi43MTdWNS4zOTggICAgYzAtMS4wNDgtMC44NDktMS44OTktMS44OTctMS44OTljLTEuMDQ5LDAtMS44OTcsMC44NTEtMS44OTcsMS44OTl2MS45ODZjLTMuMzUyLDAuNzM1LTUuOTgz'+
			'LDMuMzY5LTYuNzIsNi43MTdINS4zOTggICAgQzQuMzQ4LDE0LjEwMSwzLjUsMTQuOTUxLDMuNSwxNnMwLjg1MSwxLjg5NiwxLjg5OSwxLjg5NmgxLjk4NWMwLjczNSwzLjM1LDMuMzY4LDUuOTg0LDYuNzIsNi43MTl2MS45ODkgICAgYzAsMS4wNDYsMC44NDgsMS44OTYsMS44OTcsMS44OTZjMS4wNDgsMCwxLjg5Ni0wLjg1MSwxLjg5Ni0xLjg5NnYtMS45ODljMy4zNTEtMC43MzYsNS45ODQtMy4zNjksNi43MTktNi43MTloMS45ODYgICAgYzEuMDQ5LDAsMS44OTctMC44NDgsMS44OTctMS44OTZDMjguNTAxLDE0Ljk1MSwyNy42NTIsMTQuMTAzLDI2LjYwNCwxNC4xMDN6IE0xNiwyMS4wMjljLT'+
			'IuNzc3LTAuMDA1LTUuMDIzLTIuMjUxLTUuMDMtNS4wMjYgICAgdi0wLjAwMWMwLTAuMDAxLDAtMC4wMDEsMC0wLjAwM2MwLjAwNi0yLjc3NywyLjI1My01LjAyMiw1LjAzLTUuMDI1YzIuNzc3LDAuMDA1LDUuMDI1LDIuMjUxLDUuMDI2LDUuMDI4aDAuMDAyICAgIEMyMS4wMjUsMTguNzc4LDE4Ljc3NywyMS4wMjQsMTYsMjEuMDI5eiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICA8L2c+CiAgPGNpcmNsZSBjeD0iMTYuMDAyIiBjeT0iMTYiIGZpbGw9IiNGRkZGRkYiIHI9IjIuMTA5Ii8+CiA8L2c+CiA8Zz4KICA8Zz4KICAgPHBhdGggc3Ryb2tlPSIjMDAwMDAwIiBkPSJNMjYuNjA0LDE0LjEwM2gt'+
			'MS45ODljLTAuNzM0LTMuMzUtMy4zNjgtNS45ODEtNi43MTYtNi43MTdWNS4zOTggICAgYzAtMS4wNDgtMC44NDktMS44OTktMS44OTctMS44OTljLTEuMDQ5LDAtMS44OTcsMC44NTEtMS44OTcsMS44OTl2MS45ODZjLTMuMzUyLDAuNzM1LTUuOTgzLDMuMzY5LTYuNzIsNi43MTdINS4zOTggICAgQzQuMzQ4LDE0LjEwMSwzLjUsMTQuOTUxLDMuNSwxNnMwLjg1MSwxLjg5NiwxLjg5OSwxLjg5NmgxLjk4NWMwLjczNSwzLjM1LDMuMzY4LDUuOTg0LDYuNzIsNi43MTl2MS45ODkgICAgYzAsMS4wNDYsMC44NDgsMS44OTYsMS44OTcsMS44OTZjMS4wNDgsMCwxLjg5Ni0wLjg1MSwxLjg5Ni0xLjg5Nn'+
			'YtMS45ODljMy4zNTEtMC43MzYsNS45ODQtMy4zNjksNi43MTktNi43MTloMS45ODYgICAgYzEuMDQ5LDAsMS44OTctMC44NDgsMS44OTctMS44OTZDMjguNTAxLDE0Ljk1MSwyNy42NTIsMTQuMTAzLDI2LjYwNCwxNC4xMDN6IE0xNiwyMS4wMjljLTIuNzc3LTAuMDA1LTUuMDIzLTIuMjUxLTUuMDMtNS4wMjYgICAgdi0wLjAwMWMwLTAuMDAxLDAtMC4wMDEsMC0wLjAwM2MwLjAwNi0yLjc3NywyLjI1My01LjAyMiw1LjAzLTUuMDI1YzIuNzc3LDAuMDA1LDUuMDI1LDIuMjUxLDUuMDI2LDUuMDI4aDAuMDAyICAgIEMyMS4wMjUsMTguNzc4LDE4Ljc3NywyMS4wMjQsMTYsMjEuMDI5eiIgZmlsbD0i'+
			'I0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIwLjIiLz4KICA8L2c+CiAgPGNpcmNsZSBjeD0iMTYuMDAyIiBjeT0iMTYiIGZpbGw9IiNGRkZGRkYiIHI9IjIuMTA5Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._svg_2_m__imga.setAttribute('src',hs);
		ela.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		ela['ondragstart']=function() { return false; };
		el.appendChild(ela);
		el.ggSubElementActive = ela;
		el.ggId="Svg 2_M";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 24px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_2_m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_2_m.onmousedown=function (e) {
			me._svg_2_m__imga.style.visibility='inherit';
		}
		me._svg_2_m.onmouseup=function (e) {
			me._svg_2_m__imga.style.visibility='hidden';
		}
		me._svg_2_m.onmouseleave=function (e) {
			me._svg_2_m__imga.style.visibility='hidden';
		}
		me._svg_2_m.ggUpdatePosition=function (useTransition) {
		}
		me._info_button_m.appendChild(me._svg_2_m);
		me._hotspot_info_button_m.appendChild(me._info_button_m);
		me.divSkin.appendChild(me._hotspot_info_button_m);
		el=me._monitor_info_m=document.createElement('div');
		els=me._monitor_info_m__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="monitor_info_M";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(79,79,79,0.627451);';
		hs+='border : 1px solid rgba(0,0,0,0);';
		hs+='border-radius : 10px;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._monitor_info_m.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._monitor_info_m.ggUpdateText();
		player.addListener('changenode', function() {
			me._monitor_info_m.ggUpdateText();
		});
		el.appendChild(els);
		me._monitor_info_m.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._monitor_info_m.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._monitor_info_m.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._monitor_info_m.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._monitor_info_m.style.transition='';
				if (me._monitor_info_m.ggCurrentLogicStateVisible == 0) {
					me._monitor_info_m.style.visibility=(Number(me._monitor_info_m.style.opacity)>0||!me._monitor_info_m.style.opacity)?'inherit':'hidden';
					me._monitor_info_m.ggVisible=true;
				}
				else {
					me._monitor_info_m.style.visibility="hidden";
					me._monitor_info_m.ggVisible=false;
				}
			}
		}
		me._monitor_info_m.logicBlock_visible();
		me._monitor_info_m.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._monitor_info_m);
		el=me._node_info_m=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="node info_M";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : calc(25% - 40px);';
		hs+='left : calc(50% - ((calc(80% - 40px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(25% - 40px) + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : calc(80% - 40px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._node_info_m.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._node_info_m.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('var_map') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._node_info_m.ggCurrentLogicStateSize != newLogicStateSize) {
				me._node_info_m.ggCurrentLogicStateSize = newLogicStateSize;
				me._node_info_m.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms, left 1000ms ease 0ms, top 1000ms ease 0ms';
				if (me._node_info_m.ggCurrentLogicStateSize == 0) {
					me._node_info_m.style.width='0';
					me._node_info_m.style.height='0';
					me._node_info_m.style.left = 'calc(50% - (0 / 2))';
					me._node_info_m.style.top = 'calc(50% - (0 / 2))';
					setTimeout(function() {skin.updateSize(me._node_info_m);}, 1050);
				}
				else {
					me._node_info_m.style.width='calc(80% - 40px)';
					me._node_info_m.style.height='calc(25% - 40px)';
					me._node_info_m.style.left = 'calc(50% - (calc(80% - 40px) / 2))';
					me._node_info_m.style.top = 'calc(50% - (calc(25% - 40px) / 2))';
					setTimeout(function() {skin.updateSize(me._node_info_m);}, 1050);
				}
			}
		}
		me._node_info_m.logicBlock_size();
		me._node_info_m.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('resp_phone') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_info_popup') == true)) && 
				((player._(me.ggUserdata.description) != ""))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node_info_m.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node_info_m.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._node_info_m.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms, left 1000ms ease 0ms, top 1000ms ease 0ms';
				if (me._node_info_m.ggCurrentLogicStateVisible == 0) {
					me._node_info_m.style.visibility="hidden";
					me._node_info_m.ggVisible=false;
				}
				else if (me._node_info_m.ggCurrentLogicStateVisible == 1) {
					me._node_info_m.style.visibility=(Number(me._node_info_m.style.opacity)>0||!me._node_info_m.style.opacity)?'inherit':'hidden';
					me._node_info_m.ggVisible=true;
				}
				else {
					me._node_info_m.style.visibility="hidden";
					me._node_info_m.ggVisible=false;
				}
			}
		}
		me._node_info_m.logicBlock_visible();
		me._node_info_m.ggUpdatePosition=function (useTransition) {
		}
		el=me._info_bg_m=document.createElement('div');
		el.ggId="info_bg_M";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(80,80,80,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info_bg_m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_bg_m.ggUpdatePosition=function (useTransition) {
		}
		me._node_info_m.appendChild(me._info_bg_m);
		el=me._node_description_m=document.createElement('div');
		els=me._node_description_m__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node_description_M";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat_regular";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 90%;';
		hs+='left : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		hs+="line-height: 1.5;";
		els.setAttribute('style',hs);
		me._node_description_m.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.description)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._node_description_m.ggUpdateText();
		player.addListener('changenode', function() {
			me._node_description_m.ggUpdateText();
		});
		el.appendChild(els);
		me._node_description_m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_description_m.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_desc_in_maps') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node_description_m.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node_description_m.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._node_description_m.style.transition='';
				if (me._node_description_m.ggCurrentLogicStateVisible == 0) {
					me._node_description_m.style.visibility="hidden";
					me._node_description_m.ggVisible=false;
				}
				else {
					me._node_description_m.style.visibility=(Number(me._node_description_m.style.opacity)>0||!me._node_description_m.style.opacity)?'inherit':'hidden';
					me._node_description_m.ggVisible=true;
				}
			}
		}
		me._node_description_m.logicBlock_visible();
		me._node_description_m.ggUpdatePosition=function (useTransition) {
		}
		me._node_info_m.appendChild(me._node_description_m);
		me.divSkin.appendChild(me._node_info_m);
		el=me._respon_phone_flag=document.createElement('div');
		els=me._respon_phone_flag__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="respon_phone_flag";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='color : #000000;';
		hs+='height : 20px;';
		hs+='left : 42px;';
		hs+='position : absolute;';
		hs+='top : 24px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._respon_phone_flag.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(player.getVariableValue('resp_phone', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')))));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._respon_phone_flag.ggUpdateText();
		player.addListener('varchanged_resp_phone', function() {
			me._respon_phone_flag.ggUpdateText();
		});
		el.appendChild(els);
		me._respon_phone_flag.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._respon_phone_flag.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._respon_phone_flag);
		el=me._room_desktop_m=document.createElement('div');
		el.ggId="room_desktop_M";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 20px;';
		hs+='height : 80px;';
		hs+='left : calc(50% - ((calc(95% - 50px) + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : calc(95% - 50px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._room_desktop_m.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._room_desktop_m.ggUpdatePosition=function (useTransition) {
		}
		el=me._room_menu_m=document.createElement('div');
		els=me._room_menu_m__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 79px;';
		hs+='left : 50%;';
		hs+='margin-left : -223.5px;';
		hs+='margin-top : -39.5px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 50%;';
		hs+='width : 447px;';
		hs+="";
		els.setAttribute('style',hs);
		me._room_menu_m.ggScrollByX = function(diffX) {
			if(!me._room_menu_m.ggHorScrollVisible || diffX == 0 || me._room_menu_m.ggHPercentVisible >= 1.0) return;
			me._room_menu_m.ggScrollPosX = (me._room_menu_m__horScrollFg.offsetLeft + diffX);
			me._room_menu_m.ggScrollPosX = Math.max(me._room_menu_m.ggScrollPosX, 0);
			me._room_menu_m.ggScrollPosX = Math.min(me._room_menu_m.ggScrollPosX, me._room_menu_m__horScrollBg.offsetWidth - me._room_menu_m__horScrollFg.offsetWidth);
			me._room_menu_m__horScrollFg.style.left = me._room_menu_m.ggScrollPosX + 'px';
			let percentScrolled = me._room_menu_m.ggScrollPosX / (me._room_menu_m__horScrollBg.offsetWidth - me._room_menu_m__horScrollFg.offsetWidth);
			me._room_menu_m__content.style.left = -(Math.round((me._room_menu_m.ggContentWidth * (1.0 - me._room_menu_m.ggHPercentVisible)) * percentScrolled)) + me._room_menu_m.ggContentLeftOffset + 'px';
			me._room_menu_m.ggScrollPosXPercent = (me._room_menu_m__horScrollFg.offsetLeft / me._room_menu_m__horScrollBg.offsetWidth);
		}
		me._room_menu_m.ggScrollByXSmooth = function(diffX) {
			if(!me._room_menu_m.ggHorScrollVisible || diffX == 0 || me._room_menu_m.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._room_menu_m.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._room_menu_m.ggScrollPosX >= me._room_menu_m__horScrollBg.offsetWidth - me._room_menu_m__horScrollFg.offsetWidth)) {
					me._room_menu_m.ggScrollPosX = Math.min(me._room_menu_m.ggScrollPosX, me._room_menu_m__horScrollBg.offsetWidth - me._room_menu_m__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._room_menu_m.ggScrollPosX <= 0)) {
					me._room_menu_m.ggScrollPosX = Math.max(me._room_menu_m.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._room_menu_m__horScrollFg.style.left = me._room_menu_m.ggScrollPosX + 'px';
			let percentScrolled = me._room_menu_m.ggScrollPosX / (me._room_menu_m__horScrollBg.offsetWidth - me._room_menu_m__horScrollFg.offsetWidth);
			me._room_menu_m__content.style.left = -(Math.round((me._room_menu_m.ggContentWidth * (1.0 - me._room_menu_m.ggHPercentVisible)) * percentScrolled)) + me._room_menu_m.ggContentLeftOffset + 'px';
			me._room_menu_m.ggScrollPosXPercent = (me._room_menu_m__horScrollFg.offsetLeft / me._room_menu_m__horScrollBg.offsetWidth);
			}, 10);
		}
		me._room_menu_m.ggScrollByY = function(diffY) {
			if(!me._room_menu_m.ggVertScrollVisible || diffY == 0 || me._room_menu_m.ggVPercentVisible >= 1.0) return;
			me._room_menu_m.ggScrollPosY = (me._room_menu_m__vertScrollFg.offsetTop + diffY);
			me._room_menu_m.ggScrollPosY = Math.max(me._room_menu_m.ggScrollPosY, 0);
			me._room_menu_m.ggScrollPosY = Math.min(me._room_menu_m.ggScrollPosY, me._room_menu_m__vertScrollBg.offsetHeight - me._room_menu_m__vertScrollFg.offsetHeight);
			me._room_menu_m__vertScrollFg.style.top = me._room_menu_m.ggScrollPosY + 'px';
			let percentScrolled = me._room_menu_m.ggScrollPosY / (me._room_menu_m__vertScrollBg.offsetHeight - me._room_menu_m__vertScrollFg.offsetHeight);
			me._room_menu_m__content.style.top = -(Math.round((me._room_menu_m.ggContentHeight * (1.0 - me._room_menu_m.ggVPercentVisible)) * percentScrolled)) + me._room_menu_m.ggContentTopOffset + 'px';
			me._room_menu_m.ggScrollPosYPercent = (me._room_menu_m__vertScrollFg.offsetTop / me._room_menu_m__vertScrollBg.offsetHeight);
		}
		me._room_menu_m.ggScrollByYSmooth = function(diffY) {
			if(!me._room_menu_m.ggVertScrollVisible || diffY == 0 || me._room_menu_m.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._room_menu_m.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._room_menu_m.ggScrollPosY >= me._room_menu_m__vertScrollBg.offsetHeight - me._room_menu_m__vertScrollFg.offsetHeight)) {
					me._room_menu_m.ggScrollPosY = Math.min(me._room_menu_m.ggScrollPosY, me._room_menu_m__vertScrollBg.offsetHeight - me._room_menu_m__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._room_menu_m.ggScrollPosY <= 0)) {
					me._room_menu_m.ggScrollPosY = Math.max(me._room_menu_m.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._room_menu_m__vertScrollFg.style.top = me._room_menu_m.ggScrollPosY + 'px';
			let percentScrolled = me._room_menu_m.ggScrollPosY / (me._room_menu_m__vertScrollBg.offsetHeight - me._room_menu_m__vertScrollFg.offsetHeight);
			me._room_menu_m__content.style.top = -(Math.round((me._room_menu_m.ggContentHeight * (1.0 - me._room_menu_m.ggVPercentVisible)) * percentScrolled)) + me._room_menu_m.ggContentTopOffset + 'px';
			me._room_menu_m.ggScrollPosYPercent = (me._room_menu_m__vertScrollFg.offsetTop / me._room_menu_m__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._room_menu_m.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._room_menu_m.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._room_menu_m.ggHPercentVisible);
					me._room_menu_m.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._room_menu_m.clientWidth - (me._room_menu_m.ggVertScrollVisible ? 5 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._room_menu_m.clientWidth - (me._room_menu_m.ggVertScrollVisible ? 5 : 0))) * me._room_menu_m.ggHPercentVisible);
					me._room_menu_m.ggScrollByXSmooth(diffX);
				}
			}
			if (me._room_menu_m.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._room_menu_m.ggVPercentVisible);
					me._room_menu_m.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._room_menu_m.clientHeight - (me._room_menu_m.ggHorScrollVisible ? 5 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._room_menu_m.clientHeight - (me._room_menu_m.ggHorScrollVisible ? 5 : 0))) * me._room_menu_m.ggVPercentVisible);
					me._room_menu_m.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._room_menu_m__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._room_menu_m.ggDragInertiaX *= 0.96;
				me._room_menu_m.ggDragInertiaY *= 0.96;
				me._room_menu_m.ggScrollByX(me._room_menu_m.ggDragInertiaX);
				me._room_menu_m.ggScrollByY(me._room_menu_m.ggDragInertiaY);
				if (Math.abs(me._room_menu_m.ggDragInertiaX) < 1.0 && Math.abs(me._room_menu_m.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._room_menu_m__content.onmouseup = null;
			me._room_menu_m__content.onmousemove = null;
			me._room_menu_m__content.ontouchend = null;
			me._room_menu_m__content.ontouchmove = null;
			me._room_menu_m__content.onpointerup = null;
			me._room_menu_m__content.onpointermove = null;
			setTimeout(function() { me._room_menu_m.ggIsDragging = false; }, 100);
		}
		me._room_menu_m__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._room_menu_m.ggDragStartX) > 10 || Math.abs(eventY - me._room_menu_m.ggDragStartY) > 10) me._room_menu_m.ggIsDragging = true;
			var diffX = (eventX - me._room_menu_m.ggDragLastX) * me._room_menu_m.ggHPercentVisible;
			var diffY = (eventY - me._room_menu_m.ggDragLastY) * me._room_menu_m.ggVPercentVisible;
			me._room_menu_m.ggDragInertiaX = -diffX;
			me._room_menu_m.ggDragInertiaY = -diffY;
			me._room_menu_m.ggDragLastX = eventX;
			me._room_menu_m.ggDragLastY = eventY;
			me._room_menu_m.ggScrollByX(-diffX);
			me._room_menu_m.ggScrollByY(-diffY);
		}
		me._room_menu_m__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._room_menu_m.ggDragLastX = me._room_menu_m.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._room_menu_m.ggDragLastY = me._room_menu_m.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._room_menu_m__content.onmouseup = me._room_menu_m__content.mousetouchend;
			me._room_menu_m__content.ontouchend = me._room_menu_m__content.mousetouchend;
			me._room_menu_m__content.onmousemove = me._room_menu_m__content.mousetouchmove;
			me._room_menu_m__content.ontouchmove = me._room_menu_m__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._room_menu_m__content.onpointerup = me._room_menu_m__content.ontouchend;
				me._room_menu_m__content.onpointermove = me._room_menu_m__content.ontouchmove;
			}
		}
		els.onmousedown = me._room_menu_m__content.mousetouchstart;
		els.ontouchstart = me._room_menu_m__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._room_menu_m__content.mousetouchstart;
		}
		elHorScrollBg = me._room_menu_m__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 448px; height: 5px; background-color: rgba(128,128,128,0); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._room_menu_m__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 448px; height: 5px; background-color: rgba(255,255,255,0.666667); pointer-events: auto;');
		me._room_menu_m.ggScrollPosX = 0;
		me._room_menu_m.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._room_menu_m.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._room_menu_m.ggDragInertiaX *= 0.96;
					me._room_menu_m.ggScrollByX(me._room_menu_m.ggDragInertiaX);
					if (Math.abs(me._room_menu_m.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._room_menu_m.ggDragLastX;
				me._room_menu_m.ggDragInertiaX = diffX;
				me._room_menu_m.ggDragLastX = e.clientX;
				me._room_menu_m.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._room_menu_m.ggDragLastX = t ? t[0].clientX : e.clientX;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._room_menu_m.ggDragInertiaX *= 0.96;
					me._room_menu_m.ggScrollByX(me._room_menu_m.ggDragInertiaX);
					if (Math.abs(me._room_menu_m.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me._room_menu_m.ggDragLastX;
				me._room_menu_m.ggDragInertiaX = diffX;
				me._room_menu_m.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._room_menu_m.ggScrollByX(diffX);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elHorScrollFg.onpointerdown = elHorScrollFg.ontouchstart;
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._room_menu_m.ggScrollWidth;
			if (e.offsetX < me._room_menu_m.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._room_menu_m.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._room_menu_m__horScrollBg.getBoundingClientRect();
			var diffX = me._room_menu_m.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._room_menu_m.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._room_menu_m.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me._room_menu_m.ggScrollByXSmooth(30 * me._room_menu_m.ggHPercentVisible * wheelDelta);
		});
		elCornerBg = me._room_menu_m__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 5px; height: 5px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="room_menu_M";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -100px;';
		hs+='height : 80px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._room_menu_m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._room_menu_m.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('menu_room') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._room_menu_m.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._room_menu_m.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._room_menu_m.style.transition='left 1000ms ease 0ms, bottom 1000ms ease 0ms, width 1000ms ease 0ms, height 1000ms ease 0ms, left 1000ms ease 0ms, opacity 1500ms ease 0ms';
				if (me._room_menu_m.ggCurrentLogicStatePosition == 0) {
					me._room_menu_m.style.left = 'calc(50% - (100% / 2))';
					me._room_menu_m.style.bottom='0px';
				}
				else {
					me._room_menu_m.style.left='calc(50% - ((100% + 0px) / 2) + 0px)';
					me._room_menu_m.style.bottom='-100px';
				}
			}
		}
		me._room_menu_m.logicBlock_position();
		me._room_menu_m.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('var_map') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._room_menu_m.ggCurrentLogicStateSize != newLogicStateSize) {
				me._room_menu_m.ggCurrentLogicStateSize = newLogicStateSize;
				me._room_menu_m.style.transition='left 1000ms ease 0ms, bottom 1000ms ease 0ms, width 1000ms ease 0ms, height 1000ms ease 0ms, left 1000ms ease 0ms, opacity 1500ms ease 0ms';
				if (me._room_menu_m.ggCurrentLogicStateSize == 0) {
					me._room_menu_m.style.width='0%';
					me._room_menu_m.style.height='0px';
					me._room_menu_m.style.left = 'calc(50% - (0% / 2))';
					setTimeout(function() {skin.updateSize(me._room_menu_m);}, 1050);
				}
				else {
					me._room_menu_m.style.width='100%';
					me._room_menu_m.style.height='80px';
					me._room_menu_m.style.left = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me._room_menu_m);}, 1050);
				}
			}
		}
		me._room_menu_m.logicBlock_size();
		me._room_menu_m.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('menu_room') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._room_menu_m.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._room_menu_m.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._room_menu_m.style.transition='left 1000ms ease 0ms, bottom 1000ms ease 0ms, width 1000ms ease 0ms, height 1000ms ease 0ms, left 1000ms ease 0ms, opacity 1500ms ease 0ms';
				if (me._room_menu_m.ggCurrentLogicStateAlpha == 0) {
					me._room_menu_m.style.visibility=me._room_menu_m.ggVisible?'inherit':'hidden';
					me._room_menu_m.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._room_menu_m.style.opacity == 0.0) { me._room_menu_m.style.visibility="hidden"; } }, 1505);
					me._room_menu_m.style.opacity=0;
				}
			}
		}
		me._room_menu_m.logicBlock_alpha();
		me._room_menu_m.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				var containerWidth = offsetWidthWithScale;
				if (this.ggVertScrollVisible) containerWidth -= 5;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = ((contentWidth/-2) - (this.ggVertScrollVisible ? (5/2) : 0)) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				var containerHeight = this.clientHeight;
				if (this.ggHorScrollVisible) containerHeight -= 5;
				if (contentHeight < containerHeight) {
					this.ggContent.style.top = '50%';
					this.ggContent.style.marginTop = ((contentHeight/-2) - (this.ggHorScrollVisible ? (5/2) : 0))  + 'px';
				}
				else {
					this.ggContent.style.top = this.ggContentTopOffset + 'px';
					this.ggContent.style.marginTop = '0px';
				}
				if (contentWidth > Math.ceil(offsetWidthWithScale)) {
					me._room_menu_m__horScrollBg.style.visibility = 'inherit';
					me._room_menu_m__horScrollFg.style.visibility = 'inherit';
					me._room_menu_m.ggHorScrollVisible = true;
				} else {
					me._room_menu_m__horScrollBg.style.visibility = 'hidden';
					me._room_menu_m__horScrollFg.style.visibility = 'hidden';
					me._room_menu_m.ggHorScrollVisible = false;
				}
				if(me._room_menu_m.ggHorScrollVisible) {
					me._room_menu_m.ggAvailableHeight = me._room_menu_m.clientHeight - 5;
					if (me._room_menu_m.ggVertScrollVisible) {
						me._room_menu_m.ggAvailableWidth = me._room_menu_m.clientWidth - 5;
						me._room_menu_m.ggAvailableWidthWithScale = me._room_menu_m.getBoundingClientRect().width - me._room_menu_m__horScrollBg.getBoundingClientRect().height;
					} else {
						me._room_menu_m.ggAvailableWidth = me._room_menu_m.clientWidth;
						me._room_menu_m.ggAvailableWidthWithScale = me._room_menu_m.getBoundingClientRect().width;
					}
					me._room_menu_m__horScrollBg.style.width = me._room_menu_m.ggAvailableWidth + 'px';
					me._room_menu_m.ggHPercentVisible = contentWidth != 0 ? me._room_menu_m.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me._room_menu_m.ggHPercentVisible > 1.0) me._room_menu_m.ggHPercentVisible = 1.0;
					me._room_menu_m.ggScrollWidth = Math.round(me._room_menu_m__horScrollBg.offsetWidth * me._room_menu_m.ggHPercentVisible);
					me._room_menu_m__horScrollFg.style.width = me._room_menu_m.ggScrollWidth + 'px';
					me._room_menu_m.ggScrollPosX = me._room_menu_m.ggScrollPosXPercent * me._room_menu_m.ggAvailableWidth;
					me._room_menu_m.ggScrollPosX = Math.min(me._room_menu_m.ggScrollPosX, me._room_menu_m__horScrollBg.offsetWidth - me._room_menu_m__horScrollFg.offsetWidth);
					me._room_menu_m__horScrollFg.style.left = me._room_menu_m.ggScrollPosX + 'px';
					if (me._room_menu_m.ggHPercentVisible < 1.0) {
						let percentScrolled = me._room_menu_m.ggScrollPosX / (me._room_menu_m__horScrollBg.offsetWidth - me._room_menu_m__horScrollFg.offsetWidth);
						me._room_menu_m__content.style.left = -(Math.round((me._room_menu_m.ggContentWidth * (1.0 - me._room_menu_m.ggHPercentVisible)) * percentScrolled)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me._room_menu_m.ggAvailableHeight = me._room_menu_m.clientHeight;
					me._room_menu_m.ggScrollPosX = 0;
					me._room_menu_m.ggScrollPosXPercent = 0.0;
				}
				if(horScrollWasVisible != me._room_menu_m.ggHorScrollVisible || vertScrollWasVisible != me._room_menu_m.ggVertScrollVisible) {
					skin.updateSize(me._room_menu_m);
					me._room_menu_m.ggUpdatePosition();
				}
			}
		}
		el=me._room_tint_m=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._room_tint_m;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="room_tint_M";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(33,33,33,0.501961);';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._room_tint_m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._room_tint_m.ggUpdatePosition=function (useTransition) {
		}
		me._room_menu_m__content.appendChild(me._room_tint_m);
		el=me._room_cloner_m=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._room_cloner_m;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 94;
		el.ggHeight = 80;
		el.ggSizeChanged = false;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._room_cloner_m.ggUpdating == true) return;
			me._room_cloner_m.ggUpdating = true;
			var el=me._room_cloner_m;
			var curNumRows = 0;
			curNumRows = me._room_cloner_m.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && !el.ggSizeChanged && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._room_cloner_m.ggUpdating = false;
				return;
			} else {
				el.ggSizeChanged = false;
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._room_cloner_m.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._room_cloner_m.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._room_cloner_m.getFilteredNodes(tourNodes, filter);
			me._room_cloner_m.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._room_cloner_m.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._room_cloner_m.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._room_cloner_m.ggWidth) + 'px';
				parameter.width=me._room_cloner_m.ggWidth + 'px';
				parameter.height=me._room_cloner_m.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_room_cloner_m_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					row = 0;
					column++;
					el.ggNumCols++;
				}
			}
			me._room_cloner_m.ggNodeCount = me._room_cloner_m.ggNumFilterPassed;
			me._room_cloner_m.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._room_cloner_m.parentNode && me._room_cloner_m.parentNode.classList.contains('ggskin_subelement') && me._room_cloner_m.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._room_cloner_m.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "room";
		el.ggId="room_cloner_M";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 80px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 94px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._room_cloner_m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._room_cloner_m.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._room_cloner_m.childNodes.length; i++) {
				var child=me._room_cloner_m.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._room_cloner_m.ggUpdatePosition=function (useTransition) {
			me._room_cloner_m.ggUpdate();
		}
		me._room_menu_m__content.appendChild(me._room_cloner_m);
		me._room_desktop_m.appendChild(me._room_menu_m);
		me.divSkin.appendChild(me._room_desktop_m);
		el=me._view_desktop_m=document.createElement('div');
		el.ggId="view_desktop_M";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 20px;';
		hs+='height : 80px;';
		hs+='left : calc(50% - ((calc(95% - 50px) + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : calc(95% - 50px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._view_desktop_m.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._view_desktop_m.ggUpdatePosition=function (useTransition) {
		}
		el=me._view_menu_m=document.createElement('div');
		els=me._view_menu_m__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 79px;';
		hs+='left : 50%;';
		hs+='margin-left : -223.5px;';
		hs+='margin-top : -39.5px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 50%;';
		hs+='width : 447px;';
		hs+="";
		els.setAttribute('style',hs);
		me._view_menu_m.ggScrollByX = function(diffX) {
			if(!me._view_menu_m.ggHorScrollVisible || diffX == 0 || me._view_menu_m.ggHPercentVisible >= 1.0) return;
			me._view_menu_m.ggScrollPosX = (me._view_menu_m__horScrollFg.offsetLeft + diffX);
			me._view_menu_m.ggScrollPosX = Math.max(me._view_menu_m.ggScrollPosX, 0);
			me._view_menu_m.ggScrollPosX = Math.min(me._view_menu_m.ggScrollPosX, me._view_menu_m__horScrollBg.offsetWidth - me._view_menu_m__horScrollFg.offsetWidth);
			me._view_menu_m__horScrollFg.style.left = me._view_menu_m.ggScrollPosX + 'px';
			let percentScrolled = me._view_menu_m.ggScrollPosX / (me._view_menu_m__horScrollBg.offsetWidth - me._view_menu_m__horScrollFg.offsetWidth);
			me._view_menu_m__content.style.left = -(Math.round((me._view_menu_m.ggContentWidth * (1.0 - me._view_menu_m.ggHPercentVisible)) * percentScrolled)) + me._view_menu_m.ggContentLeftOffset + 'px';
			me._view_menu_m.ggScrollPosXPercent = (me._view_menu_m__horScrollFg.offsetLeft / me._view_menu_m__horScrollBg.offsetWidth);
		}
		me._view_menu_m.ggScrollByXSmooth = function(diffX) {
			if(!me._view_menu_m.ggHorScrollVisible || diffX == 0 || me._view_menu_m.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._view_menu_m.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._view_menu_m.ggScrollPosX >= me._view_menu_m__horScrollBg.offsetWidth - me._view_menu_m__horScrollFg.offsetWidth)) {
					me._view_menu_m.ggScrollPosX = Math.min(me._view_menu_m.ggScrollPosX, me._view_menu_m__horScrollBg.offsetWidth - me._view_menu_m__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._view_menu_m.ggScrollPosX <= 0)) {
					me._view_menu_m.ggScrollPosX = Math.max(me._view_menu_m.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._view_menu_m__horScrollFg.style.left = me._view_menu_m.ggScrollPosX + 'px';
			let percentScrolled = me._view_menu_m.ggScrollPosX / (me._view_menu_m__horScrollBg.offsetWidth - me._view_menu_m__horScrollFg.offsetWidth);
			me._view_menu_m__content.style.left = -(Math.round((me._view_menu_m.ggContentWidth * (1.0 - me._view_menu_m.ggHPercentVisible)) * percentScrolled)) + me._view_menu_m.ggContentLeftOffset + 'px';
			me._view_menu_m.ggScrollPosXPercent = (me._view_menu_m__horScrollFg.offsetLeft / me._view_menu_m__horScrollBg.offsetWidth);
			}, 10);
		}
		me._view_menu_m.ggScrollByY = function(diffY) {
			if(!me._view_menu_m.ggVertScrollVisible || diffY == 0 || me._view_menu_m.ggVPercentVisible >= 1.0) return;
			me._view_menu_m.ggScrollPosY = (me._view_menu_m__vertScrollFg.offsetTop + diffY);
			me._view_menu_m.ggScrollPosY = Math.max(me._view_menu_m.ggScrollPosY, 0);
			me._view_menu_m.ggScrollPosY = Math.min(me._view_menu_m.ggScrollPosY, me._view_menu_m__vertScrollBg.offsetHeight - me._view_menu_m__vertScrollFg.offsetHeight);
			me._view_menu_m__vertScrollFg.style.top = me._view_menu_m.ggScrollPosY + 'px';
			let percentScrolled = me._view_menu_m.ggScrollPosY / (me._view_menu_m__vertScrollBg.offsetHeight - me._view_menu_m__vertScrollFg.offsetHeight);
			me._view_menu_m__content.style.top = -(Math.round((me._view_menu_m.ggContentHeight * (1.0 - me._view_menu_m.ggVPercentVisible)) * percentScrolled)) + me._view_menu_m.ggContentTopOffset + 'px';
			me._view_menu_m.ggScrollPosYPercent = (me._view_menu_m__vertScrollFg.offsetTop / me._view_menu_m__vertScrollBg.offsetHeight);
		}
		me._view_menu_m.ggScrollByYSmooth = function(diffY) {
			if(!me._view_menu_m.ggVertScrollVisible || diffY == 0 || me._view_menu_m.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._view_menu_m.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._view_menu_m.ggScrollPosY >= me._view_menu_m__vertScrollBg.offsetHeight - me._view_menu_m__vertScrollFg.offsetHeight)) {
					me._view_menu_m.ggScrollPosY = Math.min(me._view_menu_m.ggScrollPosY, me._view_menu_m__vertScrollBg.offsetHeight - me._view_menu_m__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._view_menu_m.ggScrollPosY <= 0)) {
					me._view_menu_m.ggScrollPosY = Math.max(me._view_menu_m.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._view_menu_m__vertScrollFg.style.top = me._view_menu_m.ggScrollPosY + 'px';
			let percentScrolled = me._view_menu_m.ggScrollPosY / (me._view_menu_m__vertScrollBg.offsetHeight - me._view_menu_m__vertScrollFg.offsetHeight);
			me._view_menu_m__content.style.top = -(Math.round((me._view_menu_m.ggContentHeight * (1.0 - me._view_menu_m.ggVPercentVisible)) * percentScrolled)) + me._view_menu_m.ggContentTopOffset + 'px';
			me._view_menu_m.ggScrollPosYPercent = (me._view_menu_m__vertScrollFg.offsetTop / me._view_menu_m__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._view_menu_m.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._view_menu_m.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._view_menu_m.ggHPercentVisible);
					me._view_menu_m.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._view_menu_m.clientWidth - (me._view_menu_m.ggVertScrollVisible ? 5 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._view_menu_m.clientWidth - (me._view_menu_m.ggVertScrollVisible ? 5 : 0))) * me._view_menu_m.ggHPercentVisible);
					me._view_menu_m.ggScrollByXSmooth(diffX);
				}
			}
			if (me._view_menu_m.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._view_menu_m.ggVPercentVisible);
					me._view_menu_m.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._view_menu_m.clientHeight - (me._view_menu_m.ggHorScrollVisible ? 5 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._view_menu_m.clientHeight - (me._view_menu_m.ggHorScrollVisible ? 5 : 0))) * me._view_menu_m.ggVPercentVisible);
					me._view_menu_m.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._view_menu_m__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._view_menu_m.ggDragInertiaX *= 0.96;
				me._view_menu_m.ggDragInertiaY *= 0.96;
				me._view_menu_m.ggScrollByX(me._view_menu_m.ggDragInertiaX);
				me._view_menu_m.ggScrollByY(me._view_menu_m.ggDragInertiaY);
				if (Math.abs(me._view_menu_m.ggDragInertiaX) < 1.0 && Math.abs(me._view_menu_m.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._view_menu_m__content.onmouseup = null;
			me._view_menu_m__content.onmousemove = null;
			me._view_menu_m__content.ontouchend = null;
			me._view_menu_m__content.ontouchmove = null;
			me._view_menu_m__content.onpointerup = null;
			me._view_menu_m__content.onpointermove = null;
			setTimeout(function() { me._view_menu_m.ggIsDragging = false; }, 100);
		}
		me._view_menu_m__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._view_menu_m.ggDragStartX) > 10 || Math.abs(eventY - me._view_menu_m.ggDragStartY) > 10) me._view_menu_m.ggIsDragging = true;
			var diffX = (eventX - me._view_menu_m.ggDragLastX) * me._view_menu_m.ggHPercentVisible;
			var diffY = (eventY - me._view_menu_m.ggDragLastY) * me._view_menu_m.ggVPercentVisible;
			me._view_menu_m.ggDragInertiaX = -diffX;
			me._view_menu_m.ggDragInertiaY = -diffY;
			me._view_menu_m.ggDragLastX = eventX;
			me._view_menu_m.ggDragLastY = eventY;
			me._view_menu_m.ggScrollByX(-diffX);
			me._view_menu_m.ggScrollByY(-diffY);
		}
		me._view_menu_m__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._view_menu_m.ggDragLastX = me._view_menu_m.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._view_menu_m.ggDragLastY = me._view_menu_m.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._view_menu_m__content.onmouseup = me._view_menu_m__content.mousetouchend;
			me._view_menu_m__content.ontouchend = me._view_menu_m__content.mousetouchend;
			me._view_menu_m__content.onmousemove = me._view_menu_m__content.mousetouchmove;
			me._view_menu_m__content.ontouchmove = me._view_menu_m__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._view_menu_m__content.onpointerup = me._view_menu_m__content.ontouchend;
				me._view_menu_m__content.onpointermove = me._view_menu_m__content.ontouchmove;
			}
		}
		els.onmousedown = me._view_menu_m__content.mousetouchstart;
		els.ontouchstart = me._view_menu_m__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._view_menu_m__content.mousetouchstart;
		}
		elHorScrollBg = me._view_menu_m__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 448px; height: 5px; background-color: rgba(128,128,128,0); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._view_menu_m__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 448px; height: 5px; background-color: rgba(255,255,255,0.666667); pointer-events: auto;');
		me._view_menu_m.ggScrollPosX = 0;
		me._view_menu_m.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._view_menu_m.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._view_menu_m.ggDragInertiaX *= 0.96;
					me._view_menu_m.ggScrollByX(me._view_menu_m.ggDragInertiaX);
					if (Math.abs(me._view_menu_m.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._view_menu_m.ggDragLastX;
				me._view_menu_m.ggDragInertiaX = diffX;
				me._view_menu_m.ggDragLastX = e.clientX;
				me._view_menu_m.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._view_menu_m.ggDragLastX = t ? t[0].clientX : e.clientX;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._view_menu_m.ggDragInertiaX *= 0.96;
					me._view_menu_m.ggScrollByX(me._view_menu_m.ggDragInertiaX);
					if (Math.abs(me._view_menu_m.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me._view_menu_m.ggDragLastX;
				me._view_menu_m.ggDragInertiaX = diffX;
				me._view_menu_m.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._view_menu_m.ggScrollByX(diffX);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elHorScrollFg.onpointerdown = elHorScrollFg.ontouchstart;
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._view_menu_m.ggScrollWidth;
			if (e.offsetX < me._view_menu_m.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._view_menu_m.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._view_menu_m__horScrollBg.getBoundingClientRect();
			var diffX = me._view_menu_m.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._view_menu_m.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._view_menu_m.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me._view_menu_m.ggScrollByXSmooth(30 * me._view_menu_m.ggHPercentVisible * wheelDelta);
		});
		elCornerBg = me._view_menu_m__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 5px; height: 5px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="view_menu_M";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -100px;';
		hs+='height : 80px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._view_menu_m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._view_menu_m.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('menu_view') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._view_menu_m.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._view_menu_m.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._view_menu_m.style.transition='left 1000ms ease 0ms, bottom 1000ms ease 0ms, width 1000ms ease 0ms, height 1000ms ease 0ms, left 1000ms ease 0ms, opacity 1500ms ease 0ms';
				if (me._view_menu_m.ggCurrentLogicStatePosition == 0) {
					me._view_menu_m.style.left = 'calc(50% - (100% / 2))';
					me._view_menu_m.style.bottom='0px';
				}
				else {
					me._view_menu_m.style.left='calc(50% - ((100% + 0px) / 2) + 0px)';
					me._view_menu_m.style.bottom='-100px';
				}
			}
		}
		me._view_menu_m.logicBlock_position();
		me._view_menu_m.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('var_map') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._view_menu_m.ggCurrentLogicStateSize != newLogicStateSize) {
				me._view_menu_m.ggCurrentLogicStateSize = newLogicStateSize;
				me._view_menu_m.style.transition='left 1000ms ease 0ms, bottom 1000ms ease 0ms, width 1000ms ease 0ms, height 1000ms ease 0ms, left 1000ms ease 0ms, opacity 1500ms ease 0ms';
				if (me._view_menu_m.ggCurrentLogicStateSize == 0) {
					me._view_menu_m.style.width='0%';
					me._view_menu_m.style.height='0px';
					me._view_menu_m.style.left = 'calc(50% - (0% / 2))';
					setTimeout(function() {skin.updateSize(me._view_menu_m);}, 1050);
				}
				else {
					me._view_menu_m.style.width='100%';
					me._view_menu_m.style.height='80px';
					me._view_menu_m.style.left = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me._view_menu_m);}, 1050);
				}
			}
		}
		me._view_menu_m.logicBlock_size();
		me._view_menu_m.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('menu_view') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._view_menu_m.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._view_menu_m.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._view_menu_m.style.transition='left 1000ms ease 0ms, bottom 1000ms ease 0ms, width 1000ms ease 0ms, height 1000ms ease 0ms, left 1000ms ease 0ms, opacity 1500ms ease 0ms';
				if (me._view_menu_m.ggCurrentLogicStateAlpha == 0) {
					me._view_menu_m.style.visibility=me._view_menu_m.ggVisible?'inherit':'hidden';
					me._view_menu_m.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._view_menu_m.style.opacity == 0.0) { me._view_menu_m.style.visibility="hidden"; } }, 1505);
					me._view_menu_m.style.opacity=0;
				}
			}
		}
		me._view_menu_m.logicBlock_alpha();
		me._view_menu_m.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				var containerWidth = offsetWidthWithScale;
				if (this.ggVertScrollVisible) containerWidth -= 5;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = ((contentWidth/-2) - (this.ggVertScrollVisible ? (5/2) : 0)) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				var containerHeight = this.clientHeight;
				if (this.ggHorScrollVisible) containerHeight -= 5;
				if (contentHeight < containerHeight) {
					this.ggContent.style.top = '50%';
					this.ggContent.style.marginTop = ((contentHeight/-2) - (this.ggHorScrollVisible ? (5/2) : 0))  + 'px';
				}
				else {
					this.ggContent.style.top = this.ggContentTopOffset + 'px';
					this.ggContent.style.marginTop = '0px';
				}
				if (contentWidth > Math.ceil(offsetWidthWithScale)) {
					me._view_menu_m__horScrollBg.style.visibility = 'inherit';
					me._view_menu_m__horScrollFg.style.visibility = 'inherit';
					me._view_menu_m.ggHorScrollVisible = true;
				} else {
					me._view_menu_m__horScrollBg.style.visibility = 'hidden';
					me._view_menu_m__horScrollFg.style.visibility = 'hidden';
					me._view_menu_m.ggHorScrollVisible = false;
				}
				if(me._view_menu_m.ggHorScrollVisible) {
					me._view_menu_m.ggAvailableHeight = me._view_menu_m.clientHeight - 5;
					if (me._view_menu_m.ggVertScrollVisible) {
						me._view_menu_m.ggAvailableWidth = me._view_menu_m.clientWidth - 5;
						me._view_menu_m.ggAvailableWidthWithScale = me._view_menu_m.getBoundingClientRect().width - me._view_menu_m__horScrollBg.getBoundingClientRect().height;
					} else {
						me._view_menu_m.ggAvailableWidth = me._view_menu_m.clientWidth;
						me._view_menu_m.ggAvailableWidthWithScale = me._view_menu_m.getBoundingClientRect().width;
					}
					me._view_menu_m__horScrollBg.style.width = me._view_menu_m.ggAvailableWidth + 'px';
					me._view_menu_m.ggHPercentVisible = contentWidth != 0 ? me._view_menu_m.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me._view_menu_m.ggHPercentVisible > 1.0) me._view_menu_m.ggHPercentVisible = 1.0;
					me._view_menu_m.ggScrollWidth = Math.round(me._view_menu_m__horScrollBg.offsetWidth * me._view_menu_m.ggHPercentVisible);
					me._view_menu_m__horScrollFg.style.width = me._view_menu_m.ggScrollWidth + 'px';
					me._view_menu_m.ggScrollPosX = me._view_menu_m.ggScrollPosXPercent * me._view_menu_m.ggAvailableWidth;
					me._view_menu_m.ggScrollPosX = Math.min(me._view_menu_m.ggScrollPosX, me._view_menu_m__horScrollBg.offsetWidth - me._view_menu_m__horScrollFg.offsetWidth);
					me._view_menu_m__horScrollFg.style.left = me._view_menu_m.ggScrollPosX + 'px';
					if (me._view_menu_m.ggHPercentVisible < 1.0) {
						let percentScrolled = me._view_menu_m.ggScrollPosX / (me._view_menu_m__horScrollBg.offsetWidth - me._view_menu_m__horScrollFg.offsetWidth);
						me._view_menu_m__content.style.left = -(Math.round((me._view_menu_m.ggContentWidth * (1.0 - me._view_menu_m.ggHPercentVisible)) * percentScrolled)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me._view_menu_m.ggAvailableHeight = me._view_menu_m.clientHeight;
					me._view_menu_m.ggScrollPosX = 0;
					me._view_menu_m.ggScrollPosXPercent = 0.0;
				}
				if(horScrollWasVisible != me._view_menu_m.ggHorScrollVisible || vertScrollWasVisible != me._view_menu_m.ggVertScrollVisible) {
					skin.updateSize(me._view_menu_m);
					me._view_menu_m.ggUpdatePosition();
				}
			}
		}
		el=me._view_tint_m=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._view_tint_m;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="view_tint_M";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(33,33,33,0.501961);';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._view_tint_m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._view_tint_m.ggUpdatePosition=function (useTransition) {
		}
		me._view_menu_m__content.appendChild(me._view_tint_m);
		el=me._view_cloner_m=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._view_cloner_m;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 94;
		el.ggHeight = 80;
		el.ggSizeChanged = false;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._view_cloner_m.ggUpdating == true) return;
			me._view_cloner_m.ggUpdating = true;
			var el=me._view_cloner_m;
			var curNumRows = 0;
			curNumRows = me._view_cloner_m.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && !el.ggSizeChanged && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._view_cloner_m.ggUpdating = false;
				return;
			} else {
				el.ggSizeChanged = false;
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._view_cloner_m.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._view_cloner_m.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._view_cloner_m.getFilteredNodes(tourNodes, filter);
			me._view_cloner_m.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._view_cloner_m.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._view_cloner_m.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._view_cloner_m.ggWidth) + 'px';
				parameter.width=me._view_cloner_m.ggWidth + 'px';
				parameter.height=me._view_cloner_m.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_view_cloner_m_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					row = 0;
					column++;
					el.ggNumCols++;
				}
			}
			me._view_cloner_m.ggNodeCount = me._view_cloner_m.ggNumFilterPassed;
			me._view_cloner_m.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._view_cloner_m.parentNode && me._view_cloner_m.parentNode.classList.contains('ggskin_subelement') && me._view_cloner_m.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._view_cloner_m.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "View";
		el.ggId="view_cloner_M";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 80px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 94px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._view_cloner_m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._view_cloner_m.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._view_cloner_m.childNodes.length; i++) {
				var child=me._view_cloner_m.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._view_cloner_m.ggUpdatePosition=function (useTransition) {
			me._view_cloner_m.ggUpdate();
		}
		me._view_menu_m__content.appendChild(me._view_cloner_m);
		me._view_desktop_m.appendChild(me._view_menu_m);
		me.divSkin.appendChild(me._view_desktop_m);
		el=me._entertainment_desktop_m=document.createElement('div');
		el.ggId="entertainment_desktop_M";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 20px;';
		hs+='height : 80px;';
		hs+='left : calc(50% - ((calc(95% - 50px) + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : calc(95% - 50px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._entertainment_desktop_m.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._entertainment_desktop_m.ggUpdatePosition=function (useTransition) {
		}
		el=me._entertainment_menu_m=document.createElement('div');
		els=me._entertainment_menu_m__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 79px;';
		hs+='left : 50%;';
		hs+='margin-left : -223.5px;';
		hs+='margin-top : -39.5px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 50%;';
		hs+='width : 447px;';
		hs+="";
		els.setAttribute('style',hs);
		me._entertainment_menu_m.ggScrollByX = function(diffX) {
			if(!me._entertainment_menu_m.ggHorScrollVisible || diffX == 0 || me._entertainment_menu_m.ggHPercentVisible >= 1.0) return;
			me._entertainment_menu_m.ggScrollPosX = (me._entertainment_menu_m__horScrollFg.offsetLeft + diffX);
			me._entertainment_menu_m.ggScrollPosX = Math.max(me._entertainment_menu_m.ggScrollPosX, 0);
			me._entertainment_menu_m.ggScrollPosX = Math.min(me._entertainment_menu_m.ggScrollPosX, me._entertainment_menu_m__horScrollBg.offsetWidth - me._entertainment_menu_m__horScrollFg.offsetWidth);
			me._entertainment_menu_m__horScrollFg.style.left = me._entertainment_menu_m.ggScrollPosX + 'px';
			let percentScrolled = me._entertainment_menu_m.ggScrollPosX / (me._entertainment_menu_m__horScrollBg.offsetWidth - me._entertainment_menu_m__horScrollFg.offsetWidth);
			me._entertainment_menu_m__content.style.left = -(Math.round((me._entertainment_menu_m.ggContentWidth * (1.0 - me._entertainment_menu_m.ggHPercentVisible)) * percentScrolled)) + me._entertainment_menu_m.ggContentLeftOffset + 'px';
			me._entertainment_menu_m.ggScrollPosXPercent = (me._entertainment_menu_m__horScrollFg.offsetLeft / me._entertainment_menu_m__horScrollBg.offsetWidth);
		}
		me._entertainment_menu_m.ggScrollByXSmooth = function(diffX) {
			if(!me._entertainment_menu_m.ggHorScrollVisible || diffX == 0 || me._entertainment_menu_m.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._entertainment_menu_m.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._entertainment_menu_m.ggScrollPosX >= me._entertainment_menu_m__horScrollBg.offsetWidth - me._entertainment_menu_m__horScrollFg.offsetWidth)) {
					me._entertainment_menu_m.ggScrollPosX = Math.min(me._entertainment_menu_m.ggScrollPosX, me._entertainment_menu_m__horScrollBg.offsetWidth - me._entertainment_menu_m__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._entertainment_menu_m.ggScrollPosX <= 0)) {
					me._entertainment_menu_m.ggScrollPosX = Math.max(me._entertainment_menu_m.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._entertainment_menu_m__horScrollFg.style.left = me._entertainment_menu_m.ggScrollPosX + 'px';
			let percentScrolled = me._entertainment_menu_m.ggScrollPosX / (me._entertainment_menu_m__horScrollBg.offsetWidth - me._entertainment_menu_m__horScrollFg.offsetWidth);
			me._entertainment_menu_m__content.style.left = -(Math.round((me._entertainment_menu_m.ggContentWidth * (1.0 - me._entertainment_menu_m.ggHPercentVisible)) * percentScrolled)) + me._entertainment_menu_m.ggContentLeftOffset + 'px';
			me._entertainment_menu_m.ggScrollPosXPercent = (me._entertainment_menu_m__horScrollFg.offsetLeft / me._entertainment_menu_m__horScrollBg.offsetWidth);
			}, 10);
		}
		me._entertainment_menu_m.ggScrollByY = function(diffY) {
			if(!me._entertainment_menu_m.ggVertScrollVisible || diffY == 0 || me._entertainment_menu_m.ggVPercentVisible >= 1.0) return;
			me._entertainment_menu_m.ggScrollPosY = (me._entertainment_menu_m__vertScrollFg.offsetTop + diffY);
			me._entertainment_menu_m.ggScrollPosY = Math.max(me._entertainment_menu_m.ggScrollPosY, 0);
			me._entertainment_menu_m.ggScrollPosY = Math.min(me._entertainment_menu_m.ggScrollPosY, me._entertainment_menu_m__vertScrollBg.offsetHeight - me._entertainment_menu_m__vertScrollFg.offsetHeight);
			me._entertainment_menu_m__vertScrollFg.style.top = me._entertainment_menu_m.ggScrollPosY + 'px';
			let percentScrolled = me._entertainment_menu_m.ggScrollPosY / (me._entertainment_menu_m__vertScrollBg.offsetHeight - me._entertainment_menu_m__vertScrollFg.offsetHeight);
			me._entertainment_menu_m__content.style.top = -(Math.round((me._entertainment_menu_m.ggContentHeight * (1.0 - me._entertainment_menu_m.ggVPercentVisible)) * percentScrolled)) + me._entertainment_menu_m.ggContentTopOffset + 'px';
			me._entertainment_menu_m.ggScrollPosYPercent = (me._entertainment_menu_m__vertScrollFg.offsetTop / me._entertainment_menu_m__vertScrollBg.offsetHeight);
		}
		me._entertainment_menu_m.ggScrollByYSmooth = function(diffY) {
			if(!me._entertainment_menu_m.ggVertScrollVisible || diffY == 0 || me._entertainment_menu_m.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._entertainment_menu_m.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._entertainment_menu_m.ggScrollPosY >= me._entertainment_menu_m__vertScrollBg.offsetHeight - me._entertainment_menu_m__vertScrollFg.offsetHeight)) {
					me._entertainment_menu_m.ggScrollPosY = Math.min(me._entertainment_menu_m.ggScrollPosY, me._entertainment_menu_m__vertScrollBg.offsetHeight - me._entertainment_menu_m__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._entertainment_menu_m.ggScrollPosY <= 0)) {
					me._entertainment_menu_m.ggScrollPosY = Math.max(me._entertainment_menu_m.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._entertainment_menu_m__vertScrollFg.style.top = me._entertainment_menu_m.ggScrollPosY + 'px';
			let percentScrolled = me._entertainment_menu_m.ggScrollPosY / (me._entertainment_menu_m__vertScrollBg.offsetHeight - me._entertainment_menu_m__vertScrollFg.offsetHeight);
			me._entertainment_menu_m__content.style.top = -(Math.round((me._entertainment_menu_m.ggContentHeight * (1.0 - me._entertainment_menu_m.ggVPercentVisible)) * percentScrolled)) + me._entertainment_menu_m.ggContentTopOffset + 'px';
			me._entertainment_menu_m.ggScrollPosYPercent = (me._entertainment_menu_m__vertScrollFg.offsetTop / me._entertainment_menu_m__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._entertainment_menu_m.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._entertainment_menu_m.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._entertainment_menu_m.ggHPercentVisible);
					me._entertainment_menu_m.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._entertainment_menu_m.clientWidth - (me._entertainment_menu_m.ggVertScrollVisible ? 5 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._entertainment_menu_m.clientWidth - (me._entertainment_menu_m.ggVertScrollVisible ? 5 : 0))) * me._entertainment_menu_m.ggHPercentVisible);
					me._entertainment_menu_m.ggScrollByXSmooth(diffX);
				}
			}
			if (me._entertainment_menu_m.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._entertainment_menu_m.ggVPercentVisible);
					me._entertainment_menu_m.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._entertainment_menu_m.clientHeight - (me._entertainment_menu_m.ggHorScrollVisible ? 5 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._entertainment_menu_m.clientHeight - (me._entertainment_menu_m.ggHorScrollVisible ? 5 : 0))) * me._entertainment_menu_m.ggVPercentVisible);
					me._entertainment_menu_m.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._entertainment_menu_m__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._entertainment_menu_m.ggDragInertiaX *= 0.96;
				me._entertainment_menu_m.ggDragInertiaY *= 0.96;
				me._entertainment_menu_m.ggScrollByX(me._entertainment_menu_m.ggDragInertiaX);
				me._entertainment_menu_m.ggScrollByY(me._entertainment_menu_m.ggDragInertiaY);
				if (Math.abs(me._entertainment_menu_m.ggDragInertiaX) < 1.0 && Math.abs(me._entertainment_menu_m.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._entertainment_menu_m__content.onmouseup = null;
			me._entertainment_menu_m__content.onmousemove = null;
			me._entertainment_menu_m__content.ontouchend = null;
			me._entertainment_menu_m__content.ontouchmove = null;
			me._entertainment_menu_m__content.onpointerup = null;
			me._entertainment_menu_m__content.onpointermove = null;
			setTimeout(function() { me._entertainment_menu_m.ggIsDragging = false; }, 100);
		}
		me._entertainment_menu_m__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._entertainment_menu_m.ggDragStartX) > 10 || Math.abs(eventY - me._entertainment_menu_m.ggDragStartY) > 10) me._entertainment_menu_m.ggIsDragging = true;
			var diffX = (eventX - me._entertainment_menu_m.ggDragLastX) * me._entertainment_menu_m.ggHPercentVisible;
			var diffY = (eventY - me._entertainment_menu_m.ggDragLastY) * me._entertainment_menu_m.ggVPercentVisible;
			me._entertainment_menu_m.ggDragInertiaX = -diffX;
			me._entertainment_menu_m.ggDragInertiaY = -diffY;
			me._entertainment_menu_m.ggDragLastX = eventX;
			me._entertainment_menu_m.ggDragLastY = eventY;
			me._entertainment_menu_m.ggScrollByX(-diffX);
			me._entertainment_menu_m.ggScrollByY(-diffY);
		}
		me._entertainment_menu_m__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._entertainment_menu_m.ggDragLastX = me._entertainment_menu_m.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._entertainment_menu_m.ggDragLastY = me._entertainment_menu_m.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._entertainment_menu_m__content.onmouseup = me._entertainment_menu_m__content.mousetouchend;
			me._entertainment_menu_m__content.ontouchend = me._entertainment_menu_m__content.mousetouchend;
			me._entertainment_menu_m__content.onmousemove = me._entertainment_menu_m__content.mousetouchmove;
			me._entertainment_menu_m__content.ontouchmove = me._entertainment_menu_m__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._entertainment_menu_m__content.onpointerup = me._entertainment_menu_m__content.ontouchend;
				me._entertainment_menu_m__content.onpointermove = me._entertainment_menu_m__content.ontouchmove;
			}
		}
		els.onmousedown = me._entertainment_menu_m__content.mousetouchstart;
		els.ontouchstart = me._entertainment_menu_m__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._entertainment_menu_m__content.mousetouchstart;
		}
		elHorScrollBg = me._entertainment_menu_m__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 448px; height: 5px; background-color: rgba(128,128,128,0); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._entertainment_menu_m__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 448px; height: 5px; background-color: rgba(255,255,255,0.666667); pointer-events: auto;');
		me._entertainment_menu_m.ggScrollPosX = 0;
		me._entertainment_menu_m.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._entertainment_menu_m.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._entertainment_menu_m.ggDragInertiaX *= 0.96;
					me._entertainment_menu_m.ggScrollByX(me._entertainment_menu_m.ggDragInertiaX);
					if (Math.abs(me._entertainment_menu_m.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._entertainment_menu_m.ggDragLastX;
				me._entertainment_menu_m.ggDragInertiaX = diffX;
				me._entertainment_menu_m.ggDragLastX = e.clientX;
				me._entertainment_menu_m.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._entertainment_menu_m.ggDragLastX = t ? t[0].clientX : e.clientX;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._entertainment_menu_m.ggDragInertiaX *= 0.96;
					me._entertainment_menu_m.ggScrollByX(me._entertainment_menu_m.ggDragInertiaX);
					if (Math.abs(me._entertainment_menu_m.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me._entertainment_menu_m.ggDragLastX;
				me._entertainment_menu_m.ggDragInertiaX = diffX;
				me._entertainment_menu_m.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._entertainment_menu_m.ggScrollByX(diffX);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elHorScrollFg.onpointerdown = elHorScrollFg.ontouchstart;
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._entertainment_menu_m.ggScrollWidth;
			if (e.offsetX < me._entertainment_menu_m.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._entertainment_menu_m.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._entertainment_menu_m__horScrollBg.getBoundingClientRect();
			var diffX = me._entertainment_menu_m.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._entertainment_menu_m.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._entertainment_menu_m.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me._entertainment_menu_m.ggScrollByXSmooth(30 * me._entertainment_menu_m.ggHPercentVisible * wheelDelta);
		});
		elCornerBg = me._entertainment_menu_m__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 5px; height: 5px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="entertainment_menu_M";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -100px;';
		hs+='height : 80px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._entertainment_menu_m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._entertainment_menu_m.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('menu_entertainment') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._entertainment_menu_m.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._entertainment_menu_m.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._entertainment_menu_m.style.transition='left 1000ms ease 0ms, bottom 1000ms ease 0ms, width 1000ms ease 0ms, height 1000ms ease 0ms, left 1000ms ease 0ms, opacity 1500ms ease 0ms';
				if (me._entertainment_menu_m.ggCurrentLogicStatePosition == 0) {
					me._entertainment_menu_m.style.left = 'calc(50% - (100% / 2))';
					me._entertainment_menu_m.style.bottom='0px';
				}
				else {
					me._entertainment_menu_m.style.left='calc(50% - ((100% + 0px) / 2) + 0px)';
					me._entertainment_menu_m.style.bottom='-100px';
				}
			}
		}
		me._entertainment_menu_m.logicBlock_position();
		me._entertainment_menu_m.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('var_map') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._entertainment_menu_m.ggCurrentLogicStateSize != newLogicStateSize) {
				me._entertainment_menu_m.ggCurrentLogicStateSize = newLogicStateSize;
				me._entertainment_menu_m.style.transition='left 1000ms ease 0ms, bottom 1000ms ease 0ms, width 1000ms ease 0ms, height 1000ms ease 0ms, left 1000ms ease 0ms, opacity 1500ms ease 0ms';
				if (me._entertainment_menu_m.ggCurrentLogicStateSize == 0) {
					me._entertainment_menu_m.style.width='0%';
					me._entertainment_menu_m.style.height='0px';
					me._entertainment_menu_m.style.left = 'calc(50% - (0% / 2))';
					setTimeout(function() {skin.updateSize(me._entertainment_menu_m);}, 1050);
				}
				else {
					me._entertainment_menu_m.style.width='100%';
					me._entertainment_menu_m.style.height='80px';
					me._entertainment_menu_m.style.left = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me._entertainment_menu_m);}, 1050);
				}
			}
		}
		me._entertainment_menu_m.logicBlock_size();
		me._entertainment_menu_m.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('menu_entertainment') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._entertainment_menu_m.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._entertainment_menu_m.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._entertainment_menu_m.style.transition='left 1000ms ease 0ms, bottom 1000ms ease 0ms, width 1000ms ease 0ms, height 1000ms ease 0ms, left 1000ms ease 0ms, opacity 1500ms ease 0ms';
				if (me._entertainment_menu_m.ggCurrentLogicStateAlpha == 0) {
					me._entertainment_menu_m.style.visibility=me._entertainment_menu_m.ggVisible?'inherit':'hidden';
					me._entertainment_menu_m.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._entertainment_menu_m.style.opacity == 0.0) { me._entertainment_menu_m.style.visibility="hidden"; } }, 1505);
					me._entertainment_menu_m.style.opacity=0;
				}
			}
		}
		me._entertainment_menu_m.logicBlock_alpha();
		me._entertainment_menu_m.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				var containerWidth = offsetWidthWithScale;
				if (this.ggVertScrollVisible) containerWidth -= 5;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = ((contentWidth/-2) - (this.ggVertScrollVisible ? (5/2) : 0)) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				var containerHeight = this.clientHeight;
				if (this.ggHorScrollVisible) containerHeight -= 5;
				if (contentHeight < containerHeight) {
					this.ggContent.style.top = '50%';
					this.ggContent.style.marginTop = ((contentHeight/-2) - (this.ggHorScrollVisible ? (5/2) : 0))  + 'px';
				}
				else {
					this.ggContent.style.top = this.ggContentTopOffset + 'px';
					this.ggContent.style.marginTop = '0px';
				}
				if (contentWidth > Math.ceil(offsetWidthWithScale)) {
					me._entertainment_menu_m__horScrollBg.style.visibility = 'inherit';
					me._entertainment_menu_m__horScrollFg.style.visibility = 'inherit';
					me._entertainment_menu_m.ggHorScrollVisible = true;
				} else {
					me._entertainment_menu_m__horScrollBg.style.visibility = 'hidden';
					me._entertainment_menu_m__horScrollFg.style.visibility = 'hidden';
					me._entertainment_menu_m.ggHorScrollVisible = false;
				}
				if(me._entertainment_menu_m.ggHorScrollVisible) {
					me._entertainment_menu_m.ggAvailableHeight = me._entertainment_menu_m.clientHeight - 5;
					if (me._entertainment_menu_m.ggVertScrollVisible) {
						me._entertainment_menu_m.ggAvailableWidth = me._entertainment_menu_m.clientWidth - 5;
						me._entertainment_menu_m.ggAvailableWidthWithScale = me._entertainment_menu_m.getBoundingClientRect().width - me._entertainment_menu_m__horScrollBg.getBoundingClientRect().height;
					} else {
						me._entertainment_menu_m.ggAvailableWidth = me._entertainment_menu_m.clientWidth;
						me._entertainment_menu_m.ggAvailableWidthWithScale = me._entertainment_menu_m.getBoundingClientRect().width;
					}
					me._entertainment_menu_m__horScrollBg.style.width = me._entertainment_menu_m.ggAvailableWidth + 'px';
					me._entertainment_menu_m.ggHPercentVisible = contentWidth != 0 ? me._entertainment_menu_m.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me._entertainment_menu_m.ggHPercentVisible > 1.0) me._entertainment_menu_m.ggHPercentVisible = 1.0;
					me._entertainment_menu_m.ggScrollWidth = Math.round(me._entertainment_menu_m__horScrollBg.offsetWidth * me._entertainment_menu_m.ggHPercentVisible);
					me._entertainment_menu_m__horScrollFg.style.width = me._entertainment_menu_m.ggScrollWidth + 'px';
					me._entertainment_menu_m.ggScrollPosX = me._entertainment_menu_m.ggScrollPosXPercent * me._entertainment_menu_m.ggAvailableWidth;
					me._entertainment_menu_m.ggScrollPosX = Math.min(me._entertainment_menu_m.ggScrollPosX, me._entertainment_menu_m__horScrollBg.offsetWidth - me._entertainment_menu_m__horScrollFg.offsetWidth);
					me._entertainment_menu_m__horScrollFg.style.left = me._entertainment_menu_m.ggScrollPosX + 'px';
					if (me._entertainment_menu_m.ggHPercentVisible < 1.0) {
						let percentScrolled = me._entertainment_menu_m.ggScrollPosX / (me._entertainment_menu_m__horScrollBg.offsetWidth - me._entertainment_menu_m__horScrollFg.offsetWidth);
						me._entertainment_menu_m__content.style.left = -(Math.round((me._entertainment_menu_m.ggContentWidth * (1.0 - me._entertainment_menu_m.ggHPercentVisible)) * percentScrolled)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me._entertainment_menu_m.ggAvailableHeight = me._entertainment_menu_m.clientHeight;
					me._entertainment_menu_m.ggScrollPosX = 0;
					me._entertainment_menu_m.ggScrollPosXPercent = 0.0;
				}
				if(horScrollWasVisible != me._entertainment_menu_m.ggHorScrollVisible || vertScrollWasVisible != me._entertainment_menu_m.ggVertScrollVisible) {
					skin.updateSize(me._entertainment_menu_m);
					me._entertainment_menu_m.ggUpdatePosition();
				}
			}
		}
		el=me._entertainment_tint_m=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._entertainment_tint_m;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="entertainment_tint_M";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(33,33,33,0.501961);';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._entertainment_tint_m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._entertainment_tint_m.ggUpdatePosition=function (useTransition) {
		}
		me._entertainment_menu_m__content.appendChild(me._entertainment_tint_m);
		el=me._entertainment_cloner_m=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._entertainment_cloner_m;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 94;
		el.ggHeight = 80;
		el.ggSizeChanged = false;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._entertainment_cloner_m.ggUpdating == true) return;
			me._entertainment_cloner_m.ggUpdating = true;
			var el=me._entertainment_cloner_m;
			var curNumRows = 0;
			curNumRows = me._entertainment_cloner_m.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && !el.ggSizeChanged && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._entertainment_cloner_m.ggUpdating = false;
				return;
			} else {
				el.ggSizeChanged = false;
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._entertainment_cloner_m.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._entertainment_cloner_m.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._entertainment_cloner_m.getFilteredNodes(tourNodes, filter);
			me._entertainment_cloner_m.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._entertainment_cloner_m.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._entertainment_cloner_m.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._entertainment_cloner_m.ggWidth) + 'px';
				parameter.width=me._entertainment_cloner_m.ggWidth + 'px';
				parameter.height=me._entertainment_cloner_m.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_entertainment_cloner_m_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					row = 0;
					column++;
					el.ggNumCols++;
				}
			}
			me._entertainment_cloner_m.ggNodeCount = me._entertainment_cloner_m.ggNumFilterPassed;
			me._entertainment_cloner_m.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._entertainment_cloner_m.parentNode && me._entertainment_cloner_m.parentNode.classList.contains('ggskin_subelement') && me._entertainment_cloner_m.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._entertainment_cloner_m.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "entertainment";
		el.ggId="entertainment_cloner_M";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 80px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 94px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._entertainment_cloner_m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._entertainment_cloner_m.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._entertainment_cloner_m.childNodes.length; i++) {
				var child=me._entertainment_cloner_m.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._entertainment_cloner_m.ggUpdatePosition=function (useTransition) {
			me._entertainment_cloner_m.ggUpdate();
		}
		me._entertainment_menu_m__content.appendChild(me._entertainment_cloner_m);
		me._entertainment_desktop_m.appendChild(me._entertainment_menu_m);
		me.divSkin.appendChild(me._entertainment_desktop_m);
		el=me._dining_desktop_m=document.createElement('div');
		el.ggId="dining_desktop_M";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 20px;';
		hs+='height : 80px;';
		hs+='left : calc(50% - ((calc(95% - 50px) + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : calc(95% - 50px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._dining_desktop_m.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._dining_desktop_m.ggUpdatePosition=function (useTransition) {
		}
		el=me._dining_menu_m=document.createElement('div');
		els=me._dining_menu_m__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 79px;';
		hs+='left : 50%;';
		hs+='margin-left : -223.5px;';
		hs+='margin-top : -39.5px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 50%;';
		hs+='width : 447px;';
		hs+="";
		els.setAttribute('style',hs);
		me._dining_menu_m.ggScrollByX = function(diffX) {
			if(!me._dining_menu_m.ggHorScrollVisible || diffX == 0 || me._dining_menu_m.ggHPercentVisible >= 1.0) return;
			me._dining_menu_m.ggScrollPosX = (me._dining_menu_m__horScrollFg.offsetLeft + diffX);
			me._dining_menu_m.ggScrollPosX = Math.max(me._dining_menu_m.ggScrollPosX, 0);
			me._dining_menu_m.ggScrollPosX = Math.min(me._dining_menu_m.ggScrollPosX, me._dining_menu_m__horScrollBg.offsetWidth - me._dining_menu_m__horScrollFg.offsetWidth);
			me._dining_menu_m__horScrollFg.style.left = me._dining_menu_m.ggScrollPosX + 'px';
			let percentScrolled = me._dining_menu_m.ggScrollPosX / (me._dining_menu_m__horScrollBg.offsetWidth - me._dining_menu_m__horScrollFg.offsetWidth);
			me._dining_menu_m__content.style.left = -(Math.round((me._dining_menu_m.ggContentWidth * (1.0 - me._dining_menu_m.ggHPercentVisible)) * percentScrolled)) + me._dining_menu_m.ggContentLeftOffset + 'px';
			me._dining_menu_m.ggScrollPosXPercent = (me._dining_menu_m__horScrollFg.offsetLeft / me._dining_menu_m__horScrollBg.offsetWidth);
		}
		me._dining_menu_m.ggScrollByXSmooth = function(diffX) {
			if(!me._dining_menu_m.ggHorScrollVisible || diffX == 0 || me._dining_menu_m.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._dining_menu_m.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._dining_menu_m.ggScrollPosX >= me._dining_menu_m__horScrollBg.offsetWidth - me._dining_menu_m__horScrollFg.offsetWidth)) {
					me._dining_menu_m.ggScrollPosX = Math.min(me._dining_menu_m.ggScrollPosX, me._dining_menu_m__horScrollBg.offsetWidth - me._dining_menu_m__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._dining_menu_m.ggScrollPosX <= 0)) {
					me._dining_menu_m.ggScrollPosX = Math.max(me._dining_menu_m.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._dining_menu_m__horScrollFg.style.left = me._dining_menu_m.ggScrollPosX + 'px';
			let percentScrolled = me._dining_menu_m.ggScrollPosX / (me._dining_menu_m__horScrollBg.offsetWidth - me._dining_menu_m__horScrollFg.offsetWidth);
			me._dining_menu_m__content.style.left = -(Math.round((me._dining_menu_m.ggContentWidth * (1.0 - me._dining_menu_m.ggHPercentVisible)) * percentScrolled)) + me._dining_menu_m.ggContentLeftOffset + 'px';
			me._dining_menu_m.ggScrollPosXPercent = (me._dining_menu_m__horScrollFg.offsetLeft / me._dining_menu_m__horScrollBg.offsetWidth);
			}, 10);
		}
		me._dining_menu_m.ggScrollByY = function(diffY) {
			if(!me._dining_menu_m.ggVertScrollVisible || diffY == 0 || me._dining_menu_m.ggVPercentVisible >= 1.0) return;
			me._dining_menu_m.ggScrollPosY = (me._dining_menu_m__vertScrollFg.offsetTop + diffY);
			me._dining_menu_m.ggScrollPosY = Math.max(me._dining_menu_m.ggScrollPosY, 0);
			me._dining_menu_m.ggScrollPosY = Math.min(me._dining_menu_m.ggScrollPosY, me._dining_menu_m__vertScrollBg.offsetHeight - me._dining_menu_m__vertScrollFg.offsetHeight);
			me._dining_menu_m__vertScrollFg.style.top = me._dining_menu_m.ggScrollPosY + 'px';
			let percentScrolled = me._dining_menu_m.ggScrollPosY / (me._dining_menu_m__vertScrollBg.offsetHeight - me._dining_menu_m__vertScrollFg.offsetHeight);
			me._dining_menu_m__content.style.top = -(Math.round((me._dining_menu_m.ggContentHeight * (1.0 - me._dining_menu_m.ggVPercentVisible)) * percentScrolled)) + me._dining_menu_m.ggContentTopOffset + 'px';
			me._dining_menu_m.ggScrollPosYPercent = (me._dining_menu_m__vertScrollFg.offsetTop / me._dining_menu_m__vertScrollBg.offsetHeight);
		}
		me._dining_menu_m.ggScrollByYSmooth = function(diffY) {
			if(!me._dining_menu_m.ggVertScrollVisible || diffY == 0 || me._dining_menu_m.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._dining_menu_m.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._dining_menu_m.ggScrollPosY >= me._dining_menu_m__vertScrollBg.offsetHeight - me._dining_menu_m__vertScrollFg.offsetHeight)) {
					me._dining_menu_m.ggScrollPosY = Math.min(me._dining_menu_m.ggScrollPosY, me._dining_menu_m__vertScrollBg.offsetHeight - me._dining_menu_m__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._dining_menu_m.ggScrollPosY <= 0)) {
					me._dining_menu_m.ggScrollPosY = Math.max(me._dining_menu_m.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._dining_menu_m__vertScrollFg.style.top = me._dining_menu_m.ggScrollPosY + 'px';
			let percentScrolled = me._dining_menu_m.ggScrollPosY / (me._dining_menu_m__vertScrollBg.offsetHeight - me._dining_menu_m__vertScrollFg.offsetHeight);
			me._dining_menu_m__content.style.top = -(Math.round((me._dining_menu_m.ggContentHeight * (1.0 - me._dining_menu_m.ggVPercentVisible)) * percentScrolled)) + me._dining_menu_m.ggContentTopOffset + 'px';
			me._dining_menu_m.ggScrollPosYPercent = (me._dining_menu_m__vertScrollFg.offsetTop / me._dining_menu_m__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._dining_menu_m.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._dining_menu_m.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._dining_menu_m.ggHPercentVisible);
					me._dining_menu_m.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._dining_menu_m.clientWidth - (me._dining_menu_m.ggVertScrollVisible ? 5 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._dining_menu_m.clientWidth - (me._dining_menu_m.ggVertScrollVisible ? 5 : 0))) * me._dining_menu_m.ggHPercentVisible);
					me._dining_menu_m.ggScrollByXSmooth(diffX);
				}
			}
			if (me._dining_menu_m.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._dining_menu_m.ggVPercentVisible);
					me._dining_menu_m.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._dining_menu_m.clientHeight - (me._dining_menu_m.ggHorScrollVisible ? 5 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._dining_menu_m.clientHeight - (me._dining_menu_m.ggHorScrollVisible ? 5 : 0))) * me._dining_menu_m.ggVPercentVisible);
					me._dining_menu_m.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._dining_menu_m__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._dining_menu_m.ggDragInertiaX *= 0.96;
				me._dining_menu_m.ggDragInertiaY *= 0.96;
				me._dining_menu_m.ggScrollByX(me._dining_menu_m.ggDragInertiaX);
				me._dining_menu_m.ggScrollByY(me._dining_menu_m.ggDragInertiaY);
				if (Math.abs(me._dining_menu_m.ggDragInertiaX) < 1.0 && Math.abs(me._dining_menu_m.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._dining_menu_m__content.onmouseup = null;
			me._dining_menu_m__content.onmousemove = null;
			me._dining_menu_m__content.ontouchend = null;
			me._dining_menu_m__content.ontouchmove = null;
			me._dining_menu_m__content.onpointerup = null;
			me._dining_menu_m__content.onpointermove = null;
			setTimeout(function() { me._dining_menu_m.ggIsDragging = false; }, 100);
		}
		me._dining_menu_m__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._dining_menu_m.ggDragStartX) > 10 || Math.abs(eventY - me._dining_menu_m.ggDragStartY) > 10) me._dining_menu_m.ggIsDragging = true;
			var diffX = (eventX - me._dining_menu_m.ggDragLastX) * me._dining_menu_m.ggHPercentVisible;
			var diffY = (eventY - me._dining_menu_m.ggDragLastY) * me._dining_menu_m.ggVPercentVisible;
			me._dining_menu_m.ggDragInertiaX = -diffX;
			me._dining_menu_m.ggDragInertiaY = -diffY;
			me._dining_menu_m.ggDragLastX = eventX;
			me._dining_menu_m.ggDragLastY = eventY;
			me._dining_menu_m.ggScrollByX(-diffX);
			me._dining_menu_m.ggScrollByY(-diffY);
		}
		me._dining_menu_m__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._dining_menu_m.ggDragLastX = me._dining_menu_m.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._dining_menu_m.ggDragLastY = me._dining_menu_m.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._dining_menu_m__content.onmouseup = me._dining_menu_m__content.mousetouchend;
			me._dining_menu_m__content.ontouchend = me._dining_menu_m__content.mousetouchend;
			me._dining_menu_m__content.onmousemove = me._dining_menu_m__content.mousetouchmove;
			me._dining_menu_m__content.ontouchmove = me._dining_menu_m__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._dining_menu_m__content.onpointerup = me._dining_menu_m__content.ontouchend;
				me._dining_menu_m__content.onpointermove = me._dining_menu_m__content.ontouchmove;
			}
		}
		els.onmousedown = me._dining_menu_m__content.mousetouchstart;
		els.ontouchstart = me._dining_menu_m__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._dining_menu_m__content.mousetouchstart;
		}
		elHorScrollBg = me._dining_menu_m__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 448px; height: 5px; background-color: rgba(128,128,128,0); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._dining_menu_m__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 448px; height: 5px; background-color: rgba(255,255,255,0.666667); pointer-events: auto;');
		me._dining_menu_m.ggScrollPosX = 0;
		me._dining_menu_m.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._dining_menu_m.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._dining_menu_m.ggDragInertiaX *= 0.96;
					me._dining_menu_m.ggScrollByX(me._dining_menu_m.ggDragInertiaX);
					if (Math.abs(me._dining_menu_m.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._dining_menu_m.ggDragLastX;
				me._dining_menu_m.ggDragInertiaX = diffX;
				me._dining_menu_m.ggDragLastX = e.clientX;
				me._dining_menu_m.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._dining_menu_m.ggDragLastX = t ? t[0].clientX : e.clientX;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._dining_menu_m.ggDragInertiaX *= 0.96;
					me._dining_menu_m.ggScrollByX(me._dining_menu_m.ggDragInertiaX);
					if (Math.abs(me._dining_menu_m.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me._dining_menu_m.ggDragLastX;
				me._dining_menu_m.ggDragInertiaX = diffX;
				me._dining_menu_m.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._dining_menu_m.ggScrollByX(diffX);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elHorScrollFg.onpointerdown = elHorScrollFg.ontouchstart;
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._dining_menu_m.ggScrollWidth;
			if (e.offsetX < me._dining_menu_m.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._dining_menu_m.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._dining_menu_m__horScrollBg.getBoundingClientRect();
			var diffX = me._dining_menu_m.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._dining_menu_m.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._dining_menu_m.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me._dining_menu_m.ggScrollByXSmooth(30 * me._dining_menu_m.ggHPercentVisible * wheelDelta);
		});
		elCornerBg = me._dining_menu_m__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 5px; height: 5px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="dining_menu_M";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -100px;';
		hs+='height : 80px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._dining_menu_m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dining_menu_m.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('menu_dining') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._dining_menu_m.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._dining_menu_m.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._dining_menu_m.style.transition='left 1000ms ease 0ms, bottom 1000ms ease 0ms, width 1000ms ease 0ms, height 1000ms ease 0ms, left 1000ms ease 0ms, opacity 1500ms ease 0ms';
				if (me._dining_menu_m.ggCurrentLogicStatePosition == 0) {
					me._dining_menu_m.style.left = 'calc(50% - (100% / 2))';
					me._dining_menu_m.style.bottom='0px';
				}
				else {
					me._dining_menu_m.style.left='calc(50% - ((100% + 0px) / 2) + 0px)';
					me._dining_menu_m.style.bottom='-100px';
				}
			}
		}
		me._dining_menu_m.logicBlock_position();
		me._dining_menu_m.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('var_map') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._dining_menu_m.ggCurrentLogicStateSize != newLogicStateSize) {
				me._dining_menu_m.ggCurrentLogicStateSize = newLogicStateSize;
				me._dining_menu_m.style.transition='left 1000ms ease 0ms, bottom 1000ms ease 0ms, width 1000ms ease 0ms, height 1000ms ease 0ms, left 1000ms ease 0ms, opacity 1500ms ease 0ms';
				if (me._dining_menu_m.ggCurrentLogicStateSize == 0) {
					me._dining_menu_m.style.width='0%';
					me._dining_menu_m.style.height='0px';
					me._dining_menu_m.style.left = 'calc(50% - (0% / 2))';
					setTimeout(function() {skin.updateSize(me._dining_menu_m);}, 1050);
				}
				else {
					me._dining_menu_m.style.width='100%';
					me._dining_menu_m.style.height='80px';
					me._dining_menu_m.style.left = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me._dining_menu_m);}, 1050);
				}
			}
		}
		me._dining_menu_m.logicBlock_size();
		me._dining_menu_m.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('menu_dining') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._dining_menu_m.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._dining_menu_m.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._dining_menu_m.style.transition='left 1000ms ease 0ms, bottom 1000ms ease 0ms, width 1000ms ease 0ms, height 1000ms ease 0ms, left 1000ms ease 0ms, opacity 1500ms ease 0ms';
				if (me._dining_menu_m.ggCurrentLogicStateAlpha == 0) {
					me._dining_menu_m.style.visibility=me._dining_menu_m.ggVisible?'inherit':'hidden';
					me._dining_menu_m.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._dining_menu_m.style.opacity == 0.0) { me._dining_menu_m.style.visibility="hidden"; } }, 1505);
					me._dining_menu_m.style.opacity=0;
				}
			}
		}
		me._dining_menu_m.logicBlock_alpha();
		me._dining_menu_m.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				var containerWidth = offsetWidthWithScale;
				if (this.ggVertScrollVisible) containerWidth -= 5;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = ((contentWidth/-2) - (this.ggVertScrollVisible ? (5/2) : 0)) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				var containerHeight = this.clientHeight;
				if (this.ggHorScrollVisible) containerHeight -= 5;
				if (contentHeight < containerHeight) {
					this.ggContent.style.top = '50%';
					this.ggContent.style.marginTop = ((contentHeight/-2) - (this.ggHorScrollVisible ? (5/2) : 0))  + 'px';
				}
				else {
					this.ggContent.style.top = this.ggContentTopOffset + 'px';
					this.ggContent.style.marginTop = '0px';
				}
				if (contentWidth > Math.ceil(offsetWidthWithScale)) {
					me._dining_menu_m__horScrollBg.style.visibility = 'inherit';
					me._dining_menu_m__horScrollFg.style.visibility = 'inherit';
					me._dining_menu_m.ggHorScrollVisible = true;
				} else {
					me._dining_menu_m__horScrollBg.style.visibility = 'hidden';
					me._dining_menu_m__horScrollFg.style.visibility = 'hidden';
					me._dining_menu_m.ggHorScrollVisible = false;
				}
				if(me._dining_menu_m.ggHorScrollVisible) {
					me._dining_menu_m.ggAvailableHeight = me._dining_menu_m.clientHeight - 5;
					if (me._dining_menu_m.ggVertScrollVisible) {
						me._dining_menu_m.ggAvailableWidth = me._dining_menu_m.clientWidth - 5;
						me._dining_menu_m.ggAvailableWidthWithScale = me._dining_menu_m.getBoundingClientRect().width - me._dining_menu_m__horScrollBg.getBoundingClientRect().height;
					} else {
						me._dining_menu_m.ggAvailableWidth = me._dining_menu_m.clientWidth;
						me._dining_menu_m.ggAvailableWidthWithScale = me._dining_menu_m.getBoundingClientRect().width;
					}
					me._dining_menu_m__horScrollBg.style.width = me._dining_menu_m.ggAvailableWidth + 'px';
					me._dining_menu_m.ggHPercentVisible = contentWidth != 0 ? me._dining_menu_m.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me._dining_menu_m.ggHPercentVisible > 1.0) me._dining_menu_m.ggHPercentVisible = 1.0;
					me._dining_menu_m.ggScrollWidth = Math.round(me._dining_menu_m__horScrollBg.offsetWidth * me._dining_menu_m.ggHPercentVisible);
					me._dining_menu_m__horScrollFg.style.width = me._dining_menu_m.ggScrollWidth + 'px';
					me._dining_menu_m.ggScrollPosX = me._dining_menu_m.ggScrollPosXPercent * me._dining_menu_m.ggAvailableWidth;
					me._dining_menu_m.ggScrollPosX = Math.min(me._dining_menu_m.ggScrollPosX, me._dining_menu_m__horScrollBg.offsetWidth - me._dining_menu_m__horScrollFg.offsetWidth);
					me._dining_menu_m__horScrollFg.style.left = me._dining_menu_m.ggScrollPosX + 'px';
					if (me._dining_menu_m.ggHPercentVisible < 1.0) {
						let percentScrolled = me._dining_menu_m.ggScrollPosX / (me._dining_menu_m__horScrollBg.offsetWidth - me._dining_menu_m__horScrollFg.offsetWidth);
						me._dining_menu_m__content.style.left = -(Math.round((me._dining_menu_m.ggContentWidth * (1.0 - me._dining_menu_m.ggHPercentVisible)) * percentScrolled)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me._dining_menu_m.ggAvailableHeight = me._dining_menu_m.clientHeight;
					me._dining_menu_m.ggScrollPosX = 0;
					me._dining_menu_m.ggScrollPosXPercent = 0.0;
				}
				if(horScrollWasVisible != me._dining_menu_m.ggHorScrollVisible || vertScrollWasVisible != me._dining_menu_m.ggVertScrollVisible) {
					skin.updateSize(me._dining_menu_m);
					me._dining_menu_m.ggUpdatePosition();
				}
			}
		}
		el=me._dining_tint_m=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._dining_tint_m;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="dining_tint_M";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(33,33,33,0.501961);';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._dining_tint_m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dining_tint_m.ggUpdatePosition=function (useTransition) {
		}
		me._dining_menu_m__content.appendChild(me._dining_tint_m);
		el=me._dining_cloner_m=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._dining_cloner_m;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 94;
		el.ggHeight = 80;
		el.ggSizeChanged = false;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._dining_cloner_m.ggUpdating == true) return;
			me._dining_cloner_m.ggUpdating = true;
			var el=me._dining_cloner_m;
			var curNumRows = 0;
			curNumRows = me._dining_cloner_m.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && !el.ggSizeChanged && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._dining_cloner_m.ggUpdating = false;
				return;
			} else {
				el.ggSizeChanged = false;
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._dining_cloner_m.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._dining_cloner_m.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._dining_cloner_m.getFilteredNodes(tourNodes, filter);
			me._dining_cloner_m.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._dining_cloner_m.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._dining_cloner_m.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._dining_cloner_m.ggWidth) + 'px';
				parameter.width=me._dining_cloner_m.ggWidth + 'px';
				parameter.height=me._dining_cloner_m.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_dining_cloner_m_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					row = 0;
					column++;
					el.ggNumCols++;
				}
			}
			me._dining_cloner_m.ggNodeCount = me._dining_cloner_m.ggNumFilterPassed;
			me._dining_cloner_m.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._dining_cloner_m.parentNode && me._dining_cloner_m.parentNode.classList.contains('ggskin_subelement') && me._dining_cloner_m.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._dining_cloner_m.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "Dining";
		el.ggId="dining_cloner_M";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 80px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 94px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._dining_cloner_m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dining_cloner_m.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._dining_cloner_m.childNodes.length; i++) {
				var child=me._dining_cloner_m.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._dining_cloner_m.ggUpdatePosition=function (useTransition) {
			me._dining_cloner_m.ggUpdate();
		}
		me._dining_menu_m__content.appendChild(me._dining_cloner_m);
		me._dining_desktop_m.appendChild(me._dining_menu_m);
		me.divSkin.appendChild(me._dining_desktop_m);
		el=me._lobby_desktop_m=document.createElement('div');
		el.ggId="lobby_desktop_M";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 20px;';
		hs+='height : 80px;';
		hs+='left : calc(50% - ((calc(95% - 50px) + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : calc(95% - 50px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._lobby_desktop_m.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._lobby_desktop_m.ggUpdatePosition=function (useTransition) {
		}
		el=me._lobby_menu_m=document.createElement('div');
		els=me._lobby_menu_m__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 79px;';
		hs+='left : 50%;';
		hs+='margin-left : -223.5px;';
		hs+='margin-top : -39.5px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 50%;';
		hs+='width : 447px;';
		hs+="";
		els.setAttribute('style',hs);
		me._lobby_menu_m.ggScrollByX = function(diffX) {
			if(!me._lobby_menu_m.ggHorScrollVisible || diffX == 0 || me._lobby_menu_m.ggHPercentVisible >= 1.0) return;
			me._lobby_menu_m.ggScrollPosX = (me._lobby_menu_m__horScrollFg.offsetLeft + diffX);
			me._lobby_menu_m.ggScrollPosX = Math.max(me._lobby_menu_m.ggScrollPosX, 0);
			me._lobby_menu_m.ggScrollPosX = Math.min(me._lobby_menu_m.ggScrollPosX, me._lobby_menu_m__horScrollBg.offsetWidth - me._lobby_menu_m__horScrollFg.offsetWidth);
			me._lobby_menu_m__horScrollFg.style.left = me._lobby_menu_m.ggScrollPosX + 'px';
			let percentScrolled = me._lobby_menu_m.ggScrollPosX / (me._lobby_menu_m__horScrollBg.offsetWidth - me._lobby_menu_m__horScrollFg.offsetWidth);
			me._lobby_menu_m__content.style.left = -(Math.round((me._lobby_menu_m.ggContentWidth * (1.0 - me._lobby_menu_m.ggHPercentVisible)) * percentScrolled)) + me._lobby_menu_m.ggContentLeftOffset + 'px';
			me._lobby_menu_m.ggScrollPosXPercent = (me._lobby_menu_m__horScrollFg.offsetLeft / me._lobby_menu_m__horScrollBg.offsetWidth);
		}
		me._lobby_menu_m.ggScrollByXSmooth = function(diffX) {
			if(!me._lobby_menu_m.ggHorScrollVisible || diffX == 0 || me._lobby_menu_m.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._lobby_menu_m.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._lobby_menu_m.ggScrollPosX >= me._lobby_menu_m__horScrollBg.offsetWidth - me._lobby_menu_m__horScrollFg.offsetWidth)) {
					me._lobby_menu_m.ggScrollPosX = Math.min(me._lobby_menu_m.ggScrollPosX, me._lobby_menu_m__horScrollBg.offsetWidth - me._lobby_menu_m__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._lobby_menu_m.ggScrollPosX <= 0)) {
					me._lobby_menu_m.ggScrollPosX = Math.max(me._lobby_menu_m.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._lobby_menu_m__horScrollFg.style.left = me._lobby_menu_m.ggScrollPosX + 'px';
			let percentScrolled = me._lobby_menu_m.ggScrollPosX / (me._lobby_menu_m__horScrollBg.offsetWidth - me._lobby_menu_m__horScrollFg.offsetWidth);
			me._lobby_menu_m__content.style.left = -(Math.round((me._lobby_menu_m.ggContentWidth * (1.0 - me._lobby_menu_m.ggHPercentVisible)) * percentScrolled)) + me._lobby_menu_m.ggContentLeftOffset + 'px';
			me._lobby_menu_m.ggScrollPosXPercent = (me._lobby_menu_m__horScrollFg.offsetLeft / me._lobby_menu_m__horScrollBg.offsetWidth);
			}, 10);
		}
		me._lobby_menu_m.ggScrollByY = function(diffY) {
			if(!me._lobby_menu_m.ggVertScrollVisible || diffY == 0 || me._lobby_menu_m.ggVPercentVisible >= 1.0) return;
			me._lobby_menu_m.ggScrollPosY = (me._lobby_menu_m__vertScrollFg.offsetTop + diffY);
			me._lobby_menu_m.ggScrollPosY = Math.max(me._lobby_menu_m.ggScrollPosY, 0);
			me._lobby_menu_m.ggScrollPosY = Math.min(me._lobby_menu_m.ggScrollPosY, me._lobby_menu_m__vertScrollBg.offsetHeight - me._lobby_menu_m__vertScrollFg.offsetHeight);
			me._lobby_menu_m__vertScrollFg.style.top = me._lobby_menu_m.ggScrollPosY + 'px';
			let percentScrolled = me._lobby_menu_m.ggScrollPosY / (me._lobby_menu_m__vertScrollBg.offsetHeight - me._lobby_menu_m__vertScrollFg.offsetHeight);
			me._lobby_menu_m__content.style.top = -(Math.round((me._lobby_menu_m.ggContentHeight * (1.0 - me._lobby_menu_m.ggVPercentVisible)) * percentScrolled)) + me._lobby_menu_m.ggContentTopOffset + 'px';
			me._lobby_menu_m.ggScrollPosYPercent = (me._lobby_menu_m__vertScrollFg.offsetTop / me._lobby_menu_m__vertScrollBg.offsetHeight);
		}
		me._lobby_menu_m.ggScrollByYSmooth = function(diffY) {
			if(!me._lobby_menu_m.ggVertScrollVisible || diffY == 0 || me._lobby_menu_m.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._lobby_menu_m.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._lobby_menu_m.ggScrollPosY >= me._lobby_menu_m__vertScrollBg.offsetHeight - me._lobby_menu_m__vertScrollFg.offsetHeight)) {
					me._lobby_menu_m.ggScrollPosY = Math.min(me._lobby_menu_m.ggScrollPosY, me._lobby_menu_m__vertScrollBg.offsetHeight - me._lobby_menu_m__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._lobby_menu_m.ggScrollPosY <= 0)) {
					me._lobby_menu_m.ggScrollPosY = Math.max(me._lobby_menu_m.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._lobby_menu_m__vertScrollFg.style.top = me._lobby_menu_m.ggScrollPosY + 'px';
			let percentScrolled = me._lobby_menu_m.ggScrollPosY / (me._lobby_menu_m__vertScrollBg.offsetHeight - me._lobby_menu_m__vertScrollFg.offsetHeight);
			me._lobby_menu_m__content.style.top = -(Math.round((me._lobby_menu_m.ggContentHeight * (1.0 - me._lobby_menu_m.ggVPercentVisible)) * percentScrolled)) + me._lobby_menu_m.ggContentTopOffset + 'px';
			me._lobby_menu_m.ggScrollPosYPercent = (me._lobby_menu_m__vertScrollFg.offsetTop / me._lobby_menu_m__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._lobby_menu_m.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._lobby_menu_m.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._lobby_menu_m.ggHPercentVisible);
					me._lobby_menu_m.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._lobby_menu_m.clientWidth - (me._lobby_menu_m.ggVertScrollVisible ? 5 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._lobby_menu_m.clientWidth - (me._lobby_menu_m.ggVertScrollVisible ? 5 : 0))) * me._lobby_menu_m.ggHPercentVisible);
					me._lobby_menu_m.ggScrollByXSmooth(diffX);
				}
			}
			if (me._lobby_menu_m.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._lobby_menu_m.ggVPercentVisible);
					me._lobby_menu_m.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._lobby_menu_m.clientHeight - (me._lobby_menu_m.ggHorScrollVisible ? 5 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._lobby_menu_m.clientHeight - (me._lobby_menu_m.ggHorScrollVisible ? 5 : 0))) * me._lobby_menu_m.ggVPercentVisible);
					me._lobby_menu_m.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._lobby_menu_m__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._lobby_menu_m.ggDragInertiaX *= 0.96;
				me._lobby_menu_m.ggDragInertiaY *= 0.96;
				me._lobby_menu_m.ggScrollByX(me._lobby_menu_m.ggDragInertiaX);
				me._lobby_menu_m.ggScrollByY(me._lobby_menu_m.ggDragInertiaY);
				if (Math.abs(me._lobby_menu_m.ggDragInertiaX) < 1.0 && Math.abs(me._lobby_menu_m.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._lobby_menu_m__content.onmouseup = null;
			me._lobby_menu_m__content.onmousemove = null;
			me._lobby_menu_m__content.ontouchend = null;
			me._lobby_menu_m__content.ontouchmove = null;
			me._lobby_menu_m__content.onpointerup = null;
			me._lobby_menu_m__content.onpointermove = null;
			setTimeout(function() { me._lobby_menu_m.ggIsDragging = false; }, 100);
		}
		me._lobby_menu_m__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._lobby_menu_m.ggDragStartX) > 10 || Math.abs(eventY - me._lobby_menu_m.ggDragStartY) > 10) me._lobby_menu_m.ggIsDragging = true;
			var diffX = (eventX - me._lobby_menu_m.ggDragLastX) * me._lobby_menu_m.ggHPercentVisible;
			var diffY = (eventY - me._lobby_menu_m.ggDragLastY) * me._lobby_menu_m.ggVPercentVisible;
			me._lobby_menu_m.ggDragInertiaX = -diffX;
			me._lobby_menu_m.ggDragInertiaY = -diffY;
			me._lobby_menu_m.ggDragLastX = eventX;
			me._lobby_menu_m.ggDragLastY = eventY;
			me._lobby_menu_m.ggScrollByX(-diffX);
			me._lobby_menu_m.ggScrollByY(-diffY);
		}
		me._lobby_menu_m__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._lobby_menu_m.ggDragLastX = me._lobby_menu_m.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._lobby_menu_m.ggDragLastY = me._lobby_menu_m.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._lobby_menu_m__content.onmouseup = me._lobby_menu_m__content.mousetouchend;
			me._lobby_menu_m__content.ontouchend = me._lobby_menu_m__content.mousetouchend;
			me._lobby_menu_m__content.onmousemove = me._lobby_menu_m__content.mousetouchmove;
			me._lobby_menu_m__content.ontouchmove = me._lobby_menu_m__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._lobby_menu_m__content.onpointerup = me._lobby_menu_m__content.ontouchend;
				me._lobby_menu_m__content.onpointermove = me._lobby_menu_m__content.ontouchmove;
			}
		}
		els.onmousedown = me._lobby_menu_m__content.mousetouchstart;
		els.ontouchstart = me._lobby_menu_m__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._lobby_menu_m__content.mousetouchstart;
		}
		elHorScrollBg = me._lobby_menu_m__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 448px; height: 5px; background-color: rgba(128,128,128,0); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._lobby_menu_m__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 448px; height: 5px; background-color: rgba(255,255,255,0.666667); pointer-events: auto;');
		me._lobby_menu_m.ggScrollPosX = 0;
		me._lobby_menu_m.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._lobby_menu_m.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._lobby_menu_m.ggDragInertiaX *= 0.96;
					me._lobby_menu_m.ggScrollByX(me._lobby_menu_m.ggDragInertiaX);
					if (Math.abs(me._lobby_menu_m.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._lobby_menu_m.ggDragLastX;
				me._lobby_menu_m.ggDragInertiaX = diffX;
				me._lobby_menu_m.ggDragLastX = e.clientX;
				me._lobby_menu_m.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._lobby_menu_m.ggDragLastX = t ? t[0].clientX : e.clientX;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._lobby_menu_m.ggDragInertiaX *= 0.96;
					me._lobby_menu_m.ggScrollByX(me._lobby_menu_m.ggDragInertiaX);
					if (Math.abs(me._lobby_menu_m.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me._lobby_menu_m.ggDragLastX;
				me._lobby_menu_m.ggDragInertiaX = diffX;
				me._lobby_menu_m.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._lobby_menu_m.ggScrollByX(diffX);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elHorScrollFg.onpointerdown = elHorScrollFg.ontouchstart;
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._lobby_menu_m.ggScrollWidth;
			if (e.offsetX < me._lobby_menu_m.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._lobby_menu_m.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._lobby_menu_m__horScrollBg.getBoundingClientRect();
			var diffX = me._lobby_menu_m.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._lobby_menu_m.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._lobby_menu_m.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me._lobby_menu_m.ggScrollByXSmooth(30 * me._lobby_menu_m.ggHPercentVisible * wheelDelta);
		});
		elCornerBg = me._lobby_menu_m__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 5px; height: 5px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="lobby_menu_M";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -100px;';
		hs+='height : 80px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._lobby_menu_m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._lobby_menu_m.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('menu_lobby') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._lobby_menu_m.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._lobby_menu_m.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._lobby_menu_m.style.transition='left 1000ms ease 0ms, bottom 1000ms ease 0ms, width 1000ms ease 0ms, height 1000ms ease 0ms, left 1000ms ease 0ms, opacity 1500ms ease 0ms';
				if (me._lobby_menu_m.ggCurrentLogicStatePosition == 0) {
					me._lobby_menu_m.style.left = 'calc(50% - (100% / 2))';
					me._lobby_menu_m.style.bottom='0px';
				}
				else {
					me._lobby_menu_m.style.left='calc(50% - ((100% + 0px) / 2) + 0px)';
					me._lobby_menu_m.style.bottom='-100px';
				}
			}
		}
		me._lobby_menu_m.logicBlock_position();
		me._lobby_menu_m.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('var_map') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._lobby_menu_m.ggCurrentLogicStateSize != newLogicStateSize) {
				me._lobby_menu_m.ggCurrentLogicStateSize = newLogicStateSize;
				me._lobby_menu_m.style.transition='left 1000ms ease 0ms, bottom 1000ms ease 0ms, width 1000ms ease 0ms, height 1000ms ease 0ms, left 1000ms ease 0ms, opacity 1500ms ease 0ms';
				if (me._lobby_menu_m.ggCurrentLogicStateSize == 0) {
					me._lobby_menu_m.style.width='0%';
					me._lobby_menu_m.style.height='0px';
					me._lobby_menu_m.style.left = 'calc(50% - (0% / 2))';
					setTimeout(function() {skin.updateSize(me._lobby_menu_m);}, 1050);
				}
				else {
					me._lobby_menu_m.style.width='100%';
					me._lobby_menu_m.style.height='80px';
					me._lobby_menu_m.style.left = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me._lobby_menu_m);}, 1050);
				}
			}
		}
		me._lobby_menu_m.logicBlock_size();
		me._lobby_menu_m.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('menu_lobby') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._lobby_menu_m.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._lobby_menu_m.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._lobby_menu_m.style.transition='left 1000ms ease 0ms, bottom 1000ms ease 0ms, width 1000ms ease 0ms, height 1000ms ease 0ms, left 1000ms ease 0ms, opacity 1500ms ease 0ms';
				if (me._lobby_menu_m.ggCurrentLogicStateAlpha == 0) {
					me._lobby_menu_m.style.visibility=me._lobby_menu_m.ggVisible?'inherit':'hidden';
					me._lobby_menu_m.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._lobby_menu_m.style.opacity == 0.0) { me._lobby_menu_m.style.visibility="hidden"; } }, 1505);
					me._lobby_menu_m.style.opacity=0;
				}
			}
		}
		me._lobby_menu_m.logicBlock_alpha();
		me._lobby_menu_m.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				var containerWidth = offsetWidthWithScale;
				if (this.ggVertScrollVisible) containerWidth -= 5;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = ((contentWidth/-2) - (this.ggVertScrollVisible ? (5/2) : 0)) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				var containerHeight = this.clientHeight;
				if (this.ggHorScrollVisible) containerHeight -= 5;
				if (contentHeight < containerHeight) {
					this.ggContent.style.top = '50%';
					this.ggContent.style.marginTop = ((contentHeight/-2) - (this.ggHorScrollVisible ? (5/2) : 0))  + 'px';
				}
				else {
					this.ggContent.style.top = this.ggContentTopOffset + 'px';
					this.ggContent.style.marginTop = '0px';
				}
				if (contentWidth > Math.ceil(offsetWidthWithScale)) {
					me._lobby_menu_m__horScrollBg.style.visibility = 'inherit';
					me._lobby_menu_m__horScrollFg.style.visibility = 'inherit';
					me._lobby_menu_m.ggHorScrollVisible = true;
				} else {
					me._lobby_menu_m__horScrollBg.style.visibility = 'hidden';
					me._lobby_menu_m__horScrollFg.style.visibility = 'hidden';
					me._lobby_menu_m.ggHorScrollVisible = false;
				}
				if(me._lobby_menu_m.ggHorScrollVisible) {
					me._lobby_menu_m.ggAvailableHeight = me._lobby_menu_m.clientHeight - 5;
					if (me._lobby_menu_m.ggVertScrollVisible) {
						me._lobby_menu_m.ggAvailableWidth = me._lobby_menu_m.clientWidth - 5;
						me._lobby_menu_m.ggAvailableWidthWithScale = me._lobby_menu_m.getBoundingClientRect().width - me._lobby_menu_m__horScrollBg.getBoundingClientRect().height;
					} else {
						me._lobby_menu_m.ggAvailableWidth = me._lobby_menu_m.clientWidth;
						me._lobby_menu_m.ggAvailableWidthWithScale = me._lobby_menu_m.getBoundingClientRect().width;
					}
					me._lobby_menu_m__horScrollBg.style.width = me._lobby_menu_m.ggAvailableWidth + 'px';
					me._lobby_menu_m.ggHPercentVisible = contentWidth != 0 ? me._lobby_menu_m.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me._lobby_menu_m.ggHPercentVisible > 1.0) me._lobby_menu_m.ggHPercentVisible = 1.0;
					me._lobby_menu_m.ggScrollWidth = Math.round(me._lobby_menu_m__horScrollBg.offsetWidth * me._lobby_menu_m.ggHPercentVisible);
					me._lobby_menu_m__horScrollFg.style.width = me._lobby_menu_m.ggScrollWidth + 'px';
					me._lobby_menu_m.ggScrollPosX = me._lobby_menu_m.ggScrollPosXPercent * me._lobby_menu_m.ggAvailableWidth;
					me._lobby_menu_m.ggScrollPosX = Math.min(me._lobby_menu_m.ggScrollPosX, me._lobby_menu_m__horScrollBg.offsetWidth - me._lobby_menu_m__horScrollFg.offsetWidth);
					me._lobby_menu_m__horScrollFg.style.left = me._lobby_menu_m.ggScrollPosX + 'px';
					if (me._lobby_menu_m.ggHPercentVisible < 1.0) {
						let percentScrolled = me._lobby_menu_m.ggScrollPosX / (me._lobby_menu_m__horScrollBg.offsetWidth - me._lobby_menu_m__horScrollFg.offsetWidth);
						me._lobby_menu_m__content.style.left = -(Math.round((me._lobby_menu_m.ggContentWidth * (1.0 - me._lobby_menu_m.ggHPercentVisible)) * percentScrolled)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me._lobby_menu_m.ggAvailableHeight = me._lobby_menu_m.clientHeight;
					me._lobby_menu_m.ggScrollPosX = 0;
					me._lobby_menu_m.ggScrollPosXPercent = 0.0;
				}
				if(horScrollWasVisible != me._lobby_menu_m.ggHorScrollVisible || vertScrollWasVisible != me._lobby_menu_m.ggVertScrollVisible) {
					skin.updateSize(me._lobby_menu_m);
					me._lobby_menu_m.ggUpdatePosition();
				}
			}
		}
		el=me._lobby_tint_m=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._lobby_tint_m;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="lobby_tint_M";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(33,33,33,0.501961);';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._lobby_tint_m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._lobby_tint_m.ggUpdatePosition=function (useTransition) {
		}
		me._lobby_menu_m__content.appendChild(me._lobby_tint_m);
		el=me._lobby_cloner_m=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._lobby_cloner_m;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 94;
		el.ggHeight = 80;
		el.ggSizeChanged = false;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._lobby_cloner_m.ggUpdating == true) return;
			me._lobby_cloner_m.ggUpdating = true;
			var el=me._lobby_cloner_m;
			var curNumRows = 0;
			curNumRows = me._lobby_cloner_m.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && !el.ggSizeChanged && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._lobby_cloner_m.ggUpdating = false;
				return;
			} else {
				el.ggSizeChanged = false;
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._lobby_cloner_m.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._lobby_cloner_m.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._lobby_cloner_m.getFilteredNodes(tourNodes, filter);
			me._lobby_cloner_m.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._lobby_cloner_m.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._lobby_cloner_m.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._lobby_cloner_m.ggWidth) + 'px';
				parameter.width=me._lobby_cloner_m.ggWidth + 'px';
				parameter.height=me._lobby_cloner_m.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_lobby_cloner_m_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					row = 0;
					column++;
					el.ggNumCols++;
				}
			}
			me._lobby_cloner_m.ggNodeCount = me._lobby_cloner_m.ggNumFilterPassed;
			me._lobby_cloner_m.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._lobby_cloner_m.parentNode && me._lobby_cloner_m.parentNode.classList.contains('ggskin_subelement') && me._lobby_cloner_m.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._lobby_cloner_m.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "Lobby";
		el.ggId="lobby_cloner_M";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 80px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 94px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._lobby_cloner_m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._lobby_cloner_m.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._lobby_cloner_m.childNodes.length; i++) {
				var child=me._lobby_cloner_m.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._lobby_cloner_m.ggUpdatePosition=function (useTransition) {
			me._lobby_cloner_m.ggUpdate();
		}
		me._lobby_menu_m__content.appendChild(me._lobby_cloner_m);
		me._lobby_desktop_m.appendChild(me._lobby_menu_m);
		me.divSkin.appendChild(me._lobby_desktop_m);
		el=me._room_button_mobile=document.createElement('div');
		els=me._room_button_mobile__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Room Button_Mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 120px;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : pointer;';
		hs+='height : auto;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='visibility : inherit;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(150,150,150,0.705882);';
		hs+='border-color : rgba(33,33,33,0.784314);';
		hs+='border-radius : 10px;';
		hs+='border-style : solid;';
		hs+='border-width : 1px 2px 2px 1px;';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._room_button_mobile.ggUpdateText=function() {
			var params = [];
			var hs = player._("\u4f4f\u623f", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._room_button_mobile.ggUpdateText();
		el.appendChild(els);
		me._room_button_mobile.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._room_button_mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('resp_phone') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._room_button_mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._room_button_mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._room_button_mobile.style.transition='background-color 0s, border-width 0s, color 0s';
				if (me._room_button_mobile.ggCurrentLogicStateVisible == 0) {
					me._room_button_mobile.style.visibility="hidden";
					me._room_button_mobile.ggVisible=false;
				}
				else {
					me._room_button_mobile.style.visibility=(Number(me._room_button_mobile.style.opacity)>0||!me._room_button_mobile.style.opacity)?'inherit':'hidden';
					me._room_button_mobile.ggVisible=true;
				}
			}
		}
		me._room_button_mobile.logicBlock_visible();
		me._room_button_mobile.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseDown['room_button_mobile'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else if (
				((player.getVariableValue('menu_room') == true))
			)
			{
				newLogicStateBackgroundColor = 1;
			}
			else if (
				((me.elementMouseOver['room_button_mobile'] == true))
			)
			{
				newLogicStateBackgroundColor = 2;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._room_button_mobile.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._room_button_mobile.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._room_button_mobile__text.style.transition='background-color 0s, border-width 0s, color 0s';
				if (me._room_button_mobile.ggCurrentLogicStateBackgroundColor == 0) {
					me._room_button_mobile__text.style.backgroundColor="rgba(125,125,125,0.490196)";
				}
				else if (me._room_button_mobile.ggCurrentLogicStateBackgroundColor == 1) {
					me._room_button_mobile__text.style.backgroundColor="rgba(255,255,255,1)";
				}
				else if (me._room_button_mobile.ggCurrentLogicStateBackgroundColor == 2) {
					me._room_button_mobile__text.style.backgroundColor="rgba(200,200,200,0.784314)";
				}
				else {
					me._room_button_mobile__text.style.backgroundColor="rgba(150,150,150,0.705882)";
				}
			}
		}
		me._room_button_mobile.logicBlock_backgroundcolor();
		me._room_button_mobile.logicBlock_borderwidth = function() {
			var newLogicStateBorderWidth;
			if (
				((me.elementMouseDown['room_button_mobile'] == true))
			)
			{
				newLogicStateBorderWidth = 0;
			}
			else if (
				((me.elementMouseOver['room_button_mobile'] == true))
			)
			{
				newLogicStateBorderWidth = 1;
			}
			else {
				newLogicStateBorderWidth = -1;
			}
			if (me._room_button_mobile.ggCurrentLogicStateBorderWidth != newLogicStateBorderWidth) {
				me._room_button_mobile.ggCurrentLogicStateBorderWidth = newLogicStateBorderWidth;
				me._room_button_mobile.style.transition='background-color 0s, border-width 0s, color 0s';
				if (me._room_button_mobile.ggCurrentLogicStateBorderWidth == 0) {
					me._room_button_mobile__text.style.borderWidth="3px 0px 0px 3px";
				}
				else if (me._room_button_mobile.ggCurrentLogicStateBorderWidth == 1) {
					me._room_button_mobile__text.style.borderWidth="0px 3px 3px 0px";
				}
				else {
					me._room_button_mobile__text.style.borderWidth="1px 2px 2px 1px";
				}
			}
		}
		me._room_button_mobile.logicBlock_borderwidth();
		me._room_button_mobile.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseDown['room_button_mobile'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._room_button_mobile.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._room_button_mobile.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._room_button_mobile__text.style.transition='background-color 0s, border-width 0s, color 0s';
				if (me._room_button_mobile.ggCurrentLogicStateTextColor == 0) {
					me._room_button_mobile.style.color="rgba(255,255,255,1)";
				}
				else {
					me._room_button_mobile.style.color="rgba(0,0,0,1)";
				}
			}
		}
		me._room_button_mobile.logicBlock_textcolor();
		me._room_button_mobile.onclick=function (e) {
			player.setVariableValue('menu_room', !player.getVariableValue('menu_room'));
			player.setVariableValue('menu_entertainment', false);
			player.setVariableValue('menu_view', false);
			player.setVariableValue('menu_lobby', false);
			player.setVariableValue('menu_dining', false);
		}
		me._room_button_mobile.onmouseenter=function (e) {
			me.elementMouseOver['room_button_mobile']=true;
			me._room_button_mobile.logicBlock_backgroundcolor();
			me._room_button_mobile.logicBlock_borderwidth();
		}
		me._room_button_mobile.onmousedown=function (e) {
			me.elementMouseDown['room_button_mobile']=true;
			me._room_button_mobile.logicBlock_backgroundcolor();
			me._room_button_mobile.logicBlock_borderwidth();
			me._room_button_mobile.logicBlock_textcolor();
		}
		me._room_button_mobile.onmouseup=function (e) {
			me.elementMouseDown['room_button_mobile']=false;
			me._room_button_mobile.logicBlock_backgroundcolor();
			me._room_button_mobile.logicBlock_borderwidth();
			me._room_button_mobile.logicBlock_textcolor();
		}
		me._room_button_mobile.onmouseleave=function (e) {
			me.elementMouseDown['room_button_mobile']=false;
			me.elementMouseOver['room_button_mobile']=false;
			me._room_button_mobile.logicBlock_backgroundcolor();
			me._room_button_mobile.logicBlock_backgroundcolor();
			me._room_button_mobile.logicBlock_borderwidth();
			me._room_button_mobile.logicBlock_borderwidth();
			me._room_button_mobile.logicBlock_textcolor();
		}
		me._room_button_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._room_button_mobile);
		el=me._view_button_mobile=document.createElement('div');
		els=me._view_button_mobile__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="View Button_Mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 160px;';
		hs+='color : #000000;';
		hs+='cursor : pointer;';
		hs+='height : auto;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='visibility : inherit;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(150,150,150,0.705882);';
		hs+='border-color : rgba(33,33,33,0.784314);';
		hs+='border-radius : 10px;';
		hs+='border-style : solid;';
		hs+='border-width : 2px 2px 2px 2px;';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._view_button_mobile.ggUpdateText=function() {
			var params = [];
			var hs = player._("\u666f\u89c0", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._view_button_mobile.ggUpdateText();
		el.appendChild(els);
		me._view_button_mobile.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._view_button_mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('resp_phone') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._view_button_mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._view_button_mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._view_button_mobile.style.transition='background-color 0s, border-width 0s, color 0s';
				if (me._view_button_mobile.ggCurrentLogicStateVisible == 0) {
					me._view_button_mobile.style.visibility="hidden";
					me._view_button_mobile.ggVisible=false;
				}
				else {
					me._view_button_mobile.style.visibility=(Number(me._view_button_mobile.style.opacity)>0||!me._view_button_mobile.style.opacity)?'inherit':'hidden';
					me._view_button_mobile.ggVisible=true;
				}
			}
		}
		me._view_button_mobile.logicBlock_visible();
		me._view_button_mobile.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseDown['view_button_mobile'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else if (
				((player.getVariableValue('menu_view') == true))
			)
			{
				newLogicStateBackgroundColor = 1;
			}
			else if (
				((me.elementMouseOver['view_button_mobile'] == true))
			)
			{
				newLogicStateBackgroundColor = 2;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._view_button_mobile.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._view_button_mobile.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._view_button_mobile__text.style.transition='background-color 0s, border-width 0s, color 0s';
				if (me._view_button_mobile.ggCurrentLogicStateBackgroundColor == 0) {
					me._view_button_mobile__text.style.backgroundColor="rgba(100,100,100,0.862745)";
				}
				else if (me._view_button_mobile.ggCurrentLogicStateBackgroundColor == 1) {
					me._view_button_mobile__text.style.backgroundColor="rgba(255,255,255,1)";
				}
				else if (me._view_button_mobile.ggCurrentLogicStateBackgroundColor == 2) {
					me._view_button_mobile__text.style.backgroundColor="rgba(200,200,200,0.784314)";
				}
				else {
					me._view_button_mobile__text.style.backgroundColor="rgba(150,150,150,0.705882)";
				}
			}
		}
		me._view_button_mobile.logicBlock_backgroundcolor();
		me._view_button_mobile.logicBlock_borderwidth = function() {
			var newLogicStateBorderWidth;
			if (
				((me.elementMouseDown['view_button_mobile'] == true))
			)
			{
				newLogicStateBorderWidth = 0;
			}
			else if (
				((me.elementMouseOver['view_button_mobile'] == true))
			)
			{
				newLogicStateBorderWidth = 1;
			}
			else {
				newLogicStateBorderWidth = -1;
			}
			if (me._view_button_mobile.ggCurrentLogicStateBorderWidth != newLogicStateBorderWidth) {
				me._view_button_mobile.ggCurrentLogicStateBorderWidth = newLogicStateBorderWidth;
				me._view_button_mobile.style.transition='background-color 0s, border-width 0s, color 0s';
				if (me._view_button_mobile.ggCurrentLogicStateBorderWidth == 0) {
					me._view_button_mobile__text.style.borderWidth="4px 1px 1px 4px";
				}
				else if (me._view_button_mobile.ggCurrentLogicStateBorderWidth == 1) {
					me._view_button_mobile__text.style.borderWidth="1px 4px 4px 1px";
				}
				else {
					me._view_button_mobile__text.style.borderWidth="2px 2px 2px 2px";
				}
			}
		}
		me._view_button_mobile.logicBlock_borderwidth();
		me._view_button_mobile.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseDown['view_button_mobile'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._view_button_mobile.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._view_button_mobile.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._view_button_mobile__text.style.transition='background-color 0s, border-width 0s, color 0s';
				if (me._view_button_mobile.ggCurrentLogicStateTextColor == 0) {
					me._view_button_mobile.style.color="rgba(255,255,255,1)";
				}
				else {
					me._view_button_mobile.style.color="rgba(0,0,0,1)";
				}
			}
		}
		me._view_button_mobile.logicBlock_textcolor();
		me._view_button_mobile.onclick=function (e) {
			player.setVariableValue('menu_lobby', false);
			player.setVariableValue('menu_room', false);
			player.setVariableValue('menu_dining', false);
			player.setVariableValue('menu_entertainment', false);
			player.setVariableValue('menu_view', !player.getVariableValue('menu_view'));
		}
		me._view_button_mobile.onmouseenter=function (e) {
			me.elementMouseOver['view_button_mobile']=true;
			me._view_button_mobile.logicBlock_backgroundcolor();
			me._view_button_mobile.logicBlock_borderwidth();
		}
		me._view_button_mobile.onmousedown=function (e) {
			me.elementMouseDown['view_button_mobile']=true;
			me._view_button_mobile.logicBlock_backgroundcolor();
			me._view_button_mobile.logicBlock_borderwidth();
			me._view_button_mobile.logicBlock_textcolor();
		}
		me._view_button_mobile.onmouseup=function (e) {
			me.elementMouseDown['view_button_mobile']=false;
			me._view_button_mobile.logicBlock_backgroundcolor();
			me._view_button_mobile.logicBlock_borderwidth();
			me._view_button_mobile.logicBlock_textcolor();
		}
		me._view_button_mobile.onmouseleave=function (e) {
			me.elementMouseDown['view_button_mobile']=false;
			me.elementMouseOver['view_button_mobile']=false;
			me._view_button_mobile.logicBlock_backgroundcolor();
			me._view_button_mobile.logicBlock_backgroundcolor();
			me._view_button_mobile.logicBlock_borderwidth();
			me._view_button_mobile.logicBlock_borderwidth();
			me._view_button_mobile.logicBlock_textcolor();
		}
		me._view_button_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._view_button_mobile);
		el=me._entertainment_button_mobile=document.createElement('div');
		els=me._entertainment_button_mobile__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Entertainment Button_Mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 200px;';
		hs+='color : #000000;';
		hs+='cursor : pointer;';
		hs+='height : auto;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='visibility : inherit;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(150,150,150,0.705882);';
		hs+='border-color : rgba(33,33,33,0.784314);';
		hs+='border-radius : 10px;';
		hs+='border-style : solid;';
		hs+='border-width : 2px 2px 2px 2px;';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._entertainment_button_mobile.ggUpdateText=function() {
			var params = [];
			var hs = player._("\u5a1b\u6a02", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._entertainment_button_mobile.ggUpdateText();
		el.appendChild(els);
		me._entertainment_button_mobile.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._entertainment_button_mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('resp_phone') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._entertainment_button_mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._entertainment_button_mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._entertainment_button_mobile.style.transition='background-color 0s, border-width 0s, color 0s';
				if (me._entertainment_button_mobile.ggCurrentLogicStateVisible == 0) {
					me._entertainment_button_mobile.style.visibility="hidden";
					me._entertainment_button_mobile.ggVisible=false;
				}
				else {
					me._entertainment_button_mobile.style.visibility=(Number(me._entertainment_button_mobile.style.opacity)>0||!me._entertainment_button_mobile.style.opacity)?'inherit':'hidden';
					me._entertainment_button_mobile.ggVisible=true;
				}
			}
		}
		me._entertainment_button_mobile.logicBlock_visible();
		me._entertainment_button_mobile.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseDown['entertainment_button_mobile'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else if (
				((player.getVariableValue('menu_entertainment') == true))
			)
			{
				newLogicStateBackgroundColor = 1;
			}
			else if (
				((me.elementMouseOver['entertainment_button_mobile'] == true))
			)
			{
				newLogicStateBackgroundColor = 2;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._entertainment_button_mobile.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._entertainment_button_mobile.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._entertainment_button_mobile__text.style.transition='background-color 0s, border-width 0s, color 0s';
				if (me._entertainment_button_mobile.ggCurrentLogicStateBackgroundColor == 0) {
					me._entertainment_button_mobile__text.style.backgroundColor="rgba(100,100,100,0.862745)";
				}
				else if (me._entertainment_button_mobile.ggCurrentLogicStateBackgroundColor == 1) {
					me._entertainment_button_mobile__text.style.backgroundColor="rgba(255,255,255,1)";
				}
				else if (me._entertainment_button_mobile.ggCurrentLogicStateBackgroundColor == 2) {
					me._entertainment_button_mobile__text.style.backgroundColor="rgba(200,200,200,0.784314)";
				}
				else {
					me._entertainment_button_mobile__text.style.backgroundColor="rgba(150,150,150,0.705882)";
				}
			}
		}
		me._entertainment_button_mobile.logicBlock_backgroundcolor();
		me._entertainment_button_mobile.logicBlock_borderwidth = function() {
			var newLogicStateBorderWidth;
			if (
				((me.elementMouseDown['entertainment_button_mobile'] == true))
			)
			{
				newLogicStateBorderWidth = 0;
			}
			else if (
				((me.elementMouseOver['entertainment_button_mobile'] == true))
			)
			{
				newLogicStateBorderWidth = 1;
			}
			else {
				newLogicStateBorderWidth = -1;
			}
			if (me._entertainment_button_mobile.ggCurrentLogicStateBorderWidth != newLogicStateBorderWidth) {
				me._entertainment_button_mobile.ggCurrentLogicStateBorderWidth = newLogicStateBorderWidth;
				me._entertainment_button_mobile.style.transition='background-color 0s, border-width 0s, color 0s';
				if (me._entertainment_button_mobile.ggCurrentLogicStateBorderWidth == 0) {
					me._entertainment_button_mobile__text.style.borderWidth="4px 1px 1px 4px";
				}
				else if (me._entertainment_button_mobile.ggCurrentLogicStateBorderWidth == 1) {
					me._entertainment_button_mobile__text.style.borderWidth="1px 4px 4px 1px";
				}
				else {
					me._entertainment_button_mobile__text.style.borderWidth="2px 2px 2px 2px";
				}
			}
		}
		me._entertainment_button_mobile.logicBlock_borderwidth();
		me._entertainment_button_mobile.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseDown['entertainment_button_mobile'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._entertainment_button_mobile.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._entertainment_button_mobile.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._entertainment_button_mobile__text.style.transition='background-color 0s, border-width 0s, color 0s';
				if (me._entertainment_button_mobile.ggCurrentLogicStateTextColor == 0) {
					me._entertainment_button_mobile.style.color="rgba(255,255,255,1)";
				}
				else {
					me._entertainment_button_mobile.style.color="rgba(0,0,0,1)";
				}
			}
		}
		me._entertainment_button_mobile.logicBlock_textcolor();
		me._entertainment_button_mobile.onclick=function (e) {
			player.setVariableValue('menu_entertainment', !player.getVariableValue('menu_entertainment'));
			player.setVariableValue('menu_room', false);
			player.setVariableValue('menu_view', false);
			player.setVariableValue('menu_dining', false);
			player.setVariableValue('menu_lobby', false);
		}
		me._entertainment_button_mobile.onmouseenter=function (e) {
			me.elementMouseOver['entertainment_button_mobile']=true;
			me._entertainment_button_mobile.logicBlock_backgroundcolor();
			me._entertainment_button_mobile.logicBlock_borderwidth();
		}
		me._entertainment_button_mobile.onmousedown=function (e) {
			me.elementMouseDown['entertainment_button_mobile']=true;
			me._entertainment_button_mobile.logicBlock_backgroundcolor();
			me._entertainment_button_mobile.logicBlock_borderwidth();
			me._entertainment_button_mobile.logicBlock_textcolor();
		}
		me._entertainment_button_mobile.onmouseup=function (e) {
			me.elementMouseDown['entertainment_button_mobile']=false;
			me._entertainment_button_mobile.logicBlock_backgroundcolor();
			me._entertainment_button_mobile.logicBlock_borderwidth();
			me._entertainment_button_mobile.logicBlock_textcolor();
		}
		me._entertainment_button_mobile.onmouseleave=function (e) {
			me.elementMouseDown['entertainment_button_mobile']=false;
			me.elementMouseOver['entertainment_button_mobile']=false;
			me._entertainment_button_mobile.logicBlock_backgroundcolor();
			me._entertainment_button_mobile.logicBlock_backgroundcolor();
			me._entertainment_button_mobile.logicBlock_borderwidth();
			me._entertainment_button_mobile.logicBlock_borderwidth();
			me._entertainment_button_mobile.logicBlock_textcolor();
		}
		me._entertainment_button_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._entertainment_button_mobile);
		el=me._dining_button_desktop_mobile=document.createElement('div');
		els=me._dining_button_desktop_mobile__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Dining Button desktop_Mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 240px;';
		hs+='color : #000000;';
		hs+='cursor : pointer;';
		hs+='height : auto;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='visibility : inherit;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(150,150,150,0.705882);';
		hs+='border-color : rgba(33,33,33,0.784314);';
		hs+='border-radius : 10px;';
		hs+='border-style : solid;';
		hs+='border-width : 2px 2px 2px 2px;';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._dining_button_desktop_mobile.ggUpdateText=function() {
			var params = [];
			var hs = player._("\u98f2\u98df", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._dining_button_desktop_mobile.ggUpdateText();
		el.appendChild(els);
		me._dining_button_desktop_mobile.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._dining_button_desktop_mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('resp_phone') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._dining_button_desktop_mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._dining_button_desktop_mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._dining_button_desktop_mobile.style.transition='background-color 0s, border-width 0s, color 0s';
				if (me._dining_button_desktop_mobile.ggCurrentLogicStateVisible == 0) {
					me._dining_button_desktop_mobile.style.visibility="hidden";
					me._dining_button_desktop_mobile.ggVisible=false;
				}
				else {
					me._dining_button_desktop_mobile.style.visibility=(Number(me._dining_button_desktop_mobile.style.opacity)>0||!me._dining_button_desktop_mobile.style.opacity)?'inherit':'hidden';
					me._dining_button_desktop_mobile.ggVisible=true;
				}
			}
		}
		me._dining_button_desktop_mobile.logicBlock_visible();
		me._dining_button_desktop_mobile.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseDown['dining_button_desktop_mobile'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else if (
				((player.getVariableValue('menu_dining') == true))
			)
			{
				newLogicStateBackgroundColor = 1;
			}
			else if (
				((me.elementMouseOver['dining_button_desktop_mobile'] == true))
			)
			{
				newLogicStateBackgroundColor = 2;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._dining_button_desktop_mobile.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._dining_button_desktop_mobile.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._dining_button_desktop_mobile__text.style.transition='background-color 0s, border-width 0s, color 0s';
				if (me._dining_button_desktop_mobile.ggCurrentLogicStateBackgroundColor == 0) {
					me._dining_button_desktop_mobile__text.style.backgroundColor="rgba(100,100,100,0.862745)";
				}
				else if (me._dining_button_desktop_mobile.ggCurrentLogicStateBackgroundColor == 1) {
					me._dining_button_desktop_mobile__text.style.backgroundColor="rgba(255,255,255,1)";
				}
				else if (me._dining_button_desktop_mobile.ggCurrentLogicStateBackgroundColor == 2) {
					me._dining_button_desktop_mobile__text.style.backgroundColor="rgba(200,200,200,0.784314)";
				}
				else {
					me._dining_button_desktop_mobile__text.style.backgroundColor="rgba(150,150,150,0.705882)";
				}
			}
		}
		me._dining_button_desktop_mobile.logicBlock_backgroundcolor();
		me._dining_button_desktop_mobile.logicBlock_borderwidth = function() {
			var newLogicStateBorderWidth;
			if (
				((me.elementMouseDown['dining_button_desktop_mobile'] == true))
			)
			{
				newLogicStateBorderWidth = 0;
			}
			else if (
				((me.elementMouseOver['dining_button_desktop_mobile'] == true))
			)
			{
				newLogicStateBorderWidth = 1;
			}
			else {
				newLogicStateBorderWidth = -1;
			}
			if (me._dining_button_desktop_mobile.ggCurrentLogicStateBorderWidth != newLogicStateBorderWidth) {
				me._dining_button_desktop_mobile.ggCurrentLogicStateBorderWidth = newLogicStateBorderWidth;
				me._dining_button_desktop_mobile.style.transition='background-color 0s, border-width 0s, color 0s';
				if (me._dining_button_desktop_mobile.ggCurrentLogicStateBorderWidth == 0) {
					me._dining_button_desktop_mobile__text.style.borderWidth="4px 1px 1px 4px";
				}
				else if (me._dining_button_desktop_mobile.ggCurrentLogicStateBorderWidth == 1) {
					me._dining_button_desktop_mobile__text.style.borderWidth="1px 4px 4px 1px";
				}
				else {
					me._dining_button_desktop_mobile__text.style.borderWidth="2px 2px 2px 2px";
				}
			}
		}
		me._dining_button_desktop_mobile.logicBlock_borderwidth();
		me._dining_button_desktop_mobile.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseDown['dining_button_desktop_mobile'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._dining_button_desktop_mobile.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._dining_button_desktop_mobile.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._dining_button_desktop_mobile__text.style.transition='background-color 0s, border-width 0s, color 0s';
				if (me._dining_button_desktop_mobile.ggCurrentLogicStateTextColor == 0) {
					me._dining_button_desktop_mobile.style.color="rgba(255,255,255,1)";
				}
				else {
					me._dining_button_desktop_mobile.style.color="rgba(0,0,0,1)";
				}
			}
		}
		me._dining_button_desktop_mobile.logicBlock_textcolor();
		me._dining_button_desktop_mobile.onclick=function (e) {
			player.setVariableValue('menu_dining', !player.getVariableValue('menu_dining'));
			player.setVariableValue('menu_room', false);
			player.setVariableValue('menu_view', false);
			player.setVariableValue('menu_entertainment', false);
			player.setVariableValue('menu_lobby', false);
		}
		me._dining_button_desktop_mobile.onmouseenter=function (e) {
			me.elementMouseOver['dining_button_desktop_mobile']=true;
			me._dining_button_desktop_mobile.logicBlock_backgroundcolor();
			me._dining_button_desktop_mobile.logicBlock_borderwidth();
		}
		me._dining_button_desktop_mobile.onmousedown=function (e) {
			me.elementMouseDown['dining_button_desktop_mobile']=true;
			me._dining_button_desktop_mobile.logicBlock_backgroundcolor();
			me._dining_button_desktop_mobile.logicBlock_borderwidth();
			me._dining_button_desktop_mobile.logicBlock_textcolor();
		}
		me._dining_button_desktop_mobile.onmouseup=function (e) {
			me.elementMouseDown['dining_button_desktop_mobile']=false;
			me._dining_button_desktop_mobile.logicBlock_backgroundcolor();
			me._dining_button_desktop_mobile.logicBlock_borderwidth();
			me._dining_button_desktop_mobile.logicBlock_textcolor();
		}
		me._dining_button_desktop_mobile.onmouseleave=function (e) {
			me.elementMouseDown['dining_button_desktop_mobile']=false;
			me.elementMouseOver['dining_button_desktop_mobile']=false;
			me._dining_button_desktop_mobile.logicBlock_backgroundcolor();
			me._dining_button_desktop_mobile.logicBlock_backgroundcolor();
			me._dining_button_desktop_mobile.logicBlock_borderwidth();
			me._dining_button_desktop_mobile.logicBlock_borderwidth();
			me._dining_button_desktop_mobile.logicBlock_textcolor();
		}
		me._dining_button_desktop_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._dining_button_desktop_mobile);
		el=me._lobby_button_desktop_m=document.createElement('div');
		els=me._lobby_button_desktop_m__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Lobby Button desktop_M";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 280px;';
		hs+='color : #000000;';
		hs+='cursor : pointer;';
		hs+='height : auto;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='visibility : inherit;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(150,150,150,0.705882);';
		hs+='border-color : rgba(33,33,33,0.784314);';
		hs+='border-radius : 10px;';
		hs+='border-style : solid;';
		hs+='border-width : 2px 2px 2px 2px;';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._lobby_button_desktop_m.ggUpdateText=function() {
			var params = [];
			var hs = player._("\u5927\u5ef3", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._lobby_button_desktop_m.ggUpdateText();
		el.appendChild(els);
		me._lobby_button_desktop_m.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._lobby_button_desktop_m.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('resp_phone') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._lobby_button_desktop_m.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._lobby_button_desktop_m.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._lobby_button_desktop_m.style.transition='background-color 0s, border-width 0s, color 0s';
				if (me._lobby_button_desktop_m.ggCurrentLogicStateVisible == 0) {
					me._lobby_button_desktop_m.style.visibility="hidden";
					me._lobby_button_desktop_m.ggVisible=false;
				}
				else {
					me._lobby_button_desktop_m.style.visibility=(Number(me._lobby_button_desktop_m.style.opacity)>0||!me._lobby_button_desktop_m.style.opacity)?'inherit':'hidden';
					me._lobby_button_desktop_m.ggVisible=true;
				}
			}
		}
		me._lobby_button_desktop_m.logicBlock_visible();
		me._lobby_button_desktop_m.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseDown['lobby_button_desktop_m'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else if (
				((player.getVariableValue('menu_lobby') == true))
			)
			{
				newLogicStateBackgroundColor = 1;
			}
			else if (
				((me.elementMouseOver['lobby_button_desktop_m'] == true))
			)
			{
				newLogicStateBackgroundColor = 2;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._lobby_button_desktop_m.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._lobby_button_desktop_m.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._lobby_button_desktop_m__text.style.transition='background-color 0s, border-width 0s, color 0s';
				if (me._lobby_button_desktop_m.ggCurrentLogicStateBackgroundColor == 0) {
					me._lobby_button_desktop_m__text.style.backgroundColor="rgba(100,100,100,0.862745)";
				}
				else if (me._lobby_button_desktop_m.ggCurrentLogicStateBackgroundColor == 1) {
					me._lobby_button_desktop_m__text.style.backgroundColor="rgba(255,255,255,1)";
				}
				else if (me._lobby_button_desktop_m.ggCurrentLogicStateBackgroundColor == 2) {
					me._lobby_button_desktop_m__text.style.backgroundColor="rgba(200,200,200,0.784314)";
				}
				else {
					me._lobby_button_desktop_m__text.style.backgroundColor="rgba(150,150,150,0.705882)";
				}
			}
		}
		me._lobby_button_desktop_m.logicBlock_backgroundcolor();
		me._lobby_button_desktop_m.logicBlock_borderwidth = function() {
			var newLogicStateBorderWidth;
			if (
				((me.elementMouseDown['lobby_button_desktop_m'] == true))
			)
			{
				newLogicStateBorderWidth = 0;
			}
			else if (
				((me.elementMouseOver['lobby_button_desktop_m'] == true))
			)
			{
				newLogicStateBorderWidth = 1;
			}
			else {
				newLogicStateBorderWidth = -1;
			}
			if (me._lobby_button_desktop_m.ggCurrentLogicStateBorderWidth != newLogicStateBorderWidth) {
				me._lobby_button_desktop_m.ggCurrentLogicStateBorderWidth = newLogicStateBorderWidth;
				me._lobby_button_desktop_m.style.transition='background-color 0s, border-width 0s, color 0s';
				if (me._lobby_button_desktop_m.ggCurrentLogicStateBorderWidth == 0) {
					me._lobby_button_desktop_m__text.style.borderWidth="4px 1px 1px 4px";
				}
				else if (me._lobby_button_desktop_m.ggCurrentLogicStateBorderWidth == 1) {
					me._lobby_button_desktop_m__text.style.borderWidth="1px 4px 4px 1px";
				}
				else {
					me._lobby_button_desktop_m__text.style.borderWidth="2px 2px 2px 2px";
				}
			}
		}
		me._lobby_button_desktop_m.logicBlock_borderwidth();
		me._lobby_button_desktop_m.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseDown['lobby_button_desktop_m'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._lobby_button_desktop_m.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._lobby_button_desktop_m.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._lobby_button_desktop_m__text.style.transition='background-color 0s, border-width 0s, color 0s';
				if (me._lobby_button_desktop_m.ggCurrentLogicStateTextColor == 0) {
					me._lobby_button_desktop_m.style.color="rgba(255,255,255,1)";
				}
				else {
					me._lobby_button_desktop_m.style.color="rgba(0,0,0,1)";
				}
			}
		}
		me._lobby_button_desktop_m.logicBlock_textcolor();
		me._lobby_button_desktop_m.onclick=function (e) {
			player.setVariableValue('menu_room', false);
			player.setVariableValue('menu_view', false);
			player.setVariableValue('menu_entertainment', false);
			player.setVariableValue('menu_dining', false);
			player.setVariableValue('menu_lobby', !player.getVariableValue('menu_lobby'));
		}
		me._lobby_button_desktop_m.onmouseenter=function (e) {
			me.elementMouseOver['lobby_button_desktop_m']=true;
			me._lobby_button_desktop_m.logicBlock_backgroundcolor();
			me._lobby_button_desktop_m.logicBlock_borderwidth();
		}
		me._lobby_button_desktop_m.onmousedown=function (e) {
			me.elementMouseDown['lobby_button_desktop_m']=true;
			me._lobby_button_desktop_m.logicBlock_backgroundcolor();
			me._lobby_button_desktop_m.logicBlock_borderwidth();
			me._lobby_button_desktop_m.logicBlock_textcolor();
		}
		me._lobby_button_desktop_m.onmouseup=function (e) {
			me.elementMouseDown['lobby_button_desktop_m']=false;
			me._lobby_button_desktop_m.logicBlock_backgroundcolor();
			me._lobby_button_desktop_m.logicBlock_borderwidth();
			me._lobby_button_desktop_m.logicBlock_textcolor();
		}
		me._lobby_button_desktop_m.onmouseleave=function (e) {
			me.elementMouseDown['lobby_button_desktop_m']=false;
			me.elementMouseOver['lobby_button_desktop_m']=false;
			me._lobby_button_desktop_m.logicBlock_backgroundcolor();
			me._lobby_button_desktop_m.logicBlock_backgroundcolor();
			me._lobby_button_desktop_m.logicBlock_borderwidth();
			me._lobby_button_desktop_m.logicBlock_borderwidth();
			me._lobby_button_desktop_m.logicBlock_textcolor();
		}
		me._lobby_button_desktop_m.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._lobby_button_desktop_m);
		el=me._map_button_m=document.createElement('div');
		el.ggId="map_button_M";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(47,108,115,0.705882);';
		hs+='border-color : rgba(33,33,33,0.784314);';
		hs+='border-radius : 10px;';
		hs+='border-style : solid;';
		hs+='border-width : 2px 2px 2px 2px;';
		hs+='cursor : pointer;';
		hs+='height : calc(6%);';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : calc(16.5% - 20px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_button_m.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._map_button_m.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('resp_phone') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getMapsContainingNode(player.getCurrentNode()).length > 0 == true)) && 
				((player.hasFloorplan() == true)) || 
				((player.hasMap() == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_button_m.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_button_m.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_button_m.style.transition='opacity 300ms ease 0ms, background-color 0s, border-width 0s';
				if (me._map_button_m.ggCurrentLogicStateVisible == 0) {
					me._map_button_m.style.visibility="hidden";
					me._map_button_m.ggVisible=false;
				}
				else if (me._map_button_m.ggCurrentLogicStateVisible == 1) {
					me._map_button_m.style.visibility=(Number(me._map_button_m.style.opacity)>0||!me._map_button_m.style.opacity)?'inherit':'hidden';
					me._map_button_m.ggVisible=true;
				}
				else {
					me._map_button_m.style.visibility=(Number(me._map_button_m.style.opacity)>0||!me._map_button_m.style.opacity)?'inherit':'hidden';
					me._map_button_m.ggVisible=true;
				}
			}
		}
		me._map_button_m.logicBlock_visible();
		me._map_button_m.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('resp_phone') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((player.getVariableValue('vis_floorplan') == true)) || 
				((player.getVariableValue('vis_map') == true))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_button_m.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_button_m.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_button_m.style.transition='opacity 300ms ease 0ms, background-color 0s, border-width 0s';
				if (me._map_button_m.ggCurrentLogicStateAlpha == 0) {
					me._map_button_m.style.visibility=me._map_button_m.ggVisible?'inherit':'hidden';
					me._map_button_m.style.opacity=1;
				}
				else if (me._map_button_m.ggCurrentLogicStateAlpha == 1) {
					setTimeout(function() { if (me._map_button_m.style.opacity == 0.0) { me._map_button_m.style.visibility="hidden"; } }, 305);
					me._map_button_m.style.opacity=0;
				}
				else {
					me._map_button_m.style.visibility=me._map_button_m.ggVisible?'inherit':'hidden';
					me._map_button_m.style.opacity=1;
				}
			}
		}
		me._map_button_m.logicBlock_alpha();
		me._map_button_m.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseDown['map_button_m'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else if (
				((player.getVariableValue('vis_floorplan') == true))
			)
			{
				newLogicStateBackgroundColor = 1;
			}
			else if (
				((me.elementMouseOver['map_button_m'] == true))
			)
			{
				newLogicStateBackgroundColor = 2;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._map_button_m.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._map_button_m.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._map_button_m.style.transition='opacity 300ms ease 0ms, background-color 0s, border-width 0s';
				if (me._map_button_m.ggCurrentLogicStateBackgroundColor == 0) {
					me._map_button_m.style.backgroundColor="rgba(82,190,202,0.862745)";
				}
				else if (me._map_button_m.ggCurrentLogicStateBackgroundColor == 1) {
					me._map_button_m.style.backgroundColor="rgba(104,240,255,1)";
				}
				else if (me._map_button_m.ggCurrentLogicStateBackgroundColor == 2) {
					me._map_button_m.style.backgroundColor="rgba(82,190,202,0.705882)";
				}
				else {
					me._map_button_m.style.backgroundColor="rgba(47,108,115,0.705882)";
				}
			}
		}
		me._map_button_m.logicBlock_backgroundcolor();
		me._map_button_m.logicBlock_borderwidth = function() {
			var newLogicStateBorderWidth;
			if (
				((me.elementMouseDown['map_button_m'] == true))
			)
			{
				newLogicStateBorderWidth = 0;
			}
			else if (
				((me.elementMouseOver['map_button_m'] == true))
			)
			{
				newLogicStateBorderWidth = 1;
			}
			else {
				newLogicStateBorderWidth = -1;
			}
			if (me._map_button_m.ggCurrentLogicStateBorderWidth != newLogicStateBorderWidth) {
				me._map_button_m.ggCurrentLogicStateBorderWidth = newLogicStateBorderWidth;
				me._map_button_m.style.transition='opacity 300ms ease 0ms, background-color 0s, border-width 0s';
				if (me._map_button_m.ggCurrentLogicStateBorderWidth == 0) {
					me._map_button_m.style.borderWidth="4px 1px 1px 4px";
				}
				else if (me._map_button_m.ggCurrentLogicStateBorderWidth == 1) {
					me._map_button_m.style.borderWidth="1px 4px 4px 1px";
				}
				else {
					me._map_button_m.style.borderWidth="2px 2px 2px 2px";
				}
			}
		}
		me._map_button_m.logicBlock_borderwidth();
		me._map_button_m.onclick=function (e) {
			if (
				(
					((player.hasFloorplan() == true))
				)
			) {
				player.setVariableValue('vis_floorplan', !player.getVariableValue('vis_floorplan'));
			}
			if (
				(
					((player.hasFloorplan() == false))
				)
			) {
				player.setVariableValue('vis_map', !player.getVariableValue('vis_map'));
			}
			if (
				(
					((player.getVariableValue('vis_info_show') == true))
				)
			) {
				player.setVariableValue('button_info', !player.getVariableValue('button_info'));
			}
			if (
				(
					((player.getVariableValue('vis_info_show') == true))
				)
			) {
				player.setVariableValue('vis_info_popup', !player.getVariableValue('vis_info_popup'));
			}
		}
		me._map_button_m.onmouseenter=function (e) {
			me.elementMouseOver['map_button_m']=true;
			me._map_icon_m.logicBlock_visible();
			me._map_icon_active_m.logicBlock_visible();
			me._floorplan_icon_m.logicBlock_visible();
			me._floorplan_icon_active_m.logicBlock_visible();
			me._map_button_text_m.logicBlock_textcolor();
			me._map_button_m.logicBlock_backgroundcolor();
			me._map_button_m.logicBlock_borderwidth();
		}
		me._map_button_m.onmousedown=function (e) {
			me.elementMouseDown['map_button_m']=true;
			me._map_button_m.logicBlock_backgroundcolor();
			me._map_button_m.logicBlock_borderwidth();
		}
		me._map_button_m.onmouseup=function (e) {
			me.elementMouseDown['map_button_m']=false;
			me._map_button_m.logicBlock_backgroundcolor();
			me._map_button_m.logicBlock_borderwidth();
		}
		me._map_button_m.onmouseleave=function (e) {
			me.elementMouseDown['map_button_m']=false;
			me.elementMouseOver['map_button_m']=false;
			me._map_icon_m.logicBlock_visible();
			me._map_icon_active_m.logicBlock_visible();
			me._floorplan_icon_m.logicBlock_visible();
			me._floorplan_icon_active_m.logicBlock_visible();
			me._map_button_text_m.logicBlock_textcolor();
			me._map_button_m.logicBlock_backgroundcolor();
			me._map_button_m.logicBlock_backgroundcolor();
			me._map_button_m.logicBlock_borderwidth();
			me._map_button_m.logicBlock_borderwidth();
		}
		me._map_button_m.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_icon_m=document.createElement('div');
		els=me._map_icon_m__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzNiAzNiIgeT0iMHB4Ij4KIDxwYXRoIHN0cm9rZS1saW'+
			'5lam9pbj0icm91bmQiIHN0cm9rZT0iIzAwMDAwMCIgZD0iTTMxLjUsMTUgIEMzMS41LDI1LjUsMTgsMzQuNSwxOCwzNC41UzQuNSwyNS41LDQuNSwxNWMwLTcuNSw2LTEzLjUsMTMuNS0xMy41UzMxLjUsNy41LDMxLjUsMTV6IiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjEuMjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogPGNpcmNsZSBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9IiMwMDAwMDAiIGN4PSIxOCIgY3k9IjE1IiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjEuMjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgcj0iNC41Ii8+Cjwvc3ZnPgo=';
		me._map_icon_m__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_icon_M";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_icon_m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_icon_m.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['map_button_m'] == true)) || 
				((player.hasFloorplan() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_icon_m.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_icon_m.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_icon_m.style.transition='';
				if (me._map_icon_m.ggCurrentLogicStateVisible == 0) {
					me._map_icon_m.style.visibility="hidden";
					me._map_icon_m.ggVisible=false;
				}
				else {
					me._map_icon_m.style.visibility=(Number(me._map_icon_m.style.opacity)>0||!me._map_icon_m.style.opacity)?'inherit':'hidden';
					me._map_icon_m.ggVisible=true;
				}
			}
		}
		me._map_icon_m.logicBlock_visible();
		me._map_icon_m.ggUpdatePosition=function (useTransition) {
		}
		me._map_button_m.appendChild(me._map_icon_m);
		el=me._map_icon_active_m=document.createElement('div');
		els=me._map_icon_active_m__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzYgMzY7IiB2aWV3Qm94PSIwIDAgMzYgMzYiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiNGRkZGRkY7c3Ryb2tlLXdpZHRoOjEuMjU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30KPC9zdHlsZT4KIDxwYXRoIGQ9Ik0zMS41LDE1QzMxLjUsMjUuNSwxOCwzNC41LDE4LDM0LjVTNC41LDI1LjUsNC41LDE1YzAtNy41LDYtMTMuNSwxMy41LTEzLjVTMzEuNSw3LjUsMzEuNSwxNXoiIGNsYXNzPSJzdDAiLz4KIDxjaXJjbGUgY3g9IjE4IiBjbGFzcz0ic3QwIiBjeT0iMTUiIHI9IjQuNSIvPgo8L3N2Zz4K';
		me._map_icon_active_m__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_icon_active_M";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_icon_active_m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_icon_active_m.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['map_button_m'] == true)) && 
				((player.hasFloorplan() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_icon_active_m.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_icon_active_m.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_icon_active_m.style.transition='';
				if (me._map_icon_active_m.ggCurrentLogicStateVisible == 0) {
					me._map_icon_active_m.style.visibility=(Number(me._map_icon_active_m.style.opacity)>0||!me._map_icon_active_m.style.opacity)?'inherit':'hidden';
					me._map_icon_active_m.ggVisible=true;
				}
				else {
					me._map_icon_active_m.style.visibility="hidden";
					me._map_icon_active_m.ggVisible=false;
				}
			}
		}
		me._map_icon_active_m.logicBlock_visible();
		me._map_icon_active_m.ggUpdatePosition=function (useTransition) {
		}
		me._map_button_m.appendChild(me._map_icon_active_m);
		el=me._floorplan_icon_m=document.createElement('div');
		els=me._floorplan_icon_m__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzNiAzNiIgeT0iMHB4Ij4KIDxwb2x5Z29uIHN0cm9rZS'+
			'1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iIzAwMDAwMCIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxLjI1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHBvaW50cz0iMS41LDkgMS41LDMzICAgMTIsMjcgMjQsMzMgMzQuNSwyNyAzNC41LDMgMjQsOSAxMiwzICIvPgogPGxpbmUgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSIjMDAwMDAwIiB5Mj0iMjciIGZpbGw9Im5vbmUiIHgyPSIxMiIgeTE9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjI1IiB4MT0iMTIiLz4KIDxsaW5lIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iIzAwMDAwMCIg'+
			'eTI9IjMzIiBmaWxsPSJub25lIiB4Mj0iMjQiIHkxPSI5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS4yNSIgeDE9IjI0Ii8+Cjwvc3ZnPgo=';
		me._floorplan_icon_m__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="floorplan_icon_M";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 28px;';
		hs+='left : calc(50% - ((28px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((28px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._floorplan_icon_m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floorplan_icon_m.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['map_button_m'] == true)) || 
				((player.hasFloorplan() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._floorplan_icon_m.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._floorplan_icon_m.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._floorplan_icon_m.style.transition='';
				if (me._floorplan_icon_m.ggCurrentLogicStateVisible == 0) {
					me._floorplan_icon_m.style.visibility="hidden";
					me._floorplan_icon_m.ggVisible=false;
				}
				else {
					me._floorplan_icon_m.style.visibility=(Number(me._floorplan_icon_m.style.opacity)>0||!me._floorplan_icon_m.style.opacity)?'inherit':'hidden';
					me._floorplan_icon_m.ggVisible=true;
				}
			}
		}
		me._floorplan_icon_m.logicBlock_visible();
		me._floorplan_icon_m.ggUpdatePosition=function (useTransition) {
		}
		me._map_button_m.appendChild(me._floorplan_icon_m);
		el=me._floorplan_icon_active_m=document.createElement('div');
		els=me._floorplan_icon_active_m__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzNiAzNiIgeT0iMHB4Ij4KIDxwb2x5Z29uIHN0cm9rZS'+
			'1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLW9wYWNpdHk9IjEiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjI1IiBwb2ludHM9IjEuNSw5IDEuNSwzMyAmI3hhOyYjeDk7MTIsMjcgMjQsMzMgMzQuNSwyNyAzNC41LDMgMjQsOSAxMiwzICIvPgogPGxpbmUgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSIjZmZmZmZmIiB5Mj0iMjciIHN0cm9rZS1vcGFjaXR5PSIxIiBmaWxsPSJub25lIiB4Mj0iMTIiIHkxPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHgxPSIxMiIgc3Ryb2tlLXdpZHRoPSIxLjI1Ii8+CiA8'+
			'bGluZSBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9IiNmZmZmZmYiIHkyPSIzMyIgc3Ryb2tlLW9wYWNpdHk9IjEiIGZpbGw9Im5vbmUiIHgyPSIyNCIgeTE9IjkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgeDE9IjI0IiBzdHJva2Utd2lkdGg9IjEuMjUiLz4KPC9zdmc+Cg==';
		me._floorplan_icon_active_m__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="floorplan_icon_active_M";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 28px;';
		hs+='left : calc(50% - ((28px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((28px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._floorplan_icon_active_m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floorplan_icon_active_m.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['map_button_m'] == true)) && 
				((player.hasFloorplan() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._floorplan_icon_active_m.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._floorplan_icon_active_m.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._floorplan_icon_active_m.style.transition='';
				if (me._floorplan_icon_active_m.ggCurrentLogicStateVisible == 0) {
					me._floorplan_icon_active_m.style.visibility=(Number(me._floorplan_icon_active_m.style.opacity)>0||!me._floorplan_icon_active_m.style.opacity)?'inherit':'hidden';
					me._floorplan_icon_active_m.ggVisible=true;
				}
				else {
					me._floorplan_icon_active_m.style.visibility="hidden";
					me._floorplan_icon_active_m.ggVisible=false;
				}
			}
		}
		me._floorplan_icon_active_m.logicBlock_visible();
		me._floorplan_icon_active_m.ggUpdatePosition=function (useTransition) {
		}
		me._map_button_m.appendChild(me._floorplan_icon_active_m);
		el=me._map_button_text_m=document.createElement('div');
		els=me._map_button_text_m__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="map_button_text_M";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 4px;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._map_button_text_m.ggUpdateText=function() {
			var params = [];
			var hs = player._("\u5730 \u5716", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._map_button_text_m.ggUpdateText();
		el.appendChild(els);
		me._map_button_text_m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_button_text_m.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['map_button_m'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._map_button_text_m.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._map_button_text_m.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._map_button_text_m.style.transition='color 0s';
				if (me._map_button_text_m.ggCurrentLogicStateTextColor == 0) {
					me._map_button_text_m.style.color="rgba(255,255,255,1)";
				}
				else {
					me._map_button_text_m.style.color="rgba(0,0,0,1)";
				}
			}
		}
		me._map_button_text_m.logicBlock_textcolor();
		me._map_button_text_m.ggUpdatePosition=function (useTransition) {
		}
		me._map_button_m.appendChild(me._map_button_text_m);
		me.divSkin.appendChild(me._map_button_m);
		el=me._map_phone=document.createElement('div');
		el.ggId="map_phone";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_phone.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._map_phone.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('resp_phone') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((player.getVariableValue('vis_floorplan') == true)) || 
				((player.getVariableValue('vis_map') == true))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_phone.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_phone.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_phone.style.transition='opacity 500ms ease 0ms';
				if (me._map_phone.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._map_phone.style.opacity == 0.0) { me._map_phone.style.visibility="hidden"; } }, 505);
					me._map_phone.style.opacity=0;
				}
				else if (me._map_phone.ggCurrentLogicStateAlpha == 1) {
					me._map_phone.style.visibility=me._map_phone.ggVisible?'inherit':'hidden';
					me._map_phone.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._map_phone.style.opacity == 0.0) { me._map_phone.style.visibility="hidden"; } }, 505);
					me._map_phone.style.opacity=0;
				}
			}
		}
		me._map_phone.logicBlock_alpha();
		me._map_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._close_popup_phone=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="close_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._close_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._close_popup_phone.onclick=function (e) {
			player.setVariableValue('vis_floorplan', false);
			player.setVariableValue('vis_map', false);
		}
		me._close_popup_phone.onmouseenter=function (e) {
			me.elementMouseOver['close_popup_phone']=true;
			me._btn_close_popup_phone.logicBlock_visible();
			me._btn_close_popup_phone_active.logicBlock_visible();
		}
		me._close_popup_phone.onmouseleave=function (e) {
			me.elementMouseOver['close_popup_phone']=false;
			me._btn_close_popup_phone.logicBlock_visible();
			me._btn_close_popup_phone_active.logicBlock_visible();
		}
		me._close_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_close_popup_phone=document.createElement('div');
		els=me._btn_close_popup_phone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzIgMzI7IiB2aWV3Qm94PSIwIDAgMzIgMzIiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzRGQjVDMjtzdHJva2Utd2lkdGg6MS4zMzMzO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo1LjMzMzM7fSYjeGQ7Cjwvc3R5bGU+CiA8bGluZSB5Mj0iMjQiIGNsYXNzPSJzdDAiIHgyPSI4IiB4MT0iMjQiIHkxPSI4Ii8+CiA8bGluZSB5Mj0iMjQiIGNsYXNzPSJzdDAiIHgyPSIyNCIgeDE9IjgiIHkxPSI4Ii8+Cjwvc3ZnPgo=';
		me._btn_close_popup_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_close_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_close_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_close_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['close_popup_phone'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_close_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_close_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_close_popup_phone.style.transition='';
				if (me._btn_close_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._btn_close_popup_phone.style.visibility="hidden";
					me._btn_close_popup_phone.ggVisible=false;
				}
				else {
					me._btn_close_popup_phone.style.visibility=(Number(me._btn_close_popup_phone.style.opacity)>0||!me._btn_close_popup_phone.style.opacity)?'inherit':'hidden';
					me._btn_close_popup_phone.ggVisible=true;
				}
			}
		}
		me._btn_close_popup_phone.logicBlock_visible();
		me._btn_close_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._close_popup_phone.appendChild(me._btn_close_popup_phone);
		el=me._btn_close_popup_phone_active=document.createElement('div');
		els=me._btn_close_popup_phone_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzIgMzI7IiB2aWV3Qm94PSIwIDAgMzIgMzIiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4zMzMzO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo1LjMzMzM7fSYjeGQ7Cjwvc3R5bGU+CiA8bGluZSB5Mj0iMjQiIHkxPSI4IiB4Mj0iOCIgY2xhc3M9InN0MCIgeDE9IjI0Ii8+CiA8bGluZSB5Mj0iMjQiIHkxPSI4IiB4Mj0iMjQiIGNsYXNzPSJzdDAiIHgxPSI4Ii8+Cjwvc3ZnPgo=';
		me._btn_close_popup_phone_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_close_popup_phone_active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 20px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_close_popup_phone_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_close_popup_phone_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['close_popup_phone'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_close_popup_phone_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_close_popup_phone_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_close_popup_phone_active.style.transition='';
				if (me._btn_close_popup_phone_active.ggCurrentLogicStateVisible == 0) {
					me._btn_close_popup_phone_active.style.visibility=(Number(me._btn_close_popup_phone_active.style.opacity)>0||!me._btn_close_popup_phone_active.style.opacity)?'inherit':'hidden';
					me._btn_close_popup_phone_active.ggVisible=true;
				}
				else {
					me._btn_close_popup_phone_active.style.visibility="hidden";
					me._btn_close_popup_phone_active.ggVisible=false;
				}
			}
		}
		me._btn_close_popup_phone_active.logicBlock_visible();
		me._btn_close_popup_phone_active.ggUpdatePosition=function (useTransition) {
		}
		me._close_popup_phone.appendChild(me._btn_close_popup_phone_active);
		me._map_phone.appendChild(me._close_popup_phone);
		el=me._map_el_phone=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapLayers = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'Map01';
		el.ggId="map_el_phone";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 40px;';
		hs+='height : calc(40%);';
		hs+='left : calc(50% - ((calc(100% - 50px) + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_el_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_el_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_map') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_el_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_el_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_el_phone.style.transition='';
				if (me._map_el_phone.ggCurrentLogicStateVisible == 0) {
					me._map_el_phone.style.visibility=(Number(me._map_el_phone.style.opacity)>0||!me._map_el_phone.style.opacity)?'inherit':'hidden';
					if (me._map_el_phone.ggMapNotLoaded && me._map_el_phone.ggInitMap) {
						me._map_el_phone.ggInitMap(false);
						me._map_el_phone.ggInitMapMarkers(true);
					}
					me._map_el_phone.ggVisible=true;
				}
				else {
					me._map_el_phone.style.visibility="hidden";
					if (me._map_el_phone.ggClearMap) me._map_el_phone.ggClearMap();
					me._map_el_phone.ggVisible=false;
				}
			}
		}
		me._map_el_phone.logicBlock_visible();
		me._map_el_phone.ggUpdatePosition=function (useTransition) {
			if (me._map_el_phone.ggMapNotLoaded == false) {
				me._map_el_phone.ggMap.invalidateSize(false);
			}
		}
		me._map_phone.appendChild(me._map_el_phone);
		el=me._floorplan_el_phone=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapLayers = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan01';
		el.ggId="floorplan_el_phone";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 40px;';
		hs+='height : calc(40%);';
		hs+='left : calc(50% - ((calc(100% - 50px) + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._floorplan_el_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floorplan_el_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_floorplan') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._floorplan_el_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._floorplan_el_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._floorplan_el_phone.style.transition='';
				if (me._floorplan_el_phone.ggCurrentLogicStateVisible == 0) {
					me._floorplan_el_phone.style.visibility=(Number(me._floorplan_el_phone.style.opacity)>0||!me._floorplan_el_phone.style.opacity)?'inherit':'hidden';
					if (me._floorplan_el_phone.ggMapNotLoaded && me._floorplan_el_phone.ggInitMap) {
						me._floorplan_el_phone.ggInitMap(false);
						me._floorplan_el_phone.ggInitMapMarkers(true);
					}
					me._floorplan_el_phone.ggVisible=true;
				}
				else {
					me._floorplan_el_phone.style.visibility="hidden";
					if (me._floorplan_el_phone.ggClearMap) me._floorplan_el_phone.ggClearMap();
					me._floorplan_el_phone.ggVisible=false;
				}
			}
		}
		me._floorplan_el_phone.logicBlock_visible();
		me._floorplan_el_phone.ggCurrentLogicStateVisible = -1;
		me._floorplan_el_phone.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._floorplan_el_phone.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._floorplan_el_phone.ggCalculateFloorplanSize(mapDetails);
				me._floorplan_el_phone.ggShowSimpleFloorplan(mapDetails);
				me._floorplan_el_phone.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._floorplan_el_phone.ggRadar) me._floorplan_el_phone.ggRadar.update();
		}
		me._floorplan_el_phone.ggUpdatePosition=function (useTransition) {
			me._floorplan_el_phone.ggUpdateConditionResize();
		}
		me._map_phone.appendChild(me._floorplan_el_phone);
		el=me._map_node_description_m=document.createElement('div');
		els=me._map_node_description_m__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="map_node_description_M";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat_regular";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : calc(30%);';
		hs+='left : calc(50% - ((calc(100% - 50px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		hs+="line-height: 1.5;";
		els.setAttribute('style',hs);
		me._map_node_description_m.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.description)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._map_node_description_m.ggUpdateText();
		player.addListener('changenode', function() {
			me._map_node_description_m.ggUpdateText();
		});
		el.appendChild(els);
		me._map_node_description_m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_node_description_m.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_desc_in_maps') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_node_description_m.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_node_description_m.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_node_description_m.style.transition='';
				if (me._map_node_description_m.ggCurrentLogicStateVisible == 0) {
					me._map_node_description_m.style.visibility="hidden";
					me._map_node_description_m.ggVisible=false;
				}
				else {
					me._map_node_description_m.style.visibility=(Number(me._map_node_description_m.style.opacity)>0||!me._map_node_description_m.style.opacity)?'inherit':'hidden';
					me._map_node_description_m.ggVisible=true;
				}
			}
		}
		me._map_node_description_m.logicBlock_visible();
		me._map_node_description_m.ggUpdatePosition=function (useTransition) {
		}
		me._map_phone.appendChild(me._map_node_description_m);
		el=me._map_node_title_m=document.createElement('div');
		els=me._map_node_title_m__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="map_node_title_M";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat_regular";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 22px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._map_node_title_m.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._map_node_title_m.ggUpdateText();
		player.addListener('changenode', function() {
			me._map_node_title_m.ggUpdateText();
		});
		el.appendChild(els);
		me._map_node_title_m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_node_title_m.ggUpdatePosition=function (useTransition) {
		}
		me._map_phone.appendChild(me._map_node_title_m);
		me.divSkin.appendChild(me._map_phone);
		me._room_button_desktop.logicBlock_visible();
		me._room_button_desktop.logicBlock_backgroundcolor();
		me._room_button_desktop.logicBlock_borderwidth();
		me._room_button_desktop.logicBlock_textcolor();
		me.elementMouseOver['room_button_desktop']=false;
		me._view_button_desktop.logicBlock_visible();
		me._view_button_desktop.logicBlock_backgroundcolor();
		me._view_button_desktop.logicBlock_borderwidth();
		me._view_button_desktop.logicBlock_textcolor();
		me.elementMouseOver['view_button_desktop']=false;
		me._entertainment_button_desktop.logicBlock_visible();
		me._entertainment_button_desktop.logicBlock_backgroundcolor();
		me._entertainment_button_desktop.logicBlock_borderwidth();
		me._entertainment_button_desktop.logicBlock_textcolor();
		me.elementMouseOver['entertainment_button_desktop']=false;
		me._dining_button_desktop.logicBlock_visible();
		me._dining_button_desktop.logicBlock_backgroundcolor();
		me._dining_button_desktop.logicBlock_borderwidth();
		me._dining_button_desktop.logicBlock_textcolor();
		me.elementMouseOver['dining_button_desktop']=false;
		me._lobby_button_desktop.logicBlock_visible();
		me._lobby_button_desktop.logicBlock_backgroundcolor();
		me._lobby_button_desktop.logicBlock_borderwidth();
		me._lobby_button_desktop.logicBlock_textcolor();
		me.elementMouseOver['lobby_button_desktop']=false;
		me._hotspot_info_button.logicBlock_visible();
		me._info_button.logicBlock_backgroundcolor();
		me._info_button.logicBlock_borderwidth();
		me.elementMouseOver['info_button']=false;
		me._text_1.logicBlock_textcolor();
		me._node_info.logicBlock_size();
		me._node_info.logicBlock_visible();
		me._node_description.logicBlock_visible();
		me._map.logicBlock_alpha();
		me._map_el.ggInitMap=function() {};
		me._map_el.ggInitMapMarkers=function() {};
		me._map_el.ggClearMap=function() {};
		me._map_el.logicBlock_position();
		me._map_el.logicBlock_size();
		me._map_el.logicBlock_visible();
		me._floorplan_el.ggMarkerInstances=[];
		me._floorplan_el.ggLastNodeId=null;
		me._floorplan_el.ggSimpleFloorplanMarkerArray=[];
		me._floorplan_el.ggFloorplanWidth=0;
		me._floorplan_el.ggFloorplanHeight=0;
		me._floorplan_el__mapdiv=document.createElement('div');
		me._floorplan_el__mapdiv.className='ggskin ggskin_map';
		me._floorplan_el.appendChild(me._floorplan_el__mapdiv);
		me._floorplan_el__img=document.createElement('img');
		me._floorplan_el__img.className='ggskin ggskin_map';
		me._floorplan_el__mapdiv.appendChild(me._floorplan_el__img);
		me._floorplan_el.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._floorplan_el.ggRadar.update=function() {
			var radar=me._floorplan_el.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._floorplan_el.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._floorplan_el.ggFilteredIds.length > 0 && me._floorplan_el.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._floorplan_el.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._floorplan_el.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._floorplan_el__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',80);
				radar.radarElement.setAttributeNS(null,'height',80);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 80 80');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 40 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 40 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 40 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 40 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 40;
				arcY1 += 40;
				arcX2 += 40;
				arcY2 += 40;
				var radarPathString = 'M40,40 L' + arcX1 + ',' + arcY1 + ' A 40 40 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#56ff7d');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#56ff7d');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me._floorplan_el__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 40;
				var radarYPos = activeMarker.radarYPos - 40;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._floorplan_el.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._floorplan_el__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._floorplan_el.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._floorplan_el.clientWidth;
			var mapHeight = me._floorplan_el.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._floorplan_el.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._floorplan_el__img.setAttribute('src', imageFilename);
			me._floorplan_el__img.setAttribute('loading', 'lazy');
		me._floorplan_el__mapdiv.setAttribute('style','position: absolute; left: 50%; margin-left: -' + me._floorplan_el.ggFloorplanWidth / 2 + 'px; top: 50%; margin-top: -' + me._floorplan_el.ggFloorplanHeight / 2 + 'px;width:' + me._floorplan_el.ggFloorplanWidth + 'px;height:' + me._floorplan_el.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._floorplan_el__img.setAttribute('style','width:' + me._floorplan_el.ggFloorplanWidth + 'px;height:' + me._floorplan_el.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._floorplan_el.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._floorplan_el.clientWidth / me._floorplan_el.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._floorplan_el.ggFloorplanHeight = me._floorplan_el.clientHeight;
				me._floorplan_el.ggFloorplanWidth = me._floorplan_el.ggFloorplanHeight * floorplanAR;
			} else {
				me._floorplan_el.ggFloorplanWidth = me._floorplan_el.clientWidth;
				me._floorplan_el.ggFloorplanHeight = me._floorplan_el.ggFloorplanWidth / floorplanAR;
			}
		}
		me._floorplan_el.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._floorplan_el.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._floorplan_el.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._floorplan_el.ggPermeableMap = true;
			} else {
				me._floorplan_el.ggPermeableMap = false;
			}
			me._floorplan_el.ggCalculateFloorplanSize(mapDetails);
			me._floorplan_el.ggShowSimpleFloorplan(mapDetails);
			me._floorplan_el.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._floorplan_el.ggMapNotLoaded = false;
		}
		me._floorplan_el.ggClearMap=function() {
			me._floorplan_el.ggClearMapMarkers();
			me._floorplan_el.ggMapNotLoaded = true;
		}
		me._floorplan_el.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._floorplan_el.ggMapId = mapId;
			if (!me._floorplan_el.ggMapNotLoaded) {
				me._floorplan_el.ggClearMap();
				me._floorplan_el.ggInitMap();
				me._floorplan_el.ggInitMapMarkers();
			}
		}
		me._floorplan_el.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._floorplan_el.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._floorplan_el.ggMapId);
					var xPos = (me._floorplan_el.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._floorplan_el.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._floorplan_el.ggHMarkerAnchorOffset;
					yPos -= me._floorplan_el.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._floorplan_el.style['z-index'] + 2;
				}
			}
		}
		me._floorplan_el.ggInitMapMarkers=function() {
			me._floorplan_el.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._floorplan_el.ggFilteredIds = [];
			if (me._floorplan_el.ggFilter != '') {
				var filter = me._floorplan_el.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._floorplan_el.ggFilteredIds.push(nodeId);
					}
				}
				if (me._floorplan_el.ggFilteredIds.length > 0) ids = me._floorplan_el.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._floorplan_el.ggMapId);
				if (coords.length>=2) {
					me._floorplan_el.ggHMarkerAnchorOffset = 10;
					me._floorplan_el.ggVMarkerAnchorOffset = 10;
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var markerClass = new SkinElement_map_pin_Class(me, markerParent);
					me._floorplan_el.ggMarkerInstances.push(markerClass);
					var marker = markerClass._map_pin;
					me._floorplan_el.ggSimpleFloorplanMarkerArray[id] = marker;
					me._floorplan_el__mapdiv.appendChild(marker);
				}
			}
			me._floorplan_el.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._floorplan_el);
		}
		me._floorplan_el.ggClearMapMarkers=function() {
			for (id in me._floorplan_el.ggSimpleFloorplanMarkerArray) {
				if (me._floorplan_el.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._floorplan_el__mapdiv.removeChild(me._floorplan_el.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._floorplan_el.ggMarkerInstances=[];
			me._floorplan_el.ggSimpleFloorplanMarkerArray=[];
		}
		me._floorplan_el.logicBlock_position();
		me._floorplan_el.logicBlock_size();
		me._floorplan_el.logicBlock_visible();
		me._map_node_description.logicBlock_visible();
		me.elementMouseOver['map_top']=false;
		me._map_close_btn.logicBlock_visible();
		me._map_close_btn_active.logicBlock_visible();
		me._map_button.logicBlock_visible();
		me._map_button.logicBlock_alpha();
		me._map_button.logicBlock_backgroundcolor();
		me._map_button.logicBlock_borderwidth();
		me.elementMouseOver['map_button']=false;
		me._map_icon.logicBlock_visible();
		me._map_icon_active.logicBlock_visible();
		me._floorplan_icon.logicBlock_visible();
		me._floorplan_icon_active.logicBlock_visible();
		me._map_button_text.logicBlock_textcolor();
		me._view_menu.logicBlock_position();
		me._view_menu.logicBlock_size();
		me._view_menu.logicBlock_alpha();
		me._entertainment_menu.logicBlock_position();
		me._entertainment_menu.logicBlock_size();
		me._entertainment_menu.logicBlock_alpha();
		me._room_menu.logicBlock_position();
		me._room_menu.logicBlock_size();
		me._room_menu.logicBlock_alpha();
		me._dining_menu.logicBlock_position();
		me._dining_menu.logicBlock_size();
		me._dining_menu.logicBlock_alpha();
		me._lobby_menu.logicBlock_position();
		me._lobby_menu.logicBlock_size();
		me._lobby_menu.logicBlock_alpha();
		el = me._map_code;
		;
		me._hotspot_info_button_m.logicBlock_alpha();
		me._info_button_m.logicBlock_backgroundcolor();
		me._info_button_m.logicBlock_borderwidth();
		me.elementMouseOver['info_button_m']=false;
		me._monitor_info_m.logicBlock_visible();
		me._node_info_m.logicBlock_size();
		me._node_info_m.logicBlock_visible();
		me._node_description_m.logicBlock_visible();
		me._room_menu_m.logicBlock_position();
		me._room_menu_m.logicBlock_size();
		me._room_menu_m.logicBlock_alpha();
		me._view_menu_m.logicBlock_position();
		me._view_menu_m.logicBlock_size();
		me._view_menu_m.logicBlock_alpha();
		me._entertainment_menu_m.logicBlock_position();
		me._entertainment_menu_m.logicBlock_size();
		me._entertainment_menu_m.logicBlock_alpha();
		me._dining_menu_m.logicBlock_position();
		me._dining_menu_m.logicBlock_size();
		me._dining_menu_m.logicBlock_alpha();
		me._lobby_menu_m.logicBlock_position();
		me._lobby_menu_m.logicBlock_size();
		me._lobby_menu_m.logicBlock_alpha();
		me._room_button_mobile.logicBlock_visible();
		me._room_button_mobile.logicBlock_backgroundcolor();
		me._room_button_mobile.logicBlock_borderwidth();
		me._room_button_mobile.logicBlock_textcolor();
		me.elementMouseOver['room_button_mobile']=false;
		me._view_button_mobile.logicBlock_visible();
		me._view_button_mobile.logicBlock_backgroundcolor();
		me._view_button_mobile.logicBlock_borderwidth();
		me._view_button_mobile.logicBlock_textcolor();
		me.elementMouseOver['view_button_mobile']=false;
		me._entertainment_button_mobile.logicBlock_visible();
		me._entertainment_button_mobile.logicBlock_backgroundcolor();
		me._entertainment_button_mobile.logicBlock_borderwidth();
		me._entertainment_button_mobile.logicBlock_textcolor();
		me.elementMouseOver['entertainment_button_mobile']=false;
		me._dining_button_desktop_mobile.logicBlock_visible();
		me._dining_button_desktop_mobile.logicBlock_backgroundcolor();
		me._dining_button_desktop_mobile.logicBlock_borderwidth();
		me._dining_button_desktop_mobile.logicBlock_textcolor();
		me.elementMouseOver['dining_button_desktop_mobile']=false;
		me._lobby_button_desktop_m.logicBlock_visible();
		me._lobby_button_desktop_m.logicBlock_backgroundcolor();
		me._lobby_button_desktop_m.logicBlock_borderwidth();
		me._lobby_button_desktop_m.logicBlock_textcolor();
		me.elementMouseOver['lobby_button_desktop_m']=false;
		me._map_button_m.logicBlock_visible();
		me._map_button_m.logicBlock_alpha();
		me._map_button_m.logicBlock_backgroundcolor();
		me._map_button_m.logicBlock_borderwidth();
		me.elementMouseOver['map_button_m']=false;
		me._map_icon_m.logicBlock_visible();
		me._map_icon_active_m.logicBlock_visible();
		me._floorplan_icon_m.logicBlock_visible();
		me._floorplan_icon_active_m.logicBlock_visible();
		me._map_button_text_m.logicBlock_textcolor();
		me._map_phone.logicBlock_alpha();
		me.elementMouseOver['close_popup_phone']=false;
		me._btn_close_popup_phone.logicBlock_visible();
		me._btn_close_popup_phone_active.logicBlock_visible();
		me._map_el_phone.ggMarkerInstances=[];
		me._map_el_phone.ggLastNodeId=null;
		me._map_el_phone.ggMarkerArray=[];
		me._map_el_phone.ggGoogleMarkerArray=[];
		me._map_el_phone.ggLastZoom = -1;
		me._map_el_phone.ggLastLat = 0.0;
		me._map_el_phone.ggLastLng = 0.0;
		me._map_el_phone.ggRadar={ lastFov : -1, lastPan : -1, lastZoom : -1,activeNodeLatLng : null, poly : null }
		me._map_el_phone.ggRadar.update=function() {
			var radar=me._map_el_phone.ggRadar;
			var map=me._map_el_phone.ggMap;
			if (!map) return;
			var d2r = Math.PI/180 ;
			var r2d = 180/Math.PI ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			var zoom = map.getZoom();
			var gps;
			if (player.getMapType(me._map_el_phone.ggMapId) == 'web') {
				gps=player.getNodeLatLng();
			} else {
				gps=player.getNodeMapCoords(null, me._map_el_phone.ggMapId);
				pan -= me._map_el_phone.ggFloorplanNorth;
			}
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map_el_phone.ggFilteredIds.length > 0 && me._map_el_phone.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0)) && filterpassed) {
				if (zoom<6) zoom = 6; // avoid large radar beams on world map
				if ((radar.poly) && (fov==radar.lastFov) && (pan==radar.lastPan) && (zoom==radar.lastZoom) && (gps[0]==radar.activeNodeLatLng.lat) && (gps[1]==radar.activeNodeLatLng.lng)) return; 
				radar.lastPan=pan;radar.lastFov=fov;radar.lastZoom=zoom;
				radar.activeNodeLatLng = L.latLng(gps[0], gps[1]);
				var tileDeg = 360.0 / Math.pow(2, zoom);
				var rLng = tileDeg * 0.3125;
				var rLat = rLng * Math.cos(radar.activeNodeLatLng.lat * d2r);
				var radar_path = [];
				radar_path.push(radar.activeNodeLatLng);
				var segments=8;
				for (i=-segments; i<=segments; i++) {
					var angle = (fov / (2*segments)) * i;
					var x = -rLng * Math.sin((pan+angle)*d2r) + radar.activeNodeLatLng.lng;
					var y =  rLat * Math.cos((pan+angle)*d2r) + radar.activeNodeLatLng.lat;
					radar_path.push(L.latLng(y, x));
				}
				if (radar.poly) {
					radar.poly.removeFrom(map);
					radar.poly = null;
				}
				radar.poly = L.polygon(radar_path, {
					color: '#4fb5c2',
					opacity: 0.8,
					weight: 1,
					fill: true,
					fillColor: '#4fb5c2',
					fillOpacity: 0.35
				}).addTo(map);
			} else {
				if (radar) {
					activeNodeLatLng = L.latLng(0,0);
					if (radar.poly) {
						radar.poly.removeFrom(map);
						radar.poly = null;
					}
				}
			}
		}
		me._map_el_phone.ggTileAvailable=function(x, y, z) {
			var mapDetails = player.getMapDetails(me._map_el_phone.ggMapId);
			if (z < 7 || z > 7 + (mapDetails['zoomlevels'] - 1)) return false;
			var mapAR = mapDetails['width'] / mapDetails['height'];
			if (mapDetails['width'] >= mapDetails['height']) {
			var tilesInX = Math.pow(2, z - 7);
			var tilesInY = Math.ceil(tilesInX / mapAR);
			} else {
				var tilesInY = Math.pow(2, z - 7);
				var tilesInX = Math.ceil(tilesInY * mapAR);
			}
			var tilesXStart = Math.pow(2, z - 1);
			var tilesYStart = tilesXStart;
			var tilesXEnd = tilesXStart + tilesInX - 1;
			var tilesYEnd = tilesYStart + tilesInY - 1;
			if (x < tilesXStart || x > tilesXEnd || y < tilesYStart || y > tilesYEnd) return false;
			return true;
		}
		me._map_el_phone.ggSetLayer=function(layerIndex) {
			if (typeof me._map_el_phone.ggMapLayers === 'object' && me._map_el_phone.ggMapLayers !== null && layerIndex >= 0 && layerIndex < Object.keys(me._map_el_phone.ggMapLayers).length) {
				me._map_el_phone.ggMap.removeLayer(me._map_el_phone.ggCurMap);
				me._map_el_phone.ggCurMap = me._map_el_phone.ggMapLayers[Object.keys(me._map_el_phone.ggMapLayers)[layerIndex]];
				me._map_el_phone.ggMap.addLayer(me._map_el_phone.ggCurMap);
			}
		}
		me._map_el_phone.ggInitMap=function(keepZoom) {
			var mapType = player.getMapType(me._map_el_phone.ggMapId);
			var mapDetails = player.getMapDetails(me._map_el_phone.ggMapId);
			if (!me._map_el_phone.ggMapId) return;
			if (!me._map_el_phone.ggMapId.startsWith('google') && Object.keys(mapDetails).length === 0) return;
			if (mapType == 'file') {
				me._map_el_phone.style.backgroundColor = mapDetails['bgcolor'];
				me._map_el_phone.ggFloorplanNorth = mapDetails['floorplannorth'];
			} else {
				me._map_el_phone.style.backgroundColor = '#fff';
			}
			var gps;
			if (player.getMapType(me._map_el_phone.ggMapId) == 'web') {
				gps=player.getNodeLatLng();
			} else {
				gps=player.getNodeMapCoords(null, me._map_el_phone.ggMapId);
			}
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
				activeNodeLatLng = L.latLng(gps[0], gps[1]);
			} else {
				activeNodeLatLng = L.latLng(me._map_el_phone.ggLastLat, me._map_el_phone.ggLastLng);
			}
			if (mapType == 'web') {
				if (me._map_el_phone.ggLastZoom == -1) me._map_el_phone.ggLastZoom = 14;
				var initZoom = keepZoom ? me._map_el_phone.ggLastZoom : 14;
				var maxZoom = ((mapDetails['mapprovider'] == 'openstreetmap') && (mapDetails['mapstyle'] == 'outdoors')) ? 17 : 18;
				if (mapDetails['mapprovider'] == 'custom') maxZoom = mapDetails['mapmaxzoom'];
				var mapOptions = {
					zoom: initZoom,
					zoomControl: true,
					maxBoundsViscosity: 1.0,
					attributionControl: false,
					maxZoom: maxZoom
				};
				me._map_el_phone.ggMap = L.map(me._map_el_phone, mapOptions).setView(activeNodeLatLng, initZoom);
				if (mapDetails.hasOwnProperty('maplimits') && (mapDetails['maplimits'].length == 4)) {
					var maxBounds = [
						[parseFloat(mapDetails['maplimits'][0]), parseFloat(mapDetails['maplimits'][1])],
						[parseFloat(mapDetails['maplimits'][2]), parseFloat(mapDetails['maplimits'][3])]
					];
					me._map_el_phone.ggMap.setMaxBounds(maxBounds);
					me._map_el_phone.ggMap.setMinZoom(me._map_el_phone.ggMap.getBoundsZoom(maxBounds) - 1);
				}
				if (mapDetails['mapprovider'] == 'openstreetmap') {
					if (mapDetails['mapstyle'] == 'streets') {
						L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{}).addTo(me._map_el_phone.ggMap);
					} else if (mapDetails['mapstyle'] == 'outdoors') {
						L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',{}).addTo(me._map_el_phone.ggMap);
					}
				} else if (mapDetails['mapprovider'] == 'mapbox') {
					if (mapDetails.hasOwnProperty('mapboxlayerstyleurls')) {
						me._map_el_phone.ggMapLayers = {};
						var firstCustMap;
						for (var layerIndex = 0; layerIndex < mapDetails['mapboxlayerstyleurls'].length; layerIndex++) {
						var layerStyle = mapDetails['mapboxlayerstyleurls'][layerIndex];
						var custMap;
						if (!layerStyle.startsWith('mapbox:')) {
							if (layerStyle == 'satellite') {
								custMap = L.tileLayer('https://api.mapbox.com/v4/mapbox.' + layerStyle + '/{z}/{x}/{y}@2x.png?access_token=' + mapDetails['mapkey'], {}); 
							} else {
								custMap = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/' + layerStyle +  '-v11/tiles/{z}/{x}/{y}@2x?access_token=' + mapDetails["mapkey"], { tileSize: 512, zoomOffset: -1 });
							}
						} else {
							layerStyle = layerStyle.slice(layerStyle.indexOf('styles/') + 7);
							custMap = L.tileLayer('https://api.mapbox.com/styles/v1/' + layerStyle + '/tiles/256/{z}/{x}/{y}@2x?access_token=' + mapDetails["mapkey"],{});
						}
							me._map_el_phone.ggMapLayers[mapDetails['mapboxlayernames'][layerIndex]] = custMap;
							if (layerIndex == 0) {
								me._map_el_phone.ggCurMap = custMap;
							}
						}
						var overlayMaps = {};
						L.control.layers(me._map_el_phone.ggMapLayers, overlayMaps).addTo(me._map_el_phone.ggMap);
						me._map_el_phone.ggCurMap.addTo(me._map_el_phone.ggMap);
					} else {
						var styleUrl = mapDetails['styleurl'];
						var layer;
						if (styleUrl == '') {
							if (mapDetails['mapstyle'] == 'satellite') {
								layer = L.tileLayer('https://api.mapbox.com/v4/mapbox.' + mapDetails['mapstyle'] +  '/{z}/{x}/{y}@2x.png?access_token=' + mapDetails['mapkey'],{});
							} else {
								layer = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/' + mapDetails['mapstyle'] +  '-v11/tiles/{z}/{x}/{y}@2x?access_token=' + mapDetails["mapkey"], { tileSize: 512, zoomOffset: -1 });;
							}
						} else {
							styleUrl = styleUrl.slice(styleUrl.indexOf('styles/') + 7);
							layer = L.tileLayer('https://api.mapbox.com/styles/v1/' + styleUrl + '/tiles/256/{z}/{x}/{y}@2x?access_token=' + mapDetails["mapkey"],{});;
						}
						layer.addTo(me._map_el_phone.ggMap);
					}
				} else if (mapDetails['mapprovider'] == 'custom') {
					if (mapDetails.hasOwnProperty('customlayerurltemplates')) {
						me._map_el_phone.ggMapLayers = {};
						var firstCustMap;
						for (var layerIndex = 0; layerIndex < mapDetails['customlayerurltemplates'].length; layerIndex++) {
							var custMap = L.tileLayer(mapDetails['customlayerurltemplates'][layerIndex], { maxZoom: parseInt(mapDetails['customlayermaxzooms'][layerIndex])});
							me._map_el_phone.ggMapLayers[mapDetails['customlayernames'][layerIndex]] = custMap;
							if (layerIndex == 0) {
								me._map_el_phone.ggCurMap = custMap;
							}
						}
						var overlayMaps = {};
						L.control.layers(me._map_el_phone.ggMapLayers, overlayMaps).addTo(me._map_el_phone.ggMap);
						me._map_el_phone.ggCurMap.addTo(me._map_el_phone.ggMap);
						me._map_el_phone.ggMap.on('baselayerchange', function(event) {
							me._map_el_phone.ggMap.setMaxZoom(mapDetails['customlayermaxzooms'][mapDetails['customlayernames'].indexOf(event.name)]);
						});
					} else {
						L.tileLayer(mapDetails['mapurltemplate'],{ maxZoom: mapDetails['mapmaxzoom']}).addTo(me._map_el_phone.ggMap);
					}
				}
				me._map_el_phone.ggMap.on('zoom', function() {
					me._map_el_phone.ggRadar.update();
				});
			} else if (mapType == 'file') {
				me._map_el_phone.ggCalculateFloorplanDimInDeg(mapDetails);
				var mapCenter = activeNodeLatLng;
				if (mapCenter.lat == 0.0 && mapCenter.lng == 0.0) {
					mapCenter.lat = -me._map_el_phone.mapHeightInDeg / 2;
					mapCenter.lng = me._map_el_phone.mapWidthInDeg / 2;
				}
				if (me._map_el_phone.ggLastZoom == -1) me._map_el_phone.ggLastZoom = 7;
				var initZoom = keepZoom ? me._map_el_phone.ggLastZoom : 7;
				var mapOptions = {
					zoom: initZoom,
					minZoom: 7,
					maxZoom: 7 + (mapDetails['zoomlevels'] - 1) + 0,
					center: mapCenter,
					zoomControls: true,
					attributionControl: false
				};
				me._map_el_phone.ggMap = L.map(me._map_el_phone, mapOptions).setView(activeNodeLatLng, initZoom);
				var MapLayer = L.TileLayer.extend({
					getTileUrl: function(coords){
						if (me._map_el_phone.ggTileAvailable(coords.x, coords.y, coords.z)) {
							return basePath + 'images/maptiles/' + me._map_el_phone.ggMapId + '/' + coords.z + '/' + coords.x + '_' + coords.y + '.' + mapDetails['tileformat'];
						} else {
							return '';
						}
					}
				});
				var mapLayer = new MapLayer();
				mapLayer.addTo(me._map_el_phone.ggMap);
				me._map_el_phone.ggMap.on('move zoom', function() {
					me._map_el_phone.ggCheckBounds(mapDetails);
					me._map_el_phone.ggRadar.update();
				});
				me._map_el_phone.ggCheckBounds(mapDetails);
			}
			me._map_el_phone.ggMapNotLoaded = false;
		}
		me._map_el_phone.ggClearMap=function() {
		me._map_el_phone.ggClearMapMarkers();
		if (me._map_el_phone.ggMap) me._map_el_phone.ggMap.remove();
		me._map_el_phone.ggMap = null;
		me._map_el_phone.ggMapNotLoaded = true;
		}
		me._map_el_phone.ggClearMapMarkers=function() {
			me._map_el_phone.ggLastActivMarker = null;
			var id,marker;
			var markers=me._map_el_phone.ggMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					marker.removeFrom(me._map_el_phone.ggMap);
				}
			}
			me._map_el_phone.ggMarkerArray=[];
			me._map_el_phone.ggMarkerInstances=[];
			me._map_el_phone.ggLastActivMarker = null;
		}
		me._map_el_phone.ggCenterNode=function(nodeId) {
			if (!me._map_el_phone.ggMap) return;
			var gps;
			if (player.getMapType(me._map_el_phone.ggMapId) == 'web') {
				gps=player.getNodeLatLng(nodeId);
			} else {
				gps=player.getNodeMapCoords(nodeId, me._map_el_phone.ggMapId);
			}
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
				var markerLocation = L.latLng(gps[0], gps[1]);
				me._map_el_phone.ggMap.panTo(markerLocation, {animate: false});
			}
		}
		me._map_el_phone.ggFitBounds=function(force) {
			if (me._map_el_phone.ggMapNotLoaded) return;
			if (!me._map_el_phone.ggMap) return;
			if (me._map_el_phone.ggMarkerBounds.isValid()) {
				if (me._map_el_phone.ggMarkerInstances.length > 1 || Object.getOwnPropertyNames(me._map_el_phone.ggGoogleMarkerArray).length > 1) {
					me._map_el_phone.ggMap.zoomOut(1, {animate: false});
					me._map_el_phone.ggMap.fitBounds(me._map_el_phone.ggMarkerBounds, {padding: [30, 30], animate: false});
				} else {
					me._map_el_phone.ggMap.setView(me._map_el_phone.ggMarkerBounds.getCenter(), me._map_el_phone.ggMap.getZoom());
					if (player.getMapType(me._map_el_phone.ggMapId) == 'web') {
						me._map_el_phone.ggMap.setZoom(18);
					} else {
						me._map_el_phone.ggMap.setZoom(7);
					}
				}
			}
		}
		me._map_el_phone.ggInitMapMarkers=function(updateMapBounds) {
			if (!me._map_el_phone.ggMap) return;
			L.SkinMarkerLayer = L.Layer.extend({
				initialize: function(div, pos) {
					div.style.left = -10 + 'px';
					div.style.top = -10 + 'px';
					this._div = document.createElement('div');
					this._div.appendChild(div);
					this._pos = pos;
				},
				onAdd: function(map) {
					this.options.pane = 'markerPane';
					var pane = map.getPane(this.options.pane);
					pane.appendChild(this._div);
					this._update();
					map.on('zoomstart', this._zoomStart, this);
					map.on('zoomend', this._zoomEnd, this);
					map.on('zoomend viewreset', this._update, this);
				},
				onRemove : function(map) {
					L.DomUtil.remove(this._div);
					map.off('zoomend viewreset', this._update, this);
				},
				_zoomStart: function() {
						this._div.style.visibility = 'hidden';
				},
				_zoomEnd: function() {
						this._div.style.visibility = 'inherit';
				},
				_update : function() {
					var point = this._map.latLngToLayerPoint(this._pos);
					L.DomUtil.setPosition(this._div, point);
				}
			});
			me._map_el_phone.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map_el_phone.ggFilteredIds = [];
			if (me._map_el_phone.ggFilter != '') {
				var filter = me._map_el_phone.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_el_phone.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_el_phone.ggFilteredIds.length > 0) ids = me._map_el_phone.ggFilteredIds;
			}
			var marker;
			var markerLocation;
			me._map_el_phone.ggMarkerBounds = L.latLngBounds();
			var currentId = player.getCurrentNode();
			for(var i=0;i<ids.length;i++) {
				var id=ids[i];
				var gps;
				if (player.getMapType(me._map_el_phone.ggMapId) == 'web') {
					gps=player.getNodeLatLng(id);
				} else {
					gps=player.getNodeMapCoords(id, me._map_el_phone.ggMapId);
				}
				if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
					markerLocation = L.latLng(gps[0], gps[1]);
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var div=new SkinElement_map_pin_Class(me, markerParent);
					marker=new L.SkinMarkerLayer(div._map_pin,markerLocation);
					marker.addTo(me._map_el_phone.ggMap);
					me._map_el_phone.ggMarkerArray[id]=marker;
					me._map_el_phone.ggMarkerInstances.push(div);
					me._map_el_phone.ggMarkerBounds.extend(markerLocation);
				}
			}
			if (ids.length > 1 && me._map_el_phone.ggMarkerBounds.isValid() && updateMapBounds) {
				me._map_el_phone.ggFitBounds(false);
			}
			skin.updateSize(me._map_el_phone);
			this.ggLastActivMarker = null;
			if (this.ggUpdateConditionNodeChange) this.ggUpdateConditionNodeChange();
			this.ggRadar.lastFov = -1;
			this.ggRadar.update();
		}
		me._map_el_phone.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'file') {
				return;
			}
			me._map_el_phone.ggMapId = mapId;
			if (!me._map_el_phone.ggMapNotLoaded) {
				me._map_el_phone.ggLastZoom = me._map_el_phone.ggMap.getZoom();
				me._map_el_phone.ggLastLat = me._map_el_phone.ggMap.getCenter().lat;
				me._map_el_phone.ggLastLng = me._map_el_phone.ggMap.getCenter().lng;
				me._map_el_phone.ggClearMap();
				me._map_el_phone.ggInitMap(true);
				me._map_el_phone.ggInitMapMarkers(false);
			}
		}
		me._map_el_phone.ggCalculateFloorplanDimInDeg=function(mapDetails) {
			var mapAR = mapDetails['width'] / mapDetails['height'];
			var tileInDeg = 360.0 / Math.pow(2, 7);
			if (mapDetails['width'] >= mapDetails['height']) {
				var tmpWidth = mapDetails['width'];
				while (tmpWidth > 256) {
					tmpWidth /= 2;
				}
				me._map_el_phone.mapWidthInDeg = tileInDeg * (tmpWidth / 256);
				me._map_el_phone.mapHeightInDeg = me._map_el_phone.mapWidthInDeg / mapAR;
			} else {
				var tmpHeight = mapDetails['height'];
				while (tmpHeight > 256) {
					tmpHeight /= 2;
				}
				me._map_el_phone.mapHeightInDeg = tileInDeg * (tmpHeight / 256);
				me._map_el_phone.mapWidthInDeg = me._map_el_phone.mapHeightInDeg * mapAR;
			}
		}
		me._map_el_phone.ggInCheckBounds=false;
		me._map_el_phone.ggCheckBounds=function(mapDetails) {
			if (me._map_el_phone.ggInCheckBounds) return;
			me._map_el_phone.ggInCheckBounds = true;
			var mapCenter = me._map_el_phone.ggMap.getCenter();
			var currentZoom = me._map_el_phone.ggMap.getZoom();
			var pixelInDeg = 360.0 / (Math.pow(2, currentZoom) * 256)
			var xOffset = (me._map_el_phone.clientWidth / 2.0) * pixelInDeg;
			var yOffset = (me._map_el_phone.clientHeight / 2.0) * pixelInDeg;
			var x = mapCenter.lng;
			var y = mapCenter.lat;
			var xTemp = x;
			var yTemp = y;
			if (me._map_el_phone.mapWidthInDeg < me._map_el_phone.clientWidth * pixelInDeg) {
				var xMargin = (me._map_el_phone.clientWidth * pixelInDeg - me._map_el_phone.mapWidthInDeg) / 2;
				if (x < me._map_el_phone.mapWidthInDeg / 2 - xMargin) x = me._map_el_phone.mapWidthInDeg / 2 - xMargin;
				if (x > me._map_el_phone.mapWidthInDeg / 2 + xMargin) x = me._map_el_phone.mapWidthInDeg / 2 + xMargin;
			} else {
				if (x > me._map_el_phone.mapWidthInDeg - xOffset) x = me._map_el_phone.mapWidthInDeg - xOffset;
				if (x < xOffset) x = xOffset;
			}
			if (me._map_el_phone.mapHeightInDeg < me._map_el_phone.clientHeight * pixelInDeg) {
				var yMargin = (me._map_el_phone.clientHeight * pixelInDeg - me._map_el_phone.mapHeightInDeg) / 2;
				if (y < -me._map_el_phone.mapHeightInDeg / 2 - yMargin) y = -me._map_el_phone.mapHeightInDeg / 2 - yMargin;
				if (y > -me._map_el_phone.mapHeightInDeg / 2 + yMargin) y = -me._map_el_phone.mapHeightInDeg / 2 + yMargin;
			} else {
				if (y < -me._map_el_phone.mapHeightInDeg + yOffset) y = -me._map_el_phone.mapHeightInDeg + yOffset;
				if (y > -yOffset) y = -yOffset;
			}
			if (x != xTemp || y != yTemp) {
				var newCenter = L.latLng(y, x);
				me._map_el_phone.ggMap.setView(newCenter, me._map_el_phone.ggMap.getZoom(), {animate: false});
			}
			me._map_el_phone.ggInCheckBounds = false;
		}
		me._map_el_phone.logicBlock_visible();
		me._floorplan_el_phone.ggMarkerInstances=[];
		me._floorplan_el_phone.ggLastNodeId=null;
		me._floorplan_el_phone.ggSimpleFloorplanMarkerArray=[];
		me._floorplan_el_phone.ggFloorplanWidth=0;
		me._floorplan_el_phone.ggFloorplanHeight=0;
		me._floorplan_el_phone__mapdiv=document.createElement('div');
		me._floorplan_el_phone__mapdiv.className='ggskin ggskin_map';
		me._floorplan_el_phone.appendChild(me._floorplan_el_phone__mapdiv);
		me._floorplan_el_phone__img=document.createElement('img');
		me._floorplan_el_phone__img.className='ggskin ggskin_map';
		me._floorplan_el_phone__mapdiv.appendChild(me._floorplan_el_phone__img);
		me._floorplan_el_phone.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._floorplan_el_phone.ggRadar.update=function() {
			var radar=me._floorplan_el_phone.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._floorplan_el_phone.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._floorplan_el_phone.ggFilteredIds.length > 0 && me._floorplan_el_phone.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._floorplan_el_phone.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._floorplan_el_phone.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._floorplan_el_phone__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',160);
				radar.radarElement.setAttributeNS(null,'height',160);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 160 160');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 80 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 80 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 80 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 80 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 80;
				arcY1 += 80;
				arcX2 += 80;
				arcY2 += 80;
				var radarPathString = 'M80,80 L' + arcX1 + ',' + arcY1 + ' A 80 80 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#4fb5c2');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#4fb5c2');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me._floorplan_el_phone__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 80;
				var radarYPos = activeMarker.radarYPos - 80;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._floorplan_el_phone.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._floorplan_el_phone__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._floorplan_el_phone.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._floorplan_el_phone.clientWidth;
			var mapHeight = me._floorplan_el_phone.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._floorplan_el_phone.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._floorplan_el_phone__img.setAttribute('src', imageFilename);
			me._floorplan_el_phone__img.setAttribute('loading', 'lazy');
		me._floorplan_el_phone__mapdiv.setAttribute('style','position: absolute; left: 50%; margin-left: -' + me._floorplan_el_phone.ggFloorplanWidth / 2 + 'px; top: 50%; margin-top: -' + me._floorplan_el_phone.ggFloorplanHeight / 2 + 'px;width:' + me._floorplan_el_phone.ggFloorplanWidth + 'px;height:' + me._floorplan_el_phone.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._floorplan_el_phone__img.setAttribute('style','width:' + me._floorplan_el_phone.ggFloorplanWidth + 'px;height:' + me._floorplan_el_phone.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._floorplan_el_phone.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._floorplan_el_phone.clientWidth / me._floorplan_el_phone.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._floorplan_el_phone.ggFloorplanHeight = me._floorplan_el_phone.clientHeight;
				me._floorplan_el_phone.ggFloorplanWidth = me._floorplan_el_phone.ggFloorplanHeight * floorplanAR;
			} else {
				me._floorplan_el_phone.ggFloorplanWidth = me._floorplan_el_phone.clientWidth;
				me._floorplan_el_phone.ggFloorplanHeight = me._floorplan_el_phone.ggFloorplanWidth / floorplanAR;
			}
		}
		me._floorplan_el_phone.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._floorplan_el_phone.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._floorplan_el_phone.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._floorplan_el_phone.ggPermeableMap = true;
			} else {
				me._floorplan_el_phone.ggPermeableMap = false;
			}
			me._floorplan_el_phone.ggCalculateFloorplanSize(mapDetails);
			me._floorplan_el_phone.ggShowSimpleFloorplan(mapDetails);
			me._floorplan_el_phone.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._floorplan_el_phone.ggMapNotLoaded = false;
		}
		me._floorplan_el_phone.ggClearMap=function() {
			me._floorplan_el_phone.ggClearMapMarkers();
			me._floorplan_el_phone.ggMapNotLoaded = true;
		}
		me._floorplan_el_phone.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._floorplan_el_phone.ggMapId = mapId;
			if (!me._floorplan_el_phone.ggMapNotLoaded) {
				me._floorplan_el_phone.ggClearMap();
				me._floorplan_el_phone.ggInitMap();
				me._floorplan_el_phone.ggInitMapMarkers();
			}
		}
		me._floorplan_el_phone.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._floorplan_el_phone.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._floorplan_el_phone.ggMapId);
					var xPos = (me._floorplan_el_phone.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._floorplan_el_phone.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._floorplan_el_phone.ggHMarkerAnchorOffset;
					yPos -= me._floorplan_el_phone.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._floorplan_el_phone.style['z-index'] + 2;
				}
			}
		}
		me._floorplan_el_phone.ggInitMapMarkers=function() {
			me._floorplan_el_phone.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._floorplan_el_phone.ggFilteredIds = [];
			if (me._floorplan_el_phone.ggFilter != '') {
				var filter = me._floorplan_el_phone.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._floorplan_el_phone.ggFilteredIds.push(nodeId);
					}
				}
				if (me._floorplan_el_phone.ggFilteredIds.length > 0) ids = me._floorplan_el_phone.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._floorplan_el_phone.ggMapId);
				if (coords.length>=2) {
					me._floorplan_el_phone.ggHMarkerAnchorOffset = 10;
					me._floorplan_el_phone.ggVMarkerAnchorOffset = 10;
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var markerClass = new SkinElement_map_pin_Class(me, markerParent);
					me._floorplan_el_phone.ggMarkerInstances.push(markerClass);
					var marker = markerClass._map_pin;
					me._floorplan_el_phone.ggSimpleFloorplanMarkerArray[id] = marker;
					me._floorplan_el_phone__mapdiv.appendChild(marker);
				}
			}
			me._floorplan_el_phone.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._floorplan_el_phone);
		}
		me._floorplan_el_phone.ggClearMapMarkers=function() {
			for (id in me._floorplan_el_phone.ggSimpleFloorplanMarkerArray) {
				if (me._floorplan_el_phone.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._floorplan_el_phone__mapdiv.removeChild(me._floorplan_el_phone.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._floorplan_el_phone.ggMarkerInstances=[];
			me._floorplan_el_phone.ggSimpleFloorplanMarkerArray=[];
		}
		me._floorplan_el_phone.logicBlock_visible();
		me._map_node_description_m.logicBlock_visible();
		player.addListener('activehotspotchanged', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node_Day&Night')) {
				for(var i = 0; i < hotspotTemplates['ht_node_Day&Night'].length; i++) {
					hotspotTemplates['ht_node_Day&Night'][i].ggEvent_activehotspotchanged();
				}
			}
			me._node_info.logicBlock_visible();
			me._node_info_m.logicBlock_visible();
		});
		player.addListener('changenode', function(event) {
			for(var i = 0; i < me._lobby_cloner_m.ggInstances.length; i++) {
				me._lobby_cloner_m.ggInstances[i].ggEvent_changenode(event);
			}
			for(var i = 0; i < me._dining_cloner_m.ggInstances.length; i++) {
				me._dining_cloner_m.ggInstances[i].ggEvent_changenode(event);
			}
			for(var i = 0; i < me._entertainment_cloner_m.ggInstances.length; i++) {
				me._entertainment_cloner_m.ggInstances[i].ggEvent_changenode(event);
			}
			for(var i = 0; i < me._view_cloner_m.ggInstances.length; i++) {
				me._view_cloner_m.ggInstances[i].ggEvent_changenode(event);
			}
			for(var i = 0; i < me._room_cloner_m.ggInstances.length; i++) {
				me._room_cloner_m.ggInstances[i].ggEvent_changenode(event);
			}
			for(var i = 0; i < me._lobby_cloner.ggInstances.length; i++) {
				me._lobby_cloner.ggInstances[i].ggEvent_changenode(event);
			}
			for(var i = 0; i < me._dining_cloner.ggInstances.length; i++) {
				me._dining_cloner.ggInstances[i].ggEvent_changenode(event);
			}
			for(var i = 0; i < me._room_cloner.ggInstances.length; i++) {
				me._room_cloner.ggInstances[i].ggEvent_changenode(event);
			}
			for(var i = 0; i < me._entertainment_cloner.ggInstances.length; i++) {
				me._entertainment_cloner.ggInstances[i].ggEvent_changenode(event);
			}
			for(var i = 0; i < me._view_cloner.ggInstances.length; i++) {
				me._view_cloner.ggInstances[i].ggEvent_changenode(event);
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node_Day&Night')) {
				for(var i = 0; i < hotspotTemplates['ht_node_Day&Night'].length; i++) {
					hotspotTemplates['ht_node_Day&Night'][i].ggEvent_changenode();
				}
			}
			me._room_button_desktop.logicBlock_backgroundcolor();
			me._view_button_desktop.logicBlock_backgroundcolor();
			me._entertainment_button_desktop.logicBlock_backgroundcolor();
			me._dining_button_desktop.logicBlock_backgroundcolor();
			me._lobby_button_desktop.logicBlock_backgroundcolor();
			me._hotspot_info_button.logicBlock_visible();
			me._info_button.logicBlock_backgroundcolor();
			me._node_info.logicBlock_size();
			me._node_info.logicBlock_visible();
			me._node_description.logicBlock_visible();
			me._map.logicBlock_alpha();
			me._map_el.logicBlock_position();
			me._map_el.logicBlock_size();
			me._map_el.logicBlock_visible();
			me._floorplan_el.logicBlock_position();
			me._floorplan_el.logicBlock_size();
			me._floorplan_el.logicBlock_visible();
			for (var i=0; i < me._floorplan_el.ggMarkerInstances.length; i++) {
				me._floorplan_el.ggMarkerInstances[i].ggEvent_changenode();
			}
			var mapDetails = player.getMapDetails(me._floorplan_el.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._floorplan_el.ggCalculateFloorplanSize(mapDetails);
				me._floorplan_el.ggShowSimpleFloorplan(mapDetails);
				me._floorplan_el.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._floorplan_el.ggRadar) me._floorplan_el.ggRadar.update();
			if (me._floorplan_el.ggLastNodeId) {
				var lastActiveMarker = me._floorplan_el.ggSimpleFloorplanMarkerArray[me._floorplan_el.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._floorplan_el.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._floorplan_el.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._floorplan_el.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._floorplan_el.ggChangeMap(mapId);
					}
				}
			}
			me._floorplan_el.ggLastNodeId = id;
			me._floorplan_el.ggRadar.update();
			me._map_node_description.logicBlock_visible();
			me._map_button.logicBlock_visible();
			me._map_button.logicBlock_alpha();
			me._map_button.logicBlock_backgroundcolor();
			me._view_menu.logicBlock_position();
			me._view_menu.logicBlock_size();
			me._view_menu.logicBlock_alpha();
			me._view_cloner.ggUpdateConditionNodeChange();
			me._entertainment_menu.logicBlock_position();
			me._entertainment_menu.logicBlock_size();
			me._entertainment_menu.logicBlock_alpha();
			me._entertainment_cloner.ggUpdateConditionNodeChange();
			me._room_menu.logicBlock_position();
			me._room_menu.logicBlock_size();
			me._room_menu.logicBlock_alpha();
			me._room_cloner.ggUpdateConditionNodeChange();
			me._dining_menu.logicBlock_position();
			me._dining_menu.logicBlock_size();
			me._dining_menu.logicBlock_alpha();
			me._dining_cloner.ggUpdateConditionNodeChange();
			me._lobby_menu.logicBlock_position();
			me._lobby_menu.logicBlock_size();
			me._lobby_menu.logicBlock_alpha();
			me._lobby_cloner.ggUpdateConditionNodeChange();
			me._hotspot_info_button_m.logicBlock_alpha();
			me._info_button_m.logicBlock_backgroundcolor();
			me._monitor_info_m.logicBlock_visible();
			me._node_info_m.logicBlock_size();
			me._node_info_m.logicBlock_visible();
			me._node_description_m.logicBlock_visible();
			me._room_menu_m.logicBlock_position();
			me._room_menu_m.logicBlock_size();
			me._room_menu_m.logicBlock_alpha();
			me._room_cloner_m.ggUpdateConditionNodeChange();
			me._view_menu_m.logicBlock_position();
			me._view_menu_m.logicBlock_size();
			me._view_menu_m.logicBlock_alpha();
			me._view_cloner_m.ggUpdateConditionNodeChange();
			me._entertainment_menu_m.logicBlock_position();
			me._entertainment_menu_m.logicBlock_size();
			me._entertainment_menu_m.logicBlock_alpha();
			me._entertainment_cloner_m.ggUpdateConditionNodeChange();
			me._dining_menu_m.logicBlock_position();
			me._dining_menu_m.logicBlock_size();
			me._dining_menu_m.logicBlock_alpha();
			me._dining_cloner_m.ggUpdateConditionNodeChange();
			me._lobby_menu_m.logicBlock_position();
			me._lobby_menu_m.logicBlock_size();
			me._lobby_menu_m.logicBlock_alpha();
			me._lobby_cloner_m.ggUpdateConditionNodeChange();
			me._room_button_mobile.logicBlock_visible();
			me._room_button_mobile.logicBlock_backgroundcolor();
			me._view_button_mobile.logicBlock_visible();
			me._view_button_mobile.logicBlock_backgroundcolor();
			me._entertainment_button_mobile.logicBlock_visible();
			me._entertainment_button_mobile.logicBlock_backgroundcolor();
			me._dining_button_desktop_mobile.logicBlock_visible();
			me._dining_button_desktop_mobile.logicBlock_backgroundcolor();
			me._lobby_button_desktop_m.logicBlock_visible();
			me._lobby_button_desktop_m.logicBlock_backgroundcolor();
			me._map_button_m.logicBlock_visible();
			me._map_button_m.logicBlock_alpha();
			me._map_button_m.logicBlock_backgroundcolor();
			me._map_phone.logicBlock_alpha();
			me._map_el_phone.logicBlock_visible();
			for (var i=0; i < me._map_el_phone.ggMarkerInstances.length; i++) {
				me._map_el_phone.ggMarkerInstances[i].ggEvent_changenode();
			}
			if (me._map_el_phone.ggLastActivMarker) {
				if (me._map_el_phone.ggLastActivMarker._div.ggDeactivate) me._map_el_phone.ggLastActivMarker._div.ggDeactivate();
			}
			var id=player.getCurrentNode();
			if (me.ggMarkerArray) {
			var marker=me._map_el_phone.ggMarkerArray[id];
			if (marker) {
				if (marker._div.ggActivate) marker._div.ggActivate();
			}
			me._map_el_phone.ggLastActivMarker=marker;
			}
			if (player.getMapType(me._map_el_phone.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map_el_phone.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map_el_phone.ggChangeMap(mapId);
					}
				}
			}
			me._map_el_phone.ggLastNodeId = id;
			me._map_el_phone.ggRadar.update();
			me._floorplan_el_phone.logicBlock_visible();
			for (var i=0; i < me._floorplan_el_phone.ggMarkerInstances.length; i++) {
				me._floorplan_el_phone.ggMarkerInstances[i].ggEvent_changenode();
			}
			var mapDetails = player.getMapDetails(me._floorplan_el_phone.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._floorplan_el_phone.ggCalculateFloorplanSize(mapDetails);
				me._floorplan_el_phone.ggShowSimpleFloorplan(mapDetails);
				me._floorplan_el_phone.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._floorplan_el_phone.ggRadar) me._floorplan_el_phone.ggRadar.update();
			if (me._floorplan_el_phone.ggLastNodeId) {
				var lastActiveMarker = me._floorplan_el_phone.ggSimpleFloorplanMarkerArray[me._floorplan_el_phone.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._floorplan_el_phone.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._floorplan_el_phone.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._floorplan_el_phone.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._floorplan_el_phone.ggChangeMap(mapId);
					}
				}
			}
			me._floorplan_el_phone.ggLastNodeId = id;
			me._floorplan_el_phone.ggRadar.update();
			me._map_node_description_m.logicBlock_visible();
		});
		player.addListener('changevisitednodes', function(event) {
			for(var i = 0; i < me._lobby_cloner_m.ggInstances.length; i++) {
				me._lobby_cloner_m.ggInstances[i].ggEvent_changevisitednodes(event);
			}
			for(var i = 0; i < me._dining_cloner_m.ggInstances.length; i++) {
				me._dining_cloner_m.ggInstances[i].ggEvent_changevisitednodes(event);
			}
			for(var i = 0; i < me._entertainment_cloner_m.ggInstances.length; i++) {
				me._entertainment_cloner_m.ggInstances[i].ggEvent_changevisitednodes(event);
			}
			for(var i = 0; i < me._view_cloner_m.ggInstances.length; i++) {
				me._view_cloner_m.ggInstances[i].ggEvent_changevisitednodes(event);
			}
			for(var i = 0; i < me._room_cloner_m.ggInstances.length; i++) {
				me._room_cloner_m.ggInstances[i].ggEvent_changevisitednodes(event);
			}
			for(var i = 0; i < me._lobby_cloner.ggInstances.length; i++) {
				me._lobby_cloner.ggInstances[i].ggEvent_changevisitednodes(event);
			}
			for(var i = 0; i < me._dining_cloner.ggInstances.length; i++) {
				me._dining_cloner.ggInstances[i].ggEvent_changevisitednodes(event);
			}
			for(var i = 0; i < me._room_cloner.ggInstances.length; i++) {
				me._room_cloner.ggInstances[i].ggEvent_changevisitednodes(event);
			}
			for(var i = 0; i < me._entertainment_cloner.ggInstances.length; i++) {
				me._entertainment_cloner.ggInstances[i].ggEvent_changevisitednodes(event);
			}
			for(var i = 0; i < me._view_cloner.ggInstances.length; i++) {
				me._view_cloner.ggInstances[i].ggEvent_changevisitednodes(event);
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_changevisitednodes();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node_Day&Night')) {
				for(var i = 0; i < hotspotTemplates['ht_node_Day&Night'].length; i++) {
					hotspotTemplates['ht_node_Day&Night'][i].ggEvent_changevisitednodes();
				}
			}
		});
		player.addListener('configloaded', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node_Day&Night')) {
				for(var i = 0; i < hotspotTemplates['ht_node_Day&Night'].length; i++) {
					hotspotTemplates['ht_node_Day&Night'][i].ggEvent_configloaded();
				}
			}
			me._room_button_desktop.logicBlock_visible();
			me._room_button_desktop.logicBlock_backgroundcolor();
			me._view_button_desktop.logicBlock_visible();
			me._view_button_desktop.logicBlock_backgroundcolor();
			me._entertainment_button_desktop.logicBlock_visible();
			me._entertainment_button_desktop.logicBlock_backgroundcolor();
			me._dining_button_desktop.logicBlock_visible();
			me._dining_button_desktop.logicBlock_backgroundcolor();
			me._lobby_button_desktop.logicBlock_visible();
			me._lobby_button_desktop.logicBlock_backgroundcolor();
			me._hotspot_info_button.logicBlock_visible();
			me._info_button.logicBlock_backgroundcolor();
			me._node_info.logicBlock_size();
			me._node_info.logicBlock_visible();
			me._node_description.logicBlock_visible();
			me._map.logicBlock_alpha();
			me._map_el.logicBlock_position();
			me._map_el.logicBlock_size();
			me._map_el.logicBlock_visible();
			me._floorplan_el.logicBlock_position();
			me._floorplan_el.logicBlock_size();
			me._floorplan_el.logicBlock_visible();
			if (me._floorplan_el.ggVisible) {
				me._floorplan_el.ggClearMap();
				me._floorplan_el.ggInitMap(false);
				me._floorplan_el.ggInitMapMarkers(true);
			}
			me._map_node_description.logicBlock_visible();
			me._map_button.logicBlock_visible();
			me._map_button.logicBlock_alpha();
			me._map_button.logicBlock_backgroundcolor();
			me._map_icon.logicBlock_visible();
			me._map_icon_active.logicBlock_visible();
			me._floorplan_icon.logicBlock_visible();
			me._floorplan_icon_active.logicBlock_visible();
			me._view_menu.ggUpdatePosition();
			me._view_menu.logicBlock_position();
			me._view_menu.logicBlock_size();
			me._view_menu.logicBlock_alpha();
			me._entertainment_menu.ggUpdatePosition();
			me._entertainment_menu.logicBlock_position();
			me._entertainment_menu.logicBlock_size();
			me._entertainment_menu.logicBlock_alpha();
			me._room_menu.ggUpdatePosition();
			me._room_menu.logicBlock_position();
			me._room_menu.logicBlock_size();
			me._room_menu.logicBlock_alpha();
			me._dining_menu.ggUpdatePosition();
			me._dining_menu.logicBlock_position();
			me._dining_menu.logicBlock_size();
			me._dining_menu.logicBlock_alpha();
			me._lobby_menu.ggUpdatePosition();
			me._lobby_menu.logicBlock_position();
			me._lobby_menu.logicBlock_size();
			me._lobby_menu.logicBlock_alpha();
			me._hotspot_info_button_m.logicBlock_alpha();
			me._info_button_m.logicBlock_backgroundcolor();
			me._monitor_info_m.logicBlock_visible();
			me._node_info_m.logicBlock_size();
			me._node_info_m.logicBlock_visible();
			me._node_description_m.logicBlock_visible();
			me._room_menu_m.ggUpdatePosition();
			me._room_menu_m.logicBlock_position();
			me._room_menu_m.logicBlock_size();
			me._room_menu_m.logicBlock_alpha();
			me._view_menu_m.ggUpdatePosition();
			me._view_menu_m.logicBlock_position();
			me._view_menu_m.logicBlock_size();
			me._view_menu_m.logicBlock_alpha();
			me._entertainment_menu_m.ggUpdatePosition();
			me._entertainment_menu_m.logicBlock_position();
			me._entertainment_menu_m.logicBlock_size();
			me._entertainment_menu_m.logicBlock_alpha();
			me._dining_menu_m.ggUpdatePosition();
			me._dining_menu_m.logicBlock_position();
			me._dining_menu_m.logicBlock_size();
			me._dining_menu_m.logicBlock_alpha();
			me._lobby_menu_m.ggUpdatePosition();
			me._lobby_menu_m.logicBlock_position();
			me._lobby_menu_m.logicBlock_size();
			me._lobby_menu_m.logicBlock_alpha();
			me._room_button_mobile.logicBlock_visible();
			me._room_button_mobile.logicBlock_backgroundcolor();
			me._view_button_mobile.logicBlock_visible();
			me._view_button_mobile.logicBlock_backgroundcolor();
			me._entertainment_button_mobile.logicBlock_visible();
			me._entertainment_button_mobile.logicBlock_backgroundcolor();
			me._dining_button_desktop_mobile.logicBlock_visible();
			me._dining_button_desktop_mobile.logicBlock_backgroundcolor();
			me._lobby_button_desktop_m.logicBlock_visible();
			me._lobby_button_desktop_m.logicBlock_backgroundcolor();
			me._map_button_m.logicBlock_visible();
			me._map_button_m.logicBlock_alpha();
			me._map_button_m.logicBlock_backgroundcolor();
			me._map_icon_m.logicBlock_visible();
			me._map_icon_active_m.logicBlock_visible();
			me._floorplan_icon_m.logicBlock_visible();
			me._floorplan_icon_active_m.logicBlock_visible();
			me._map_phone.logicBlock_alpha();
			me._map_el_phone.logicBlock_visible();
			if (me._map_el_phone.ggVisible) {
				me._map_el_phone.ggClearMap();
				me._map_el_phone.ggInitMap(false);
				me._map_el_phone.ggInitMapMarkers(true);
			}
			me._floorplan_el_phone.logicBlock_visible();
			if (me._floorplan_el_phone.ggVisible) {
				me._floorplan_el_phone.ggClearMap();
				me._floorplan_el_phone.ggInitMap(false);
				me._floorplan_el_phone.ggInitMapMarkers(true);
			}
			me._map_node_description_m.logicBlock_visible();
		});
		player.addListener('positionchanged', function(event) {
			me._floorplan_el.ggRadar.update();
			me._map_el_phone.ggRadar.update();
			me._floorplan_el_phone.ggRadar.update();
		});
		player.addListener('sizechanged', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_sizechanged();
				}
			}
			me._variable_resp_phone_1.logicBlock();
			me._variable_resp_phone.logicBlock();
		});
		player.addListener('varchanged_button_info', function(event) {
			me._info_button.logicBlock_backgroundcolor();
			me._info_button_m.logicBlock_backgroundcolor();
		});
		player.addListener('varchanged_menu_dining', function(event) {
			me._dining_button_desktop.logicBlock_backgroundcolor();
			me._dining_menu.logicBlock_position();
			me._dining_menu.logicBlock_alpha();
			me._dining_menu_m.logicBlock_position();
			me._dining_menu_m.logicBlock_alpha();
			me._dining_button_desktop_mobile.logicBlock_backgroundcolor();
		});
		player.addListener('varchanged_menu_entertainment', function(event) {
			me._entertainment_button_desktop.logicBlock_backgroundcolor();
			me._entertainment_menu.logicBlock_position();
			me._entertainment_menu.logicBlock_alpha();
			me._entertainment_menu_m.logicBlock_position();
			me._entertainment_menu_m.logicBlock_alpha();
			me._entertainment_button_mobile.logicBlock_backgroundcolor();
		});
		player.addListener('varchanged_menu_lobby', function(event) {
			me._lobby_button_desktop.logicBlock_backgroundcolor();
			me._lobby_menu.logicBlock_position();
			me._lobby_menu.logicBlock_alpha();
			me._lobby_menu_m.logicBlock_position();
			me._lobby_menu_m.logicBlock_alpha();
			me._lobby_button_desktop_m.logicBlock_backgroundcolor();
		});
		player.addListener('varchanged_menu_room', function(event) {
			me._room_button_desktop.logicBlock_backgroundcolor();
			me._room_menu.logicBlock_position();
			me._room_menu.logicBlock_alpha();
			me._room_menu_m.logicBlock_position();
			me._room_menu_m.logicBlock_alpha();
			me._room_button_mobile.logicBlock_backgroundcolor();
		});
		player.addListener('varchanged_menu_view', function(event) {
			me._view_button_desktop.logicBlock_backgroundcolor();
			me._view_menu.logicBlock_position();
			me._view_menu.logicBlock_alpha();
			me._view_menu_m.logicBlock_position();
			me._view_menu_m.logicBlock_alpha();
			me._view_button_mobile.logicBlock_backgroundcolor();
		});
		player.addListener('varchanged_opt_3d_preview', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_varchanged_opt_3d_preview();
				}
			}
		});
		player.addListener('varchanged_opt_3d_preview_1', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node_Day&Night')) {
				for(var i = 0; i < hotspotTemplates['ht_node_Day&Night'].length; i++) {
					hotspotTemplates['ht_node_Day&Night'][i].ggEvent_varchanged_opt_3d_preview_1();
				}
			}
		});
		player.addListener('varchanged_opt_desc_in_maps', function(event) {
			me._node_description.logicBlock_visible();
			me._map_el.logicBlock_position();
			me._map_el.logicBlock_size();
			me._floorplan_el.logicBlock_position();
			me._floorplan_el.logicBlock_size();
			me._map_node_description.logicBlock_visible();
			me._node_description_m.logicBlock_visible();
			me._map_node_description_m.logicBlock_visible();
		});
		player.addListener('varchanged_resp_phone', function(event) {
			me._hotspot_info_button.logicBlock_visible();
			me._node_info.logicBlock_visible();
			me._map_button.logicBlock_visible();
			me._map_button.logicBlock_alpha();
			me._hotspot_info_button_m.logicBlock_alpha();
			me._monitor_info_m.logicBlock_visible();
			me._node_info_m.logicBlock_visible();
			me._room_button_mobile.logicBlock_visible();
			me._view_button_mobile.logicBlock_visible();
			me._entertainment_button_mobile.logicBlock_visible();
			me._dining_button_desktop_mobile.logicBlock_visible();
			me._lobby_button_desktop_m.logicBlock_visible();
			me._map_button_m.logicBlock_visible();
			me._map_button_m.logicBlock_alpha();
			me._map_phone.logicBlock_alpha();
		});
		player.addListener('varchanged_var_map', function(event) {
			me._node_info.logicBlock_size();
			me._view_menu.logicBlock_size();
			me._entertainment_menu.logicBlock_size();
			me._room_menu.logicBlock_size();
			me._dining_menu.logicBlock_size();
			me._lobby_menu.logicBlock_size();
			me._node_info_m.logicBlock_size();
			me._room_menu_m.logicBlock_size();
			me._view_menu_m.logicBlock_size();
			me._entertainment_menu_m.logicBlock_size();
			me._dining_menu_m.logicBlock_size();
			me._lobby_menu_m.logicBlock_size();
		});
		player.addListener('varchanged_vis_floorplan', function(event) {
			me._map.logicBlock_alpha();
			me._floorplan_el.logicBlock_visible();
			me._map_button.logicBlock_alpha();
			me._map_button.logicBlock_backgroundcolor();
			me._map_button_m.logicBlock_alpha();
			me._map_button_m.logicBlock_backgroundcolor();
			me._map_phone.logicBlock_alpha();
			me._floorplan_el_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_info_popup', function(event) {
			me._node_info.logicBlock_visible();
			me._node_info_m.logicBlock_visible();
		});
		player.addListener('varchanged_vis_map', function(event) {
			me._map.logicBlock_alpha();
			me._map_el.logicBlock_visible();
			me._map_button.logicBlock_alpha();
			me._map_button_m.logicBlock_alpha();
			me._map_phone.logicBlock_alpha();
			me._map_el_phone.logicBlock_visible();
		});
		player.addListener('viewerinit', function(event) {
			me._view_cloner.ggUpdate();
			me._entertainment_cloner.ggUpdate();
			me._room_cloner.ggUpdate();
			me._dining_cloner.ggUpdate();
			me._lobby_cloner.ggUpdate();
			me._room_cloner_m.ggUpdate();
			me._view_cloner_m.ggUpdate();
			me._entertainment_cloner_m.ggUpdate();
			me._dining_cloner_m.ggUpdate();
			me._lobby_cloner_m.ggUpdate();
		});
	};
	function SkinCloner_lobby_cloner_m_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._thumbnail_title=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_title;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumbnail_title";
		el.ggDx=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.8,sy:0.8,def:'translate(-50%, 0px) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text hepta_slab";
		el.ggType='text';
		hs ='';
		hs+='bottom : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) - 5px);';
		hs+='position : absolute;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : inherit;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._thumbnail_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._thumbnail_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._thumbnail_title.ggUpdateText();
		});
		el.appendChild(els);
		me._thumbnail_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_title.onclick=function (e) {
			if (me._thumbnail_title.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me._thumbnail_title.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._thumbnail_title);
		el=me._thumbnail_image=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_image;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_image__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/thumbnail_image_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 50px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_image.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_image.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._thumbnail_image);
		el=me._thumbnail_tint=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_tint;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="thumbnail_tint";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='border-color : #ffffff;';
		hs+='border-style : solid;';
		hs+='border-width : 2px 2px 2px 2px;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_tint.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_tint.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['thumbnail_tint'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._thumbnail_tint.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._thumbnail_tint.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._thumbnail_tint.style.transition='background-color 100ms ease 0ms, border-color 0s, border-width 0s';
				if (me._thumbnail_tint.ggCurrentLogicStateBackgroundColor == 0) {
					me._thumbnail_tint.style.backgroundColor="rgba(0,0,0,0.313726)";
				}
				else {
					me._thumbnail_tint.style.backgroundColor="rgba(0,0,0,0)";
				}
			}
		}
		me._thumbnail_tint.logicBlock_backgroundcolor();
		me._thumbnail_tint.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me._thumbnail_tint.ggIsActive() == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				((me.elementMouseOver['thumbnail_tint'] == true))
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._thumbnail_tint.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._thumbnail_tint.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._thumbnail_tint.style.transition='background-color 100ms ease 0ms, border-color 0s, border-width 0s';
				if (me._thumbnail_tint.ggCurrentLogicStateBorderColor == 0) {
					me._thumbnail_tint.style.borderColor="rgba(255,85,0,1)";
				}
				else if (me._thumbnail_tint.ggCurrentLogicStateBorderColor == 1) {
					me._thumbnail_tint.style.borderColor="rgba(170,255,0,1)";
				}
				else {
					me._thumbnail_tint.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me._thumbnail_tint.logicBlock_bordercolor();
		me._thumbnail_tint.logicBlock_borderwidth = function() {
			var newLogicStateBorderWidth;
			if (
				((me._thumbnail_tint.ggIsActive() == true))
			)
			{
				newLogicStateBorderWidth = 0;
			}
			else {
				newLogicStateBorderWidth = -1;
			}
			if (me._thumbnail_tint.ggCurrentLogicStateBorderWidth != newLogicStateBorderWidth) {
				me._thumbnail_tint.ggCurrentLogicStateBorderWidth = newLogicStateBorderWidth;
				me._thumbnail_tint.style.transition='background-color 100ms ease 0ms, border-color 0s, border-width 0s';
				if (me._thumbnail_tint.ggCurrentLogicStateBorderWidth == 0) {
					me._thumbnail_tint.style.borderWidth="3px 3px 3px 3px";
				}
				else {
					me._thumbnail_tint.style.borderWidth="2px 2px 2px 2px";
				}
			}
		}
		me._thumbnail_tint.logicBlock_borderwidth();
		me._thumbnail_tint.onclick=function (e) {
			if (me._thumbnail_tint.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me._thumbnail_tint.onmouseenter=function (e) {
			me.elementMouseOver['thumbnail_tint']=true;
			me._thumbnail_border.logicBlock_alpha();
			me._thumbnail_tint.logicBlock_backgroundcolor();
			me._thumbnail_tint.logicBlock_bordercolor();
		}
		me._thumbnail_tint.onmouseleave=function (e) {
			me.elementMouseOver['thumbnail_tint']=false;
			me._thumbnail_border.logicBlock_alpha();
			me._thumbnail_tint.logicBlock_backgroundcolor();
			me._thumbnail_tint.logicBlock_bordercolor();
		}
		me._thumbnail_tint.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnail_border=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_border;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="thumbnail_border";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 10;';
		hs+='background : rgba(0,0,0,0);';
		hs+='border : 0px solid #c2e812;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_border.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_border.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['thumbnail_tint'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_border.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_border.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_border.style.transition='opacity 100ms ease 0ms';
				if (me._thumbnail_border.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_border.style.visibility=me._thumbnail_border.ggVisible?'inherit':'hidden';
					me._thumbnail_border.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._thumbnail_border.style.opacity == 0.0) { me._thumbnail_border.style.visibility="hidden"; } }, 105);
					me._thumbnail_border.style.opacity=0;
				}
			}
		}
		me._thumbnail_border.logicBlock_alpha();
		me._thumbnail_border.onclick=function (e) {
			if (me._thumbnail_border.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me._thumbnail_border.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_tint.appendChild(me._thumbnail_border);
		me.__div.appendChild(me._thumbnail_tint);
		el=me._thumbnail_visited=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_visited;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_visited__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOmk9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVJbGx1c3RyYXRvci8xMC4wLyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpncmFwaD'+
			'0iaHR0cDovL25zLmFkb2JlLmNvbS9HcmFwaHMvMS4wLyIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAtMzcyMiAtMjYwNiAzMiAzMiIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB4bWxuczphPSJodHRwOi8vbnMuYWRvYmUuY29tL0Fkb2JlU1ZHVmlld2VyRXh0ZW5zaW9ucy8zLjAvIiB2aWV3Qm94PSItMzcyMiAtMjYwNiAzMiAzMiIgeG1sbnM6eD0iaHR0cDovL25zLmFkb2JlLmNvbS9FeHRlbnNpYmlsaXR5LzEuMC8iIHdpZHRoPSIzMnB4IiB5PSIwcHgiIGhlaWdodD0iMzJweCI+CiA8'+
			'ZyBpZD0iTGF5ZXJfMSIvPgogPGcgaWQ9IkViZW5lXzEiLz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPGc+CiAgICA8cGF0aCBkPSJNLTM2OTUuNDczLTI1OTguMTQ2Yy0wLjUxOS0wLjUxOS0xLjM2MS0wLjUxOS0xLjg3OSwwbC04Ljc4Nyw4Ljc4N2wtMi4yOTEtMi4yNDMgICAgIGMtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAyYy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OSAgICAgYzAuMzQsMCwwLjY4LTAuMTMsMC45NC0wLjM5bDkuNzE3LTkuNzE3Qy0zNjk0Ljk1NC0yNT'+
			'k2Ljc4NS0zNjk0Ljk1NC0yNTk3LjYyNi0zNjk1LjQ3My0yNTk4LjE0NnoiIGZpbGw9IiNGRkZGRkYiLz4KICAgIDxwYXRoIGQ9Ik0tMzY5OS45Ni0yNTgzLjgzN2gtMTIuMzI1di0xMi4zMjZoMTEuODIxbDIuMjUyLTIuMjUyYy0wLjE2Ni0wLjA4Ni0wLjM1Mi0wLjE0MS0wLjU1Mi0wLjE0MWgtMTQuNzE4ICAgICBjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgxNC43MThjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtMTAuNDAzICAgICBsLTIuMzkzLDIuMzkzVi0yNTgzLjgzN3oiIGZpbGw9IiNGRkZG'+
			'RkYiLz4KICAgPC9nPgogICA8ZyBvcGFjaXR5PSIwLjQiIGE6YWRvYmUtYmxlbmRpbmctbW9kZT0ibXVsdGlwbHkiPgogICAgPHBhdGggc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSIjMUExNzFCIiBhOmFkb2JlLWJsZW5kaW5nLW1vZGU9Im5vcm1hbCIgZD0iICAgICBNLTM2OTUuNDczLTI1OTguMTQ2Yy0wLjUxOS0wLjUxOS0xLjM2MS0wLjUxOS0xLjg3OSwwbC04Ljc4Nyw4Ljc4N2wtMi4yOTEtMi4yNDNjLTAuNTI1LTAuNTEzLTEuMzY2LTAuNTA0LTEuODgsMC4wMiAgICAgYy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC'+
			'41OTQsMC4zNzksMC45MywwLjM3OWMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxNyAgICAgQy0zNjk0Ljk1NC0yNTk2Ljc4NS0zNjk0Ljk1NC0yNTk3LjYyNi0zNjk1LjQ3My0yNTk4LjE0NnoiIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KICAgIDxwYXRoIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iIzFBMTcxQiIgYTphZG9iZS1ibGVuZGluZy1tb2RlPSJub3JtYWwiIGQ9IiAgICAgTS0zNjk5Ljk2LTI1ODMuODM3aC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAu'+
			'MzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MTggICAgIGMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NnYxNC43MTljMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2aDE0LjcxOGMwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2di0xMC40MDMgICAgIGwtMi4zOTMsMi4zOTNWLTI1ODMuODM3eiIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogICA8L2c+CiAgIDxnPgogICAgPHBhdGggZD0iTS0zNjk1LjQ3My0yNTk4LjE0NmMtMC41MTktMC41MTktMS4zNjEtMC41MTktMS44NzksMGwtOC43ODcsOC43ODdsLTIuMj'+
			'kxLTIuMjQzICAgICBjLTAuNTI1LTAuNTEzLTEuMzY2LTAuNTA0LTEuODgsMC4wMmMtMC41MTMsMC41MjUtMC41MDQsMS4zNjcsMC4wMjEsMS44OGwzLjIzLDMuMTYzYzAuMjU5LDAuMjUzLDAuNTk0LDAuMzc5LDAuOTMsMC4zNzkgICAgIGMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxN0MtMzY5NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6IiBmaWxsPSIjRkZGRkZGIi8+CiAgICA8cGF0aCBkPSJNLTM2OTkuOTYtMjU4My44MzdoLTEyLjMyNXYtMTIuMzI2aDExLjgyMWwyLjI1Mi0yLjI1MmMtMC4xNjYtMC4wODYtMC4zNTItMC4x'+
			'NDEtMC41NTItMC4xNDFoLTE0LjcxOCAgICAgYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2djE0LjcxOWMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMTQuNzE4YzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZ2LTEwLjQwMyAgICAgbC0yLjM5MywyLjM5M1YtMjU4My44Mzd6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDwvZz4KICAgPGc+CiAgICA8cGF0aCBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9IiMxQTE3MUIiIGQ9Ik0tMzY5NS40NzMtMjU5OC4xNDYgICAgIGMtMC41MTktMC41MTktMS4zNjEtMC41MTktMS44NzksMGwtOC43ODcsOC43ODdsLTIuMj'+
			'kxLTIuMjQzYy0wLjUyNS0wLjUxMy0xLjM2Ni0wLjUwNC0xLjg4LDAuMDIgICAgIGMtMC41MTMsMC41MjUtMC41MDQsMS4zNjcsMC4wMjEsMS44OGwzLjIzLDMuMTYzYzAuMjU5LDAuMjUzLDAuNTk0LDAuMzc5LDAuOTMsMC4zNzljMC4zNCwwLDAuNjgtMC4xMywwLjk0LTAuMzlsOS43MTctOS43MTcgICAgIEMtMzY5NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6IiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjAuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiAgICA8cGF0aCBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9IiMxQTE3MUIi'+
			'IGQ9Ik0tMzY5OS45Ni0yNTgzLjgzNyAgICAgaC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAuMzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MThjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5ICAgICBjMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2aDE0LjcxOGMwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2di0xMC40MDNsLTIuMzkzLDIuMzkzVi0yNTgzLjgzN3oiIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KICAgPC9nPgogIDwvZz4KIDwvZz4KPC9zdm'+
			'c+Cg==';
		me._thumbnail_visited__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_visited";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg glow";
		el.ggType='svg';
		hs ='';
		hs+='height : 24px;';
		hs+='position : absolute;';
		hs+='right : 8px;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_visited.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_visited.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._thumbnail_visited.ggElementNodeId()) == true)) || 
				((me._thumbnail_visited.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_visited.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_visited.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_visited.style.transition='';
				if (me._thumbnail_visited.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_visited.style.visibility=(Number(me._thumbnail_visited.style.opacity)>0||!me._thumbnail_visited.style.opacity)?'inherit':'hidden';
					me._thumbnail_visited.ggVisible=true;
				}
				else {
					me._thumbnail_visited.style.visibility="hidden";
					me._thumbnail_visited.ggVisible=false;
				}
			}
		}
		me._thumbnail_visited.logicBlock_visible();
		me._thumbnail_visited.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._thumbnail_visited);
		me._thumbnail_tint.logicBlock_backgroundcolor();
		me._thumbnail_tint.logicBlock_bordercolor();
		me._thumbnail_tint.logicBlock_borderwidth();
		me.elementMouseOver['thumbnail_tint']=false;
		me._thumbnail_border.logicBlock_alpha();
		me._thumbnail_visited.logicBlock_visible();
			me.ggEvent_changenode=function(event) {
				me._thumbnail_tint.logicBlock_bordercolor();
				me._thumbnail_tint.logicBlock_borderwidth();
				me._thumbnail_visited.logicBlock_visible();
				me._thumbnail_visited.logicBlock_visible();
			};
			me.ggEvent_changevisitednodes=function(event) {
				me._thumbnail_visited.logicBlock_visible();
			};
	};
	function SkinCloner_dining_cloner_m_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._thumbnail_title0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_title0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_title0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumbnail_title";
		el.ggDx=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.8,sy:0.8,def:'translate(-50%, 0px) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text hepta_slab";
		el.ggType='text';
		hs ='';
		hs+='bottom : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) - 5px);';
		hs+='position : absolute;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : inherit;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._thumbnail_title0.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._thumbnail_title0.ggUpdateText();
		player.addListener('changenode', function() {
			me._thumbnail_title0.ggUpdateText();
		});
		el.appendChild(els);
		me._thumbnail_title0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_title0.onclick=function (e) {
			if (me._thumbnail_title0.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me._thumbnail_title0.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._thumbnail_title0);
		el=me._thumbnail_image0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_image0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_image0__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/thumbnail_image_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 50px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_image0.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_image0.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._thumbnail_image0);
		el=me._thumbnail_tint0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_tint0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="thumbnail_tint";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='border-color : #ffffff;';
		hs+='border-style : solid;';
		hs+='border-width : 2px 2px 2px 2px;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_tint0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_tint0.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['thumbnail_tint0'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._thumbnail_tint0.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._thumbnail_tint0.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._thumbnail_tint0.style.transition='background-color 100ms ease 0ms, border-color 0s, border-width 0s';
				if (me._thumbnail_tint0.ggCurrentLogicStateBackgroundColor == 0) {
					me._thumbnail_tint0.style.backgroundColor="rgba(0,0,0,0.313726)";
				}
				else {
					me._thumbnail_tint0.style.backgroundColor="rgba(0,0,0,0)";
				}
			}
		}
		me._thumbnail_tint0.logicBlock_backgroundcolor();
		me._thumbnail_tint0.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me._thumbnail_tint0.ggIsActive() == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				((me.elementMouseOver['thumbnail_tint0'] == true))
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._thumbnail_tint0.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._thumbnail_tint0.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._thumbnail_tint0.style.transition='background-color 100ms ease 0ms, border-color 0s, border-width 0s';
				if (me._thumbnail_tint0.ggCurrentLogicStateBorderColor == 0) {
					me._thumbnail_tint0.style.borderColor="rgba(255,85,0,1)";
				}
				else if (me._thumbnail_tint0.ggCurrentLogicStateBorderColor == 1) {
					me._thumbnail_tint0.style.borderColor="rgba(170,255,0,1)";
				}
				else {
					me._thumbnail_tint0.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me._thumbnail_tint0.logicBlock_bordercolor();
		me._thumbnail_tint0.logicBlock_borderwidth = function() {
			var newLogicStateBorderWidth;
			if (
				((me._thumbnail_tint0.ggIsActive() == true))
			)
			{
				newLogicStateBorderWidth = 0;
			}
			else {
				newLogicStateBorderWidth = -1;
			}
			if (me._thumbnail_tint0.ggCurrentLogicStateBorderWidth != newLogicStateBorderWidth) {
				me._thumbnail_tint0.ggCurrentLogicStateBorderWidth = newLogicStateBorderWidth;
				me._thumbnail_tint0.style.transition='background-color 100ms ease 0ms, border-color 0s, border-width 0s';
				if (me._thumbnail_tint0.ggCurrentLogicStateBorderWidth == 0) {
					me._thumbnail_tint0.style.borderWidth="3px 3px 3px 3px";
				}
				else {
					me._thumbnail_tint0.style.borderWidth="2px 2px 2px 2px";
				}
			}
		}
		me._thumbnail_tint0.logicBlock_borderwidth();
		me._thumbnail_tint0.onclick=function (e) {
			if (me._thumbnail_tint0.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me._thumbnail_tint0.onmouseenter=function (e) {
			me.elementMouseOver['thumbnail_tint0']=true;
			me._thumbnail_border0.logicBlock_alpha();
			me._thumbnail_tint0.logicBlock_backgroundcolor();
			me._thumbnail_tint0.logicBlock_bordercolor();
		}
		me._thumbnail_tint0.onmouseleave=function (e) {
			me.elementMouseOver['thumbnail_tint0']=false;
			me._thumbnail_border0.logicBlock_alpha();
			me._thumbnail_tint0.logicBlock_backgroundcolor();
			me._thumbnail_tint0.logicBlock_bordercolor();
		}
		me._thumbnail_tint0.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnail_border0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_border0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="thumbnail_border";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 10;';
		hs+='background : rgba(0,0,0,0);';
		hs+='border : 0px solid #c2e812;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_border0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_border0.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['thumbnail_tint0'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_border0.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_border0.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_border0.style.transition='opacity 100ms ease 0ms';
				if (me._thumbnail_border0.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_border0.style.visibility=me._thumbnail_border0.ggVisible?'inherit':'hidden';
					me._thumbnail_border0.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._thumbnail_border0.style.opacity == 0.0) { me._thumbnail_border0.style.visibility="hidden"; } }, 105);
					me._thumbnail_border0.style.opacity=0;
				}
			}
		}
		me._thumbnail_border0.logicBlock_alpha();
		me._thumbnail_border0.onclick=function (e) {
			if (me._thumbnail_border0.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me._thumbnail_border0.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_tint0.appendChild(me._thumbnail_border0);
		me.__div.appendChild(me._thumbnail_tint0);
		el=me._thumbnail_visited0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_visited0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_visited0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOmk9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVJbGx1c3RyYXRvci8xMC4wLyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpncmFwaD'+
			'0iaHR0cDovL25zLmFkb2JlLmNvbS9HcmFwaHMvMS4wLyIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAtMzcyMiAtMjYwNiAzMiAzMiIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB4bWxuczphPSJodHRwOi8vbnMuYWRvYmUuY29tL0Fkb2JlU1ZHVmlld2VyRXh0ZW5zaW9ucy8zLjAvIiB2aWV3Qm94PSItMzcyMiAtMjYwNiAzMiAzMiIgeG1sbnM6eD0iaHR0cDovL25zLmFkb2JlLmNvbS9FeHRlbnNpYmlsaXR5LzEuMC8iIHdpZHRoPSIzMnB4IiB5PSIwcHgiIGhlaWdodD0iMzJweCI+CiA8'+
			'ZyBpZD0iTGF5ZXJfMSIvPgogPGcgaWQ9IkViZW5lXzEiLz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPGc+CiAgICA8cGF0aCBkPSJNLTM2OTUuNDczLTI1OTguMTQ2Yy0wLjUxOS0wLjUxOS0xLjM2MS0wLjUxOS0xLjg3OSwwbC04Ljc4Nyw4Ljc4N2wtMi4yOTEtMi4yNDMgICAgIGMtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAyYy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OSAgICAgYzAuMzQsMCwwLjY4LTAuMTMsMC45NC0wLjM5bDkuNzE3LTkuNzE3Qy0zNjk0Ljk1NC0yNT'+
			'k2Ljc4NS0zNjk0Ljk1NC0yNTk3LjYyNi0zNjk1LjQ3My0yNTk4LjE0NnoiIGZpbGw9IiNGRkZGRkYiLz4KICAgIDxwYXRoIGQ9Ik0tMzY5OS45Ni0yNTgzLjgzN2gtMTIuMzI1di0xMi4zMjZoMTEuODIxbDIuMjUyLTIuMjUyYy0wLjE2Ni0wLjA4Ni0wLjM1Mi0wLjE0MS0wLjU1Mi0wLjE0MWgtMTQuNzE4ICAgICBjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgxNC43MThjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtMTAuNDAzICAgICBsLTIuMzkzLDIuMzkzVi0yNTgzLjgzN3oiIGZpbGw9IiNGRkZG'+
			'RkYiLz4KICAgPC9nPgogICA8ZyBvcGFjaXR5PSIwLjQiIGE6YWRvYmUtYmxlbmRpbmctbW9kZT0ibXVsdGlwbHkiPgogICAgPHBhdGggc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSIjMUExNzFCIiBhOmFkb2JlLWJsZW5kaW5nLW1vZGU9Im5vcm1hbCIgZD0iICAgICBNLTM2OTUuNDczLTI1OTguMTQ2Yy0wLjUxOS0wLjUxOS0xLjM2MS0wLjUxOS0xLjg3OSwwbC04Ljc4Nyw4Ljc4N2wtMi4yOTEtMi4yNDNjLTAuNTI1LTAuNTEzLTEuMzY2LTAuNTA0LTEuODgsMC4wMiAgICAgYy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC'+
			'41OTQsMC4zNzksMC45MywwLjM3OWMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxNyAgICAgQy0zNjk0Ljk1NC0yNTk2Ljc4NS0zNjk0Ljk1NC0yNTk3LjYyNi0zNjk1LjQ3My0yNTk4LjE0NnoiIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KICAgIDxwYXRoIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iIzFBMTcxQiIgYTphZG9iZS1ibGVuZGluZy1tb2RlPSJub3JtYWwiIGQ9IiAgICAgTS0zNjk5Ljk2LTI1ODMuODM3aC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAu'+
			'MzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MTggICAgIGMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NnYxNC43MTljMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2aDE0LjcxOGMwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2di0xMC40MDMgICAgIGwtMi4zOTMsMi4zOTNWLTI1ODMuODM3eiIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogICA8L2c+CiAgIDxnPgogICAgPHBhdGggZD0iTS0zNjk1LjQ3My0yNTk4LjE0NmMtMC41MTktMC41MTktMS4zNjEtMC41MTktMS44NzksMGwtOC43ODcsOC43ODdsLTIuMj'+
			'kxLTIuMjQzICAgICBjLTAuNTI1LTAuNTEzLTEuMzY2LTAuNTA0LTEuODgsMC4wMmMtMC41MTMsMC41MjUtMC41MDQsMS4zNjcsMC4wMjEsMS44OGwzLjIzLDMuMTYzYzAuMjU5LDAuMjUzLDAuNTk0LDAuMzc5LDAuOTMsMC4zNzkgICAgIGMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxN0MtMzY5NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6IiBmaWxsPSIjRkZGRkZGIi8+CiAgICA8cGF0aCBkPSJNLTM2OTkuOTYtMjU4My44MzdoLTEyLjMyNXYtMTIuMzI2aDExLjgyMWwyLjI1Mi0yLjI1MmMtMC4xNjYtMC4wODYtMC4zNTItMC4x'+
			'NDEtMC41NTItMC4xNDFoLTE0LjcxOCAgICAgYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2djE0LjcxOWMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMTQuNzE4YzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZ2LTEwLjQwMyAgICAgbC0yLjM5MywyLjM5M1YtMjU4My44Mzd6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDwvZz4KICAgPGc+CiAgICA8cGF0aCBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9IiMxQTE3MUIiIGQ9Ik0tMzY5NS40NzMtMjU5OC4xNDYgICAgIGMtMC41MTktMC41MTktMS4zNjEtMC41MTktMS44NzksMGwtOC43ODcsOC43ODdsLTIuMj'+
			'kxLTIuMjQzYy0wLjUyNS0wLjUxMy0xLjM2Ni0wLjUwNC0xLjg4LDAuMDIgICAgIGMtMC41MTMsMC41MjUtMC41MDQsMS4zNjcsMC4wMjEsMS44OGwzLjIzLDMuMTYzYzAuMjU5LDAuMjUzLDAuNTk0LDAuMzc5LDAuOTMsMC4zNzljMC4zNCwwLDAuNjgtMC4xMywwLjk0LTAuMzlsOS43MTctOS43MTcgICAgIEMtMzY5NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6IiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjAuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiAgICA8cGF0aCBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9IiMxQTE3MUIi'+
			'IGQ9Ik0tMzY5OS45Ni0yNTgzLjgzNyAgICAgaC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAuMzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MThjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5ICAgICBjMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2aDE0LjcxOGMwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2di0xMC40MDNsLTIuMzkzLDIuMzkzVi0yNTgzLjgzN3oiIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KICAgPC9nPgogIDwvZz4KIDwvZz4KPC9zdm'+
			'c+Cg==';
		me._thumbnail_visited0__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_visited";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg glow";
		el.ggType='svg';
		hs ='';
		hs+='height : 24px;';
		hs+='position : absolute;';
		hs+='right : 8px;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_visited0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_visited0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._thumbnail_visited0.ggElementNodeId()) == true)) || 
				((me._thumbnail_visited0.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_visited0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_visited0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_visited0.style.transition='';
				if (me._thumbnail_visited0.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_visited0.style.visibility=(Number(me._thumbnail_visited0.style.opacity)>0||!me._thumbnail_visited0.style.opacity)?'inherit':'hidden';
					me._thumbnail_visited0.ggVisible=true;
				}
				else {
					me._thumbnail_visited0.style.visibility="hidden";
					me._thumbnail_visited0.ggVisible=false;
				}
			}
		}
		me._thumbnail_visited0.logicBlock_visible();
		me._thumbnail_visited0.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._thumbnail_visited0);
		me._thumbnail_tint0.logicBlock_backgroundcolor();
		me._thumbnail_tint0.logicBlock_bordercolor();
		me._thumbnail_tint0.logicBlock_borderwidth();
		me.elementMouseOver['thumbnail_tint0']=false;
		me._thumbnail_border0.logicBlock_alpha();
		me._thumbnail_visited0.logicBlock_visible();
			me.ggEvent_changenode=function(event) {
				me._thumbnail_tint0.logicBlock_bordercolor();
				me._thumbnail_tint0.logicBlock_borderwidth();
				me._thumbnail_visited0.logicBlock_visible();
				me._thumbnail_visited0.logicBlock_visible();
			};
			me.ggEvent_changevisitednodes=function(event) {
				me._thumbnail_visited0.logicBlock_visible();
			};
	};
	function SkinCloner_entertainment_cloner_m_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._thumbnail_title1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_title1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_title1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumbnail_title";
		el.ggDx=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.8,sy:0.8,def:'translate(-50%, 0px) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text hepta_slab";
		el.ggType='text';
		hs ='';
		hs+='bottom : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) - 5px);';
		hs+='position : absolute;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : inherit;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._thumbnail_title1.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._thumbnail_title1.ggUpdateText();
		player.addListener('changenode', function() {
			me._thumbnail_title1.ggUpdateText();
		});
		el.appendChild(els);
		me._thumbnail_title1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_title1.onclick=function (e) {
			if (me._thumbnail_title1.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me._thumbnail_title1.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._thumbnail_title1);
		el=me._thumbnail_image1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_image1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_image1__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/thumbnail_image_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 50px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_image1.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_image1.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._thumbnail_image1);
		el=me._thumbnail_tint1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_tint1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="thumbnail_tint";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='border-color : #ffffff;';
		hs+='border-style : solid;';
		hs+='border-width : 2px 2px 2px 2px;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_tint1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_tint1.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['thumbnail_tint1'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._thumbnail_tint1.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._thumbnail_tint1.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._thumbnail_tint1.style.transition='background-color 100ms ease 0ms, border-color 0s, border-width 0s';
				if (me._thumbnail_tint1.ggCurrentLogicStateBackgroundColor == 0) {
					me._thumbnail_tint1.style.backgroundColor="rgba(0,0,0,0.313726)";
				}
				else {
					me._thumbnail_tint1.style.backgroundColor="rgba(0,0,0,0)";
				}
			}
		}
		me._thumbnail_tint1.logicBlock_backgroundcolor();
		me._thumbnail_tint1.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me._thumbnail_tint1.ggIsActive() == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				((me.elementMouseOver['thumbnail_tint1'] == true))
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._thumbnail_tint1.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._thumbnail_tint1.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._thumbnail_tint1.style.transition='background-color 100ms ease 0ms, border-color 0s, border-width 0s';
				if (me._thumbnail_tint1.ggCurrentLogicStateBorderColor == 0) {
					me._thumbnail_tint1.style.borderColor="rgba(255,85,0,1)";
				}
				else if (me._thumbnail_tint1.ggCurrentLogicStateBorderColor == 1) {
					me._thumbnail_tint1.style.borderColor="rgba(170,255,0,1)";
				}
				else {
					me._thumbnail_tint1.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me._thumbnail_tint1.logicBlock_bordercolor();
		me._thumbnail_tint1.logicBlock_borderwidth = function() {
			var newLogicStateBorderWidth;
			if (
				((me._thumbnail_tint1.ggIsActive() == true))
			)
			{
				newLogicStateBorderWidth = 0;
			}
			else {
				newLogicStateBorderWidth = -1;
			}
			if (me._thumbnail_tint1.ggCurrentLogicStateBorderWidth != newLogicStateBorderWidth) {
				me._thumbnail_tint1.ggCurrentLogicStateBorderWidth = newLogicStateBorderWidth;
				me._thumbnail_tint1.style.transition='background-color 100ms ease 0ms, border-color 0s, border-width 0s';
				if (me._thumbnail_tint1.ggCurrentLogicStateBorderWidth == 0) {
					me._thumbnail_tint1.style.borderWidth="3px 3px 3px 3px";
				}
				else {
					me._thumbnail_tint1.style.borderWidth="2px 2px 2px 2px";
				}
			}
		}
		me._thumbnail_tint1.logicBlock_borderwidth();
		me._thumbnail_tint1.onclick=function (e) {
			if (me._thumbnail_tint1.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me._thumbnail_tint1.onmouseenter=function (e) {
			me.elementMouseOver['thumbnail_tint1']=true;
			me._thumbnail_border1.logicBlock_alpha();
			me._thumbnail_tint1.logicBlock_backgroundcolor();
			me._thumbnail_tint1.logicBlock_bordercolor();
		}
		me._thumbnail_tint1.onmouseleave=function (e) {
			me.elementMouseOver['thumbnail_tint1']=false;
			me._thumbnail_border1.logicBlock_alpha();
			me._thumbnail_tint1.logicBlock_backgroundcolor();
			me._thumbnail_tint1.logicBlock_bordercolor();
		}
		me._thumbnail_tint1.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnail_border1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_border1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="thumbnail_border";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 10;';
		hs+='background : rgba(0,0,0,0);';
		hs+='border : 0px solid #c2e812;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_border1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_border1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['thumbnail_tint1'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_border1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_border1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_border1.style.transition='opacity 100ms ease 0ms';
				if (me._thumbnail_border1.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_border1.style.visibility=me._thumbnail_border1.ggVisible?'inherit':'hidden';
					me._thumbnail_border1.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._thumbnail_border1.style.opacity == 0.0) { me._thumbnail_border1.style.visibility="hidden"; } }, 105);
					me._thumbnail_border1.style.opacity=0;
				}
			}
		}
		me._thumbnail_border1.logicBlock_alpha();
		me._thumbnail_border1.onclick=function (e) {
			if (me._thumbnail_border1.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me._thumbnail_border1.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_tint1.appendChild(me._thumbnail_border1);
		me.__div.appendChild(me._thumbnail_tint1);
		el=me._thumbnail_visited1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_visited1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_visited1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOmk9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVJbGx1c3RyYXRvci8xMC4wLyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpncmFwaD'+
			'0iaHR0cDovL25zLmFkb2JlLmNvbS9HcmFwaHMvMS4wLyIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAtMzcyMiAtMjYwNiAzMiAzMiIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB4bWxuczphPSJodHRwOi8vbnMuYWRvYmUuY29tL0Fkb2JlU1ZHVmlld2VyRXh0ZW5zaW9ucy8zLjAvIiB2aWV3Qm94PSItMzcyMiAtMjYwNiAzMiAzMiIgeG1sbnM6eD0iaHR0cDovL25zLmFkb2JlLmNvbS9FeHRlbnNpYmlsaXR5LzEuMC8iIHdpZHRoPSIzMnB4IiB5PSIwcHgiIGhlaWdodD0iMzJweCI+CiA8'+
			'ZyBpZD0iTGF5ZXJfMSIvPgogPGcgaWQ9IkViZW5lXzEiLz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPGc+CiAgICA8cGF0aCBkPSJNLTM2OTUuNDczLTI1OTguMTQ2Yy0wLjUxOS0wLjUxOS0xLjM2MS0wLjUxOS0xLjg3OSwwbC04Ljc4Nyw4Ljc4N2wtMi4yOTEtMi4yNDMgICAgIGMtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAyYy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OSAgICAgYzAuMzQsMCwwLjY4LTAuMTMsMC45NC0wLjM5bDkuNzE3LTkuNzE3Qy0zNjk0Ljk1NC0yNT'+
			'k2Ljc4NS0zNjk0Ljk1NC0yNTk3LjYyNi0zNjk1LjQ3My0yNTk4LjE0NnoiIGZpbGw9IiNGRkZGRkYiLz4KICAgIDxwYXRoIGQ9Ik0tMzY5OS45Ni0yNTgzLjgzN2gtMTIuMzI1di0xMi4zMjZoMTEuODIxbDIuMjUyLTIuMjUyYy0wLjE2Ni0wLjA4Ni0wLjM1Mi0wLjE0MS0wLjU1Mi0wLjE0MWgtMTQuNzE4ICAgICBjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgxNC43MThjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtMTAuNDAzICAgICBsLTIuMzkzLDIuMzkzVi0yNTgzLjgzN3oiIGZpbGw9IiNGRkZG'+
			'RkYiLz4KICAgPC9nPgogICA8ZyBvcGFjaXR5PSIwLjQiIGE6YWRvYmUtYmxlbmRpbmctbW9kZT0ibXVsdGlwbHkiPgogICAgPHBhdGggc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSIjMUExNzFCIiBhOmFkb2JlLWJsZW5kaW5nLW1vZGU9Im5vcm1hbCIgZD0iICAgICBNLTM2OTUuNDczLTI1OTguMTQ2Yy0wLjUxOS0wLjUxOS0xLjM2MS0wLjUxOS0xLjg3OSwwbC04Ljc4Nyw4Ljc4N2wtMi4yOTEtMi4yNDNjLTAuNTI1LTAuNTEzLTEuMzY2LTAuNTA0LTEuODgsMC4wMiAgICAgYy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC'+
			'41OTQsMC4zNzksMC45MywwLjM3OWMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxNyAgICAgQy0zNjk0Ljk1NC0yNTk2Ljc4NS0zNjk0Ljk1NC0yNTk3LjYyNi0zNjk1LjQ3My0yNTk4LjE0NnoiIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KICAgIDxwYXRoIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iIzFBMTcxQiIgYTphZG9iZS1ibGVuZGluZy1tb2RlPSJub3JtYWwiIGQ9IiAgICAgTS0zNjk5Ljk2LTI1ODMuODM3aC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAu'+
			'MzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MTggICAgIGMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NnYxNC43MTljMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2aDE0LjcxOGMwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2di0xMC40MDMgICAgIGwtMi4zOTMsMi4zOTNWLTI1ODMuODM3eiIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogICA8L2c+CiAgIDxnPgogICAgPHBhdGggZD0iTS0zNjk1LjQ3My0yNTk4LjE0NmMtMC41MTktMC41MTktMS4zNjEtMC41MTktMS44NzksMGwtOC43ODcsOC43ODdsLTIuMj'+
			'kxLTIuMjQzICAgICBjLTAuNTI1LTAuNTEzLTEuMzY2LTAuNTA0LTEuODgsMC4wMmMtMC41MTMsMC41MjUtMC41MDQsMS4zNjcsMC4wMjEsMS44OGwzLjIzLDMuMTYzYzAuMjU5LDAuMjUzLDAuNTk0LDAuMzc5LDAuOTMsMC4zNzkgICAgIGMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxN0MtMzY5NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6IiBmaWxsPSIjRkZGRkZGIi8+CiAgICA8cGF0aCBkPSJNLTM2OTkuOTYtMjU4My44MzdoLTEyLjMyNXYtMTIuMzI2aDExLjgyMWwyLjI1Mi0yLjI1MmMtMC4xNjYtMC4wODYtMC4zNTItMC4x'+
			'NDEtMC41NTItMC4xNDFoLTE0LjcxOCAgICAgYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2djE0LjcxOWMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMTQuNzE4YzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZ2LTEwLjQwMyAgICAgbC0yLjM5MywyLjM5M1YtMjU4My44Mzd6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDwvZz4KICAgPGc+CiAgICA8cGF0aCBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9IiMxQTE3MUIiIGQ9Ik0tMzY5NS40NzMtMjU5OC4xNDYgICAgIGMtMC41MTktMC41MTktMS4zNjEtMC41MTktMS44NzksMGwtOC43ODcsOC43ODdsLTIuMj'+
			'kxLTIuMjQzYy0wLjUyNS0wLjUxMy0xLjM2Ni0wLjUwNC0xLjg4LDAuMDIgICAgIGMtMC41MTMsMC41MjUtMC41MDQsMS4zNjcsMC4wMjEsMS44OGwzLjIzLDMuMTYzYzAuMjU5LDAuMjUzLDAuNTk0LDAuMzc5LDAuOTMsMC4zNzljMC4zNCwwLDAuNjgtMC4xMywwLjk0LTAuMzlsOS43MTctOS43MTcgICAgIEMtMzY5NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6IiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjAuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiAgICA8cGF0aCBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9IiMxQTE3MUIi'+
			'IGQ9Ik0tMzY5OS45Ni0yNTgzLjgzNyAgICAgaC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAuMzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MThjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5ICAgICBjMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2aDE0LjcxOGMwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2di0xMC40MDNsLTIuMzkzLDIuMzkzVi0yNTgzLjgzN3oiIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KICAgPC9nPgogIDwvZz4KIDwvZz4KPC9zdm'+
			'c+Cg==';
		me._thumbnail_visited1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_visited";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg glow";
		el.ggType='svg';
		hs ='';
		hs+='height : 24px;';
		hs+='position : absolute;';
		hs+='right : 8px;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_visited1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_visited1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._thumbnail_visited1.ggElementNodeId()) == true)) || 
				((me._thumbnail_visited1.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_visited1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_visited1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_visited1.style.transition='';
				if (me._thumbnail_visited1.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_visited1.style.visibility=(Number(me._thumbnail_visited1.style.opacity)>0||!me._thumbnail_visited1.style.opacity)?'inherit':'hidden';
					me._thumbnail_visited1.ggVisible=true;
				}
				else {
					me._thumbnail_visited1.style.visibility="hidden";
					me._thumbnail_visited1.ggVisible=false;
				}
			}
		}
		me._thumbnail_visited1.logicBlock_visible();
		me._thumbnail_visited1.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._thumbnail_visited1);
		me._thumbnail_tint1.logicBlock_backgroundcolor();
		me._thumbnail_tint1.logicBlock_bordercolor();
		me._thumbnail_tint1.logicBlock_borderwidth();
		me.elementMouseOver['thumbnail_tint1']=false;
		me._thumbnail_border1.logicBlock_alpha();
		me._thumbnail_visited1.logicBlock_visible();
			me.ggEvent_changenode=function(event) {
				me._thumbnail_tint1.logicBlock_bordercolor();
				me._thumbnail_tint1.logicBlock_borderwidth();
				me._thumbnail_visited1.logicBlock_visible();
				me._thumbnail_visited1.logicBlock_visible();
			};
			me.ggEvent_changevisitednodes=function(event) {
				me._thumbnail_visited1.logicBlock_visible();
			};
	};
	function SkinCloner_view_cloner_m_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._thumbnail_title2=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_title2;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_title2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumbnail_title";
		el.ggDx=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.8,sy:0.8,def:'translate(-50%, 0px) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text hepta_slab";
		el.ggType='text';
		hs ='';
		hs+='bottom : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) - 5px);';
		hs+='position : absolute;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : inherit;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._thumbnail_title2.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._thumbnail_title2.ggUpdateText();
		player.addListener('changenode', function() {
			me._thumbnail_title2.ggUpdateText();
		});
		el.appendChild(els);
		me._thumbnail_title2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_title2.onclick=function (e) {
			if (me._thumbnail_title2.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me._thumbnail_title2.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._thumbnail_title2);
		el=me._thumbnail_image2=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_image2;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_image2__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/thumbnail_image_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 50px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_image2.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_image2.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._thumbnail_image2);
		el=me._thumbnail_tint2=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_tint2;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="thumbnail_tint";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='border-color : #ffffff;';
		hs+='border-style : solid;';
		hs+='border-width : 2px 2px 2px 2px;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_tint2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_tint2.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['thumbnail_tint2'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._thumbnail_tint2.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._thumbnail_tint2.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._thumbnail_tint2.style.transition='background-color 100ms ease 0ms, border-color 0s, border-width 0s';
				if (me._thumbnail_tint2.ggCurrentLogicStateBackgroundColor == 0) {
					me._thumbnail_tint2.style.backgroundColor="rgba(0,0,0,0.313726)";
				}
				else {
					me._thumbnail_tint2.style.backgroundColor="rgba(0,0,0,0)";
				}
			}
		}
		me._thumbnail_tint2.logicBlock_backgroundcolor();
		me._thumbnail_tint2.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me._thumbnail_tint2.ggIsActive() == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				((me.elementMouseOver['thumbnail_tint2'] == true))
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._thumbnail_tint2.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._thumbnail_tint2.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._thumbnail_tint2.style.transition='background-color 100ms ease 0ms, border-color 0s, border-width 0s';
				if (me._thumbnail_tint2.ggCurrentLogicStateBorderColor == 0) {
					me._thumbnail_tint2.style.borderColor="rgba(255,85,0,1)";
				}
				else if (me._thumbnail_tint2.ggCurrentLogicStateBorderColor == 1) {
					me._thumbnail_tint2.style.borderColor="rgba(170,255,0,1)";
				}
				else {
					me._thumbnail_tint2.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me._thumbnail_tint2.logicBlock_bordercolor();
		me._thumbnail_tint2.logicBlock_borderwidth = function() {
			var newLogicStateBorderWidth;
			if (
				((me._thumbnail_tint2.ggIsActive() == true))
			)
			{
				newLogicStateBorderWidth = 0;
			}
			else {
				newLogicStateBorderWidth = -1;
			}
			if (me._thumbnail_tint2.ggCurrentLogicStateBorderWidth != newLogicStateBorderWidth) {
				me._thumbnail_tint2.ggCurrentLogicStateBorderWidth = newLogicStateBorderWidth;
				me._thumbnail_tint2.style.transition='background-color 100ms ease 0ms, border-color 0s, border-width 0s';
				if (me._thumbnail_tint2.ggCurrentLogicStateBorderWidth == 0) {
					me._thumbnail_tint2.style.borderWidth="3px 3px 3px 3px";
				}
				else {
					me._thumbnail_tint2.style.borderWidth="2px 2px 2px 2px";
				}
			}
		}
		me._thumbnail_tint2.logicBlock_borderwidth();
		me._thumbnail_tint2.onclick=function (e) {
			if (me._thumbnail_tint2.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me._thumbnail_tint2.onmouseenter=function (e) {
			me.elementMouseOver['thumbnail_tint2']=true;
			me._thumbnail_border2.logicBlock_alpha();
			me._thumbnail_tint2.logicBlock_backgroundcolor();
			me._thumbnail_tint2.logicBlock_bordercolor();
		}
		me._thumbnail_tint2.onmouseleave=function (e) {
			me.elementMouseOver['thumbnail_tint2']=false;
			me._thumbnail_border2.logicBlock_alpha();
			me._thumbnail_tint2.logicBlock_backgroundcolor();
			me._thumbnail_tint2.logicBlock_bordercolor();
		}
		me._thumbnail_tint2.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnail_border2=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_border2;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="thumbnail_border";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 10;';
		hs+='background : rgba(0,0,0,0);';
		hs+='border : 0px solid #c2e812;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_border2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_border2.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['thumbnail_tint2'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_border2.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_border2.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_border2.style.transition='opacity 100ms ease 0ms';
				if (me._thumbnail_border2.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_border2.style.visibility=me._thumbnail_border2.ggVisible?'inherit':'hidden';
					me._thumbnail_border2.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._thumbnail_border2.style.opacity == 0.0) { me._thumbnail_border2.style.visibility="hidden"; } }, 105);
					me._thumbnail_border2.style.opacity=0;
				}
			}
		}
		me._thumbnail_border2.logicBlock_alpha();
		me._thumbnail_border2.onclick=function (e) {
			if (me._thumbnail_border2.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me._thumbnail_border2.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_tint2.appendChild(me._thumbnail_border2);
		me.__div.appendChild(me._thumbnail_tint2);
		el=me._thumbnail_visited2=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_visited2;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_visited2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOmk9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVJbGx1c3RyYXRvci8xMC4wLyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpncmFwaD'+
			'0iaHR0cDovL25zLmFkb2JlLmNvbS9HcmFwaHMvMS4wLyIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAtMzcyMiAtMjYwNiAzMiAzMiIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB4bWxuczphPSJodHRwOi8vbnMuYWRvYmUuY29tL0Fkb2JlU1ZHVmlld2VyRXh0ZW5zaW9ucy8zLjAvIiB2aWV3Qm94PSItMzcyMiAtMjYwNiAzMiAzMiIgeG1sbnM6eD0iaHR0cDovL25zLmFkb2JlLmNvbS9FeHRlbnNpYmlsaXR5LzEuMC8iIHdpZHRoPSIzMnB4IiB5PSIwcHgiIGhlaWdodD0iMzJweCI+CiA8'+
			'ZyBpZD0iTGF5ZXJfMSIvPgogPGcgaWQ9IkViZW5lXzEiLz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPGc+CiAgICA8cGF0aCBkPSJNLTM2OTUuNDczLTI1OTguMTQ2Yy0wLjUxOS0wLjUxOS0xLjM2MS0wLjUxOS0xLjg3OSwwbC04Ljc4Nyw4Ljc4N2wtMi4yOTEtMi4yNDMgICAgIGMtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAyYy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OSAgICAgYzAuMzQsMCwwLjY4LTAuMTMsMC45NC0wLjM5bDkuNzE3LTkuNzE3Qy0zNjk0Ljk1NC0yNT'+
			'k2Ljc4NS0zNjk0Ljk1NC0yNTk3LjYyNi0zNjk1LjQ3My0yNTk4LjE0NnoiIGZpbGw9IiNGRkZGRkYiLz4KICAgIDxwYXRoIGQ9Ik0tMzY5OS45Ni0yNTgzLjgzN2gtMTIuMzI1di0xMi4zMjZoMTEuODIxbDIuMjUyLTIuMjUyYy0wLjE2Ni0wLjA4Ni0wLjM1Mi0wLjE0MS0wLjU1Mi0wLjE0MWgtMTQuNzE4ICAgICBjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgxNC43MThjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtMTAuNDAzICAgICBsLTIuMzkzLDIuMzkzVi0yNTgzLjgzN3oiIGZpbGw9IiNGRkZG'+
			'RkYiLz4KICAgPC9nPgogICA8ZyBvcGFjaXR5PSIwLjQiIGE6YWRvYmUtYmxlbmRpbmctbW9kZT0ibXVsdGlwbHkiPgogICAgPHBhdGggc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSIjMUExNzFCIiBhOmFkb2JlLWJsZW5kaW5nLW1vZGU9Im5vcm1hbCIgZD0iICAgICBNLTM2OTUuNDczLTI1OTguMTQ2Yy0wLjUxOS0wLjUxOS0xLjM2MS0wLjUxOS0xLjg3OSwwbC04Ljc4Nyw4Ljc4N2wtMi4yOTEtMi4yNDNjLTAuNTI1LTAuNTEzLTEuMzY2LTAuNTA0LTEuODgsMC4wMiAgICAgYy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC'+
			'41OTQsMC4zNzksMC45MywwLjM3OWMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxNyAgICAgQy0zNjk0Ljk1NC0yNTk2Ljc4NS0zNjk0Ljk1NC0yNTk3LjYyNi0zNjk1LjQ3My0yNTk4LjE0NnoiIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KICAgIDxwYXRoIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iIzFBMTcxQiIgYTphZG9iZS1ibGVuZGluZy1tb2RlPSJub3JtYWwiIGQ9IiAgICAgTS0zNjk5Ljk2LTI1ODMuODM3aC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAu'+
			'MzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MTggICAgIGMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NnYxNC43MTljMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2aDE0LjcxOGMwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2di0xMC40MDMgICAgIGwtMi4zOTMsMi4zOTNWLTI1ODMuODM3eiIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogICA8L2c+CiAgIDxnPgogICAgPHBhdGggZD0iTS0zNjk1LjQ3My0yNTk4LjE0NmMtMC41MTktMC41MTktMS4zNjEtMC41MTktMS44NzksMGwtOC43ODcsOC43ODdsLTIuMj'+
			'kxLTIuMjQzICAgICBjLTAuNTI1LTAuNTEzLTEuMzY2LTAuNTA0LTEuODgsMC4wMmMtMC41MTMsMC41MjUtMC41MDQsMS4zNjcsMC4wMjEsMS44OGwzLjIzLDMuMTYzYzAuMjU5LDAuMjUzLDAuNTk0LDAuMzc5LDAuOTMsMC4zNzkgICAgIGMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxN0MtMzY5NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6IiBmaWxsPSIjRkZGRkZGIi8+CiAgICA8cGF0aCBkPSJNLTM2OTkuOTYtMjU4My44MzdoLTEyLjMyNXYtMTIuMzI2aDExLjgyMWwyLjI1Mi0yLjI1MmMtMC4xNjYtMC4wODYtMC4zNTItMC4x'+
			'NDEtMC41NTItMC4xNDFoLTE0LjcxOCAgICAgYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2djE0LjcxOWMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMTQuNzE4YzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZ2LTEwLjQwMyAgICAgbC0yLjM5MywyLjM5M1YtMjU4My44Mzd6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDwvZz4KICAgPGc+CiAgICA8cGF0aCBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9IiMxQTE3MUIiIGQ9Ik0tMzY5NS40NzMtMjU5OC4xNDYgICAgIGMtMC41MTktMC41MTktMS4zNjEtMC41MTktMS44NzksMGwtOC43ODcsOC43ODdsLTIuMj'+
			'kxLTIuMjQzYy0wLjUyNS0wLjUxMy0xLjM2Ni0wLjUwNC0xLjg4LDAuMDIgICAgIGMtMC41MTMsMC41MjUtMC41MDQsMS4zNjcsMC4wMjEsMS44OGwzLjIzLDMuMTYzYzAuMjU5LDAuMjUzLDAuNTk0LDAuMzc5LDAuOTMsMC4zNzljMC4zNCwwLDAuNjgtMC4xMywwLjk0LTAuMzlsOS43MTctOS43MTcgICAgIEMtMzY5NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6IiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjAuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiAgICA8cGF0aCBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9IiMxQTE3MUIi'+
			'IGQ9Ik0tMzY5OS45Ni0yNTgzLjgzNyAgICAgaC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAuMzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MThjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5ICAgICBjMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2aDE0LjcxOGMwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2di0xMC40MDNsLTIuMzkzLDIuMzkzVi0yNTgzLjgzN3oiIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KICAgPC9nPgogIDwvZz4KIDwvZz4KPC9zdm'+
			'c+Cg==';
		me._thumbnail_visited2__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_visited";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg glow";
		el.ggType='svg';
		hs ='';
		hs+='height : 24px;';
		hs+='position : absolute;';
		hs+='right : 8px;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_visited2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_visited2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._thumbnail_visited2.ggElementNodeId()) == true)) || 
				((me._thumbnail_visited2.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_visited2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_visited2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_visited2.style.transition='';
				if (me._thumbnail_visited2.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_visited2.style.visibility=(Number(me._thumbnail_visited2.style.opacity)>0||!me._thumbnail_visited2.style.opacity)?'inherit':'hidden';
					me._thumbnail_visited2.ggVisible=true;
				}
				else {
					me._thumbnail_visited2.style.visibility="hidden";
					me._thumbnail_visited2.ggVisible=false;
				}
			}
		}
		me._thumbnail_visited2.logicBlock_visible();
		me._thumbnail_visited2.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._thumbnail_visited2);
		me._thumbnail_tint2.logicBlock_backgroundcolor();
		me._thumbnail_tint2.logicBlock_bordercolor();
		me._thumbnail_tint2.logicBlock_borderwidth();
		me.elementMouseOver['thumbnail_tint2']=false;
		me._thumbnail_border2.logicBlock_alpha();
		me._thumbnail_visited2.logicBlock_visible();
			me.ggEvent_changenode=function(event) {
				me._thumbnail_tint2.logicBlock_bordercolor();
				me._thumbnail_tint2.logicBlock_borderwidth();
				me._thumbnail_visited2.logicBlock_visible();
				me._thumbnail_visited2.logicBlock_visible();
			};
			me.ggEvent_changevisitednodes=function(event) {
				me._thumbnail_visited2.logicBlock_visible();
			};
	};
	function SkinCloner_room_cloner_m_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._thumbnail_title_m=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_title_m;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_title_m__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumbnail_title_M";
		el.ggDx=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.8,sy:0.8,def:'translate(-50%, 0px) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text hepta_slab";
		el.ggType='text';
		hs ='';
		hs+='bottom : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) - 5px);';
		hs+='position : absolute;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : inherit;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._thumbnail_title_m.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._thumbnail_title_m.ggUpdateText();
		player.addListener('changenode', function() {
			me._thumbnail_title_m.ggUpdateText();
		});
		el.appendChild(els);
		me._thumbnail_title_m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_title_m.onclick=function (e) {
			if (me._thumbnail_title_m.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me._thumbnail_title_m.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._thumbnail_title_m);
		el=me._thumbnail_image3=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_image3;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_image3__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/thumbnail_image_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 50px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_image3.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_image3.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._thumbnail_image3);
		el=me._thumbnail_tint3=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_tint3;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="thumbnail_tint";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='border-color : #ffffff;';
		hs+='border-style : solid;';
		hs+='border-width : 2px 2px 2px 2px;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_tint3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_tint3.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['thumbnail_tint3'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._thumbnail_tint3.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._thumbnail_tint3.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._thumbnail_tint3.style.transition='background-color 100ms ease 0ms, border-color 0s, border-width 0s';
				if (me._thumbnail_tint3.ggCurrentLogicStateBackgroundColor == 0) {
					me._thumbnail_tint3.style.backgroundColor="rgba(0,0,0,0.313726)";
				}
				else {
					me._thumbnail_tint3.style.backgroundColor="rgba(0,0,0,0)";
				}
			}
		}
		me._thumbnail_tint3.logicBlock_backgroundcolor();
		me._thumbnail_tint3.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me._thumbnail_tint3.ggIsActive() == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				((me.elementMouseOver['thumbnail_tint3'] == true))
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._thumbnail_tint3.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._thumbnail_tint3.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._thumbnail_tint3.style.transition='background-color 100ms ease 0ms, border-color 0s, border-width 0s';
				if (me._thumbnail_tint3.ggCurrentLogicStateBorderColor == 0) {
					me._thumbnail_tint3.style.borderColor="rgba(255,85,0,1)";
				}
				else if (me._thumbnail_tint3.ggCurrentLogicStateBorderColor == 1) {
					me._thumbnail_tint3.style.borderColor="rgba(170,255,0,1)";
				}
				else {
					me._thumbnail_tint3.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me._thumbnail_tint3.logicBlock_bordercolor();
		me._thumbnail_tint3.logicBlock_borderwidth = function() {
			var newLogicStateBorderWidth;
			if (
				((me._thumbnail_tint3.ggIsActive() == true))
			)
			{
				newLogicStateBorderWidth = 0;
			}
			else {
				newLogicStateBorderWidth = -1;
			}
			if (me._thumbnail_tint3.ggCurrentLogicStateBorderWidth != newLogicStateBorderWidth) {
				me._thumbnail_tint3.ggCurrentLogicStateBorderWidth = newLogicStateBorderWidth;
				me._thumbnail_tint3.style.transition='background-color 100ms ease 0ms, border-color 0s, border-width 0s';
				if (me._thumbnail_tint3.ggCurrentLogicStateBorderWidth == 0) {
					me._thumbnail_tint3.style.borderWidth="3px 3px 3px 3px";
				}
				else {
					me._thumbnail_tint3.style.borderWidth="2px 2px 2px 2px";
				}
			}
		}
		me._thumbnail_tint3.logicBlock_borderwidth();
		me._thumbnail_tint3.onclick=function (e) {
			if (me._thumbnail_tint3.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me._thumbnail_tint3.onmouseenter=function (e) {
			me.elementMouseOver['thumbnail_tint3']=true;
			me._thumbnail_border3.logicBlock_alpha();
			me._thumbnail_tint3.logicBlock_backgroundcolor();
			me._thumbnail_tint3.logicBlock_bordercolor();
		}
		me._thumbnail_tint3.onmouseleave=function (e) {
			me.elementMouseOver['thumbnail_tint3']=false;
			me._thumbnail_border3.logicBlock_alpha();
			me._thumbnail_tint3.logicBlock_backgroundcolor();
			me._thumbnail_tint3.logicBlock_bordercolor();
		}
		me._thumbnail_tint3.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnail_border3=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_border3;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="thumbnail_border";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 10;';
		hs+='background : rgba(0,0,0,0);';
		hs+='border : 0px solid #c2e812;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_border3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_border3.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['thumbnail_tint3'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_border3.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_border3.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_border3.style.transition='opacity 100ms ease 0ms';
				if (me._thumbnail_border3.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_border3.style.visibility=me._thumbnail_border3.ggVisible?'inherit':'hidden';
					me._thumbnail_border3.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._thumbnail_border3.style.opacity == 0.0) { me._thumbnail_border3.style.visibility="hidden"; } }, 105);
					me._thumbnail_border3.style.opacity=0;
				}
			}
		}
		me._thumbnail_border3.logicBlock_alpha();
		me._thumbnail_border3.onclick=function (e) {
			if (me._thumbnail_border3.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me._thumbnail_border3.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_tint3.appendChild(me._thumbnail_border3);
		me.__div.appendChild(me._thumbnail_tint3);
		el=me._thumbnail_visited3=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_visited3;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_visited3__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOmk9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVJbGx1c3RyYXRvci8xMC4wLyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpncmFwaD'+
			'0iaHR0cDovL25zLmFkb2JlLmNvbS9HcmFwaHMvMS4wLyIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAtMzcyMiAtMjYwNiAzMiAzMiIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB4bWxuczphPSJodHRwOi8vbnMuYWRvYmUuY29tL0Fkb2JlU1ZHVmlld2VyRXh0ZW5zaW9ucy8zLjAvIiB2aWV3Qm94PSItMzcyMiAtMjYwNiAzMiAzMiIgeG1sbnM6eD0iaHR0cDovL25zLmFkb2JlLmNvbS9FeHRlbnNpYmlsaXR5LzEuMC8iIHdpZHRoPSIzMnB4IiB5PSIwcHgiIGhlaWdodD0iMzJweCI+CiA8'+
			'ZyBpZD0iTGF5ZXJfMSIvPgogPGcgaWQ9IkViZW5lXzEiLz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPGc+CiAgICA8cGF0aCBkPSJNLTM2OTUuNDczLTI1OTguMTQ2Yy0wLjUxOS0wLjUxOS0xLjM2MS0wLjUxOS0xLjg3OSwwbC04Ljc4Nyw4Ljc4N2wtMi4yOTEtMi4yNDMgICAgIGMtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAyYy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OSAgICAgYzAuMzQsMCwwLjY4LTAuMTMsMC45NC0wLjM5bDkuNzE3LTkuNzE3Qy0zNjk0Ljk1NC0yNT'+
			'k2Ljc4NS0zNjk0Ljk1NC0yNTk3LjYyNi0zNjk1LjQ3My0yNTk4LjE0NnoiIGZpbGw9IiNGRkZGRkYiLz4KICAgIDxwYXRoIGQ9Ik0tMzY5OS45Ni0yNTgzLjgzN2gtMTIuMzI1di0xMi4zMjZoMTEuODIxbDIuMjUyLTIuMjUyYy0wLjE2Ni0wLjA4Ni0wLjM1Mi0wLjE0MS0wLjU1Mi0wLjE0MWgtMTQuNzE4ICAgICBjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgxNC43MThjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtMTAuNDAzICAgICBsLTIuMzkzLDIuMzkzVi0yNTgzLjgzN3oiIGZpbGw9IiNGRkZG'+
			'RkYiLz4KICAgPC9nPgogICA8ZyBvcGFjaXR5PSIwLjQiIGE6YWRvYmUtYmxlbmRpbmctbW9kZT0ibXVsdGlwbHkiPgogICAgPHBhdGggc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSIjMUExNzFCIiBhOmFkb2JlLWJsZW5kaW5nLW1vZGU9Im5vcm1hbCIgZD0iICAgICBNLTM2OTUuNDczLTI1OTguMTQ2Yy0wLjUxOS0wLjUxOS0xLjM2MS0wLjUxOS0xLjg3OSwwbC04Ljc4Nyw4Ljc4N2wtMi4yOTEtMi4yNDNjLTAuNTI1LTAuNTEzLTEuMzY2LTAuNTA0LTEuODgsMC4wMiAgICAgYy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC'+
			'41OTQsMC4zNzksMC45MywwLjM3OWMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxNyAgICAgQy0zNjk0Ljk1NC0yNTk2Ljc4NS0zNjk0Ljk1NC0yNTk3LjYyNi0zNjk1LjQ3My0yNTk4LjE0NnoiIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KICAgIDxwYXRoIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iIzFBMTcxQiIgYTphZG9iZS1ibGVuZGluZy1tb2RlPSJub3JtYWwiIGQ9IiAgICAgTS0zNjk5Ljk2LTI1ODMuODM3aC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAu'+
			'MzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MTggICAgIGMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NnYxNC43MTljMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2aDE0LjcxOGMwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2di0xMC40MDMgICAgIGwtMi4zOTMsMi4zOTNWLTI1ODMuODM3eiIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogICA8L2c+CiAgIDxnPgogICAgPHBhdGggZD0iTS0zNjk1LjQ3My0yNTk4LjE0NmMtMC41MTktMC41MTktMS4zNjEtMC41MTktMS44NzksMGwtOC43ODcsOC43ODdsLTIuMj'+
			'kxLTIuMjQzICAgICBjLTAuNTI1LTAuNTEzLTEuMzY2LTAuNTA0LTEuODgsMC4wMmMtMC41MTMsMC41MjUtMC41MDQsMS4zNjcsMC4wMjEsMS44OGwzLjIzLDMuMTYzYzAuMjU5LDAuMjUzLDAuNTk0LDAuMzc5LDAuOTMsMC4zNzkgICAgIGMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxN0MtMzY5NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6IiBmaWxsPSIjRkZGRkZGIi8+CiAgICA8cGF0aCBkPSJNLTM2OTkuOTYtMjU4My44MzdoLTEyLjMyNXYtMTIuMzI2aDExLjgyMWwyLjI1Mi0yLjI1MmMtMC4xNjYtMC4wODYtMC4zNTItMC4x'+
			'NDEtMC41NTItMC4xNDFoLTE0LjcxOCAgICAgYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2djE0LjcxOWMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMTQuNzE4YzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZ2LTEwLjQwMyAgICAgbC0yLjM5MywyLjM5M1YtMjU4My44Mzd6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDwvZz4KICAgPGc+CiAgICA8cGF0aCBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9IiMxQTE3MUIiIGQ9Ik0tMzY5NS40NzMtMjU5OC4xNDYgICAgIGMtMC41MTktMC41MTktMS4zNjEtMC41MTktMS44NzksMGwtOC43ODcsOC43ODdsLTIuMj'+
			'kxLTIuMjQzYy0wLjUyNS0wLjUxMy0xLjM2Ni0wLjUwNC0xLjg4LDAuMDIgICAgIGMtMC41MTMsMC41MjUtMC41MDQsMS4zNjcsMC4wMjEsMS44OGwzLjIzLDMuMTYzYzAuMjU5LDAuMjUzLDAuNTk0LDAuMzc5LDAuOTMsMC4zNzljMC4zNCwwLDAuNjgtMC4xMywwLjk0LTAuMzlsOS43MTctOS43MTcgICAgIEMtMzY5NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6IiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjAuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiAgICA8cGF0aCBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9IiMxQTE3MUIi'+
			'IGQ9Ik0tMzY5OS45Ni0yNTgzLjgzNyAgICAgaC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAuMzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MThjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5ICAgICBjMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2aDE0LjcxOGMwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2di0xMC40MDNsLTIuMzkzLDIuMzkzVi0yNTgzLjgzN3oiIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KICAgPC9nPgogIDwvZz4KIDwvZz4KPC9zdm'+
			'c+Cg==';
		me._thumbnail_visited3__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_visited";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg glow";
		el.ggType='svg';
		hs ='';
		hs+='height : 24px;';
		hs+='position : absolute;';
		hs+='right : 8px;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_visited3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_visited3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._thumbnail_visited3.ggElementNodeId()) == true)) || 
				((me._thumbnail_visited3.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_visited3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_visited3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_visited3.style.transition='';
				if (me._thumbnail_visited3.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_visited3.style.visibility=(Number(me._thumbnail_visited3.style.opacity)>0||!me._thumbnail_visited3.style.opacity)?'inherit':'hidden';
					me._thumbnail_visited3.ggVisible=true;
				}
				else {
					me._thumbnail_visited3.style.visibility="hidden";
					me._thumbnail_visited3.ggVisible=false;
				}
			}
		}
		me._thumbnail_visited3.logicBlock_visible();
		me._thumbnail_visited3.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._thumbnail_visited3);
		me._thumbnail_tint3.logicBlock_backgroundcolor();
		me._thumbnail_tint3.logicBlock_bordercolor();
		me._thumbnail_tint3.logicBlock_borderwidth();
		me.elementMouseOver['thumbnail_tint3']=false;
		me._thumbnail_border3.logicBlock_alpha();
		me._thumbnail_visited3.logicBlock_visible();
			me.ggEvent_changenode=function(event) {
				me._thumbnail_tint3.logicBlock_bordercolor();
				me._thumbnail_tint3.logicBlock_borderwidth();
				me._thumbnail_visited3.logicBlock_visible();
				me._thumbnail_visited3.logicBlock_visible();
			};
			me.ggEvent_changevisitednodes=function(event) {
				me._thumbnail_visited3.logicBlock_visible();
			};
	};
	function SkinCloner_lobby_cloner_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._thumbnail_title3=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_title3;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_title3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumbnail_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text hepta_slab";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -30px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 22px;';
		hs+='left : calc(50% - ((180px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 180px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._thumbnail_title3.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._thumbnail_title3.ggUpdateText();
		player.addListener('changenode', function() {
			me._thumbnail_title3.ggUpdateText();
		});
		el.appendChild(els);
		me._thumbnail_title3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_title3.onclick=function (e) {
			if (me._thumbnail_title3.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me._thumbnail_title3.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._thumbnail_title3);
		el=me._thumbnail_image4=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_image4;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_image4__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/thumbnail_image4_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 100px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 180px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_image4.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_image4.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._thumbnail_image4);
		el=me._thumbnail_tint4=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_tint4;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="thumbnail_tint";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='border-color : #ffffff;';
		hs+='border-style : solid;';
		hs+='border-width : 2px 2px 2px 2px;';
		hs+='cursor : default;';
		hs+='height : 100px;';
		hs+='left : -2px;';
		hs+='position : absolute;';
		hs+='top : -2px;';
		hs+='visibility : inherit;';
		hs+='width : 180px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_tint4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_tint4.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['thumbnail_tint4'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._thumbnail_tint4.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._thumbnail_tint4.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._thumbnail_tint4.style.transition='background-color 100ms ease 0ms, border-color 0s, border-width 0s';
				if (me._thumbnail_tint4.ggCurrentLogicStateBackgroundColor == 0) {
					me._thumbnail_tint4.style.backgroundColor="rgba(0,0,0,0.313726)";
				}
				else {
					me._thumbnail_tint4.style.backgroundColor="rgba(0,0,0,0)";
				}
			}
		}
		me._thumbnail_tint4.logicBlock_backgroundcolor();
		me._thumbnail_tint4.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me._thumbnail_tint4.ggIsActive() == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				((me.elementMouseOver['thumbnail_tint4'] == true))
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._thumbnail_tint4.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._thumbnail_tint4.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._thumbnail_tint4.style.transition='background-color 100ms ease 0ms, border-color 0s, border-width 0s';
				if (me._thumbnail_tint4.ggCurrentLogicStateBorderColor == 0) {
					me._thumbnail_tint4.style.borderColor="rgba(255,85,0,1)";
				}
				else if (me._thumbnail_tint4.ggCurrentLogicStateBorderColor == 1) {
					me._thumbnail_tint4.style.borderColor="rgba(170,255,0,1)";
				}
				else {
					me._thumbnail_tint4.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me._thumbnail_tint4.logicBlock_bordercolor();
		me._thumbnail_tint4.logicBlock_borderwidth = function() {
			var newLogicStateBorderWidth;
			if (
				((me._thumbnail_tint4.ggIsActive() == true))
			)
			{
				newLogicStateBorderWidth = 0;
			}
			else {
				newLogicStateBorderWidth = -1;
			}
			if (me._thumbnail_tint4.ggCurrentLogicStateBorderWidth != newLogicStateBorderWidth) {
				me._thumbnail_tint4.ggCurrentLogicStateBorderWidth = newLogicStateBorderWidth;
				me._thumbnail_tint4.style.transition='background-color 100ms ease 0ms, border-color 0s, border-width 0s';
				if (me._thumbnail_tint4.ggCurrentLogicStateBorderWidth == 0) {
					me._thumbnail_tint4.style.borderWidth="3px 3px 3px 3px";
				}
				else {
					me._thumbnail_tint4.style.borderWidth="2px 2px 2px 2px";
				}
			}
		}
		me._thumbnail_tint4.logicBlock_borderwidth();
		me._thumbnail_tint4.onclick=function (e) {
			if (me._thumbnail_tint4.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me._thumbnail_tint4.onmouseenter=function (e) {
			me.elementMouseOver['thumbnail_tint4']=true;
			me._thumbnail_border4.logicBlock_alpha();
			me._thumbnail_tint4.logicBlock_backgroundcolor();
			me._thumbnail_tint4.logicBlock_bordercolor();
		}
		me._thumbnail_tint4.onmouseleave=function (e) {
			me.elementMouseOver['thumbnail_tint4']=false;
			me._thumbnail_border4.logicBlock_alpha();
			me._thumbnail_tint4.logicBlock_backgroundcolor();
			me._thumbnail_tint4.logicBlock_bordercolor();
		}
		me._thumbnail_tint4.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnail_border4=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_border4;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="thumbnail_border";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 10;';
		hs+='background : rgba(0,0,0,0);';
		hs+='border : 0px solid #c2e812;';
		hs+='cursor : pointer;';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((180px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 180px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_border4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_border4.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['thumbnail_tint4'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_border4.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_border4.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_border4.style.transition='opacity 100ms ease 0ms';
				if (me._thumbnail_border4.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_border4.style.visibility=me._thumbnail_border4.ggVisible?'inherit':'hidden';
					me._thumbnail_border4.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._thumbnail_border4.style.opacity == 0.0) { me._thumbnail_border4.style.visibility="hidden"; } }, 105);
					me._thumbnail_border4.style.opacity=0;
				}
			}
		}
		me._thumbnail_border4.logicBlock_alpha();
		me._thumbnail_border4.onclick=function (e) {
			if (me._thumbnail_border4.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me._thumbnail_border4.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_tint4.appendChild(me._thumbnail_border4);
		me.__div.appendChild(me._thumbnail_tint4);
		el=me._thumbnail_visited4=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_visited4;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_visited4__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOmk9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVJbGx1c3RyYXRvci8xMC4wLyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpncmFwaD'+
			'0iaHR0cDovL25zLmFkb2JlLmNvbS9HcmFwaHMvMS4wLyIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAtMzcyMiAtMjYwNiAzMiAzMiIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB4bWxuczphPSJodHRwOi8vbnMuYWRvYmUuY29tL0Fkb2JlU1ZHVmlld2VyRXh0ZW5zaW9ucy8zLjAvIiB2aWV3Qm94PSItMzcyMiAtMjYwNiAzMiAzMiIgeG1sbnM6eD0iaHR0cDovL25zLmFkb2JlLmNvbS9FeHRlbnNpYmlsaXR5LzEuMC8iIHdpZHRoPSIzMnB4IiB5PSIwcHgiIGhlaWdodD0iMzJweCI+CiA8'+
			'ZyBpZD0iTGF5ZXJfMSIvPgogPGcgaWQ9IkViZW5lXzEiLz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPGc+CiAgICA8cGF0aCBkPSJNLTM2OTUuNDczLTI1OTguMTQ2Yy0wLjUxOS0wLjUxOS0xLjM2MS0wLjUxOS0xLjg3OSwwbC04Ljc4Nyw4Ljc4N2wtMi4yOTEtMi4yNDMgICAgIGMtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAyYy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OSAgICAgYzAuMzQsMCwwLjY4LTAuMTMsMC45NC0wLjM5bDkuNzE3LTkuNzE3Qy0zNjk0Ljk1NC0yNT'+
			'k2Ljc4NS0zNjk0Ljk1NC0yNTk3LjYyNi0zNjk1LjQ3My0yNTk4LjE0NnoiIGZpbGw9IiNGRkZGRkYiLz4KICAgIDxwYXRoIGQ9Ik0tMzY5OS45Ni0yNTgzLjgzN2gtMTIuMzI1di0xMi4zMjZoMTEuODIxbDIuMjUyLTIuMjUyYy0wLjE2Ni0wLjA4Ni0wLjM1Mi0wLjE0MS0wLjU1Mi0wLjE0MWgtMTQuNzE4ICAgICBjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgxNC43MThjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtMTAuNDAzICAgICBsLTIuMzkzLDIuMzkzVi0yNTgzLjgzN3oiIGZpbGw9IiNGRkZG'+
			'RkYiLz4KICAgPC9nPgogICA8ZyBvcGFjaXR5PSIwLjQiIGE6YWRvYmUtYmxlbmRpbmctbW9kZT0ibXVsdGlwbHkiPgogICAgPHBhdGggc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSIjMUExNzFCIiBhOmFkb2JlLWJsZW5kaW5nLW1vZGU9Im5vcm1hbCIgZD0iICAgICBNLTM2OTUuNDczLTI1OTguMTQ2Yy0wLjUxOS0wLjUxOS0xLjM2MS0wLjUxOS0xLjg3OSwwbC04Ljc4Nyw4Ljc4N2wtMi4yOTEtMi4yNDNjLTAuNTI1LTAuNTEzLTEuMzY2LTAuNTA0LTEuODgsMC4wMiAgICAgYy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC'+
			'41OTQsMC4zNzksMC45MywwLjM3OWMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxNyAgICAgQy0zNjk0Ljk1NC0yNTk2Ljc4NS0zNjk0Ljk1NC0yNTk3LjYyNi0zNjk1LjQ3My0yNTk4LjE0NnoiIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KICAgIDxwYXRoIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iIzFBMTcxQiIgYTphZG9iZS1ibGVuZGluZy1tb2RlPSJub3JtYWwiIGQ9IiAgICAgTS0zNjk5Ljk2LTI1ODMuODM3aC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAu'+
			'MzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MTggICAgIGMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NnYxNC43MTljMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2aDE0LjcxOGMwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2di0xMC40MDMgICAgIGwtMi4zOTMsMi4zOTNWLTI1ODMuODM3eiIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogICA8L2c+CiAgIDxnPgogICAgPHBhdGggZD0iTS0zNjk1LjQ3My0yNTk4LjE0NmMtMC41MTktMC41MTktMS4zNjEtMC41MTktMS44NzksMGwtOC43ODcsOC43ODdsLTIuMj'+
			'kxLTIuMjQzICAgICBjLTAuNTI1LTAuNTEzLTEuMzY2LTAuNTA0LTEuODgsMC4wMmMtMC41MTMsMC41MjUtMC41MDQsMS4zNjcsMC4wMjEsMS44OGwzLjIzLDMuMTYzYzAuMjU5LDAuMjUzLDAuNTk0LDAuMzc5LDAuOTMsMC4zNzkgICAgIGMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxN0MtMzY5NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6IiBmaWxsPSIjRkZGRkZGIi8+CiAgICA8cGF0aCBkPSJNLTM2OTkuOTYtMjU4My44MzdoLTEyLjMyNXYtMTIuMzI2aDExLjgyMWwyLjI1Mi0yLjI1MmMtMC4xNjYtMC4wODYtMC4zNTItMC4x'+
			'NDEtMC41NTItMC4xNDFoLTE0LjcxOCAgICAgYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2djE0LjcxOWMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMTQuNzE4YzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZ2LTEwLjQwMyAgICAgbC0yLjM5MywyLjM5M1YtMjU4My44Mzd6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDwvZz4KICAgPGc+CiAgICA8cGF0aCBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9IiMxQTE3MUIiIGQ9Ik0tMzY5NS40NzMtMjU5OC4xNDYgICAgIGMtMC41MTktMC41MTktMS4zNjEtMC41MTktMS44NzksMGwtOC43ODcsOC43ODdsLTIuMj'+
			'kxLTIuMjQzYy0wLjUyNS0wLjUxMy0xLjM2Ni0wLjUwNC0xLjg4LDAuMDIgICAgIGMtMC41MTMsMC41MjUtMC41MDQsMS4zNjcsMC4wMjEsMS44OGwzLjIzLDMuMTYzYzAuMjU5LDAuMjUzLDAuNTk0LDAuMzc5LDAuOTMsMC4zNzljMC4zNCwwLDAuNjgtMC4xMywwLjk0LTAuMzlsOS43MTctOS43MTcgICAgIEMtMzY5NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6IiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjAuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiAgICA8cGF0aCBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9IiMxQTE3MUIi'+
			'IGQ9Ik0tMzY5OS45Ni0yNTgzLjgzNyAgICAgaC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAuMzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MThjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5ICAgICBjMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2aDE0LjcxOGMwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2di0xMC40MDNsLTIuMzkzLDIuMzkzVi0yNTgzLjgzN3oiIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KICAgPC9nPgogIDwvZz4KIDwvZz4KPC9zdm'+
			'c+Cg==';
		me._thumbnail_visited4__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_visited";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg glow";
		el.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 8px;';
		hs+='top : 6px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_visited4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_visited4.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._thumbnail_visited4.ggElementNodeId()) == true)) || 
				((me._thumbnail_visited4.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_visited4.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_visited4.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_visited4.style.transition='';
				if (me._thumbnail_visited4.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_visited4.style.visibility=(Number(me._thumbnail_visited4.style.opacity)>0||!me._thumbnail_visited4.style.opacity)?'inherit':'hidden';
					me._thumbnail_visited4.ggVisible=true;
				}
				else {
					me._thumbnail_visited4.style.visibility="hidden";
					me._thumbnail_visited4.ggVisible=false;
				}
			}
		}
		me._thumbnail_visited4.logicBlock_visible();
		me._thumbnail_visited4.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._thumbnail_visited4);
		me._thumbnail_tint4.logicBlock_backgroundcolor();
		me._thumbnail_tint4.logicBlock_bordercolor();
		me._thumbnail_tint4.logicBlock_borderwidth();
		me.elementMouseOver['thumbnail_tint4']=false;
		me._thumbnail_border4.logicBlock_alpha();
		me._thumbnail_visited4.logicBlock_visible();
			me.ggEvent_changenode=function(event) {
				me._thumbnail_tint4.logicBlock_bordercolor();
				me._thumbnail_tint4.logicBlock_borderwidth();
				me._thumbnail_visited4.logicBlock_visible();
				me._thumbnail_visited4.logicBlock_visible();
			};
			me.ggEvent_changevisitednodes=function(event) {
				me._thumbnail_visited4.logicBlock_visible();
			};
	};
	function SkinCloner_dining_cloner_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._thumbnail_title4=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_title4;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_title4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumbnail_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text hepta_slab";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -30px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 22px;';
		hs+='left : calc(50% - ((180px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 180px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._thumbnail_title4.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._thumbnail_title4.ggUpdateText();
		player.addListener('changenode', function() {
			me._thumbnail_title4.ggUpdateText();
		});
		el.appendChild(els);
		me._thumbnail_title4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_title4.onclick=function (e) {
			if (me._thumbnail_title4.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me._thumbnail_title4.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._thumbnail_title4);
		el=me._thumbnail_image5=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_image5;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_image5__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/thumbnail_image4_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 100px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 180px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_image5.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_image5.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._thumbnail_image5);
		el=me._thumbnail_tint5=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_tint5;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="thumbnail_tint";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='border-color : #ffffff;';
		hs+='border-style : solid;';
		hs+='border-width : 2px 2px 2px 2px;';
		hs+='cursor : default;';
		hs+='height : 100px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 180px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_tint5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_tint5.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['thumbnail_tint5'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._thumbnail_tint5.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._thumbnail_tint5.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._thumbnail_tint5.style.transition='background-color 100ms ease 0ms, border-color 0s, border-width 0s';
				if (me._thumbnail_tint5.ggCurrentLogicStateBackgroundColor == 0) {
					me._thumbnail_tint5.style.backgroundColor="rgba(0,0,0,0.313726)";
				}
				else {
					me._thumbnail_tint5.style.backgroundColor="rgba(0,0,0,0)";
				}
			}
		}
		me._thumbnail_tint5.logicBlock_backgroundcolor();
		me._thumbnail_tint5.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me._thumbnail_tint5.ggIsActive() == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				((me.elementMouseOver['thumbnail_tint5'] == true))
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._thumbnail_tint5.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._thumbnail_tint5.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._thumbnail_tint5.style.transition='background-color 100ms ease 0ms, border-color 0s, border-width 0s';
				if (me._thumbnail_tint5.ggCurrentLogicStateBorderColor == 0) {
					me._thumbnail_tint5.style.borderColor="rgba(255,85,0,1)";
				}
				else if (me._thumbnail_tint5.ggCurrentLogicStateBorderColor == 1) {
					me._thumbnail_tint5.style.borderColor="rgba(170,255,0,1)";
				}
				else {
					me._thumbnail_tint5.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me._thumbnail_tint5.logicBlock_bordercolor();
		me._thumbnail_tint5.logicBlock_borderwidth = function() {
			var newLogicStateBorderWidth;
			if (
				((me._thumbnail_tint5.ggIsActive() == true))
			)
			{
				newLogicStateBorderWidth = 0;
			}
			else {
				newLogicStateBorderWidth = -1;
			}
			if (me._thumbnail_tint5.ggCurrentLogicStateBorderWidth != newLogicStateBorderWidth) {
				me._thumbnail_tint5.ggCurrentLogicStateBorderWidth = newLogicStateBorderWidth;
				me._thumbnail_tint5.style.transition='background-color 100ms ease 0ms, border-color 0s, border-width 0s';
				if (me._thumbnail_tint5.ggCurrentLogicStateBorderWidth == 0) {
					me._thumbnail_tint5.style.borderWidth="3px 3px 3px 3px";
				}
				else {
					me._thumbnail_tint5.style.borderWidth="2px 2px 2px 2px";
				}
			}
		}
		me._thumbnail_tint5.logicBlock_borderwidth();
		me._thumbnail_tint5.onclick=function (e) {
			if (me._thumbnail_tint5.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me._thumbnail_tint5.onmouseenter=function (e) {
			me.elementMouseOver['thumbnail_tint5']=true;
			me._thumbnail_border5.logicBlock_alpha();
			me._thumbnail_tint5.logicBlock_backgroundcolor();
			me._thumbnail_tint5.logicBlock_bordercolor();
		}
		me._thumbnail_tint5.onmouseleave=function (e) {
			me.elementMouseOver['thumbnail_tint5']=false;
			me._thumbnail_border5.logicBlock_alpha();
			me._thumbnail_tint5.logicBlock_backgroundcolor();
			me._thumbnail_tint5.logicBlock_bordercolor();
		}
		me._thumbnail_tint5.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnail_border5=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_border5;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="thumbnail_border";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 10;';
		hs+='background : rgba(0,0,0,0);';
		hs+='border : 0px solid #c2e812;';
		hs+='cursor : pointer;';
		hs+='height : 100px;';
		hs+='left : -2px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -2px;';
		hs+='visibility : hidden;';
		hs+='width : 180px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_border5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_border5.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['thumbnail_tint5'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_border5.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_border5.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_border5.style.transition='opacity 100ms ease 0ms';
				if (me._thumbnail_border5.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_border5.style.visibility=me._thumbnail_border5.ggVisible?'inherit':'hidden';
					me._thumbnail_border5.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._thumbnail_border5.style.opacity == 0.0) { me._thumbnail_border5.style.visibility="hidden"; } }, 105);
					me._thumbnail_border5.style.opacity=0;
				}
			}
		}
		me._thumbnail_border5.logicBlock_alpha();
		me._thumbnail_border5.onclick=function (e) {
			if (me._thumbnail_border5.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me._thumbnail_border5.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_tint5.appendChild(me._thumbnail_border5);
		me.__div.appendChild(me._thumbnail_tint5);
		el=me._thumbnail_visited5=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_visited5;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_visited5__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOmk9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVJbGx1c3RyYXRvci8xMC4wLyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpncmFwaD'+
			'0iaHR0cDovL25zLmFkb2JlLmNvbS9HcmFwaHMvMS4wLyIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAtMzcyMiAtMjYwNiAzMiAzMiIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB4bWxuczphPSJodHRwOi8vbnMuYWRvYmUuY29tL0Fkb2JlU1ZHVmlld2VyRXh0ZW5zaW9ucy8zLjAvIiB2aWV3Qm94PSItMzcyMiAtMjYwNiAzMiAzMiIgeG1sbnM6eD0iaHR0cDovL25zLmFkb2JlLmNvbS9FeHRlbnNpYmlsaXR5LzEuMC8iIHdpZHRoPSIzMnB4IiB5PSIwcHgiIGhlaWdodD0iMzJweCI+CiA8'+
			'ZyBpZD0iTGF5ZXJfMSIvPgogPGcgaWQ9IkViZW5lXzEiLz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPGc+CiAgICA8cGF0aCBkPSJNLTM2OTUuNDczLTI1OTguMTQ2Yy0wLjUxOS0wLjUxOS0xLjM2MS0wLjUxOS0xLjg3OSwwbC04Ljc4Nyw4Ljc4N2wtMi4yOTEtMi4yNDMgICAgIGMtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAyYy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OSAgICAgYzAuMzQsMCwwLjY4LTAuMTMsMC45NC0wLjM5bDkuNzE3LTkuNzE3Qy0zNjk0Ljk1NC0yNT'+
			'k2Ljc4NS0zNjk0Ljk1NC0yNTk3LjYyNi0zNjk1LjQ3My0yNTk4LjE0NnoiIGZpbGw9IiNGRkZGRkYiLz4KICAgIDxwYXRoIGQ9Ik0tMzY5OS45Ni0yNTgzLjgzN2gtMTIuMzI1di0xMi4zMjZoMTEuODIxbDIuMjUyLTIuMjUyYy0wLjE2Ni0wLjA4Ni0wLjM1Mi0wLjE0MS0wLjU1Mi0wLjE0MWgtMTQuNzE4ICAgICBjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgxNC43MThjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtMTAuNDAzICAgICBsLTIuMzkzLDIuMzkzVi0yNTgzLjgzN3oiIGZpbGw9IiNGRkZG'+
			'RkYiLz4KICAgPC9nPgogICA8ZyBvcGFjaXR5PSIwLjQiIGE6YWRvYmUtYmxlbmRpbmctbW9kZT0ibXVsdGlwbHkiPgogICAgPHBhdGggc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSIjMUExNzFCIiBhOmFkb2JlLWJsZW5kaW5nLW1vZGU9Im5vcm1hbCIgZD0iICAgICBNLTM2OTUuNDczLTI1OTguMTQ2Yy0wLjUxOS0wLjUxOS0xLjM2MS0wLjUxOS0xLjg3OSwwbC04Ljc4Nyw4Ljc4N2wtMi4yOTEtMi4yNDNjLTAuNTI1LTAuNTEzLTEuMzY2LTAuNTA0LTEuODgsMC4wMiAgICAgYy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC'+
			'41OTQsMC4zNzksMC45MywwLjM3OWMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxNyAgICAgQy0zNjk0Ljk1NC0yNTk2Ljc4NS0zNjk0Ljk1NC0yNTk3LjYyNi0zNjk1LjQ3My0yNTk4LjE0NnoiIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KICAgIDxwYXRoIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iIzFBMTcxQiIgYTphZG9iZS1ibGVuZGluZy1tb2RlPSJub3JtYWwiIGQ9IiAgICAgTS0zNjk5Ljk2LTI1ODMuODM3aC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAu'+
			'MzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MTggICAgIGMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NnYxNC43MTljMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2aDE0LjcxOGMwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2di0xMC40MDMgICAgIGwtMi4zOTMsMi4zOTNWLTI1ODMuODM3eiIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogICA8L2c+CiAgIDxnPgogICAgPHBhdGggZD0iTS0zNjk1LjQ3My0yNTk4LjE0NmMtMC41MTktMC41MTktMS4zNjEtMC41MTktMS44NzksMGwtOC43ODcsOC43ODdsLTIuMj'+
			'kxLTIuMjQzICAgICBjLTAuNTI1LTAuNTEzLTEuMzY2LTAuNTA0LTEuODgsMC4wMmMtMC41MTMsMC41MjUtMC41MDQsMS4zNjcsMC4wMjEsMS44OGwzLjIzLDMuMTYzYzAuMjU5LDAuMjUzLDAuNTk0LDAuMzc5LDAuOTMsMC4zNzkgICAgIGMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxN0MtMzY5NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6IiBmaWxsPSIjRkZGRkZGIi8+CiAgICA8cGF0aCBkPSJNLTM2OTkuOTYtMjU4My44MzdoLTEyLjMyNXYtMTIuMzI2aDExLjgyMWwyLjI1Mi0yLjI1MmMtMC4xNjYtMC4wODYtMC4zNTItMC4x'+
			'NDEtMC41NTItMC4xNDFoLTE0LjcxOCAgICAgYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2djE0LjcxOWMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMTQuNzE4YzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZ2LTEwLjQwMyAgICAgbC0yLjM5MywyLjM5M1YtMjU4My44Mzd6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDwvZz4KICAgPGc+CiAgICA8cGF0aCBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9IiMxQTE3MUIiIGQ9Ik0tMzY5NS40NzMtMjU5OC4xNDYgICAgIGMtMC41MTktMC41MTktMS4zNjEtMC41MTktMS44NzksMGwtOC43ODcsOC43ODdsLTIuMj'+
			'kxLTIuMjQzYy0wLjUyNS0wLjUxMy0xLjM2Ni0wLjUwNC0xLjg4LDAuMDIgICAgIGMtMC41MTMsMC41MjUtMC41MDQsMS4zNjcsMC4wMjEsMS44OGwzLjIzLDMuMTYzYzAuMjU5LDAuMjUzLDAuNTk0LDAuMzc5LDAuOTMsMC4zNzljMC4zNCwwLDAuNjgtMC4xMywwLjk0LTAuMzlsOS43MTctOS43MTcgICAgIEMtMzY5NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6IiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjAuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiAgICA8cGF0aCBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9IiMxQTE3MUIi'+
			'IGQ9Ik0tMzY5OS45Ni0yNTgzLjgzNyAgICAgaC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAuMzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MThjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5ICAgICBjMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2aDE0LjcxOGMwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2di0xMC40MDNsLTIuMzkzLDIuMzkzVi0yNTgzLjgzN3oiIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KICAgPC9nPgogIDwvZz4KIDwvZz4KPC9zdm'+
			'c+Cg==';
		me._thumbnail_visited5__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_visited";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg glow";
		el.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 8px;';
		hs+='top : 6px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_visited5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_visited5.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._thumbnail_visited5.ggElementNodeId()) == true)) || 
				((me._thumbnail_visited5.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_visited5.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_visited5.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_visited5.style.transition='';
				if (me._thumbnail_visited5.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_visited5.style.visibility=(Number(me._thumbnail_visited5.style.opacity)>0||!me._thumbnail_visited5.style.opacity)?'inherit':'hidden';
					me._thumbnail_visited5.ggVisible=true;
				}
				else {
					me._thumbnail_visited5.style.visibility="hidden";
					me._thumbnail_visited5.ggVisible=false;
				}
			}
		}
		me._thumbnail_visited5.logicBlock_visible();
		me._thumbnail_visited5.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._thumbnail_visited5);
		me._thumbnail_tint5.logicBlock_backgroundcolor();
		me._thumbnail_tint5.logicBlock_bordercolor();
		me._thumbnail_tint5.logicBlock_borderwidth();
		me.elementMouseOver['thumbnail_tint5']=false;
		me._thumbnail_border5.logicBlock_alpha();
		me._thumbnail_visited5.logicBlock_visible();
			me.ggEvent_changenode=function(event) {
				me._thumbnail_tint5.logicBlock_bordercolor();
				me._thumbnail_tint5.logicBlock_borderwidth();
				me._thumbnail_visited5.logicBlock_visible();
				me._thumbnail_visited5.logicBlock_visible();
			};
			me.ggEvent_changevisitednodes=function(event) {
				me._thumbnail_visited5.logicBlock_visible();
			};
	};
	function SkinCloner_room_cloner_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._thumbnail_title5=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_title5;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_title5__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumbnail_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text hepta_slab";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -30px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 22px;';
		hs+='left : calc(50% - ((180px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 180px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._thumbnail_title5.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._thumbnail_title5.ggUpdateText();
		player.addListener('changenode', function() {
			me._thumbnail_title5.ggUpdateText();
		});
		el.appendChild(els);
		me._thumbnail_title5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_title5.onclick=function (e) {
			if (me._thumbnail_title5.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me._thumbnail_title5.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._thumbnail_title5);
		el=me._thumbnail_image6=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_image6;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_image6__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/thumbnail_image4_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 100px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 180px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_image6.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_image6.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._thumbnail_image6);
		el=me._thumbnail_tint6=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_tint6;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="thumbnail_tint";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='border-color : #ffffff;';
		hs+='border-style : solid;';
		hs+='border-width : 2px 2px 2px 2px;';
		hs+='cursor : default;';
		hs+='height : 100px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 180px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_tint6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_tint6.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['thumbnail_tint6'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._thumbnail_tint6.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._thumbnail_tint6.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._thumbnail_tint6.style.transition='background-color 100ms ease 0ms, border-color 0s, border-width 0s';
				if (me._thumbnail_tint6.ggCurrentLogicStateBackgroundColor == 0) {
					me._thumbnail_tint6.style.backgroundColor="rgba(0,0,0,0.313726)";
				}
				else {
					me._thumbnail_tint6.style.backgroundColor="rgba(0,0,0,0)";
				}
			}
		}
		me._thumbnail_tint6.logicBlock_backgroundcolor();
		me._thumbnail_tint6.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me._thumbnail_tint6.ggIsActive() == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				((me.elementMouseOver['thumbnail_tint6'] == true))
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._thumbnail_tint6.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._thumbnail_tint6.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._thumbnail_tint6.style.transition='background-color 100ms ease 0ms, border-color 0s, border-width 0s';
				if (me._thumbnail_tint6.ggCurrentLogicStateBorderColor == 0) {
					me._thumbnail_tint6.style.borderColor="rgba(255,85,0,1)";
				}
				else if (me._thumbnail_tint6.ggCurrentLogicStateBorderColor == 1) {
					me._thumbnail_tint6.style.borderColor="rgba(170,255,0,1)";
				}
				else {
					me._thumbnail_tint6.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me._thumbnail_tint6.logicBlock_bordercolor();
		me._thumbnail_tint6.logicBlock_borderwidth = function() {
			var newLogicStateBorderWidth;
			if (
				((me._thumbnail_tint6.ggIsActive() == true))
			)
			{
				newLogicStateBorderWidth = 0;
			}
			else {
				newLogicStateBorderWidth = -1;
			}
			if (me._thumbnail_tint6.ggCurrentLogicStateBorderWidth != newLogicStateBorderWidth) {
				me._thumbnail_tint6.ggCurrentLogicStateBorderWidth = newLogicStateBorderWidth;
				me._thumbnail_tint6.style.transition='background-color 100ms ease 0ms, border-color 0s, border-width 0s';
				if (me._thumbnail_tint6.ggCurrentLogicStateBorderWidth == 0) {
					me._thumbnail_tint6.style.borderWidth="3px 3px 3px 3px";
				}
				else {
					me._thumbnail_tint6.style.borderWidth="2px 2px 2px 2px";
				}
			}
		}
		me._thumbnail_tint6.logicBlock_borderwidth();
		me._thumbnail_tint6.onclick=function (e) {
			if (me._thumbnail_tint6.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me._thumbnail_tint6.onmouseenter=function (e) {
			me.elementMouseOver['thumbnail_tint6']=true;
			me._thumbnail_border6.logicBlock_alpha();
			me._thumbnail_tint6.logicBlock_backgroundcolor();
			me._thumbnail_tint6.logicBlock_bordercolor();
		}
		me._thumbnail_tint6.onmouseleave=function (e) {
			me.elementMouseOver['thumbnail_tint6']=false;
			me._thumbnail_border6.logicBlock_alpha();
			me._thumbnail_tint6.logicBlock_backgroundcolor();
			me._thumbnail_tint6.logicBlock_bordercolor();
		}
		me._thumbnail_tint6.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnail_border6=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_border6;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="thumbnail_border";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 10;';
		hs+='background : rgba(0,0,0,0);';
		hs+='border : 0px solid #c2e812;';
		hs+='cursor : pointer;';
		hs+='height : 100px;';
		hs+='left : -2px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -2px;';
		hs+='visibility : hidden;';
		hs+='width : 180px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_border6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_border6.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['thumbnail_tint6'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_border6.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_border6.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_border6.style.transition='opacity 100ms ease 0ms';
				if (me._thumbnail_border6.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_border6.style.visibility=me._thumbnail_border6.ggVisible?'inherit':'hidden';
					me._thumbnail_border6.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._thumbnail_border6.style.opacity == 0.0) { me._thumbnail_border6.style.visibility="hidden"; } }, 105);
					me._thumbnail_border6.style.opacity=0;
				}
			}
		}
		me._thumbnail_border6.logicBlock_alpha();
		me._thumbnail_border6.onclick=function (e) {
			if (me._thumbnail_border6.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me._thumbnail_border6.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_tint6.appendChild(me._thumbnail_border6);
		me.__div.appendChild(me._thumbnail_tint6);
		el=me._thumbnail_visited6=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_visited6;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_visited6__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOmk9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVJbGx1c3RyYXRvci8xMC4wLyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpncmFwaD'+
			'0iaHR0cDovL25zLmFkb2JlLmNvbS9HcmFwaHMvMS4wLyIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAtMzcyMiAtMjYwNiAzMiAzMiIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB4bWxuczphPSJodHRwOi8vbnMuYWRvYmUuY29tL0Fkb2JlU1ZHVmlld2VyRXh0ZW5zaW9ucy8zLjAvIiB2aWV3Qm94PSItMzcyMiAtMjYwNiAzMiAzMiIgeG1sbnM6eD0iaHR0cDovL25zLmFkb2JlLmNvbS9FeHRlbnNpYmlsaXR5LzEuMC8iIHdpZHRoPSIzMnB4IiB5PSIwcHgiIGhlaWdodD0iMzJweCI+CiA8'+
			'ZyBpZD0iTGF5ZXJfMSIvPgogPGcgaWQ9IkViZW5lXzEiLz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPGc+CiAgICA8cGF0aCBkPSJNLTM2OTUuNDczLTI1OTguMTQ2Yy0wLjUxOS0wLjUxOS0xLjM2MS0wLjUxOS0xLjg3OSwwbC04Ljc4Nyw4Ljc4N2wtMi4yOTEtMi4yNDMgICAgIGMtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAyYy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OSAgICAgYzAuMzQsMCwwLjY4LTAuMTMsMC45NC0wLjM5bDkuNzE3LTkuNzE3Qy0zNjk0Ljk1NC0yNT'+
			'k2Ljc4NS0zNjk0Ljk1NC0yNTk3LjYyNi0zNjk1LjQ3My0yNTk4LjE0NnoiIGZpbGw9IiNGRkZGRkYiLz4KICAgIDxwYXRoIGQ9Ik0tMzY5OS45Ni0yNTgzLjgzN2gtMTIuMzI1di0xMi4zMjZoMTEuODIxbDIuMjUyLTIuMjUyYy0wLjE2Ni0wLjA4Ni0wLjM1Mi0wLjE0MS0wLjU1Mi0wLjE0MWgtMTQuNzE4ICAgICBjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgxNC43MThjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtMTAuNDAzICAgICBsLTIuMzkzLDIuMzkzVi0yNTgzLjgzN3oiIGZpbGw9IiNGRkZG'+
			'RkYiLz4KICAgPC9nPgogICA8ZyBvcGFjaXR5PSIwLjQiIGE6YWRvYmUtYmxlbmRpbmctbW9kZT0ibXVsdGlwbHkiPgogICAgPHBhdGggc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSIjMUExNzFCIiBhOmFkb2JlLWJsZW5kaW5nLW1vZGU9Im5vcm1hbCIgZD0iICAgICBNLTM2OTUuNDczLTI1OTguMTQ2Yy0wLjUxOS0wLjUxOS0xLjM2MS0wLjUxOS0xLjg3OSwwbC04Ljc4Nyw4Ljc4N2wtMi4yOTEtMi4yNDNjLTAuNTI1LTAuNTEzLTEuMzY2LTAuNTA0LTEuODgsMC4wMiAgICAgYy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC'+
			'41OTQsMC4zNzksMC45MywwLjM3OWMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxNyAgICAgQy0zNjk0Ljk1NC0yNTk2Ljc4NS0zNjk0Ljk1NC0yNTk3LjYyNi0zNjk1LjQ3My0yNTk4LjE0NnoiIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KICAgIDxwYXRoIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iIzFBMTcxQiIgYTphZG9iZS1ibGVuZGluZy1tb2RlPSJub3JtYWwiIGQ9IiAgICAgTS0zNjk5Ljk2LTI1ODMuODM3aC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAu'+
			'MzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MTggICAgIGMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NnYxNC43MTljMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2aDE0LjcxOGMwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2di0xMC40MDMgICAgIGwtMi4zOTMsMi4zOTNWLTI1ODMuODM3eiIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogICA8L2c+CiAgIDxnPgogICAgPHBhdGggZD0iTS0zNjk1LjQ3My0yNTk4LjE0NmMtMC41MTktMC41MTktMS4zNjEtMC41MTktMS44NzksMGwtOC43ODcsOC43ODdsLTIuMj'+
			'kxLTIuMjQzICAgICBjLTAuNTI1LTAuNTEzLTEuMzY2LTAuNTA0LTEuODgsMC4wMmMtMC41MTMsMC41MjUtMC41MDQsMS4zNjcsMC4wMjEsMS44OGwzLjIzLDMuMTYzYzAuMjU5LDAuMjUzLDAuNTk0LDAuMzc5LDAuOTMsMC4zNzkgICAgIGMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxN0MtMzY5NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6IiBmaWxsPSIjRkZGRkZGIi8+CiAgICA8cGF0aCBkPSJNLTM2OTkuOTYtMjU4My44MzdoLTEyLjMyNXYtMTIuMzI2aDExLjgyMWwyLjI1Mi0yLjI1MmMtMC4xNjYtMC4wODYtMC4zNTItMC4x'+
			'NDEtMC41NTItMC4xNDFoLTE0LjcxOCAgICAgYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2djE0LjcxOWMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMTQuNzE4YzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZ2LTEwLjQwMyAgICAgbC0yLjM5MywyLjM5M1YtMjU4My44Mzd6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDwvZz4KICAgPGc+CiAgICA8cGF0aCBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9IiMxQTE3MUIiIGQ9Ik0tMzY5NS40NzMtMjU5OC4xNDYgICAgIGMtMC41MTktMC41MTktMS4zNjEtMC41MTktMS44NzksMGwtOC43ODcsOC43ODdsLTIuMj'+
			'kxLTIuMjQzYy0wLjUyNS0wLjUxMy0xLjM2Ni0wLjUwNC0xLjg4LDAuMDIgICAgIGMtMC41MTMsMC41MjUtMC41MDQsMS4zNjcsMC4wMjEsMS44OGwzLjIzLDMuMTYzYzAuMjU5LDAuMjUzLDAuNTk0LDAuMzc5LDAuOTMsMC4zNzljMC4zNCwwLDAuNjgtMC4xMywwLjk0LTAuMzlsOS43MTctOS43MTcgICAgIEMtMzY5NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6IiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjAuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiAgICA8cGF0aCBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9IiMxQTE3MUIi'+
			'IGQ9Ik0tMzY5OS45Ni0yNTgzLjgzNyAgICAgaC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAuMzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MThjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5ICAgICBjMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2aDE0LjcxOGMwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2di0xMC40MDNsLTIuMzkzLDIuMzkzVi0yNTgzLjgzN3oiIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KICAgPC9nPgogIDwvZz4KIDwvZz4KPC9zdm'+
			'c+Cg==';
		me._thumbnail_visited6__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_visited";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg glow";
		el.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 8px;';
		hs+='top : 6px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_visited6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_visited6.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._thumbnail_visited6.ggElementNodeId()) == true)) || 
				((me._thumbnail_visited6.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_visited6.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_visited6.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_visited6.style.transition='';
				if (me._thumbnail_visited6.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_visited6.style.visibility=(Number(me._thumbnail_visited6.style.opacity)>0||!me._thumbnail_visited6.style.opacity)?'inherit':'hidden';
					me._thumbnail_visited6.ggVisible=true;
				}
				else {
					me._thumbnail_visited6.style.visibility="hidden";
					me._thumbnail_visited6.ggVisible=false;
				}
			}
		}
		me._thumbnail_visited6.logicBlock_visible();
		me._thumbnail_visited6.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._thumbnail_visited6);
		me._thumbnail_tint6.logicBlock_backgroundcolor();
		me._thumbnail_tint6.logicBlock_bordercolor();
		me._thumbnail_tint6.logicBlock_borderwidth();
		me.elementMouseOver['thumbnail_tint6']=false;
		me._thumbnail_border6.logicBlock_alpha();
		me._thumbnail_visited6.logicBlock_visible();
			me.ggEvent_changenode=function(event) {
				me._thumbnail_tint6.logicBlock_bordercolor();
				me._thumbnail_tint6.logicBlock_borderwidth();
				me._thumbnail_visited6.logicBlock_visible();
				me._thumbnail_visited6.logicBlock_visible();
			};
			me.ggEvent_changevisitednodes=function(event) {
				me._thumbnail_visited6.logicBlock_visible();
			};
	};
	function SkinCloner_entertainment_cloner_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._thumbnail_title6=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_title6;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_title6__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumbnail_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text hepta_slab";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -30px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 22px;';
		hs+='left : calc(50% - ((180px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 180px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._thumbnail_title6.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._thumbnail_title6.ggUpdateText();
		player.addListener('changenode', function() {
			me._thumbnail_title6.ggUpdateText();
		});
		el.appendChild(els);
		me._thumbnail_title6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_title6.onclick=function (e) {
			if (me._thumbnail_title6.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me._thumbnail_title6.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._thumbnail_title6);
		el=me._thumbnail_image7=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_image7;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_image7__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/thumbnail_image4_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 100px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 180px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_image7.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_image7.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._thumbnail_image7);
		el=me._thumbnail_tint7=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_tint7;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="thumbnail_tint";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='border-color : #ffffff;';
		hs+='border-style : solid;';
		hs+='border-width : 2px 2px 2px 2px;';
		hs+='cursor : default;';
		hs+='height : 100px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 180px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_tint7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_tint7.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['thumbnail_tint7'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._thumbnail_tint7.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._thumbnail_tint7.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._thumbnail_tint7.style.transition='background-color 100ms ease 0ms, border-color 0s, border-width 0s';
				if (me._thumbnail_tint7.ggCurrentLogicStateBackgroundColor == 0) {
					me._thumbnail_tint7.style.backgroundColor="rgba(0,0,0,0.313726)";
				}
				else {
					me._thumbnail_tint7.style.backgroundColor="rgba(0,0,0,0)";
				}
			}
		}
		me._thumbnail_tint7.logicBlock_backgroundcolor();
		me._thumbnail_tint7.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me._thumbnail_tint7.ggIsActive() == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				((me.elementMouseOver['thumbnail_tint7'] == true))
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._thumbnail_tint7.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._thumbnail_tint7.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._thumbnail_tint7.style.transition='background-color 100ms ease 0ms, border-color 0s, border-width 0s';
				if (me._thumbnail_tint7.ggCurrentLogicStateBorderColor == 0) {
					me._thumbnail_tint7.style.borderColor="rgba(255,85,0,1)";
				}
				else if (me._thumbnail_tint7.ggCurrentLogicStateBorderColor == 1) {
					me._thumbnail_tint7.style.borderColor="rgba(170,255,0,1)";
				}
				else {
					me._thumbnail_tint7.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me._thumbnail_tint7.logicBlock_bordercolor();
		me._thumbnail_tint7.logicBlock_borderwidth = function() {
			var newLogicStateBorderWidth;
			if (
				((me._thumbnail_tint7.ggIsActive() == true))
			)
			{
				newLogicStateBorderWidth = 0;
			}
			else {
				newLogicStateBorderWidth = -1;
			}
			if (me._thumbnail_tint7.ggCurrentLogicStateBorderWidth != newLogicStateBorderWidth) {
				me._thumbnail_tint7.ggCurrentLogicStateBorderWidth = newLogicStateBorderWidth;
				me._thumbnail_tint7.style.transition='background-color 100ms ease 0ms, border-color 0s, border-width 0s';
				if (me._thumbnail_tint7.ggCurrentLogicStateBorderWidth == 0) {
					me._thumbnail_tint7.style.borderWidth="3px 3px 3px 3px";
				}
				else {
					me._thumbnail_tint7.style.borderWidth="2px 2px 2px 2px";
				}
			}
		}
		me._thumbnail_tint7.logicBlock_borderwidth();
		me._thumbnail_tint7.onclick=function (e) {
			if (me._thumbnail_tint7.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me._thumbnail_tint7.onmouseenter=function (e) {
			me.elementMouseOver['thumbnail_tint7']=true;
			me._thumbnail_border7.logicBlock_alpha();
			me._thumbnail_tint7.logicBlock_backgroundcolor();
			me._thumbnail_tint7.logicBlock_bordercolor();
		}
		me._thumbnail_tint7.onmouseleave=function (e) {
			me.elementMouseOver['thumbnail_tint7']=false;
			me._thumbnail_border7.logicBlock_alpha();
			me._thumbnail_tint7.logicBlock_backgroundcolor();
			me._thumbnail_tint7.logicBlock_bordercolor();
		}
		me._thumbnail_tint7.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnail_border7=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_border7;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="thumbnail_border";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 10;';
		hs+='background : rgba(0,0,0,0);';
		hs+='border : 0px solid #c2e812;';
		hs+='cursor : pointer;';
		hs+='height : 100px;';
		hs+='left : -2px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -2px;';
		hs+='visibility : hidden;';
		hs+='width : 180px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_border7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_border7.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['thumbnail_tint7'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_border7.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_border7.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_border7.style.transition='opacity 100ms ease 0ms';
				if (me._thumbnail_border7.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_border7.style.visibility=me._thumbnail_border7.ggVisible?'inherit':'hidden';
					me._thumbnail_border7.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._thumbnail_border7.style.opacity == 0.0) { me._thumbnail_border7.style.visibility="hidden"; } }, 105);
					me._thumbnail_border7.style.opacity=0;
				}
			}
		}
		me._thumbnail_border7.logicBlock_alpha();
		me._thumbnail_border7.onclick=function (e) {
			if (me._thumbnail_border7.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me._thumbnail_border7.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_tint7.appendChild(me._thumbnail_border7);
		me.__div.appendChild(me._thumbnail_tint7);
		el=me._thumbnail_visited7=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_visited7;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_visited7__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOmk9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVJbGx1c3RyYXRvci8xMC4wLyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpncmFwaD'+
			'0iaHR0cDovL25zLmFkb2JlLmNvbS9HcmFwaHMvMS4wLyIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAtMzcyMiAtMjYwNiAzMiAzMiIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB4bWxuczphPSJodHRwOi8vbnMuYWRvYmUuY29tL0Fkb2JlU1ZHVmlld2VyRXh0ZW5zaW9ucy8zLjAvIiB2aWV3Qm94PSItMzcyMiAtMjYwNiAzMiAzMiIgeG1sbnM6eD0iaHR0cDovL25zLmFkb2JlLmNvbS9FeHRlbnNpYmlsaXR5LzEuMC8iIHdpZHRoPSIzMnB4IiB5PSIwcHgiIGhlaWdodD0iMzJweCI+CiA8'+
			'ZyBpZD0iTGF5ZXJfMSIvPgogPGcgaWQ9IkViZW5lXzEiLz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPGc+CiAgICA8cGF0aCBkPSJNLTM2OTUuNDczLTI1OTguMTQ2Yy0wLjUxOS0wLjUxOS0xLjM2MS0wLjUxOS0xLjg3OSwwbC04Ljc4Nyw4Ljc4N2wtMi4yOTEtMi4yNDMgICAgIGMtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAyYy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OSAgICAgYzAuMzQsMCwwLjY4LTAuMTMsMC45NC0wLjM5bDkuNzE3LTkuNzE3Qy0zNjk0Ljk1NC0yNT'+
			'k2Ljc4NS0zNjk0Ljk1NC0yNTk3LjYyNi0zNjk1LjQ3My0yNTk4LjE0NnoiIGZpbGw9IiNGRkZGRkYiLz4KICAgIDxwYXRoIGQ9Ik0tMzY5OS45Ni0yNTgzLjgzN2gtMTIuMzI1di0xMi4zMjZoMTEuODIxbDIuMjUyLTIuMjUyYy0wLjE2Ni0wLjA4Ni0wLjM1Mi0wLjE0MS0wLjU1Mi0wLjE0MWgtMTQuNzE4ICAgICBjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgxNC43MThjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtMTAuNDAzICAgICBsLTIuMzkzLDIuMzkzVi0yNTgzLjgzN3oiIGZpbGw9IiNGRkZG'+
			'RkYiLz4KICAgPC9nPgogICA8ZyBvcGFjaXR5PSIwLjQiIGE6YWRvYmUtYmxlbmRpbmctbW9kZT0ibXVsdGlwbHkiPgogICAgPHBhdGggc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSIjMUExNzFCIiBhOmFkb2JlLWJsZW5kaW5nLW1vZGU9Im5vcm1hbCIgZD0iICAgICBNLTM2OTUuNDczLTI1OTguMTQ2Yy0wLjUxOS0wLjUxOS0xLjM2MS0wLjUxOS0xLjg3OSwwbC04Ljc4Nyw4Ljc4N2wtMi4yOTEtMi4yNDNjLTAuNTI1LTAuNTEzLTEuMzY2LTAuNTA0LTEuODgsMC4wMiAgICAgYy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC'+
			'41OTQsMC4zNzksMC45MywwLjM3OWMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxNyAgICAgQy0zNjk0Ljk1NC0yNTk2Ljc4NS0zNjk0Ljk1NC0yNTk3LjYyNi0zNjk1LjQ3My0yNTk4LjE0NnoiIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KICAgIDxwYXRoIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iIzFBMTcxQiIgYTphZG9iZS1ibGVuZGluZy1tb2RlPSJub3JtYWwiIGQ9IiAgICAgTS0zNjk5Ljk2LTI1ODMuODM3aC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAu'+
			'MzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MTggICAgIGMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NnYxNC43MTljMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2aDE0LjcxOGMwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2di0xMC40MDMgICAgIGwtMi4zOTMsMi4zOTNWLTI1ODMuODM3eiIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogICA8L2c+CiAgIDxnPgogICAgPHBhdGggZD0iTS0zNjk1LjQ3My0yNTk4LjE0NmMtMC41MTktMC41MTktMS4zNjEtMC41MTktMS44NzksMGwtOC43ODcsOC43ODdsLTIuMj'+
			'kxLTIuMjQzICAgICBjLTAuNTI1LTAuNTEzLTEuMzY2LTAuNTA0LTEuODgsMC4wMmMtMC41MTMsMC41MjUtMC41MDQsMS4zNjcsMC4wMjEsMS44OGwzLjIzLDMuMTYzYzAuMjU5LDAuMjUzLDAuNTk0LDAuMzc5LDAuOTMsMC4zNzkgICAgIGMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxN0MtMzY5NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6IiBmaWxsPSIjRkZGRkZGIi8+CiAgICA8cGF0aCBkPSJNLTM2OTkuOTYtMjU4My44MzdoLTEyLjMyNXYtMTIuMzI2aDExLjgyMWwyLjI1Mi0yLjI1MmMtMC4xNjYtMC4wODYtMC4zNTItMC4x'+
			'NDEtMC41NTItMC4xNDFoLTE0LjcxOCAgICAgYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2djE0LjcxOWMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMTQuNzE4YzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZ2LTEwLjQwMyAgICAgbC0yLjM5MywyLjM5M1YtMjU4My44Mzd6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDwvZz4KICAgPGc+CiAgICA8cGF0aCBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9IiMxQTE3MUIiIGQ9Ik0tMzY5NS40NzMtMjU5OC4xNDYgICAgIGMtMC41MTktMC41MTktMS4zNjEtMC41MTktMS44NzksMGwtOC43ODcsOC43ODdsLTIuMj'+
			'kxLTIuMjQzYy0wLjUyNS0wLjUxMy0xLjM2Ni0wLjUwNC0xLjg4LDAuMDIgICAgIGMtMC41MTMsMC41MjUtMC41MDQsMS4zNjcsMC4wMjEsMS44OGwzLjIzLDMuMTYzYzAuMjU5LDAuMjUzLDAuNTk0LDAuMzc5LDAuOTMsMC4zNzljMC4zNCwwLDAuNjgtMC4xMywwLjk0LTAuMzlsOS43MTctOS43MTcgICAgIEMtMzY5NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6IiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjAuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiAgICA8cGF0aCBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9IiMxQTE3MUIi'+
			'IGQ9Ik0tMzY5OS45Ni0yNTgzLjgzNyAgICAgaC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAuMzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MThjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5ICAgICBjMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2aDE0LjcxOGMwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2di0xMC40MDNsLTIuMzkzLDIuMzkzVi0yNTgzLjgzN3oiIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KICAgPC9nPgogIDwvZz4KIDwvZz4KPC9zdm'+
			'c+Cg==';
		me._thumbnail_visited7__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_visited";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg glow";
		el.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 8px;';
		hs+='top : 6px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_visited7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_visited7.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._thumbnail_visited7.ggElementNodeId()) == true)) || 
				((me._thumbnail_visited7.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_visited7.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_visited7.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_visited7.style.transition='';
				if (me._thumbnail_visited7.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_visited7.style.visibility=(Number(me._thumbnail_visited7.style.opacity)>0||!me._thumbnail_visited7.style.opacity)?'inherit':'hidden';
					me._thumbnail_visited7.ggVisible=true;
				}
				else {
					me._thumbnail_visited7.style.visibility="hidden";
					me._thumbnail_visited7.ggVisible=false;
				}
			}
		}
		me._thumbnail_visited7.logicBlock_visible();
		me._thumbnail_visited7.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._thumbnail_visited7);
		me._thumbnail_tint7.logicBlock_backgroundcolor();
		me._thumbnail_tint7.logicBlock_bordercolor();
		me._thumbnail_tint7.logicBlock_borderwidth();
		me.elementMouseOver['thumbnail_tint7']=false;
		me._thumbnail_border7.logicBlock_alpha();
		me._thumbnail_visited7.logicBlock_visible();
			me.ggEvent_changenode=function(event) {
				me._thumbnail_tint7.logicBlock_bordercolor();
				me._thumbnail_tint7.logicBlock_borderwidth();
				me._thumbnail_visited7.logicBlock_visible();
				me._thumbnail_visited7.logicBlock_visible();
			};
			me.ggEvent_changevisitednodes=function(event) {
				me._thumbnail_visited7.logicBlock_visible();
			};
	};
	function SkinCloner_view_cloner_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._thumbnail_title7=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_title7;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_title7__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumbnail_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text hepta_slab";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -30px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 22px;';
		hs+='left : calc(50% - ((180px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 180px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._thumbnail_title7.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._thumbnail_title7.ggUpdateText();
		player.addListener('changenode', function() {
			me._thumbnail_title7.ggUpdateText();
		});
		el.appendChild(els);
		me._thumbnail_title7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_title7.onclick=function (e) {
			if (me._thumbnail_title7.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me._thumbnail_title7.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._thumbnail_title7);
		el=me._thumbnail_image8=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_image8;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_image8__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/thumbnail_image4_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 100px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 180px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_image8.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_image8.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._thumbnail_image8);
		el=me._thumbnail_tint8=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_tint8;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="thumbnail_tint";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='border-color : #ffffff;';
		hs+='border-style : solid;';
		hs+='border-width : 2px 2px 2px 2px;';
		hs+='cursor : default;';
		hs+='height : 100px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 180px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_tint8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_tint8.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['thumbnail_tint8'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._thumbnail_tint8.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._thumbnail_tint8.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._thumbnail_tint8.style.transition='background-color 100ms ease 0ms, border-color 0s, border-width 0s';
				if (me._thumbnail_tint8.ggCurrentLogicStateBackgroundColor == 0) {
					me._thumbnail_tint8.style.backgroundColor="rgba(0,0,0,0.313726)";
				}
				else {
					me._thumbnail_tint8.style.backgroundColor="rgba(0,0,0,0)";
				}
			}
		}
		me._thumbnail_tint8.logicBlock_backgroundcolor();
		me._thumbnail_tint8.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me._thumbnail_tint8.ggIsActive() == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				((me.elementMouseOver['thumbnail_tint8'] == true))
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._thumbnail_tint8.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._thumbnail_tint8.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._thumbnail_tint8.style.transition='background-color 100ms ease 0ms, border-color 0s, border-width 0s';
				if (me._thumbnail_tint8.ggCurrentLogicStateBorderColor == 0) {
					me._thumbnail_tint8.style.borderColor="rgba(255,85,0,1)";
				}
				else if (me._thumbnail_tint8.ggCurrentLogicStateBorderColor == 1) {
					me._thumbnail_tint8.style.borderColor="rgba(170,255,0,1)";
				}
				else {
					me._thumbnail_tint8.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me._thumbnail_tint8.logicBlock_bordercolor();
		me._thumbnail_tint8.logicBlock_borderwidth = function() {
			var newLogicStateBorderWidth;
			if (
				((me._thumbnail_tint8.ggIsActive() == true))
			)
			{
				newLogicStateBorderWidth = 0;
			}
			else {
				newLogicStateBorderWidth = -1;
			}
			if (me._thumbnail_tint8.ggCurrentLogicStateBorderWidth != newLogicStateBorderWidth) {
				me._thumbnail_tint8.ggCurrentLogicStateBorderWidth = newLogicStateBorderWidth;
				me._thumbnail_tint8.style.transition='background-color 100ms ease 0ms, border-color 0s, border-width 0s';
				if (me._thumbnail_tint8.ggCurrentLogicStateBorderWidth == 0) {
					me._thumbnail_tint8.style.borderWidth="3px 3px 3px 3px";
				}
				else {
					me._thumbnail_tint8.style.borderWidth="2px 2px 2px 2px";
				}
			}
		}
		me._thumbnail_tint8.logicBlock_borderwidth();
		me._thumbnail_tint8.onclick=function (e) {
			if (me._thumbnail_tint8.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me._thumbnail_tint8.onmouseenter=function (e) {
			me.elementMouseOver['thumbnail_tint8']=true;
			me._thumbnail_border8.logicBlock_alpha();
			me._thumbnail_tint8.logicBlock_backgroundcolor();
			me._thumbnail_tint8.logicBlock_bordercolor();
		}
		me._thumbnail_tint8.onmouseleave=function (e) {
			me.elementMouseOver['thumbnail_tint8']=false;
			me._thumbnail_border8.logicBlock_alpha();
			me._thumbnail_tint8.logicBlock_backgroundcolor();
			me._thumbnail_tint8.logicBlock_bordercolor();
		}
		me._thumbnail_tint8.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnail_border8=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_border8;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="thumbnail_border";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 10;';
		hs+='background : rgba(0,0,0,0);';
		hs+='border : 0px solid #c2e812;';
		hs+='cursor : pointer;';
		hs+='height : 100px;';
		hs+='left : -2px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -2px;';
		hs+='visibility : hidden;';
		hs+='width : 180px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_border8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_border8.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['thumbnail_tint8'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_border8.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_border8.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_border8.style.transition='opacity 100ms ease 0ms';
				if (me._thumbnail_border8.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_border8.style.visibility=me._thumbnail_border8.ggVisible?'inherit':'hidden';
					me._thumbnail_border8.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._thumbnail_border8.style.opacity == 0.0) { me._thumbnail_border8.style.visibility="hidden"; } }, 105);
					me._thumbnail_border8.style.opacity=0;
				}
			}
		}
		me._thumbnail_border8.logicBlock_alpha();
		me._thumbnail_border8.onclick=function (e) {
			if (me._thumbnail_border8.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me._thumbnail_border8.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_tint8.appendChild(me._thumbnail_border8);
		me.__div.appendChild(me._thumbnail_tint8);
		el=me._thumbnail_visited8=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_visited8;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_visited8__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOmk9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVJbGx1c3RyYXRvci8xMC4wLyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpncmFwaD'+
			'0iaHR0cDovL25zLmFkb2JlLmNvbS9HcmFwaHMvMS4wLyIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAtMzcyMiAtMjYwNiAzMiAzMiIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB4bWxuczphPSJodHRwOi8vbnMuYWRvYmUuY29tL0Fkb2JlU1ZHVmlld2VyRXh0ZW5zaW9ucy8zLjAvIiB2aWV3Qm94PSItMzcyMiAtMjYwNiAzMiAzMiIgeG1sbnM6eD0iaHR0cDovL25zLmFkb2JlLmNvbS9FeHRlbnNpYmlsaXR5LzEuMC8iIHdpZHRoPSIzMnB4IiB5PSIwcHgiIGhlaWdodD0iMzJweCI+CiA8'+
			'ZyBpZD0iTGF5ZXJfMSIvPgogPGcgaWQ9IkViZW5lXzEiLz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPGc+CiAgICA8cGF0aCBkPSJNLTM2OTUuNDczLTI1OTguMTQ2Yy0wLjUxOS0wLjUxOS0xLjM2MS0wLjUxOS0xLjg3OSwwbC04Ljc4Nyw4Ljc4N2wtMi4yOTEtMi4yNDMgICAgIGMtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAyYy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OSAgICAgYzAuMzQsMCwwLjY4LTAuMTMsMC45NC0wLjM5bDkuNzE3LTkuNzE3Qy0zNjk0Ljk1NC0yNT'+
			'k2Ljc4NS0zNjk0Ljk1NC0yNTk3LjYyNi0zNjk1LjQ3My0yNTk4LjE0NnoiIGZpbGw9IiNGRkZGRkYiLz4KICAgIDxwYXRoIGQ9Ik0tMzY5OS45Ni0yNTgzLjgzN2gtMTIuMzI1di0xMi4zMjZoMTEuODIxbDIuMjUyLTIuMjUyYy0wLjE2Ni0wLjA4Ni0wLjM1Mi0wLjE0MS0wLjU1Mi0wLjE0MWgtMTQuNzE4ICAgICBjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgxNC43MThjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtMTAuNDAzICAgICBsLTIuMzkzLDIuMzkzVi0yNTgzLjgzN3oiIGZpbGw9IiNGRkZG'+
			'RkYiLz4KICAgPC9nPgogICA8ZyBvcGFjaXR5PSIwLjQiIGE6YWRvYmUtYmxlbmRpbmctbW9kZT0ibXVsdGlwbHkiPgogICAgPHBhdGggc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSIjMUExNzFCIiBhOmFkb2JlLWJsZW5kaW5nLW1vZGU9Im5vcm1hbCIgZD0iICAgICBNLTM2OTUuNDczLTI1OTguMTQ2Yy0wLjUxOS0wLjUxOS0xLjM2MS0wLjUxOS0xLjg3OSwwbC04Ljc4Nyw4Ljc4N2wtMi4yOTEtMi4yNDNjLTAuNTI1LTAuNTEzLTEuMzY2LTAuNTA0LTEuODgsMC4wMiAgICAgYy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC'+
			'41OTQsMC4zNzksMC45MywwLjM3OWMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxNyAgICAgQy0zNjk0Ljk1NC0yNTk2Ljc4NS0zNjk0Ljk1NC0yNTk3LjYyNi0zNjk1LjQ3My0yNTk4LjE0NnoiIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KICAgIDxwYXRoIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iIzFBMTcxQiIgYTphZG9iZS1ibGVuZGluZy1tb2RlPSJub3JtYWwiIGQ9IiAgICAgTS0zNjk5Ljk2LTI1ODMuODM3aC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAu'+
			'MzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MTggICAgIGMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NnYxNC43MTljMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2aDE0LjcxOGMwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2di0xMC40MDMgICAgIGwtMi4zOTMsMi4zOTNWLTI1ODMuODM3eiIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogICA8L2c+CiAgIDxnPgogICAgPHBhdGggZD0iTS0zNjk1LjQ3My0yNTk4LjE0NmMtMC41MTktMC41MTktMS4zNjEtMC41MTktMS44NzksMGwtOC43ODcsOC43ODdsLTIuMj'+
			'kxLTIuMjQzICAgICBjLTAuNTI1LTAuNTEzLTEuMzY2LTAuNTA0LTEuODgsMC4wMmMtMC41MTMsMC41MjUtMC41MDQsMS4zNjcsMC4wMjEsMS44OGwzLjIzLDMuMTYzYzAuMjU5LDAuMjUzLDAuNTk0LDAuMzc5LDAuOTMsMC4zNzkgICAgIGMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxN0MtMzY5NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6IiBmaWxsPSIjRkZGRkZGIi8+CiAgICA8cGF0aCBkPSJNLTM2OTkuOTYtMjU4My44MzdoLTEyLjMyNXYtMTIuMzI2aDExLjgyMWwyLjI1Mi0yLjI1MmMtMC4xNjYtMC4wODYtMC4zNTItMC4x'+
			'NDEtMC41NTItMC4xNDFoLTE0LjcxOCAgICAgYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2djE0LjcxOWMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMTQuNzE4YzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZ2LTEwLjQwMyAgICAgbC0yLjM5MywyLjM5M1YtMjU4My44Mzd6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDwvZz4KICAgPGc+CiAgICA8cGF0aCBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9IiMxQTE3MUIiIGQ9Ik0tMzY5NS40NzMtMjU5OC4xNDYgICAgIGMtMC41MTktMC41MTktMS4zNjEtMC41MTktMS44NzksMGwtOC43ODcsOC43ODdsLTIuMj'+
			'kxLTIuMjQzYy0wLjUyNS0wLjUxMy0xLjM2Ni0wLjUwNC0xLjg4LDAuMDIgICAgIGMtMC41MTMsMC41MjUtMC41MDQsMS4zNjcsMC4wMjEsMS44OGwzLjIzLDMuMTYzYzAuMjU5LDAuMjUzLDAuNTk0LDAuMzc5LDAuOTMsMC4zNzljMC4zNCwwLDAuNjgtMC4xMywwLjk0LTAuMzlsOS43MTctOS43MTcgICAgIEMtMzY5NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6IiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjAuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiAgICA8cGF0aCBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9IiMxQTE3MUIi'+
			'IGQ9Ik0tMzY5OS45Ni0yNTgzLjgzNyAgICAgaC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAuMzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MThjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5ICAgICBjMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2aDE0LjcxOGMwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2di0xMC40MDNsLTIuMzkzLDIuMzkzVi0yNTgzLjgzN3oiIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KICAgPC9nPgogIDwvZz4KIDwvZz4KPC9zdm'+
			'c+Cg==';
		me._thumbnail_visited8__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_visited";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg glow";
		el.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 8px;';
		hs+='top : 6px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_visited8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_visited8.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._thumbnail_visited8.ggElementNodeId()) == true)) || 
				((me._thumbnail_visited8.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_visited8.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_visited8.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_visited8.style.transition='';
				if (me._thumbnail_visited8.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_visited8.style.visibility=(Number(me._thumbnail_visited8.style.opacity)>0||!me._thumbnail_visited8.style.opacity)?'inherit':'hidden';
					me._thumbnail_visited8.ggVisible=true;
				}
				else {
					me._thumbnail_visited8.style.visibility="hidden";
					me._thumbnail_visited8.ggVisible=false;
				}
			}
		}
		me._thumbnail_visited8.logicBlock_visible();
		me._thumbnail_visited8.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._thumbnail_visited8);
		me._thumbnail_tint8.logicBlock_backgroundcolor();
		me._thumbnail_tint8.logicBlock_bordercolor();
		me._thumbnail_tint8.logicBlock_borderwidth();
		me.elementMouseOver['thumbnail_tint8']=false;
		me._thumbnail_border8.logicBlock_alpha();
		me._thumbnail_visited8.logicBlock_visible();
			me.ggEvent_changenode=function(event) {
				me._thumbnail_tint8.logicBlock_bordercolor();
				me._thumbnail_tint8.logicBlock_borderwidth();
				me._thumbnail_visited8.logicBlock_visible();
				me._thumbnail_visited8.logicBlock_visible();
			};
			me.ggEvent_changevisitednodes=function(event) {
				me._thumbnail_visited8.logicBlock_visible();
			};
	};
	function SkinElement_map_pin_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeid=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me._map_pin=document.createElement('div');
		el.ggId="map_pin";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #4fb5c2;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_pin.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._map_pin.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['map_pin'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin.style.transition='transform 200ms ease 0ms, background-color 0s';
				if (me._map_pin.ggCurrentLogicStateScaling == 0) {
					me._map_pin.ggParameter.sx = 1.3;
					me._map_pin.ggParameter.sy = 1.3;
					me._map_pin.style.transform=parameterToTransform(me._map_pin.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin);}, 250);
				}
				else {
					me._map_pin.ggParameter.sx = 1;
					me._map_pin.ggParameter.sy = 1;
					me._map_pin.style.transform=parameterToTransform(me._map_pin.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin);}, 250);
				}
			}
		}
		me._map_pin.logicBlock_scaling();
		me._map_pin.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me._map_pin.ggIsActive() == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._map_pin.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._map_pin.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._map_pin.style.transition='transform 200ms ease 0ms, background-color 0s';
				if (me._map_pin.ggCurrentLogicStateBackgroundColor == 0) {
					me._map_pin.style.backgroundColor="rgba(255,0,0,1)";
				}
				else {
					me._map_pin.style.backgroundColor="rgba(79,181,194,1)";
				}
			}
		}
		me._map_pin.logicBlock_backgroundcolor();
		me._map_pin.onclick=function (e) {
			player.openNext("{"+me.ggNodeId+"}","");
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_floorplan', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_map', false);
			}
		}
		me._map_pin.onmouseenter=function (e) {
				skin._map_node_title.ggUpdateText=function() {
					var params = [];
					params.push(String(player._(me.ggUserdata.title)));
					var hs = player._("%1", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			skin._map_node_title.ggUpdateText();
			skin._map_node_title.ggTextDiv.scrollTop = 0;
				skin._map_node_description.ggUpdateText=function() {
					var params = [];
					params.push(String(player._(me.ggUserdata.description)));
					var hs = player._("%1", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			skin._map_node_description.ggUpdateText();
			skin._map_node_description.ggTextDiv.scrollTop = 0;
			me.elementMouseOver['map_pin']=true;
			me._map_pin_icon.logicBlock_visible();
			me._map_pin_icon_active.logicBlock_visible();
			me._map_pin.logicBlock_scaling();
		}
		me._map_pin.onmouseleave=function (e) {
			skin._reset_info.onclick.call(skin._reset_info);
			me.elementMouseOver['map_pin']=false;
			me._map_pin_icon.logicBlock_visible();
			me._map_pin_icon_active.logicBlock_visible();
			me._map_pin.logicBlock_scaling();
		}
		me._map_pin.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_pin_icon=document.createElement('div');
		els=me._map_pin_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSJub25lIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIzMiIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci1tYXAtcGluIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGhlaWdodD0iMzIiIHN0cm9rZS13aWR0aD0iMSI+CiA8cGF0aCBkPSJNMjEgMTBjMCA3LTkgMTMtOSAxM3MtOS02LTktMTNhOSA5IDAgMCAxIDE4IDB6Ii8+CiA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEwIiByPSIzIi8+Cjwvc3ZnPgo=';
		me._map_pin_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_pin_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_icon.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['map_pin'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_pin_icon.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_pin_icon.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_pin_icon.style.transition='';
				if (me._map_pin_icon.ggCurrentLogicStateVisible == 0) {
					me._map_pin_icon.style.visibility="hidden";
					me._map_pin_icon.ggVisible=false;
				}
				else {
					me._map_pin_icon.style.visibility=(Number(me._map_pin_icon.style.opacity)>0||!me._map_pin_icon.style.opacity)?'inherit':'hidden';
					me._map_pin_icon.ggVisible=true;
				}
			}
		}
		me._map_pin_icon.logicBlock_visible();
		me._map_pin_icon.ggUpdatePosition=function (useTransition) {
		}
		me._map_pin.appendChild(me._map_pin_icon);
		el=me._map_pin_icon_active=document.createElement('div');
		els=me._map_pin_icon_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzIgMzI7IiB2aWV3Qm94PSIwIDAgMzIgMzIiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MS4zMzMzO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo1LjMzMzM7fSYjeGQ7Cjwvc3R5bGU+CiA8cGF0aCBkPSJNMjgsMTMuM2MwLDkuMy0xMiwxNy4zLTEyLDE3LjNzLTEyLTgtMTItMTcuM2MwLTYuNiw1LjQtMTIsMTItMTJTMjgsNi43LDI4LDEzLjN6IiBjbGFzcz0ic3QwIi8+CiA8Y2lyY2xlIGN4PSIxNiIgY3k9IjEzLjMiIGNsYXNzPSJzdDAiIHI9IjQiLz4KPC9zdmc+Cg==';
		me._map_pin_icon_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_icon_active";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_pin_icon_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_icon_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['map_pin'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_pin_icon_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_pin_icon_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_pin_icon_active.style.transition='';
				if (me._map_pin_icon_active.ggCurrentLogicStateVisible == 0) {
					me._map_pin_icon_active.style.visibility=(Number(me._map_pin_icon_active.style.opacity)>0||!me._map_pin_icon_active.style.opacity)?'inherit':'hidden';
					me._map_pin_icon_active.ggVisible=true;
				}
				else {
					me._map_pin_icon_active.style.visibility="hidden";
					me._map_pin_icon_active.ggVisible=false;
				}
			}
		}
		me._map_pin_icon_active.logicBlock_visible();
		me._map_pin_icon_active.ggUpdatePosition=function (useTransition) {
		}
		me._map_pin.appendChild(me._map_pin_icon_active);
		me._map_pin.logicBlock_scaling();
		me._map_pin.logicBlock_backgroundcolor();
		me.elementMouseOver['map_pin']=false;
		me._map_pin_icon.logicBlock_visible();
		me._map_pin_icon_active.logicBlock_visible();
			me.ggEvent_changenode=function() {
				me._map_pin.logicBlock_backgroundcolor();
			};
	};
	function SkinHotspotClass_ht_node_daynight(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node_daynight=document.createElement('div');
		el.ggId="ht_node_Day&Night";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 75px;';
		hs+='position : absolute;';
		hs+='top : 170px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		hs+='transform-style: preserve-3d;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_daynight.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node_daynight.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_daynight.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_daynight.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node_daynight']=true;
			me._chevron_white.logicBlock_alpha();
			me._hs_preview_image.logicBlock_alpha();
			me._tt_ht_3d.logicBlock_visible();
			me._text_.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_daynight.onmouseleave=function (e) {
			me.elementMouseOver['ht_node_daynight']=false;
			me._chevron_white.logicBlock_alpha();
			me._hs_preview_image.logicBlock_alpha();
			me._tt_ht_3d.logicBlock_visible();
			me._text_.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht_node_daynight.ggUpdatePosition=function (useTransition) {
		}
		el=me._chevron_white=document.createElement('div');
		els=me._chevron_white__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._chevron_white__img.setAttribute('src',basePath + 'images/chevron_white.svg');
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._chevron_white__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._chevron_white__imgo.setAttribute('src',basePath + 'images/chevron_white__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="chevron_white";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='opacity : 0.70003;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		hs+='transform:translate3d(0px,0px,1px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._chevron_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_white.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._chevron_white.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._chevron_white.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._chevron_white.style.transition='transform 0s, opacity 500ms ease 0ms';
				if (me._chevron_white.ggCurrentLogicStateScaling == 0) {
					me._chevron_white.ggParameter.sx = 0.5;
					me._chevron_white.ggParameter.sy = 0.5;
					me._chevron_white.style.transform=parameterToTransform(me._chevron_white.ggParameter);
					skin.updateSize(me._chevron_white);
				}
				else {
					me._chevron_white.ggParameter.sx = 1;
					me._chevron_white.ggParameter.sy = 1;
					me._chevron_white.style.transform=parameterToTransform(me._chevron_white.ggParameter);
					skin.updateSize(me._chevron_white);
				}
			}
		}
		me._chevron_white.logicBlock_scaling();
		me._chevron_white.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._chevron_white.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._chevron_white.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._chevron_white.style.transition='transform 0s, opacity 500ms ease 0ms';
				if (me._chevron_white.ggCurrentLogicStateVisible == 0) {
					me._chevron_white.style.visibility="hidden";
					me._chevron_white.ggVisible=false;
				}
				else {
					me._chevron_white.style.visibility=(Number(me._chevron_white.style.opacity)>0||!me._chevron_white.style.opacity)?'inherit':'hidden';
					me._chevron_white.ggVisible=true;
				}
			}
		}
		me._chevron_white.logicBlock_visible();
		me._chevron_white.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node_daynight'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_white.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_white.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_white.style.transition='transform 0s, opacity 500ms ease 0ms';
				if (me._chevron_white.ggCurrentLogicStateAlpha == 0) {
					me._chevron_white.style.visibility=me._chevron_white.ggVisible?'inherit':'hidden';
					me._chevron_white.style.opacity=1;
				}
				else {
					me._chevron_white.style.visibility=me._chevron_white.ggVisible?'inherit':'hidden';
					me._chevron_white.style.opacity=0.70003;
				}
			}
		}
		me._chevron_white.logicBlock_alpha();
		me._chevron_white.onmouseenter=function (e) {
			me._chevron_white__img.style.visibility='hidden';
			me._chevron_white__imgo.style.visibility='inherit';
			me.elementMouseOver['chevron_white']=true;
		}
		me._chevron_white.onmouseleave=function (e) {
			me._chevron_white__img.style.visibility='inherit';
			me._chevron_white__imgo.style.visibility='hidden';
			me.elementMouseOver['chevron_white']=false;
		}
		me._chevron_white.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_daynight.appendChild(me._chevron_white);
		el=me._hs_preview_image=document.createElement('div');
		els=me._hs_preview_image__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/hs_preview_image_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hs_preview_image";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='z-index: -5;';
		hs+='height : 90px;';
		hs+='left : calc(50% - ((140px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -100px;';
		hs+='visibility : hidden;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		hs+='\/* \u8a2d\u5b9a\u7e2e\u5716\u9810\u89bd\u7684\u6a23\u5f0f *\/ border-radius: 5px; \/* \u5713\u89d2\u6548\u679c *\/ overflow: hidden; \/* \u96b1\u85cf\u6ea2\u51fa\u5167\u5bb9 *\/ box-shadow: 0px 0px 2px #ffffff; \/* \u767d\u8272\u9670\u5f71\u6548\u679c *\/ transform: translate(0px, 0px); \/* \u53bb\u96643D\u8b8a\u63db *\/ scale(1.5); \/* \u653e\u5927\u7e2e\u5716 *\/ -webkit-backface-visibility: hidden; backface-visibility: hidden;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hs_preview_image.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._hs_preview_image.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node_daynight'] == true)) && 
				((player.getVariableValue('opt_3d_preview_1') == true)) && 
				((player.getIsTour() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hs_preview_image.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hs_preview_image.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hs_preview_image.style.transition='opacity 500ms ease 0ms';
				if (me._hs_preview_image.ggCurrentLogicStateAlpha == 0) {
					me._hs_preview_image.style.visibility=me._hs_preview_image.ggVisible?'inherit':'hidden';
					me._hs_preview_image.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._hs_preview_image.style.opacity == 0.0) { me._hs_preview_image.style.visibility="hidden"; } }, 505);
					me._hs_preview_image.style.opacity=0;
				}
			}
		}
		me._hs_preview_image.logicBlock_alpha();
		me._hs_preview_image.ggUpdatePosition=function (useTransition) {
		}
		el=me._hs_tt=document.createElement('div');
		els=me._hs_tt__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="hs_tt";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,0,0,0.196078);';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((140px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 1px 1px 2px #000000;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='pointer-events: none;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._hs_tt.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._hs_tt.ggUpdateText();
		player.addListener('changenode', function() {
			me._hs_tt.ggUpdateText();
		});
		el.appendChild(els);
		me._hs_tt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_tt.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.hotspot.title) == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_tt.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_tt.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_tt.style.transition='';
				if (me._hs_tt.ggCurrentLogicStateVisible == 0) {
					me._hs_tt.style.visibility="hidden";
					me._hs_tt.ggVisible=false;
				}
				else {
					me._hs_tt.style.visibility=(Number(me._hs_tt.style.opacity)>0||!me._hs_tt.style.opacity)?'inherit':'hidden';
					me._hs_tt.ggVisible=true;
				}
			}
		}
		me._hs_tt.logicBlock_visible();
		me._hs_tt.ggUpdatePosition=function (useTransition) {
		}
		me._hs_preview_image.appendChild(me._hs_tt);
		el=me._ht_checkmark_tick=document.createElement('div');
		els=me._ht_checkmark_tick__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOmk9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVJbGx1c3RyYXRvci8xMC4wLyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpncmFwaD'+
			'0iaHR0cDovL25zLmFkb2JlLmNvbS9HcmFwaHMvMS4wLyIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAtMzcyMiAtMjYwNiAzMiAzMiIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB4bWxuczphPSJodHRwOi8vbnMuYWRvYmUuY29tL0Fkb2JlU1ZHVmlld2VyRXh0ZW5zaW9ucy8zLjAvIiB2aWV3Qm94PSItMzcyMiAtMjYwNiAzMiAzMiIgeG1sbnM6eD0iaHR0cDovL25zLmFkb2JlLmNvbS9FeHRlbnNpYmlsaXR5LzEuMC8iIHdpZHRoPSIzMnB4IiB5PSIwcHgiIGhlaWdodD0iMzJweCI+CiA8'+
			'ZyBpZD0iTGF5ZXJfMSIvPgogPGcgaWQ9IkViZW5lXzEiLz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPGc+CiAgICA8cGF0aCBkPSJNLTM2OTUuNDczLTI1OTguMTQ2Yy0wLjUxOS0wLjUxOS0xLjM2MS0wLjUxOS0xLjg3OSwwbC04Ljc4Nyw4Ljc4N2wtMi4yOTEtMi4yNDMgICAgIGMtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAyYy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OSAgICAgYzAuMzQsMCwwLjY4LTAuMTMsMC45NC0wLjM5bDkuNzE3LTkuNzE3Qy0zNjk0Ljk1NC0yNT'+
			'k2Ljc4NS0zNjk0Ljk1NC0yNTk3LjYyNi0zNjk1LjQ3My0yNTk4LjE0NnoiIGZpbGw9IiNGRkZGRkYiLz4KICAgIDxwYXRoIGQ9Ik0tMzY5OS45Ni0yNTgzLjgzN2gtMTIuMzI1di0xMi4zMjZoMTEuODIxbDIuMjUyLTIuMjUyYy0wLjE2Ni0wLjA4Ni0wLjM1Mi0wLjE0MS0wLjU1Mi0wLjE0MWgtMTQuNzE4ICAgICBjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgxNC43MThjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtMTAuNDAzICAgICBsLTIuMzkzLDIuMzkzVi0yNTgzLjgzN3oiIGZpbGw9IiNGRkZG'+
			'RkYiLz4KICAgPC9nPgogICA8ZyBvcGFjaXR5PSIwLjQiIGE6YWRvYmUtYmxlbmRpbmctbW9kZT0ibXVsdGlwbHkiPgogICAgPHBhdGggc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSIjMUExNzFCIiBhOmFkb2JlLWJsZW5kaW5nLW1vZGU9Im5vcm1hbCIgZD0iICAgICBNLTM2OTUuNDczLTI1OTguMTQ2Yy0wLjUxOS0wLjUxOS0xLjM2MS0wLjUxOS0xLjg3OSwwbC04Ljc4Nyw4Ljc4N2wtMi4yOTEtMi4yNDNjLTAuNTI1LTAuNTEzLTEuMzY2LTAuNTA0LTEuODgsMC4wMiAgICAgYy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC'+
			'41OTQsMC4zNzksMC45MywwLjM3OWMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxNyAgICAgQy0zNjk0Ljk1NC0yNTk2Ljc4NS0zNjk0Ljk1NC0yNTk3LjYyNi0zNjk1LjQ3My0yNTk4LjE0NnoiIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KICAgIDxwYXRoIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iIzFBMTcxQiIgYTphZG9iZS1ibGVuZGluZy1tb2RlPSJub3JtYWwiIGQ9IiAgICAgTS0zNjk5Ljk2LTI1ODMuODM3aC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAu'+
			'MzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MTggICAgIGMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NnYxNC43MTljMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2aDE0LjcxOGMwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2di0xMC40MDMgICAgIGwtMi4zOTMsMi4zOTNWLTI1ODMuODM3eiIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogICA8L2c+CiAgIDxnPgogICAgPHBhdGggZD0iTS0zNjk1LjQ3My0yNTk4LjE0NmMtMC41MTktMC41MTktMS4zNjEtMC41MTktMS44NzksMGwtOC43ODcsOC43ODdsLTIuMj'+
			'kxLTIuMjQzICAgICBjLTAuNTI1LTAuNTEzLTEuMzY2LTAuNTA0LTEuODgsMC4wMmMtMC41MTMsMC41MjUtMC41MDQsMS4zNjcsMC4wMjEsMS44OGwzLjIzLDMuMTYzYzAuMjU5LDAuMjUzLDAuNTk0LDAuMzc5LDAuOTMsMC4zNzkgICAgIGMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxN0MtMzY5NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6IiBmaWxsPSIjRkZGRkZGIi8+CiAgICA8cGF0aCBkPSJNLTM2OTkuOTYtMjU4My44MzdoLTEyLjMyNXYtMTIuMzI2aDExLjgyMWwyLjI1Mi0yLjI1MmMtMC4xNjYtMC4wODYtMC4zNTItMC4x'+
			'NDEtMC41NTItMC4xNDFoLTE0LjcxOCAgICAgYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2djE0LjcxOWMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMTQuNzE4YzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZ2LTEwLjQwMyAgICAgbC0yLjM5MywyLjM5M1YtMjU4My44Mzd6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDwvZz4KICAgPGc+CiAgICA8cGF0aCBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9IiMxQTE3MUIiIGQ9Ik0tMzY5NS40NzMtMjU5OC4xNDYgICAgIGMtMC41MTktMC41MTktMS4zNjEtMC41MTktMS44NzksMGwtOC43ODcsOC43ODdsLTIuMj'+
			'kxLTIuMjQzYy0wLjUyNS0wLjUxMy0xLjM2Ni0wLjUwNC0xLjg4LDAuMDIgICAgIGMtMC41MTMsMC41MjUtMC41MDQsMS4zNjcsMC4wMjEsMS44OGwzLjIzLDMuMTYzYzAuMjU5LDAuMjUzLDAuNTk0LDAuMzc5LDAuOTMsMC4zNzljMC4zNCwwLDAuNjgtMC4xMywwLjk0LTAuMzlsOS43MTctOS43MTcgICAgIEMtMzY5NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6IiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjAuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiAgICA8cGF0aCBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9IiMxQTE3MUIi'+
			'IGQ9Ik0tMzY5OS45Ni0yNTgzLjgzNyAgICAgaC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAuMzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MThjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5ICAgICBjMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2aDE0LjcxOGMwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2di0xMC40MDNsLTIuMzkzLDIuMzkzVi0yNTgzLjgzN3oiIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KICAgPC9nPgogIDwvZz4KIDwvZz4KPC9zdm'+
			'c+Cg==';
		me._ht_checkmark_tick__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_checkmark_tick";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_checkmark_tick.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_checkmark_tick.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._ht_checkmark_tick.ggElementNodeId()) == true)) || 
				((me._ht_checkmark_tick.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_checkmark_tick.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_checkmark_tick.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_checkmark_tick.style.transition='';
				if (me._ht_checkmark_tick.ggCurrentLogicStateVisible == 0) {
					me._ht_checkmark_tick.style.visibility=(Number(me._ht_checkmark_tick.style.opacity)>0||!me._ht_checkmark_tick.style.opacity)?'inherit':'hidden';
					me._ht_checkmark_tick.ggVisible=true;
				}
				else {
					me._ht_checkmark_tick.style.visibility="hidden";
					me._ht_checkmark_tick.ggVisible=false;
				}
			}
		}
		me._ht_checkmark_tick.logicBlock_visible();
		me._ht_checkmark_tick.ggUpdatePosition=function (useTransition) {
		}
		me._hs_preview_image.appendChild(me._ht_checkmark_tick);
		me._ht_node_daynight.appendChild(me._hs_preview_image);
		el=me._ht_node_customimage=document.createElement('div');
		els=me._ht_node_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_node_customimage.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_node_customimage.ggSubElement.setAttribute('alt', player._(me._ht_node_customimage.ggAltText));
			me._ht_node_customimage.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_node_customimage.ggText_untranslated = img;
			me._ht_node_customimage.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_node_customimage.ggSubElement.style.width = '0px';
			me._ht_node_customimage.ggSubElement.style.height = '0px';
			me._ht_node_customimage.ggSubElement.src='';
			me._ht_node_customimage.ggSubElement.src=me._ht_node_customimage.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_node_customimage.ggText != player._(me._ht_node_customimage.ggText_untranslated)) {
				me._ht_node_customimage.ggText = player._(me._ht_node_customimage.ggText_untranslated);
				me._ht_node_customimage.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_node_CustomImage";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -145px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_customimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_customimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_customimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_customimage.style.transition='';
				if (me._ht_node_customimage.ggCurrentLogicStateVisible == 0) {
					me._ht_node_customimage.style.visibility="hidden";
					me._ht_node_customimage.ggSubElement.src='';
					me._ht_node_customimage.ggVisible=false;
				}
				else {
					me._ht_node_customimage.style.visibility=(Number(me._ht_node_customimage.style.opacity)>0||!me._ht_node_customimage.style.opacity)?'inherit':'hidden';
					me._ht_node_customimage.ggSubElement.src=me._ht_node_customimage.ggText;
					me._ht_node_customimage.ggVisible=true;
				}
			}
		}
		me._ht_node_customimage.logicBlock_visible();
		me._ht_node_customimage.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_node_customimage.clientWidth;
			var parentHeight = me._ht_node_customimage.clientHeight;
			var img = me._ht_node_customimage__img;
			var aspectRatioDiv = me._ht_node_customimage.clientWidth / me._ht_node_customimage.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_node_customimage.ggScrollbars || currentWidth < me._ht_node_customimage.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_node_customimage.scrollLeft=currentWidth / 2 - me._ht_node_customimage.clientWidth / 2;
			}
			if (!me._ht_node_customimage.ggScrollbars || currentHeight < me._ht_node_customimage.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_node_customimage.scrollTop=currentHeight / 2 - me._ht_node_customimage.clientHeight / 2;
			}
		}
		me._ht_node_daynight.appendChild(me._ht_node_customimage);
		el=me._tt_ht_3d=document.createElement('div');
		els=me._tt_ht_3d__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_3d";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((150px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -170px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:none;';
		hs+='\/* \u53bb\u96643D\u6548\u679c\uff0c\u4e26\u8a2d\u5b9a\u6a19\u7c64\u7684\u57fa\u672c\u6a23\u5f0f *\/ transform: translate(0px, 0px); \/* \u4e0d\u4f7f\u75283D\u8b8a\u63db *\/ text-shadow: 1px 1px 2px #000000; \/* \u6dfb\u52a0\u6587\u5b57\u9670\u5f71\uff0c\u8b93\u6a19\u7c64\u66f4\u6e05\u6670 *\/ -webkit-backface-visibility: hidden; backface-visibility: hidden;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 18px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_ht_3d.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_ht_3d.ggUpdateText();
		player.addListener('changenode', function() {
			me._tt_ht_3d.ggUpdateText();
		});
		el.appendChild(els);
		me._tt_ht_3d.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_3d.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsTour() == false)) && 
				((player._(me.hotspot.title) != "")) && 
				((me.elementMouseOver['ht_node_daynight'] == true)) && 
				((player.getVariableValue('opt_3d_preview_1') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_3d.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_3d.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_3d.style.transition='';
				if (me._tt_ht_3d.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_3d.style.visibility=(Number(me._tt_ht_3d.style.opacity)>0||!me._tt_ht_3d.style.opacity)?'inherit':'hidden';
					me._tt_ht_3d.ggVisible=true;
				}
				else {
					me._tt_ht_3d.style.visibility="hidden";
					me._tt_ht_3d.ggVisible=false;
				}
			}
		}
		me._tt_ht_3d.logicBlock_visible();
		me._tt_ht_3d.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_daynight.appendChild(me._tt_ht_3d);
		el=me.__code=document.createElement('div');
		els=me.__code__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="_code";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 37px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -39px;';
		hs+='visibility : hidden;';
		hs+='width : 66px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='pointer-events: none;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__code.ggUpdateText=function() {
			var params = [];
			var hs = player._("this.onUpdatePosition = function(player, hotspot) {\n    var vs = player.getViewerSize(); \/\/ \u7372\u53d6\u64ad\u653e\u5668\u7684\u5c3a\u5bf8\n\n    \/\/ \u76f4\u63a5\u4f7f\u7528\u71b1\u9ede\u7684\u5ea7\u6a19\u4f86\u5b9a\u4f4d\uff0c\u4e0d\u4f7f\u75283D\u8b8a\u63db\n    var hs = \'translate(\' + hotspot.x + \'px,\' + hotspot.y + \'px)\'; \/\/ \u7528\u71b1\u9ede\u7684 x, y \u5b9a\u4f4d\n\n    \/\/ \u8a2d\u5b9a\u65b0\u7684transform\u5c6c\u6027\uff08\u53bb\u9664\u6240\u67093D\u6548\u679c\uff09\n    this.__div.style.transform = hs;\n    this.__div.style.left = hotspot.x + \"px\"; \/\/ \u4f7f\u7528\u71b1\u9ede\u7684 x \u5ea7\u6a19\u653e\u7f6e\n    this.__div.style.top = hotspot.y + \"px\";  \/\/ \u4f7f\u7528\u71b1\u9ede\u7684 y \u5ea7\u6a19\u653e\u7f6e\n};\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__code.ggUpdateText();
		el.appendChild(els);
		me.__code.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__code.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_daynight.appendChild(me.__code);
		el=me._text_=document.createElement('div');
		els=me._text___text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text ";
		el.ggDx=170;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='color : #000000;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((190px + 0px) / 2) + 170px);';
		hs+='position : absolute;';
		hs+='top : -140px;';
		hs+='visibility : hidden;';
		hs+='width : 190px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background : rgba(255,255,255,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 18px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 4px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.description)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_.ggUpdateText();
		player.addListener('changenode', function() {
			me._text_.ggUpdateText();
		});
		el.appendChild(els);
		me._text_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.hotspot.description) != "")) && 
				((me.elementMouseOver['ht_node_daynight'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_.style.transition='';
				if (me._text_.ggCurrentLogicStateVisible == 0) {
					me._text_.style.visibility=(Number(me._text_.style.opacity)>0||!me._text_.style.opacity)?'inherit':'hidden';
					me._text_.ggVisible=true;
				}
				else {
					me._text_.style.visibility="hidden";
					me._text_.ggVisible=false;
				}
			}
		}
		me._text_.logicBlock_visible();
		me._text_.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_daynight.appendChild(me._text_);
		me.elementMouseOver['ht_node_daynight']=false;
		me._chevron_white.logicBlock_scaling();
		me._chevron_white.logicBlock_visible();
		me._chevron_white.logicBlock_alpha();
		me.elementMouseOver['chevron_white']=false;
		me._hs_preview_image.logicBlock_alpha();
		me._hs_tt.logicBlock_visible();
		me._ht_checkmark_tick.logicBlock_visible();
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_node_customimage.style.width=hotspot.customimagewidth + 'px';
			me._ht_node_customimage.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_node_customimage.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_node_customimage.logicBlock_visible();
		me._tt_ht_3d.logicBlock_visible();
		me._text_.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._chevron_white.logicBlock_visible();
				me._hs_tt.logicBlock_visible();
				me._ht_node_customimage.logicBlock_visible();
				me._tt_ht_3d.logicBlock_visible();
				me._text_.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._chevron_white.logicBlock_visible();
				me._hs_preview_image.logicBlock_alpha();
				me._hs_tt.logicBlock_visible();
				me._ht_checkmark_tick.logicBlock_visible();
				me._ht_checkmark_tick.logicBlock_visible();
				me._ht_node_customimage.logicBlock_visible();
				me._tt_ht_3d.logicBlock_visible();
				me._text_.logicBlock_visible();
			};
			me.ggEvent_changevisitednodes=function() {
				me._ht_checkmark_tick.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._chevron_white.logicBlock_scaling();
				me._chevron_white.logicBlock_visible();
				me._hs_preview_image.logicBlock_alpha();
				me._hs_tt.logicBlock_visible();
				me._ht_node_customimage.logicBlock_visible();
				me._tt_ht_3d.logicBlock_visible();
				me._text_.logicBlock_visible();
			};
			me.ggEvent_varchanged_opt_3d_preview_1=function() {
				me._hs_preview_image.logicBlock_alpha();
				me._tt_ht_3d.logicBlock_visible();
			};
			me.__div = me._ht_node_daynight;
	};
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 100px;';
		hs+='position : absolute;';
		hs+='top : 220px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		hs+='transform-style: preserve-3d;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.onclick=function (e) {
			player.setVariableValue('node_data', player._(me.hotspot.url));
			player.moveTo(me.hotspot.pan,me.hotspot.tilt,"70","15.0000");
			player.setVariableValue('node_view', player._(me.hotspot.target));
			skin._timer_node_change.ggTimeout=Number("1") * 1000.0;
			skin._timer_node_change.ggTimestamp=skin.ggCurrentTime;
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			me._chevron_white_lower.logicBlock_alpha();
			me._chevron_black.logicBlock_alpha();
			me._chevron_white0.logicBlock_alpha();
			me._hs_preview_image0.logicBlock_alpha();
			me._tt_ht_3d0.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseleave=function (e) {
			me.elementMouseOver['ht_node']=false;
			me._chevron_white_lower.logicBlock_alpha();
			me._chevron_black.logicBlock_alpha();
			me._chevron_white0.logicBlock_alpha();
			me._hs_preview_image0.logicBlock_alpha();
			me._tt_ht_3d0.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._chevron_white_lower=document.createElement('div');
		els=me._chevron_white_lower__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwMCAxMDAwOyIgdmlld0JveD0iMCAwIDEwMDAgMT'+
			'AwMCIgeT0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8Zz4KICA8cGF0aCBkPSJNMzQuOSw0MzkuN2w0MDAtNDAxYzE3LjktMTcuOSw0MS43LTI1LjQsNjUuMi0yNGMyMy40LTEuNCw0Ny4yLDYuMSw2NS4xLDI0bDQwMCw0MDEgICBjMzMuMiwzMy4zLDMzLjIsODcuNCwwLDEyMC43Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDBMNTAwLDIxNC43TDE1NS4yLDU2MC40Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDAgICBTMS43LDQ3MywzNC45LDQzOS43eiIgY2xhc3M9InN0MCIvPgogPC9nPgo8L3N2Zz4K';
		me._chevron_white_lower__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevron_white_lower";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='opacity : 0.6;';
		hs+='position : absolute;';
		hs+='top : -130px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		hs+='transform:translate3d(0px,0px,-1px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._chevron_white_lower.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_white_lower.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_white_lower.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_white_lower.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_white_lower.style.transition='opacity 500ms ease 0ms';
				if (me._chevron_white_lower.ggCurrentLogicStateAlpha == 0) {
					me._chevron_white_lower.style.visibility=me._chevron_white_lower.ggVisible?'inherit':'hidden';
					me._chevron_white_lower.style.opacity=1;
				}
				else {
					me._chevron_white_lower.style.visibility=me._chevron_white_lower.ggVisible?'inherit':'hidden';
					me._chevron_white_lower.style.opacity=0.6;
				}
			}
		}
		me._chevron_white_lower.logicBlock_alpha();
		me._chevron_white_lower.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._chevron_white_lower);
		el=me._chevron_black=document.createElement('div');
		els=me._chevron_black__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwMCAxMDAwOyIgdmlld0JveD0iMCAwIDEwMDAgMT'+
			'AwMCIgeT0iMHB4Ij4KIDxnPgogIDxwYXRoIGQ9Ik0zNC45LDQzOS43bDQwMC00MDFjMTcuOS0xNy45LDQxLjctMjUuNCw2NS4yLTI0YzIzLjQtMS40LDQ3LjIsNi4xLDY1LjEsMjRsNDAwLDQwMWMzMy4yLDMzLjMsMzMuMiw4Ny40LDAsMTIwLjcgICBjLTMzLjIsMzMuMy04Ny4xLDMzLjMtMTIwLjQsMEw1MDAsMjE0LjdMMTU1LjIsNTYwLjRjLTMzLjIsMzMuMy04Ny4xLDMzLjMtMTIwLjQsMFMxLjcsNDczLDM0LjksNDM5Ljd6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._chevron_black__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevron_black";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='opacity : 0.4;';
		hs+='position : absolute;';
		hs+='top : -130px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._chevron_black.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_black.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_black.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_black.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_black.style.transition='opacity 500ms ease 0ms';
				if (me._chevron_black.ggCurrentLogicStateAlpha == 0) {
					me._chevron_black.style.visibility=me._chevron_black.ggVisible?'inherit':'hidden';
					me._chevron_black.style.opacity=1;
				}
				else {
					me._chevron_black.style.visibility=me._chevron_black.ggVisible?'inherit':'hidden';
					me._chevron_black.style.opacity=0.4;
				}
			}
		}
		me._chevron_black.logicBlock_alpha();
		me._chevron_black.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._chevron_black);
		el=me._chevron_white0=document.createElement('div');
		els=me._chevron_white0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwMCAxMDAwOyIgdmlld0JveD0iMCAwIDEwMDAgMT'+
			'AwMCIgeT0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8Zz4KICA8cGF0aCBkPSJNMzQuOSw0MzkuN2w0MDAtNDAxYzE3LjktMTcuOSw0MS43LTI1LjQsNjUuMi0yNGMyMy40LTEuNCw0Ny4yLDYuMSw2NS4xLDI0bDQwMCw0MDEgICBjMzMuMiwzMy4zLDMzLjIsODcuNCwwLDEyMC43Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDBMNTAwLDIxNC43TDE1NS4yLDU2MC40Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDAgICBTMS43LDQ3MywzNC45LDQzOS43eiIgY2xhc3M9InN0MCIvPgogPC9nPgo8L3N2Zz4K';
		me._chevron_white0__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevron_white";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='opacity : 0.6;';
		hs+='position : absolute;';
		hs+='top : -130px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		hs+='transform:translate3d(0px,0px,1px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._chevron_white0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_white0.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_white0.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_white0.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_white0.style.transition='opacity 500ms ease 0ms';
				if (me._chevron_white0.ggCurrentLogicStateAlpha == 0) {
					me._chevron_white0.style.visibility=me._chevron_white0.ggVisible?'inherit':'hidden';
					me._chevron_white0.style.opacity=1;
				}
				else {
					me._chevron_white0.style.visibility=me._chevron_white0.ggVisible?'inherit':'hidden';
					me._chevron_white0.style.opacity=0.6;
				}
			}
		}
		me._chevron_white0.logicBlock_alpha();
		me._chevron_white0.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._chevron_white0);
		el=me._hs_preview_image0=document.createElement('div');
		els=me._hs_preview_image0__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/hs_preview_image0_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hs_preview_image";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='z-index: -5;';
		hs+='height : 120px;';
		hs+='left : calc(50% - ((200px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -240px;';
		hs+='visibility : hidden;';
		hs+='width : 200px;';
		hs+='pointer-events:none;';
		hs+='border-radius: 5px; overflow: hidden; box-shadow: 0px 0px 2px #ffffff; transform:translate3d(0px,0px,80px) rotateX(-90deg) scale(1.5); transform-style: preserve-3d; -webkit-backface-visibility: hidden; backface-visibility: hidden;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hs_preview_image0.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._hs_preview_image0.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true)) && 
				((player.getVariableValue('opt_3d_preview') == true)) && 
				((player.getIsTour() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hs_preview_image0.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hs_preview_image0.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hs_preview_image0.style.transition='opacity 500ms ease 0ms';
				if (me._hs_preview_image0.ggCurrentLogicStateAlpha == 0) {
					me._hs_preview_image0.style.visibility=me._hs_preview_image0.ggVisible?'inherit':'hidden';
					me._hs_preview_image0.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._hs_preview_image0.style.opacity == 0.0) { me._hs_preview_image0.style.visibility="hidden"; } }, 505);
					me._hs_preview_image0.style.opacity=0;
				}
			}
		}
		me._hs_preview_image0.logicBlock_alpha();
		me._hs_preview_image0.ggUpdatePosition=function (useTransition) {
		}
		el=me._hs_tt0=document.createElement('div');
		els=me._hs_tt0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="hs_tt";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 0px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((200px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:none;';
		hs+='font-size: 18px; font-weight: bold; font-style: italic; text-shadow: 0px 0px 5px #000000;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : rgba(0,0,0,0.196078);';
		hs+='border : 0px solid #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._hs_tt0.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._hs_tt0.ggUpdateText();
		player.addListener('changenode', function() {
			me._hs_tt0.ggUpdateText();
		});
		el.appendChild(els);
		me._hs_tt0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_tt0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_3d_tooltip', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')) == false)) && 
				((player._(me.hotspot.title) == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_tt0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_tt0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_tt0.style.transition='';
				if (me._hs_tt0.ggCurrentLogicStateVisible == 0) {
					me._hs_tt0.style.visibility="hidden";
					me._hs_tt0.ggVisible=false;
				}
				else {
					me._hs_tt0.style.visibility=(Number(me._hs_tt0.style.opacity)>0||!me._hs_tt0.style.opacity)?'inherit':'hidden';
					me._hs_tt0.ggVisible=true;
				}
			}
		}
		me._hs_tt0.logicBlock_visible();
		me._hs_tt0.ggUpdatePosition=function (useTransition) {
		}
		me._hs_preview_image0.appendChild(me._hs_tt0);
		el=me._hs_visited=document.createElement('div');
		els=me._hs_visited__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAtMjQwIDMzMiAxMzAgMTMwOyIgdmlld0JveD0iLTI0MCAzMz'+
			'IgMTMwIDEzMCIgeT0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzAwMDAwMDt9Cgkuc3Qxe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8ZyBpZD0iTGF5ZXJfMV8xXyIvPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGQ9Ik0tMTIyLjEsMzQxLjVoLTEwNS44Yy0xLjQsMC0yLjYsMS4xLTIuNiwyLjZ2MTA1LjhjMCwxLjQsMS4xLDIuNiwyLjYsMi42aDEwNS44YzEuNCwwLDIuNi0xLjEsMi42LTIuNlYzNDQuMSAgIEMtMTE5LjYsMzQyLjctMTIwLjcsMzQxLjUtMTIyLjEsMzQxLjV6IE0tMTMyLjgsMzgxLjdsLTUwLjgsNTAuOGMtMC4zLDAuMy0wLjgsMC41LTEu'+
			'MiwwLjVjLTAuNSwwLTAuOS0wLjEtMS4zLTAuNWwtMzEuNy0zMS44ICAgYy0wLjctMC43LTAuNy0xLjcsMC0yLjRsMTIuNS0xMi41YzAuNy0wLjcsMS43LTAuNywyLjQsMGwxOCwxOGwzNy4xLTM3LjFjMC43LTAuNywxLjctMC43LDIuNCwwbDEyLjUsMTIuNSAgIEMtMTMyLjEsMzc5LjktMTMyLjEsMzgxLTEzMi44LDM4MS43eiIgY2xhc3M9InN0MCIvPgogIDxwYXRoIGQ9Ik0tMTQ3LjcsMzY2LjhsLTM3LjEsMzcuMWwtMTgtMThjLTAuNy0wLjctMS43LTAuNy0yLjQsMGwtMTIuNSwxMi41Yy0wLjcsMC43LTAuNywxLjcsMCwyLjRsMzEuNywzMS44ICAgYzAuMywwLjMsMC44LDAuNSwxLjMsMC41Yz'+
			'AuNCwwLDAuOS0wLjIsMS4yLTAuNWw1MC44LTUwLjljMC43LTAuNywwLjctMS43LDAtMi40bC0xMi41LTEyLjVDLTE0NS45LDM2Ni4xLTE0NywzNjYuMS0xNDcuNywzNjYuOHoiIGNsYXNzPSJzdDEiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._hs_visited__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hs_visited";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 5px;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hs_visited.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_visited.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._hs_visited.ggIsActive() == true)) || 
				((player.nodeVisited(me._hs_visited.ggElementNodeId()) == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_visited.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_visited.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_visited.style.transition='';
				if (me._hs_visited.ggCurrentLogicStateVisible == 0) {
					me._hs_visited.style.visibility=(Number(me._hs_visited.style.opacity)>0||!me._hs_visited.style.opacity)?'inherit':'hidden';
					me._hs_visited.ggVisible=true;
				}
				else {
					me._hs_visited.style.visibility="hidden";
					me._hs_visited.ggVisible=false;
				}
			}
		}
		me._hs_visited.logicBlock_visible();
		me._hs_visited.ggUpdatePosition=function (useTransition) {
		}
		me._hs_preview_image0.appendChild(me._hs_visited);
		me._ht_node.appendChild(me._hs_preview_image0);
		el=me.__code0=document.createElement('div');
		els=me.__code0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="_code";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 37px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -39px;';
		hs+='visibility : hidden;';
		hs+='width : 66px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='pointer-events: none;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
this.onUpdatePosition=function(player,hotspot) {
var vs=player.getViewerSize();
var y=vs.height * (1/6*(1+Math.cos(player.getTilt() * Math.PI/90.0)));
var hs= 'translate3d(0px,0px,-1000px) perspective(500px) translate3d(0px,' + (y) + 'px,0px) ';
hs += 'rotateZ(' + ( player.getRoll()).toFixed(10) + 'deg) ';
hs += 'rotateX(' + ( player.getTilt()).toFixed(10) + 'deg) ';
hs += 'rotateY(' + (-player.getPan()).toFixed(10)  + 'deg) ';
hs += 'rotateY(' + ( hotspot.pan).toFixed(2)  + 'deg) ';
hs += 'rotateX(' + (-hotspot.tilt).toFixed(2) + 'deg) ';
hs += 'rotateX(90deg) ';
this.__div.style.transform=hs;
this.__div.style.left = vs.width / 2 + "px";
this.__div.style.top = vs.height / 2 + "px";
};
		el.appendChild(els);
		me.__code0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__code0.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me.__code0);
		el=me._tt_ht_3d0=document.createElement('div');
		els=me._tt_ht_3d0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_3d";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -170px;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		hs+='transform:translate3d(0px,0px,40px) rotateX(-90deg); font-size: 16px; font-weight: bold; font-style: italic; text-shadow: 0px 0px 5px #000000;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 1px solid #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_ht_3d0.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_ht_3d0.ggUpdateText();
		player.addListener('changenode', function() {
			me._tt_ht_3d0.ggUpdateText();
		});
		el.appendChild(els);
		me._tt_ht_3d0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_3d0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsTour() == false)) && 
				((player._(me.hotspot.title) != "")) && 
				((me.elementMouseOver['ht_node'] == true)) && 
				((player.getVariableValue('opt_3d_preview') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_3d0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_3d0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_3d0.style.transition='';
				if (me._tt_ht_3d0.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_3d0.style.visibility=(Number(me._tt_ht_3d0.style.opacity)>0||!me._tt_ht_3d0.style.opacity)?'inherit':'hidden';
					me._tt_ht_3d0.ggVisible=true;
				}
				else {
					me._tt_ht_3d0.style.visibility="hidden";
					me._tt_ht_3d0.ggVisible=false;
				}
			}
		}
		me._tt_ht_3d0.logicBlock_visible();
		me._tt_ht_3d0.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._tt_ht_3d0);
		me.elementMouseOver['ht_node']=false;
		me._chevron_white_lower.logicBlock_alpha();
		me._chevron_black.logicBlock_alpha();
		me._chevron_white0.logicBlock_alpha();
		me._hs_preview_image0.logicBlock_alpha();
		me._hs_tt0.logicBlock_visible();
		me._hs_visited.logicBlock_visible();
		me._tt_ht_3d0.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._hs_tt0.logicBlock_visible();
				me._tt_ht_3d0.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._hs_preview_image0.logicBlock_alpha();
				me._hs_tt0.logicBlock_visible();
				me._hs_visited.logicBlock_visible();
				me._hs_visited.logicBlock_visible();
				me._tt_ht_3d0.logicBlock_visible();
			};
			me.ggEvent_changevisitednodes=function() {
				me._hs_visited.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._hs_preview_image0.logicBlock_alpha();
				me._hs_tt0.logicBlock_visible();
				me._tt_ht_3d0.logicBlock_visible();
			};
			me.ggEvent_sizechanged=function() {
				me._hs_tt0.logicBlock_visible();
			};
			me.ggEvent_varchanged_opt_3d_preview=function() {
				me._hs_preview_image0.logicBlock_alpha();
				me._tt_ht_3d0.logicBlock_visible();
			};
			me.__div = me._ht_node;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
			if (hotspot.skinid=='ht_node') {
				hotspot.skinid = 'ht_node';
				hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		{
				hotspot.skinid = 'ht_node_Day&Night';
				hsinst = new SkinHotspotClass_ht_node_daynight(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		hotspotTemplates = {};
	}
	player.addListener('hotspotsremoved',function() {
			me.removeSkinHotspots();
	});
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
		if (me._timer_node_change.ggLastIsActive!=me._timer_node_change.ggIsActive()) {
			me._timer_node_change.ggLastIsActive=me._timer_node_change.ggIsActive();
			if (me._timer_node_change.ggLastIsActive) {
			} else {
				player.openNext(player.getVariableValue('node_data', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')),player.getVariableValue('node_view', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')));
			}
		}
		for (const id in hotspotTemplates) {
			const tmpl=hotspotTemplates[id];
			tmpl.forEach(function(hotspot) {
				if (hotspot.hotspotTimerEvent) {
					hotspot.hotspotTimerEvent();
				}
			});
		};
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	hs='.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; } .ggmarkdown p,.ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 0px } .ggmarkdown { white-space:normal }@font-face { font-family: "Montserrat"; font-style: normal; font-weight: 400; src: local(""), url("$(skinbase)fonts/montserrat-latin-regular.woff2") format("woff2"); } .montserrat_regular { font-family: "Montserrat", sans-serif; font-weight: 400; }';
	hs = hs.replace(/\$\(skinbase\)/g,basePath);
	style.appendChild(document.createTextNode(hs));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
	document.fonts.onloadingdone = () => {
		me.updateSize(me.divSkin);
	}
};