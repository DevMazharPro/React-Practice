type Input = {
  label: string,
  amount: number,
  onAmountChange?: (amount: number) => void;
  currencyOptions: string[],
  selectCurrency: string,
  onCurrencyChange: (name: string) => void
}

function InputBox(
  {label,
  amount,
  onAmountChange,
  currencyOptions = [],
  selectCurrency = "usd",
  onCurrencyChange,
  }: Input) {
  return (
    <>
      <div className="w-1/3 bg-slate-900 flex justify-between py-2 px-4 text-white rounded">
        <div className="flex flex-col gap-2">
          <label className="font-bold">{label}</label>
          <input type="number" className="text-white" placeholder="Amount" value={amount} onChange={(e) => {
            onAmountChange && onAmountChange(Number(e.target.value))
          }}/>
        </div>
        <div className="flex flex-col gap-2">
          <h3>Select Currency</h3>
          <select className="outline px-2" value={selectCurrency} onChange={(e) => {
            onCurrencyChange && onCurrencyChange(e.target.value)
          }}>
            {currencyOptions.map((Currency) => (
              <option key={Currency} value={Currency} className="text-black bg-slate-200">
                {Currency.toUpperCase()}
              </option>
            )
            )}
          </select> 
        </div>
      </div>
    </>
  )
}

export default InputBox;