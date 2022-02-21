import './styles.css';

export function Input({
  placeholder,
  icon: Icon,
  ...rest
}) {
  return(
    <div className="input-container">
      <Icon size={20}/>
      <input placeholder={placeholder} {...rest} />
    </div>
  );
}