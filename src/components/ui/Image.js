export function Image({ id, src, alt, className }) {
  return (
    <>
      <img id={id} src={src} alt={alt} className={className} />
    </>
  );
}

export function ImageRounded({ id, src, alt, rounded, w, h }) {
  return (
    <>
      <img
        id={id}
        src={src}
        alt={alt}
        className={`mb-4 rounded-${rounded} w-${w} h-${h} sm:mb-0 xl:mb-4 2xl:mb-0`}
      />
    </>
  );
}

export function ImageCaption({ id, src, alt, caption }) {
  return (
    <>
      <figure className="max-w-lg">
        <img
          id={id}
          className="h-auto max-w-full rounded-lg"
          src={src}
          alt={alt}
        />
        <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
          {caption}
        </figcaption>
      </figure>
    </>
  );
}

export function ImageCard({ id, src, alt, caption }) {
  return (
    <>
      <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
        <a href="#">
          <img id={id} className="rounded-lg" src={src} alt={alt} />
        </a>
        <figcaption className="absolute px-4 text-lg text-white bottom-6">
          <p>{caption}</p>
        </figcaption>
      </figure>
    </>
  );
}
