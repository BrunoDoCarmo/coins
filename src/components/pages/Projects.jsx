import { useLocation } from 'react-router-dom'
import { Message } from "../layout/Message";
import { Container } from '../layout/Container';
import { LinkButton } from '../layout/LinkButton'
import { ProjectCard } from '../project/ProjectCard';
import { Loading } from '../layout/Loading';

import styles from './Projects.module.css'
import { useState, useEffect } from 'react';

export function Projects() {
    const [projects, setProjects] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)
    const [projectMessage, setProjectMessage] = useState('')

    const location = useLocation()
    let message = ''
    if(location.state) {
        message = location.state.message
    }

    useEffect(() => {
        setTimeout(() => {
                fetch('http://localhost:9090/projects',{
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                .then((resp) => resp.json())
                .then(data => {
                    setProjects(data)
                    setRemoveLoading(true)
                })
                .catch((err) => console.log(err))
            },300)
    }, [])

    function removeprojects(id) {
        fetch(`http://localhost:9090/projects/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(resp => resp.json())
        .then(data =>{
            setProjects(projects.filter((project) => project.id !== id))
            setProjectMessage('Projeto removido com sucesso!')
        })
        .catch((err) => console.log(err))
    }

    return (
        <div className={styles.projects_container}>
            <div className={styles.title_container}>
                <h1>Meus Projetos</h1>
                <LinkButton to="/newproject" text="Cria Projeto"/>
            </div>
            {message && <Message type="success" msg={message} />}
            {projectMessage && <Message type="success" msg={projectMessage} />}
            <Container customClass='start'>
                <div className={styles.project_center}>
                    {projects.length > 0 && 
                        projects.map((project) => (
                            <ProjectCard 
                                id={project.id}
                                name={project.name}
                                budget={project.budget}
                                category={project.category.name}
                                key={project.id}
                                handleRemove={removeprojects}
                            />
                        ))
                    }
                    {!removeLoading && <Loading/>}
                    {
                        removeLoading && projects.length === 0 &&
                        <p>Não há projetos cadastrados!</p>
                    }
                </div>
            </Container>
        </div>
    )
}