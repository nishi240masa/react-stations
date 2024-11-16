// @ts-check
// @ts-ignore
// eslint-disable-next-line react/prop-types
export const DogImage = ({ imageUrl }) => {
  return (
    <>
      <div className="dog-img">
        <img src={imageUrl} alt="犬の画像" />
      </div>
    </>
  )
}

export default DogImage
