import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './index.css'

import UsersList from '../usersList'

class PasswordManager extends Component {
  state = {
    detailsList: [],
    website: '',
    username: '',
    password: '',
    checkedOrNot: false,
    search: '',
  }

  deleteFunction = id => {
    const {detailsList} = this.state
    const newList = detailsList.filter(eachItem => eachItem.id !== id)

    this.setState({detailsList: newList})
  }

  inputUser = event => {
    event.preventDefault()
    const {website, username, password, detailsList} = this.state
    const newObject = {id: uuidv4(), website, username, password}

    if (website !== '' && username !== '' && password !== '') {
      this.setState({
        detailsList: [...detailsList, newObject],
        website: '',
        username: '',
        password: '',
      })
    }
  }

  search = event => {
    this.setState({search: event.target.value})
  }

  inputWebsite = event => {
    this.setState({website: event.target.value})
  }

  username = event => {
    this.setState({username: event.target.value})
  }

  password = event => {
    this.setState({password: event.target.value})
  }

  emptyDetails = () => (
    <div className="usernameListContainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
        className="imageEmpty"
        alt="no passwords"
      />
      <p className="nopasswordHeading">No Passwords</p>
    </div>
  )

  usersListNames = () => {
    const {detailsList, checkedOrNot, search} = this.state

    const updatedList = detailsList.filter(eachItem =>
      eachItem.website.toLowerCase().includes(search.toLowerCase()),
    )

    return (
      <ul className="unorderedList">
        {updatedList.map(eachItem => (
          <UsersList
            websiteDetails={eachItem}
            key={eachItem.id}
            checkedOrNot={checkedOrNot}
            requiredFunction={this.deleteFunction}
          />
        ))}
      </ul>
    )
  }

  checkbox = event => {
    this.setState({checkedOrNot: event.target.checked})
  }

  render() {
    const {detailsList, website, username, password, search} = this.state

    const newList = detailsList.filter(eachItem =>
      eachItem.website.toLowerCase().includes(search),
    )

    return (
      <div className="bgContainer">
        <div className="insideContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            className="image1"
            alt="app logo"
          />
          <div className="passwordBox">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              className="passwordImage"
              alt="password manager"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              className="largePasswordImage"
              alt="password manager"
            />
            <form className="formElements" onSubmit={this.inputUser}>
              <div className="addNewPasswordBox">
                <h1 className="managerHeading">Add New Password</h1>
              </div>
              <div className="websiteBox">
                <div className="imageContainer">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    className="webImage"
                    alt="website"
                  />
                </div>
                <input
                  className="websiteInput"
                  type="text"
                  placeholder="Enter Website"
                  onChange={this.inputWebsite}
                  value={website}
                />
              </div>

              <div className="usernameBox">
                <div className="imageContainer">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png "
                    className="webImage"
                    alt="username"
                  />
                </div>
                <input
                  className="websiteInput"
                  type="text"
                  placeholder="Enter Username"
                  onChange={this.username}
                  value={username}
                />
              </div>

              <div className="passwordsBox">
                <div className="imageContainer">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    className="webImage"
                    alt="password"
                  />
                </div>
                <input
                  className="websiteInput"
                  type="password"
                  placeholder="Enter Password"
                  onChange={this.password}
                  value={password}
                />
              </div>

              <div className="buttonBox">
                <button className="addButton" type="submit">
                  Add
                </button>
              </div>
            </form>
          </div>

          <div className="secondContainer">
            <div className="topSection">
              <div className="usercountBox">
                <h1 className="passwordListHeading">Your Passwords</h1>
                <p className="userCount">{newList.length}</p>
              </div>
              <div className="searchUserBox">
                <div className="imageBox1">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png "
                    className="searchImage"
                    alt="search"
                  />
                </div>
                <input
                  type="search"
                  className="searchInput"
                  placeholder="Search"
                  onChange={this.search}
                />
              </div>
            </div>

            <hr className="horizontalLine" />
            <div className="checkboxBox">
              <div className="checkboxContainer">
                <input
                  type="checkbox"
                  id="showOrHidePasswords"
                  className="radioInput"
                  onChange={this.checkbox}
                />
                <label htmlFor="showOrHidePasswords" className="labelText">
                  Show Passwords
                </label>
              </div>
            </div>

            {newList.length > 0 ? this.usersListNames() : this.emptyDetails()}

            {/* <ul className="unorderedList">
              <li className="listItem">
                <div className="userDetailsBox">
                  <p className="userInitial">Y</p>
                  <div className="userDetails">
                    <p className="website">youtube.com</p>
                    <p className="originalName">rahul</p>
                    <p className="username">rahul123</p>
                  </div>
                </div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
                  className="deleteImage"
                />
              </li>
            </ul> */}

            {/* <div className="usernameListContainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                className="imageEmpty"
              />
              <h1 className="nopasswordHeading">No Passwords</h1>
            </div> */}
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
