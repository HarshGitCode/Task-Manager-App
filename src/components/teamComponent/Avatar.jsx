export const Avatar = ({ children, className }) => (
    <div className={`rounded-full overflow-hidden ${className}`}>
      {children}
    </div>
  );
  
  export const AvatarImage = ({ src, alt }) => (
    <img src={src} alt={alt} className="w-full h-full object-cover" />
  );
  
  export const AvatarFallback = ({ children }) => (
    <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500 text-lg">
      {children}
    </div>
  );
  