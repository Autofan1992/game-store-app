import ConnectionInput from '../types/connectionInput'

const maxResultsPerRequest = 50

export const getConnectionPagination = (
    input: ConnectionInput | undefined | null
): { skip: number; take: number } => {
    return {
        skip: input?.skip ?? 0,
        take: input?.take ?? maxResultsPerRequest
    }
}
