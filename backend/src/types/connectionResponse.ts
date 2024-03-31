 class ConnectionResponse<T> {
    totalCount: number
    hasMore: boolean
    nodes: T[]

    constructor(totalCount: number, hasMore: boolean, nodes: T[]) {
        this.totalCount = totalCount
        this.hasMore = hasMore
        this.nodes = nodes
    }
}

 export default ConnectionResponse
