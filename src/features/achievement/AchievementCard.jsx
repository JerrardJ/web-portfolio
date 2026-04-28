/* eslint-disable react/prop-types */
function AchievementCard({ url, image, title, desc }) {
  return (
    <div
      className="flex  max-w-xs flex-col rounded-xl bg-achievementBg text-textColor hover:shadow-lg"
    >
      <img
        src={image}
        className=" h-[160px] rounded-b-xl rounded-t-lg "
        alt=""
      />

      <div className="flex flex-col gap-y-2 p-4">
        <h2 className=" text-2xl font-semibold text-accentColor">{title}</h2>
        <p className=" text-base font-medium text-justify">{desc}</p>
        <div className="mt-2 space-x-2">
          <a
            href={url}
            className=" px-1 py-1 text-lg font-semibold underline decoration-accentColor hover:border-2 hover:border-accentColor hover:no-underline  "
            target="_blank"
            rel="noreferrer"
          >
            Check it out...
          </a>
        </div>
      </div>
    </div>
  );
}

export default AchievementCard;
