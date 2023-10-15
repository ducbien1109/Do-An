import SongTableBody from "./bottom/SongTableBody";

export default function ArtistTopSongTable({ tracks }) {
  return (
    <div className="mt-4">
      <table className="w-full">
        <thead>
          <tr className="p-4">
            <th>#</th>
            <th>Name</th>
            <th>Album</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {tracks?.map(({ album, duration_ms, name }, index) => (
            <SongTableBody
              key={index}
              index={index}
              imgUrl={album?.images[0]?.url}
              songName={name}
              artistName={album?.name}
              duration={duration_ms}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
