// ==UserScript==
// @name         開啟任務自動結案
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://oaoa.tech/index.php?m=&c=Flow&a=read&id=*
// @grant        none
// ==/UserScript==

$(function(){
    var $finishBtn = $('#finish');
    var isExistFinishBtn = $finishBtn.size() > 0 ? true: false;

    if (isExistFinishBtn) { console.log('execFinishBtnClick');
        setTimeout(function(){ $finishBtn.click(); }, 1000);
    }
    console.log(123);
});
