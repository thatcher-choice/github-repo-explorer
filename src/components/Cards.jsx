import { ReactComponent as StarIcon } from '../assests/staricon.svg'
import { ReactComponent as LangIcon } from '../assests/languageicon.svg'

export default function Cards({ title, repos, fallbackText, onSelectRepo }) {
    return (
        <section className="repos-category">
            <h2>{title}</h2>
            {repos.length === 0 && <p className='fallback-text'>{fallbackText}</p>}
            {repos.length > 0 && (
                <ul className="repos">
                    {repos.map((repo) => (
                        <li key={repo.id} className="repo-item">
                            <button onClick={() => onSelectRepo(repo.id)}>
                                <img src={repo.owner.avatar_url} alt={repo.avatar_url} />
                                <div>
                                    <h3>{repo.name}</h3>
                                    <p className='description'><span className="heading">Description:</span> <span className='text' >{repo.description}</span></p>
                                    <div className="repo-details">
                                        <p> <StarIcon className="icon" /> <span className="heading">Stars:</span> {repo.stargazers_count}</p>
                                        <p><LangIcon className="icon" /><span className="heading">Language:</span> {repo.language}</p>
                                    </div>
                                </div>
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}
