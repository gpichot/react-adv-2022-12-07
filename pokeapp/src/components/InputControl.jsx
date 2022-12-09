import React from "react";
import classnames from "classnames";

import styles from "./InputControl.module.scss";

/**
 * @param {{ label?: string } & React.ComponentProps<'input'>} props Props
 */

function InputControlBase({ label, className, name, ...inputProps }, ref) {
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
