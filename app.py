from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

CORS(app, resources={r"/api/*": {"origins": "*"}})


@app.route('/')
def index():
	return "server is  running"

@app.route('/api/')
def api():
    return  jsonify({"api":{"status"  : "running"} })
@app.route('/api/languages')
def get_languages():
    languages = [
        {
            'name': 'Python',
            'year_created': 1989,
            'creator': 'Guido van Rossum',
            'typing': 'Dynamic',
            'popular_use_cases': ['Web development', 'Data science', 'Machine learning']
        },
        {
            'name': 'Java',
            'year_created': 1995,
            'creator': 'James Gosling',
            'typing': 'Static',
            'popular_use_cases': ['Web development', 'Mobile development', 'Enterprise applications']
        },
        {
            'name': 'C++',
            'year_created': 1979,
            'creator': 'Bjarne Stroustrup',
            'typing': 'Static',
            'popular_use_cases': ['Systems programming', 'Game development', 'Desktop applications']
        }
    ]
    return jsonify({"data" :languages})

if __name__ == '__main__':
    app.run(debug=True)

