import React from "react";
import { styles } from "../styles";

export default function EditProfile() {
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const renderDpField = () => {
    if (localStorage.role === "tutor")
      return (
        <div className="mb-4">
          <label className={styles.label}>Display Picture</label>
          <input
            type="file"
            name="displayPicture"
            className={styles.inputField}
            onChange={handleChange}
          />
        </div>
      );
  };

  return (
    <div>
      <h3
        className={`mb-4 text-3xl font-semibold ${
          localStorage.role === "tutor" ? "text-center" : "mt-6"
        }`}
      >
        Edit Profile
      </h3>
      <form className="center mx-auto" style={{ width: "500px" }}>
        <div className="mb-4">
          <label className={styles.label}>Name</label>
          <input
            type="text"
            name="name"
            className={styles.inputField}
            placeholder="Name"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className={styles.label}>Email</label>
          <input
            type="text"
            name="email"
            className={styles.inputField}
            placeholder="Email"
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label className={styles.label}>Password</label>
          <input
            type="password"
            name="password"
            className={styles.inputField}
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
        {renderDpField()}
        <div>
          <button type="submit" className={styles.button}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
