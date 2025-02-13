from flask import Flask,request, render_template, redirect, url_for,jsonify
from werkzeug.utils import secure_filename
import mysql.connector
import os
from flask import send_from_directory
import json
import requests

app = Flask(__name__)  

@app.route('/')
def index():
    return render_template('index2.html')

@app.route('/phone_upload.html')
def phone_upload():
    return render_template('phone_upload.html')

@app.route('/phone_result.html')
def phone_result():
    return render_template('phone_result.html')

@app.route('/analyze1.html')
def analyze1():
    return render_template('analyze1.html')

@app.route('/analyze2.html')
def analyze2():
    return render_template('analyze2.html')

@app.route('/test.html')
def test():
    return render_template('test.html')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)