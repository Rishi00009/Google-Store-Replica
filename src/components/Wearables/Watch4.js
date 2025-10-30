import fitbitpremiumimg from './Fitbitpremiumimg.png';
import watchadopter from './watchadopter.png';
import Straps from './Straps.png';
import watch4add from './watch4add.png';
import { products, disclaimerFootnotes } from '../../data/products';

export default function Watch4() {
    return (
        <div>
            <div className="flex flex-col items-center py-8 bg-gray-50">
                <div className="w-[1150px]">
                    <img 
                        src={watch4add} 
                        className="w-full h-[600px] rounded-3xl shadow-lg mb-6" 
                        alt="Pixel Watch 4" 
                    />
                    <div className="text-left">
                        <p className='text-3xl text-gray-900 leading-tight font-roboto'>
                            The Pixel Watch 4 is your most <br/> 
                            advanced fitness watch yet.
                        </p>
                        <p className='my-5 text-gray-800'>
                            Get personalised health and exercise insights in a stunning design built 
                            <br/>for performance.
                        </p>
                        <a href="./" className="text-blue-600">Read the article</a>
                    </div>
                </div>
            </div>

            <div className='bg-gray-100 mt-20 mx-20 rounded-3xl gap-6'>
                <div className='flex flex-row justify-center'>
                    <img 
                        src={fitbitpremiumimg} 
                        className="w-[450px] h-[500px] rounded-3xl" 
                        alt="fitbitapp" 
                    />
                    <div className='ml-20 pl-20 pt-20 mt-10'>
                        <p className='text-gray-600'>Fitbit Premium</p>
                        <p className='text-3xl pt-6 font-semibold'>The full force of Fitbit <br/>at your fingertips.</p>
                        <p className='pt-6 text-gray-900'>Get advanced insights, personalised recommendations, and <br/>energising workouts.<sup>2,4</sup></p>
                        <button className='mt-5 py-2 px-4 border border-black rounded-3xl hover:bg-black hover:text-white transition duration-300'>
                            Learn more
                        </button>
                    </div>
                </div>
            </div>

            <div className='flex flex-col py-8 bg-gray-50'>
                <div className='p-28 mx-20'>
                    <p className='text-6xl font-roboto pb-10'>Style and power your <br/>watch or tracker.</p>
                    <a href='./' className='text-blue-600 pt-10'>Browse all accessories</a>
                </div>
            </div>

            <div className='flex flex-row justify-center'>
                <div className='flex flex-col bg-gray-50'>
                    <img 
                        src={Straps} 
                        className="w-[350px] h-[300px]" 
                        alt="Strap" 
                    />
                    <p className='text-xl'>Bands</p>
                    <a href='./' className='text-blue-600 mt-5'>Browse</a>
                </div>
                <div className='flex flex-col bg-gray-50 ml-10'>
                    <img 
                        src={watchadopter} 
                        className="w-[350px] h-[300px]" 
                        alt="Power adapter" 
                    />
                    <p className='text-xl'>Power cables and adapters</p>
                    <a href='./' className='text-blue-600 mt-5'>Browse</a>
                </div>
            </div>
            
            {/* Products Grid Section */}
            <div className="mt-16 mx-28 px-20">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Wait, there's even more to love</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {products
                        .filter(product => 
                            product.name === 'Pixel 10 Pro' || 
                            product.name === 'Pixel Buds Pro 2' || 
                            product.name === 'Pixel 10 Pro Fold'
                        )
                        .map((product) => (
                            <div key={product.id} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 border border-gray-100">
                                {product.badge && (
                                    <span className="inline-block bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full mb-4">
                                        {product.badge}
                                    </span>
                                )}
                                
                                <img 
                                    src={product.image} 
                                    alt={product.name} 
                                    className="w-full h-48 object-contain mb-4"
                                />
                                
                                <h2 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h2>
                                <p className="text-gray-600 mb-4">{product.description}</p>
                                
                                <div className="space-y-2 mb-6">
                                    <p className="text-lg font-semibold text-gray-900">{product.monthlyPrice}</p>
                                    <p className="text-gray-600 text-sm">
                                        {product.offer} or <span className="font-bold text-gray-900">{product.price}</span>
                                    </p>
                                </div>
                                
                                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-3xl font-medium transition duration-300">
                                    Buy
                                </button>
                            </div>
                        ))}
                </div>
            </div>
            
            {/* Legal Disclaimers Section */}
            <div className="mt-16 bg-gray-50 py-12 px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-xs text-gray-600 space-y-4">
                        {disclaimerFootnotes.map((footnote) => (
                            <p key={footnote.id} className='flex flex-row'>
                            
                                <p className='mr-1'>{footnote.id}.</p> 
                                <p>{footnote.text}</p>
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}