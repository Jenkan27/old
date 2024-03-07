from flask import Flask, render_template, request, url_for, redirect, flash

app = Flask(__name__)

#index
@app.route('/')
def index():
    return render_template('homepage.html')

#köra appen
if  __name__ == '__main__':
    app.run(debug=True)