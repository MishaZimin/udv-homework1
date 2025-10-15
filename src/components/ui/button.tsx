interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export function Button({ variant = 'primary', className = '', disabled, ...props }: ButtonProps) {
  const baseStyles = 'w-full py-2 px-3 font-medium transition-colors';
  const variants = {
    primary: `bg-black text-white hover:bg-gray-800 ${disabled ? 'bg-gray-400 cursor-not-allowed' : ''}`,
    secondary: 'bg-white text-black border border-gray-300 hover:bg-gray-50'
  };

  return (
    <button
      {...props}
      className={`${baseStyles} ${variants[variant]} ${className} rounded-[8px] cursor-pointer`}
      disabled={disabled}
    />
  );
}