import { Container, DescriptionIcons, IconGroup, PostHeaderDescription, PostHeaderToggles } from "@features/Post/styles/PostHeaderContainer";
import logoSinceAt from "@globalAssets/images/CompanyLogo.svg"
import logoComment from "@globalAssets/images/FollowLogo.svg"
import logoGithub from "@globalAssets/images/GithubLogo.svg"
import iconeRedirect from "@globalAssets/images/RedirectIcone.svg"
import iconeReturn from "@globalAssets/images/ReturnIcone.svg"
import type { Post } from "@features/Post/types/post";
import { getSinceTheDateHappen } from "@globalUtils/dateFormatter";

interface PostHeaderProps {
  post: Post
}

export function PostHeader({ post }: PostHeaderProps) {

  const hasMoreThanOneComments = post.quantComments > 1 ? "s" : ""

  return (
    <Container>
      <PostHeaderToggles>
        <a id="aReturn" href="/">
          <img src={iconeReturn} />
          <p id="btnReturn">Voltar</p></a>
        <a id="aRedirect" href="">
          <p id="btnRedirect">Ver no github</p>
          <img src={iconeRedirect} />
        </a>
      </PostHeaderToggles>
      <PostHeaderDescription>
        <h2>{post.title}</h2>
      </PostHeaderDescription>      
      <DescriptionIcons>
        <IconGroup><img src={logoGithub}/>{post.owner}</IconGroup>
        <IconGroup><img src={logoSinceAt}/>{getSinceTheDateHappen(post.createdAt)}</IconGroup>
        <IconGroup><img src={logoComment}/>{post.quantComments} comentário{hasMoreThanOneComments}</IconGroup>
      </DescriptionIcons>
    </Container>
  )
}