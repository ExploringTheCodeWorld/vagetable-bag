
/**
 * HttpStatus 枚举定义了常见的 HTTP 状态码。
 * 这些状态码用于表示 HTTP 请求的结果。
 */
export enum HttpStatus {
    /**
     * 200 OK
     * 请求已成功。
     */
    OK = 200,

    /**
     * 201 Created
     * 请求已成功并且资源已被创建。
     */
    CREATED = 201,

    /**
     * 202 Accepted
     * 请求已经接受，但尚未处理。
     */
    ACCEPTED = 202,

    /**
     * 204 No Content
     * 服务器成功处理了请求，但没有返回任何内容。
     */
    NO_CONTENT = 204,

    /**
     * 400 Bad Request
     * 服务器无法理解请求，由于客户端的错误。
     */
    BAD_REQUEST = 400,

    /**
     * 401 Unauthorized
     * 请求需要用户验证。
     */
    UNAUTHORIZED = 401,

    /**
     * 403 Forbidden
     * 服务器理解请求，但拒绝执行。
     */
    FORBIDDEN = 403,

    /**
     * 404 Not Found
     * 服务器找不到请求的资源。
     */
    NOT_FOUND = 404,

    /**
     * 405 Method Not Allowed
     * 请求方法不被服务器允许。
     */
    METHOD_NOT_ALLOWED = 405,

    /**
     * 500 Internal Server Error
     * 服务器遇到错误，无法完成请求。
     */
    INTERNAL_SERVER_ERROR = 500,

    /**
     * 501 Not Implemented
     * 服务器不支持请求的功能，无法完成请求。
     */
    NOT_IMPLEMENTED = 501,

    /**
     * 502 Bad Gateway
     * 服务器作为网关或代理，从上游服务器收到无效响应。
     */
    BAD_GATEWAY = 502,

    /**
     * 503 Service Unavailable
     * 服务器目前无法使用（由于超载或停机维护）。
     */
    SERVICE_UNAVAILABLE = 503,

    /**
     * 504 Gateway Timeout
     * 服务器作为网关或代理，未能及时从上游服务器接收请求。
     */
    GATEWAY_TIMEOUT = 504,

    /**
     * 505 HTTP Version Not Supported
     * 服务器不支持请求中所用的 HTTP 协议版本。
     */
    HTTP_VERSION_NOT_SUPPORTED = 505,
}