import { useEffect, useRef, useState } from "react";
import TextInput from "../../components/TextInput";
import NewTextInput from "../../components/NewTextInput";

function UseRef() {
    const [show, setShow] = useState(true);
    const clickButtonRef = useRef(0);
    const inputRef = useRef(null);
    const newInputRef = useRef(null);
    const removeBtnRef = useRef(null);

    console.log("Re-render", inputRef);

    useEffect(() => {
        console.log("Mount", inputRef);

        if (!inputRef.current) {
            removeBtnRef.current.innerText = "Mất em rồi"
            removeBtnRef.current.classList.add("bg-red-300", "border-red-500");
        }

        /** Hàm clean up
         * Hàm thực thi trong 2 trường hợp
         *  1, khi component unMount
         *  2, khi component được re-render và có ít nhất 1 depen thay đổi
         * Và được thực thi trước khi chạy useEffect
         */
        return () => {
            console.log("Un Mount");
        }
    }, [show])

    return (
        <>
            {/* Button click đếm số lần nhưng k render lại */}
            <button
                className="m-3 p-1.5 border-2 rounded-2xl cursor-pointer"
                onClick={() => {
                    clickButtonRef.current++;
                    console.log(clickButtonRef.current);
                    if (clickButtonRef.current % 5 === 0) {
                        alert(`Click ${clickButtonRef.current} lần`);
                    }
                }}>Nhấn em đi</button>

            {/* Input có thể remove */}
            {show && <TextInput
                id="username"
                name="username"
                placeholder="Nhập gì đó..."
                className="outline-2 p-1 pl-2 rounded-sm"
                ref={inputRef}
            />}
            <button
                className="m-3 p-1.5 border-2 rounded-2xl cursor-pointer"
                onClick={() => {
                    inputRef.current.focus();
                }}> 👈 Tập trung và em nè</button>
            <button
                ref={removeBtnRef}
                className="p-1.5 border-2 rounded-2xl cursor-pointer "
                onClick={() => {
                    inputRef.current.remove();
                    setShow(!show);
                }}>Xóa em</button>

            {/* Input chỉ có method focus() */}
            <NewTextInput
                id="email"
                name="email"
                placeholder="Nhập gì đó..."
                className="outline-2 p-1 pl-2 rounded-sm m-3"
                ref={newInputRef}
            />
            <button
                className=" p-1.5 border-2 rounded-2xl cursor-pointer"
                onClick={() => {
                    console.log(newInputRef.current);
                    if (newInputRef.current) {
                        newInputRef.current.focus();
                    }
                }}>👈 Tập trung vào em nè</button>

        </>
    )
}

export default UseRef;