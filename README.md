# Python Django React Code Setup
Run the project on windows
1. Install python2.7 by downloading installer from internet. Link  https://www.python.org/ftp/python/2.7.12/python-2.7.12.amd64.msi or
https://www.python.org/ftp/python/2.7.12/python-2.7.12.msi

2. Now set python path in environment variables
3. Setup virtualenv
   # pip install virtualenv

   Go to django project directory where manage.py available and run following commands
   # virtualenv venv -p <path of python.exe>
   # .\venv\Scripts\activate.bat

4. Stay in to the same directory and run following commands to install dependecies
   # pip install -r requirements.txt
   # python manage.py migrate
   # python manage.py createsuperuser

5. Run the server
   # python manage.py runserver

6. Access at http://localhost:8000/