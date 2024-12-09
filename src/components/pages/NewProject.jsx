import { useHistory } from 'react-router-dom'

import ProjectForm from '../project/ProjectForm'

import styles from './NewProject.module.css'

export function NewProject() {
    const history = useHistory()
    function createPost(project) {
        project.cost = 0
        project.services = []

        fetch('http://localhost:5000/project', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project)
        })
            .then((resp) => resp.json())
            .then((data) =>{
                history.push('/projects', {message: 'Projeto Criando com Sucesso!'})
            })
    }

    return(
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie um projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
        </div>
    )
}