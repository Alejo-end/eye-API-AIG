
from typing import Optional, TYPE_CHECKING

from sqlalchemy.orm import relationship
from sqlalchemy import Integer, Column, String, Boolean, ForeignKey

from app.models.base import Base, timestamps
from app.models.utils import generate_updated_at_trigger_ddl, get_tablename

if TYPE_CHECKING:
    from app.models.image import Image


class User(Base):
    __tablename__ = get_tablename("users")

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

    triggers_ddl = {generate_updated_at_trigger_ddl(__tablename__)}

    def __repr__(self) -> str:
        return f"User(id={self.id!r}, nombre={self.nombre!r})"