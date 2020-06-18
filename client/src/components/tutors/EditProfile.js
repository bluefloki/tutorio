import React from "react";

export default function EditProfile() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("This works");
  };

  return (
    <div>
      <div className="container">
        <h3 className="is-size-3 my-5 has-text-centered">Edit Profile</h3>
        <form className="form-500" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="name" className="label">
              Name
            </label>
            <div className="control">
              <input className="input" type="text" name="name" />
            </div>
          </div>
          <div className="field">
            <label htmlFor="email" className="label">
              Email
            </label>
            <div className="control">
              <input className="input" type="text" name="email" />
            </div>
          </div>
          <div className="field">
            <label htmlFor="password" className="label">
              Password
            </label>
            <div className="control">
              <input className="input" type="password" name="password" />
            </div>
          </div>
          <div className="field">
            <label htmlFor="languages" className="label">
              Languages
            </label>
            <div className="control">
              <input className="input" type="text" name="languages" />
            </div>
          </div>
          <div className="field">
            <label htmlFor="categories" className="label">
              Categories
            </label>
            <div className="control">
              <input className="input" type="text" name="categories" />
            </div>
          </div>
          <div className="field">
            <label htmlFor="displayPicture" className="label">
              Display Picture
            </label>
            <div className="file has-name">
              <label className="file-label">
                <input
                  className="file-input"
                  type="file"
                  name="displayPicture"
                />
                <span className="file-cta">
                  <span className="file-icon has-text-grey-darker">
                    <i className="fas fa-upload"></i>
                  </span>
                  <span className="file-label has-text-grey-darker">
                    Choose a file…
                  </span>
                </span>
                <span className="file-name">File Name</span>
              </label>
            </div>
          </div>
          <div className="field">
            <label htmlFor="bio" className="label">
              Bio
            </label>
            <div className="control">
              <textarea className="textarea" type="text" name="bio" />
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-primary">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
