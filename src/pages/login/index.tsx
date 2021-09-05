import { FiLogIn } from 'react-icons/fi'
import styles from './../../styles/pages/Login.module.scss'

export default function LandingPage() {
    return (
        <main className={styles.container}>
            <aside className={styles.asideBox}>
                <img src="./assets/hero-login-image.svg" alt="Mulher alongando" />
                <h1>
                    Do conforto de sua casa <br/>
                    ou trabalho.
                </h1>
                <span>
                    Pratique inúmeros exercícios <br/>
                    físicos e mantenha-se saudável.
                </span>
            </aside>

            <section className={styles.loginBox}>
                <img src="./assets/fitness.svg" alt="Boneco malhando" />
                <h1>
                    Iniciar Sessão
                </h1>
                <div className={styles.buttonGroup}>
                    <span>Selecione uma conta</span>
                    <button>
                        Entrar com Google
                        <FiLogIn size={24} color='#FFF'/>
                    </button>
                    <button>
                        Entrar com Github
                        <FiLogIn size={24} color='#FFF'/>
                    </button>
                </div>
            </section>
        </main>
    )
}