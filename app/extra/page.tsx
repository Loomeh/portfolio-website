import ProjectCard from "../components/ProjectCard";

export default function Extra()
{
    return(
        <div>
            <div className="text-4xl">
                extra
            </div>

            <div className="text-xl text-[#bababa] py-4">
                small little (usually low effort) things i've made and dumped on the internet
            </div>

            <div className="flex flex-wrap gap-4 py-4">
                <ProjectCard
                    title="k7movementdemo"
                    description="a small demo showing a movement system and graphical style similar to killer7 made in unity"
                    source="Download"
                    url="https://240nyquazc.ufs.sh/f/0b3u2U4HY4QJfVuVWP3lHhUbNJeCZw1M5LBs27dWASvTEtp0"
                />
                <ProjectCard
                    title="the best marble game ever made probably"
                    description="a bite-sized marble game that was made in about a week"
                    source="Download"
                    url="https://240nyquazc.ufs.sh/f/0b3u2U4HY4QJOjBIeOiCD8pSXqIv3tYbgd0QmaHyRKGWTBjE"
                />
            </div>
        </div>
    );
}