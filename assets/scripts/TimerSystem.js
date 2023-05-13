const uiTimer = {
    root: null,
    img: null,
    span: null,
    tick: 0,
    interval: null,
    show: false,
    getText: function()
    {
        const obj = getMiniuteAndSecond(this.tick);
        return obj.minutes + ":" + obj.seconds;
    }
};

function getMiniuteAndSecond(secondsNum)
{
    const minutes = Math.floor(secondsNum / 60).toString();
    const seconds = (secondsNum - minutes * 60).toString();
    return {
        minutes: (minutes > 99 ? "99" : minutes.padStart(2, '0') ), 
        seconds: seconds.padStart(2, '0')
    };
}

function clearUITimer()
{
    uiTimer.root = document.getElementById("uiTimer");
    if(uiTimer.root!=null){

        if(uiTimer.img!=null)
            uiTimer.root.removeChild( uiTimer.img );
        uiTimer.img=null;

        if(uiTimer.span!= null)
            uiTimer.root.removeChild( uiTimer.span );
        uiTimer.span=null;
    }
    clearUITimerInterval();
}

function clearUITimerInterval()
{
    if(uiTimer.interval!=null)
        clearInterval(uiTimer.interval);
    uiTimer.interval=null;
    uiTimer.show = false;
}

function createUITimer(secondsNum)
{
    uiTimer.tick = secondsNum;
    uiTimer.root = document.getElementById("uiTimer");
    uiTimer.img = document.getElementById("uiTimerImg");
    uiTimer.span = document.getElementById("uiTimerSpan");
    if(uiTimer.img==null)
    {
        uiTimer.img = document.createElement("img");
        uiTimer.img.id = "uiTimerImg";
        uiTimer.img.src = config.getImage("UI_ICON_TIMER");
        uiTimer.img.src.width="30px";
        uiTimer.img.src.height="34px";
        uiTimer.root.appendChild(uiTimer.img);
    }
    if(uiTimer.span==null)
    {
        uiTimer.span = document.createElement("span");
        uiTimer.span.id = "uiTimerSpan";
        if(uiTimer.tick > 0)
            uiTimer.span.innerText = uiTimer.getText();
        else
            uiTimer.span.innerText = "00:00";
        uiTimer.root.appendChild(uiTimer.span);
    }

    clearUITimerInterval();
    if(uiTimer.tick==null|| uiTimer.tick < 0)
    {
        clearUITimer();
        return;
    }

    uiTimer.show = true;
    uiTimer.interval = setInterval( function() {
        const obj = getMiniuteAndSecond(uiTimer.tick);
        uiTimer.span.innerText = uiTimer.getText();
        uiTimer.tick--;
        if(uiTimer.tick < 0)
            clearUITimer();
    }, 1000);
}
function setUITimer(secondsNum)
{
    uiTimer.tick = secondsNum;
    if(!uiTimer.show)
        createUITimer(secondsNum);
}

//For test
//createUITimer(900);