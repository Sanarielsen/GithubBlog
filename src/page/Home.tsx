import { CardPosts } from "@globalComponents/CardPosts";
import { CardProfile } from "@globalComponents/CardProfile";
import { Container } from "@globalStyles/HomeContainer";

export function Home() {

  return (
    <Container>
      <CardProfile />      
      <CardPosts />
    </Container>
  )
}