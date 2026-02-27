import { Form } from "react-bootstrap";
import { useId, useState } from "react";
import "./styles.css";

interface Option {
  id: number;
  value: string;
}

interface Props {
  data?: Option[];
  selected?: Option;
  onChange?: (selected: Option) => void;
  name?: string;
  color?: string;
}

const RadioButton: React.FC<Props> = ({
  data = [],
  selected = { id: 0, value: "" },
  onChange,
  name = "radio-group",
  color = "#121f0a",
}) => {
  const [selectedId, setSelectedId] = useState<number>(selected.id);
  const id = useId();

  const handleChange = (id: number) => {
    setSelectedId(id);
    const selectedOption = data.find((item) => item.id === id);
    if (selectedOption) {
      onChange?.(selectedOption);
    }
  };

  return (
    <Form id={id}>
      {data.map((item) => (
        <Form.Check
          className="radio-button"
          type="radio"
          name={name}
          id={`radio-${item.id}-${id}`}
          style={{ color }}
          label={item.value}
          value={item.value}
          checked={selectedId === item.id}
          onChange={() => handleChange(item.id)}
        />
      ))}
    </Form>
  );
};

export default RadioButton;
