import { useParams } from "react-router-dom"

const Post = () => {
  const param = useParams()
  const postId = param.postId
  return (
    <div>Post id {postId}</div>
  )
}

export default Post