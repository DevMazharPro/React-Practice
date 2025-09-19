import { useCallback, useEffect, useState, useRef } from 'react';
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [password, setPassword] = useState('');

  let passwordRef = useRef<HTMLInputElement>(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) { 
      str += "0123456789";
    }
    if (includeSymbols) { 
      str += "!@#$%^&*()_+";
    }
    for (let i = 1; i <= length; i++){
   let char = Math.floor(Math.random() * str.length + 1);
   pass += str.charAt(char)
    }
    setPassword(pass);   
  }, [length, includeNumbers, includeSymbols, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator, length, includeNumbers, includeSymbols]);

  return (
    <div className="bg-slate-700 h-1/3 w-1/2 m-auto mt-10 rounded-lg shadow-lg">
      <h1 className='text-white text-center text-3xl font-bold'>
        Password Generator
      </h1>
      <div className='flex justify-center items-center mt-3 px-4 py-2'>
        <input type="text" value={password} ref={passwordRef} readOnly className='outline text-2xl pl-3 text-amber-800 py-3 bg-amber-50 w-full rounded ' />
        <button className='bg-amber-500 text-white rounded p-4' onClick={() => {
          if (passwordRef.current) { 
            passwordRef.current.select();
            navigator.clipboard.writeText(passwordRef.current.value);
            alert("Password Copied to Clipboard");
          }
        }}>Copy</button>
      </div>
      <div className='flex justify-evenly items-center mt-3'>
        <input type="range" value={length} min={8} max={20} onChange={(e) => {
          setLength(Number(e.target.value))
        }} />
        <span className='text-white'>{length}</span>
        <input type="checkbox" checked={includeNumbers} onChange={() => {
          setIncludeNumbers((prev) => !prev)
        }} />
        <span className='text-white'>Include Numbers</span>
        <input type="checkbox" checked={includeSymbols} onChange={() => {
          setIncludeSymbols((prev) => !prev)
        }} />
        <span className='text-white'>Include Symbols</span>
      </div>
    </div>
  )
}

export default App
