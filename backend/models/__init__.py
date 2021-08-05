
from .base import Base as Base
from .user import User as User

from .image import Image as Image
from .documento import Documento as Documento

models = {User, Documento, Image}