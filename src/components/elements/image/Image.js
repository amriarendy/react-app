const Image = ({ id, src, alt, classname }) => {
  return (
    <>
      <img id={id} src={src} alt={alt} title={alt} className={classname} />
    </>
  );
};

export default Image;
