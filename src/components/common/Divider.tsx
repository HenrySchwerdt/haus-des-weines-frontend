

type DividerProps = {
  bgColor: string;
  className?: string; 
};

export function Divider({ bgColor, className }: DividerProps) {
 
  
  // Concatenate custom class with bgClass if provided
  const classes = `flex items-center w-full ${className ? className : ''}`;

  return (
    <div className={classes}>
      <div className={`h-[2px] w-full ${bgColor}`}></div>
      <div className={`w-2 h-2 ${bgColor} transform rotate-45`}></div>
    </div>
  );
}
