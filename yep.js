var yep={};
yep.methods={};
yep.$=document.querySelectorAll.bind(document);
yep.midw=document.body.clientWidth/2;
yep.setTitle=function(title){
	document.title=title;
}
yep.methods.place=function(t){
	t.place=function(){
		document.getElementById('app').appendChild(this.HTMLelement);
	}
}
yep.methods.onclick=function(t){
	Object.defineProperty(t,'onclick',{
		get:function(){
			return t.HTMLelement.onclick;
		},
		set:function(v){
			t.HTMLelement.onclick=v;
		}
	});
}
yep.methods.pos=function(t){
	t.pos=undefined;
	Object.defineProperty(t,'pos',{
		get:function(){
			return pos;
		},
		set:function(v){
			t.HTMLelement.style.left=v[0]+"px";
			t.HTMLelement.style.top=v[1]+"px";
			pos=v;
		}
	});
}
yep.methods.style=function(t){
	Object.defineProperty(t,'style',{
		get:function(){
			return undefined;
		},
		set:function(v){
			for(rule in v){
				t.HTMLelement.style[rule]=v[rule];
			}
		}
	});
}
yep.methods.text=function(t){
	Object.defineProperty(t,'text',{
		get:function(){
			return t.HTMLelement.innerHTML;
		},
		set:function(v){
			t.HTMLelement.innerHTML=v;
		}
	});
}
yep.methods.center=function(t){
	t.center=function(){
		t.style={
			'left':yep.midw-this.HTMLelement.clientWidth/2+'px'
		};
	}
}
yep.methods.positiontype=function(t){
	Object.defineProperty(t,'positionType',{
		get:function(){
			return t.HTMLelement.style.position;
		},
		set:function(v){
			t.HTMLelement.style.position=v;
		}
	});
}
yep.methods.value=function(t){
	Object.defineProperty(t,'value',{
		get:function(){
			return t.HTMLelement.value;
		},
		set:function(v){
			t.HTMLelement.style.value=v;
		}
	});
}

function button(){
	this.HTMLelement=document.createElement('button');
	this.HTMLelement.style.position="absolute";
	
	yep.methods.place(this);
	yep.methods.onclick(this);
	yep.methods.pos(this);
	yep.methods.style(this);
	yep.methods.text(this);
	yep.methods.center(this);
	yep.methods.positiontype(this);
}
function text(){
	this.HTMLelement=document.createElement('span');
	this.HTMLelement.style.position="absolute";

	yep.methods.place(this);
	yep.methods.onclick(this);
	yep.methods.pos(this);
	yep.methods.style(this);
	yep.methods.text(this);
	yep.methods.center(this);
	yep.methods.positiontype(this);
}
function input(){
	this.HTMLelement=document.createElement('input');
	this.HTMLelement.style.position="absolute";

	yep.methods.place(this);
	yep.methods.pos(this);
	yep.methods.style(this);
	yep.methods.center(this);
	yep.methods.positiontype(this);
	yep.methods.value(this);
}