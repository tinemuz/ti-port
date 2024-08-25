import { type CollectionEntry, getCollection } from "astro:content";
import { formatDate, truncateTitle } from "../util/utils";
import FlickeringText from "./FlickeringText";
import FlickerText from "./FlickeringText";


interface Writing {
  slug: string;
  data: {
    title: string;
    pubDate: Date;
    tags: string[];
    images: { path: string; alt: string }[];
  };
}

const allWriting: CollectionEntry<"writing">[] = (
  await getCollection("writing")
).sort(
  (a: CollectionEntry<"writing">, b: CollectionEntry<"writing">) =>
    b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
);
const tagWriting = allWriting.filter((writing) =>
  writing.data.tags.includes("featured"),
);

// Define the type for the previousIndex parameter
function getUniqueIndex(previousIndex: number): number {
  // Array of possible indices
  const indices: number[] = [0, 1, 2];
  // Remove the previous index from the possible choices
  const remainingIndices = indices.filter((index) => index !== previousIndex);
  // Randomly select one of the remaining indices
  const randomIndex =
    remainingIndices[Math.floor(Math.random() * remainingIndices.length)];
  return randomIndex;
}

export default function Featured() {
  

  return (
    <div className="">
      <div className="w-full flex-grow md:max-w-[812px]">
        {(() => {
          // To keep track of the last used index
          let lastIndex: number | null = null;
          let isFirstItem = true;

          return tagWriting.map((writing, index) => {
            const currentIndex = getUniqueIndex(
              lastIndex !== null ? lastIndex : -1,
            );
            lastIndex = currentIndex; // Update lastIndex for the next iteration

            // Determine if we should add the top border
            const borderTopclassName = isFirstItem ? "" : "border-t-0";
            isFirstItem = false; // Set to false after processing the first item

            return (
              <div
                className={`grid grid-cols-3 border border-mgray ${borderTopclassName}`}
              >
                {[0, 1, 2].map((index) => (
                  <div
                    className={`border-mgray ${index === 2 ? "" : "border-r"}`}
                  >
                    <div className="h-5  border-b border-mgray">
                      {index === currentIndex ? (
                        <div className="mx-1 flex h-full items-center justify-between text-[6px] md:text-xs">
                          <p>
                            <FlickeringText
                              text={truncateTitle(
                                writing.data.title,
                              ).toUpperCase()}
                            />
                          </p>
                          <p>
                            {formatDate(writing.data.pubDate).toUpperCase()}
                          </p>
                        </div>
                      ) : null}
                    </div>
                    <div className="aspect-square">
                      <div className="relative w-full pb-[100%]">
                        {index === currentIndex ? (
                          <a href={"/writing/" + writing.slug}>
                            <img
                              className="absolute inset-0 h-full w-full object-cover"
                              src={writing.data.images[0].path.src}
                              alt={writing.data.images[0].alt}
                            />
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            );
          });
        })()}
      </div>
    </div>
  );
}