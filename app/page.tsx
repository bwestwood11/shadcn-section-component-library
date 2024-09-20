import { MDXContent } from "@/components/mdxComponents";
import { documents } from "#site/content"

function getPostBySlug(slug: string) {
  return documents.find(document => document.slug === slug)
}

export default function Home() {
  console.log(documents)
  return (
    <div className="max-w-7xl mx-auto ">
      <MDXContent code={documents[0].content} />
    </div>
  );
}
