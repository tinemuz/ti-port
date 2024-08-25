import { useState, useEffect } from "react";
import { type CollectionEntry, getCollection } from "astro:content";
import { formatDate, truncateTitle } from "../util/utils";
import FlickeringText from "./FlickeringText";

// Fetch data outside of the component or use a server-side approach
const allWriting: CollectionEntry<"writing">[] = (
  await getCollection("writing")
).sort(
  (a: CollectionEntry<"writing">, b: CollectionEntry<"writing">) =>
    b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
);
const tagWriting = allWriting.filter((writing) =>
  writing.data.tags.includes("featured"),
);

function getUniqueIndex(previousIndex: number): number {
  const indices: number[] = [0, 1, 2];
  const remainingIndices = indices.filter((index) => index !== previousIndex);
  const randomIndex =
    remainingIndices[Math.floor(Math.random() * remainingIndices.length)];
  return randomIndex;
}

export default function Featured() {
  const [positions, setPositions] = useState<number[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    let lastIndex: number | null = null;
    const newPositions = tagWriting.map(() => {
      const currentIndex = getUniqueIndex(lastIndex !== null ? lastIndex : -1);
      lastIndex = currentIndex;
      return currentIndex;
    });
    setPositions(newPositions);
  }, []);

  const handleMouseEnter = (index: number) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null);

  return (
    <div className="">
      <div className="w-full flex-grow md:max-w-[812px]">
        {tagWriting.map((writing, itemIndex) => (
          <div
            key={writing.slug} // Ensure unique keys
            className={`grid grid-cols-3 border-t border-mgray ${itemIndex === 0 ? "" : "border-t-0"}`}
          >
            {[0, 1, 2].map((index) => (
              <div key={index}>
                <a href={"/writing/" + writing.slug}>
                  <div
                    className="h-5"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {index === positions[itemIndex] ? (
                      <div className="mx-1 flex h-full items-center justify-between text-[6px] md:text-xs">
                        <FlickeringText
                          text={truncateTitle(writing.data.title).toUpperCase()}
                          isFlickering={hoveredIndex === index}
                        />
                        <FlickeringText
                          text={formatDate(writing.data.pubDate).toUpperCase()}
                          isFlickering={hoveredIndex === index}
                        />
                      </div>
                    ) : null}
                  </div>
                </a>
                <a href={"/writing/" + writing.slug}>
                  <div className="aspect-square">
                    <div className="relative w-full pb-[100%]">
                      {index === positions[itemIndex] ? (
                        <img
                          className="absolute inset-0 h-full w-full object-cover"
                          src={writing.data.images[0].path.src}
                          alt={writing.data.images[0].alt}
                          onMouseEnter={() => handleMouseEnter(index)}
                          onMouseLeave={handleMouseLeave}
                        />
                      ) : null}
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
