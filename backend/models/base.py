from sqlalchemy.ext.declarative import declarative_base, DeclarativeMeta
from sqlalchemy import Column, TIMESTAMP, func

Base: DeclarativeMeta = declarative_base()


def timestamps(indexed: bool = False):
    return (
        Column(
            TIMESTAMP(timezone=True),
            server_default=func.now(),
            nullable=False,
            index=indexed,
        ),
        Column(
            "updated_at",
            TIMESTAMP(timezone=True),
            server_default=func.now(),
            nullable=False,
            index=indexed,
        ),
    )