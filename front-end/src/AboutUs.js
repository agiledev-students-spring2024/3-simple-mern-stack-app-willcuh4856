import React, { useState, useEffect } from 'react';

const AboutUs = () => {
    // State variables to store about us content
    const [content, setContent] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch about us content from backend
    useEffect(() => {
        // Use the environment variable for the hostname
        const serverUrl = process.env.REACT_APP_SERVER_HOSTNAME;

        fetch(`${serverUrl}/about-us`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setContent(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            });
    }, []);

    // Display loading state if content is being fetched
    if (loading) {
        return <div>Loading...</div>;
    }

    // Display error message if there's an error fetching content
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    // Display about us content
    return (
        <div className="AboutUs">
            <h1>About Us</h1>
            {content.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
            <img src={content.imageUrl} alt="About Us" />
        </div>
    );
};

export default AboutUs;
