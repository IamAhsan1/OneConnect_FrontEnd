import { Eye, Target } from "lucide-react";
import { missionVisionData } from "@/data/aboutData";

const MissionVision = () => {
  return (
    <section
      aria-labelledby="mission-vision-title"
      className="bg-slate-50 py-20 lg:py-24"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-blue-200 bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700">
            {missionVisionData.badge}
          </span>

          <h2
            id="mission-vision-title"
            className="mt-6 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            {missionVisionData.title}

            <span className="block text-blue-600">
              {missionVisionData.highlight}
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {missionVisionData.description}
          </p>
        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Mission */}

          <article className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl lg:p-10">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 transition-colors duration-300 group-hover:bg-blue-600">
              <Target
                aria-hidden="true"
                className="h-8 w-8 text-blue-600 transition-colors duration-300 group-hover:text-white"
              />
            </div>

            <h3 className="mt-8 text-2xl font-bold text-slate-900 lg:text-3xl">
              {missionVisionData.mission.title}
            </h3>

            <p className="mt-5 leading-8 text-slate-600">
              {missionVisionData.mission.description}
            </p>
          </article>

          {/* Vision */}

          <article className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl lg:p-10">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 transition-colors duration-300 group-hover:bg-blue-600">
              <Eye
                aria-hidden="true"
                className="h-8 w-8 text-blue-600 transition-colors duration-300 group-hover:text-white"
              />
            </div>

            <h3 className="mt-8 text-2xl font-bold text-slate-900 lg:text-3xl">
              {missionVisionData.vision.title}
            </h3>

            <p className="mt-5 leading-8 text-slate-600">
              {missionVisionData.vision.description}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;