import { useRouter } from "next/router";

const Note = () => {
  const router = useRouter();
  const { noteid } = router.query;

  return <p>Note id: {noteid}</p>;
};

export default Note;
