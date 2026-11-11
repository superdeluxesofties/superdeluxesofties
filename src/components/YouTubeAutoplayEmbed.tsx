import React, { useEffect, useRef, useState } from 'react';

interface YouTubeAutoplayEmbedProps {
  videoId: string;
  title: string;
  className?: string;
}

/**
 * Renders a responsive YouTube embed that starts muted autoplay once scrolled into view.
 */
export const YouTubeAutoplayEmbed: React.FC<YouTubeAutoplayEmbedProps> = ({
  videoId,
  title,
  className = 'w-full h-full',
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [shouldAutoplay, setShouldAutoplay] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || shouldAutoplay) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldAutoplay(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [shouldAutoplay]);

  const baseParams = `mute=1&playsinline=1&controls=0&modestbranding=1&disablekb=1&fs=0&iv_load_policy=3&rel=0`;
  const src = shouldAutoplay
    ? `https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&${baseParams}`
    : `https://www.youtube.com/embed/${videoId}?${baseParams}`;

  return (
    <div ref={containerRef} className={className}>
      <iframe
        className="w-full h-full"
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
};
