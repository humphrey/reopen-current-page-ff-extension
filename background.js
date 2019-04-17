
function reloadTab(tabs) {
  if (tabs[0]) {
    const currentTab = tabs[0];
    browser.tabs.update(currentTab.id, {url: currentTab.url});
  }
}

function handleBrowserAction() {
  var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
  gettingActiveTab.then(reloadTab);
}

browser.browserAction.onClicked.addListener(handleBrowserAction);
