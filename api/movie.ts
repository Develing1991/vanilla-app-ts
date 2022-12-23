import nfetch from 'node-fetch'
import { VercelRequest, VercelResponse } from  '@vercel/node'
const { OMDB_KEY } = process.env
export default async function handler(request: VercelRequest, response: VercelResponse){
  const { title, page, id } = JSON.parse(request.body)
  // id가 있으면 상세요청으로 확인
  const url = id 
    ? `https://omdbapi.com?apikey=${OMDB_KEY}&i=${id}&plot=full`
    : `https://omdbapi.com?apikey=${OMDB_KEY}&s=${title}&page=${page}`
  // 이 코드가 동작하는 환경은 node.js환경임 fetch 함수가 없음
  // node-fetch 라는 패키지를 설치해서 사용
  // const res = await fetch(url) 
  const res = await nfetch(url) 
  const json = await res.json()
  response.status(200).json(json)
}