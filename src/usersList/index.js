const UsersList = props => {
  const {websiteDetails, checkedOrNot, requiredFunction} = props
  const {id, website, username, password} = websiteDetails

  const deleteElement = () => {
    requiredFunction(id)
  }

  //   const=checkedOrNot?password:

  return (
    <li className="listItem">
      <div className="userDetailsBox">
        <p className="userInitial">{username[0]}</p>
        <div className="userDetails">
          <p className="website">{website}</p>
          <p className="originalName">{username}</p>
          {checkedOrNot ? (
            <p className="username">{password}</p>
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              className="hidePassword"
              alt="stars"
            />
          )}
        </div>
      </div>
      <button
        className="deleteButton"
        type="button"
        onClick={deleteElement}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          className="deleteImage"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default UsersList
