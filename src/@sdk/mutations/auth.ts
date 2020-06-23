import gql from "graphql-tag";

import { userFragment } from "../fragments/auth";

export const tokenAuthMutation = gql`
  ${userFragment}
  mutation TokenAuth($email: String!, $password: String!) {
    tokenCreate(email: $email, password: $password) {
      token
      errors {
        field
        message
      }
      user {
        ...User
      }
    }
  }
`;

export const socialAuth = gql`
  ${userFragment}
  mutation SocialAuth($accessToken: String!,$provider: String!, $email: String,$uid:String, $authType: AuthEnum!) {
    socialAuth(accessToken: $accessToken, provider: $provider, email: $email,uid:$uid, authType: $authType){
      token
      social{
        user{
          ...User
        }
      }
      error{
        field
        message
      }
    }
  }
`;
export const tokenVeryficationMutation = gql`
  ${userFragment}
  mutation VerifyToken($token: String!) {
    tokenVerify(token: $token) {
      payload
      user {
        ...User
      }
    }
  }
`;
