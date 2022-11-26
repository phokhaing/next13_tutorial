import { use } from "react";

async function getPosts() {
  let posts = await fetch("https://jsonplaceholder.typicode.com/posts");
  return posts.json();
}

export default function Page() {
  let { posts } = use(getPosts());
  console.log(posts);

  return (
    <div>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
}
