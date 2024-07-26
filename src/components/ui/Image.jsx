export function Image({ id, src, alt, className }) {
  return (
    <>
      <img id={id} src={src} alt={alt} className={className} />
    </>
  );
}

export function ImageRounded({ id, src, alt, rounded, widht, height }) {
  return (
    <>
      <img id={id} src={src} alt={alt} className={`mb-4 rounded-${rounded} w-${widht} h-${height} sm:mb-0 xl:mb-4 2xl:mb-0 bg-red-300`} />
    </>
  );
}

export function ImageCaption() {
  return (
    <>
      <figure class="max-w-lg">
        <img class="h-auto max-w-full rounded-lg" src="/docs/images/examples/image-3@2x.jpg" alt="image description" />
        <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">Image caption</figcaption>
      </figure>
    </>
  )
}

export function ImageCard() {
  return (
    <>
      <figure class="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
        <a href="#">
          <img class="rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png" alt="image description" />
        </a>
        <figcaption class="absolute px-4 text-lg text-white bottom-6">
            <p>Do you want to get notified when a new component is added to Flowbite?</p>
        </figcaption>
      </figure>
    </>
  )
}