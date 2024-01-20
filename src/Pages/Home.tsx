



import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { decrement, increment, incrementByValue } from "../redux/feature/counterSlice";
import { RootState } from "../redux/store";

const Home = () => {

  const count = useAppSelector((state: RootState) => state.counter.count);
  const dispatch = useAppDispatch();

  return (
    <div className="flex gap-6 justify-center">
      <button
        onClick={() => dispatch(increment())}
        className="btn btn-active btn-primary"
      >
        Increment
      </button>
      <p>{count}</p>
      <button
       onClick={() => dispatch(decrement())} 
       className="btn">
        Decrement
      </button>
      <button
        onClick={() => dispatch(incrementByValue(5))}
        className="btn btn-secondary ms-5"
      >
        IncrementValue
      </button>
    </div>
  );
};

export default Home;