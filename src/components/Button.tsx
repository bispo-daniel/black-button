import React from "react";
import "./Button.css";
interface ButtonProps {
  label: string;
  width?: number;
  height?: number;
  color?: string;
  borderRadius?: number;
  onClick?: () => void;
  padding?: number;
  margin?: number;
  xPadding?: number;
  yPadding?: number;
  xMargin?: number;
  yMargin?: number;
}

export type { ButtonProps };

export const Button: React.FC<ButtonProps> = ({
  label,
  width,
  height,
  color,
  borderRadius,
  onClick,
  padding,
  margin,
  xPadding,
  yPadding,
  xMargin,
  yMargin,
}) => {
  return (
    <button
      className="button"
      style={{
        color,
        width,
        height,
        borderRadius,
        padding,
        margin,
        paddingLeft: xPadding,
        paddingRight: xPadding,
        paddingTop: yPadding,
        paddingBottom: yPadding,
        marginLeft: xMargin,
        marginRight: xMargin,
        marginTop: yMargin,
        marginBottom: yMargin,
      }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
