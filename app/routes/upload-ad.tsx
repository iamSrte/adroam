import DotPattern from '~/components/ui/dot-pattern';
import Instruction from '~/components/upload-ad/instruction';
import ImageUploadCrop from '~/components/upload-ad/upload-area';

export default function UploadAd() {
  return (
    <section className="flex relative min-h-screen items-start justify-center overflow-hidden py-20 px-4">
      <DotPattern
        gap={15}
        dotSize={5}
        proximity={100}
        shockRadius={0}
        shockStrength={0}
        resistance={500}
        returnDuration={1.5}
        baseColor="#EBEEFA"
        activeColor="#2053FA"
        className="absolute inset-0 z-10"
      />
      <div className="relative container space-y-12 z-20">
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          تبلیغت رو منتشر کن!
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-white border rounded-xl lg:gap-12 max-w-6xl mx-auto">
          <div className="bg-gray-100 rounded-t-xl lg:rounded-none lg:rounded-r-xl border-b lg:border-l items-center justify-center p-2">
            <ImageUploadCrop />
          </div>
          <div className="flex items-start justify-center py-10 px-8 lg:px-0 lg:pl-8 ">
            <Instruction />
          </div>
        </div>
      </div>
    </section>
  );
}
