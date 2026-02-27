import { Form } from "react-bootstrap";
import { useState } from "react";
import "./styles.css";

interface Option {
  id: number;
  value: string;
}

interface Props {
  data?: Option[];
  selected?: Option[];
  onChange?: (selected: Option[]) => void;
  color?: string;
}

const CheckBox: React.FC<Props> = ({ data = [], onChange, selected = [], color = "#121f0a" }) => {
  const [selectedValues, setSelectedValues] = useState<number[]>(selected.map(({ id }) => id));

  const handleChange = (value: number) => {
    let updated: number[];

    if (selectedValues.includes(value)) {
      updated = selectedValues.filter((v) => v !== value);
    } else {
      updated = [...selectedValues, value];
    }

    setSelectedValues(updated);

    onChange?.(data.filter((item) => updated.includes(item.id)));
  };

  return (
    <Form>
      {data.map((item) => (
        <Form.Check
          type="checkbox"
          className="check-box"
          style={{ color }}
          id={item.value}
          label={item.value}
          value={item.value}
          checked={selectedValues.includes(item.id)}
          onChange={() => handleChange(item.id)}
        />
      ))}
    </Form>
  );
};

export default CheckBox;
