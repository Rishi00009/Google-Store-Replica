import compare from './compare.png';
export default function Compare() {
    return (
        <div className="flex flex-row items-center justify-center text-xl min-h-30 m-10  py-5">
            <img src={compare} className="w-40 h-40 object-contain transition-transform duration-300 hover:scale-110 mr-14" alt="Compare" />
            <p className="text-3xl font-semibold pb-3 pr-10 font-sans">Which is right for you?</p>
            <a href="./" className="flex flex-row items-center text-bold text-lg ml-20 text-blue-500">Compare all > </a>
        </div>
    );
}