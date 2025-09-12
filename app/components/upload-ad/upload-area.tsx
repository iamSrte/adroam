import { useState, useRef, useCallback, useEffect } from 'react';
import { Upload, Crop, Undo } from 'lucide-react';
import { toast } from 'sonner';

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '~/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';
import { Button } from '~/components/ui/button';
import { EtheralShadow } from '~/components/ui/ethereal-shadow';

interface CropArea {
  x: number;
  y: number;
  width: number;
  height: number;
}

const ASPECT_RATIOS = {
  '1:1': 1,
  '4:3': 4 / 3,
  '16:9': 16 / 9,
  '3:2': 3 / 2,
  '2:3': 2 / 3,
};

const FRAME_ASPECT_RATIOS = [
  { ratio: 1, name: '1:1' },
  { ratio: 4 / 3, name: '4:3' },
  { ratio: 16 / 9, name: '16:9' },
  { ratio: 3 / 2, name: '3:2' },
  { ratio: 2 / 3, name: '2:3' },
];

export function ImageUploadCrop() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [croppedImage, setCroppedImage] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [aspectRatio, setAspectRatio] = useState<string>('16:9');
  const [cropArea, setCropArea] = useState<CropArea>({
    x: 0,
    y: 0,
    width: 200,
    height: 200,
  });
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [resizeHandle, setResizeHandle] = useState<string>('');
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const [frameAspectIndex, setFrameAspectIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(1024);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    updateWindowWidth();

    window.addEventListener('resize', updateWindowWidth);

    return () => window.removeEventListener('resize', updateWindowWidth);
  }, []);

  useEffect(() => {
    if (!croppedImage) {
      const interval = setInterval(() => {
        setFrameAspectIndex((prev) => (prev + 1) % FRAME_ASPECT_RATIOS.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [croppedImage]);

  const handleFileSelect = useCallback((file: File) => {
    if (!file.type.startsWith('image/')) {
      toast.error('فایل انتخاب شده پشتیبانی نمی‌شود! لطفا یک تصویر انتخاب کنید.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      setSelectedImage(result);
      setIsDialogOpen(true);
    };
    reader.readAsDataURL(file);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      const files = Array.from(e.dataTransfer.files);
      if (files.length > 0) {
        handleFileSelect(files[0]);
      }
    },
    [handleFileSelect]
  );

  const handleImageLoad = () => {
    if (imageRef.current) {
      const { width: displayWidth, height: displayHeight } =
        imageRef.current.getBoundingClientRect();

      setImageSize({ width: displayWidth, height: displayHeight });

      const ratio = ASPECT_RATIOS[aspectRatio as keyof typeof ASPECT_RATIOS];
      if (ratio > 0) {
        const cropWidth = Math.min(
          displayWidth * 0.6,
          displayHeight * 0.6 * ratio
        );
        const cropHeight = cropWidth / ratio;
        setCropArea({
          x: (displayWidth - cropWidth) / 2,
          y: (displayHeight - cropHeight) / 2,
          width: cropWidth,
          height: cropHeight,
        });
      } else {
        setCropArea({
          x: displayWidth * 0.2,
          y: displayHeight * 0.2,
          width: displayWidth * 0.6,
          height: displayHeight * 0.6,
        });
      }
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - cropArea.x, y: e.clientY - cropArea.y });
  };

  const handleResizeMouseDown = (e: React.MouseEvent, handle: string) => {
    e.stopPropagation();
    setIsResizing(true);
    setResizeHandle(handle);
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isResizing) {
      const deltaX = e.clientX - dragStart.x;
      const deltaY = e.clientY - dragStart.y;
      const ratio = ASPECT_RATIOS[aspectRatio as keyof typeof ASPECT_RATIOS];

      const newCropArea = { ...cropArea };

      switch (resizeHandle) {
        case 'nw': // Top-left
          newCropArea.x = Math.max(0, cropArea.x + deltaX);
          newCropArea.y = Math.max(0, cropArea.y + deltaY);
          newCropArea.width = Math.max(50, cropArea.width - deltaX);
          newCropArea.height = Math.max(50, cropArea.height - deltaY);
          break;
        case 'ne': // Top-right
          newCropArea.y = Math.max(0, cropArea.y + deltaY);
          newCropArea.width = Math.max(
            50,
            Math.min(cropArea.width + deltaX, imageSize.width - cropArea.x)
          );
          newCropArea.height = Math.max(50, cropArea.height - deltaY);
          break;
        case 'sw': // Bottom-left
          newCropArea.x = Math.max(0, cropArea.x + deltaX);
          newCropArea.width = Math.max(50, cropArea.width - deltaX);
          newCropArea.height = Math.max(
            50,
            Math.min(cropArea.height + deltaY, imageSize.height - cropArea.y)
          );
          break;
        case 'se': // Bottom-right
          newCropArea.width = Math.max(
            50,
            Math.min(cropArea.width + deltaX, imageSize.width - cropArea.x)
          );
          newCropArea.height = Math.max(
            50,
            Math.min(cropArea.height + deltaY, imageSize.height - cropArea.y)
          );
          break;
      }

      if (ratio > 0) {
        if (resizeHandle === 'nw' || resizeHandle === 'se') {
          newCropArea.height = newCropArea.width / ratio;
        } else {
          newCropArea.width = newCropArea.height * ratio;
        }
      }

      newCropArea.width = Math.min(
        newCropArea.width,
        imageSize.width - newCropArea.x
      );
      newCropArea.height = Math.min(
        newCropArea.height,
        imageSize.height - newCropArea.y
      );

      setCropArea(newCropArea);
      setDragStart({ x: e.clientX, y: e.clientY });
    } else if (isDragging) {
      const newX = Math.max(
        0,
        Math.min(e.clientX - dragStart.x, imageSize.width - cropArea.width)
      );
      const newY = Math.max(
        0,
        Math.min(e.clientY - dragStart.y, imageSize.height - cropArea.height)
      );

      setCropArea((prev) => ({ ...prev, x: newX, y: newY }));
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsResizing(false);
    setResizeHandle('');
  };

  const handleAspectRatioChange = (value: string) => {
    setAspectRatio(value);
    const ratio = ASPECT_RATIOS[value as keyof typeof ASPECT_RATIOS];

    if (ratio > 0) {
      const newHeight = cropArea.width / ratio;
      const maxHeight = imageSize.height - cropArea.y;

      if (newHeight <= maxHeight) {
        setCropArea((prev) => ({ ...prev, height: newHeight }));
      } else {
        const newWidth = maxHeight * ratio;
        setCropArea((prev) => ({
          ...prev,
          width: newWidth,
          height: maxHeight,
        }));
      }
    }
  };

  const cropImage = () => {
    if (!imageRef.current || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const image = imageRef.current;
    const { naturalWidth, naturalHeight } = image;
    const { width: displayWidth, height: displayHeight } =
      image.getBoundingClientRect();

    const scaleX = naturalWidth / displayWidth;
    const scaleY = naturalHeight / displayHeight;

    canvas.width = cropArea.width * scaleX;
    canvas.height = cropArea.height * scaleY;

    ctx.drawImage(
      image,
      cropArea.x * scaleX,
      cropArea.y * scaleY,
      cropArea.width * scaleX,
      cropArea.height * scaleY,
      0,
      0,
      canvas.width,
      canvas.height
    );

    const croppedDataUrl = canvas.toDataURL('image/png');
    setCroppedImage(croppedDataUrl);
    setIsDialogOpen(false);

    toast.success('تصویر تبلیغ شما آماده ارسال به کارشناسان ماست!');
  };

  const downloadImage = () => {
    if (!croppedImage) return;

    const link = document.createElement('a');
    link.download = 'cropped-image.png';
    link.href = croppedImage;
    link.click();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    setIsDragging(true);
    setDragStart({
      x: touch.clientX - cropArea.x,
      y: touch.clientY - cropArea.y,
    });
  };

  const handleResizeTouchStart = (e: React.TouchEvent, handle: string) => {
    e.stopPropagation();
    const touch = e.touches[0];
    setIsResizing(true);
    setResizeHandle(handle);
    setDragStart({ x: touch.clientX, y: touch.clientY });
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    // e.preventDefault();
    const touch = e.touches[0];

    if (isResizing) {
      const deltaX = touch.clientX - dragStart.x;
      const deltaY = touch.clientY - dragStart.y;
      const ratio = ASPECT_RATIOS[aspectRatio as keyof typeof ASPECT_RATIOS];

      const newCropArea = { ...cropArea };

      switch (resizeHandle) {
        case 'nw': // Top-left
          newCropArea.x = Math.max(0, cropArea.x + deltaX);
          newCropArea.y = Math.max(0, cropArea.y + deltaY);
          newCropArea.width = Math.max(50, cropArea.width - deltaX);
          newCropArea.height = Math.max(50, cropArea.height - deltaY);
          break;
        case 'ne': // Top-right
          newCropArea.y = Math.max(0, cropArea.y + deltaY);
          newCropArea.width = Math.max(
            50,
            Math.min(cropArea.width + deltaX, imageSize.width - cropArea.x)
          );
          newCropArea.height = Math.max(50, cropArea.height - deltaY);
          break;
        case 'sw': // Bottom-left
          newCropArea.x = Math.max(0, cropArea.x + deltaX);
          newCropArea.width = Math.max(50, cropArea.width - deltaX);
          newCropArea.height = Math.max(
            50,
            Math.min(cropArea.height + deltaY, imageSize.height - cropArea.y)
          );
          break;
        case 'se': // Bottom-right
          newCropArea.width = Math.max(
            50,
            Math.min(cropArea.width + deltaX, imageSize.width - cropArea.x)
          );
          newCropArea.height = Math.max(
            50,
            Math.min(cropArea.height + deltaY, imageSize.height - cropArea.y)
          );
          break;
      }

      if (ratio > 0) {
        if (resizeHandle === 'nw' || resizeHandle === 'se') {
          newCropArea.height = newCropArea.width / ratio;
        } else {
          newCropArea.width = newCropArea.height * ratio;
        }
      }

      newCropArea.width = Math.min(
        newCropArea.width,
        imageSize.width - newCropArea.x
      );
      newCropArea.height = Math.min(
        newCropArea.height,
        imageSize.height - newCropArea.y
      );

      setCropArea(newCropArea);
      setDragStart({ x: touch.clientX, y: touch.clientY });
    } else if (isDragging) {
      const newX = Math.max(
        0,
        Math.min(touch.clientX - dragStart.x, imageSize.width - cropArea.width)
      );
      const newY = Math.max(
        0,
        Math.min(
          touch.clientY - dragStart.y,
          imageSize.height - cropArea.height
        )
      );

      setCropArea((prev) => ({ ...prev, x: newX, y: newY }));
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setIsResizing(false);
    setResizeHandle('');
  };

  const getFrameHeight = () => {
    const baseWidth =
      windowWidth < 640
        ? 240
        : windowWidth < 768
        ? 300
        : windowWidth < 1024
        ? 360
        : 460;
    return baseWidth / FRAME_ASPECT_RATIOS[frameAspectIndex].ratio;
  };

  return (
    <div>
      <div className="flex items-center justify-center w-full h-full border-1 shadow rounded-lg p-4">
        {croppedImage ? (
          <div className="text-center max-w-md space-y-4">
            <div className="relative mx-auto">
              <div className="relative overflow-hidden rounded-lg border bg-card shadow-sm">
                <img
                  src={croppedImage}
                  alt="Cropped result"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="flex justify-center space-x-2">
              <Button onClick={downloadImage} size="sm">
                <Upload />
                ارسال
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setCroppedImage(null);
                  setSelectedImage(null);
                }}
              >
                <Undo />
                انتخاب دوباره
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex max-w-md justify-center">
            <div className="relative w-80 h-80 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] flex items-center justify-center">
              <div
                className="transition-all duration-1000 ease-out"
                style={{
                  width: 'calc(100% - 2rem)',
                  height: `${getFrameHeight()}px`,
                  maxHeight: 'calc(100% - 2rem)',
                }}
              >
                <div
                  className="w-full h-full border-2 border-dashed border-black rounded-lg bg-muted/50 hover:bg-muted/80 transition-colors cursor-pointer flex flex-col items-center justify-center relative"
                  onDrop={handleDrop}
                  onDragOver={(e) => e.preventDefault()}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <EtheralShadow
                    className="absolute inset-0 rounded-lg"
                    color="rgba(50, 150, 255, 1.0)"
                    animation={{ scale: 200, speed: 90 }}
                    noise={{ opacity: 0.3, scale: 1 }}
                  />
                  <div className="text-center space-y-3 z-10">
                    <div className="mx-auto w-12 h-12 bg-black rounded-full flex items-center justify-center">
                      <Upload className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        بارگذاری تبلیغ
                      </p>
                    </div>
                    <div className="absolute top-2 right-2 bg-black border border-white rounded px-2 py-1 text-xs font-medium text-white">
                      {FRAME_ASPECT_RATIOS[frameAspectIndex].name}
                    </div>
                  </div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) handleFileSelect(file);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent
          showCloseButton={false}
          className="max-w-4xl max-h-[90vh]  overflow-auto "
        >
          <DialogHeader>
            <DialogTitle>
              <span className="flex items-center">
                <Crop className="h-5 w-5 ml-2" />
                برش تصویر
              </span>
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <label className="text-sm font-medium">نسبت تصویر:</label>
              <Select
                value={aspectRatio}
                onValueChange={handleAspectRatioChange}
              >
                <SelectTrigger className="w-20">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1:1">1:1</SelectItem>
                  <SelectItem value="4:3">4:3</SelectItem>
                  <SelectItem value="16:9">16:9</SelectItem>
                  <SelectItem value="3:2">3:2</SelectItem>
                  <SelectItem value="2:3">2:3</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {selectedImage && (
              <div className="relative inline-block">
                <img
                  ref={imageRef}
                  src={selectedImage || '/placeholder.svg'}
                  alt="Selected Image"
                  className="max-w-full max-h-96 rounded-lg"
                  onLoad={handleImageLoad}
                  draggable={false}
                />
                <div
                  className="absolute border-2 border-primary bg-primary/10 cursor-move"
                  style={{
                    left: cropArea.x,
                    top: cropArea.y,
                    width: cropArea.width,
                    height: cropArea.height,
                  }}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  <div
                    className="absolute -top-1 -left-1 w-3 h-3 bg-primary border border-background rounded-sm cursor-nw-resize hover:scale-125 transition-transform"
                    onMouseDown={(e) => handleResizeMouseDown(e, 'nw')}
                    onTouchStart={(e) => handleResizeTouchStart(e, 'nw')}
                  ></div>
                  <div
                    className="absolute -top-1 -right-1 w-3 h-3 bg-primary border border-background rounded-sm cursor-ne-resize hover:scale-125 transition-transform"
                    onMouseDown={(e) => handleResizeMouseDown(e, 'ne')}
                    onTouchStart={(e) => handleResizeTouchStart(e, 'ne')}
                  ></div>
                  <div
                    className="absolute -bottom-1 -left-1 w-3 h-3 bg-primary border border-background rounded-sm cursor-sw-resize hover:scale-125 transition-transform"
                    onMouseDown={(e) => handleResizeMouseDown(e, 'sw')}
                    onTouchStart={(e) => handleResizeTouchStart(e, 'sw')}
                  ></div>
                  <div
                    className="absolute -bottom-1 -right-1 w-3 h-3 bg-primary border border-background rounded-sm cursor-se-resize hover:scale-125 transition-transform"
                    onMouseDown={(e) => handleResizeMouseDown(e, 'se')}
                    onTouchStart={(e) => handleResizeTouchStart(e, 'se')}
                  ></div>
                </div>
              </div>
            )}
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => {
                  setIsDialogOpen(false);
                  setCroppedImage(null);
                  setSelectedImage(null);
                }}
              >
                انصراف
              </Button>
              <Button onClick={cropImage}>برش تصویر</Button>
            </DialogFooter>
          </div>
        </DialogContent>
      </Dialog>

      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
}
