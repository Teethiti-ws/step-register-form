function Button({ children, onClick, disabled, styleType, type }) {
  const className =
    "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-3 ";

  const styled = {
    finished: className + " cursor-not-allowed",
  };

  switch (styleType) {
    case "nextBtn":
      return (
        <button type={type} onClick={onClick} className={className}>
          {children}
        </button>
      );

    case "backBtn":
      return (
        <button type={type} onClick={onClick} className={className}>
          {children}
        </button>
      );

    case "finished":
      return (
        <button
          type={type}
          disabled={disabled}
          onClick={onClick}
          className={styled[styleType]}
        >
          {children}
        </button>
      );

    default:
      break;
  }
}

export default Button;
