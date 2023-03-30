import { useRouter } from "next/router";

export async function getServerSideProps(context: any) {
  const noteid = context.params.noteid;
}

const Note = () => {
  return (
    <>
      <div></div>
    </>
  );
};

export default Note;
