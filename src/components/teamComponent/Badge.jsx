export const Badge = ({ children, className }) => (
    <span className={`inline-block px-3 py-1 text-xs font-semibold bg-gray-200 text-gray-700 rounded-full ${className}`}>
      {children}
    </span>
  );
  