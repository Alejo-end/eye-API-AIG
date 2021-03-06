import face_recognition as fr

# Each face is tuple of (Name,sample image)
# Deberia venir  venir de la BD
known_faces = [
    ("Obama", "imagenes/visa.jpg"),
    ("Peter", "imagenes/pasaporte.jpg"),
]


def image_has_face(file):
    image = fr.load_image_file(file)
    return len(fr.face_encodings(image)) > 0


def compare_faces(file1, file2):
    # Load the jpg files into numpy arrays
    image1 = fr.load_image_file(file1)
    image2 = fr.load_image_file(file2)

    # Get the face encodings for 1st face in each image file
    image1_encoding = fr.face_encodings(image1)[0]
    image2_encoding = fr.face_encodings(image2)[0]

    # Compare faces and return True / False
    results = fr.compare_faces([image1_encoding], image2_encoding)
    return results[0]


def face_rec(file):
    """
    Return name for a known face, otherwise return 'Unknown'.
    """
    image = fr.load_image_file(file)

    for name, known_file in known_faces:
        if compare_faces(known_file, image):
            return name
    return "Unknown"



def get_face_encodings(file):
    image = fr.load_image_file(file)
    return fr.face_encodings(image)

def get_face_names(file):
    image = fr.load_image_file(file)
    return fr.face_names(image)

def get_face_locations(file):
    image = fr.load_image_file(file)
    return fr.face_locations(image)

def get_face_landmarks(file):
    image = fr.load_image_file(file)
    return fr.face_landmarks(image)


def get_face_distances(file1, file2):
    image1 = fr.load_image_file(file1)
    image2 = fr.load_image_file(file2)
    return fr.face_distance([image1], image2)
    


    


