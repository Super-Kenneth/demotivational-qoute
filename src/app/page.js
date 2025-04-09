"use client";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await axios.get(
          "https://api.breakingbadquotes.xyz/v1/quotes"
        );
        setQuotes(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching quotes:", error);
        setLoading(false);
      }
    };

    fetchQuotes();
  }, []);

  return (
    <main className=" relative h-screen w-full flex flex-col md:justify-center items-center bg-amber-50 text-center px-2">
      <h1 className=" text-4xl md:text-5xl font-bold mt-4">
        Demotivational Quotes
      </h1>
      <p className=" text-xl md:text-lg">(Quotes that you don't need)</p>
      <div className=" md:w-[50%] w-full mt-10 md:mt-4 bg-white text-center flex flex-col items-center p-4 border border-black shadow-lg shadow-black">
        {loading ? (
          <div className="text-3xl text-center">
            <p>Loading...</p>
          </div>
        ) : (
          quotes.map((quote, index) => (
            <div key={index}>
              <p className="text-3xl italic font-semibold">{quote.quote}</p>
              <p className="text-xl mt-4 text-gray-500">- {quote.author}</p>
              <button
                onClick={() => window.location.reload()}
                className=" border hover:border-black hover:bg-white p-4 hover:text-black cursor-pointer bg-black text-white transition duration-200 ease-in-out mt-4"
              >
                Get Another Quote
              </button>
            </div>
          ))
        )}
      </div>
      <footer className=" font-bold text-xl md:text-3xl p-2 w-full md:absolute bottom-0 text-left">
        © Kenneth Manuel
      </footer>
    </main>
  );
}
