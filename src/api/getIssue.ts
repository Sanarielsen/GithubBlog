import { Octokit } from "octokit"
import { useQuery } from "@tanstack/react-query"

import type { Post } from "@features/Post/types/post";

const tokenGH = import.meta.env.VITE_TOKEN_API_GITHUB;
const username = import.meta.env.VITE_NAME_USER_GITHUB;
const repositoryName = import.meta.env.VITE_NAME_REPOSITORY_GITHUB;

const octokit = new Octokit({
  auth: tokenGH
})

export const useQueryIssue = (idPost: number) => {
  return useQuery({
    queryKey: ['github_api_', username, '_post'],
    queryFn: () => getIssue(idPost),
  })
}

const getIssue = async (idIssue: number): Promise<Post> => {

  const response = await octokit.request(`GET /repos/${username}/${repositoryName}/issues/${idIssue}`, {
    owner: username,
    repo: repositoryName,
    issue_number: idIssue,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
  const currentIssue = response.data;

  return  {
    id: currentIssue.id,
    title: currentIssue.title,
    body: currentIssue.body,
    createdAt: currentIssue.created_at,
    owner: currentIssue.user.login,
    quantComments: currentIssue.comments
  };
}
