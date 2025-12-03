import React from "react";

export async function fetchAllPosts() {
  const response = await fetch(`https://dummyjson.com/posts`, {
    next: { tags: ["posts"] },
  });
  const result = await response.json();
  if (!response.ok) throw new Error(JSON.stringify(result));
  return result?.posts;
}

const TestTwoPage = async () => {
  const posts = await fetchAllPosts();
  return (
    <React.Fragment>
      <main>
        <pre>{JSON.stringify(posts, null, 2)}</pre>
      </main>
    </React.Fragment>
  );
};

export default TestTwoPage;
