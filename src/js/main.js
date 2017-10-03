
var tabs = document.querySelectorAll('.wrapper nav a');
var panels = document.querySelectorAll('.wrapper main article');
var body = document.getElementsByName('body');
var body_color = ['#181818', '#560027', '#DDAA54'];
var font_color = ['#FFFFFF', '#FFFFFF', '#473418']
function setTabHandler(tab, tabPos) {
  tab.onclick = function() {
    for(let i = 0; i < tabs.length; i++) {
      tabs[i].className = '';
    }
    tab.className = 'active';
    for(let i = 0; i < panels.length; i++) {
      panels[i].className = '';
    }
    panels[tabPos].className = 'active-panel';
    document.body.style.background = body_color[tabPos];
    document.body.style.color = font_color[tabPos];
  };
}

function initPage() {
  panels[0].className = 'active-panel';
  tabs[0].className = 'active';
  document.body.style.background = body_color[0];
  document.body.style.color = font_color[0];
}
for(let i = 0; i < tabs.length; i++) {
  var tab = tabs[i];
  setTabHandler(tab, i);
  // set first tab and panel by default
  initPage();
}

