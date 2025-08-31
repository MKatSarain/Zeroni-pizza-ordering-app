from flask import Flask, request, redirect, render_template, session
import configparser

app = Flask(__name__)
app.secret_key = "your_secret_key"  # Make this more secure in production!

# FUNCTIONS


# ROUTES
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/faq')
def faq():
    return render_template('faq.html')

@app.route('/order')
def order():
    if 'cart' not in session:
        session['cart'] = []
    return render_template('order.html')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5001)
    