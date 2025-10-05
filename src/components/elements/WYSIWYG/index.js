import { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";

// Plugins
import Header from "@editorjs/header";
import List from "@editorjs/list";
import ImageTool from "@editorjs/image";
import CodeTool from "@editorjs/code";
import Table from "@editorjs/table";
import Embed from "@editorjs/embed";
import LinkTool from "@editorjs/link";

const WYSIWYG = () => {
  const editorRef = useRef(null);

  useEffect(() => {
    if (!editorRef.current) {
      const editor = new EditorJS({
        holder: "editorjs",
        autofocus: true,
        placeholder: "Mulai menulis artikel kamu di sini...",
        tools: {
          header: {
            class: Header,
            inlineToolbar: true,
          },
          list: {
            class: List,
            inlineToolbar: true,
          },
          code: {
            class: CodeTool,
          },
          table: {
            class: Table,
            inlineToolbar: true,
          },
          embed: {
            class: Embed,
            config: {
              services: {
                youtube: true,
                vimeo: true,
                twitter: true,
              },
            },
          },
          linkTool: {
            class: LinkTool,
            config: {
              endpoint: "/api/fetchUrl", // optional backend endpoint
            },
          },
          image: {
            class: ImageTool,
            config: {
              endpoints: {
                byFile: "/api/uploadImage", // upload endpoint
                byUrl: "/api/fetchImage", // fetch by URL
              },
            },
          },
        },
      });

      editorRef.current = editor;
    }

    // Cleanup
    return () => {
      if (editorRef.current && editorRef.current.destroy) {
        editorRef.current.destroy();
        editorRef.current = null;
      }
    };
  }, []);

  // Simpan konten editor ke JSON
  const handleSave = async () => {
    const savedData = await editorRef.current.save();
    console.log("EditorJS Output:", savedData);
    alert("Konten tersimpan di console.log()");
  };

  return (
    // <div className="p-6 bg-white border rounded-xl shadow-md">
    //   <h2 className="text-xl font-semibold mb-4">✍️ Blog Editor</h2>

    <div
      id="editorjs"
      className="prose max-w-none min-h-[300px] p-4 border rounded-lg"
    ></div>

    //     <button
    //     onClick={handleSave}
    //     className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
    //   >
    //     💾 Simpan
    //   </button>
    // </div>
  );
};

export default WYSIWYG;
