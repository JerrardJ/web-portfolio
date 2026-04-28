import { Helmet, HelmetProvider } from "react-helmet-async";
import AchievementCard from "./AchievementCard";
import { achievement } from "./achievementData";

function Achievement() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Jerrard Joevin | Achievements</title>
      </Helmet>
      <div className="p-8">
        <h1 className="pb-8 text-3xl font-semibold text-textColor">
          My Achievements
        </h1>
        <div className="grid gap-x-5 gap-y-5 md:grid-cols-2 xl:grid-cols-4">
          {achievement &&
            achievement.map((achievementItem, index) => {
              return (
                <AchievementCard
                  key={index}
                  url={achievementItem.url}
                  image={achievementItem.image}
                  title={achievementItem.title}
                  desc={achievementItem.description}
                />
              );
            })}
        </div>
      </div>
    </HelmetProvider>
  );
}


export default Achievement;
