"use client";

import React from "react";
import { Github, Globe, Download } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  url?: string | null;
  source?: string | null;
}

export function HandleSource({ source }: { source?: string | null }) {
  if (source) {
    switch (source.toLowerCase()) {
      case "github":
        return <Github />;
      case "external":
        return <Globe />;
      case "download":
        return <Download />;
      default:
        return null;
    }
  }
  return null;
}

export default function ProjectCard({
  title,
  description,
  url,
  source
}: ProjectCardProps) {
  // Here, the paragraph containing the description is set to
  // 'whitespace-normal' along with 'break-words' to wrap text instead
  // of cutting it off. You can add a max-height or scrollbar if needed:
  // e.g., `overflow-y-auto max-h-24`.
  const card = (
    <div className="bg-zinc-800 w-full p-2 rounded-lg drop-shadow-lg text-left">
      <p className="text-xl font-semibold mb-2">{title}</p>
      <p className="text-xs text-[#bababa] whitespace-normal break-words">
        {description}
      </p>
      <div className="pt-2">
        <HandleSource source={source} />
      </div>
    </div>
  );

  return url ? <Link href={url}>{card}</Link> : card;
}