import React from "react";

export default function CreateLesson() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("This works");
  };

  return (
    <div>
      <div className="container">
        <h3 className="is-size-3 py-5 has-text-centered">Create Lesson</h3>
        <form className="form-500" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="title" className="label">
              Title
            </label>
            <div className="control">
              <input className="input" type="text" name="title" required />
            </div>
          </div>
          <div className="field">
            <label htmlFor="rate" className="label">
              Rate ($/hr)
            </label>
            <div className="control">
              <input className="input" type="number" name="rate" />
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
              Category
            </label>
            <div className="control">
              <input className="input" type="text" name="categories" />
            </div>
          </div>
          <div className="field">
            <label htmlFor="lessonBanner" className="label">
              Lesson Banner
            </label>
            <div className="file has-name">
              <label className="file-label">
                <input className="file-input" type="file" name="lessonBanner" />
                <span className="file-cta">
                  <span className="file-icon has-text-grey-darker">
                    <i className="fas fa-upload"></i>
                  </span>
                  <span className="file-label has-text-grey-darker">
                    Choose a file…
                  </span>
                </span>
                <span className="file-name">Banner Name</span>
              </label>
            </div>
          </div>
          <div className="field">
            <label htmlFor="description" className="label">
              Description
            </label>
            <div className="control">
              <textarea className="textarea" type="text" name="description" />
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-primary">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
