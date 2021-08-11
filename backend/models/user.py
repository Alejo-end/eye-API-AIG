
from typing import Optional, TYPE_CHECKING

from sqlalchemy.orm import relationship
from sqlalchemy import Integer, Column, String, Boolean, ForeignKey

from models.base import Base, timestamps

if TYPE_CHECKING:
    from models.image import Image


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True)
    nombre = Column(String(64), nullable=False, unique=True, index=True)
    correo = Column(String(64), nullable=False, unique=True, index=True)
    salt = Column(String(128), nullable=False)
    contrasena = Column(String(128), nullable=False)
    esta_activo = Column(Boolean, nullable=False, server_default="1")
    imagenes = relationship(
        "Image",
        primaryjoin="User.id==Image.owner_id",
    )
    created_at, updated_at = timestamps()


    def __repr__(self) -> str:
        return f"User(id={self.id!r}, nombre={self.nombre!r})"