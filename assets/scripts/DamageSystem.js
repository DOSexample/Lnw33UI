
/*START: DamageText*/
var imageType = "_0_"; // true = colored, false = white;
const damage_area = document.getElementById("damage_area");
const MAX_DAMAGE_COUNT = 5;

function addDamageText(attackerName, defenserName, attackerClan, defenserClan)
{
    if(!damage_area) return;

    if(damage_area.childElementCount === MAX_DAMAGE_COUNT)
    {
		var elements = damage_area.getElementsByTagName('p');
		damage_area.removeChild(elements[0]);
    }

    function createDamageImage(tClan)
    {
        const clanImg = "UI_SYMBOL" + imageType + config.clans[tClan].code;
        var img = document.createElement("img");
        img.src = config.getImage(clanImg);
        img.style.width = "30px";
        img.style.height = "30px";
        return img;
    }
    function createDamageSpan(tText,tClan)
    {
        var span = document.createElement("span");
        if(tClan!=null)
            span.style.color = config.clans[tClan].color;
        span.innerHTML = tText;
        return span;
    }

    var p = document.createElement("p");
    //p.id="textContainer";
    p.className = "tagElement";
    p.tickCount = new Date().getTime();
    //'<p class="tagElement">'+
    //createDamageImage(attackerClan)+
    //'    <span style="color: '+clans[attackerClan].color+'">'+attacker+'</span>'+
    //'    <span id="eventType" class="killed">Killed</span>'+    
    //createDamageImage(defenserClan)+
    //'    <span style="color: '+clans[defenserClan].color+'">'+defenser+'</span>'+
    //'</p>'
    //;
    
    var attackerImg = createDamageImage(attackerClan);
    var attackerSpan = createDamageSpan(attackerName,attackerClan);

    var killedSpan = createDamageSpan("&nbsp;&nbsp;Killed&nbsp;&nbsp;");
    killedSpan.className = "killed";
    //var killedSpan = document.createElement("img");
    //killedSpan.src = config.getImage("UI_ICON_KILL");
    //killedSpan.style.width = "7%";
    //killedSpan.style.height = "7%";

    var defenserImg = createDamageImage(defenserClan);
    var defenserSpan = createDamageSpan(defenserName,defenserClan);
    
    p.appendChild(attackerImg);
    p.appendChild(attackerSpan);
    p.appendChild(killedSpan);
    p.appendChild(defenserImg);
    p.appendChild(defenserSpan);

    damage_area.appendChild(p);
    startDamageTextLogic();
}

var iDamageTextLogic = null;
function checkDamageText()
{
	var childCount = damage_area.childElementCount;
	if(childCount <= 0)
		return;
	
	var elements = damage_area.getElementsByTagName('p');
    var tickCount = new Date().getTime();
	if(tickCount - elements[0].tickCount > 2000)
	{
		damage_area.removeChild(elements[0]);
	}
}
function startDamageTextLogic()
{
	if(iDamageTextLogic != null) return;
	iDamageTextLogic = setInterval( function() {
		checkDamageText();
	}, 500 );
}
/*END: DamageText*/


/*START: Skull Animation*/
function ShowSkullAnimation() {
    var kid = $("#killer_skull");
    if(kid.children().length > 0) return;

    kid.append("<div>")
    .addClass("killer_skull")
    .effect( "fade"
    , {}, 500
    , function(){
        kid.children().remove();
    });
}
/*END: Skull Animation*/

//For test
//setInterval( function() {
//    var m1 = parseInt(Math.random()*10000000000000).toString();
//    var m2 = parseInt(Math.random()*10000000000000).toString();
//    var c1 = parseInt(Math.random()*10)%4;
//    var c2 = parseInt(Math.random()*10)%4;
//    addDamageText("dos"+m1, "dos"+m2, c1, c2);
//}, 1000 );
//addDamageText("dos156789123", "dos256789123", 0, 1);
//addDamageText("dos1", "dos2", 1, 2);
//addDamageText("dos3", "dos4", 2, 3);
//addDamageText("dos5", "dos6", 3, 0);
//addDamageText("dos7", "dos8", 3, 0);
//addDamageText("dos7", "dos8", 3, 0);
//setInterval( function(){
//    ShowSkullAnimation();
//}, 100 );