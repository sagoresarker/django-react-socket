# shadhin-lab-task-django-react-socket

# Project Documentation

This documentation provides step-by-step instructions on how to set up and run the backend and frontend of the project. The project aims to build a web application that tracks and displays the user's current location on a map.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Running the Application](#running-the-application)
- [Conclusion](#conclusion)

## Prerequisites

Before getting started, make sure you have the following installed on your system:

1. Python: [Install Python](https://www.python.org/downloads/)
2. Node.js: [Install Node.js](https://nodejs.org/en/download/)

## Backend Setup

1. Clone the repository:

```bash
git clone https://github.com/sagoresarker/shadhin-lab-task-django-react-socket.git
cd shadhin-lab-task-django-react-socket
```

2. Navigate to the backend folder:

```bash
cd backend
```

3. Create a virtual environment and activate it:

```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

4. Install the required Python packages:

```bash
pip install -r requirements.txt
```

5. Set up the database:

   - Make sure you have PostgreSQL installed and running on your system.
   - Create a database named "location_data_db".
   - Update the database settings in the `settings.py` file to match your database credentials.


5. Run the database migration:

```bash
python manage.py makemigrations
python manage.py migrate
```

6. Run the backend server:

```bash
python manage.py runserver
```

7. The Django backend will be running at http://localhost:8000/.

### Output

![Backend Output](https://github.com/sagoresarker/shadhin-lab-task-django-react-socket/blob/main/Images/backend-result.png?raw=true)

![Backend Output](https://github.com/sagoresarker/shadhin-lab-task-django-react-socket/blob/main/Images/swaggar-doc.png?raw=true)

The output on http://localhost:8000/ route will look like this:

## Frontend Setup

1. Open a new terminal and navigate to the frontend folder:

```bash
cd frontend
```

2. Install the required dependencies:

```bash
npm install
```

## Running the Application

1. In the terminal, make sure you are in the `frontend` directory.

2. Start the frontend development server:

```bash
npm start
```

3. The frontend will be accessible at http://localhost:3000/.

4. Open your web browser and go to http://localhost:3000/ to view the application.

### Output

![Frontend Output](https://github.com/sagoresarker/shadhin-lab-task-django-react-socket/blob/main/Images/frontend-result.png?raw=true)



## Unfinished Task
- Use WebSocket for async communication.
    - I tried it, but couldn't solve it.
    ![Backend Output](https://github.com/sagoresarker/shadhin-lab-task-django-react-socket/blob/main/Images/error-websocket.png?raw=true)

- Configure Docker
    - I tried to configure the project with Docker. Everything was working fine except the frontend.
        ![Backend Output](https://github.com/sagoresarker/shadhin-lab-task-django-react-socket/blob/main/Images/docker-error.png?raw=true)
## Conclusion

Happy coding!
