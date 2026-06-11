const Button = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <button
      className={`${className} hover:scale-105 active:scale-95 px-4 py-2 rounded-md bg-[var(--btn-primary-bg)] cursor-pointer transition-all duration-300`}
    >
      {text}
    </button>
  );
};

export default Button;
