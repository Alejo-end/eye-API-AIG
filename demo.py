from flask import Flask, request, redirect
from werkzeug.utils import secure_filename
import os
import json
from face_util import compare_faces, face_rec, find_facial_features, find_face_locations
import re
import base64

app = Flask(__name__)

UPLOAD_FOLDER = 'received_files'
ALLOWED_EXTENSIONS = ['png', 'jpg', 'jpeg']

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

def print_request(request):
    print(request.url)
    print('content-type: "%s"' % request.headers.get('content-type'))
    print('content-length: %s' % request.headers.get('content-length'))
    if request.is_json:
        json_data = request.get_json(cache=True)
        if json_data.get('image_data', None) is not None:
            json_data['image_data'] = '<image base64 data>'
        else: 
            print('request image_data is None.')
        print(json.dumps(json_data,indent=4))
    else: 
        body_data=request.get_data()
        body_sub_image_data=re.sub(b'(\r\n\r\n)(.*?)(\r\n--)',br'\1<image raw data>\3', body_data,flags=re.DOTALL)
        print(body_sub_image_data.decode('utf-8'))


@app.route('/face_match', methods=['POST', 'GET'])
def face_match():
    if request.method == 'POST':
        if ('file1' not in request.files) or ('file2' not in request.files):
            print('No file part')
            return redirect(request.url)

        file1 = request.files.get('file1')
        file2 = request.files.get('file2')
        if file1.filename == '' or file2.filename == '':
            print('No selected file')
            return redirect(request.url)

        if allowed_file(file1.filename) and allowed_file(file2.filename):
            ret = compare_faces(file1, file2)
            resp_data = {"match": bool(ret)} 
            return json.dumps(resp_data)

    return '''
    <!doctype html>
    <title>reconocimiento de caras</title>
    <h1>Cargar una imagen</h1>
    <form method=post enctype=multipart/form-data>
      <input type=file name=file1>
      <input type=file name=file2>
      <input type=submit value=Upload>
    </form>
    '''

@app.route('/')
def hello_world():
    return 'Hello, World!'

app.run(host='0.0.0.0', port='5001', debug=True)
