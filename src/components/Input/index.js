import './styles.css';

export function Input({
  placeholder = '',
  icon: Icon,
  label,
  withLabel = false,
  ...rest
}) {
  return(
    <>
      {withLabel && <label className="label-input">{label}:</label>}
      <div className="input-container">
        {Icon && <Icon size={20}/>}
        <input placeholder={placeholder} {...rest} />
      </div>
    </>
  );
}