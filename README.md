# eye-API-AIG

**API Endpoints:**
* demo : retorna si dos rostros son iguales por medio de un booleano.

# Installation

Install [face_recognition](https://github.com/ageitgey/face_recognition) together with [dlib](http://dlib.net/) first.
Then run: pip install -r requirements.txt

# How to Run

## Prerequisites
Prepare some known faces as a database for face_rec API in sample_images folder, and modify known_faces in face_util.py accordingly.
```
# Each face is tuple of (Name,sample image)    
known_faces = [('Obama','sample_images/obama.jpg'),
               ('Peter','sample_images/peter.jpg'),
              ]
```
## Run API Server
py demo.py

## Run API client - Web
Simply open a web browser and enter:

http://127.0.0.1:5001/face_rec
