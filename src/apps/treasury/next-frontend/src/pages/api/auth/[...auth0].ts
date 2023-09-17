import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';
import type { RequestError } from '@auth0/nextjs-auth0/client';
import type { NextApiRequest, NextApiResponse } from 'next';

export default handleAuth({
    async login(req: NextApiRequest, res: NextApiResponse) {
        try {
            await handleLogin(req, res, {
                authorizationParams: {
                    audience: 'https://treasury.io',
                    scope: 'openid profile email'
                }
            });
        } catch (error) {
            const e = error as RequestError;
            res.status(e.status || 400).end(e.message);
        }
    }
});
