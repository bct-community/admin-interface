import classNames from "classnames";

import { useRaids } from "./api/getRaids";
import CreateRaidSheet from "./components/CreateRaidSheet";
import RaidCard from "./components/RaidCard";
import RaidSkeleton from "./components/RaidSkeleton";

const Raids = () => {
  const { data: raids, isLoading, isError } = useRaids();

  return (
    <div
      className={classNames({
        "flex flex-col gap-2 p-2": true,
        "justify-evenly": raids && raids?.length >= 4,
      })}
    >
      <div className="w-full grow text-center">
        <CreateRaidSheet />
      </div>

      {/* <menu className="flex items-center justify-center h-12 gap-2 m-4 mt-0 border select-none rounded-xl">
        <span>todos 12</span>
        <span>passados 3</span>
      </menu> */}

      <div className="flex w-full flex-wrap justify-evenly gap-y-4">
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

        {isLoading &&
          Array.from({ length: 12 }).map((_, index) => (
            <RaidSkeleton key={index} />
          ))}

        {isError && !isLoading && (
          <p className="w-full select-none text-center text-sm">
            Nenhum Raid encontrado.
          </p>
        )}
      </div>
    </div>
  );
};

export default Raids;
