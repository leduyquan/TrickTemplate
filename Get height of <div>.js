updateChartHeight:function(){
    var self = this;
    setTimeout(function(){
        var _wContent = $(self.$refs.widgetElementContent);
        let _titleH = $(_wContent).find('.widget-title').height();
        let _lastValueH = $(_wContent).find('.widget-last-value').height();
        let _widgetHeight = _wContent.parent().height();
        self.chartHeight = Math.max((_widgetHeight - (_titleH + _lastValueH + 20)),50)+'px';
        setTimeout(function () {
            self.drawChart();
        },100)
    },100)
},
