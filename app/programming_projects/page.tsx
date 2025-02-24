import ProjectCard from "../components/ProjectCard";

export default function ProgrammingProjects() {
  return (
    <div>
      <div className="text-4xl">
        programming projects
      </div>

      <div className="text-xl text-[#bababa] py-4">
        things i've made and released and am sort of proud of
      </div>

      <div className="flex flex-wrap gap-4 py-4">
        <ProjectCard
          title="beat revival"
          description="mirror's edge catalyst server emulator project"
          source="External"
          url="https://beatrevival.me"
        />
        <ProjectCard
          title="speedrunutils"
          description="bomb rush cyberfunk qol mod for speedrunners"
          source="GitHub"
          url="https://github.com/Loomeh/SpeedrunUtils"
        />
        <ProjectCard
          title="libresplit"
          description="a speedrun timer for linux with autosplitter support"
          source="External"
          url="https://libresplit-website.vercel.app/"
        />
        <ProjectCard
          title="jsrtrainer"
          description="a speedrunning trainer for jet set radio hd"
          source="GitHub"
          url="https://github.com/Loomeh/JSRTrainer"
        />
        <ProjectCard
          title="libresplitautosplitters"
          description="my collection of autosplitters for the libresplit program"
          source="GitHub"
          url="https://github.com/Loomeh/LibreSplitAutosplitters"
        />
        <ProjectCard
          title="guess the ktp character"
          description="a wordle-inspired kill the past themed guessing game"
          source="External"
          url="https://guess-the-ktp-character.vercel.app/"
        />
        <ProjectCard
          title="high flying"
          description="a game jam submission made in collaboration with antominom"
          source="Download"
          url="https://240nyquazc.ufs.sh/f/0b3u2U4HY4QJS1bwtLpD7C4TdqZXzwjlfPY1kW9hKU2uR85A"
        />
      </div>
    </div>
  );
}