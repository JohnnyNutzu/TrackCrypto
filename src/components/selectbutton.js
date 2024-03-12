
const SelectButton = ({ children, onClick }) => {



  return (
    <span onClick={onClick}>
      {children}
    </span>
  );
};

export default SelectButton;