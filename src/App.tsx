import './global.css'
import styles from './App.module.css'

import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'


const posts = [
  {
      id: 1,
      author: {
          avatarUrl: 'https://avatars.githubusercontent.com/u/99448942?v=4',
          name: 'Lucas Veiga',
          role: 'Dev front-end'
      },
      content: [
          {type: 'paragraph', content: ' Fala galeraa 👋'},
          {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
          {type: 'link', content: '👉 jane.design/doctorcare'}
      ],
      publishedAt: new Date('2022-07-10 17:00:00')
  },
  {
      id: 2,
      author: {
          avatarUrl: 'https://github.com/diego3g.png',
          name: 'Diego Fernandes',
          role: 'CTO at Rocketseat'
      },
      content: [
          {type: 'paragraph', content: ' Fala devs'},
          {type: 'paragraph', content: 'É um projeto que fiz no Ignite Lab , evento da Rocketseat. O nome do projeto é Ignite Feed 🚀'},
          {type: 'link', content: '👉 diego.fernandes/doctorcare'}
      ],
      publishedAt: new Date('2022-06-06 16:30:00')
  }

]


function App() {
 
  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
            return(
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}

export default App
