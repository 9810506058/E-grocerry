import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 ">
      <div className="container mx-auto px-3 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h1 className="text-2xl font-bold">E-Grocerry</h1>
          <p className="text-sm leading-10">© 2024 E-Grocerry. All rights reserved.</p>
        </div>
        <div className="flex justify-center md:justify-end space-x-4">
          <a href="/#" className="text-gray-400 hover:text-white">
            <svg
              className="h-6 w-6 mr-10"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-3.36 8.39c.03.13.03.26.03.39 0 3.99-3.03 8.6-8.6 8.6-1.71 0-3.3-.5-4.63-1.34.24.03.5.05.76.05 1.42 0 2.72-.48 3.76-1.28-1.32-.03-2.42-.89-2.8-2.08.18.03.34.05.53.05.24 0 .47-.03.69-.08-1.39-.28-2.42-1.5-2.42-2.95v-.05c.39.21.82.34 1.29.36-.76-.5-1.26-1.34-1.26-2.29 0-.5.13-.97.37-1.38 1.33 1.64 3.31 2.71 5.55 2.82-.05-.21-.08-.45-.08-.68 0-1.67 1.36-3.03 3.03-3.03.87 0 1.66.37 2.21.97.68-.13 1.32-.37 1.89-.71-.21.68-.68 1.26-1.28 1.62.61-.08 1.18-.24 1.72-.48-.39.61-.89 1.15-1.45 1.58z" />
            </svg>
          </a>
          <a href="/#" className="text-gray-400 hover:text-red-900">
            <svg
              className="h-6 w-6 mr-10"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M24 4.56v14.88c0 2.52-2.04 4.56-4.56 4.56h-14.88c-2.52 0-4.56-2.04-4.56-4.56v-14.88c0-2.52 2.04-4.56 4.56-4.56h14.88c2.52 0 4.56 2.04 4.56 4.56zm-14.88 3.36c-.48 0-.96.18-1.32.54-.36.36-.54.84-.54 1.32s.18.96.54 1.32c.36.36.84.54 1.32.54s.96-.18 1.32-.54c.36-.36.54-.84.54-1.32s-.18-.96-.54-1.32c-.36-.36-.84-.54-1.32-.54zm8.88.72h-1.56c-.54 0-.96.42-.96.96v1.56h2.52l-.24 2.16h-2.28v6.24h-2.28v-6.24h-1.56v-2.16h1.56v-1.44c0-1.8 1.08-2.76 2.64-2.76.84 0 1.68.12 2.4.36v1.8z" />
            </svg>
          </a>
          <a href="/#" className="text-gray-400 hover:text-white">
            <svg
              className="h-6 w-6 mr-10"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22.8 0h-21.6c-.66 0-1.2.54-1.2 1.2v21.6c0 .66.54 1.2 1.2 1.2h21.6c.66 0 1.2-.54 1.2-1.2v-21.6c0-.66-.54-1.2-1.2-1.2zm-14.64 20.16h-3.36v-10.08h3.36v10.08zm-1.68-11.52c-1.08 0-1.92-.9-1.92-1.92 0-1.08.84-1.92 1.92-1.92s1.92.84 1.92 1.92c0 1.02-.84 1.92-1.92 1.92zm13.44 11.52h-3.36v-5.04c0-1.26-.48-2.1-1.74-2.1-1.08 0-1.62.72-1.92 1.38-.12.24-.18.6-.18.96v4.8h-3.36v-10.08h3.36v1.38c.48-.72 1.2-1.74 2.94-1.74 2.1 0 3.6 1.38 3.6 4.26v6.18z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
