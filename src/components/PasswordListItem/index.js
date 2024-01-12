import './index.css'

const PasswordListItem = props => {
  const {passwordDetails, isCheckboxClicked} = props
  const {id, website, userName, password} = passwordDetails

  const showPassword = isCheckboxClicked ? (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
    />
  ) : (
    password
  )

  const onClickDeleteImg = () => {}

  return (
    <li className="passwords-table" key={id}>
      <div className="details">
        <p className="logo">{userName ? userName.slice(0, 2) : ''}</p>
        <h1 className="website">{website}</h1>
        <p className="name">{userName}</p>
        <p className="password">{showPassword}</p>
        <button data-testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="delete-img"
            onClick={onClickDeleteImg}
          />
        </button>
      </div>
    </li>
  )
}

export default PasswordListItem
