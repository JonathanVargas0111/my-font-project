import { Roboto } from 'next/font/google';
import Image from 'next/image'

const roboto = Roboto({
    weight: '400', // Aquí especifica el peso deseado, por ejemplo, '400' para regular.
    subsets: ['latin'],
});

function CallToActions() {
    return (
        <div className="bg-slate-900 px-4 py-8 text-center">
            {/* Utiliza la fuente importada para el título */}
            <h1 className={`text-4xl font-bold ${roboto.className}`}>¡Descubre nuestros nuevos tenis!</h1>
            <Image
                src="/tenis.jpg"
                className="mx-auto mt-4"
                width={500}
                height={500}
                alt="Picture of the author"
            />
            <p className="mt-4">Los tenis más cómodos y elegantes para tus pies.</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">Comprar ahora</button>
        </div>
    );
}

export default CallToActions;

