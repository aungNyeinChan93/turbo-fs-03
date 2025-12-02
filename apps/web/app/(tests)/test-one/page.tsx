import React from "react";
import { Quote } from "@repo/types/quotes/quotes-types";

export async function getAllQuotes() {
  const response = await fetch("http://localhost:3002/quotes");
  const parseRes: Quote[] = await response?.json();
  if (!response?.ok) throw new Error(JSON.stringify(parseRes));
  return parseRes;
}

const TestOne = async () => {
  const quotes: Quote[] = await getAllQuotes();
  return (
    <React.Fragment>
      <main className="">
        <pre>{JSON.stringify(quotes, null, 2)}</pre>
      </main>
    </React.Fragment>
  );
};

export default TestOne;
