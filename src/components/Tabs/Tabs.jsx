import React, { useState } from 'react';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);


  const handleTabClick = (tab) => {
    if (tab.id !== activeTab.id) {
      setActiveTab(tab);
      onTabSelected(tab.id);
    }
  };

  
  const currentTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div>
      <ul>
        {tabs.map((tab) => (
          <li
            key={tab.id}
            className={tab.id === currentTab.id ? 'is-active' : ''}
            data-cy="Tab"
          >
            <a
              href={`#${tab.id}`}
              data-cy="TabLink"
              onClick={(e) => {
                e.preventDefault();
                handleTabClick(tab);
              }}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>

      <div data-cy="TabContent">
        {currentTab ? currentTab.content : 'No tab selected'}
      </div>
    </div>
  );
};
