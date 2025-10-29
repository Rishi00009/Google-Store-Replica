import watch4add from './watch4add.png';

export default function Watch4() {
    return (
        <div className="flex flex-col items-center py-8 bg-gray-50">
            <div className="w-[1150px]">
                <img 
                    src={watch4add} 
                    className="w-full h-[600px] rounded-3xl shadow-lg mb-6" 
                    alt="Pixel Watch 4" 
                />
                <div className="text-left">
                    <p className='text-3xl  text-gray-900 leading-tight font-roboto'>
                        The Pixel Watch 4 is your most <br/> 
                        advanced fitness watch yet.
                    </p>
                    <p className='my-5 text-gray-800'>
                        Get personalised health and exercise insights in a stunning design built 
                        <br/>for performance.
                    </p>
                    <a href="./" className="text-blue-600">Read the article  </a>
                </div>
            </div>
        </div>
    );
}