from typing import Optional

from sqlalchemy import create_engine, text
import pymysql

from fastapi import FastAPI

app = FastAPI()
db_engine = create_engine("mysql+pymysql://root:my-secret-pw@mariadb/", echo=True, future=True)

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/items/{item_id}")
def read_item(item_id: int, q: Optional[str] = None):
    return {"item_id": item_id, "q": q}

with db_engine.connect() as db_conn:
    result = db_conn.execute(text("select 'hello world'"))
    print(result.all())
