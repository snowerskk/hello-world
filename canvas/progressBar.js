function ProgressBar(option){
	this._init(option);
}
ProgressBar.prototype={
	_init:function(option){
		//属性
		this.x=option.x || 0;
		this.y=option.y || 0;
		this.w=option.w || 0;
		this.h=option.h || 0;
		this.fillStyle=option.fillStyle;
		this.strokeStyle=option.strokeStyle;
		//进度条内部填充形状
		var innerRect=new Konva.Rect({
            x:this.x,
            y:this.y,
            width:0,
            height:this.h,
            cornerRadius:1/24*this.h,
            fill:this.fillStyle,
            id:'innerRect'
        });
        //进度条外部边框形状
        var outerRect=new Konva.Rect({
            x:this.x,
            y:this.y,
            width:this.w,
            height:this.h,
            cornerRadius:1/24*this.h,
            stroke:this.strokeStyle,
            strokeWidth:4
        });
        //内外部的形状打包成组，方便一次添加
        this.group=new Konva.Group({
        //组也需要定位，内部的形状以组为基准定位
        	x:0,
        	y:0
        });
        this.group.add(innerRect);
        this.group.add(outerRect);
	},
	//传递进度条进度数值
	changeValue:function(val){
		if(val>1){
			val=val/100;
		}
		var width=this.w*val;
		var innerRect=this.group.findOne('#innerRect');
		innerRect.to({
			width:width,
			duration:3,
			easing:Konva.Easings.EasIn
		})
	},
	//将形状组添加到层
	addToGroupOrLayer:function(arg){
		arg.add(this.group);
	}
}