const Spinner = () => {
  return (
    <div
      className="text-surface m-auto mt-40 h-[20rem] w-[20rem] animate-spin rounded-full border-8 border-solid border-current border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
      role="status"
    ></div>
  );
};

export default Spinner;
