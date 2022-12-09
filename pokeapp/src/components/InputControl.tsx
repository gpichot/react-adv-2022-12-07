import React from "react";
import classnames from "classnames";

import styles from "./InputControl.module.scss";

export type InputControlBaseProps = {
  label: string;
  name: string;
} & React.ComponentPropsWithRef<"input">;

function InputControlBase(
  { label, className, name, ...inputProps }: InputControlBaseProps,
  ref: React.Ref<HTMLInputElement>
) {
  const id = `input-${name}`;
  return (
    <div
      className={classnames(styles.inputControl, className, {
        [styles.inputControlRequired]: inputProps.required,
      })}
    >
      {label && <label htmlFor={id}>{label}</label>}
      <input {...inputProps} ref={ref} id={id} name={name} />
    </div>
  );
}

const InputControl = React.forwardRef(InputControlBase);

export default InputControl;
