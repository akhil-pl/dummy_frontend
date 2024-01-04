import React from 'react';

function Collage() {
  return (
    <div className='bg-amber-200 p-5 items-center justify-center'>
      {/* Row 1 */}
      <div className='h-64 grid grid-cols-3' style={{ gridTemplateColumns: '45% 30% auto' }}>
        <div className='border bg-slate-400 p-4' style={{ clipPath: 'polygon(0 0, 100% 0, 90% 100%, 0 95%)' }}>
          <div>Card 1</div>
        </div>
        <div className='border bg-orange-300 p-4' style={{ clipPath: 'polygon(5% 0, 95% 0, 95% 95%, -5% 95%)' }}>
          <div>Card 2</div>
        </div>
        <div className='border bg-teal-400 p-4' style={{ clipPath: 'polygon(5% 0, 100% 0, 100% 93%, 0 105%)' }}>
          <div>Card 3</div>
        </div>
      </div>

      {/* Row 2 */}
      <div className='h-64 grid grid-cols-3' style={{ gridTemplateColumns: '25% 45% auto' }}>
        <div className='border bg-teal-400 p-4' style={{ clipPath: 'polygon(0 0, 90% 3%, 110% 97%, 0 95%)' }}>
          <div>Card 4</div>
        </div>
        <div className='border bg-slate-400 p-4' style={{ clipPath: 'polygon(0 3%, 95% 0,100% 97%, 3% 98%)' }}>
          <div>Card 5</div>
        </div>
        <div className='border bg-orange-300 p-4' style={{ clipPath: 'polygon(3% 8%, 100% -3%, 100% 110%, 3% 93%)' }}>
          <div>Card 6</div>
        </div>
      </div>

      {/* Row 3 */}
      <div className='h-64 grid grid-cols-3' style={{ gridTemplateColumns: '30% 25% auto' }}>
        <div className='border bg-orange-300 p-4' style={{ clipPath: 'polygon(0 -3%, 95% 5%, 105% 100%, 0 100%)' }}>
          <div>Card 7</div>
        </div>
        <div className='border bg-teal-400 p-4' style={{ clipPath: 'polygon(-5% 3%, 95% 5%, 105% 100%, 8% 100%)' }}>
          <div>Card 8</div>
        </div>
        <div className='border bg-slate-400 p-4' style={{ clipPath: 'polygon(-5% 3%, 100% 6%, 100% 100%, 9% 100%)' }}>
          <div>Card 9</div>
        </div>
      </div>
    </div>
  );
}

export default Collage;
