import { CardPosts } from "@globalComponents/CardPosts";
import { CardProfile } from "@globalComponents/CardProfile";
import { SearchPosts } from "@globalComponents/SearchPosts";

import { Container } from "@globalStyles/HomeContainer";

export function Home() {

  return (
    <Container>
      <CardProfile />
      <SearchPosts />
      <CardPosts />
    </Container>
  )
}