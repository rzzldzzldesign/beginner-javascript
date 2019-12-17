console.log('ya ya wes we get it.. IT WORKS!');

const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function handleTabClick(event) {
  // HIDE ALL TAB PANELS
  tabPanels.forEach(panel => {
    panel.hidden = true;
  });

  // MARK AL TABS AS UNSELECTED
  tabButtons.forEach(tab => {
    tab.setAttribute('aria-selected', false);
  });
  // MARK THE CLICKED TAB AS SELECTED
  event.currentTarget.setAttribute('aria-selected', true);
  //  FIND THE ASSOCIATED TABPANEL AND SHOW IT
  const { id } = event.currentTarget;

  /*
  METHOD ONE
  const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
  tabPanel.hidden = false;
  */

  //   METHOD TWO
  const tabPanel = tabPanels.find(
    panel => panel.getAttribute('aria-labelledby') === id
  );
  tabPanel.hidden = false;
}

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));
