import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img
             className={styles.cover}
             src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            />
            <div className={styles.profile}>
                <Avatar src="https://avatars.githubusercontent.com/u/99448942?v=4"/>
                <strong>Lucas Veiga</strong>
                <span>Desenvolvedor front-end</span>

                <footer>
                    
                    <a href='#'><PencilLine size={20}/>Editar seu perfil</a>
                </footer>
            </div>
        </aside>
    )
}