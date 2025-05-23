import { CardDescription, CardImage, CardRedirect, Container, DescriptionIcons, IconGroup } from "@globalStyles/CardProfileContainer";
import { useProfileGithub } from "@globalQueries/getProfileGithub";
import logoCompany from "@globalAssets/images/CompanyLogo.svg"
import logoFollow from "@globalAssets/images/FollowLogo.svg"
import logoGithub from "@globalAssets/images/GithubLogo.svg"
import iconeRedirect from "@globalAssets/images/RedirectIcone.svg"

export function CardProfile() {

  const { isPending, isError, data: profile, error } = useProfileGithub();

  //FEATURE: Create a loading component, error component and empty data component
  if (isPending) 
    return (
      <Container>
        <p>Loading...</p>
      </Container>
    )
  if (isError)
    return (
      <Container>
        <p>Error: {error.message}</p>
      </Container>
    )     
  if (!profile)
    return (
      <Container>
        <p>No data</p>  
      </Container>
    )

  return (
    <Container>
      <CardImage>
        <img src={profile.imageProfile} alt="Foto de Perfil" />
      </CardImage>
      <CardRedirect href={`https://github.com/${profile.username}`} target="_blank">
        Github<img src={iconeRedirect} />
      </CardRedirect>
      <CardDescription>        
        <h3>{profile.name}</h3>
        <p>{profile.description}</p>
        <DescriptionIcons>
            <IconGroup><img src={logoGithub} />{profile.username}</IconGroup>
            <IconGroup><img src={logoCompany} />{profile.company}</IconGroup>
            <IconGroup><img src={logoFollow} />{profile.countFollowers} seguidores</IconGroup>            
        </DescriptionIcons>        
      </CardDescription>
    </Container>
  )
}