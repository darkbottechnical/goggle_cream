chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.url.includes("site/index.html")) {
      chrome.scripting.executeScript({
          target: { tabId: tabId },
          func: () => window.history.replaceState(null, null, " ")
      });
  }
});
