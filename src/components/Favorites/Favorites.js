import React from 'react'

function Favorites({
  peopleState,
  filmsState,
  title,
  planetsState: {
    planets: { error, loading, data },
  },
}) {
  return (
    <>
      <div>{title}</div>
      <div>{data.filter((item) => item.is_favorite)}</div>
    </>
  )
}

export default Favorites
