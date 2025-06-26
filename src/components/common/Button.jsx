export const Button = ({ children, onClick, className, variant = "default" }) => {
    const variants = {
      default: "bg-blue-500 text-white hover:bg-blue-600",
      ghost: "bg-transparent text-black hover:bg-yellow-300"
    };
    return (
      <button
        onClick={onClick}
        className={`px-4 py-2 rounded-xl font-semibol  ${variants[variant]} ${className}`}
      >
        {children}
      </button>
    );
  };