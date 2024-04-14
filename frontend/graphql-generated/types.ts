export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  File: { input: any; output: any; }
};

export type Comment = {
  __typename?: 'Comment';
  createdAt: Scalars['Date']['output'];
  game: Game;
  id: Scalars['ID']['output'];
  text: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
  user: User;
};

export type ConnectionInputPagination = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateCommentInput = {
  gameId: Scalars['String']['input'];
  text: Scalars['String']['input'];
};

export type CreateGameInput = {
  ageLimit: Scalars['Int']['input'];
  amount: Scalars['Int']['input'];
  description: Scalars['String']['input'];
  genre: Scalars['String']['input'];
  imageId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  platform: Array<GamePlatform>;
  price: Scalars['Float']['input'];
};

export type Game = {
  __typename?: 'Game';
  ageLimit: Scalars['Int']['output'];
  aggregate: GameAggregate;
  amount: Scalars['Int']['output'];
  comments: Array<Comment>;
  createdAt: Scalars['Date']['output'];
  description: Scalars['String']['output'];
  genre: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image: Resource;
  isLiked: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  platform: Array<GamePlatform>;
  price: Scalars['Float']['output'];
  updatedAt: Scalars['Date']['output'];
  user: User;
  views: Scalars['Int']['output'];
};

export type GameAggregate = {
  __typename?: 'GameAggregate';
  likes: Scalars['Int']['output'];
  rating?: Maybe<Scalars['Float']['output']>;
};

export type GameConnectionInput = {
  pagination?: InputMaybe<ConnectionInputPagination>;
  where?: InputMaybe<GameConnectionInputWhere>;
};

export type GameConnectionInputWhere = {
  ageLimit?: InputMaybe<Scalars['Int']['input']>;
  genres?: InputMaybe<Array<Scalars['String']['input']>>;
  orderBy?: InputMaybe<OrderBy>;
  platforms?: InputMaybe<Array<GamePlatform>>;
  sortCriteria?: InputMaybe<GameSortCriteria>;
};

export type GameConnectionResponse = {
  __typename?: 'GameConnectionResponse';
  hasMore: Scalars['Boolean']['output'];
  nodes: Array<Game>;
  totalCount: Scalars['Int']['output'];
};

export type GameInput = {
  id: Scalars['String']['input'];
};

export enum GamePlatform {
  Pc = 'Pc',
  Playstation = 'Playstation',
  Xbox = 'Xbox'
}

export enum GameSortCriteria {
  Name = 'name',
  Price = 'price',
  Rating = 'rating'
}

export type Mutation = {
  __typename?: 'Mutation';
  createComment: Comment;
  createGame: Game;
  patchGame: Game;
};


export type MutationCreateCommentArgs = {
  input: CreateCommentInput;
};


export type MutationCreateGameArgs = {
  input: CreateGameInput;
};


export type MutationPatchGameArgs = {
  input: PatchGameInput;
};

export enum OrderBy {
  Asc = 'asc',
  Desc = 'desc'
}

export type PatchGameInput = {
  ageLimit?: InputMaybe<Scalars['Int']['input']>;
  amount?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  genre?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  imageId?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
};

export type Query = {
  __typename?: 'Query';
  game?: Maybe<Game>;
  gameConnection: GameConnectionResponse;
  me?: Maybe<User>;
};


export type QueryGameArgs = {
  input: GameInput;
};


export type QueryGameConnectionArgs = {
  input?: InputMaybe<GameConnectionInput>;
};

export type Resource = {
  __typename?: 'Resource';
  id: Scalars['ID']['output'];
  mimetype: Scalars['String']['output'];
  name: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type UploadResourceInput = {
  resource: Scalars['File']['input'];
};

export type User = {
  __typename?: 'User';
  avatar?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['Date']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  role: UserRole;
  updatedAt: Scalars['Date']['output'];
};

export enum UserRole {
  Admin = 'Admin',
  User = 'User'
}
