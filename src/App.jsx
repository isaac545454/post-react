import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [posts, setPosts] = useState([])

  useEffect(()=>{
    fetchData()
  }, [])
  
  const fetchData = async()=>{
    const Posts = await fetch('https://jsonplaceholder.typicode.com/posts')
    const phots = await fetch('https://jsonplaceholder.typicode.com/photos')
    const  DataPhotos = await phots.json()
    const Data = await Posts.json()

    const postEfotos =await Data.map((post, index)=>{
      return {...post, cover: DataPhotos[index].url}
    })
    console.log([postEfotos]);
    setPosts(postEfotos)
  }


  return (
    <section className='container'>
    <div className="posts">
      {posts.length === 0 && <h1>carregando</h1>}
      {posts.map((post) =>(
        
        <div className='post'>
        <img src={post.cover} alt={post.title} />
        <div key={post.id} className='post-card'>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
        </div>
        
      ))}
    </div>
    </section>
  )
}

export default App
  
