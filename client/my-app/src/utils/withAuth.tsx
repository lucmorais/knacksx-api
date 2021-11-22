import { getPayload, isTokenExpired } from "./auth";
import { parseCookies } from "./cookies";

export function withAuth(func: any, path: string) {
    return async(ctx: any) => {
        const cookies = parseCookies(ctx.req);

        if (!cookies.token || isTokenExpired(cookies.token)) {
            return {
                redirect: {
                    permanent: false,
                    destination: `/${path}`,
                },
            };
        }

        const payload = getPayload(cookies.token);

        const result = await func(ctx, cookies, payload);
        if ('props' in result) {
            result.props = {
                payload,
                ...result.props,
            };
        }

        return result;
    };
};