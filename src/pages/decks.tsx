import { Fragment, useState } from 'react'

import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { useGetDecksQuery } from '@/services/baseApi'

export const Decks = () => {
  const [search, setSearch] = useState<string>('')
  const [currentPage, setCurrentPage] = useState<number>(1)
  const { data, isLoading, ...rest } = useGetDecksQuery({
    currentPage,
    name: search,
  })

  console.log('data', data)
  console.log('rest', rest)

  if (isLoading) {
    return <h1>LOADING...</h1>
  }

  const mappedData = data?.items.map(deck => ({
    cards: deck.cardsCount,
    createdBy: deck.author.name,
    id: deck.id,
    lastUpdated: deck.updated,
    name: deck.name,
  }))

  console.log('mappedData', mappedData)

  const paginationOptions = []

  for (let i = 0; i < (data?.pagination?.totalPages ?? 0); i++) {
    paginationOptions.push(i + 1)
  }

  return (
    <div>
      <Input
        label={'Search decks name'}
        onChange={e => setSearch(e.target.value)}
        style={{ marginBottom: '40px' }}
        value={search}
      />
      <hr />
      {data?.items.map(deck => {
        return (
          <Fragment key={deck.id}>
            <div>Author: {deck.author.name}</div>
            <div>Deck: {deck.name}</div>
            <hr />
          </Fragment>
        )
      })}
      <div style={{ alignItems: 'center', display: 'flex', flexWrap: 'wrap', marginTop: '40px' }}>
        {paginationOptions.map(i => {
          return (
            <Button
              key={i}
              onClick={() => setCurrentPage(i)}
              style={{ padding: '5px', textAlign: 'center', width: '100px' }}
            >
              {i}
            </Button>
          )
        })}
      </div>
    </div>
  )
}
