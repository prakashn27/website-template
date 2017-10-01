
var tabs = document.querySelectorAll('body header nav ul li a');
var panels = document.querySelectorAll('main article');

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
  };
}

for(let i = 0; i < tabs.length; i++) {
  var tab = tabs[i];
  setTabHandler(tab, i);
  // set first tab and panel by default
  panels[0].className = 'active-panel';
  tabs[0].className = 'active';
}

