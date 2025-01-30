# SimpleSpeedyQuiz - Web Quiz Game

Welcome to **SimpleSpeedyQuiz**, a web application built with Django. Users can answer various types of questions, and their score is calculated based on the correct answers. The game also supports theme switching (light/dark mode) and question management via a database.

## Requirements

- **Python 3.x** (>=3.7 recommended)
- **Django 3.x** or later
- **SQLite** (default in Django)

## Installazione

1. Clone the repository::

   ```bash
    git clone https://github.com/TizianoMu/simplespeedyquiz.git
    ```
2. Navigate to the project directory::
   ```bash
    cd simplespeedyquiz
    ```
3. Install the dependencies:
   ```bash
    pip install -r requirements.txt
    ```
4. Apply the database migrations:
   ```bash
    python manage.py migrate
    ```
5. Start the development server: 
   ```bash
    python manage.py runserver
    ```
6. Access the application via your browser at http://127.0.0.1:8000.

FAQ (Frequently Asked Questions)
1. How can I switch between light and dark theme?
The theme can be changed at any time by clicking the "Light/Dark Theme" button in the top-right corner of the interface. The selected theme will be saved in your browser and automatically applied each time you visit the site, even after closing and reopening the browser.

2. Is the theme retained across all pages?
Yes, the selected theme is saved using the browser's localStorage. This means that the theme remains consistent as you navigate between pages or refresh the site. You don’t need to change the theme every time.

3. How can I add new questions to the quiz?
To add new questions, follow these steps:

    1. Open the fixtures.json file in the /quiz/fixtures/ directory or use the Django admin interface to manage the database.

    2. If you prefer using Django's admin interface:

        - First, create a superuser:
        ```bash
        python manage.py createsuperuser
        ```
        - Log in to the admin interface at http://127.0.0.1:8000/admin using your credentials.

        - Go to the "Questions" section and add new questions by specifying the question text, options, and the correct answer.
4. How can I reset the quiz?
    To reset the quiz (i.e., start over with the questions), you can reload the page or navigate back to the homepage to start a new session.
## Contact
For any questions or issues, feel free to contact the developer:

Email: tiziano.murzio@outlook.it
GitHub: https://github.com/tizianomurzio
