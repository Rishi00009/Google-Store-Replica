import { products } from "../../data/products";

export default function Wearables(){
    const watchesData = products.filter(product => 
        product.category === 'watches' || product.category === 'trackers' || product.category === 'compare'
    );

    return(
        <div className="flex flex-col items-center justify-center min-h-96 py-12 bg-gray-50">
           
            <div className="flex w-full h-full overflow-x-auto py-6">
                <div className="flex space-x-1">
                    {watchesData.map((watch) => (
                        <div 
                            key={watch.id} 
                            className="relative flex flex-col items-center bg-white     py-8 min-w-60 border border-gray-100 "
                        >
                            {/* Badge - Absolute positioned */}
                            {watch.badge && (
                                <span className={`absolute -top-2 left-1/2 transform -translate-x-1/2 inline-block text-sm font-medium px-4 py-2 rounded-full z-10 ${
                                    watch.badge === 'Coming soon' 
                                        ? 'bg-green-100 text-green-800 border border-green-200' 
                                        : watch.badge === 'Popular'
                                        ? 'bg-orange-100 text-orange-800 border border-orange-200'
                                        : 'bg-blue-100 text-blue-800 border border-blue-200'
                                }`}>
                                    {watch.badge}
                                </span>
                            )}
                            
                            {/* Product Image */}
                            <div className="bg-gray-50 rounded-xl p-6 mb-6 w-48 h-48 flex items-center justify-center mt-2">
                                <img 
                                    src={watch.image} 
                                    alt={watch.name} 
                                    className="w-32 h-32 object-contain transition-transform duration-300 hover:scale-110" 
                                />
                            </div>
                            
                            {/* Product Info */}
                            <div className="text-center space-y-3">
                                <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                                    {watch.name}
                                </h3>
                            </div>

                            
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}