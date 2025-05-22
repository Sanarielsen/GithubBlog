import { Container, DescriptionIcons, IconGroup, PostHeaderDescription, PostHeaderToggles } from "@features/Post/styles/PostHeaderContainer";
import logoSinceAt from "@globalAssets/images/CompanyLogo.svg"
import logoComment from "@globalAssets/images/FollowLogo.svg"
import logoGithub from "@globalAssets/images/GithubLogo.svg"
import iconeRedirect from "@globalAssets/images/RedirectIcone.svg"
import iconeReturn from "@globalAssets/images/ReturnIcone.svg"

const comments = 5
const hasMoreThanOneComments = comments > 1 ? "s" : ""

export function PostHeader() {
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
        <h2>JavaScript data types and data structures</h2>
      </PostHeaderDescription>      
      <DescriptionIcons>
        <IconGroup><img src={logoGithub}/>cameronwll</IconGroup>
        <IconGroup><img src={logoSinceAt}/>Há um dia</IconGroup>
        <IconGroup><img src={logoComment}/>{comments} comentário{hasMoreThanOneComments}</IconGroup>
      </DescriptionIcons>
    </Container>
  )
}