export function isTokenExpired(token: string) {

    const payload = getPayload(token);

    console.log(payload);

    const clock = Math.floor(Date.now() / 1000);

    return clock > payload.exp;
}

export function getPayload(token: string) {
    return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString('utf8'));
}