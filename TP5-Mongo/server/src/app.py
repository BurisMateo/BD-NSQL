from flask import Flask, request
from flask.json import jsonify
from flask_pymongo import PyMongo,ObjectId
from flask_cors import CORS



app = Flask(__name__)
app.config['MONGO_URI']='mongodb://localhost/superheros'

CORS (app)

mongo = PyMongo(app)

db = mongo.db.superheros




@app.route('/cargar', methods = ['POST'])
def addSuperHero():
    id = db.insert({
    
    'name' : request.json['name'],
    'superheroName' : request.json['superheroName'],
    'description' : request.json['description'],
    'year' : request.json['year'],
    'house' : request.json['house'],
    'equipment' : request.json['equipment'],
    'img' : request.json['img']
    }) 
    return jsonify(str(ObjectId(id)))



#############################################################GETS###############################################################

##Mostrar todos los datos
@app.route('/all',methods = ['GET'])
def getSuperheros():
    superHeros = []
    for hero in db.find():
        superHeros.append({
            '_id': str(ObjectId(hero['_id'])),
            'name': hero['name'],
            'superheroName':hero['superheroName'],
            'description':hero['description'],
            'year':hero['year'],
            'house':hero['house'],
            'equipment':hero['equipment'],
            'img':hero['img']
        })
    return jsonify(superHeros)
    
##Mostrar un solo dato
@app.route('/details/<id>', methods=['GET'])
def getSuper(id):
    super = db.find_one({'_id': ObjectId(id)})
    print (super)
    return jsonify({
        '_id': str(ObjectId(super['_id'])),
        'name': super['name'],
        'year': super['year'],
        'superheroName':  super['superheroName'],
        'description':  super['description'],
        'house':  super['house'],
        'equipment':  super['equipment'],
        'img':  super['img']
    })

#############################################################/GETS###############################################################



#############################################################DELETE###############################################################

##Eliminar un dato
@app.route('/details/<id>', methods=['DELETE'])
def deleteSuper(id):
    db.delete_one({'_id': ObjectId(id)})
    return 'Mensaje eliminado'

#############################################################/DETELE###############################################################

@app.route('/all/<house>', methods=['GET'])
def getSuperr(house):
    print (house)
    houses = []
    for hero in db.find({'house': house}):
        houses.append ({
        'name' : hero['name'],
        'year': hero['year'],
        'superheroName':  hero['superheroName'],
        'description':  hero['description'],
        'house':  hero['house'],
        'equipment':  hero['equipment'],
        'img':  hero['img']
            }) 
    return jsonify(houses)

@app.route('/all/<nombre>', methods=['GET'])
def getSearch(nombre):
    print (nombre)
    nombree = []
    for hero in db.find({'nombre': nombre}):
        nombree.append ({
        'name' : hero['name'],
        'year': hero['year'],
        'superheroName':  hero['superheroName'],
        'description':  hero['description'],
        'house':  hero['house'],
        'equipment':  hero['equipment'],
        'img':  hero['img']
            }) 
    return jsonify(nombree)


#############################################################UPDATE###############################################################

##Actualizar datos
# @app.route('/details/<id>', methods = ['PUT'])
# def update(id):
#     db.update_one({'_id': ObjectId(id)}, {'$set': {
#             'name': request.json['name'],
#             'superheroName':request.json['superrequest.jsonName'],
#             'description':request.json['description'],
#             'year':request.json['year'],
#             'house':request.json['house'],
#             'equipment':request.json['equipment'],
#             'img':request.json['img']
#     }})

#############################################################/UPDATE###############################################################

if __name__ == '__main__':
    app.run(debug=True)