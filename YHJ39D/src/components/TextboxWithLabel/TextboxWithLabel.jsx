import { Input } from "@/components/ui/input"

const TextboxWithLabel = ({ id, value, label, description, placeholder, onChange }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label><br/>
      <Input type="text" id={id} placeholder={placeholder} onChange={onChange} value={value} /><br/>
      <small>{description}</small>
    </div>
  );
};

export default TextboxWithLabel;