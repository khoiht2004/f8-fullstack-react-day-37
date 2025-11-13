import { forwardRef, useImperativeHandle, useRef } from "react";

const NewTextInput = forwardRef(({ type = "text", value, ...props }, ref) => {
    const inputRef = useRef(null);

    useImperativeHandle(ref, () => {
        return {
            focus() {
                inputRef.current.focus()
            }
        }
    })

    return (
        <>
            <label>
                <input
                    {...props}
                    type={type}
                    value={value}
                    ref={inputRef}
                />
            </label>
        </>
    )
})

export default NewTextInput;