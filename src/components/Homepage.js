import './Homepage.css'

const Homepage = ({users}) => {
    return (
        <div className="homepage">
            <div className="homepage-content">
                <h1>Join and sign up now!</h1>
                <p>Number of users: {users.length}</p>
            </div>            
        </div>
    )
}

export default Homepage
