import { Roboto, Montserrat } from 'next/font/google';

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
});

const montserrat = Montserrat({
    subsets: ['latin'],
});

function ProductSection() {
    return (
        <div className='text-center p-5'>
            <h2 className={`text-3xl font-bold my-12 ${roboto.className}`}>Nuestros Productos</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="border p-4 rounded-lg">
                    <img src="/tenis.jpg" alt="Producto 1" className="w-full mb-2" />
                    <h3 className={`text-lg font-bold ${montserrat.className}`}>Producto</h3>
                    <p className="text-gray-700">Precio: $99.99</p>
                </div>
                <div className="border p-4 rounded-lg">
                    <img src="/tenis.jpg" alt="Producto 1" className="w-full mb-2" />
                    <h3 className={`text-lg font-bold ${montserrat.className}`}>Producto</h3>
                    <p className="text-gray-700">Precio: $99.99</p>
                </div>
                <div className="border p-4 rounded-lg">
                    <img src="/tenis.jpg" alt="Producto 1" className="w-full mb-2" />
                    <h3 className={`text-lg font-bold ${montserrat.className}`}>Producto</h3>
                    <p className="text-gray-700">Precio: $99.99</p>
                </div>
                <div className="border p-4 rounded-lg">
                    <img src="/tenis.jpg" alt="Producto 1" className="w-full mb-2" />
                    <h3 className={`text-lg font-bold ${montserrat.className}`}>Producto</h3>
                    <p className="text-gray-700">Precio: $99.99</p>
                </div>
            </div>
        </div>
    );
}

export default ProductSection;
