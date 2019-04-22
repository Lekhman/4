from bottle import route, run, view, response
from datetime import datetime as dt
import random
from horoskope import generate_prophecies


# @route("/")
# @view("predictions")
# def index():
#   now = dt.now()
#
#   x = random.random()
#
#   return {
#     "date": f"{now.year}-{now.month}-{now.day}",
#     "predictions": generate_prophecies(),
#     "special_date": x > 0.5,
#     "x": x,
#   }

@route("/api/forecastst")
def api_test():
    return {"prophecies": generate_prophecies(6,2)}

run(
  host="localhost",
  port=8000,
  autoreload=True
)