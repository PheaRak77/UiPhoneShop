import { useState } from "react";

const BasicState = () => {
  const [Number, setNumber] = useState(0);
  const HandleCount = () => {
    setNumber(Number + 1);
  };
  function HandleUnCount() {
    if (Number < 1) {
      alert("What ?");
    } else {
      setNumber(Number - 1);
    }
  }
  return (
    <div className="text-center my-5 container m-m-auto">
      <h1>{Number}</h1>
      <div className="w-25 d-flex mx-3 justify-content-center mx-3">
        <button
          onClick={HandleCount}
          className="btn  btn-success py-2 px-4 rounded-4"
        >
          Increase
        </button>
        <button
          onClick={HandleUnCount}
          className="btn  btn-success py-2 px-4 rounded-4"
        >
          Dincrease
        </button>
        <button
          onClick={() => setNumber(0)}
          className="btn btn-info py-2 px-4 rounded-4"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default BasicState;
