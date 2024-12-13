# Video Streaming Backend

A video streaming application backend that allows users to upload, stream, and manage videos efficiently. This project is designed for scalability and performance, ensuring a smooth user experience.

## Features

- **User Authentication**: Secure login and registration system using custom JWT.
- **Video Management**: Organize and manage your uploaded videos with ease.

## Tech Stack

- **Backend**: Express.js
- **Authentication**: Custom JWT-based authentication
- **Database**: MongoDB

## Installation

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Steps to Run Locally

1. **Clone the Repository**

   ```bash
   git clone https://github.com/rzn1337/video-streaming.git
   cd video-streaming
   ```

2. **Install Dependencies**

   Using npm:

   ```bash
   npm install
   ```

   Or using yarn:

   ```bash
   yarn install
   ```

3. **Set Up Environment Variables**

   Create a `.env` file in the root directory and add the following variables:

   ```env
   DATABASE_URL=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

   Replace `your_mongodb_connection_string` and `your_jwt_secret` with the appropriate values.

4. **Start the Development Server**

   ```bash
   npm run dev
   ```

   Or using yarn:

   ```bash
   yarn dev
   ```

5. **Access the Application**

   Open your browser and navigate to `http://localhost:3000`.

## Usage

- **Upload Videos**: Log in to your account and start uploading your videos.
- **Stream Content**: Browse and stream videos uploaded by you and others.
- **Manage Videos**: Edit or delete your uploaded videos directly from your dashboard.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes with clear and descriptive messages.
4. Push your changes to your fork.
5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For questions, feedback, or support, please reach out:

- **Email**: [alirizwan2003@gmail.com](mailto:alirizwan2003@gmail.com)

