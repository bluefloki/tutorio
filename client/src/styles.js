export const colors = {
  primary: "orange-500",
  primaryDark: "orange-600",
};

const transition = `transition duration-300 ease-in-out`;

export const styles = {
  button: `${transition} py-2 px-4 bg-${colors.primary} rounded text-white font-semibold hover:bg-${colors.primaryDark} focus:outline-none`,
  navLink: `${transition} px-3 hover:text-${colors.primaryDark}`,
  dropDownLink: `${transition} hover:text-${colors.primaryDark} block px-4 pb-2 text-gray-800`,
  inputField: `${transition} shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`,
  label: `block text-gray-700 text-sm font-bold mb-2`,
  fullRoundButton: `${transition} rounded-full text-${colors.primary} shadow-md bg-white h-10 w-10 mb-4 mx-2 hover:bg-gray-600 hover:text-${colors.primaryDark} focus:outline-none`,
  fullRoundButtonPrimary: `${transition} rounded-full text-white shadow-md bg-${colors.primary} h-10 w-10 hover:bg-${colors.primaryDark} focus:outline-none`,
  formWithShadow: `bg-gray-600 shadow-md rounded`,
};
