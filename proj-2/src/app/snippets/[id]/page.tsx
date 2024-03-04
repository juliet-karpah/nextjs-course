import { db } from "@/db";
import { notFound } from "next/navigation";
import Link from "next/link";
import * as actions from "@/actions";

interface SnippetShowPageProps {
  params: {
    id: string;
  };
}

export default async function ShowSnippet(props: SnippetShowPageProps) {
  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(props.params.id) },
  });

  const deleteSnippetAction = async () => {
    "use server";
    await actions.deleteSnippet.bind(null, parseInt(props.params.id));
  };

  if (!snippet) {
    return notFound();
  }
  return (
    <div>
      <div className="flex m-4 justify-between items-center">
        {" "}
        <h1 className="text-xl font-bold"> {snippet.title}</h1>
        <div className="flex gap-4">
          <Link
            href={`/snippets/${snippet.id}/edit`}
            className="p-2 border rounded"
          >
            edit{" "}
          </Link>
          <form action={deleteSnippetAction}>
            {" "}
            <button type="submit" className="p-2 border rounded">
              {" "}
              delete{" "}
            </button>
          </form>
        </div>
      </div>
      <pre className="p-3 border rounder bg-gray-200">
        <code> {snippet.code} </code>
      </pre>
    </div>
  );
}

export async function generateStaticParams() {
  const snippets = await db.snippet.findMany();
  return snippets.map((snippet) => {
    return {
      id: snippet.id.toString(),
    };
  });
}
