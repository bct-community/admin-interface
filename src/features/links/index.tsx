import { useLinks } from "./api/getLinks";
import CreateLinkSheet from "./components/CreateLinkSheet";
import Link from "./components/Link";
import LinkSkeleton from "./components/LinkSkeleton";

const Links = () => {
  const { data: links, isLoading } = useLinks();

  const communityLinks =
    links?.filter((link) => link.type === "community-links") || [];

  const tokenLinks =
    links?.filter((link) => link.type === "official-links") || [];

  return (
    <div className="flex flex-col items-center justify-center px-4 mt-6 item">
      <CreateLinkSheet />

      <div className="w-full max-w-[700px]">
        <h2 className="mt-4 text-xl font-bold select-none">🌐 Comunidade</h2>
        {isLoading
          ? Array.from({ length: 3 }).map((_v, i) => <LinkSkeleton key={i} />)
          : communityLinks.map(({ _id, label, url, icon, type }, index) => (
              <Link
                _id={_id}
                label={label}
                url={url}
                icon={icon}
                type={type}
                key={index}
              />
            ))}

        <h2 className="mt-4 text-xl font-bold select-none">💰 Token</h2>
        {isLoading
          ? Array.from({ length: 5 }).map((_v, i) => <LinkSkeleton key={i} />)
          : tokenLinks.map(({ _id, label, url, icon, type }, index) => (
              <Link
                _id={_id}
                label={label}
                url={url}
                icon={icon}
                type={type}
                key={index}
              />
            ))}
      </div>
    </div>
  );
};

export default Links;
