import dynamic from "next/dynamic";
import Loader from "./Loader";

const App = dynamic(() => import("./App"), {
  loading: () => <Loader />,
});

export default function Home() {
  return (
    <main className="bg-black flex-1" id="root">
      <App />
    </main>
  );
}
