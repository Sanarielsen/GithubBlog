import type { UserAuthor } from "@globalTypes/user"
import { useQuery } from "@tanstack/react-query"
import { Octokit } from "octokit"

const tokenGH = import.meta.env.VITE_TOKEN_API_GITHUB
const username = import.meta.env.VITE_NAME_USER_GITHUB

const octokit = new Octokit({
  auth: tokenGH
})

export const useProfileGithub = () => {  
  return useQuery({
    queryKey: ['github_api_', username, '_profile'],
    queryFn: getProfileGithub,
  })  
}

const getProfileGithub = async (): Promise<UserAuthor> => {  

  const response = await octokit.request('GET /user', {
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  });
  const data = response.data
  
  return {
    name: data.name,
    imageProfile: data.avatar_url,
    description: data.bio,
    username: data.login,
    company: data.company,
    countFollowers: data.followers
  }
}



