import { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from '~/components/ui/dialog';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '~/components/ui/drawer';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '~/components/ui/input-otp';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { Button } from '~/components/ui/button';

import useMediaQuery from '~/hooks/use-media-query';

interface SubmissionFlowProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SubmissionFlow({ open, onOpenChange }: SubmissionFlowProps) {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  useEffect(() => {
    if (!open) {
      setTimeout(() => {
        setStep(1);
        setPhoneNumber('');
        setOtp('');
        setIsLoading(false);
      }, 300);
    }
  }, [open]);

  const handlePhoneSubmit = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    setStep(2);
  };

  const handleOtpSubmit = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    setStep(3);
  };

  const closeAndReset = () => {
    onOpenChange(false);
  };

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[425px]" showCloseButton={false}>
          {step === 1 && (
            <>
              <DialogHeader>
                <DialogTitle className="text-start">
                  تایید شماره تلفن
                </DialogTitle>
                <DialogDescription className="text-start">
                  برای ثبت آگهی، لطفا شماره تلفن همراه خود را وارد کنید.
                </DialogDescription>
              </DialogHeader>
              <div className="pt-2 flex flex-col items-start gap-2">
                <Label htmlFor="phone">شماره تلفن</Label>
                <Input
                  id="phone"
                  dir="ltr"
                  maxLength={11}
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="0912 345 6789"
                  disabled={isLoading}
                />
              </div>
              <DialogFooter>
                <Button
                  onClick={handlePhoneSubmit}
                  disabled={phoneNumber.length != 11 || isLoading}
                >
                  {isLoading && (
                    <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                  )}
                  {isLoading ? 'در حال ارسال...' : 'ارسال کد تایید'}
                </Button>
                <DialogClose asChild>
                  <Button variant="outline" disabled={isLoading}>
                    انصراف
                  </Button>
                </DialogClose>
              </DialogFooter>
            </>
          )}
          {step === 2 && (
            <>
              <DialogHeader>
                <DialogTitle className="text-start">
                  کد تایید را وارد کنید
                </DialogTitle>
                <DialogDescription className="text-start">
                  کد ۶ رقمی ارسال شده به شماره {phoneNumber} را وارد کنید.
                </DialogDescription>
              </DialogHeader>
              <div className="p-4 flex justify-center">
                <InputOTP
                  maxLength={6}
                  value={otp}
                  onChange={(value) => setOtp(value)}
                >
                  <InputOTPGroup dir="ltr">
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </div>
              <DialogFooter>
                <Button
                  onClick={handleOtpSubmit}
                  disabled={otp.length < 6 || isLoading}
                >
                  {isLoading && (
                    <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                  )}
                  {isLoading ? 'در حال تایید...' : 'تایید و ارسال آگهی'}
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setStep(1)}
                  disabled={isLoading}
                >
                  ویرایش شماره
                </Button>
              </DialogFooter>
            </>
          )}
          {step === 3 && (
            <>
              <DialogHeader>
                <DialogTitle className="text-start">
                  ✅ درخواست شما با موفقیت ثبت شد!
                </DialogTitle>
                <DialogDescription className="text-start">
                  آگهی شما برای کارشناسان ما ارسال شد و به زودی با شما تماس
                  خواهند گرفت.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose asChild>
                  <Button onClick={closeAndReset} className="mt-2 w-full">
                    بستن
                  </Button>
                </DialogClose>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent>
        {step === 1 && (
          <>
            <DrawerHeader>
              <DrawerTitle>تایید شماره تلفن</DrawerTitle>
              <DrawerDescription>
                برای ثبت آگهی، لطفا شماره تلفن همراه خود را وارد کنید.
              </DrawerDescription>
            </DrawerHeader>
            <div className="px-4 pt-2 flex flex-col items-start gap-2">
              <Label htmlFor="phone">شماره تلفن</Label>
              <Input
                id="phone"
                dir="ltr"
                maxLength={11}
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="0912 345 6789"
                disabled={isLoading}
              />
            </div>
            <DrawerFooter>
              <Button
                onClick={handlePhoneSubmit}
                disabled={phoneNumber.length != 11 || isLoading}
              >
                {isLoading && <Loader2 className="ml-2 h-4 w-4 animate-spin" />}
                {isLoading ? 'در حال ارسال...' : 'ارسال کد تایید'}
              </Button>
              <DrawerClose asChild>
                <Button variant="outline" disabled={isLoading}>
                  انصراف
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </>
        )}
        {step === 2 && (
          <>
            <DrawerHeader>
              <DrawerTitle>کد تایید را وارد کنید</DrawerTitle>
              <DrawerDescription>
                کد ۶ رقمی ارسال شده به شماره {phoneNumber} را وارد کنید.
              </DrawerDescription>
            </DrawerHeader>
            <div className="p-4 flex justify-center">
              <InputOTP
                maxLength={6}
                value={otp}
                onChange={(value) => setOtp(value)}
              >
                <InputOTPGroup dir="ltr">
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>
            <DrawerFooter>
              <Button
                onClick={handleOtpSubmit}
                disabled={otp.length < 6 || isLoading}
              >
                {isLoading && <Loader2 className="ml-2 h-4 w-4 animate-spin" />}
                {isLoading ? 'در حال تایید...' : 'تایید و ارسال آگهی'}
              </Button>
              <Button
                variant="outline"
                onClick={() => setStep(1)}
                disabled={isLoading}
              >
                ویرایش شماره
              </Button>
            </DrawerFooter>
          </>
        )}
        {step === 3 && (
          <>
            <DrawerHeader>
              <DrawerTitle>✅ درخواست شما با موفقیت ثبت شد!</DrawerTitle>
              <DrawerDescription>
                آگهی شما برای کارشناسان ما ارسال شد و به زودی با شما تماس خواهند
                گرفت.
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button onClick={closeAndReset} className="w-full">
                  بستن
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </>
        )}
      </DrawerContent>
    </Drawer>
  );
}
