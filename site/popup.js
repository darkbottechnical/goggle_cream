const tabSetting = document.getElementById("defaultTab");
const tabs = document.querySelectorAll('.tab')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const activeTab = document.querySelector('.tab.active');
        const activeContent = document.querySelector('.tab-content.active');
        if (activeTab) activeTab.classList.remove('active');
        if (activeContent) activeContent.classList.remove('active');

        tab.classList.add('active');
        const targetTab = tab.getAttribute('data-tab');
        const targetContent = document.getElementById(targetTab);
        if (targetContent) targetContent.classList.add('active');
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const defaultTab = localStorage.getItem("defaultTab")||"Home";
    tabSetting.value = defaultTab;
    const container = document.getElementById('scripts');
    const scripts = ["bgColor.js", "shrekify.js", "wordReplace.js","imageFlip.js", "rotateAll.js", "colorInvert.js", "grayscale.js", "comicSans.js", "dizzy.js",
        "epilepsy.js", "NUKE.js", "ipAddress.js", "NUKE(NO COUNTDOWN).js",
    ];

    tabs.forEach(tab=>{
        if (tab.textContent == defaultTab){
            tab.classList.add('active');
            const targetTab = tab.getAttribute('data-tab');
            const targetContent = document.getElementById(targetTab);
            if (targetContent) targetContent.classList.add('active');
        }else{
            tab.classList.remove('active');
            const targetTab = tab.getAttribute('data-tab');
            const targetContent = document.getElementById(targetTab);
            if (targetContent) targetContent.classList.remove('active');
        }
    });

    scripts.forEach(script => {
        if (script != "NUKE(NO COUNTDOWN).js") {
            const button = document.createElement('button');
            button.classList.add('scriptButton')
            button.textContent = script.replace(".js", "");
            button.onclick = () => injectScript(script);
            container.appendChild(button);
        }else{
            const button = document.createElement('button');
            button.classList.add('size2Button')
            button.textContent = script.replace(".js", "");
            button.onclick = () => injectScript(script);
            container.appendChild(button);
        }
    });

    function injectScript(scriptName) {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs.length === 0) return;

            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                files: [`content_scripts/${scriptName}`]
            }).catch(err => alert("Script injection failed. Chrome blocks script injection into local files, extension sites, and chrome sites.", err));
        });
    }

    tabSetting.addEventListener('change', function(){
        localStorage.setItem("defaultTab", tabSetting.value)
    });
});
