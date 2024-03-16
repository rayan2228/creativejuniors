const Flex = ({ children, className, style }) => {
  return (
    <div className={`flex ${className}`} style={style}>
      {children}
    </div>
  );
};

export default Flex;
