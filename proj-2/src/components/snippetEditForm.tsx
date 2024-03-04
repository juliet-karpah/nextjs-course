"use client";
import { useState } from "react";
import type { Snippet } from "@prisma/client";
import Editor from "@monaco-editor/react";
import * as actions from "../actions";

interface SnippetEditFormPage {
  snippet: Snippet;
}

export default function SnippetEditForm({ snippet }: SnippetEditFormPage) {
    const [code, setCode] = useState(snippet.code)

    const handleEditorChange =(value: string = "")=> {
        setCode(value)
    }

    const editSnippetAction = actions.editSnippet.bind(null,snippet.id,code )

  return (
    <div>
      <Editor
        height={"40vh"}
        theme="vs-dark"
        language="javascript"
        defaultValue={code}
        options={{minimap:{enabled: false}}}
        onChange={handleEditorChange}
      ></Editor>
      <form action={editSnippetAction}>
        <button type="submit" className="p-2 border rounded">save</button>
      </form>
    </div>
  );
}
