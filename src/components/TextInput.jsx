import { forwardRef } from "react";

const TextInput = forwardRef(({ type = "text", value, ...props }, ref) => {
    return (
        <>
            <label>
                <input
                    {...props}
                    type={type}
                    value={value}
                    ref={ref}
                />
            </label>
        </>
    )
})

export default TextInput;