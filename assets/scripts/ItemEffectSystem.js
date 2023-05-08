function UIItemEffect(type) {

    var t = type.indexOf("Combine") == -1 ? "" : "Combine";
    var id = "itemEffect"+type;
    var cls = "itemEffect"+type;
    var obj = $("#"+id);
    
    obj.append("<div>").addClass(cls)
    .effect( "slide"
    , {}, 150
    , setTimeout( function(){
        obj.children().remove();
    }, 750 )
    )
}

//For test
//UIItemEffect("Success");
//UIItemEffect("Fail");
//UIItemEffect("Fail2");
//UIItemEffect("CombineSuccess");
//UIItemEffect("CombineFail");
