import { components, operations } from '@/services/schema'

export type GetDecksResponse = components['schemas']['PaginatedDecks']
export type GetDeckResponse = operations['DecksController_findOne']['parameters']['path']['id']
export type GetDecksArgs = operations['DecksController_findAllV2']['parameters']['query']
export type CreateDeckArgs = components['schemas']['CreateDeckRequest']
export type UpdateDeckArgs = operations['DecksController_update']['parameters']['path']['id']
export type UpdateDeckRequest = components['schemas']['UpdateDeckRequest']
export type DeleteDeckArgs = operations['DecksController_remove']['parameters']['path']
