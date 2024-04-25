import { Fragment, useState } from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { ControlledCheckbox } from '@/components/ui/controlled/ControlledCheckbox/ControlledCheckbox'
import {
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useGetDecksQuery,
  // useUpdateDeckMutation,
} from '@/services/decks/decksService'

export const Decks = () => {
  const { control, handleSubmit } = useForm()
  const [search, setSearch] = useState<string>('')
  const [currentPage, setCurrentPage] = useState<number>(1)
  const { data, isLoading, ...rest } = useGetDecksQuery({
    currentPage,
    name: search,
  })
  const [deckId, setDeckId] = useState<string>('')

  console.log('data', data)
  console.log('rest', rest)
  const [createDeck, { isLoading: isDeckBeingCreated }] = useCreateDeckMutation()
  const [deleteDeck, { isLoading: isDeckBeingDeleted }] = useDeleteDeckMutation()
  // const [updateDeck, { isLoading: isDeckBeingUpdated }] = useUpdateDeckMutation()

  console.log(isDeckBeingDeleted)

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
      <form
        onSubmit={handleSubmit(data => {
          createDeck({ isPrivate: data.isPrivate, name: 'test_2024' } as any)
        })}
        style={{ marginBottom: '40px' }}
      >
        <Input label={'Create Deck'} />
        <ControlledCheckbox control={control} label={'Private deck'} name={'isPrivate'} />
        <Button disabled={isDeckBeingCreated}>Create Deck</Button>
      </form>
      <hr />
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
            <div>Private: {deck.isPrivate ? 'Yes' : 'No'}</div>
            <Button
              disabled={deckId === deck.id && isDeckBeingDeleted}
              onClick={() => {
                deleteDeck({ id: deck.id })
                setDeckId(deck.id)
              }}
            >
              Delete Deck
            </Button>
            <Button
              // disabled={deckId === deck.id && isDeckBeingUpdated}
              onClick={() => {
                // updateDeck({ id: deck.id, ...deck })
                setDeckId(deck.id)
              }}
            >
              Update Deck
            </Button>
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
