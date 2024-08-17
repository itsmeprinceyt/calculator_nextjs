"use client";
import { useState, useEffect } from "react";
export default function Home() {
  const [equation, setEquation] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    try {
      if (equation !== "") {
        setResult(equation);
        setEquation(equation);
      }
    } catch (error) {
      setResult("Error");
    }
  }, [equation]);

  const Adding = (event) => {
    if (event === "C") {
      setEquation("");  // Clear the equation
      setResult("");    // Clear the result
    } else if (event === "D") {
      const removedEquation = result.slice(0, result.length - 1);
      setResult(removedEquation);
      setEquation(removedEquation);
    } else if (event === "=") {
      setResult(eval(equation));
      setEquation(eval(equation));
    } else {
      setEquation((prev) => prev + event);
    }
  };

  return (
    <div className="bg-gradient-to-tr from-indigo-100  to-purple-400 min-h-screen flex justify-center items-center">
      <div className="bg-purple-200 border-2 border-purple-800/50 rounded-lg flex flex-col justify-center items-center gap-4 p-4 shadow-2xl shadow-black/40">
        <div className="flex flex-col justify-center items-center">
          {/*<h2 className="text-6xl font-bold text-transparent bg-clip-text bg-purple-600"> Calculator </h2>*/}
          <h2 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-pink-600 to-purple-600"> Calculator </h2>
          <h2 className="text-[13px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-pink-600 to-purple-600"> Made by @itsmeprinceyt </h2>
        </div>
        <span className="bg-gradient-to-tr from-indigo-600  to-purple-500 h-[2px] w-4/5 opacity-50 "></span>
        <div className="flex flex-col justify-center items-center gap-3">
          <input
            value={result}
            onChange={result}
            disabled={true}
            className="bg-gradient-to-tr from-indigo-600  to-purple-500 px-5 py-2 rounded-full text-white shadow-md shadow-black/20 w-max  overflow-hidden overflow-ellipsis"
          />
          <div className="grid grid-cols-4 justify-center items-center gap-4 p-2">
            <button
              onClick={() => { Adding("C") }}
              className="bg-gradient-to-tr from-indigo-600 to-purple-500 text-white rounded-full h-[50px] w-[50px] shadow-md shadow-black/30 hover:from-indigo-600 hover:to-purple-800">C</button>

            <button
              onClick={() => { Adding("D") }}
              className="bg-gradient-to-tr from-indigo-600 to-purple-500 text-white rounded-full h-[50px] w-[50px] shadow-md shadow-black/30 hover:from-indigo-600 hover:to-purple-800">D</button>

            <button
              onClick={() => { Adding("%") }}
              className="bg-gradient-to-tr from-indigo-600 to-purple-500 text-white rounded-full h-[50px] w-[50px] shadow-md shadow-black/30 hover:from-indigo-600 hover:to-purple-800">%</button>

            <button
              onClick={() => { Adding("/") }}
              className="bg-gradient-to-tr from-indigo-600 to-purple-500 text-white rounded-full h-[50px] w-[50px] shadow-md shadow-black/30 hover:from-indigo-600 hover:to-purple-800">/</button>

            <button
              onClick={() => { Adding("7") }}
              className="bg-gradient-to-tr from-indigo-600 to-purple-500 text-white rounded-full h-[50px] w-[50px] shadow-md shadow-black/30 hover:from-indigo-600 hover:to-purple-800">7</button>

            <button
              onClick={() => { Adding("8") }}
              className="bg-gradient-to-tr from-indigo-600 to-purple-500 text-white rounded-full h-[50px] w-[50px] shadow-md shadow-black/30 hover:from-indigo-600 hover:to-purple-800">8</button>

            <button
              onClick={() => { Adding("9") }}
              className="bg-gradient-to-tr from-indigo-600 to-purple-500 text-white rounded-full h-[50px] w-[50px] shadow-md shadow-black/30 hover:from-indigo-600 hover:to-purple-800">9</button>

            <button
              onClick={() => { Adding("*") }}
              className="bg-gradient-to-tr from-indigo-600 to-purple-500 text-white rounded-full h-[50px] w-[50px] shadow-md shadow-black/30 hover:from-indigo-600 hover:to-purple-800">*</button>

            <button
              onClick={() => { Adding("4") }}
              className="bg-gradient-to-tr from-indigo-600 to-purple-500 text-white rounded-full h-[50px] w-[50px] shadow-md shadow-black/30 hover:from-indigo-600 hover:to-purple-800">4</button>

            <button
              onClick={() => { Adding("5") }}
              className="bg-gradient-to-tr from-indigo-600 to-purple-500 text-white rounded-full h-[50px] w-[50px] shadow-md shadow-black/30 hover:from-indigo-600 hover:to-purple-800">5</button>

            <button
              onClick={() => { Adding("6") }}
              className="bg-gradient-to-tr from-indigo-600 to-purple-500 text-white rounded-full h-[50px] w-[50px] shadow-md shadow-black/30 hover:from-indigo-600 hover:to-purple-800">6</button>

            <button
              onClick={() => { Adding("-") }}
              className="bg-gradient-to-tr from-indigo-600 to-purple-500 text-white rounded-full h-[50px] w-[50px] shadow-md shadow-black/30 hover:from-indigo-600 hover:to-purple-800">-</button>

            <button
              onClick={() => { Adding("1") }}
              className="bg-gradient-to-tr from-indigo-600 to-purple-500 text-white rounded-full h-[50px] w-[50px] shadow-md shadow-black/30 hover:from-indigo-600 hover:to-purple-800">1</button>

            <button
              onClick={() => { Adding("2") }}
              className="bg-gradient-to-tr from-indigo-600 to-purple-500 text-white rounded-full h-[50px] w-[50px] shadow-md shadow-black/30 hover:from-indigo-600 hover:to-purple-800">2</button>

            <button
              onClick={() => { Adding("3") }}
              className="bg-gradient-to-tr from-indigo-600 to-purple-500 text-white rounded-full h-[50px] w-[50px] shadow-md shadow-black/30 hover:from-indigo-600 hover:to-purple-800">3</button>

            <button
              onClick={() => { Adding("+") }}
              className="bg-gradient-to-tr from-indigo-600 to-purple-500 text-white rounded-full h-[50px] w-[50px] shadow-md shadow-black/30 hover:from-indigo-600 hover:to-purple-800">+</button>

            <button
              onClick={() => { Adding(".") }}
              className="bg-gradient-to-tr from-indigo-600 to-purple-500 text-white rounded-full h-[50px] w-[50px] shadow-md shadow-black/30 hover:from-indigo-600 hover:to-purple-800">.</button>

            <button
              onClick={() => { Adding("0") }}
              className="bg-gradient-to-tr from-indigo-600 to-purple-500 text-white rounded-full h-[50px] w-[50px] shadow-md shadow-black/30 hover:from-indigo-600 hover:to-purple-800">0</button>

            <button
              onClick={() => { Adding("=") }}
              className="bg-gradient-to-tr from-indigo-600 to-purple-500 text-white rounded-full h-[50px] shadow-md shadow-black/30 col-span-2 hover:from-indigo-600 hover:to-purple-800">=</button>
          </div>
        </div>
      </div>
    </div>
  );
}
