import { useParams } from "react-router-dom"

const Post = () => {
  const param = useParams()
  const postId = param.postId
  return (
    <div className="bg-white h-screen px-4 lg:px-8">
      <div className="w-full max-w-[1240px] mx-auto">
        Post id {postId}
      </div>
    </div>
  )
}

export default Post