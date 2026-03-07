import { type PropsWithChildren } from "react";
import "./styles.css";

interface Props extends PropsWithChildren, React.HTMLAttributes<HTMLDivElement> {
  isOpen?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const Overlay: React.FC<Props> = ({ isOpen = false, onClick, children, className, ...props }) => {
  if (!isOpen) return null;

  return (
    <div
      className={`overlay ${className}`}
      onClick={(e) => {
        onClick?.(e);
        e.stopPropagation();
      }}
      style={{ ...props.style, inset: props?.style?.inset ?? "0" }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Overlay;
