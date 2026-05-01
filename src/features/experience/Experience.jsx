import { Helmet, HelmetProvider } from "react-helmet-async";
import ExperienceCard from "./ExperienceCard";
import { experience } from "./experienceData";

function Experience() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Jerrard Joevin | Experience</title>
      </Helmet>
      <div className="p-8">
        <h1 className="pb-8 text-3xl font-semibold text-textColor">
          My Experience
        </h1>
        <div className="grid gap-x-5 gap-y-5 md:grid-cols-2 xl:grid-cols-4">
          {experience &&
            experience.map((expItem, index) => {
              return (
                <ExperienceCard
                  key={index}
                  url={expItem.url}
                  image={expItem.image}
                  title={expItem.title}
                  desc={expItem.description}
                />
              );
            })}
        </div>
      </div>
    </HelmetProvider>
  );
}

export default Experience;
