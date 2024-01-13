import { LoginBG } from '../assets';
import { FcGoogle } from 'react-icons/fc';

const Authentication = () => {
  return (
    <div
      style={{
        background: `url(${LoginBG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className='w-screen h-screen flex justify-center items-center px-4 py-6'
    >
      <div
        className='w-full lg:w-96 px-4 py-6 rounded-md backdrop-blur-md flex justify-center items-center flex-col gap-8'
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
      >
        <div className='flex flex-col justify-center items-center gap-2'>
          <p className='text-2xl text-white'>Welcome Back!</p>
          <p className='text-lg text-gray-400'>Sign in to access your store</p>
        </div>

        <div className='w-full lg:w-auto px-4 py-3 rounded-md flex items-center justify-center border border-gray-200 cursor-pointer gap-4 active:scale-95 transition-all duration-150 ease-in-out'>
          <FcGoogle className='text-3xl' />
          <p className='text-lg font-semibold text-white'>Sign in with Gmail</p>
        </div>
      </div>
    </div>
  );
};
export default Authentication;
