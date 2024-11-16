// @ts-check

export const BreedsSelect = ({
  breeds,
  selectedBreed,
  setSelectedBreed,
  displayBreed,
  setDisplayBreed,
}) => {
  const handleChanged = element => {
    setSelectedBreed(element.target.value)
    console.log('選択を変更しました' + element.target.value)
  }

  const handleClick = () => {
    console.log('ｸﾘｯｸ')
    const url = `https://dog.ceo/api/breed/${selectedBreed}/images/random/12`
    fetch(url)
      .then(response => response.json())
      .then(myJson => {
        setDisplayBreed(myJson['message'])
      })
  }

  return (
    <>
      <h1>犬種リスト</h1>
      <div>
        <select onChange={handleChanged} value={selectedBreed}>
          {Object.keys(breeds).map(key => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </select>
        <button onClick={handleClick}>表示</button>
      </div>
      <div>
        {displayBreed &&
          Object.keys(displayBreed).map(key => (
            <img src={displayBreed[key]} key={key} />
          ))}
      </div>
    </>
  )
}

export default BreedsSelect
