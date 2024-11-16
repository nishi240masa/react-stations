// @ts-check

import DogImage from './DogImage'

// @ts-ignore
// eslint-disable-next-line react/prop-types
export const Description = ({ url, setUrl }) => {
  return (
    <>
      <p>犬の画像を表示するサイトです</p>
      <DogImage imageUrl={url} />
      <div className="button">
        <button
          onClick={async () => {
            const response = await fetch(
              'https://dog.ceo/api/breeds/image/random',
            )
            const data = await response.json()
            setUrl(data.message)
          }}
        >
          更新
        </button>
      </div>
    </>
  )
}

export default Description
