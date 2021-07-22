""" a function that using OCR library writes text from a picture"""

from PIL import Image
import pytesseract
import cv2
import os


def ocr(path):
    """
    :param path: path to a picture
    :return: text from picture
    """
    # read image
    img = cv2.imread(path)
    # convert to grayscale
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    # remove noise
    kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (1, 1))
    # close gaps
    closing = cv2.morphologyEx(gray, cv2.MORPH_CLOSE, kernel)
    # convert to binary image
    _, bw = cv2.threshold(closing, 0.0, 255.0, cv2.THRESH_BINARY | cv2.THRESH_OTSU)
    # save binary image
    cv2.imwrite(path, bw)
    # read text from picture
    text = pytesseract.image_to_string(Image.open(path))
    return text
