'use client';

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface ProjectCardProps {
    title: string;
    description: string;
    url?: string;
    popupImage?: string;
}

/**
 * A card component to display a project with a title, description and a link.
 * 
 * @param title - The title of the project
 * @param description - The description of the project
 * @param url - The URL of the project
 * @param popupImage - The image to display when hovering the title.
*/
const ProjectCard = ({ title, description, url, popupImage }: ProjectCardProps) => {

  const labelRef = useRef<HTMLParagraphElement>(null);

  const [showExpandButton, setShowExpandButton] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const [imageSize, setImageSize] = useState({ width: 1, height: 1 });
  /**
   * The reference to the image element.
   * Used to get the natural width and height of the image. To be used in the aspect ratio of the popup image.
   * (leaving it manage naturally works but causes next/image to throw a warning)
  */
  const imgRef = useRef<HTMLImageElement | null>(null);


  useEffect(() => {
    if (!labelRef.current) return;

    setShowExpandButton(labelRef.current.scrollHeight > labelRef.current.clientHeight);
  }, [labelRef]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };


  const handleImageLoad = () => {
    if (imgRef.current) {
      setImageSize({
        width: imgRef.current.naturalWidth,
        height: imgRef.current.naturalHeight,
      });
    }
  };

  return (
    <div className="border-b border-gray-300 py-4">
      <h3 className="text-lg font-semibold text-gray-800">
        <a href={url} className={"relative text-blue-600 group" + (url ? " hover:underline underline-offset-4" : " cursor-not-allowed")}>
          {popupImage && <div className="absolute left-0 bottom-6 w-64 rounded-lg shadow-2xl 
                  opacity-0 scale-90 translate-y-2 
                  transition-all duration-300 ease-out 
                  group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0
                  pointer-events-none"
               style={{ aspectRatio: `${imageSize.width} / ${imageSize.height}` }}
          >
            <Image
              ref={imgRef}
              src={popupImage}
              alt={title}
              fill
              sizes="100%"
              priority
              onLoad={handleImageLoad}
              className="rounded-lg"
            />
          </div>}
          {title}
        </a>
      </h3>
      <div className="relative flex">
        <p
          className={
            "text-gray-600 transition-height duration-300 ease-out"
            + (isExpanded ? "h-[100rem]" : "h-[1.5rem] line-clamp-1 overflow-hidden text-ellipsis pr-16")
          }
          ref={labelRef}
        >
            {description}
        </p>
        {showExpandButton && (
            <button
              onClick={toggleExpand}
              className={
                "absolute right-0 bottom-0 text-blue-600 hover:text-blue-400 transition-transform duration-300 ease-out"
                + (isExpanded ? " translate-y-4" : "")
              }
            >
              {isExpanded ? "Voir moins" : "Voir plus"}
            </button>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;