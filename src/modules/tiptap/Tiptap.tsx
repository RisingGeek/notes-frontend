import Underline from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect } from "react";
import MenuBar from "./MenuBar";
import styles from "./tiptap.module.css";

interface ITiptapProps {
  setDescription: (description: string) => void;
  defaultContent?: string;
}

const Tiptap = (props: ITiptapProps) => {
  const { setDescription, defaultContent } = props;
  const editor = useEditor({
    extensions: [StarterKit, Underline],
    content: ``,

    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      console.log("html", html)
      setDescription(html);
    },
  });

  useEffect(() => {
    console.log("cont", defaultContent)
    if (defaultContent) {
      editor?.commands.setContent(defaultContent);
    }
  }, [editor])

  return (
    <div className={styles.text_editor}>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default Tiptap;