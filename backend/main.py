from typing import Optional
import json
from face_util import compare_faces, face_rec
from sqlalchemy import create_engine, text
import pymysql
import uvicorn

from fastapi import FastAPI, UploadFile, File

app = FastAPI()
db_engine = create_engine("mysql+pymysql://root:my-secret-pw@mariadb/", echo=True, future=True)

@app.post('/face_match')
async def face_match(file: list[UploadFile]=File(...)):
    return len(file)
    
"""     if ('file1' in file) and ('file2' in file):        
        file1 = files.get('file1')
        file2 = files.get('file2')                         
        ret = compare_faces(file1, file2)     
        resp_data = {"match": bool(ret)} # convert numpy._bool to bool for json.dumps
        return json.dumps(resp_data)       """   

@app.post('./face_rec')
async def face_recognition(file: list[UploadFile]=File(...)):
    if 'file' in files:
        file = files.get('file')                          
        name = face_rec(file)    
        resp_data = {'name': name }
        return json.dumps(resp_data)

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/items/{item_id}")
def read_item(item_id: int, q: Optional[str] = None):
    return {"item_id": item_id, "q": q}

with db_engine.connect() as db_conn:
    result = db_conn.execute(text("select 'hello world'"))
    print(result.all())