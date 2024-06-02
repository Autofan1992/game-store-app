import { CommentFragment } from '../graphql/fragments/Comment.generated'
import {
    CommentsForGamePageQueryVariables,
    useCommentsForGamePageQuery
} from '../graphql/queries/CommentsForGamePage.generated'

const useGetCommentsForGamePage = (gameId: string): {
    comments: CommentFragment[],
    totalCount: number,
    hasMore: boolean,
    fetchMore: () => void,
    loading: boolean
} => {
    const variables: CommentsForGamePageQueryVariables = {
        input: {
            pagination: {
                take: 10
            },
            where: {
                gameId
            }
        }
    }
    const query = useCommentsForGamePageQuery({
        variables,
    })

    const comments = query.data?.commentConnection?.nodes || []
    const hasMore = query.data?.commentConnection?.hasMore || false

    const fetchMore = () => {
        if (hasMore) {
            query.fetchMore({
                variables: {
                    input: {
                        ...variables.input,
                        pagination: {
                            ...variables.input?.pagination,
                            skip: comments.length,
                        }
                    }
                }
            })
        }
    }

    return {
        comments,
        totalCount: query.data?.commentConnection?.totalCount || 0,
        hasMore,
        fetchMore,
        loading: query.loading,
    }
}

export default useGetCommentsForGamePage