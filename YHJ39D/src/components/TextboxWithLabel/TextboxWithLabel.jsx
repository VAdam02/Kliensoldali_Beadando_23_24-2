const TextboxWithLabel = ({ id, label, description, placeholder }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label><br/>
      <input type="text" id={id} placeholder={placeholder} /><br/>
      <small>{description}</small>
    </div>
  );
};

export default TextboxWithLabel;