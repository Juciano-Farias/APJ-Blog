import { getPosts } from "../services"

const MembersPages = ({posts}) => {
  return (
    <div>{posts.map(post => ({}))}</div>
  )
}

export const getStaticProps = async () => {
  const members = await getPosts()
  
  return{
    props: {
      posts: members
    }
  }
}

export default MembersPages