import useStore from "platform/hooks/useStore";
import { useStoreSelector } from "platform/hooks/useStoreSelector";

const Home = () => {
  const { decrementCounter, incrementByAmountCounter, incrementCounter } =
    useStore();
  const {
    counter: { value },
  } = useStoreSelector((state) => state);
  return (
    <div>
      <h1>Author App</h1>
      <br />
      <h1>Value: {value}</h1>
      <br />
      <button onClick={decrementCounter}>Set count </button>
    </div>
  );
};

export default Home;
