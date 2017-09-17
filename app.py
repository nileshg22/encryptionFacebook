from flask import Flask, request, send_file, jsonify
from flask_cors import CORS
import pickle, numpy as np, cv2
from LSBSteg import LSBSteg

app = Flask(__name__)
CORS(app)
@app.route('/', methods=['GET'])
def hello():
    return 'You just made a GET request'

@app.route('/encode', methods=['POST'])
def encode():
    if request.method == 'POST':
        f = request.files['image']
        f.save('prof_pic_encoded.png')
        hash = request.form['hash'].strip()
        img = LSBSteg(cv2.imread('prof_pic_encoded.png'))
        print(hash)
        txt = img.decode_text()
        print('facebook' in txt)
        if 'facebook' not in txt or txt == hash:
            cv2.imwrite('prof_pic_secure.png', img.encode_text(hash))
            return_img = send_file('prof_pic_secure.png')
            return return_img
        else:
            return 'False'


@app.route('/test', methods=['POST'])
def test():
    if request.method == 'POST':
        string = request.form['string']
        
    return 'Good job!'

app.run(debug=True, port=3000)