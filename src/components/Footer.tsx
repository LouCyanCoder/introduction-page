import React from 'react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <p>Made by LouCyanCoder © {currentYear}</p>
        </footer>
    );
};

export default Footer;