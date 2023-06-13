
function Marquee(selector, speed) {
    const s = document.querySelector(selector);
    const ele = s.children[0];
  
    s.style.display = 'block';
  
    var i = 0;
    var qq = 100;
    var itv = 0;
    ele.style.marginLeft = '100%';
    var itv = setInterval(function () {
      ele.style.marginLeft = qq-- + '%';
    }, speed);
  
    setTimeout( function() {
      clearInterval(itv);
      s.style.display = 'none';
    }, 13000);
}