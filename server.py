from flask import Flask
from flask import render_template

app = Flask(__name__)#, static_folder='game/game', static_path='/', template_folder='game')

@app.route("/")
def index():
    return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True, port=5051)