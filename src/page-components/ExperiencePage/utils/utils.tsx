import Link from "next/link";

export const formatTextWithLinks = (text: string, index: number) => {
  if (text.includes("https://")) {
    const parts = text.split(/(https:\/\/[^\s]+)/);
    return (
      <p key={index}>
        {parts.map((part, partIndex) => {
          if (part.startsWith("https://")) {
            return (
              <Link key={partIndex} href={part} className="link">
                {part}
              </Link>
            );
          }
          return part;
        })}
      </p>
    );
  }
  return <p key={index}>{text}</p>;
};
