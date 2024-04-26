import { baseApi } from '@/services/baseApi'
import {
  CreateDeckArgs,
  DeleteDeckArgs,
  GetDecksArgs,
  GetDecksResponse,
} from '@/services/decks/types'

type UpdateDeckRequest = {
  cover?: null | string
  isPrivate?: boolean
  name?: string
}

type UpdateDeckResponse = {
  author: {
    id: string
    name: string
  }
  cardsCount: number
  cover: null | string
  created: string
  id: string
  isPrivate: boolean
  name: string
  updated: string
  userId: string
}

export const decksService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      createDeck: builder.mutation<void, CreateDeckArgs>({
        invalidatesTags: ['Decks'],
        query: args => ({
          body: args,
          method: 'POST',
          url: `v1/decks`,
        }),
      }),
      deleteDeck: builder.mutation<void, DeleteDeckArgs>({
        invalidatesTags: ['Decks'],
        query: args => ({
          method: 'DELETE',
          url: `v1/decks/${args.id}`,
        }),
      }),
      getDecks: builder.query<GetDecksResponse, GetDecksArgs | void>({
        providesTags: ['Decks'],
        query: args => ({
          method: 'GET',
          params: args ?? undefined,
          url: `v2/decks`,
        }),
      }),
      updateDeck: builder.mutation<
        UpdateDeckResponse,
        Pick<UpdateDeckResponse, 'id'> & Partial<UpdateDeckRequest>
      >({
        invalidatesTags: ['Decks'],
        async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
          const patchResult = dispatch(
            decksService.util.updateQueryData('getDecks', { currentPage: 1, name: '' }, draft => {
              const itemToUpdate = draft.items.find(deck => deck.id === id)

              if (!itemToUpdate) {
                return
              }

              Object.assign(itemToUpdate, patch)
            })
          )

          try {
            await queryFulfilled
          } catch {
            patchResult.undo()
          }
        },
        query: ({ id, ...body }) => ({
          body,
          method: 'PATCH',
          url: `v1/decks/${id}`,
        }),
      }),
    }
  },
})

export const {
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useGetDecksQuery,
  useUpdateDeckMutation,
} = decksService
