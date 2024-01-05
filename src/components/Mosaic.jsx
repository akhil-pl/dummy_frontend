import React from 'react'

// import code from "../Images/code.gif";
// import frontend from "../Images/frontend.gif";
// import ml from "../Images/ml.gif";

function Mosaic() {
    return (
        <div className=' py-2 items-center justify-center'>
            {/* Row 1 */}
            <div className='h-64 grid grid-cols-3' style={{ gridTemplateColumns: '45% 30% auto' }}>
                <div className='border bg-blue-300 relative p-4' style={{ clipPath: 'polygon(0 0, 100% 0, 90% 100%, 0 95%)' }}>
                    <span className="absolute top-1/4 left-1/4 text-red-600 text-lg font-bold">Flask</span>
                    <span className="absolute top-1/4 left-1/2 text-green-600 text-xl font-semibold">FastAPI</span>
                    <span className="absolute top-1/4 left-3/4 text-blue-600 text-base font-normal">Django</span>
                    <span className="absolute top-1/2 left-2/4 text-rose-300 text-3xl font-thin">Celery</span>
                </div>
                <div className='border' style={{ clipPath: 'polygon(5% 0, 95% 0, 95% 95%, -5% 95%)', textAlign: 'center', position: 'relative' }}>
                    {/* <img className='mx-auto' src={code} alt="Your Alt Text" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> */}
                </div>
                <div className='border bg-orange-300' style={{ clipPath: 'polygon(5% 0, 100% 0, 100% 93%, 0 105%)', textAlign: 'center', position: 'relative' }}>
                    <h3 className='text-4xl font-bold py-1 text-teal-600' style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(-30deg)' }}>
                        Backend Development
                    </h3>
                </div>
            </div>

            {/* Row 2 */}
            <div className='h-64 grid grid-cols-3' style={{ gridTemplateColumns: '25% 45% auto' }}>
                <div className='border text-center relative bg-orange-300' style={{ clipPath: 'polygon(0 0, 90% 3%, 110% 97%, 0 95%)' }}>
                    <h3 className='text-4xl font-bold py-1 text-teal-600 absolute ' style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(-330deg)' }}>
                        Frontend Development
                    </h3>
                </div>
                <div className='border bg-blue-300 p-4' style={{ clipPath: 'polygon(0 3%, 95% 0,100% 97%, 3% 98%)' }}>
                    <div>Card 5</div>
                </div>
                <div className='border' style={{ clipPath: 'polygon(3% 8%, 100% -3%, 100% 110%, 3% 93%)', textAlign: 'center', position: 'relative' }}>
                    {/* <img className='mx-auto' src={frontend} alt="Your Alt Text" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> */}
                </div>
            </div>

            {/* Row 3 */}
            <div className='h-64 grid grid-cols-3' style={{ gridTemplateColumns: '30% 25% auto' }}>
                <div className='border' style={{ clipPath: 'polygon(0 -3%, 95% 5%, 105% 100%, 0 100%)', textAlign: 'center', position: 'relative' }}>
                    {/* <img className='mx-auto' src={ml} alt="Your Alt Text" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> */}
                </div>
                <div className='border bg-orange-300' style={{ clipPath: 'polygon(-5% 3%, 95% 5%, 105% 100%, 8% 100%)', textAlign: 'center', position: 'relative' }}>
                    <h3 className='text-4xl font-bold py-1 text-teal-600' style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(-30deg)' }}>
                        Machine Learning
                    </h3>
                </div>
                <div className='border bg-blue-300 p-4' style={{ clipPath: 'polygon(-5% 3%, 100% 6%, 100% 100%, 9% 100%)' }}>
                    <div>Card 9</div>
                </div>
            </div>
        </div>
    )
}

export default Mosaic