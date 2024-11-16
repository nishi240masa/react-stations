// DO NOT DELETE

import { useState } from 'react'
import './App.css'
import DogListContainer from './DogListContainer'
import Header from './Header'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  // const [dogUrl, setDogUrl] = useState(
  //   'https://images.dog.ceo/breeds/segugio-italian/n02090722_001.jpg',
  // )
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <DogListContainer />
        {/* <Description url={dogUrl} setUrl={setDogUrl} /> */}
      </main>
    </div>
  )
}
