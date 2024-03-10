
const Button = ({className, href, onClick, children, fs, bg, tc}) => {
  const classes = `rounded-2xl font-semibold py-2 px-8 sm:px-16 
                  ${fs || "text-[18px]"} sm:text-[24px] 
                  ${bg || "bg-primary"} 
                  ${tc || "text-white"} 
                  ${className || ""}`;
  const renderButton = () => (
    <button className={classes}>
      <span>{children}</span>
    </button>
  );

  const renderLink = () => (
    <a href={href} onClick={onClick} className={classes}>
      <span>{children}</span>
    </a>
  );

  return href 
    ? renderLink() 
    : renderButton;
}

export default Button