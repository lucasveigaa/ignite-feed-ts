import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment( {content, onDeleteComment}: CommentProps ){

    const [likeCount, setLikeCount] = useState(0)

    function handleDeletComment(){
        onDeleteComment(content)
    }

    function handleAddLike(){
        setLikeCount((state) => {
            return state + 1
        })
    }

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src='https://avatars.githubusercontent.com/u/99448942?v=4'/>
            <div className={styles.commentBox}>
                
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Lucas Veiga</strong>
                            <time title="13 de Julho às 15:30h" dateTime="2022-07-13 15:30:00">Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeletComment} title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleAddLike}>
                        <ThumbsUp/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}