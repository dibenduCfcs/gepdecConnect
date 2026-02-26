import { Form } from "react-bootstrap";
import { useState } from "react";
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
}

const RadioButton: React.FC<Props> = ({
  data = [],
  selected = { id: 0, value: "" },
  onChange,
  name = "radio-group",
}) => {
  const [selectedId, setSelectedId] = useState<number>(selected.id);

  const handleChange = (id: number) => {
    setSelectedId(id);
    const selectedOption = data.find((item) => item.id === id);
    if (selectedOption) {
      onChange?.(selectedOption);
    }
  };

  return (
    <Form>
      {data.map((item) => (
        <Form.Check
          className="radio-button"
          type="radio"
          name={name}
          id={`radio-${item.id}`}
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
