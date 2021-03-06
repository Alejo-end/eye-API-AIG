# This is a sample Dockerfile you can modify to deploy your own app based on face_recognition

FROM python:3.7-slim-stretch

WORKDIR /usr/src/app/backend/
RUN apt-get -y update
RUN apt-get install -y --fix-missing \
    build-essential \
    cmake \
    gfortran \
    git \
    wget \
    curl \
    graphicsmagick \
    libgraphicsmagick1-dev \
    libatlas-base-dev \
    libavcodec-dev \
    libavformat-dev \
    libgtk2.0-dev \
    libjpeg-dev \
    liblapack-dev \
    libswscale-dev \
    pkg-config \
    python3-dev \
    python3-numpy \
    software-properties-common \
    zip \
    && apt-get clean && rm -rf /tmp/* /var/tmp/*

RUN cd ~ && \
    mkdir -p dlib && \
    git clone -b 'v19.9' --single-branch https://github.com/davisking/dlib.git dlib/ && \
    cd  dlib/ && \
    python3 setup.py install --yes USE_AVX_INSTRUCTIONS

COPY poetry.lock pyproject.toml /usr/src/app/backend/
RUN pip install poetry~=1.1 && \
		poetry config virtualenvs.create false && \
		poetry install --no-dev
RUN poetry install
EXPOSE 8000
CMD ["poetry", "run", "uvicorn", "backend.main:app", "--host=0.0.0.0", "--port=8000"]