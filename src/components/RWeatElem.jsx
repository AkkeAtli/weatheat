export const WeatElem = ({ text, imgSrc, imgAlt }) => {
  return (
    <p className="text-center flex flex-col items-center">
      <img className="w-16 pb-1" src={imgSrc} alt={imgAlt} />
      {text}
    </p>
  )
}
