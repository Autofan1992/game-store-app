// Alias query if operationName matches

import { CyHttpMessages } from 'cypress/types/net-stubbing'

export const hasOperationName = (
    req: CyHttpMessages.IncomingHttpRequest<any, any>,
    operationName: string,
) => {
    const { body } = req
    return Object.hasOwn(body, 'operationName') && body.operationName === operationName
}

export const aliasQuery = (
    req: CyHttpMessages.IncomingHttpRequest<any, any>,
    operationName: string,
) => {
    if (hasOperationName(req, operationName)) {
        req.alias = `${operationName}Query`
    }
}
