import "./App.css";
import InputBox from "./components/InputBox";
import "./index.css";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import { useEffect, useState } from "react";

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("pkr");
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo: Record<string, number> = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  useEffect(() => { 
    convert()
  },
  [amount, currencyInfo, from, to])
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <div className="text-amber-600 font-bold text-3xl text-center mb-8">
          Currency Converter App Using{" "}
          <span className="text-yellow-400">React</span>,{""}
          <span className="text-blue-400">TypeScript</span> and{" "}
          <span className="text-red-400">TailwindCSS</span>!
        </div>
        <InputBox
          label="From"
          amount={amount}
          currencyOptions={options}
          onAmountChange={(amount) => setAmount(amount)}
          onCurrencyChange={(currency) => setFrom(currency)}
          selectCurrency={from}
        />
        <button onClick={swap} className="bg-amber-500 px-4 text-xl font-bold py-1 rounded-xl text-white">
          Swap
        </button>
        <InputBox
          label="To"
          amount={convertedAmount}
          currencyOptions={options}
          onCurrencyChange={(currency) => setTo(currency)}
          selectCurrency={to}
        />
      </div>
    </>
  );
}

export default App;
