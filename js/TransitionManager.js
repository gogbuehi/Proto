var TransitionManager = {
    jHeader:null,
    jMain:null,
    jFooter:null,
    jAll:null,
    init:function() {
        this.jHeader = $("header.wrapper");
        this.jMain = $("div#main");
        this.jFooter = $("footer.wrapper");
        
        this.jAll = $("").add(this.jHeader).add(this.jMain).add(this.jFooter);
        
        
        //this.slideLeft(this.jAll)
    },
    slideMainLeft:function() {
        this.slideLeft(this.jMain);
    },
    slideMainRight:function() {
        this.slideRight(this.jMain);
    },
    slideLeft:function(jObject) {
        jObject.animate({
            right:"100%"
        },1000,function() {
            
            var jObject = $(this);
            //jObject.hide("fast");
            jObject.animate({
                left:"100%",
                right:"-100%"
            },0,function() {
                var jObject = $(this);
                //jObject.show("fast");
                jObject.animate({
                    left:"0%",
                    right:"0%"
                },1000);
            });
        });
    },
    slideRight:function(jObject) {
        jObject.animate({
            left:"100%"
        },1000,function() {
            
            var jObject = $(this);
            //jObject.hide("fast");
            jObject.animate({
                right:"100%",
                left:"-100%"
            },0,function() {
                var jObject = $(this);
                //jObject.show("fast");
                jObject.animate({
                    right:"0%",
                    left:"0%"
                },1000);
            });
        });
    }
}