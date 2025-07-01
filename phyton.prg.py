from flask import Flask

app = Flask(__name__)

# Sample product data
products = [
    {"name": "Smartphone", "price": "$299"},
    {"name": "Laptop", "price": "$799"},
    {"name": "Headphones", "price": "$49"},
    {"name": "Smartwatch", "price": "$199"}
]

@app.route('/')
def home():
    return """
    <h1>Welcome to Electro HRS!</h1>
    <p>Your one-stop shop for electronics.</p>
    <a href='/products'>View Products</a>
    """

@app.route('/products')
def show_products():
    product_list = "<ul>"
    for product in products:
        product_list += f"<li>{product['name']} - {product['price']}</li>"
    product_list += "</ul>"
    return f"""
    <h1>Our Products</h1>
    {product_list}
    <a href='/'>Back to Home</a>
    """

if __name__ == '__main__':
    app.run(debug=True)
    