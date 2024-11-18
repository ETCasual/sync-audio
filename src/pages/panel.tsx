import { doc, updateDoc } from "firebase/firestore";
import { useFirestore } from "reactfire";

const Panel = () => {
  const db = useFirestore();

  const dbRef = doc(db, "audio/settings");
  //   const { status, data } = useFirestoreDocData(dbRef);

  const update = async (ans: boolean) => {
    await updateDoc(dbRef, {
      play: ans,
    });
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-[url('/BG_MOBILE.jpg')] bg-cover bg-center">
      <div className="flex w-full max-w-[300px] flex-col gap-2 rounded-md bg-white p-2">
        <p className="w-full text-center font-[Arial] text-base text-black">
          Play audio?
        </p>
        <button
          onClick={() => update(true)}
          className={`w-full rounded-md border border-green-400 bg-green-400 py-2`}
        >
          Play
        </button>
        <button
          onClick={() => update(false)}
          className={`w-full rounded-md border border-green-400 bg-green-400 py-2`}
        >
          Stop
        </button>
      </div>
    </main>
  );
};

export default Panel;
