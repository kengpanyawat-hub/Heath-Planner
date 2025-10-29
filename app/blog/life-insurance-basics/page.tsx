import Article, { Post } from "@/components/blog/Article";
import posts from "@/data/posts.json";
const post = (posts as Post[]).find(p => p.slug === "life-insurance-basics")!;
export const metadata = { title: post?.title ?? "", description: post?.excerpt ?? "" };
export default function Page() { return <Article post={post} />; }
