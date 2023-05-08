
const TopKillUI = {
    root: null,
    top1: null,
    top2: null,
    top3: null,
}

TopKillUI.root = document.getElementById("topKill");
function clearUITopKill()
{
    if(TopKillUI.root==null) return;
    while(TopKillUI.root.firstChild) {
        TopKillUI.root.removeChild(TopKillUI.root.firstChild);
    }
}

/**
 * 
 * @param {TopKillUI.top} obj 
 * @param {String} id 
 * @param {obect{name: '', point: 0, clan: 0}} top 
 */
function createTopKillRank(obj, id, top)
{
/*
    <div class="GLOWGT">
        <p class="AmblemRed">&nbsp;</p>
        <p class="Symbol1GT">&nbsp;</p>
        <p>1234567891011</p>
        <p class="right">Kills: 123</p>
    </div>
    <div class="GLOWRS">
        <p class="AmblemPurple">&nbsp;</p>
        <p class="Symbol1RS">&nbsp;</p>
        <p>DOSSSSSSSSS</p>
        <p class="right">Kills: 123</p>
    </div>
    <div class="GLOWND">
        <p class="AmblemBlue">&nbsp;</p>
        <p class="Symbol1ND">&nbsp;</p>
        <p>ddddd121</p>
        <p class="right">Kills: 123</p>
    </div>
*/
    console.log(top.name+","+top.clan+","+top.point);
    if(top.point>0)
    {
        const clan = config.clans[top.clan];
        obj = document.createElement("div");
        obj.className = "GLOW GLOW"+config.clans[top.clan].code;
        obj.innerHTML = 
            '<p class="Amblem Amblem'+clan.amblem+'"></p>'+
            '<p class="Symbol1 Symbol1'+clan.code+'"></p>'+
            '<p class="text">'+top.name+'</p>'+
            '<p class="text">kills: '+top.point+'</p>'
        ;
        TopKillUI.root.appendChild(obj);
    }
}


/**
 * 
 * @param {obect{name: '', point: 0, clan: 0}} top1
 * @param {obect{name: '', point: 0, clan: 0}} top2
 * @param {obect{name: '', point: 0, clan: 0}} top3 
 * @returns 
 */
function createUITopKill(top1, top2, top3)
{
    clearUITopKill();
    if(!TopKillUI.root) return;

    createTopKillRank(TopKillUI.top1, "topKill1", top1);
    createTopKillRank(TopKillUI.top2, "topKill2", top2);
    createTopKillRank(TopKillUI.top3, "topKill3", top3);
}

//For test
//createUITopKill(
//    {name: 'FANTASTICV2', point: 5, clan: 2},
//    {name: '', point: 0, clan: 0},
//    {name: 'PrincessToey', point: 8, clan: 2}
//);
//setInterval( function(){
//    createUITopKill(
//        {name: 'DOS', point: Math.round(Math.random()*100), clan: 1},
//        {name: 'DOS2', point: Math.round(Math.random()*100), clan: 2},
//        {name: 'DOS3', point: Math.round(Math.random()*100), clan: 0}
//    );
//}, 1000);
