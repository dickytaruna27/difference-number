import { useState } from "react";

export default function App() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState(null);

  function handleInput() {
    if (number) {
      const originalNumber = Number(number);
      const reversedNumber = Number(number.split("").reverse().join(""));
      const difference = Math.abs(originalNumber - reversedNumber);
      setResult(difference);
    } else {
      setResult(null);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="bg-white shadow-xl rounded-lg p-8 max-w-lg w-full">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Hitung Selisih Nomor
        </h1>
        <label className="block mb-4">
          <span className="block text-gray-700 font-semibold mb-2">
            Masukkan Nomor:
          </span>
          <input
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value.replace(/\D/g, ""))}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="Contoh: 123"
          />
        </label>
        <button
          onClick={handleInput}
          className="w-full bg-pink-600 text-white py-3 rounded-md shadow-md hover:bg-pink-700 transition duration-300"
        >
          Submit
        </button>
        <div className="mt-6 text-center">
          <p className="text-lg font-semibold text-gray-700">
            Hasil:{" "}
            <span className="text-pink-600">
              {result !== null ? result : "-"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
