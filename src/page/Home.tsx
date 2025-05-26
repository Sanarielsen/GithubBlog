import { CardPosts } from "@globalComponents/CardPosts";
import { CardProfile } from "@globalComponents/CardProfile";
import { SearchPosts } from "@globalComponents/SearchPosts";
import { useRepositoryIssues } from "@globalQueries/getIssuesRepository";

import { Container } from "@globalStyles/HomeContainer";
import { useState } from "react";

export function Home() {
  const [searchFor, setSearchFor] = useState("");

  const queryPosts = useRepositoryIssues();
  const totalPosts = queryPosts && queryPosts.data ? queryPosts.data.length : 0

  return (
    <Container>
      <CardProfile />
      <SearchPosts 
        totalPosts={totalPosts} 
        onSearchPosts={(searchString) => setSearchFor(searchString)} 
      />
      <CardPosts 
        listPosts={queryPosts} 
        searchFor={searchFor}
      />
    </Container>
  )
}