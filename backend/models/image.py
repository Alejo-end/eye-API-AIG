from .base import Base, timestamps

from sqlalchemy import Column, Integer, String, ForeignKey, BLOB

class Image(Base):

	__tablename__ = "imagen"

	id = Column(Integer, primary_key=True)
	nombre = Column(String(128), nullable=False, index=True)
	apellido = Column(String(128), nullable=False, index=True)
	imagen = Column(BLOB, nullable=False)

	created_at, created_by = timestamps()
