# Python Django React Code Setup
<b>Run the project on windows</b>
1. Install python2.7 by downloading installer from internet. Link  https://www.python.org/ftp/python/2.7.12/python-2.7.12.amd64.msi or
https://www.python.org/ftp/python/2.7.12/python-2.7.12.msi

2. Now set python path in environment variables
3. Setup virtualenv
   <pre>pip install virtualenv</pre>

   Go to django project directory where manage.py available and run following commands
   <pre>virtualenv venv -p (path of python.exe)
   .\venv\Scripts\activate.bat</pre>

4. Stay in to the same directory and run following commands to install dependecies
   <pre>pip install -r requirements.txt
   python manage.py migrate
   python manage.py createsuperuser</pre>

5. Run the server
   <pre>python manage.py runserver</pre>

6. Access at http://localhost:8000/

<b>Run the project on Mac/Liunux</b>
1. Install python2.7
   <pre>sudo brew install python //For Mac
   sudo apt-get install python</pre> //For Linux

2. Now set python path in environment variables
3. Setup virtualenv
   <pre>pip install virtualenv</pre>

   Go to django project directory where manage.py available and run following commands
   <pre>virtualenv venv -p python
   .\venv\Scripts\activate.bat</pre>

4. Stay in to the same directory and run following commands to install dependecies
   <pre>pip install -r requirements.txt
   python manage.py migrate
   python manage.py createsuperuser</pre>

5. Run the server
   <pre>python manage.py runserver</pre>

6. Access at http://localhost:8000/
