import React from "react";
import classnames from "classnames";

import styles from "./InputControl.module.scss";

/**
 * @param {{ label?: string } & React.ComponentProps<'input'>} props Props
 * @returns
 */

export default function InputControl({
  label,
  className,
  name,
  ...inputProps
}) {
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
