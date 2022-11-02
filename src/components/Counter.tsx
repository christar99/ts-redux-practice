type CounterProps = {
    count: number;
    increase: () => void;
    decrease: () => void;
    increaseBy: (diff: number) => void;
}

function Counter({
    count,
    increase,
    decrease,
    increaseBy
}: CounterProps) {
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increase}> + 1 </button>
            <button onClick={decrease}> - 1 </button>
            <button onClick={() => increaseBy(5)}> + 5 </button>
        </div>
    )
}

export default Counter;