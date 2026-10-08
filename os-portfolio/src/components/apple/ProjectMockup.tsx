import { ImageView } from "@/components/apple/ImageView";

type ProjectMockupProps = {
  src: string;
  alt: string;
  frame: "phone" | "wide";
  videoUrl?: string;
  emphasis?: boolean;
  interactive?: boolean;
};

export function ProjectMockup({ src, alt, frame, videoUrl, emphasis = false, interactive = true }: ProjectMockupProps) {
  if (videoUrl) {
    return (
      <div className="mx-auto w-fit">
        <div className="chassis rounded-[2rem] border border-white/20 p-[6px]" style={{ background: "var(--chassis)", boxShadow: "0 0 28px var(--glow)" }}>
          <video
            className={emphasis ? "max-h-[58vh] w-auto rounded-[1.6rem] bg-black" : "max-h-[38vh] w-auto rounded-[1.6rem] bg-black md:max-h-[46vh]"}
            controls
            playsInline
            preload="metadata"
            poster={src}
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        </div>
      </div>
    );
  }

  if (frame === "phone") {
    return (
      <div className="mx-auto w-fit">
        <div className="chassis rounded-[2rem] border border-white/20 p-[6px]" style={{ background: "var(--chassis)", boxShadow: "0 0 28px var(--glow)" }}>
          {interactive ? (
            <ImageView
              src={src}
              alt={alt}
              className={emphasis ? "max-h-[min(42vh,440px)] w-auto rounded-[1.6rem] bg-black object-contain" : "max-h-[38vh] w-auto rounded-[1.6rem] bg-black object-contain md:max-h-[46vh]"}
            />
          ) : (
            <img
              src={src}
              alt={alt}
              draggable={false}
              className="max-h-[38vh] w-auto rounded-[1.6rem] bg-black object-contain md:max-h-[46vh]"
            />
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-[min(920px,88vw)]">
      <div className="chassis overflow-hidden rounded-[1.4rem] border border-white/15" style={{ background: "var(--chassis)", boxShadow: "0 0 28px var(--glow)" }}>
        <div className="flex h-8 items-center gap-1.5 border-b border-white/10 px-3">
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
        </div>
        {interactive ? (
          <ImageView src={src} alt={alt} className="max-h-[46vh] w-full bg-black object-contain object-top md:max-h-[52vh]" />
        ) : (
          <img src={src} alt={alt} draggable={false} className="max-h-[46vh] w-full bg-black object-contain object-top md:max-h-[52vh]" />
        )}
      </div>
    </div>
  );
}
