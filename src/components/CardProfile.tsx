import { CardDescription, CardImage, CardRedirect, Container, DescriptionIcons, IconGroup } from "@globalStyles/CardProfileContainer";
import imgPerfilExemplo from "@globalAssets/images/ExempleAvatar.png";
import logoCompany from "@globalAssets/images/CompanyLogo.svg"
import logoFollow from "@globalAssets/images/FollowLogo.svg"
import logoGithub from "@globalAssets/images/GithubLogo.svg"
import iconeRedirect from "@globalAssets/images/RedirectIcone.svg"

export function CardProfile() {

  return (
    <Container>
      <CardImage>
        <img src={imgPerfilExemplo} alt="Foto de Perfil" />
      </CardImage>
      <CardRedirect href="https://github.com/Sanarielsen" target="_blank">
        Github<img src={iconeRedirect} />
      </CardRedirect>
      <CardDescription>        
        <h3>Cameron Williamson</h3>

        <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. 
        Eu viverra massa quam dignissim aenean malesuada suscipit. 
        Nunc, volutpat pulvinar vel mass.</p>

        <DescriptionIcons>
            <IconGroup><img src={logoGithub} />cameronwll</IconGroup>
            <IconGroup><img src={logoCompany} />sanarielsen</IconGroup>
            <IconGroup><img src={logoFollow} />32 seguidores</IconGroup>            
        </DescriptionIcons>
        
      </CardDescription>
    </Container>
  )
}