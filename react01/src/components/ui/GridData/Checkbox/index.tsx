import React, {
  forwardRef,
  RefObject,
  useImperativeHandle,
  useRef,
} from "react";

interface ICheckboxProps {
  tabIndex: number;
  checked?: boolean;
  onFocusCheckbox?: (localRef: RefObject<HTMLInputElement>) => void;
  onChangeCheckbox?: () => void;
  onChangeAllCheckbox?: () => void;
}
export interface ICheckboxHandle {
  getInstanceOfCheckboxRef: () => RefObject<HTMLInputElement>;
}

const Checkbox = forwardRef<ICheckboxHandle, ICheckboxProps>(
  (
    {
      tabIndex,
      checked,
      onChangeCheckbox,
      onChangeAllCheckbox,
      onFocusCheckbox,
    },
    ref,
  ) => {
    const checkboxRef = useRef<HTMLInputElement | null>(null);

    useImperativeHandle(ref, () => ({
      getInstanceOfCheckboxRef: () => {
        return checkboxRef;
      },
    }));

    return (
      <>
        <input
          style={{ outline: "none" }}
          type="checkbox"
          tabIndex={tabIndex}
          ref={checkboxRef}
          checked={checked}
          onFocus={
            onFocusCheckbox ? () => onFocusCheckbox(checkboxRef) : undefined
          }
          onChange={
            onChangeCheckbox
              ? () => onChangeCheckbox()
              : onChangeAllCheckbox
                ? () => onChangeAllCheckbox()
                : undefined
          }
        />
      </>
    );
  },
);

export default Checkbox;
