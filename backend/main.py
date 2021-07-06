from typing import Optional, List, Tuple
import json
from face_util import compare_faces, face_rec, image_has_face
from sqlalchemy import create_engine, text
import pymysql
import uvicorn

from fastapi import FastAPI, UploadFile, File, HTTPException, status

app = FastAPI()
""" db_engine = create_engine("mysql+pymysql://root:my-secret-pw@mariadb/", echo=True, future=True) """
db_engine = create_engine("sqlite+pysqlite:///:memory:", echo=True, future=True)


@app.post("/compare_faces")
async def face_match(files: List[UploadFile] = File(...)):
    if len(files) != 2:
        raise HTTPException(status.HTTP_400_BAD_REQUEST, detail="Tiene que ser dos imagenes")

    for image in files:
        if image.content_type not in ("image/jpeg", "image/png"):
            raise HTTPException(
                status.HTTP_400_BAD_REQUEST, detail="Deben ser imagenes en formato jpeg, o png."
            )

    resultado = compare_faces(files[0].file, files[1].file)
    return {"Resultado": str(resultado)}


@app.post("/face_rec")
async def face_rec(file: UploadFile = File(...)):
    if file.content_type not in ("image/jpeg", "image/png"):
        raise HTTPException(
            status.HTTP_400_BAD_REQUEST, detail="Deben ser una imagen en formato jpeg, o png."
        )

    resultado = face_rec(file.file)
    return {"Persona": str(resultado)}


@app.post("/add_face")
async def add_image_to_db(file: UploadFile = File(...)):
    print(file)
    if file.content_type not in ("image/jpeg", "image/png"):
        raise HTTPException(
            status.HTTP_400_BAD_REQUEST, detail="Deben ser una imagen en formato jpeg, o png."
        )

    if not image_has_face(file):
        raise HTTPException(
            status.HTTP_400_BAD_REQUEST, detail="No se detectan caras en esta imagen"
        )

    # with db_engine.connect() as conn:
    #     conn.execute(text("""

    #     """))

    return {"resultado": "Se ha guardado la imagen en la base de datos"}


with db_engine.connect() as db_conn:
    result = db_conn.execute(text("SELECT 'Base de datos conectada'"))
    print(result.all())
