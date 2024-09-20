// eslint-disable-next-line react/prop-types
const Label = ({ htmlFor, children }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="absolute -top-5 left-0 text-sm text-white transition-all duration-0 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-focus:-top-5 peer-focus:text-sm peer-focus:text-white"
    >
      {children}
    </label>
  );
};

export default Label;
