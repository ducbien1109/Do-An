import { useSelector } from "react-redux";
import Section from "../components/body/bottom/Section";

export default function HomePage() {
  const { playlists, artists } = useSelector((state) => state.spotify);
  return (
    <div className=" overflow-scroll">
      <Section listCard={playlists} title={"Playlists"} toPage={"/playlist"} />
      <Section listCard={artists} title={"Artists"} toPage={"/artist"} />
    </div>
  );
}
