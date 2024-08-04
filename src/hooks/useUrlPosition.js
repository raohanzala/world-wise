import { useSearchParams } from "react-router-dom"

export function useUrlPosition(){
  const [seacrhParams] = useSearchParams()
  const lat = seacrhParams.get('lat')
  const lng = seacrhParams.get('lng')

  return [lat, lng]
}