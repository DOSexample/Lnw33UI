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
    if(top.point>0&&top.clan>=0&&top.clan<=3)
    {
        const clan = config.clans[top.clan];
        obj = document.createElement("div");
        obj.className = "GLOW GLOW"+clan.code;
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
//    {name: 'DOS1', point: 5, clan: 2},
//    {name: 'DOS2', point: 6, clan: 0},
//    {name: 'DOS3', point: 8, clan: 1}
//);
//function randomTopRank()
//{
//    var r = Math.round(Math.random()*1000000) % 10;
//    var v = 0;
//    switch(r)
//    {
//        case 0: v = 10; break;
//        case 1: v = 100; break;
//        case 2: v = 1000; break;
//        case 3: v = 10000; break;
//        default : v = 100000; break;
//    }
//    var name = Math.round(Math.random()*v);
//    return {name: 'DOS'+name, point: Math.round(Math.random()*10000000), clan: Math.round(Math.random()*10)%4};
//}
//setInterval( function(){
//    createUITopKill(
//        randomTopRank(),
//        randomTopRank(),
//        randomTopRank()
//    );
//}, 100);
