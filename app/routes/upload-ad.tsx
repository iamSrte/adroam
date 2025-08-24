import Instruction from '~/components/upload-ad/instruction';
import { ImageUploadCrop } from '~/components/upload-ad/upload-area';

export default function UploadAd() {
  return (
    <div className="m-4 mt-12 px-6 space-y-16 container mx-auto ">
      <h1 className="text-4xl text-center mb-5 md:text-5xl lg:text-6xl">🧭</h1>
      <h1 className="text-3xl font-bold text-center mb-12 md:text-4xl">
        تبلیغت رو منتشر کن!
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
        
        <div className="order-2">
          <Instruction />
        </div>
        {/* <div className="order-1 flex items-center justify-center"> */}
          {/* <div className="w-full max-w-md"> */}
          <ImageUploadCrop />
          {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  );
}
