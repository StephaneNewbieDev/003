
import React, { useState, useEffect } from 'react';

function App() {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        fetch('https://api.github.com/users/github-john-doe')
            .then(response => response.json())
            .then(data => setProfile(data));
    }, []);

    return (
        <div>
            <header>
                <h1>John Doe Portfolio</h1>
            </header>
            <main>
                {profile ? (
                    <div>
                        <h2>{profile.name}</h2>
                        <p>{profile.bio}</p>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </main>
        </div>
    );
}

export default App;
