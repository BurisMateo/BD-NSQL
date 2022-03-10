from flask import Flask
from flask import render_template
from flask import request
import redis

app = Flask(__name__)

def connect_db():
    conexion = redis.StrictRedis(host = '127.0.0.1' , port = '6379' , db = 0)
    if(conexion.ping()):
        print('conectado a la base de datos')
    else:
        print('error...')
    return conexion

@app.route('/')
def index():
    return "INDEX"

@app.route('/add')
def add():
        if (request.method == 'GET'):
            episodio = request.args.get ('episodio')
            valor = request.args.get ('valor')
            print(valor, episodio)
            r = connect_db()
            r.lpush(episodio, valor)

        return render_template("add.html")

@app.route('/del')
def dell():
    return render_template("del.html")

@app.route('/listar')
def listar(capitulo):
           if (request.method == 'GET'):
               r = connect_db()
               capitulos = request.args.get('capitulo')
               estado = r.get(capitulo)
               print(estado)

           return render_template("listar.html", caps = capitulos, estado = estado)

if __name__ == '__main__':
    app.run(host = 'localhost', port = '5000', debug = False)

