export const colors = {
  primary: "orange-500",
  primaryDark: "orange-600",
};

const transition = `transition duration-300 ease-in-out`;

export const styles = {
  button: `${transition} py-2 px-4 bg-${colors.primary} rounded text-white font-semibold hover:bg-${colors.primaryDark}`,
  navLink: `${transition} px-3 hover:text-${colors.primaryDark}`,
  inputField: `${transition} shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`,
  label: `block text-gray-700 text-sm font-bold mb-2`,
  fullRoundButton: `${transition} rounded-full text-${colors.primary} shadow-md bg-white py-1 px-1 mb-4 mx-2 hover:bg-gray-600 hover:text-${colors.primaryDark}`,
  formWithShadow: `bg-gray-600 shadow-md rounded`,
};
