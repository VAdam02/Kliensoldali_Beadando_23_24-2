import { Input } from "@/components/ui/input"

const TextboxWithLabel = ({ id, value, label, description, placeholder, onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  }

  return (
    <div>
      <label htmlFor={id}>{label}</label><br/>
      <Input type="text" id={id} placeholder={placeholder} onChange={handleChange} value={value} /><br/>
      <small>{description}</small>
    </div>
  );
};

export default TextboxWithLabel;