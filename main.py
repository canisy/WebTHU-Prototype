from flask import Flask, render_template
from datetime import date, datetime

app = Flask(__name__)
LOCALE = {'About': 'Tentang', 'Services': 'Layanan', 'Business': 'Bisnis', 'Contact': 'Kontak', 'Career': 'Karir'}


@app.context_processor
def const_time():
    return dict(LOCALE=LOCALE, solar=date.today().year,
                lunar=datetime.strptime(str(date.today().month), '%m').strftime('%b'))


@app.route('/', endpoint='index')
def fun_index():
    return render_template('index.html', title='Index', body_type='index')


@app.route('/debug', endpoint='debug')
def fun_debug():
    return render_template('debug.html', title='Debug', body_type='debug')


if __name__ == '__main__':
    app.run(host='localhost', port=5000, debug=True)
