import { Link } from "react-router-dom";

export function Image({ id, src, alt, className }) {
  return (
    <>
      <img id={id} src={src} alt={alt} title={alt} className={className} />
    </>
  );
}

export function ImageSquare({ id, src, alt }) {
  return (
    <>
      <img
        id={id}
        src={src}
        alt={alt}
        title={alt}
        className="mb-4 w-28 h-28 sm:mb-0 xl:mb-4 2xl:mb-0"
      />
    </>
  );
}

export function ImageRounded({ id, src, alt }) {
  return (
    <>
      <img
        id={id}
        src={src}
        alt={alt}
        title={alt}
        className="mb-4 rounded-xl w-28 h-28 sm:mb-0 xl:mb-4 2xl:mb-0"
      />
    </>
  );
}

export function ImageCircle({ id, src, alt }) {
  return (
    <>
      <img
        id={id}
        src={src}
        alt={alt}
        title={alt}
        className="mb-4 rounded-full w-28 h-28 sm:mb-0 xl:mb-4 2xl:mb-0"
      />
    </>
  );
}

export function ImageSquareSmall({ id, src, alt }) {
  return (
    <>
      <img id={id} src={src} alt={alt} title={alt} className="w-9 h-9" />
    </>
  );
}

export function ImageRoundedSmall({ id, src, alt }) {
  return (
    <>
      <img
        id={id}
        src={src}
        alt={alt}
        title={alt}
        className="rounded-xl w-9 h-9"
      />
    </>
  );
}

export function ImageCircleSmall({ id, src, alt }) {
  return (
    <>
      <img
        id={id}
        src={src}
        alt={alt}
        title={alt}
        className="rounded-full w-9 h-9"
      />
    </>
  );
}

export function ImageCaption({ id, src, alt, caption }) {
  return (
    <>
      <figure className="max-w-lg text-center">
        <img
          id={id}
          src={src}
          alt={alt}
          title={alt}
          className="h-auto max-w-full rounded-lg"
        />
        <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
          {caption}
        </figcaption>
      </figure>
    </>
  );
}

export function ImageGrayCaption({ id, route, src, alt, caption }) {
  return (
    <>
      <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
        <Link to={route}>
          <img src={src} alt={alt} title={alt} className="rounded-lg" />
        </Link>
        <figcaption className="absolute px-4 text-lg text-white bottom-6">
          <p>{caption}</p>
        </figcaption>
      </figure>
    </>
  );
}

export function ImageBlur({ id, src, alt }) {
  return (
    <>
      <img
        id={id}
        className="h-auto max-w-full transition-all duration-300 rounded-lg blur-sm hover:blur-none"
        src={src}
        alt={alt}
        title={alt}
      />
    </>
  );
}
