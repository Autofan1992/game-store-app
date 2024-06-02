import * as Types from '../../../../graphql-generated/types';

import { gql } from '@apollo/client';
export type GameFragment = { __typename?: 'Game', id: string, name: string, ageLimit: number, description: string, isLiked: boolean, genre: string, price: number, platform: Array<Types.GamePlatform>, aggregate: { __typename?: 'GameAggregate', rating?: number | null, likes: number }, image: { __typename?: 'Resource', id: string, url: string } };

export type GameAggregateFragment = { __typename?: 'GameAggregate', rating?: number | null, likes: number };

export type GameImageFragment = { __typename?: 'Resource', id: string, url: string };

export const GameAggregateFragmentDoc = gql`
    fragment GameAggregate on GameAggregate {
  rating
  likes
}
    `;
export const GameImageFragmentDoc = gql`
    fragment GameImage on Resource {
  id
  url
}
    `;
export const GameFragmentDoc = gql`
    fragment Game on Game {
  id
  name
  ageLimit
  description
  isLiked
  genre
  aggregate {
    ...GameAggregate
  }
  price
  platform
  image {
    ...GameImage
  }
}
    ${GameAggregateFragmentDoc}
${GameImageFragmentDoc}`;