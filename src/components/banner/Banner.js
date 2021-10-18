import instance from '../../axios/axios'
import requests from '../../axios/requests'
import { useState, useEffect } from 'react'
import './banner.css'

function Banner() {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await instance.get(requests.fetchNetflixOriginals)

        setMovie(
          response.data.result[
            Math.floor(Math.random() * response.data.results.length - 1)
          ]
        )
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])
  console.log(movie)

  function truncate(string, length) {
    return string?.length > length
      ? string.substr(0, length - 1) + ' ...'
      : string
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png")`,
        backgroundPosition: 'center center',
      }}>
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(
            `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
          commodi quibusdam beatae pariatur voluptatem blanditiis dignissimos,
          nemo odit enim molestiae deleniti, maxime inventore, fugit architecto
          dolores velit. Porro dicta nobis assumenda alias excepturi facilis
          doloremque eum nostrum, mollitia, ipsa inventore.`,
            120
          )}
        </h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  )
}

export default Banner
