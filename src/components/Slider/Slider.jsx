import React from 'react';

const Slider = () => {
    return (
        <div className="relative w-full overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out">
                {/* Example slides */}
                <div className="min-w-full">
<img src="/images/website-img-1.jpg" alt="Slide 1" className="w-full" />
<img src="/images/website-img-2.webp" alt="Slide 2" className="w-full" />
<img src="/images/website-img-3.jpg" alt="Slide 3" className="w-full" />

                </div>
            </div>
            {/* Navigation buttons */}
            <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full">Prev</button>
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full">Next</button>
        </div>
    );
};

export default Slider;
