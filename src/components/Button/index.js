import './styles.css';

export function Button({
  label,
  ...rest
}) {
  return(
    <button className="button-container" {...rest}>
      {label}
    </button>
  );
}