import Counter from "../components/Counter";
import { useAppDispatch, useAppSelector } from "../modules";
import { onIncrease, onDecrease, onIncreaseBy } from "../modules/counter";

function CounterContainer () {
    const { count } = useAppSelector(state => state.counter);
    const dispatch = useAppDispatch();

    const increase = () => dispatch(onIncrease());

    const decrease = () => dispatch(onDecrease());

    const increaseBy = (diff: number) => dispatch(onIncreaseBy(diff));

    return (
        <Counter
            count={count}
            increase={increase}
            decrease={decrease}
            increaseBy={increaseBy}
        />
    )
}

export default CounterContainer;

