import React, { useState } from "react";

export default function App() {
  const [display, setDisplay] = useState("0");
  const [currentValue, setCurrentValue] = useState("");
  const [operator, setOperator] = useState(null);
  const [previousValue, setPreviousValue] = useState(null);

  const handleClick = (value) => {
    if (value === "+" || value === "-" || value === "*" || value === "/") {
      if (currentValue) {
        setOperator(value);
        setPreviousValue(currentValue);
        setCurrentValue("");
      }
    } else if (value === "=") {
      if (operator && previousValue !== null) {
        const currentNum = parseFloat(currentValue);
        const previousNum = parseFloat(previousValue);
        let result;
        switch (operator) {
          case "+":
            result = previousNum + currentNum;
            break;
          case "-":
            result = previousNum - currentNum;
            break;
          case "*":
            result = previousNum * currentNum;
            break;
          case "/":
            result = previousNum / currentNum;
            break;
          default:
            return;
        }
        setDisplay(result.toString());
        setCurrentValue(result.toString());
        setOperator(null);
        setPreviousValue(null);
      }
    } else if (value === "AC") {
      setDisplay("0");
      setCurrentValue("");
      setOperator(null);
      setPreviousValue(null);
    } else if (value === "%") {
      const result = (parseFloat(currentValue) / 100).toString();
      setDisplay(result);
      setCurrentValue(result);
    } else if (value === "+/-") {
      const result = (-parseFloat(currentValue)).toString();
      setDisplay(result);
      setCurrentValue(result);
    } else {
      const newValue = currentValue === "0" ? value.toString() : currentValue + value.toString();
      setDisplay(newValue);
      setCurrentValue(newValue);
    }
  };

  return (
    <>
      <p className="text-4xl text-gray-400 font-mono font-bold text-center mt-3">Calculate</p>
      <div className="grid grid-cols-4 bg-gray-300 mx-auto w-[480px] mt-5 items-center shadow-2xl">
        <div className="col-span-4 flex justify-end bg-gray-400 text-white text-4xl border-b h-[65px] pr-2 items-center">{display}</div>
        <p onClick={() => handleClick("AC")} className="border col-span-1 h-[65px] text-center text-3xl pt-2">AC</p>
        <p onClick={() => handleClick("+/-")} className="border col-span-1 h-[65px] text-center text-3xl pt-2">+/-</p>
        <p onClick={() => handleClick("%")} className="border col-span-1 h-[65px] text-center text-3xl pt-2">%</p>
        <p onClick={() => handleClick("/")} className="border col-span-1 h-[65px] text-center text-3xl pt-2 bg-orange-400">/</p>
        <p onClick={() => handleClick(7)} className="border col-span-1 h-[65px] text-center text-3xl pt-2">7</p>
        <p onClick={() => handleClick(8)} className="border col-span-1 h-[65px] text-center text-3xl pt-2">8</p>
        <p onClick={() => handleClick(9)} className="border col-span-1 h-[65px] text-center text-3xl pt-2">9</p>
        <p onClick={() => handleClick("*")} className="border col-span-1 h-[65px] text-center text-3xl pt-2 bg-orange-400">x</p>
        <p onClick={() => handleClick(4)} className="border col-span-1 h-[65px] text-center text-3xl pt-2">4</p>
        <p onClick={() => handleClick(5)} className="border col-span-1 h-[65px] text-center text-3xl pt-2">5</p>
        <p onClick={() => handleClick(6)} className="border col-span-1 h-[65px] text-center text-3xl pt-2">6</p>
        <p onClick={() => handleClick("-")} className="border col-span-1 h-[65px] text-center text-3xl pt-2 bg-orange-400">-</p>
        <p onClick={() => handleClick(1)} className="border col-span-1 h-[65px] text-center text-3xl pt-2">1</p>
        <p onClick={() => handleClick(2)} className="border col-span-1 h-[65px] text-center text-3xl pt-2">2</p>
        <p onClick={() => handleClick(3)} className="border col-span-1 h-[65px] text-center text-3xl pt-2">3</p>
        <p onClick={() => handleClick("+")} className="border col-span-1 h-[65px] text-center text-3xl pt-2 bg-orange-400">+</p>
        <p onClick={() => handleClick(0)} className="col-span-2 border h-[65px] text-center text-3xl pt-2">0</p>
        <p onClick={() => handleClick(".")} className="border col-span-1 h-[65px] text-center text-3xl pt-2">.</p>
        <p onClick={() => handleClick("=")} className="border col-span-1 h-[65px] text-center text-3xl pt-2 bg-orange-400">=</p>
      </div>
    </>
  );
}
