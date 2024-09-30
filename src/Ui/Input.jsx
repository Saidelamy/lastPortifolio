import { useFormContext } from 'react-hook-form';
import { CiWarning } from 'react-icons/ci';

// eslint-disable-next-line react/prop-types
const Input = ({ name, rules, type, id, placeholder, ...props }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div>
      <input
        {...props}
        type={type}
        name={name}
        id={id}
        className="focus:border-b-blac k peer h-12 w-full border-b-2 border-gray-300 bg-transparent px-2 py-3 text-white placeholder-transparent caret-lime-400 focus:border-b-white focus:outline-none"
        placeholder={placeholder}
        {...register(name, rules)}
        autoComplete="nope"
      />
      <p className="flex items-center gap-1 pt-2 text-lg font-normal text-[#ff3636]">
        <span className="text-2xl">
          {errors?.[name]?.message ? <CiWarning /> : null}
        </span>
        {errors?.[name]?.message}
      </p>
    </div>
  );
};

export default Input;
