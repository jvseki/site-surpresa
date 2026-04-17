from flask import Flask, render_template, request, redirect, url_for, session
import os

app = Flask(__name__)

app.secret_key = os.urandom(24)

@app.route('/', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        senha = request.form.get('senha')
        if senha == "251225":
            session["Logado"] = True
            return redirect(url_for('Surpresa'))
        else:
            return render_template('login.html', error="Senha incorreta. Tente novamente.")
        
    return render_template('login.html')

@app.route('/surpresa')
def Surpresa():
    if not session.get("Logado"):
        return redirect(url_for('login'))
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
 