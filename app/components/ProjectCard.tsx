"use client";

import React from "react";
import { redirect } from "next/navigation";
import { Github, Globe } from "lucide-react";

interface ProjectCardProps {
    title: string,
    description: string,
    url?: string | null,
    source?: string | null
}

const HandleUrl = (url?: string | null) => {
    if (url == null) return;
    redirect(url);
};

export function HandleSource({ source }: { source: string | null | undefined }) {
    if(source != null) {
        switch(source.toLowerCase()) {
            case "github":
                return(<Github/>);
            case "external":
                return(<Globe/>)
            default:
                return(<h1></h1>);
        }
    }
    else {
        return (<h1></h1>);
    }    
}

export default function ProjectCard({title, description, url, source}: ProjectCardProps) {
    return(
        <button onClick={() => HandleUrl(url)}>
            <div className="bg-zinc-800 w-min p-2 rounded-lg text-nowrap drop-shadow-lg text-left">
                <p className="text-xl font-semibold">
                    {title}
                </p>
                <p className="py-2 text-xs text-[#bababa]">
                    {description}
                </p>
                <p>
                    <HandleSource source={source}/>
                </p>
            </div>
        </button>
    );
}