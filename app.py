import os
from flask import Flask, render_template

app = Flask(__name__)

UPLOAD_FOLDER = 'static/uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/quiz')
def quiz():
    return render_template('hi.html')
@app.route("/kids")
def kids():
    
    return render_template('blue.html')

@app.route("/teens")
def teens():
    return render_template('pink.html')

@app.route("/adults")
def adults():
    return render_template('white.html')

@app.route("/pinkM")
def pinkM():
    return render_template('models.html')

@app.route("/blueM")
def blueM():
    return render_template('models2.html')


if __name__ == "__main__":
    app.run(debug=True)
