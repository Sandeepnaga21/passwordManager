import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordListItem from '../PasswordListItem'
import './index.css'

class PasswordManager extends Component {
  state = {
    count: 0,
    passwordsList: [],
    userName: '',
    website: '',
    password: '',
    isCheckboxClicked: false,
  }

  onAddPassword = event => {
    event.preventDefault()

    const {passwordsList, userName, website, password, count} = this.state
    const newPassword = {
      id: uuidv4(),
      website,
      userName,
      password,
    }
    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newPassword],
      userName: '',
      password: '',
      count: prevState.count + 1,
    }))
  }

  onChangeWebsite = event => {
    this.setState({website: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({userName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeCheckbox = () => {
    this.setState(prevState => ({
      isCheckboxClicked: !prevState.isCheckboxClicked,
    }))
  }

  render() {
    const {
      count,
      passwordsList,
      isCheckboxClicked,
      website,
      userName,
      password,
    } = this.state

    return (
      <>
        <form className="app-container" onSubmit={this.onAddPassword}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            className="img"
            alt="app logo"
          />
          <div className="card-container">
            <div className="input-container">
              <h1 className="title">Add New Password</h1>
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                className="img"
                alt="website"
              />
              <input
                type="text"
                placeholder="Enter Website"
                onChange={this.onChangeWebsite}
                value={website}
              />
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                className="img"
                alt="username"
              />
              <input
                type="text"
                placeholder="Enter Username"
                onChange={this.onChangeUsername}
                value={userName}
              />
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                className="img"
                alt="password"
              />
              <input
                type="password"
                placeholder="Enter Password"
                onChange={this.onChangePassword}
                value={password}
              />
              <button type="submit" className="buuton">
                Add
              </button>
            </div>
            <div className="img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
                alt="password manager"
                className="img"
              />
            </div>
          </div>
        </form>
        <div className="results-container">
          <div className="search">
            <h1 className="search-heading">Your Passwords</h1>
            <p>{count}</p>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="img"
              />
              <input type="search" placeholder="Search" />
            </div>
          </div>
          <hr />
          <div className="passwords">
            <input
              type="checkbox"
              id="checkbox"
              onChange={this.onChangeCheckbox}
            />
            <label htmlFor="checkbox">Show Passwords</label>
            {count === 0 ? (
              <>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                />
                <p>No passwords</p>
              </>
            ) : (
              <>
                <ul className="passwords-list">
                  {passwordsList.map(eachOne => (
                    <PasswordListItem
                      passwordDetails={eachOne}
                      isCheckboxClicked={isCheckboxClicked}
                      key={eachOne.id}
                    />
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </>
    )
  }
}

export default PasswordManager
