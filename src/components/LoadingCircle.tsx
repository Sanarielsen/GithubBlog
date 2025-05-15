import { ContainerLoading, LoadingCircle as Spinner } from "@globalStyles/LoadingContainer"

export function LoadingCircle() {

  return (
    <ContainerLoading>
      <Spinner />
    </ContainerLoading>
  )  
}