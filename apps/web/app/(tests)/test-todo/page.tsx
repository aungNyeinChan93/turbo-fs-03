"use client";

import React from "react";

const TestTodo = () => {
  async function addTodo() {
    const response = await fetch("/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ task: "test task", status: true }),
    });
    const result = await response.json();
    alert("success");
    return result;
  }

  return (
    <React.Fragment>
      <main>
        <button type="button" onClick={addTodo}>
          Add Todo
        </button>
      </main>
    </React.Fragment>
  );
};

export default TestTodo;
