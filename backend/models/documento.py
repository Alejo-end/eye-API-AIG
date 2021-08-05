
from typing import Optional

from sqlalchemy.orm import relationship
from sqlalchemy import Integer, Column, String, Boolean
from sqlalchemy.sql.sqltypes import Numeric

from app.models.base import Base, timestamps
from app.models.utils import generate_updated_at_trigger_ddl, get_tablename


class Documento(Base):
    __tablename__ = get_tablename('company')
    id = Column(Integer, primary_key=True)
    nombre = Column(String(255), nullable=False)
    descripcion = Column(String(255), nullable=True)
    url = Column(String(255), nullable=True)
    persona = relationship('Persona', back_populates='id')
    created_at = Column(Integer, nullable=False)
    updated_at = Column(Integer, nullable=False)

    triggers_ddl = {generate_updated_at_trigger_ddl(__tablename__)}

    