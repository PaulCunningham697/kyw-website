import { client } from "@/sanity/lib/client";
import { POST_QUERY } from "@/sanity/lib/queries";

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await client.fetch(POST_QUERY, { slug: params.slug });

  console.log(post);
  return (
    <div>
      <h1>{post.title}</h1>
      <div>{post.body.map((a) => a.children.map((b) => b.text))}</div>
      {post.mainImage && (
        <img src={post.mainImage.asset.url} alt={post.title} />
      )}
    </div>
  );
}
