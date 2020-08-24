import React, { useState, useEffect } from 'react'
import { Category } from '../Category'

import { List, Item } from './styles'

function useCategoriesData() {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState([])

  useEffect(function () {
    setLoading(true)

    window
      .fetch('https://petgram-server-juancaricodev.vercel.app/categories')
      .then((res) => res.json())
      .then((response) => {
        setCategories(response)
        setLoading(false)
      })
  }, [])

  return { categories, loading }
}

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(
    function () {
      const onScroll = () => {
        const newShowFixed = window.scrollY > 200

        showFixed !== newShowFixed && setShowFixed(newShowFixed)
      }

      document.addEventListener('scroll', onScroll)

      return () => document.removeEventListener('scroll', onScroll)
    },
    [showFixed]
  )

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {loading ? (
        <Item key='loading'>
          <Category />
        </Item>
      ) : (
        categories.map((category) => (
          <Item key={category.id}>
            <Category {...category} />
          </Item>
        ))
      )}
    </List>
  )

  // if (loading) {
  //   return 'Loaging...'
  // }

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
