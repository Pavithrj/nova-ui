import clsx from 'clsx';
import Marker from './Marker';

const Button = ({ icon, children, href, containerClassName, onclick, markerFill }) => {
    const Inner = () => (
        <>
            <span className="relative flex items-center min-h-[60px] px-4 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden">
                <span className="absolute -left-[1px]">
                    <Marker markerFill={markerFill} />
                </span>

                {icon &&
                    <img src={icon} alt="circle" className="z-10 object-contain mr-5 size-10" />
                }

                <span className="relative uppercase z-2 font-poppins base-bold text-p1">
                    {children}
                </span>
            </span>

            <span className="glow-before glow-after" />
        </>
    );

    return href ?
        <a href={href} className={clsx("relative p-0.5 g5 rounded-2xl shadow-500 group", containerClassName)}>
            <Inner />
        </a>
        :
        <button className={clsx("relative p-0.5 g5 rounded-2xl shadow-500 group", containerClassName)} onClick={onclick}>
            <Inner />
        </button>
};

export default Button;
