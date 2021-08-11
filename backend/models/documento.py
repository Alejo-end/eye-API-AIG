
from typing import Optional

from sqlalchemy.orm import relationship
from sqlalchemy import Integer, Column, String, Boolean
from sqlalchemy.sql.sqltypes import Numeric

from models.base import Base, timestamps

class Documento(Base):
    __tablename__ = 'documentos'
    id = Column(Integer, primary_key=True)
    nombre = Column(String(255), nullable=False)
    descripcion = Column(String(255), nullable=True)
    url = Column(String(255), nullable=True)
    persona = relationship('Persona', back_populates='id')
    creado_fecha = Column(Integer, nullable=False)
    actualizado_fecha = Column(Integer, nullable=False)
    tipo = Column(String(255), nullable=True)
    created_at, updated_at = timestamps()

    def __repr__(self) -> str:
        return f"Resource(id={self.id!r}, name={self.name!r}, owner_id={self.owner_id!r})"