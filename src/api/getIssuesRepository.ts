import { Octokit } from "octokit"
import { useQuery } from "@tanstack/react-query"

import type { IssuePost } from "@globalTypes/posts"

const tokenGH = import.meta.env.VITE_TOKEN_API_GITHUB;
const username = import.meta.env.VITE_NAME_USER_GITHUB;

const octokit = new Octokit({
  auth: tokenGH
})

export const useRepositoryIssues = () => {
  return useQuery({
    queryKey: ['github_api_', username, '_posts'],
    queryFn: getRepositoryIssues,
  })
}

const getRepositoryIssues = async (): Promise<IssuePost[]> => {

  const response = await octokit.request(`GET /repos/${username}/githubblog/issues`, {
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'      
    },
    labels: "article"
  })

  return response.data.map((post: any) => ({
    id: post.id,
    title: post.title,
    description: post.body,
    createdAt: post.created_at
  }));
}
