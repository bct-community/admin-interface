import classNames from "classnames";

import { useRaids } from "./api/getRaids";
import CreateRaidSheet from "./components/CreateRaidSheet";
import RaidCard from "./components/RaidCard";

const Raids = () => {
  const { data: raids } = useRaids();

  return (
    <div
      className={classNames({
        "flex flex-wrap gap-4 p-4": true,
        "justify-between": raids && raids?.length >= 4,
      })}
    >
      <CreateRaidSheet />

      {raids &&
        raids
          .sort(
            (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
          )
          .reverse()
          .map((raid) => (
            <RaidCard
              key={raid._id}
              _id={raid._id}
              date={raid.date}
              platform={raid.platform}
              url={raid.url}
              shareMessage={raid.shareMessage}
              content={raid.content}
            />
          ))}
    </div>
  );
};

export default Raids;
