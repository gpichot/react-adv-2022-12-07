import React from "react";
import classnames from "classnames";

import styles from "./InputControl.module.scss";

type InputControlProps = {
  label?: string;
} & React.ComponentPropsWithoutRef<"input">;


export default function InputControl({
  label,
  className,
  name,
  ...inputProps
}: InputControlProps) {
  const id = `input-${name}`;
  return (
    <div
      className={classnames(styles.inputControl, className, {
        [styles.inputControlRequired]: inputProps.required,
      })}
    >
      {label && <label htmlFor={id}>{label}</label>}
      <input {...inputProps} id={id} name={name} />
    </div>
  );
}
