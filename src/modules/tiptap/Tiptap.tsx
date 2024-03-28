import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import MenuBar from "./MenuBar";
import styles from "./tiptap.module.css";

interface ITiptapProps {
  setDescription: (description: string) => void;
}

const Tiptap = (props: ITiptapProps) => {
  const { setDescription } = props;
  const editor = useEditor({
    extensions: [StarterKit, Underline],
    content: ``,

    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      setDescription(html);
    },
  });

  return (
    <div className={styles.text_editor}>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default Tiptap;