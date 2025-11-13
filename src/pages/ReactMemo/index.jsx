import { memo, useCallback, useState } from "react";

const ChildComponent1 = memo(({ value, onIncrease }) => {
    console.log("Re-render Count 1");

    return (
        <div className="flex items-center gap-1">
            <button
                className="rounded-lg border-2 p-1 cursor-pointer"
                onClick={onIncrease}
            >Tăng count 1</button>
            <p>Child 1 Count: {value}</p>
        </div>
    )
})


const ChildComponent2 = memo(({ value, onIncrease }) => {
    console.log("Re-render Count 2");

    return (
        <div className="flex items-center gap-1 ">
            <button
                className="rounded-lg border-2 p-1 cursor-pointer"
                onClick={onIncrease}
            >Tăng count 2</button>
            <p>Child 2 Count: {value}</p>
        </div>
    )
})


function ReactMemo() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const handleCount1 = useCallback(() => {
        setCount1(count1 + 1)
    }, [count1])

    const handleCount2 = useCallback(() => {
        setCount2(count2 + 1)
    }, [count2])

    return (
        <div className="p-2 flex flex-col gap-2.5">
            <ChildComponent1 value={count1} onIncrease={handleCount1} />
            <ChildComponent2 value={count2} onIncrease={handleCount2} />
        </div>
    )
}

export default ReactMemo;