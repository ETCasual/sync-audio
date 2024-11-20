import { doc, updateDoc } from "firebase/firestore";
import { useFirestore, useFirestoreDocData } from "reactfire";

const Panel = () => {
  const db = useFirestore();

  const dbRef = doc(db, "audio/settings");
  const { status, data } = useFirestoreDocData(dbRef);

  const update = async (ans: string) => {
    await updateDoc(dbRef, {
      play: ans,
    });
  };

  const display =
    status === "loading"
      ? "loading"
      : status === "success"
        ? (data.play as string)
        : "Error";

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-[url('/BG_MOBILE.jpg')] bg-cover bg-center">
      <div className="flex w-full max-w-[300px] flex-col gap-2 rounded-md bg-white p-2">
        <p className="w-full text-center font-[Arial] text-base text-black">
          Play audio? (current: {display})
        </p>
        <button
          onClick={() => update("GREATEST")}
          className={`w-full rounded-md border bg-green-400 py-2 font-[Arial]`}
        >
          GREATEST
        </button>
        <button
          onClick={() => update("TIMER")}
          className={`w-full rounded-md border bg-green-400 py-2 font-[Arial]`}
        >
          TIMER
        </button>
        <button
          onClick={() => update("SQUID")}
          className={`w-full rounded-md border bg-green-400 py-2 font-[Arial]`}
        >
          SQUID
        </button>
        <button
          onClick={() => update("STOP")}
          className={`w-full rounded-md border bg-red-500 py-2 font-[Arial]`}
        >
          STOP
        </button>
      </div>
    </main>
  );
};

export default Panel;
