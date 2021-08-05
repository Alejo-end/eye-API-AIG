from .base import Base

from sqlalchemy import Column, Integer, String, ForeignKey

class Persona(Base):

	__tablename__ = "imagen"

	id = Column(Integer, primary_key=True)
	nombre = Column(String(128), nullable=False, )
	apellido
	imagen
