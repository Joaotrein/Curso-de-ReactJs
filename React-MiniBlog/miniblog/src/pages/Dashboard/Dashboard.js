import styles from "./Dashboard.module.css";

import { Link } from "react-router-dom";

import { useAuthValue } from "../../Context/AuthContext";

import { useFetchDocuments } from "../../Hooks/useFetchDocuments";
import { useDeleteDocument } from "../../Hooks/useDeleteDocument";

const Dashboard = () => {
    const { user } = useAuthValue();

    const uid = user.uid;

    const { documents: posts, loading } = useFetchDocuments("posts", null, uid);

    const { deleteDocument } = useDeleteDocument("posts");

    if (loading) {
        return <p>Carregando...</p>;
    }

    //Posts do usuário

    return (
        <div className={styles.dashboard}>
            <h2>Dashboard</h2>
            <p>Gerencie os seus posts</p>
            {posts && posts.length === 0 ? (
                <div className={styles.nopost}>
                    <p>Não foram encontrados posts</p>
                    <Link to="/posts/create" className="btn">
                        Criar primeiro post
                    </Link>
                </div>
            ) : (
                <>
                    <div className={styles.post_header}>
                        <span>Título</span>
                        <span>Ações</span>
                    </div>

                    {posts &&
                        posts.map((post) => (
                            <div className={styles.post_row} key={post.id}>
                                <p>{post.title}</p>
                                <div>
                                    <Link
                                        to={`/posts/${post.id}`}
                                        className="btn btn-outline"
                                    >
                                        Ver
                                    </Link>
                                    <Link
                                        to={`/posts/edit/${post.id}`}
                                        className="btn btn-outline"
                                    >
                                        Editar
                                    </Link>
                                    <button
                                        onClick={() => deleteDocument(post.id)}
                                        className="btn btn-outline btn-danger"
                                    >Excluir</button>
                                </div>
                            </div>
                        ))}
                </>
            )}
        </div>
    );
};

export default Dashboard;
