import { useNavigate } from 'react-router-dom'

import { ProjectForm } from '../project/ProjectForm'

import styles from './NewProject.module.css'

export function NewProject() {
    const navigate = useNavigate()
        
    function createPost(project) {
        //Initialize const and services
        project.cost = 0
        project.services = []

        fetch('http://localhost:9090/projects', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        })
            .then((resp) => resp.json())
            .then((data) => {
                navigate('/projects', { state: {message: 'Projeto criado com sucesso!'} })
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