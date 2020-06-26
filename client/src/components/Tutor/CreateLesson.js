import React from "react";
import { styles } from "../../styles";

export default function CreateLesson() {
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <h3 className="mb-4 text-3xl font-semibold text-center">Create Lesson</h3>
      <div>
        <form className="center mx-auto" style={{ width: "500px" }}>
          <div className="mb-4">
            <label className={styles.label}>Title</label>
            <input
              type="text"
              name="title"
              className={styles.inputField}
              placeholder="Title"
              required
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className={styles.label}>Languages</label>
            <input
              type="text"
              name="languages"
              className={styles.inputField}
              placeholder="Languages"
              required
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className={styles.label}>Description</label>
            <textarea
              type="text"
              name="description"
              rows="8"
              className={styles.inputField}
              placeholder="Description"
              required
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="mb-4">
            <label className={styles.label}>Pricing</label>
            <input
              type="number"
              name="pricing"
              className={styles.inputField}
              placeholder="Pricing"
              required
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label className={styles.label}>VideoUrl</label>
            <input
              type="number"
              name="videoUrl"
              className={styles.inputField}
              placeholder="VideoUrl"
              required
              onChange={handleChange}
            />
          </div>
          <div>
            <button type="submit" className={styles.button}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
