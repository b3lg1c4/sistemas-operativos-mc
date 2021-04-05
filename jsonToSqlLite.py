import json
from sqlite3 import *


def connectToSqlite():
    connection = None
    try:
        connection = connect("preguntas.db")
    except Error as e:
        print(e)

    finally:
        return connection


def getJson():
    jsonFile = open("assets/preguntas.json", encoding="utf8")
    jsonData = json.load(jsonFile)

    return jsonData


def createTablesIfTheyAreNotCreated(conn):

    cur = conn.cursor()

    preguntasStatement = "CREATE TABLE IF NOT EXISTS preguntas("\
        "id_pregunta integer PRIMARY KEY,"\
        "pregunta text"\
        ")"

    respuestasStatement = "CREATE TABLE IF NOT EXISTS respuestas("\
        "id_pregunta integer,"\
        "respuesta text,"\
        "esCorrecta integer,"\
        "FOREIGN KEY(id_pregunta) REFERENCES preguntas(id_pregunta)"\
        ")"

    cur.execute(preguntasStatement)
    cur.execute(respuestasStatement)


def insertPregunta(conn, pregunta):
    cur = conn.cursor()
    preguntaString = pregunta["pregunta"]
    idPregunta = pregunta["id_pregunta"]
    queryParameters = (
        idPregunta,
        preguntaString
    )

    cur.execute(
        '''INSERT OR IGNORE INTO preguntas (id_pregunta,pregunta) VALUES (?,?)''', queryParameters)
    conn.commit()


def insertRespuestas(conn, pregunta):
    cur = conn.cursor()
    idPregunta = pregunta["id_pregunta"]
    respuestas = pregunta["respuestas"]
    for respuesta in respuestas:
        queryParameters = (
            idPregunta,
            respuesta["respuesta"],
            respuesta["esCorrecta"]
        )
        cur.execute(
            '''INSERT OR IGNORE INTO respuestas (id_pregunta,respuesta,esCorrecta) VALUES (?,?,?)''', queryParameters)
        conn.commit()


def insertData(connection, preguntas):
    createTablesIfTheyAreNotCreated(connection)
    for pregunta in preguntas:
        insertPregunta(connection, pregunta)
        insertRespuestas(connection, pregunta)


def main():

    connection = connectToSqlite()
    json = getJson()["preguntas"]
    insertData(connection, json)


main()
