import { components, operations } from '@/services/schema'

export type GetDecksResponse = components['schemas']['PaginatedDecks']
export type GetDecksArgs = operations['DecksController_findAllV2']['parameters']['query']
export type CreateDeckArgs = components['schemas']['CreateDeckRequest']
export type DeleteDeckArgs = operations['DecksController_remove']['parameters']['path']
