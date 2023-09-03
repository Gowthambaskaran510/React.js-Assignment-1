import './index.css'

const HistoryItem = props => {
  const {ShowHistoryList, deleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = ShowHistoryList

  const onDeleteItem = () => {
    deleteItem(id)
  }

  return (
    <li className="list-card-container">
      <div className="data-card">
        <p className="time-card">{timeAccessed}</p>
        <div className="history-info">
          <img src={logoUrl} alt="domain logo" className="logo-img" />

          <p className="title-card">{title}</p>

          <p className="url-card">{domainUrl}</p>
        </div>
      </div>
      <div className="btn-card">
        <button
          type="button"
          onClick={onDeleteItem}
          data-testId="delete"
          className="btn"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="logo-img"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
