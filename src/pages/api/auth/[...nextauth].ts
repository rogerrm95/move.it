import NextAuth from "next-auth"
import Providers from "next-auth/providers"
import { Fauna } from "../../../services/faundadb"
import { query as q } from "faunadb"

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      scope: 'read-user',
      authorizationUrl: process.env.AUTHORIZATION_ON_SUCCESS_URI
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorizationUrl: process.env.AUTHORIZATION_ON_SUCCESS_URI
    })
  ],
  callbacks: {
    async session(session) {
      return {
        ...session
      }
    },
    async signIn(user, account, profile) {

      const { email } = user
      console.log(user)

      // Verifica se o usuário existe //
      try {
        await Fauna.query(
          q.If(
            q.Not(
              q.Exists(
                q.Match(
                  q.Index('user_by_email'),
                  q.Casefold(user.email)
                )
              )
            ),
            q.Create(
              q.Collection('users'), { data: user }
            ),
            q.Get(
              q.Match(
                q.Index('user_by_email'),
                q.Casefold(user.email)
              )
            )
          )
        )

        return true
      }
      catch {
        return false
      }
    },
  }
})