import NextAuth from 'next-auth';
// import Providers from 'next-auth/providers';
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                  prompt: "consent",
                  access_type: "offline",
                  response_type: "code"
                }
            }
        }),
    ],
    jwt: {
        encryption: true,
    },
    secret: process.env.secret,
    callbacks: {
        async signIn({ account, profile }) {
          if (account?.access_token) {
            token.access_token = account.access_token;
          }
          return token;
        },
        redirect: async(url, _baseUrl) => {
            if(url === '/profile'){
                return Promise.resolve('/');
            }
            return Promise.resolve('/');
        }
      }
});