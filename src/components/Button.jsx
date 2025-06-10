import '../styles/components/Button.css';

const Button = ({ children, onClick }) => (
  <button className="custom-button" onClick={onClick}>
    {children}
  </button>
);

export default Button;
