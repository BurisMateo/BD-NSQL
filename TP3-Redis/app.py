import redis
from flask import Flask
from flask import render_template, request, redirect, url_for

app = Flask(__name__)

def connect_db():
    conexion = redis.StrictRedis(port=6379, db=0, host="127.0.0.1")
    if(conexion.ping()):
        print("conectado a redis")
    else:
        print("error de conexion con redis")
    return conexion

@app.route('/')
def index():
    return render_template('/index.html')

@app.route('/cargar', methods = ['GET', 'POST'])
def cargar():
    if (request.method == 'GET'):
            grupo = request.args.get ('select')
            nombre = request.args.get ('nombre')
            longitud = request.args.get ('longitud')
            latitud = request.args.get ('latitud')
            print(grupo, nombre, latitud, longitud)
            if ((grupo != None) and (longitud != None) and (latitud != None) and (nombre != None)):
                r = connect_db()
                r.geoadd(grupo, longitud, latitud, nombre)

    return render_template('/cargar.html')


@app.route('/location5km', methods = ['GET', 'POST'])
def location5km():
    if (request.method == 'GET'):
            cerve = []
            univ = []
            farm = []
            emer = []
            superr = []
            longitud = request.args.get ('longitud')
            latitud = request.args.get ('latitud')
            print(latitud, longitud)
            if ((longitud != None) and (latitud != None)):
                r = connect_db()
                cerve = r.georadius('cervecerias', longitud ,latitud ,5 , 'km', 'WITHDIST') 
                univ = r.georadius('universidades', longitud ,latitud ,5 , 'km', 'WITHDIST')
                farm = r.georadius('farmacias', longitud ,latitud ,5 , 'km', 'WITHDIST')
                emer = r.georadius('emergencias', longitud ,latitud ,5 , 'km', 'WITHDIST')
                superr = r.georadius('supermercados', longitud ,latitud ,5 , 'km', 'WITHDIST')
    return render_template("location5km.html", cervecerias = cerve, universidades = univ, farmacias = farm, emergencias = emer, supermercados = superr )



if __name__ == '__main__':
    app.run(host='web-app-flask', port='5000', debug=True)