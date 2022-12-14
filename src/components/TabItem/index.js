import './index.css'

const TabItem = props => {
  const {tabDetails, updateTabId, isActive} = props
  const {displayText, tabId} = tabDetails

  const activeTabClassName = isActive ? 'active-tab-btn' : ''

  const onClickTabItem = () => {
    updateTabId(tabId)
  }

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        onClick={onClickTabItem}
        className={`tab-btn ${activeTabClassName}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
